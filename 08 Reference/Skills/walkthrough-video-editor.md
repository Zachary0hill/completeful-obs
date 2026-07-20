---
name: walkthrough-video-editor
description: Edit a folder of raw walkthrough/tutorial screen recordings into a polished YouTube-grade video using Remotion. Pipeline enhances the voiceover audio (-16 LUFS, denoise, EQ), transcribes it with whisper for word-level captions, drops in a branded intro/outro, animates section chips and feature callouts, and renders a 1920×1080 H.264 MP4. Use when the user provides a folder of .mp4 walkthrough clips plus an outline/script and asks to "edit them into a tutorial", "make a walkthrough video", "build a YouTube-style tutorial from these clips", "turn this folder of clips into a polished video", "stitch these screen recordings together with motion graphics", or any request matching that pattern. Also use when they reference an existing project built from this skill and ask to tweak it.
tags:
  - reference
  - visual-identity
  - automation
  - design
  - youtube
---

# Walkthrough Video Editor

End-to-end pipeline that takes raw walkthrough screen recordings + a script outline and produces a finished YouTuber-grade tutorial video with motion graphics, kinetic captions, section chips, feature callouts, intro/outro, and a polished voiceover.

## When to invoke

- "Edit this folder of walkthrough videos into a tutorial."
- "Make a YouTube-style tutorial from these screen recordings."
- "Stitch these clips together with motion graphics + captions."
- "Turn `<folder>` into a polished walkthrough video."
- User references an existing project from this skill and wants to tweak the timeline, callouts, captions, or re-render.

## Prerequisites (check first; abort if missing)

```bash
which ffmpeg ffprobe whisper-cli bun python3
ls /opt/homebrew/bin/whisper-cli 2>/dev/null || echo "install: brew install whisper-cpp"
```

If `whisper-cli` is missing: `brew install whisper-cpp`. The first transcription will auto-download the `ggml-base.en.bin` model to `~/.cache/whisper/`.

If `bun` is missing fall back to `npm`/`pnpm` in `setup_project.sh` (already handled).

## Inputs to collect (use AskUserQuestion if not provided up front)

