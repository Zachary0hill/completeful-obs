---
title: Typography
type: brand-guideline
tags:
  - brand
  - brand/visual
  - visual-identity
  - brand-voice
  - design
  - content
---

## Overview

Completeful's type system uses three typefaces with distinct, non-overlapping roles. Bebas Neue delivers punchy, high-energy headlines that match the bold, seller-coaching voice. Inter and Montserrat cover all UI, body, and supporting copy with clarity and readability. Together the system feels both professional and energetic without becoming overly designed.

---

## Typefaces

### Bebas Neue
**Role:** Display, headlines, hook statements, carousel title slides, reel text overlays, stat callouts

Bebas Neue is an all-caps condensed sans-serif. It commands attention at large sizes and pairs naturally with the Navy/Teal color palette. It is never used for body copy or at small sizes.

- Style: All caps only (the typeface has no lowercase)
- Google Fonts: Yes (free, web-safe via Google Fonts CDN)
- Adobe Fonts: Available

**Approved weights:** Regular (400) — this is the only weight; the design intent is achieved through size, color, and tracking

### Inter
**Role:** Body copy, UI labels, captions, metadata, footnotes, email body, documentation

Inter was designed specifically for screen readability. It is the go-to choice for any text that needs to be read in full sentences, especially at small-to-medium sizes on digital screens.

- Style: Geometric sans-serif, neutral, highly legible
- Google Fonts: Yes
- Approved weights: Regular (400), Medium (500), SemiBold (600), Bold (700)
- Do not use: Thin (100), Light (300), or Black (900) — these weights fall outside the brand's clean, confident tone

### Montserrat
**Role:** Subheadings, call-to-action text, UI navigation, card headers, infographic labels, social copy overlays

Montserrat is slightly more characterful than Inter and works as the mid-level voice in the hierarchy. It bridges Bebas Neue headlines and Inter body text. Montserrat is also the preferred typeface for button labels, slide subtitles, and short explanatory headers.

- Style: Geometric sans-serif with a slightly friendly quality
- Google Fonts: Yes
- Approved weights: Regular (400), Medium (500), SemiBold (600), Bold (700), ExtraBold (800)

---

## Type Size Hierarchy

### Web and Digital Content

| Level | Typeface | Weight | Size | Use Case |
|---|---|---|---|---|
| H1 Display | Bebas Neue | Regular | 56-72px | Hero sections, page titles, carousel hook slide |
| H1 | Bebas Neue | Regular | 40-56px | Section headers, video overlay titles |
| H2 | Montserrat | Bold (700) | 28-36px | Sub-section headers, carousel slide titles |
| H3 | Montserrat | SemiBold (600) | 22-26px | Card headers, infographic section titles |
| H4 | Montserrat | Medium (500) | 18-20px | Feature labels, bold callouts |
| Body | Inter | Regular (400) | 16px | Long-form copy, blog posts, email body |
| Body Large | Inter | Regular (400) | 18px | Intro paragraphs, pull quotes |
| UI / Label | Inter | Medium (500) | 14px | Navigation, tags, button labels (when not Montserrat) |
| Caption | Inter | Regular (400) | 12px | Image credits, footnotes, fine print |

### Social Content (Carousels, Reels, Stories)

| Level | Typeface | Weight | Approximate Size |
|---|---|---|---|
| Slide Hook Title | Bebas Neue | Regular | 60-80px at 1080px canvas |
| Slide Body Header | Montserrat | Bold | 32-40px |
| Slide Body Text | Inter | Regular or Medium | 22-26px |
| CTA Text | Montserrat | ExtraBold | 30-38px |
| Small Callout / Tag | Inter | SemiBold | 18px |

### Print

| Level | Typeface | Size |
|---|---|---|
| Cover / Title | Bebas Neue | 60-96pt |
| Section Header | Montserrat Bold | 24-36pt |
| Body | Inter Regular | 10-12pt |
| Caption / Footnote | Inter Regular | 8-9pt |

---

## Pairing Rules

1. Bebas Neue always functions as the loudest voice in a composition. Do not pair two Bebas Neue elements of similar size on the same slide or section; vary scale dramatically (e.g., 72px headline next to a 22px Inter body line).

2. Montserrat and Inter can coexist on the same slide or page, but differentiate them by weight and size. A common pairing: Montserrat SemiBold at 28px for the section title, Inter Regular at 16px for the paragraph.

3. Never set Bebas Neue below 24px. At smaller sizes it loses legibility and the brand impact is lost.

4. Tracking (letter-spacing): Bebas Neue headlines benefit from slight negative tracking at very large sizes (-10 to -20 units) and neutral or slight positive tracking at smaller display sizes (+20 to +40 units). Montserrat and Inter use default tracking in most cases; apply slight positive tracking (+50 to +100 units) for all-caps label text in Montserrat.

5. Line height: Body copy (Inter) at 1.6x line height for readability. Bebas Neue display at 0.95-1.1x. Montserrat headers at 1.2-1.3x.

---

## Web vs Print Considerations

**Web / Digital:**
Load typefaces via Google Fonts CDN for performance. Define the font stack with system fallback:
- Bebas Neue: `'Bebas Neue', Impact, sans-serif`
- Inter: `'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`
- Montserrat: `'Montserrat', 'Helvetica Neue', Arial, sans-serif`

Use `font-display: swap` to avoid invisible text during load.

**Print:**
Embed fonts as subsets in exported PDFs. For large-format print (banners, booth graphics), use vector-exported PDF or EPS to prevent rasterization artifacts on Bebas Neue headlines. Print files should be exported at 300 DPI minimum for any raster elements accompanying the type.

## Related
- [[00 Brand/Visual Identity/Color Palette|Color Palette]]
- [[00 Brand/Visual Identity/Photography & Mockup Style|Photography & Mockup Style]]
- [[00 Brand/Visual Identity/Logo Usage|Logo Usage]]
- [[00 Brand/Visual Identity/Templates & Dimensions|Templates & Dimensions]]
- [[00 Brand/Visual Identity/Completeful Brand Theme (Light + Dark)|Completeful Brand Theme (Light + Dark)]]
