---
title: Color Palette
type: brand-guideline
tags:
  - brand
  - brand/visual
  - visual-identity
  - content
---

## Overview

The Completeful color palette is built to communicate reliability, professionalism, and energy. Navy grounds the brand with authority and trust. Teal signals forward motion and accessibility. Accent Blue adds depth and supports CTAs and link states. The secondary dark background system with orange-gold gradient moments injects warmth and visual drama for high-impact content.

---

## Primary Colors

### Navy
The dominant brand color. Used for primary backgrounds, the logo on light surfaces, and text on light backgrounds. This is the color most associated with Completeful in any marketing context.

- HEX: `#1B2A4A`
- RGB: `27, 42, 74`
- CMYK (approximate for print): `64, 43, 0, 71`
- Usage: primary backgrounds, header fills, dark-mode base, logo mark on light surfaces, large body text on white

### Teal
The primary accent. Drives energy and draws the eye to key actions, highlights, and brand moments. Use purposefully; it should never compete with primary body copy or overwhelm the Navy base.

- HEX: `#1ABC9C`
- RGB: `26, 188, 156`
- CMYK (approximate for print): `86, 0, 17, 26`
- Usage: CTAs, buttons, highlight bars, iconography, dividers, active states, pull-quote accents, carousel slide accent elements

### Accent Blue
A mid-range blue that bridges Navy and Teal. Used for links, secondary CTAs, hover states, informational callouts, and chart/data visualization bars where a third color is needed.

- HEX: `#3A7BD5`
- RGB: `58, 123, 213`
- CMYK (approximate for print): `73, 42, 0, 16`
- Usage: hyperlinks, secondary action buttons, highlight overlays, data visualization, informational badges

---

## Secondary Colors

### Dark Background System
For content formats requiring a premium, high-contrast feel (social carousels, video intros, ad creatives), Completeful uses deep dark backgrounds rather than pure Navy. These keep visual interest without deviating from brand.

- **Deep Charcoal:** `#111827` (RGB: 17, 24, 39) — near-black used for social card backgrounds and video overlays
- **Elevated Surface:** `#1E2D40` (RGB: 30, 45, 64) — a Navy-adjacent dark used for card surfaces layered on the Deep Charcoal base

### Orange-Gold Gradient
Reserved for accent moments: featured stat callouts, promotional banners, testimonial highlights, and carousel hook slides where maximum visual energy is needed. Never apply this gradient to body text or to the logo itself.

- **Gold Start:** `#F5A623` (RGB: 245, 166, 35)
- **Orange End:** `#E85D04` (RGB: 232, 93, 4)
- Gradient direction: 135 degrees (diagonal, top-left to bottom-right) as the default; horizontal (90 deg) acceptable for banner strips
- Usage: stat backgrounds, "hook" slide accents, promotional callout chips, CTA button variant for maximum-urgency moments

---

## Usage Ratios

| Color Role | Approximate Share of Visual Composition |
|---|---|
| Navy (primary backgrounds, text) | 50-60% |
| White / light neutral (text, space) | 20-25% |
| Teal (accents, CTAs) | 10-15% |
| Accent Blue (links, secondary) | 5-8% |
| Orange-Gold gradient (hero moments) | 3-5% |

The orange-gold gradient is a high-energy accent, not a base color. Overuse dilutes its impact and makes the brand feel less focused.

---

## Text and Background Pairings

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

## Accessibility and Contrast Notes

WCAG 2.1 AA requires a contrast ratio of 4.5:1 for normal text and 3:1 for large text and UI components.

- **White on Navy (#1B2A4A):** contrast ratio approximately 10.4:1 — excellent, passes all WCAG levels
- **White on Teal (#1ABC9C):** contrast ratio approximately 1.9:1 — fails WCAG AA for body text; Teal on white backgrounds is reserved for large display text (Bebas Neue headlines 32px+) and decorative elements only, never for paragraph copy
- **Navy on White:** contrast ratio approximately 10.4:1 — excellent
- **Accent Blue on White (#3A7BD5):** contrast ratio approximately 4.6:1 — passes WCAG AA for normal text
- **Accent Blue on Navy:** high contrast, passes AA

When designing accessible digital interfaces (web, app), default to White-on-Navy or Navy-on-White pairings for body copy and rely on Teal and Accent Blue for decorative and interactive elements only.

## Related
- [[00 Brand/Visual Identity/Typography|Typography]]
- [[00 Brand/Visual Identity/Logo Usage|Logo Usage]]
- [[00 Brand/Visual Identity/Photography & Mockup Style|Photography & Mockup Style]]
- [[00 Brand/Visual Identity/Templates & Dimensions|Templates & Dimensions]]
- [[00 Brand/Visual Identity/Completeful Brand Theme (Light + Dark)|Completeful Brand Theme (Light + Dark)]]
