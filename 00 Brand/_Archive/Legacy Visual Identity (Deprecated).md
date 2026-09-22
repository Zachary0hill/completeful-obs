---
title: Legacy Visual Identity (Deprecated)
type: archive
status: deprecated
deprecated: 2026-09-22
tags:
  - brand
  - archive
  - deprecated
---

# Legacy Visual Identity (Deprecated)

> [!warning] Deprecated 2026-09-22
> Nothing on this page is current. Do not use these values for any new work.
> Current source of truth: [[00 Brand/Visual Identity/_Completeful Brand System|Completeful Brand System]].
> Kept for history only. Three systems lived in the vault before the September 2026 Brand Kit: a navy and teal content system, a Bebas Neue and Montserrat type stack, and three imported web theme dumps built on #FF2D7E and #0F1929.

## Replacement map

| Legacy value | Replace with |
|---|---|
| Navy #1B2A4A | Completeful Navy #34424E (light UI) or Ink #111827 / Dark bg #0A0A0A (dark surfaces) |
| Teal #1ABC9C | Completeful Pink #ED128C |
| Accent Blue #3A7BD5 | Pink Deep #C4106A (small pink text, links) or Navy #34424E (secondary UI) |
| Orange-gold gradient #F5A623 to #E85D04 | Signature gradient #FF2B92 to #FF8433, 135deg |
| Deep Charcoal #111827 | Neutral 900 #111827 (unchanged value, now part of neutral scale) |
| Elevated Surface #1E2D40 | Dark card #111111 |
| Light Gray #F4F6F9 | Neutral 50 #F9FAFB |
| Theme pink #FF2D7E / orange #FF6E47 | #ED128C / #FF6B35, gradient #FF2B92 to #FF8433 |
| Theme ink #0F1929 | #111827 |
| Bebas Neue (display) | Owners ExtraBold 800, uppercase (fallback Archivo 800) |
| Montserrat (subheads, CTAs) | Owners Bold 700 for headings and buttons, Inter 500 or 600 for subheads |
| Inter (body) | Inter (unchanged) |

---

## Color Palette (legacy navy and teal system)

### Overview

The Completeful color palette is built to communicate reliability, professionalism, and energy. Navy grounds the brand with authority and trust. Teal signals forward motion and accessibility. Accent Blue adds depth and supports CTAs and link states. The secondary dark background system with orange-gold gradient moments injects warmth and visual drama for high-impact content.

---

### Primary Colors

#### Navy
The dominant brand color. Used for primary backgrounds, the logo on light surfaces, and text on light backgrounds. This is the color most associated with Completeful in any marketing context.

- HEX: `#1B2A4A`
- RGB: `27, 42, 74`
- CMYK (approximate for print): `64, 43, 0, 71`
- Usage: primary backgrounds, header fills, dark-mode base, logo mark on light surfaces, large body text on white

#### Teal
The primary accent. Drives energy and draws the eye to key actions, highlights, and brand moments. Use purposefully; it should never compete with primary body copy or overwhelm the Navy base.

- HEX: `#1ABC9C`
- RGB: `26, 188, 156`
- CMYK (approximate for print): `86, 0, 17, 26`
- Usage: CTAs, buttons, highlight bars, iconography, dividers, active states, pull-quote accents, carousel slide accent elements

#### Accent Blue
A mid-range blue that bridges Navy and Teal. Used for links, secondary CTAs, hover states, informational callouts, and chart/data visualization bars where a third color is needed.

- HEX: `#3A7BD5`
- RGB: `58, 123, 213`
- CMYK (approximate for print): `73, 42, 0, 16`
- Usage: hyperlinks, secondary action buttons, highlight overlays, data visualization, informational badges

---

### Secondary Colors

#### Dark Background System
For content formats requiring a premium, high-contrast feel (social carousels, video intros, ad creatives), Completeful uses deep dark backgrounds rather than pure Navy. These keep visual interest without deviating from brand.

- **Deep Charcoal:** `#111827` (RGB: 17, 24, 39) — near-black used for social card backgrounds and video overlays
- **Elevated Surface:** `#1E2D40` (RGB: 30, 45, 64) — a Navy-adjacent dark used for card surfaces layered on the Deep Charcoal base

#### Orange-Gold Gradient
Reserved for accent moments: featured stat callouts, promotional banners, testimonial highlights, and carousel hook slides where maximum visual energy is needed. Never apply this gradient to body text or to the logo itself.

