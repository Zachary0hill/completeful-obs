---
title: Completeful Brand System
type: brand-guideline
status: canonical
source: Completeful Brand Kit v1.0 (Sept 2026), built from the production repo tokens
updated: 2026-09-22
aliases:
  - Brand System
  - Brand Kit
  - Source of Truth
  - Design System
tags:
  - brand
  - brand/visual
  - visual-identity
  - colors
  - design
---

# Completeful Brand System

> [!important] Source of truth
> - Canonical values: production repo `tailwind.config.js` + `src/app/globals.css`
> - Code wins over Canva when they disagree
> - Every visual identity note in this vault now follows this system
> - Old navy and teal values: [[00 Brand/_Archive/Legacy Visual Identity (Deprecated)|archived]]

![[99 Assets/Brand Kit/Brand_Board/completeful_brand_board.png]]

## The numbers to remember

| Token | Value |
|---|---|
| Brand pink | `#ED128C` |
| Pink text under 18px | `#C4106A` |
| Gradient | `135deg #FF2B92 to #FF8433` |
| Orange accent | `#FF6B35` (never text) |
| Navy | `#34424E` |
| Ink | `#111827` |
| Dark app bg | `#0A0A0A` |
| Headings | Owners 700/800, uppercase, -0.5px (fallback Archivo) |
| Body | Inter 400/500, 1.6 line height |
| Button radius | 8px |
| Card radius | 1.5rem |
| Motion | 300ms ease out, lift 2px |

## Logo at a glance

![[99 Assets/Brand Kit/Logos/PNG/completeful_horizontal_gradient_800w.png|360]]

| Emblem | Pink | One color |
|---|---|---|
| ![[99 Assets/Brand Kit/Logos/PNG/completeful_emblem_gradient_512w.png\|90]] | ![[99 Assets/Brand Kit/Logos/PNG/completeful_emblem_pink_512w.png\|90]] | ![[99 Assets/Brand Kit/Logos/PNG/completeful_horizontal_pink_400w.png\|200]] |

## System pages

| Page | Covers |
|---|---|
| [[00 Brand/Visual Identity/Color Palette\|Color Palette]] | Core palette, gradient, pink and neutral scales, pastels, themes, measured contrast, print |
| [[00 Brand/Visual Identity/Typography\|Typography]] | Owners + Inter, type scale, social sizing, rules, Owners font fix |
| [[00 Brand/Visual Identity/Logo Usage\|Logo Usage]] | Variants with previews, which file to use, clear space, minimums, backgrounds |
| [[00 Brand/Visual Identity/Iconography\|Iconography]] | 134 icons rendered with filenames, builds, rules |
| [[00 Brand/Visual Identity/Design System & Components\|Design System & Components]] | Buttons, cards, radii, motion, backgrounds, code drop-ins, Drive design system |
| [[00 Brand/Visual Identity/Templates & Dimensions\|Templates & Dimensions]] | Social, video, blog, ad specs in the current system |
| [[00 Brand/Visual Identity/_Completeful Image Style Spec\|Image Style Spec]] | AI image generation spec in the current system |
| [[00 Brand/Visual Identity/Photography & Mockup Style\|Photography & Mockup Style]] | Photo and mockup direction |
| [[99 Assets/Brand Kit Files\|Brand Kit Files]] | Every file copied into the vault, with Drive master paths |

## Full guidelines

- PDF: [[99 Assets/Brand Kit/Guidelines/Completeful_Brand_Guidelines.pdf|Completeful_Brand_Guidelines.pdf]]
- HTML (open in browser, images resolve inside the vault): [[99 Assets/Brand Kit/Guidelines/Completeful_Brand_Guidelines.html|Completeful_Brand_Guidelines.html]]

![[99 Assets/Brand Kit/Guidelines/Completeful_Brand_Guidelines.pdf#height=600]]

## Applications

| Surface | Asset | Notes |
|---|---|---|
| Website header | Gradient horizontal PNG or SVG | About 180px wide, links home |
| Favicon, app icons | `Logos/App_Icons/` | 16, 32, 180 apple touch, 192 and 512 android |
| Social profile | Emblem gradient 512 | Centered, generous padding, white or black field |
| Open graph | `open_graph_1200x630.jpg` | 1200 x 630 |
| Email signature | Horizontal pink 400w PNG | Cap 180px, PNG not SVG |
| Slide decks | White knockout on dark cover, pink on light interior | Owners titles, Inter body |
| Packing slips, inserts | Solid pink or black horizontal | One color, no gradient |
| Packing tape, boxes | Emblem + wordmark, one color | Gradient fails on flexo, use solid pink |
| Embroidery, engraving | Emblem, single color, 0.75in min | Drop the gradient |
| Vehicle, signage | SVG only | Never scale a PNG for large format |

## Photography

- Real facility, real product, real hands
- Warehouse floor, machines mid-run (laser, UV, embroidery, DTG), legible personalization close ups, packed boxes, hands in frame
- Natural light, neutral white balance, no heavy filters
- Pink as an accent inside the frame, never an overlay across it
- Text over photo: dark low detail area or a solid brand color band
- Process graphics keep the four steps: Connect your store, Send us your inventory, We pick, personalize and pack, Fast shipping

## Naming

- **Completeful**. One word, capital C
- Never: Complete Ful, CompleteFul, Completefull, CompleteFull
- Social handle: @completefultech

## Open items (priority order)

- [ ] Fix the Owners font import on completeful.com (live headings render in a fallback)
- [ ] Confirm the Owners license covers web embedding
- [ ] Locate the original vector logo master (AI or EPS)
- [ ] Assign a Pantone for pink
- [ ] Standardize icons to one grid and stroke weight
- [ ] Update the Canva brand kit (remove Gotham and SF Pro Display, add Owners, Inter, Work Sans, new palette)
- [ ] Create a stacked or vertical lockup
- [ ] Build a photography library

## Where things live

| What | Location |
|---|---|
| Vault copies (embeds, daily use) | `99 Assets/Brand Kit/` |
| Drive masters (fonts, all 3 icon builds, every PNG size) | `Media Vault/02 Brand Assets/Completeful/Completeful_Brand_Kit/` |
| Drive kit zip | `Media Vault/02 Brand Assets/Completeful/Completeful_Brand_Kit.zip` |
| Full component design system | `Media Vault/02 Brand Assets/Completeful/Completeful Design System/` |
| Canonical code | Completeful repo `tailwind.config.js`, `src/app/globals.css` |

## Related
- [[10 Maps/Brand MOC|Brand MOC]]
- [[10 Maps/Topic - Visual Identity MOC|Visual Identity MOC]]
- [[00 Brand/AI Context/_Completeful Master Brand Prompt|Master Brand Prompt]]
