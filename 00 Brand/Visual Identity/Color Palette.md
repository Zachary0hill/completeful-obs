---
title: Color Palette
type: brand-guideline
status: canonical
source: Completeful Brand Kit v1.0 (Sept 2026), generated from tailwind.config.js + src/app/globals.css
updated: 2026-09-22
tags:
  - brand
  - brand/visual
  - visual-identity
  - colors
  - content
---

# Color Palette

> [!important] Source of truth
> Values come from the production repo: `tailwind.config.js` and `src/app/globals.css`. Code wins over Canva when they disagree.
> One pink carries the brand. Orange ends the gradient and accents. Navy and neutrals do the structural work.

![[99 Assets/Brand Kit/Colors/completeful_color_sheet.png]]

## Core palette

<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(130px,1fr));gap:10px;margin:12px 0">
<div style="border:1px solid #E5E7EB;border-radius:12px;overflow:hidden"><div style="background:#ED128C;height:64px"></div><div style="padding:8px;font-size:12px"><b>Completeful Pink</b><br>#ED128C</div></div>
<div style="border:1px solid #E5E7EB;border-radius:12px;overflow:hidden"><div style="background:#C4106A;height:64px"></div><div style="padding:8px;font-size:12px"><b>Pink Deep</b><br>#C4106A</div></div>
<div style="border:1px solid #E5E7EB;border-radius:12px;overflow:hidden"><div style="background:#FF6B35;height:64px"></div><div style="padding:8px;font-size:12px"><b>Completeful Orange</b><br>#FF6B35</div></div>
<div style="border:1px solid #E5E7EB;border-radius:12px;overflow:hidden"><div style="background:#34424E;height:64px"></div><div style="padding:8px;font-size:12px"><b>Completeful Navy</b><br>#34424E</div></div>
<div style="border:1px solid #E5E7EB;border-radius:12px;overflow:hidden"><div style="background:#E2C2C4;height:64px"></div><div style="padding:8px;font-size:12px"><b>Completeful Blush</b><br>#E2C2C4</div></div>
<div style="border:1px solid #E5E7EB;border-radius:12px;overflow:hidden"><div style="background:#FFFFFF;height:64px;border-bottom:1px solid #E5E7EB"></div><div style="padding:8px;font-size:12px"><b>White</b><br>#FFFFFF</div></div>
</div>

| Name | HEX | RGB | CMYK (conversion) | Use |
|---|---|---|---|---|
| Completeful Pink | `#ED128C` | 237 18 140 | 0 92 41 7 | Primary. Logo, primary buttons, links, active states |
| Pink Deep | `#C4106A` | 196 16 106 | 0 92 46 23 | Hover. Required for pink text under 18px |
| Completeful Orange | `#FF6B35` | 255 107 53 | 0 58 79 0 | Accent and gradient end. Never body text on white |
| Completeful Navy | `#34424E` | 52 66 78 | 33 15 0 69 | Outline buttons, secondary UI, dark text on light |
| Completeful Blush | `#E2C2C4` | 226 194 196 | 0 14 13 11 | Soft neutral. Dividers, muted fills, packaging |
| White | `#FFFFFF` | 255 255 255 | 0 0 0 0 | Primary surface, logo knockout |

## Signature gradient

<div style="height:56px;border-radius:12px;background:linear-gradient(135deg,#FF2B92 0%,#FF8433 100%);margin:12px 0"></div>

| Use | Value |
|---|---|
| Primary | `linear-gradient(135deg, #FF2B92 0%, #FF8433 100%)` |
| Hover | `linear-gradient(135deg, #E00072 0%, #D63501 100%)` |

Rules:

- Always 135 degrees. Pink top left, orange bottom right.
- Allowed on: the logo, primary hero CTA, one emphasized word per headline.
- Not allowed: behind body copy, full page backgrounds, more than one gradient element per view.

## Pink scale

<div style="display:flex;border-radius:10px;overflow:hidden;margin:12px 0;font-size:11px;text-align:center">
<div style="flex:1;background:#FDF2F8;padding:18px 0">50</div><div style="flex:1;background:#FCE7F3;padding:18px 0">100</div><div style="flex:1;background:#FBCFE8;padding:18px 0">200</div><div style="flex:1;background:#F9A8D4;padding:18px 0">300</div><div style="flex:1;background:#F472B6;padding:18px 0">400</div><div style="flex:1;background:#ED128C;padding:18px 0;color:#fff"><b>500</b></div><div style="flex:1;background:#DB2777;padding:18px 0;color:#fff">600</div><div style="flex:1;background:#BE185D;padding:18px 0;color:#fff">700</div><div style="flex:1;background:#9D174D;padding:18px 0;color:#fff">800</div><div style="flex:1;background:#831843;padding:18px 0;color:#fff">900</div>
</div>

`50 #FDF2F8` · `100 #FCE7F3` · `200 #FBCFE8` · `300 #F9A8D4` · `400 #F472B6` · **`500 #ED128C`** · `600 #DB2777` · `700 #BE185D` · `800 #9D174D` · `900 #831843`

