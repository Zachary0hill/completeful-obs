---
title: Brand Kit Files
type: reference
status: canonical
updated: 2026-09-22
tags:
  - assets
  - visual-identity
  - brand
---

# Brand Kit Files

Core Completeful Brand Kit v1.0 files copied into the vault on 2026-09-22. They sync with the vault repo and render inline in notes.

- Vault folder: `99 Assets/Brand Kit/`
- Drive master: `Media Vault/02 Brand Assets/Completeful/Completeful_Brand_Kit/`
- Rules for using them: [[00 Brand/Visual Identity/_Completeful Brand System|Completeful Brand System]]

## Folder map

| Vault folder | Contents | Count | Drive source |
|---|---|---|---|
| `Brand_Board/` | Brand board PNG, 3200 x 1800 | 1 | `completeful_brand_board_1.png` |
| `Logos/Vector/` | Every SVG: lockup and emblem in gradient, pink, black, white, currentColor | 10 | `01_Logos/Vector/` |
| `Logos/PNG/` | Lockups 400/800/1500w, emblems 512w | 13 | `01_Logos/*` |
| `Logos/App_Icons/` | favicon.ico, 16, 32, 180, 192, 512 | 7 | `01_Logos/App_Icons/` |
| `Logos/Social/` | Open graph 1200 x 630 | 1 | `01_Logos/Social/` |
| `Colors/` | Color sheet PNG, JSON, CSS, SCSS, ASE, GPL | 6 | `02_Colors/` |
| `Tokens/` | tokens.json, tailwind.brand.js, components.css, webfont_import.css | 4 | `06_Design_Tokens/` |
| `Guidelines/` | Brand guidelines PDF + HTML | 2 | `05_Guidelines/` |
| `Icons/` | 134 pink SVG icons + icon_index.html | 135 | `04_Icons/SVG_Pink/` |

## Left in Drive on purpose

| Item | Why |
|---|---|
| Font binaries (Inter, Work Sans, Archivo TTF + woff2) | Install files, not reference material. Keeps the repo light |
| Icon builds `SVG_Black/`, `SVG_CurrentColor/` | Same filenames as the pink set. Pull from Drive when needed |
| PNG sizes above 1500w, 128w and 256w emblems, 2000w masters | Use SVG for large output |
| `07_Photography_Graphics/` process infographics | Website content, about 3.7MB |
| `Completeful Design System/` components and UI kits | Code project. Documented in [[00 Brand/Visual Identity/Design System & Components\|Design System & Components]] |
| Mockup Library, Social Media, Tour Videos, Website Content | Large media libraries. See [[99 Assets/Mockup & Content Library\|Mockup & Content Library]] |

## Logos

![[99 Assets/Brand Kit/Logos/PNG/completeful_horizontal_gradient_800w.png|300]]
![[99 Assets/Brand Kit/Logos/PNG/completeful_horizontal_pink_800w.png|300]]
![[99 Assets/Brand Kit/Logos/PNG/completeful_horizontal_black_800w.png|300]]
![[99 Assets/Brand Kit/Logos/PNG/completeful_horizontal_navy_800w.png|300]]

| Vector file | Use |
|---|---|
| [[99 Assets/Brand Kit/Logos/Vector/completeful_horizontal_vector_gradient.svg\|completeful_horizontal_vector_gradient.svg]] | Default lockup, print, large |
| [[99 Assets/Brand Kit/Logos/Vector/completeful_horizontal_vector_pink.svg\|completeful_horizontal_vector_pink.svg]] | One color |
| [[99 Assets/Brand Kit/Logos/Vector/completeful_horizontal_vector_black.svg\|completeful_horizontal_vector_black.svg]] | Documents |
| [[99 Assets/Brand Kit/Logos/Vector/completeful_horizontal_vector_white.svg\|completeful_horizontal_vector_white.svg]] | Dark backgrounds |
| [[99 Assets/Brand Kit/Logos/Vector/completeful_horizontal_vector_currentcolor.svg\|completeful_horizontal_vector_currentcolor.svg]] | CSS recolor |
| [[99 Assets/Brand Kit/Logos/Vector/completeful_emblem_vector_gradient.svg\|completeful_emblem_vector_gradient.svg]] | Emblem default |
| [[99 Assets/Brand Kit/Logos/Vector/completeful_emblem_vector_pink.svg\|completeful_emblem_vector_pink.svg]] | Emblem one color |
| [[99 Assets/Brand Kit/Logos/Vector/completeful_emblem_vector_black.svg\|completeful_emblem_vector_black.svg]] | Emblem documents |
| [[99 Assets/Brand Kit/Logos/Vector/completeful_emblem_vector_white.svg\|completeful_emblem_vector_white.svg]] | Emblem dark |
| [[99 Assets/Brand Kit/Logos/Vector/completeful_emblem_vector_currentcolor.svg\|completeful_emblem_vector_currentcolor.svg]] | Emblem CSS recolor |

## Updating the kit

1. Change values in the repo first (`tailwind.config.js`, `globals.css`)
2. Regenerate the Brand Kit in Drive
3. Recopy changed files into `99 Assets/Brand Kit/` with the same names so embeds keep working
4. Update [[00 Brand/Visual Identity/Color Palette|Color Palette]] or [[00 Brand/Visual Identity/Typography|Typography]]
5. Log the change in [[07 Meetings/Decision Log|Decision Log]]

## Related
- [[99 Assets/_Asset Library Index|Asset Library Index]]
- [[99 Assets/Logos & Brand Files|Logos & Brand Files]]
- [[00 Brand/Visual Identity/Logo Usage|Logo Usage]]