- **Gold Start:** `#F5A623` (RGB: 245, 166, 35)
- **Orange End:** `#E85D04` (RGB: 232, 93, 4)
- Gradient direction: 135 degrees (diagonal, top-left to bottom-right) as the default; horizontal (90 deg) acceptable for banner strips
- Usage: stat backgrounds, "hook" slide accents, promotional callout chips, CTA button variant for maximum-urgency moments

---

### Usage Ratios

| Color Role | Approximate Share of Visual Composition |
|---|---|
| Navy (primary backgrounds, text) | 50-60% |
| White / light neutral (text, space) | 20-25% |
| Teal (accents, CTAs) | 10-15% |
| Accent Blue (links, secondary) | 5-8% |
| Orange-Gold gradient (hero moments) | 3-5% |

The orange-gold gradient is a high-energy accent, not a base color. Overuse dilutes its impact and makes the brand feel less focused.

---

### Text and Background Pairings

| Text Color | Background | Approved |
|---|---|---|
| White `#FFFFFF` | Navy `#1B2A4A` | Yes |
| White `#FFFFFF` | Deep Charcoal `#111827` | Yes |
| White `#FFFFFF` | Teal `#1ABC9C` | Yes (headers/display only; check WCAG) |
| Navy `#1B2A4A` | White `#FFFFFF` | Yes |
| Navy `#1B2A4A` | Light Gray `#F4F6F9` | Yes |
| Teal `#1ABC9C` | Navy `#1B2A4A` | Yes (headlines/accents) |
| Teal `#1ABC9C` | White `#FFFFFF` | Caution, see accessibility note |
| Accent Blue `#3A7BD5` | White `#FFFFFF` | Yes |
| Accent Blue `#3A7BD5` | Navy `#1B2A4A` | Yes |
| Orange-Gold | Dark backgrounds only | Yes |
| Orange-Gold | White or light backgrounds | No |

---

### Accessibility and Contrast Notes

WCAG 2.1 AA requires a contrast ratio of 4.5:1 for normal text and 3:1 for large text and UI components.

