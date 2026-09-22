---
title: Logos & Brand Files
type: reference
status: canonical
updated: 2026-09-22
tags:
  - visual-identity
  - api
  - assets
---

# Logos & Brand Files

## Where the files are

| Location | What | Use for |
|---|---|---|
| Vault `99 Assets/Brand Kit/Logos/` | SVG set, web PNGs, app icons, open graph | Embeds, daily pulls, agents working in the vault |
| Drive `Media Vault/02 Brand Assets/Completeful/Completeful_Brand_Kit/01_Logos/` | Every size, masters to 3000w | Large PNG exports, handoff to vendors |
| [Logos Drive folder](https://drive.google.com/drive/folders/1VDTGZLhvCBgocyynfCfZgIwrvmeuxsFM) | Older logo uploads | Legacy reference. Prefer the Brand Kit |

Full manifest: [[99 Assets/Brand Kit Files|Brand Kit Files]]. Usage rules: [[00 Brand/Visual Identity/Logo Usage|Logo Usage]].

![[99 Assets/Brand Kit/Logos/PNG/completeful_horizontal_gradient_800w.png|320]]

## Variants

| Variant | File (vault) | Use |
|---|---|---|
| Gradient lockup | `Logos/Vector/completeful_horizontal_vector_gradient.svg` | Default. White and light neutrals |
| Solid pink lockup | `Logos/Vector/completeful_horizontal_vector_pink.svg` | One color print, tape, email signature |
| Black lockup | `Logos/Vector/completeful_horizontal_vector_black.svg` | Documents, low color print |
| Navy lockup | `Logos/PNG/completeful_horizontal_navy_800w.png` | Documents on light |
| White knockout lockup | `Logos/Vector/completeful_horizontal_vector_white.svg` | Black, navy, pink, dark photo |
| Emblem (gradient, pink, black, white) | `Logos/Vector/completeful_emblem_vector_*.svg` | Avatars, app icons, favicons, small embroidery |
| currentColor builds | `Logos/Vector/*_currentcolor.svg` | CSS recolor in code |
| App icons | `Logos/App_Icons/` | favicon.ico, 16, 32, 180, 192, 512 |
| Open graph | `Logos/Social/open_graph_1200x630.jpg` | Link previews |

Not available yet: stacked or vertical lockup, original AI or EPS master. SVGs are traced from 3000px and 8000px PNG masters and are production safe.

## Usage rules

- Always pull from the Brand Kit. Never screenshot the site or a social avatar
- Never stretch, rotate, recolor, add effects, or rebuild the wordmark
- Clear space: height of the emblem circle on all sides
- Minimum: lockup 140px / 1.25in, emblem 24px / 0.35in
- Gradient logo on white or light neutrals only. White knockout everywhere else
- The tagline is a separate element. Never attach it to the logo file

## Key values

- Pink `#ED128C` · gradient `#FF2B92 to #FF8433` · Orange `#FF6B35` · Navy `#34424E`
- Owners (headlines) + Inter (body)
- Full spec: [[00 Brand/Visual Identity/_Completeful Brand System|Completeful Brand System]]

## Adding new logo files

1. Add to the Drive Brand Kit `01_Logos/` in the right subfolder
2. Copy web sizes and SVG into `99 Assets/Brand Kit/Logos/`
3. Add a row to the Variants table
4. Log brand changes in [[Decision Log]]

## Related
- [[99 Assets/Brand Kit Files|Brand Kit Files]]
- [[99 Assets/Mockup & Content Library|Mockup & Content Library]]
- [[99 Assets/_Asset Library Index|Asset Library Index]]
