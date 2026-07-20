---
name: footage-organizer-pro
description: Sort raw video footage into AROLL / BROLL / BAD_CLIPS using audio analysis. Faster (parallel + audio-only decode), safer (depth-aware, won't flatten existing scene folders), smarter (voice-band detection so music doesn't get mistaken for speech), and resumable. Use when the user asks to "sort footage", "organize clips", "label by a-roll/b-roll", "cull bad takes", or points at a folder of vlog/interview footage.
user_invocable: true
arguments:
  - name: folders
    description: One or more folder paths to sort. Defaults to asking the user.
    required: false
  - name: apply
    description: If true, actually move files. Default is dry-run.
    required: false
tags:
  - reference
  - brand-voice
---

# Footage Organizer Pro

Sort raw footage into three buckets using audio characteristics:

| Bucket | What goes here |
|---|---|
| **AROLL** | Talking-head, vlog narration, interview, on-camera dialogue, screen-recorded calls — anything where **speech carries the clip**. |
| **BROLL** | Cutaways, b-roll, ambient/scenery, action shots without dialogue — has audio (room tone, music, nat sound) but **no speech-dominant content**. |
| **BAD_CLIPS** | Under 2 seconds, no audio stream, or essentially silent — almost always accidental record presses or recording errors. |

This skill is the audio-based counterpart to `footage-analyzer` (which does visual frame analysis). Use this one when the audio cleanly separates a-roll from b-roll — vlogs, interviews, podcast video, course recordings. Use `footage-analyzer` when you need visual judgement (e.g. silent talking-head with mic'd lav and the audio's a separate file).

## What's different from v1 (`footage-organizer`)

- **Audio-only ffmpeg decode** (`-vn`) — 5–10× faster per clip
- **Parallel workers** — defaults to `cpu_count - 1`
- **Voice-band classifier** — bandpasses 300–3400 Hz and compares the voice-band RMS to full-band RMS, so a clip with continuous music or wind noise doesn't get falsely tagged AROLL just because it isn't silent
- **`--max-depth` (default 1)** — only sorts top-level files, so existing scene folders (e.g. `SEC1 Intro/`, `SEC2 Gym/`) are preserved
- **Already-sorted detection** — refuses to re-sort a folder that already has `AROLL/BROLL/BAD_CLIPS` siblings (override with `--force`)
- **`--apply` flag** — analyzer also moves files, with collision-safe renames
- **`--resume`** — picks up from `_sort_plan.json` if a previous run was interrupted
- **Multi-folder invocation** — pass any number of folders in one run

## Workflow

1. **Confirm prerequisites** — `ffmpeg` and `ffprobe` on PATH (`brew install ffmpeg` on macOS).
2. **Confirm scope with the user.** Show:
   - which folders you'll process,
   - how many clips and total size in each (`find ... | wc -l`, `du -sh`),
   - any folders already containing `AROLL/BROLL/BAD_CLIPS` (will be skipped without `--force`),
   - any folders with non-trivial subdirectory structure (will be preserved at `--max-depth 1`).
3. **Offer a customization check.** Default = AROLL is speech-dominant, BROLL is everything else with audio, BAD is <2s or silent. Ask if that's what the user wants for this project; most of the time they'll say yes.
4. **Dry run first.** Run without `--apply` to produce `_sort_plan.json` and `_sort_report.txt` in each folder. Show the user the summary and let them sanity-check anything in the "uncertain" bucket (confidence < 0.6). For very large folders, dry-run a single small folder first to validate the classifier on the user's specific footage style.
5. **Apply.** Re-run with `--apply` (or run once with `--apply --resume`) to actually move files into `AROLL/`, `BROLL/`, `BAD_CLIPS/` subfolders inside each input folder.
6. **Hand back the report.** Point the user at `_sort_report.txt` per folder and let them know `_sort_plan.json` is the machine-readable version they can re-run with `--resume` if they want to iterate.

## Running the script

```bash
# Dry run — single folder
python <skill>/scripts/analyze_footage.py "/path/to/footage"

# Multiple folders, parallel, then apply
python <skill>/scripts/analyze_footage.py \
  "/path/Vlog 11" "/path/Vlog12 PT1" "/path/Vlog12 PT2" \
  --workers 10 --apply

# Resume a previously-interrupted run
python <skill>/scripts/analyze_footage.py "/path/Big Folder" --resume --apply
```

### Useful flags

| Flag | Default | What it does |
|---|---|---|
| `--workers N` | `cpu - 1` | Parallel ffmpeg processes |
| `--max-depth N` | `1` | `1` = only top-level files; `0` = unlimited recursion. **Set to 0 only when you actually want to flatten subfolders.** |
| `--apply` | off | Move files; without it, the script just plans |
| `--resume` | off | Skip clips already in `_sort_plan.json` |
| `--force` | off | Proceed even if `AROLL/BROLL/BAD_CLIPS` already exist |
| `--min-duration` | `2.0` | Seconds below which a clip is BAD |
| `--voice-ratio-aroll` | `0.55` | Voice-band/full-band RMS ratio above which a clip is treated as speech-dominant. Lower this to 0.45 if many obvious A-rolls are landing in BROLL; raise to 0.65 if music-heavy clips are sneaking into AROLL. |

## Important rules

- **Never run `--apply` without showing the user the dry-run summary first.** Footage is precious and irreplaceable.
- **When a clip is on the borderline, prefer BROLL.** It's better for the editor to find an A-roll in the B-roll folder than to lose it in BAD_CLIPS.
- **Scene folders are sacred.** With the default `--max-depth 1`, subfolders like `SEC1 Intro` or `Proxies` are left alone. Don't pass `--max-depth 0` unless the user explicitly says "flatten everything".
- **Don't re-run on already-sorted folders without confirming.** The script will refuse without `--force`. If the user wants to re-classify after tuning thresholds, that's the time to use `--force`.
- **Audio analysis can't see the picture.** A clip with a person talking *off-camera* will still classify as AROLL — flag this to the user when relevant (e.g., walk-and-talk b-roll with a voiceover track baked in).

## Outputs per folder

- `_sort_plan.json` — full per-clip stats and classifications (machine-readable, used by `--resume`)
- `_sort_report.txt` — human-readable summary, one line per clip with category, confidence, and reason

After `--apply`, files are moved into `AROLL/`, `BROLL/`, and `BAD_CLIPS/` subfolders next to those reports.

## Related
- [[08 Reference/Tools & Tech Stack|Tools & Tech Stack]]
- [[08 Reference/Skills/dashboard-tutorial|dashboard-tutorial]]
- [[08 Reference/Skills/metadata-keyworder|metadata-keyworder]]
- [[08 Reference/Skills/remotion-kinetic-typography|remotion-kinetic-typography]]
- [[08 Reference/Skills/ux-friction-audit|ux-friction-audit]]