- **White on Navy (#1B2A4A):** contrast ratio approximately 10.4:1 — excellent, passes all WCAG levels
- **White on Teal (#1ABC9C):** contrast ratio approximately 1.9:1 — fails WCAG AA for body text; Teal on white backgrounds is reserved for large display text (Bebas Neue headlines 32px+) and decorative elements only, never for paragraph copy
- **Navy on White:** contrast ratio approximately 10.4:1 — excellent
- **Accent Blue on White (#3A7BD5):** contrast ratio approximately 4.6:1 — passes WCAG AA for normal text
- **Accent Blue on Navy:** high contrast, passes AA

When designing accessible digital interfaces (web, app), default to White-on-Navy or Navy-on-White pairings for body copy and rely on Teal and Accent Blue for decorative and interactive elements only.

---

## Typography (legacy Bebas Neue and Montserrat system)

### Overview

Completeful's type system uses three typefaces with distinct, non-overlapping roles. Bebas Neue delivers punchy, high-energy headlines that match the bold, seller-coaching voice. Inter and Montserrat cover all UI, body, and supporting copy with clarity and readability. Together the system feels both professional and energetic without becoming overly designed.

---

### Typefaces

#### Bebas Neue
**Role:** Display, headlines, hook statements, carousel title slides, reel text overlays, stat callouts

Bebas Neue is an all-caps condensed sans-serif. It commands attention at large sizes and pairs naturally with the Navy/Teal color palette. It is never used for body copy or at small sizes.

- Style: All caps only (the typeface has no lowercase)
- Google Fonts: Yes (free, web-safe via Google Fonts CDN)
- Adobe Fonts: Available

**Approved weights:** Regular (400) — this is the only weight; the design intent is achieved through size, color, and tracking

#### Inter
**Role:** Body copy, UI labels, captions, metadata, footnotes, email body, documentation

Inter was designed specifically for screen readability. It is the go-to choice for any text that needs to be read in full sentences, especially at small-to-medium sizes on digital screens.

- Style: Geometric sans-serif, neutral, highly legible
- Google Fonts: Yes
- Approved weights: Regular (400), Medium (500), SemiBold (600), Bold (700)
- Do not use: Thin (100), Light (300), or Black (900) — these weights fall outside the brand's clean, confident tone

#### Montserrat
**Role:** Subheadings, call-to-action text, UI navigation, card headers, infographic labels, social copy overlays

Montserrat is slightly more characterful than Inter and works as the mid-level voice in the hierarchy. It bridges Bebas Neue headlines and Inter body text. Montserrat is also the preferred typeface for button labels, slide subtitles, and short explanatory headers.

- Style: Geometric sans-serif with a slightly friendly quality
- Google Fonts: Yes
- Approved weights: Regular (400), Medium (500), SemiBold (600), Bold (700), ExtraBold (800)

---

### Type Size Hierarchy

#### Web and Digital Content

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

#### Social Content (Carousels, Reels, Stories)

| Level | Typeface | Weight | Approximate Size |
|---|---|---|---|
| Slide Hook Title | Bebas Neue | Regular | 60-80px at 1080px canvas |
| Slide Body Header | Montserrat | Bold | 32-40px |
| Slide Body Text | Inter | Regular or Medium | 22-26px |
| CTA Text | Montserrat | ExtraBold | 30-38px |
| Small Callout / Tag | Inter | SemiBold | 18px |

#### Print

| Level | Typeface | Size |
|---|---|---|
| Cover / Title | Bebas Neue | 60-96pt |
| Section Header | Montserrat Bold | 24-36pt |
| Body | Inter Regular | 10-12pt |
| Caption / Footnote | Inter Regular | 8-9pt |

---

### Pairing Rules

1. Bebas Neue always functions as the loudest voice in a composition. Do not pair two Bebas Neue elements of similar size on the same slide or section; vary scale dramatically (e.g., 72px headline next to a 22px Inter body line).

2. Montserrat and Inter can coexist on the same slide or page, but differentiate them by weight and size. A common pairing: Montserrat SemiBold at 28px for the section title, Inter Regular at 16px for the paragraph.

3. Never set Bebas Neue below 24px. At smaller sizes it loses legibility and the brand impact is lost.

4. Tracking (letter-spacing): Bebas Neue headlines benefit from slight negative tracking at very large sizes (-10 to -20 units) and neutral or slight positive tracking at smaller display sizes (+20 to +40 units). Montserrat and Inter use default tracking in most cases; apply slight positive tracking (+50 to +100 units) for all-caps label text in Montserrat.

5. Line height: Body copy (Inter) at 1.6x line height for readability. Bebas Neue display at 0.95-1.1x. Montserrat headers at 1.2-1.3x.

---

### Web vs Print Considerations

**Web / Digital:**
Load typefaces via Google Fonts CDN for performance. Define the font stack with system fallback:
- Bebas Neue: `'Bebas Neue', Impact, sans-serif`
- Inter: `'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`
- Montserrat: `'Montserrat', 'Helvetica Neue', Arial, sans-serif`

Use `font-display: swap` to avoid invisible text during load.

**Print:**
Embed fonts as subsets in exported PDFs. For large-format print (banners, booth graphics), use vector-exported PDF or EPS to prevent rasterization artifacts on Bebas Neue headlines. Print files should be exported at 300 DPI minimum for any raster elements accompanying the type.

---

## Logo Usage (legacy rules)

### Overview

The Completeful logo is the primary visual anchor of the brand. Consistent, disciplined use of the logo builds recognition and trust with the POD seller audience. Every placement should reinforce that Completeful is a professional, US-based manufacturing and fulfillment partner, not a generic dropshipper.

Logo assets are hosted in the official Logos Drive:
https://drive.google.com/drive/folders/1VDTGZLhvCBgocyynfCfZgIwrvmeuxsFM

---

### Logo Variants

**Primary Logo (Horizontal Lockup)**
The wordmark accompanied by the brand icon/mark, arranged horizontally. This is the default version for most use cases: website headers, email signatures, presentation covers, and printed collateral.

**Stacked Lockup**
Icon centered above the wordmark. Use when horizontal space is constrained, such as square social profile images or square print panels. Minimum use at 120px wide.

**Icon / Mark Only**
The standalone brandmark without the wordmark. Reserved for contexts where the brand is already established in surrounding copy, such as app icons, favicon, watermarks on product mockups, and social media profile photos.

**Wordmark Only**
The logotype without the icon. Acceptable for in-line editorial use, email signatures as plain-text fallback contexts, and co-branded layouts where the icon would visually conflict.

**Reversed / White Version**
Full white knockouts of both the primary lockup and the icon-only mark. Use exclusively on dark backgrounds (Navy #1B2A4A or other dark brand backgrounds).

---

### Clear Space

Maintain clear space equal to the cap-height of the letter "C" in the wordmark on all four sides of the logo. No other graphic elements, text, photography, or decorative patterns should intrude on this buffer zone. On the icon-only mark, clear space equals the full height of the mark on each side.

---

### Minimum Size

| Variant | Digital Minimum | Print Minimum |
|---|---|---|
| Primary Horizontal | 160px wide | 1.25 in wide |
| Stacked Lockup | 120px wide | 1.0 in wide |
| Icon Only | 32px wide | 0.4 in wide |

Below these thresholds the logo becomes illegible and must not be used.

---

### Approved Backgrounds

The logo renders correctly on the following backgrounds:

- **Navy #1B2A4A** — use white/reversed logo
- **White #FFFFFF** — use full-color or dark logo
- **Light neutral (off-white, light gray)** — use full-color or dark logo
- **Dark photography** — use white/reversed logo with sufficient contrast; test legibility before finalizing
- **Teal #1ABC9C** — use white/reversed logo only; do not place the full-color logo on teal as the accent color in the logo will conflict

Avoid placing the logo over busy, patterned, or highly saturated photographic backgrounds. When photography is unavoidable, apply a semi-transparent dark scrim (Navy at 60% opacity minimum) behind the logo area.

---

### Misuse: What Not to Do

**Do not:**
- Stretch or skew the logo in any direction
- Rotate the logo
- Apply drop shadows, glows, bevels, or gradients to the logo
- Recolor the logo in any unapproved color (including orange, red, or random brand gradients)
- Place the full-color logo on the Teal background
- Use low-resolution logo files exported below minimum size
- Combine the logo with competitor wordmarks in a lockup
- Add tagline text directly to the logo file; keep the logo and tagline as separate elements
- Recreate the logo in a different typeface or weight
- Use an outdated logo version found outside the Logos Drive

---

### File Format Reference

| Use Case | Format |
|---|---|
| Web / digital | SVG (preferred), PNG with transparent background |
| Video overlays, mockups | PNG with transparent background |
| Print, large format | PDF or EPS vector |
| Social profile photos | PNG, square crop of icon or stacked lockup |

Always source files from the official Logos Drive. Do not use logo screenshots or compressed social-media exports as source material.

---

## Imported theme: Completeful Brand Theme (Light + Dark)

Color tokens and palette extracted from the theme HTML.

### CSS Variables / Tokens

| Token | Value |
| --- | --- |
| `--brand-pink` | #FF2D7E |
| `--brand-orange` | #FF6E47 |
| `--brand-gradient` | linear-gradient(135deg, #FF2D7E, #FF6E47) |
| `--brand-ink` | #0F1929 |
| `--brand-amber` | #FFB347 |
| `--page-bg` | #0e0f15 |
| `--page-text` | #e8eaf0 |
| `--page-muted` | #8a8fa3 |
| `--page-border` | rgba(255,255,255,0.08) |
| `--page-card` | #1a1c26 |
| `--mode-bg` | #FFFFFF |
| `--mode-secondary` | #FAFAFB |
| `--mode-tertiary` | #F1F3F5 |
| `--mode-elevated` | #FFFFFF |
| `--mode-ink` | #0F1929 |
| `--mode-text-secondary` | #475569 |
| `--mode-text-tertiary` | #64748B |
| `--mode-border` | #E2E8F0 |
| `--m-bg` | #FFFFFF |
| `--m-elevated` | #FFFFFF |
| `--m-tertiary` | #F1F3F5 |
| `--m-ink` | #0F1929 |
| `--m-text-2` | #475569 |
| `--m-text-3` | #64748B |
| `--m-border` | #E2E8F0 |

### Hex Colors Referenced

`#06070b`, `#0B1320`, `#0F1929`, `#0e0f15`, `#10B981`, `#15803d`, `#162236`, `#1A2540`, `#1C2A42`, `#1a1c26`, `#22324D`, `#22C55E`, `#2c4860`, `#3B82F6`, `#475569`, `#4d7c0f`, `#5a7fa3`, `#5d7f5e`, `#60A5FA`, `#64748B`, `#6b7280`, `#7a5a3a`, `#8a8fa3`, `#8fa890`, `#94A3B8`, `#B8780E`, `#CBD5E1`, `#D6206B`, `#E05230`, `#E2E8F0`, `#E89422`, `#EF4444`, `#F1F3F5`, `#F1F5F9`, `#F59E0B`, `#F5F6F8`, `#F87171`, `#F8FAFC`, `#FAFAFB`, `#FBBF24`, `#FF2D7E`, `#FF4D94`, `#FF5C9C`, `#FF6E47`, `#FF7CB0`, `#FF8662`, `#FF8AB8`, `#FF8E6E`, `#FFA388`, `#FFB347`, `#FFC056`, `#FFC56E`, `#FFCC8C`, `#FFD081`, `#FFFFFF`, `#a16207`, `#a3e635`, `#b89a78`, `#b91c1c`, `#c5cad6`, `#d4d4ea`, `#e8eaf0`, `#f5d4dc`, `#f9a8d4`, `#fde68a`, `#ffc5a8`

---

## Imported theme: Completeful Light + Charcoal Dark Theme

Color tokens and palette extracted from the theme HTML.

### CSS Variables / Tokens

| Token | Value |
| --- | --- |
| `--demo-bg` | #FFFFFF |
| `--demo-ink` | #0F1929 |
| `--demo-text-2` | #475569 |
| `--demo-text-3` | #52606D |
| `--demo-border` | #E2E8F0 |
| `--demo-elevated` | #FAFAFB |
| `--demo-ink-bg` | #0F1929 |
| `--demo-ink-text` | #FFFFFF |

### Hex Colors Referenced

`#047857`, `#06070b`, `#0F1929`, `#0e0f15`, `#10B981`, `#131316`, `#131418`, `#15803d`, `#17171A`, `#1C2A42`, `#1D4ED8`, `#1F1F23`, `#1a1c26`, `#22C55E`, `#27272C`, `#313137`, `#3B82F6`, `#475569`, `#4ADE80`, `#4ade80`, `#4d7c0f`, `#52606D`, `#5C5C62`, `#60A5FA`, `#64748B`, `#6b7280`, `#8a8fa3`, `#94A3B8`, `#94a3b8`, `#9A9AA0`, `#B45309`, `#B83A12`, `#B91C1C`, `#C20F5C`, `#C8C8CD`, `#D6206B`, `#E05230`, `#E2E8F0`, `#E89422`, `#EF4444`, `#F1F3F5`, `#F1F5F9`, `#F59E0B`, `#F5F5F7`, `#F5F6F8`, `#F87171`, `#FAFAFB`, `#FBBF24`, `#FCA5A5`, `#FF2D7E`, `#FF4D94`, `#FF5C9C`, `#FF6E47`, `#FF7CB0`, `#FF8662`, `#FF8E6E`, `#FFA388`, `#FFB347`, `#FFC056`, `#FFC56E`, `#FFD081`, `#FFFFFF`, `#a16207`, `#a3e635`, `#b91c1c`, `#c5cad6`, `#d4d4ea`, `#e8eaf0`, `#f1f5f9`, `#f9a8d4`, `#fde68a`

---

## Imported theme: Completeful Light Mode Optimized Theme

Color tokens and palette extracted from the theme HTML.

### Hex Colors Referenced

`#047857`, `#06070b`, `#0F1929`, `#0e0f15`, `#10B981`, `#15803d`, `#1C2A42`, `#1D4ED8`, `#1a1c26`, `#3B82F6`, `#475569`, `#4d7c0f`, `#52606D`, `#64748B`, `#6b7280`, `#818cf8`, `#86efac`, `#8a8fa3`, `#94A3B8`, `#94a3b8`, `#B45309`, `#B83A12`, `#B91C1C`, `#C20F5C`, `#D6206B`, `#E05230`, `#E2E8F0`, `#E89422`, `#EF4444`, `#F1F3F5`, `#F1F5F9`, `#F59E0B`, `#F5F6F8`, `#FAFAFB`, `#FF2D7E`, `#FF5C9C`, `#FF6E47`, `#FF8E6E`, `#FFB347`, `#FFC56E`, `#FFFFFF`, `#a16207`, `#a3e635`, `#b91c1c`, `#c5cad6`, `#c7d2fe`, `#d4d4ea`, `#e8eaf0`, `#f9a8d4`, `#fca5a5`, `#fde68a`