1. **Clips folder** — absolute path containing the .mp4 walkthrough clips. Files will be sorted alphabetically and renamed `clip_01.mp4`, `clip_02.mp4`, ... in import order.
2. **Outline / script** — a text file path or pasted text describing what each section covers and key features to highlight. This drives section chips, callouts, and caption windows.
3. **Project output folder** — defaults to `<clips_folder>/../tutorial-video/` if not specified.
4. **Branding** (optional):
   - Logo PNG path (gradient + emblem variants if available)
   - Brand color palette (defaults: pink #FF4D8F → coral #FF7A59 → orange #FFB347)
   - Product / company name (used in intro title)
5. **Video title** — the headline for the intro card (e.g. "Create Your First Product").
6. **Privacy** — should the email/profile area in the top-right of the recording be blurred? (yes/no, default no)

## Workflow

### Phase 1 — Scaffold the project

```bash
SKILL=~/.claude/skills/walkthrough-video-editor
PROJECT="$OUTPUT_FOLDER"
bash "$SKILL/scripts/setup_project.sh" "$PROJECT" "$CLIPS_FOLDER"
```

This copies the Remotion template, imports clips into `public/clips/`, prints clip durations, and runs `bun install`.

If the user provided a logo, downscale it and drop it in `public/brand/`:
```bash
ffmpeg -y -i "$LOGO_PATH" -vf "scale=1600:-1" "$PROJECT/public/brand/logo-gradient.png"
ffmpeg -y -i "$EMBLEM_PATH" -vf "scale=400:-1" "$PROJECT/public/brand/emblem-gradient.png"
```
Otherwise, the intro/outro use neutral typographic branding.

### Phase 2 — Process audio

```bash
bash "$SKILL/scripts/enhance_audio.sh" "$PROJECT"
bash "$SKILL/scripts/transcribe.sh"   "$PROJECT"
python3 "$SKILL/scripts/build_words.py" "$PROJECT"
```

After this, `public/audio/` contains `vo_NN.wav` (enhanced VO) and `words.json` (word-level timings keyed by clip id).

### Phase 3 — Read transcripts + outline → generate `timeline.ts`

This is the only LLM-heavy step. You (Claude) must:

1. **Read each transcript.** Reconstruct the spoken narration per clip from `words.json`.
2. **Read the user's outline / script.** Match outline sections to transcript timestamps.
3. **Identify section transitions** — find the timestamp where each new section starts based on phrases like "let's go to the next", "this is the X area", "now we're going to", or matching outline section headers.
4. **Identify feature callouts** — when the narrator mentions a specific feature ("crop", "remove background", "personalize", "next step button"), schedule a small callout chip at that timestamp.
5. **Identify caption-worthy moments** — the intro line, key feature pitches ("one-click background removal"), and the closing CTA. These get kinetic word-by-word captions; the rest of the video runs without captions.
6. **Decide on splits / cuts** — if the outline says to remove a transition or insert a mid-roll title card, you'll need to:
   - Pre-process the relevant clip with `ffmpeg -ss/-t` to split it into `clip_NNa.mp4` / `clip_NNb.mp4`
   - Mirror that split in `public/audio/vo_NNa.wav` / `vo_NNb.wav`
   - Rebuild a single `words.json` with the split clips re-keyed (re-run `build_words.py` or write the entries by hand)
7. **Write `src/timeline.ts`** mirroring the example at `src/timeline.example.ts`. Required exports:
   - `CLIP_DURATIONS` — `{ "01": 175.18, "02": 53.95, ... }`
   - `INTRO_DURATION`, `OUTRO_DURATION`, `TITLE_1_DURATION` (set to 0 if no mid-roll title)
   - `CLIP_SEGMENTS` — array of `{ clipId, absoluteStart, duration, sections, blurEmail? }`
   - `CAPTION_WINDOWS` — array of `{ clipId, startInClip, endInClip, style }`
   - `CALLOUTS` — array of `{ clipId, startInClip, duration, text, kind, position }`
   - `STARTS` — absolute start times for `intro`, each `clip<id>`, `title1` (if used), `outro`

8. **Update `Main.tsx`** if you inserted a mid-roll title card — add a `<Sequence>` at `STARTS.title1` rendering `<TitleScene>` with the user's title text.

### Phase 4 — Validate visually

Render 4-6 still frames at key moments and visually inspect:

```bash
cd "$PROJECT"
bunx remotion still src/index.ts MainComposition out/preview_intro.png   --frame 60
bunx remotion still src/index.ts MainComposition out/preview_chip.png    --frame <chip-transition>
bunx remotion still src/index.ts MainComposition out/preview_callout.png --frame <callout-active>
bunx remotion still src/index.ts MainComposition out/preview_outro.png   --frame <outro-mid>
```

Check: chip text not clipped, callouts don't cover important UI, captions readable, audio synced (the audio offset is set automatically per Sequence). Iterate timeline.ts as needed.

### Phase 5 — Render the final video

```bash
cd "$PROJECT"
bun run build
# Output: out/tutorial.mp4 (h264, crf 16, ~30 MB/min at 1920×1080@60)
```

For a fast preview render: `bun run build:fast` (crf 23).
For an editorial-grade ProRes 4444 master: `bun run build:prores`.

Tell the user where the file is and the duration. If they want changes, edit `timeline.ts` and re-render — frames are cached so subsequent renders are faster.

## Key components / what each piece controls

The Remotion template lives at `~/.claude/skills/walkthrough-video-editor/template/`. Key files:

| File | What it controls |
|------|-----------------|
| `src/Main.tsx` | Master timeline — sequences intro, clips, optional mid-roll title, outro |
| `src/timeline.ts` | **Project-specific** — clip durations, sections, callouts, captions |
| `src/theme.ts` | Brand colors, fonts, gradients (edit to retheme) |
| `src/scenes/IntroScene.tsx` | 4s logo + title + tagline + chapter chip splash |
| `src/scenes/ClipScene.tsx` | Plays one clip with its overlays (chip, callouts, captions, watermark, optional email blur) |
| `src/scenes/TitleScene.tsx` | Mid-roll title card ("Extra Features", "Next up", etc.) |
| `src/scenes/OutroScene.tsx` | 5s "You're live" card with 3 next-step feature cards |
| `src/components/SectionChip.tsx` | Top-left pill label per section, with step number badge |
| `src/components/Callout.tsx` | Floating feature callouts (`feature` orange, `action` yellow w/ arrow, `tip` cyan) + AttentionRing + Banner |
| `src/components/KineticCaption.tsx` | Word-by-word animated captions (hero or lower style) |
| `src/components/ProgressBar.tsx` | Persistent gradient bottom progress bar with active step label |
| `src/components/BackgroundFX.tsx` | Animated gradient backdrop for letterbox / intro / outro |
| `src/components/PrivacyBlur.tsx` | Backdrop-filter blur rectangle for sensitive UI areas (email, etc.) |

## Conventions to follow

- **Clip IDs** are 2-digit zero-padded strings (`"01"`, `"02"`). Use suffixes `a`/`b` only when splitting an existing clip around a removed transition.
- **Section markers** use lowercase kind keys (`"intro"`, `"dashboard"`, `"designer"`, etc.). Step number 0 = intro/welcome, 1+ = real steps.
- **Callout positions** — `tr` and `centerRight` are safest for screen recordings (most UI lives mid/left). Avoid covering critical UI.
- **Caption windows** should be sparse — pick 3-5 highest-impact moments per video. A wall-to-wall caption track competes with the screen recording.
- **Audio** — always run the enhance chain. Raw screen recording audio is too noisy.
- **Source clips** at non-1920×1080 (typical Screen Studio output is 1776×1080) are letterboxed in the 1920×1080 frame with a soft animated gradient filling the side bars.

## Reference: the Completeful first-product tutorial

`~/.claude/skills/walkthrough-video-editor/template/src/timeline.example.ts` is a fully-populated timeline file from a real production run. Read it for shape and tone — section labels, callout copy, caption window placement, and how to handle a mid-roll cut (the `01a`/`01b` split removes a "next area" transition and replaces it with an "Extra Features for Product Designing" title card).

## Tweaks the user is likely to ask for

- **Change a callout's text or timing** → edit the entry in `CALLOUTS` in `timeline.ts`, re-render.
- **Add/remove a caption window** → edit `CAPTION_WINDOWS`. `style: "hero"` for big center text, `"lower"` for subtitle-style.
- **Change brand colors** → edit `COLORS` in `src/theme.ts`. The gradient is constructed from `pink → coral → orange`.
- **Add a privacy blur over email/PII** → set `blurEmail: true` on the relevant `CLIP_SEGMENTS` entry; tune `left/top/width/height` in `ClipScene.tsx`'s `PrivacyBlur` props if the UI is in a different position.
- **Cut a section** → split the clip at the cut points with `ffmpeg -ss/-t`, split the audio the same way, rebuild `words.json`, register the new clip ids in `CLIP_DURATIONS`.
- **Insert a title card mid-video** → render a `<Sequence>` of `<TitleScene>` between two clip sequences in `Main.tsx`, set `TITLE_N_DURATION` and `STARTS.titleN`, and shift downstream `absoluteStart` values.
- **Different intro/outro copy** → edit `IntroScene.tsx` / `OutroScene.tsx` directly.
- **Just re-render** → `bun run build` from the project folder.

## Related
- [[08 Reference/Key Links & Resources|Key Links & Resources]]
- [[08 Reference/Tools & Tech Stack|Tools & Tech Stack]]
- [[08 Reference/Glossary (POD & Fulfillment Terms)|Glossary (POD & Fulfillment Terms)]]
- [[08 Reference/Skills/metadata-keyworder|metadata-keyworder]]
- [[08 Reference/Skills/remotion-kinetic-typography|remotion-kinetic-typography]]
