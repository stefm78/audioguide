#!/usr/bin/env python3
import argparse
import asyncio
import json
import pathlib
import subprocess
import tempfile

import edge_tts
import imageio_ffmpeg

AGE_ORDER = {"child": 0, "young_adult": 1, "adult": 2, "older": 3}
NUMERIC_TRAITS = {
    "energy": 1.5,
    "authority": 1.4,
    "warmth": 1.0,
    "darkness": 1.1,
    "proximity": 1.0,
}


def load_json(path):
    return json.loads(pathlib.Path(path).read_text(encoding="utf-8"))


def casting_score(target, preset):
    traits = preset["traits"]
    score = 0.0

    gender = target.get("gender", "any")
    if gender != "any" and traits.get("gender") != gender:
        score += 25.0

    age = target.get("age", "any")
    if age != "any":
        score += 7.0 * abs(AGE_ORDER[age] - AGE_ORDER[traits["age"]])

    for key, weight in NUMERIC_TRAITS.items():
        if key in target:
            delta = float(target[key]) - float(traits[key])
            score += weight * delta * delta

    wanted_tags = set(target.get("tags", []))
    preset_tags = set(preset.get("tags", []))
    score -= 2.0 * len(wanted_tags & preset_tags)
    return score


def choose_preset(target, presets):
    ranked = sorted(
        ((casting_score(target, preset), preset) for preset in presets),
        key=lambda item: (item[0], item[1]["id"]),
    )
    return ranked[0][1], ranked[:3]


def resolve_cast(guide, palette):
    presets = palette["presets"]
    by_id = {p["id"]: p for p in presets}
    character_cast = {}
    resolved = []

    for index, segment in enumerate(guide["segments"], start=1):
        character_id = segment.get("character_id") or f"segment-{index}"
        explicit = segment.get("preset")

        if explicit:
            preset = by_id[explicit]
            alternatives = []
        elif character_id in character_cast:
            preset = character_cast[character_id]
            alternatives = []
        else:
            preset, ranked = choose_preset(segment.get("target", {}), presets)
            character_cast[character_id] = preset
            alternatives = [
                {"preset": candidate["id"], "score": round(score, 3)}
                for score, candidate in ranked
            ]

        resolved.append({
            **segment,
            "sequence": index,
            "resolved_preset": preset["id"],
            "voice": preset["voice"],
            "rate": preset["rate"],
            "pitch": preset["pitch"],
            "volume": preset["volume"],
            "casting_alternatives": alternatives,
        })
    return resolved


async def synthesize_segment(segment, path):
    await edge_tts.Communicate(
        segment["text"],
        segment["voice"],
        rate=segment["rate"],
        pitch=segment["pitch"],
        volume=segment["volume"],
    ).save(str(path))


def run_ffmpeg(args):
    subprocess.run(args, check=True)


def silence_file(ffmpeg, directory, duration_ms, cache):
    duration_ms = int(duration_ms)
    if duration_ms <= 0:
        return None
    if duration_ms in cache:
        return cache[duration_ms]

    path = directory / f"silence-{duration_ms}ms.mp3"
    run_ffmpeg([
        ffmpeg,
        "-hide_banner", "-loglevel", "error", "-y",
        "-f", "lavfi", "-i", "anullsrc=r=24000:cl=mono",
        "-t", f"{duration_ms / 1000:.3f}",
        "-c:a", "libmp3lame", "-b:a", "64k",
        str(path),
    ])
    cache[duration_ms] = path
    return path


async def render(guide_path, palette_path):
    guide = load_json(guide_path)
    palette = load_json(palette_path)
    resolved = resolve_cast(guide, palette)

    guide_id = guide["id"]
    output_dir = pathlib.Path("audio/guides") / guide_id
    output_dir.mkdir(parents=True, exist_ok=True)
    final_path = output_dir / "guide.mp3"
    ffmpeg = imageio_ffmpeg.get_ffmpeg_exe()
    print(f"Using bundled ffmpeg: {ffmpeg}")

    with tempfile.TemporaryDirectory() as tmpdir_value:
        tmpdir = pathlib.Path(tmpdir_value)
        parts = []
        silence_cache = {}

        lead = silence_file(ffmpeg, tmpdir, guide.get("lead_in_ms", 250), silence_cache)
        if lead:
            parts.append(lead)

        for segment in resolved:
            clip_path = tmpdir / f"{segment['sequence']:02d}.mp3"
            print(
                f"{segment['sequence']:02d} {segment.get('speaker','')} -> "
                f"{segment['resolved_preset']} ({segment['voice']}, {segment['rate']}, {segment['pitch']})"
            )
            await synthesize_segment(segment, clip_path)
            parts.append(clip_path)
            pause = silence_file(
                ffmpeg, tmpdir, segment.get("pause_after_ms", 350), silence_cache
            )
            if pause:
                parts.append(pause)

        concat_file = tmpdir / "concat.txt"
        concat_file.write_text(
            "".join(f"file '{part.resolve()}'\n" for part in parts),
            encoding="utf-8",
        )
        run_ffmpeg([
            ffmpeg,
            "-hide_banner", "-loglevel", "error", "-y",
            "-f", "concat", "-safe", "0", "-i", str(concat_file),
            "-c:a", "libmp3lame", "-b:a", "128k", "-ar", "24000", "-ac", "1",
            str(final_path),
        ])

    manifest = {
        "guide": {
            "id": guide_id,
            "title": guide["title"],
            "location": guide.get("location"),
            "historical_note": guide.get("historical_note"),
            "sources": guide.get("sources", []),
        },
        "segments": resolved,
    }
    (output_dir / "resolved-cast.json").write_text(
        json.dumps(manifest, ensure_ascii=False, indent=2) + "\n",
        encoding="utf-8",
    )
    print(f"Rendered {final_path}")


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("guide")
    parser.add_argument("--palette", default="scripts/voice-palette.json")
    args = parser.parse_args()
    asyncio.run(render(args.guide, args.palette))


if __name__ == "__main__":
    main()