- 50 to 200: backgrounds
- 500: brand pink
- 600 to 900: hover, pressed, text

## Neutral scale

<div style="display:flex;border-radius:10px;overflow:hidden;margin:12px 0;font-size:11px;text-align:center">
<div style="flex:1;background:#F9FAFB;padding:18px 0">50</div><div style="flex:1;background:#F3F4F6;padding:18px 0">100</div><div style="flex:1;background:#E5E7EB;padding:18px 0">200</div><div style="flex:1;background:#D1D5DB;padding:18px 0">300</div><div style="flex:1;background:#9CA3AF;padding:18px 0">400</div><div style="flex:1;background:#6B7280;padding:18px 0;color:#fff">500</div><div style="flex:1;background:#4B5563;padding:18px 0;color:#fff">600</div><div style="flex:1;background:#374151;padding:18px 0;color:#fff">700</div><div style="flex:1;background:#1F2937;padding:18px 0;color:#fff">800</div><div style="flex:1;background:#111827;padding:18px 0;color:#fff">900</div>
</div>

`50 #F9FAFB` · `100 #F3F4F6` · `200 #E5E7EB` · `300 #D1D5DB` · `400 #9CA3AF` · `500 #6B7280` · `600 #4B5563` · `700 #374151` · `800 #1F2937` · `900 #111827`

Text colors: headline `#111111`, body `#444444`.

## Pastel accents

<div style="display:flex;gap:8px;margin:12px 0;font-size:11px">
<div style="flex:1;background:#F3F0FF;padding:16px 8px;border-radius:10px">Lavender<br>#F3F0FF</div><div style="flex:1;background:#FFF4F0;padding:16px 8px;border-radius:10px">Peach<br>#FFF4F0</div><div style="flex:1;background:#F0FFF7;padding:16px 8px;border-radius:10px">Mint<br>#F0FFF7</div><div style="flex:1;background:#FFE8E8;padding:16px 8px;border-radius:10px">Coral<br>#FFE8E8</div>
</div>

Section backgrounds and card fills only. Never text. Never icons. Used as diagonal washes behind heroes and feature sections.

## Interface themes

| Token | Dark (app default) | Light (marketing site) |
|---|---|---|
| Background | `#0A0A0A` | `#F9FAFB` |
| Foreground | `#E8E8E8` | `#111827` |
| Card | `#111111` | `#FFFFFF` |
| Border | `#262626` | `#E5E7EB` |
| Muted | `#202020` | `#F3F4F6` |
| Muted foreground | `#A3A3A3` | `#4B5563` |
| Primary | `#ED128C` | `#ED128C` |

- Marketing site (completeful.com): light
- Seller dashboard (app.completeful.com): dark

## Contrast, measured

| Pair | Ratio | Verdict |
|---|---|---|
| `#ED128C` on white | 4.15:1 | Large text only (18px+, or 14px bold) |
| `#C4106A` on white | 5.79:1 | Passes AA for all text. Use for pink text under 18px |
| White on `#ED128C` | 4.15:1 | Large text only. Fine for 16px bold uppercase buttons |
| `#FF6B35` on white | 2.84:1 | Fails. Decoration only |
| `#34424E` on white | 10.32:1 | Passes AAA |
| `#ED128C` on `#0A0A0A` | 4.78:1 | Passes AA |

## Print

- CMYK values are naive conversions, not press proofs.
- `#ED128C` sits outside CMYK gamut. Prints duller, worst on uncoated stock.
- Packaging and apparel: get a press proof or physical spot match.
- No Pantone assigned yet. Open item.

## Files

| File | Use |
|---|---|
| [[99 Assets/Brand Kit/Colors/completeful_color_sheet.png\|completeful_color_sheet.png]] | Canva, decks, print reference |
| [[99 Assets/Brand Kit/Colors/completeful_colors.json\|completeful_colors.json]] | Programmatic use. RGB, CMYK, contrast |
| [[99 Assets/Brand Kit/Colors/completeful_colors.css\|completeful_colors.css]] | CSS custom properties |
| [[99 Assets/Brand Kit/Colors/completeful_colors.scss\|completeful_colors.scss]] | SCSS variables |
| [[99 Assets/Brand Kit/Colors/completeful_swatches.ase\|completeful_swatches.ase]] | Illustrator, Photoshop, InDesign swatches |
| [[99 Assets/Brand Kit/Colors/completeful_palette.gpl\|completeful_palette.gpl]] | Inkscape, GIMP, Krita |
| [[99 Assets/Brand Kit/Tokens/tokens.json\|tokens.json]] | W3C design tokens |

## Related
- [[00 Brand/Visual Identity/_Completeful Brand System|★ Completeful Brand System]]
- [[00 Brand/Visual Identity/Typography|Typography]]
- [[00 Brand/Visual Identity/Logo Usage|Logo Usage]]
- [[00 Brand/Visual Identity/Design System & Components|Design System & Components]]
- [[00 Brand/_Archive/Legacy Visual Identity (Deprecated)|Legacy Visual Identity (Deprecated)]]
