#!/usr/bin/env python3
import io, json, pathlib, sys
import requests
from PIL import Image, ImageOps

ROOT = pathlib.Path(__file__).resolve().parents[1]
CONFIG = ROOT / "series/orleans-cathedral/photos.json"
API = "https://commons.wikimedia.org/w/api.php"
UA = "audioguide-orleans/1.0 (https://github.com/stefm78/audioguide; private cultural mediation)"
SESSION = requests.Session()
SESSION.headers.update({"User-Agent": UA, "Accept": "application/json,image/*;q=0.9,*/*;q=0.8"})


def commons_image_url(title: str, width: int) -> str:
    params = {
        "action": "query",
        "format": "json",
        "prop": "imageinfo",
        "iiprop": "url",
        "iiurlwidth": str(width),
        "titles": title,
        "formatversion": 2,
    }
    r = SESSION.get(API, params=params, timeout=45)
    r.raise_for_status()
    pages = r.json().get("query", {}).get("pages", [])
    if not pages or "imageinfo" not in pages[0]:
        raise RuntimeError(f"No imageinfo for {title}")
    info = pages[0]["imageinfo"][0]
    return info.get("thumburl") or info["url"]


def render_one(item, defaults):
    target = ROOT / "series/orleans-cathedral" / item["target"]
    target.parent.mkdir(parents=True, exist_ok=True)
    max_width = int(item.get("max_width", defaults.get("max_width", 1200)))
    url = commons_image_url(item["commons_title"], max_width)
    print(f"Downloading {item['id']} from {url}", flush=True)
    r = SESSION.get(url, timeout=90)
    r.raise_for_status()
    image = Image.open(io.BytesIO(r.content))
    image = ImageOps.exif_transpose(image).convert("RGB")
    if image.width > max_width:
        height = round(image.height * max_width / image.width)
        image = image.resize((max_width, height), Image.Resampling.LANCZOS)
    quality = int(defaults.get("quality", 82))
    image.save(target, "WEBP", quality=quality, method=4)
    return {
        "id": item["id"],
        "target": item["target"],
        "width": image.width,
        "height": image.height,
        "bytes": target.stat().st_size,
        "source_url": url,
    }


def main():
    cfg = json.loads(CONFIG.read_text(encoding="utf-8"))
    results = [render_one(item, cfg.get("render", {})) for item in cfg["photos"]]
    status = ROOT / "series/orleans-cathedral/photo-render-status.json"
    status.write_text(json.dumps({"render":"success","count":len(results),"photos":results}, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    total = sum(r["bytes"] for r in results)
    print(f"Rendered {len(results)} photos, {total/1024:.1f} KiB total")
    for r in results:
        print(f"- {r['target']}: {r['width']}x{r['height']} {r['bytes']/1024:.1f} KiB")


if __name__ == "__main__":
    try:
        main()
    except Exception as exc:
        print(f"ERROR: {type(exc).__name__}: {exc}", file=sys.stderr)
        raise
