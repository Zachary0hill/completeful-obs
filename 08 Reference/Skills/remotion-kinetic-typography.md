---
name: remotion-kinetic-typography
description: Creates Apple-style kinetic typography motion graphics in Remotion. Each word animates up from below in sync with an ElevenLabs voiceover. Use when the user asks to create a motion graphic, word reveal animation, kinetic text video, or Apple-style ad with spoken text.
tags:
  - reference
  - visual-identity
  - returns
  - pricing
---

# Remotion Kinetic Typography

Creates an Apple-style word-cascade motion graphic where each word fires exactly when it is spoken in the voiceover, using ElevenLabs for audio and OpenAI Whisper for word-level timing.

## Trigger phrases

Use this skill when the user says things like:
- "create a motion graphic of [text]"
- "make a word reveal / kinetic typography video"
- "Apple-style text animation with voiceover"
- "each word should match when it's spoken"

---

## Full Workflow

### Step 1 — Generate ElevenLabs voiceover

```bash
curl -s -X POST "https://api.elevenlabs.io/v1/text-to-speech/${ELEVENLABS_VOICE_ID}" \
  -H "xi-api-key: ${ELEVENLABS_API_KEY}" \
  -H "Content-Type: application/json" \
  -d '{
    "text": "<SPOKEN_TEXT>",
    "model_id": "eleven_multilingual_v2",
    "voice_settings": { "stability": 0.5, "similarity_boost": 0.8, "style": 0.2, "use_speaker_boost": true }
  }' \
  --output "public/completeful/audio/<slug>-voiceover.mp3"
```

Read `ELEVENLABS_API_KEY`, `ELEVENLABS_VOICE_ID` from `.env.local`.

### Step 2 — Get word-level timestamps via Whisper

```bash
curl -s https://api.openai.com/v1/audio/transcriptions \
  -H "Authorization: Bearer ${OPENAI_API_KEY}" \
  -F file="@public/completeful/audio/<slug>-voiceover.mp3" \
  -F model="whisper-1" \
  -F "timestamp_granularities[]=word" \
  -F response_format="verbose_json"
```

This returns a `words` array like:
```json
[
  { "word": "Five", "start": 0.0,  "end": 0.42 },
  { "word": "unique", "start": 0.42, "end": 0.76 },
  ...
]
```

### Step 3 — Convert timestamps to frames

`frame = Math.round(timestamp_seconds * fps)` — always use the composition's fps (typically 30).

Note: Whisper sometimes splits hyphenated words (e.g. "e-commerce" → `"e"` + `"commerce"`). Merge these back together and use the `start` of the first fragment as the frame.

### Step 4 — Group words into phrases

Rules:
- **3–4 words per phrase** — keeps each phrase on a single centered line
- Break at natural speech pauses or grammatical boundaries
- Never split a noun phrase across lines ("completeful app" stays together)

### Step 5 — Calculate PHRASE_WINDOWS

Each phrase has four keyframes: `[fadeInStart, fullyVisible, startFadeOut, gone]`

```
fadeInStart   = first word's frame in this phrase
fullyVisible  = fadeInStart + 4
startFadeOut  = next phrase's first word frame - 4   (or audio end + 10 for last phrase)
gone          = startFadeOut + 6
```

Allow a small crossfade overlap (the previous phrase's `gone` > next phrase's `fadeInStart` by ~4 frames). This feels natural at 30fps.

---

## Composition Template

Create `src/remotion/<PascalCaseName>.tsx`:

```tsx
import React from "react";
import {
  AbsoluteFill, Audio, interpolate, spring, staticFile,
  useCurrentFrame, useVideoConfig,
} from "remotion";

const FONT_FAMILY = '"SF Pro Display", "Helvetica Neue", Arial, sans-serif';
const SPRING_CONFIG = { damping: 24, mass: 0.85, stiffness: 170 };

// ─── Paste Whisper timestamps here, converted to frames ──────────────────────
type WordData = { word: string; frame: number; phrase: number; highlight?: boolean };

const WORDS: WordData[] = [
  // { word: "5", frame: 0, phrase: 0, highlight: true },
  // { word: "unique", frame: 13, phrase: 0 },
  // ...
];

// [fadeInStart, fullyVisible, startFadeOut, gone]
const PHRASE_WINDOWS: [number, number, number, number][] = [
  // [0, 4, 32, 38],
  // [34, 38, 66, 72],
  // [68, 72, 118, 125],
];

const TOTAL_FRAMES = /* gone of last phrase + 5 */ 0;
const AUDIO_SRC = "completeful/audio/<slug>-voiceover.mp3";

// ─── AnimatedWord ─────────────────────────────────────────────────────────────
const AnimatedWord: React.FC<{ data: WordData; fontSize: number }> = ({ data, fontSize }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const progress = spring({ frame: frame - data.frame, fps, config: SPRING_CONFIG, durationInFrames: 20 });
  const translateY = interpolate(progress, [0, 1], [68, 0]);
  const opacity = interpolate(progress, [0, 0.2, 1], [0, 0.6, 1]);

  return (
    <span style={{
      display: "inline-block",
      transform: `translateY(${translateY}px)`,
      opacity,
      color: data.highlight ? "#5AC8FA" : "#F5F5F7",
      fontWeight: 600,
      letterSpacing: "-0.02em",
      fontSize,
      fontFamily: FONT_FAMILY,
      lineHeight: 1,
      marginRight: "0.28em",
    }}>
      {data.word}
    </span>
  );
};

// ─── Phrase ───────────────────────────────────────────────────────────────────
const Phrase: React.FC<{ phraseIndex: number; fontSize: number }> = ({ phraseIndex, fontSize }) => {
  const frame = useCurrentFrame();
  const [fadeInStart, fullyVisible, startFadeOut, gone] = PHRASE_WINDOWS[phraseIndex];

  const opacity = interpolate(
    frame,
    [fadeInStart, fullyVisible, startFadeOut, gone],
    [0, 1, 1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  return (
    <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ opacity, display: "flex", flexDirection: "row", alignItems: "baseline",
                    overflow: "hidden", paddingBottom: "0.1em", whiteSpace: "nowrap" }}>
        {WORDS.filter(w => w.phrase === phraseIndex).map(w => (
          <AnimatedWord key={w.word} data={w} fontSize={fontSize} />
        ))}
      </div>
    </AbsoluteFill>
  );
};

// ─── Root ─────────────────────────────────────────────────────────────────────
export const MyMotionGraphic: React.FC = () => {
  const frame = useCurrentFrame();
  const { width, height } = useVideoConfig();

  const isLandscape = width > height;
  // 4.8% of width keeps the longest phrase (4 words) on one line at 1920px
  const fontSize = isLandscape ? Math.round(width * 0.048) : Math.round(width * 0.072);

  const fadeIn  = interpolate(frame, [0, 4], [0, 1], { extrapolateRight: "clamp" });
  const fadeOut = interpolate(frame, [TOTAL_FRAMES - 8, TOTAL_FRAMES - 1], [1, 0],
                              { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  return (
    <AbsoluteFill style={{
      background: "linear-gradient(155deg, #08080F 0%, #0C0E1A 55%, #070710 100%)",
      opacity: fadeIn * fadeOut,
    }}>
      {/* Subtle blue glow — matches Apple product film look */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        background: "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(90,200,250,0.07) 0%, transparent 70%)",
      }} />

      {PHRASE_WINDOWS.map((_, i) => (
        <Phrase key={i} phraseIndex={i} fontSize={fontSize} />
      ))}

      <Audio src={staticFile(AUDIO_SRC)} startFrom={0} volume={1} />
    </AbsoluteFill>
  );
};
```

---

## Registering in Root.tsx

Add to `src/remotion/Root.tsx`:

```tsx
import { MyMotionGraphic } from "./MyMotionGraphic";

// Inside RemotionRoot:
<Composition
  id="MyMotionGraphic-16x9"
  component={MyMotionGraphic}
  durationInFrames={TOTAL_FRAMES}
  fps={30}
  width={1920}
  height={1080}
  defaultProps={{}}
/>
<Composition
  id="MyMotionGraphic-9x16"
  component={MyMotionGraphic}
  durationInFrames={TOTAL_FRAMES}
  fps={30}
  width={1080}
  height={1920}
  defaultProps={{}}
/>
```

---

## Design Guidelines (Apple Style)

| Property | Value |
|---|---|
| Background | `linear-gradient(155deg, #08080F 0%, #0C0E1A 55%, #070710 100%)` |
| Glow overlay | `radial-gradient(ellipse 60% 50% at 50%, rgba(90,200,250,0.07), transparent 70%)` |
| Font | `"SF Pro Display", "Helvetica Neue", Arial, sans-serif` |
| Text color | `#F5F5F7` (near-white) |
| Highlight color | `#5AC8FA` (Apple blue — use for numbers or key nouns) |
| Font weight | `600` |
| Letter spacing | `-0.02em` |
| Font size (landscape) | `width * 0.048` — longest phrase stays on one line at 1920px |
| Font size (portrait) | `width * 0.072` |
| Word gap | `marginRight: "0.28em"` |
| Spring | `{ damping: 24, mass: 0.85, stiffness: 170 }` |
| Entry translation | `68px` downward → `0px` |
| Entry opacity | `0 → 0.6 → 1` (at 0%, 20%, 100% of spring progress) |
| Phrase crossfade | 4-frame overlap between phrases |

---

## Audio File Convention

Save all voiceovers to:
```
public/completeful/audio/<kebab-case-slug>-voiceover.mp3
```

---

## Checklist Before Previewing

- [ ] Whisper `"e-commerce"` splits merged back to `"ecommerce"`
- [ ] All word frames are absolute (not relative to phrase)
- [ ] `TOTAL_FRAMES` = last phrase's `gone` value + 5
- [ ] Composition `durationInFrames` in Root.tsx matches `TOTAL_FRAMES`
- [ ] Audio file exists at the `staticFile()` path

## Related
- [[08 Reference/Skills/walkthrough-video-editor|walkthrough-video-editor]]
- [[08 Reference/Skills/dashboard-tutorial|dashboard-tutorial]]
- [[08 Reference/Glossary (POD & Fulfillment Terms)|Glossary (POD & Fulfillment Terms)]]
- [[08 Reference/Key Links & Resources|Key Links & Resources]]
- [[03 Help Center/Technical Support/API documentation|API Documentation]]
