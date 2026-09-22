---
title: Typography
type: brand-guideline
status: canonical
source: Completeful Brand Kit v1.0 (Sept 2026), generated from production globals.css
updated: 2026-09-22
tags:
  - brand
  - brand/visual
  - visual-identity
  - brand-voice
  - design
  - content
---

# Typography

> [!important] Source of truth
> Two families. **Owners** sets everything that shouts. **Inter** sets everything that explains.

## Families

| Family | Role | Weights | License | In vault |
|---|---|---|---|---|
| **Owners** | Headlines, buttons, navbar, section titles | 700, 800 | MCKL Type, commercial. Included with Adobe Fonts | No. Licensed, install via Adobe Fonts |
| **Inter** | Body, UI, labels, badges, product labels | 400, 500, 600, 700 | SIL OFL | Drive kit `03_Fonts/Inter` |
| **Work Sans** | Body alternate, secondary UI | 400 to 700 | SIL OFL | Drive kit `03_Fonts/Work_Sans` |
| **Archivo** | Approved Owners fallback | 700, 800, 900 | SIL OFL | Drive kit `03_Fonts/Archivo_Fallback` |

Font stacks (from [[99 Assets/Brand Kit/Tokens/tokens.json|tokens.json]]):

```css
--cf-font-heading: Owners, Archivo, sans-serif;
--cf-font-body: Inter, "Work Sans", system-ui, sans-serif;
```

## Type scale

| Level | Family and weight | Size | Line height | Tracking | Case |
|---|---|---|---|---|---|
| Hero headline | Owners ExtraBold 800 | `clamp(36px, 6vw, 48px)` | 1.1 | -0.5px | UPPERCASE |
| Section heading | Owners Bold 700 | 24px to 36px responsive | 1.2 | -0.5px | UPPERCASE |
| Subsection heading | Owners Bold 700 | 24px | 1.3 | -0.5px | UPPERCASE |
| Subheadline | Inter Medium 500 | 18px (16px mobile) | 1.6 | 0 | Sentence |
| Body | Inter Regular 400 | 16px mobile, 18px from 768px | 1.6 | 0 | Sentence |
| Product label | Inter Medium 500 | 14px | 1.4 | 0.2px | Capitalize |
| Badge, micro copy | Inter Regular 400 | 13px | 1.4 | 0 | Sentence |
| Button label | Owners Bold 700 | 16px (14px mobile) | 1 | 1px (0.8px mobile) | UPPERCASE |

- Body color `#444444`. Headline color `#111111`.
- Body measure capped near 70 characters.

## Social and print sizing

Derived from the scale above for 1080px canvases.

| Level | Family and weight | Size at 1080px |
|---|---|---|
| Hook title | Owners ExtraBold 800, uppercase | 64 to 88px |
| Slide header | Owners Bold 700, uppercase | 36 to 44px |
| Slide body | Inter Regular or Medium | 24 to 28px |
| CTA | Owners Bold 700, uppercase, 1px tracking | 32 to 40px |
| Tag, small callout | Inter SemiBold 600 | 18 to 20px |

Print: titles Owners 800 at 48 to 96pt, section heads Owners 700 at 24 to 36pt, body Inter 400 at 10 to 12pt, captions Inter 400 at 8 to 9pt.

## Rules

Do:

- Set headlines uppercase with tight negative tracking
- Keep body copy sentence case at 1.6 line height
- Use gradient text on one word per headline at most
- Let Inter carry every paragraph, table and form label

Do not:

- Set body copy in Owners
- Mix Inter and Work Sans in the same block
- Add a third display face for a campaign
- Set all caps under 14px without tracking
- Use light weights. The brand is bold or regular

## Known issue: Owners on the live site

- `globals.css` imports Owners from `api.fontshare.com`
- Fontshare does not publish Owners, so the request returns an empty stylesheet
- Every live heading renders in a fallback face
- Fix: embed Owners through an Adobe Fonts web project, or set the heading stack to Archivo
- Confirm the license covers web embedding. Adobe Fonts via Creative Cloud does. A direct MCKL desktop license does not

## Canva

- Canva brand kit still lists Gotham and SF Pro Display. Neither is used in the product
- Update Canva to Owners (if license allows upload), Inter, Work Sans, Archivo
- Upload the variable TTFs from the Drive kit `03_Fonts/`

## Install

- macOS: double click the `.ttf`, click Install Font. Team install: `/Library/Fonts/`
- Web: [[99 Assets/Brand Kit/Tokens/webfont_import.css|webfont_import.css]], point `url()` paths at hosted woff2 files
- Font binaries live in Drive only: `Media Vault/02 Brand Assets/Completeful/Completeful_Brand_Kit/03_Fonts/`

## Related
- [[00 Brand/Visual Identity/_Completeful Brand System|★ Completeful Brand System]]
- [[00 Brand/Visual Identity/Color Palette|Color Palette]]
- [[00 Brand/Visual Identity/Design System & Components|Design System & Components]]
- [[00 Brand/Visual Identity/Templates & Dimensions|Templates & Dimensions]]
- [[00 Brand/_Archive/Legacy Visual Identity (Deprecated)|Legacy Visual Identity (Deprecated)]]
