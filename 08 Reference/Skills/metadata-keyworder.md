---
name: metadata-keyworder
description: >
  Vision-tag a folder of photos with IPTC keywords, captions, titles, and copyright,
  then write the metadata into XMP sidecars (for RAWs) or directly into JPEGs/TIFFs.
  Use whenever the user says "keyword these photos", "add IPTC", "write keywords",
  "tag the keepers", "add captions to the gallery", "metadata pass", "make these
  searchable", "prep for stock", "write XMP sidecars", "tag for Lightroom", or
  has a folder of finished photos and wants them keyed/captioned for archiving,
  stock submission, or client-search ability. Reads each image's existing metadata
  (date, GPS, camera) and combines that with vision-derived keywords (subject, scene,
  mood, location features, recognizable activities) into a structured set ready for
  Lightroom / Capture One / Bridge / Adobe Stock to ingest. Composes after photo-culler
  (only keepers should be tagged) and before client-delivery-pack (so deliveries carry
  keywords). Requires exiftool to be installed (`brew install exiftool`).
tags:
  - reference
  - seo
  - automation
---

# Metadata Keyworder

You are helping a photographer make a folder of photos searchable, archivable, and stock-ready by writing structured IPTC/XMP metadata. The photographer expects:

1. **Keywords that match how they search.** Subject (people, animals, objects), scene (beach, studio, urban), mood (joyful, contemplative), activity (running, embracing), and any locations they'd remember in two years.
2. **A caption/title that means something** — not just "image of two people."
3. **Their copyright in every file** — non-negotiable.
4. **No destruction of the original RAW.** RAWs get XMP sidecars; never write into the RAW itself.
5. **Compatibility with Lightroom, Capture One, Bridge, Photo Mechanic.** XMP is the lingua franca; stick to standard schemas.

## Prerequisite

This skill requires `exiftool`. Check first with `which exiftool`. If it's missing, surface a clear instruction: `brew install exiftool` (Homebrew on macOS). Don't attempt to proceed without it.

## Workflow

### 1. Probe the folder

Before writing anything, run a quick survey:

