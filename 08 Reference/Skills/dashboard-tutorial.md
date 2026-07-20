---
name: dashboard-tutorial
description: Create a polished walkthrough tutorial video for any web dashboard or admin panel. Orchestrates Chrome MCP (map and drive the UI), Screen Studio (user-triggered screen recording), ElevenLabs (voiceover with word-level timestamps), and Remotion (assembles clips with kinetic word-by-word captions, section chips, and crossfades). Use when the user asks to "make a tutorial for my dashboard", "record a walkthrough video", "create an admin panel tour", "build a demo video", "tutorial my app", or provides a dashboard URL and asks for a walkthrough video.
tags:
  - reference
  - pricing
---

# Dashboard Tutorial Video Generator

End-to-end pipeline: given a dashboard URL + login, produce a narrated, captioned tutorial video covering every section.

## Trigger phrases

- "make a tutorial for my dashboard"
- "record a walkthrough video of [site]"
- "create an admin panel tour video"
- "build a tutorial video for this app"
- "walk through [dashboard URL] and make a video"

---

## Prerequisites (check before starting)

Run these in parallel; abort and surface any failure to the user:

```bash
which ffmpeg ffprobe bun python3 jq
ls /Applications/ | grep -i "screen studio"
echo "ELEVEN_API_KEY set: $([ -n "$ELEVEN_API_KEY" ] && echo yes || echo no)"
```

- **Chrome MCP**: one of the Chrome MCP servers must be connected (e.g. `mcp__Claude_in_Chrome__*` or `mcp__Control_Chrome__*`). Call `list_tabs` / `tabs_context_mcp` to confirm. If not connected, tell the user and stop.
- **Screen Studio**: must be installed (`/Applications/Screen Studio.app`).
- **ElevenLabs API key**: ask the user if `ELEVEN_API_KEY` isn't set in env.
- **ffmpeg, bun, python3, jq** must be installed.

If `Control_Chrome` JavaScript execution errors with "Chrome is not running", tell the user to enable **Chrome → View → Developer → Allow JavaScript from Apple Events**.

---

## Inputs to collect (ask via AskUserQuestion)

1. **Dashboard URL** (e.g. `https://example.com/admin`).
2. **Login credentials** — username + password. Never log these to disk. Use them only during the Chrome MCP session.
3. **Target audience** — "who will watch this?" (e.g. manager, new hire, sales rep). Shapes script tone.
4. **Voice** — list ElevenLabs voices and let the user pick one. If they gave an ID up front, verify it with `GET /v1/voices/{id}` and fall back to listing if not found.
5. **Output folder** — defaults to `$PWD/tutorial` unless specified.
6. **Pronunciation exceptions** (optional) — any brand name, non-English word, or ambiguous word that needs phonetic help? Collect examples like `{"Quebedeaux's": "Kweh beh doze"}`.

---

## Workflow

### Phase 1 — Set up project folder

```bash
PROJECT="${OUTPUT_FOLDER:-$PWD/tutorial}"
mkdir -p "$PROJECT/clips" "$PROJECT/vo" "$PROJECT/out"
cp -R ~/.claude/skills/dashboard-tutorial/template "$PROJECT/remotion"
cp ~/.claude/skills/dashboard-tutorial/scripts/* "$PROJECT/"
mkdir -p "$PROJECT/remotion/public/clips" "$PROJECT/remotion/public/vo"
cd "$PROJECT/remotion" && bun install
```

### Phase 2 — Discover dashboard layout

Log in via Chrome MCP, then systematically enumerate every nav link. Pattern:

```js
// Extract nav items from the current page
Array.from(document.querySelectorAll('a, button'))
  .filter(el => el.offsetParent !== null)
  .map(el => ({ text: el.textContent.trim().replace(/\s+/g,' '), href: el.getAttribute('href'), tag: el.tagName }))
  .filter(x => x.text && x.text.length < 50);
```

For each nav destination, navigate and extract:
- H1/H2 headings
- Visible buttons (unique, under 40 chars)
- Table column headers
- Row counts / item counts
- Tabs or filters

Keep a running list: `{ section: "Menu Items", url: "/admin/products", buttons: [...], tableHeaders: [...], notes: "100 items across 6 categories" }`.

### Phase 3 — Draft the script

Use the structure in `reference/script-template.md`. One segment per major section. Each segment has:
- `id` — stable like `04_menu`
- `title` — short caption chip label
- `vo` — narration text (2–4 sentences, conversational, second person)
- `actions` — scripted clicks/scrolls/hovers that fill the VO duration

Target total runtime: roughly **3–6 minutes**. Longer dashboards get more segments, not longer per-segment VO.

Show the full draft to the user via `AskUserQuestion` and ask:
1. Approve as-is / tweak tone / cut sections / reorder.
2. Caption style: full word-by-word (recommended), section titles only, or none.

Do NOT proceed to recording until the script is approved.

### Phase 4 — Generate voiceovers

```bash
ELEVEN_API_KEY="$ELEVEN_API_KEY" VOICE_ID="$VOICE_ID" \
  bash "$PROJECT/gen_vo.sh" script.json
```

The script calls `/v1/text-to-speech/{voice_id}/with-timestamps` with `eleven_turbo_v2_5` and saves `{id}.mp3` and `{id}.timing.json` per segment.

Then build word-level timing:

```bash
python3 "$PROJECT/build_words.py" \
  --vo-dir "$PROJECT/vo" \
  --aliases "$PROJECT/aliases.json"
```

Produces `$PROJECT/vo/words.json`. Pronunciation aliases (single-word or multi-word) replace the audio-phonetic spelling with the on-screen text. Example `aliases.json`:

```json
{
  "single": { "Lyve": "Live" },
  "sequence": [[["Kweh","beh","doze"], "Quebedeaux's"]]
}
```

### Phase 5 — Record clips (interactive loop)

For each segment in order:

1. **Reset Chrome** to the segment's starting URL and scroll to top.
2. **Prompt user**: `"Start Screen Studio recording now. Reply 'go' when rolling."`
3. On "go", execute the scripted actions (clicks/scrolls/hovers) pacing them to fill `voDuration + 1.5s`.
4. **Wait** for the pacing to finish, then prompt: `"Stop recording. Save as {id}.mp4 in {PROJECT}/clips/. Reply 'done'."`
5. If user says **"redo"**, reset and re-run the same segment.
6. If user says **"skip [id]"**, remove that segment from `segments.ts` and its VO files.

Keep interactions simple: one "go" trigger per segment, one stop prompt, one continue. Do not batch.

### Phase 6 — Build the Remotion composition

Write `$PROJECT/remotion/src/segments.ts` from collected data:

```ts
export const segments: Segment[] = [
  { id: "01_intro", title: "Welcome", clip: "01_intro.mp4", vo: "01_intro.mp3", voDuration: 9.10, clipStart: 1.5 },
  // ...
];
```

Copy clips and VOs into `remotion/public/clips` and `remotion/public/vo`.

Probe clip durations (`ffprobe`) to sanity-check that each clip is longer than `voDuration + clipStart`.

### Phase 7 — Render

Default output: **H.264 at CRF 14** (near-lossless, shareable file size) plus **ProRes 4444** if the user wants edit-grade mastering.

```bash
cd "$PROJECT/remotion"
bun x remotion render MainComposition ../out/tutorial.mp4 \
  --codec h264 --crf 14 --pixel-format yuv420p --jpeg-quality 100
```

For ProRes:
```bash
bun x remotion render MainComposition ../out/tutorial.mov \
  --codec prores --prores-profile 4444 --jpeg-quality 100
```

Open the result in QuickTime (`open "$PROJECT/out/tutorial.mp4"`) and hand off with the folder structure.

---

## Redo, skip, pause — interaction vocabulary

Honor these exact phrases from the user during recording:
- `"go"` → start the scripted actions for the current segment
- `"done"` → clip saved; advance to the next segment
- `"redo"` → current segment's recording is bad; reset and re-prompt
- `"skip [id or name]"` → drop that segment from the script, VO, and composition
- `"pause"` → stop the loop; wait for `"resume"`

---

## Gotchas

- **Clip > VO duration**: Screen Studio adds ~1–2s of intro/outro zoom. Default `clipStart: 1.5` trims the intro. If a clip looks cut short at the end, increase `tailPadding` (default 1.2s) in `segments.ts`.
- **Pronunciation failures** (brand names, non-English): regenerate just the affected VO with a phonetic spelling and add a single-word or multi-word alias to `aliases.json`. Do NOT regenerate every VO.
- **User forgot to record**: detect by asking after each clip. Redo by re-running phase 5 for that one segment.
- **Chrome MCP disconnect mid-session**: `list_tabs` will fail. Ask the user to reconnect; re-call `list_tabs` before the next navigation.
- **Multi-screen setup**: if Screen Studio records the wrong display, have the user drag Chrome to the primary monitor before starting phase 5.
- **Pricing**: each full tutorial burns ~10–20k ElevenLabs characters. Warn the user if `$ELEVEN_API_KEY` is a shared/limited account.

---

## File layout produced by this skill

```
$PROJECT/
├── script.md              # narration + action plan
├── aliases.json           # pronunciation exceptions
├── gen_vo.sh              # ElevenLabs generator
├── build_words.py         # char→word timing with aliases
├── clips/                 # Screen Studio recordings (user-saved)
│   ├── 01_intro.mp4
│   └── ...
├── vo/                    # ElevenLabs outputs
│   ├── 01_intro.mp3
│   ├── 01_intro.timing.json
│   └── words.json
├── remotion/              # Remotion project (ready to render)
│   ├── package.json
│   ├── src/
│   │   ├── Root.tsx
│   │   ├── Main.tsx
│   │   ├── SegmentScene.tsx
│   │   ├── Caption.tsx
│   │   └── segments.ts    # generated per-run
│   └── public/
│       ├── clips/         # (copied from ../clips)
│       └── vo/            # (copied from ../vo)
└── out/
    └── tutorial.mp4 / tutorial.mov
```

Re-render any time with `cd remotion && bun x remotion render MainComposition ../out/tutorial.mp4 --codec h264 --crf 14`.

## Related
- [[08 Reference/Skills/remotion-kinetic-typography|remotion-kinetic-typography]]
- [[08 Reference/Skills/footage-organizer-pro|footage-organizer-pro]]
- [[08 Reference/Skills/metadata-keyworder|metadata-keyworder]]
- [[08 Reference/Skills/ux-friction-audit|ux-friction-audit]]
- [[08 Reference/Skills/walkthrough-video-editor|walkthrough-video-editor]]
