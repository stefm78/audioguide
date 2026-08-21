#!/usr/bin/env python3
"""French-locale entry point for the shared audioguide renderer.

edge-tts currently emits an en-US language on the SSML root even when a
fr-FR multilingual voice is selected. Most segments are unaffected, but a
multilingual model can occasionally begin a sentence in another language
before converging on French. This wrapper keeps the shared renderer intact and
aligns the SSML root locale with the selected voice.
"""

import re

import edge_tts.communicate as edge_communicate


_ORIGINAL_MKSSML = edge_communicate.mkssml


def _voice_locale(voice: str) -> str | None:
    short_name = re.match(r"^([a-z]{2,3}-[A-Z]{2})-", voice)
    if short_name:
        return short_name.group(1)

    full_name = re.search(r"\(([a-z]{2,3}-[A-Z]{2}),", voice)
    if full_name:
        return full_name.group(1)

    return None


def _localized_mkssml(tc, escaped_text: str) -> str:
    ssml = _ORIGINAL_MKSSML(tc, escaped_text)
    locale = _voice_locale(tc.voice)
    if locale:
        ssml = re.sub(
            r"xml:lang=(['\"])en-US\1",
            f"xml:lang='{locale}'",
            ssml,
            count=1,
        )
    return ssml


edge_communicate.mkssml = _localized_mkssml

from render_audioguide import main  # noqa: E402


if __name__ == "__main__":
    main()