- Count files by extension (RAW vs JPEG vs TIFF)
- Sample 3-5 EXIF blocks with `exiftool -j -G` to learn camera, lens, GPS presence, capture date range
- Check for existing XMP sidecars or embedded IPTC — if present, read and surface (we'll merge, not stomp)

This gives you context for keywording (a beach EXIF GPS + sunny day → outdoor/beach keywords get higher confidence) and prevents you from re-tagging already-tagged work.

### 2. Confirm scope with the user

- **Folder path**
- **Copyright string** — typically `© <Year> <User Name>. All rights reserved.` Read from `~/.claude/skills/metadata-keyworder/config.json` if present (`{"copyright": "..."}`); otherwise ask once and offer to save.
- **Keyword purpose**: archive (their own searchability), client (delivery), stock (Adobe/Getty/Shutterstock — different rules apply, see below)
- **Caption mode**: short (1 sentence) vs long (2-3 sentences for stock)
- **Title mode**: derive from filename, derive from caption, or skip

### 3. Generate metadata via vision

For each image (or batch of 10-25 in parallel for efficiency), look at the photo and extract:

- **Subject keywords** — what's in the frame: "couple, bride, groom, ceremony arch, white roses"
- **Scene keywords** — environment: "beach, ocean, sunset, sand"
- **Activity keywords** — what's happening: "kissing, holding hands, walking"
- **Mood keywords** — feeling: "joyful, intimate, candid"
- **Stylistic keywords** — genre conventions: "wedding, lifestyle photography, golden hour"
- **Caption** — a sentence describing the photo as you'd describe it to someone who can't see it
- **Title** — short, distinctive (5-7 words), useful as a filename

For RAW files, work from the embedded JPEG preview (extract with `exiftool -b -PreviewImage` or `-JpgFromRaw`); don't try to render the RAW directly.

Stock-purpose keywords differ:

- More keywords (15-30 vs 5-15 for archive)
- Include search terms: "copy space", "no people", "isolated on white", "horizontal", "selective focus"
- Avoid trademarks, brand names, recognizable people without releases
- Include synonyms (the search engine doesn't expand): "happy / joy / cheerful"

### 4. Write a tagging plan JSON

Before writing metadata, dump a plan to `<folder>/_keywords/plan.json`:

```json
[
  {
    "file": "DSC_0123.ARW",
    "title": "Patel ceremony arch first look",
    "caption": "The couple shares an emotional first look beneath a flower-draped arch on a coastal cliff at golden hour.",
    "keywords": ["wedding", "first look", "couple", "bride", "groom", "ceremony arch", "flowers", "golden hour", "coastal", "outdoor wedding", "joyful", "intimate", "candid"],
    "copyright": "© 2026 Zachary Hill. All rights reserved."
  }
]
```

Surface the plan to the user, ask for sign-off (or for them to spot-edit), then commit.

### 5. Apply the metadata

Use `scripts/write_xmp.py` to apply the plan via `exiftool`:

```bash
python ~/.claude/skills/metadata-keyworder/scripts/write_xmp.py \
  --plan ~/Shoots/2026-04-29_Patel-Wedding/_keywords/plan.json \
  --root ~/Shoots/2026-04-29_Patel-Wedding/06_select
```

The script:

1. For each entry, locates the file in `--root` (filename match).
2. For RAWs (.cr2, .cr3, .nef, .arw, .dng, .raf, .orf, .rw2, .pef, .iiq, .srw): writes an XMP sidecar `<basename>.xmp` next to the RAW, preserving any existing sidecar contents.
3. For JPEGs and TIFFs: writes IPTC + XMP directly into the file's metadata segments (does NOT touch pixels).
4. Sets these fields per IPTC4XMP / Dublin Core conventions:
   - `XMP-dc:Subject` → keywords list
   - `XMP-dc:Title` → title
   - `XMP-dc:Description` / `IPTC:Caption-Abstract` → caption
   - `XMP-dc:Rights` / `IPTC:CopyrightNotice` → copyright
   - `XMP-dc:Creator` / `IPTC:By-line` → user's name (from config)
5. Writes a result log to `<folder>/_keywords/result.log` listing every file touched.

Use `-overwrite_original` so exiftool doesn't leave `.original` backups (the manifest is your safety net; the exiftool default of writing backups for every file would clutter the project).

### 6. Verify a sample

After writing, spot-check 3 files with `exiftool -G -s <file>` and show the user the IPTC/XMP block. If anything's off (encoding issues, missed fields), it's much cheaper to catch it now than after Lightroom has imported them.

## What NOT to do

- **Never modify RAW files.** XMP sidecars only.
- **Never strip existing metadata you didn't write.** Camera EXIF, GPS, lens info — preserve all of it. Merge into existing keywords/captions, don't replace.
- **Never invent details that aren't visible.** If you can't see the location name in the frame and there's no GPS, don't make one up. "Beach" is fine; "Half Moon Bay" without GPS proof is not.
- **Never identify named individuals from facial recognition.** First names from the brief or filename are fine; don't recognize celebrities/strangers and tag them.
- **Never write GPS into images that don't have GPS** unless the user explicitly provides coords. Lightroom users expect EXIF GPS to be camera-truth.

## Edge cases

- **Mixed RAW + JPEG (RAW+JPEG shooting)** — pair them by basename and write to both: XMP sidecar for the RAW, IPTC into the JPEG. Lightroom will use whichever is the active rendition.
- **Already has an XMP sidecar** — exiftool merges by default with `-XMP-dc:Subject+=keyword`; the script uses `+=` so existing keywords are preserved.
- **Non-ASCII characters in caption/title** (smart quotes, accented names) — exiftool handles UTF-8 fine; just make sure the plan.json is UTF-8 (Python `json.dump` defaults to that with `ensure_ascii=False`).
- **Very large folders (1000+ images)** — process in chunks of 50 to avoid hitting exiftool argument-list limits; the script handles this automatically.
- **Stock submission** — read your agency's keyword limits and slot rules. Adobe Stock takes up to 49 keywords; Getty has stricter editorial rules. The skill doesn't enforce per-agency rules; surface the per-image keyword count and let the user decide.

## Related
- [[08 Reference/Skills/walkthrough-video-editor|walkthrough-video-editor]]
- [[08 Reference/Key Links & Resources|Key Links & Resources]]
- [[08 Reference/Tools & Tech Stack|Tools & Tech Stack]]
- [[08 Reference/Skills/dashboard-tutorial|dashboard-tutorial]]
- [[08 Reference/Skills/footage-organizer-pro|footage-organizer-pro]]
