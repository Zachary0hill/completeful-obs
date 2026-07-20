---
title: "_Completeful Image Style Spec"
type: brand-guideline
canonical: true
tags:
  - brand
  - brand/visual
  - visual-identity
  - mockups
  - design
---

# Completeful — Image Style Spec

Single source of truth for AI image and infographic generation. This is the visual twin of the master brand prompt: paste the style block into any image model (nano-banana, fal, Photoroom prompts, Canva briefs) or feed it to an automation that builds image prompts. When the visual system changes, change it here.

> [!warning] Palette divergence to resolve
> Two palettes exist in the vault. The **content-design system** below (Navy / Teal / orange-gold, Bebas Neue) is authoritative for social content, carousels, and infographics — it is the one with full per-format layout specs. A separate imported **web theme** uses a pink `#FF2D7E` to orange `#FF6E47` gradient on dark ink `#0F1929`. Decide which is current for social before scaling. This spec uses the content-design system; swap the accent hexes here if the pink/orange theme wins.

## Core palette

- **Navy** `#1B2A4A` — primary brand background, dark base, large text on light
- **Deep Charcoal** `#111827` — premium social card / video background
- **Elevated Surface** `#1E2D40` — card surface on charcoal
- **Teal** `#1ABC9C` — primary accent: dividers, icons, highlight bars, CTAs
- **Accent Blue** `#3A7BD5` — links, secondary actions, data bars
- **Orange-Gold gradient** `#F5A623 → #E85D04` at 135° — reserved for ONE stat callout or hook accent per image, never body text or logo
- **White** `#FFFFFF` / **Light Gray** `#E8ECF0` — text on dark
- Composition ratio: Navy/dark 50-60%, white/space 20-25%, Teal 10-15%, Accent Blue 5-8%, orange-gold 3-5%

## Typography feel (for on-image text)

- **Headlines / hooks / stat callouts:** Bebas Neue style — bold, condensed, all-caps display. Energy through size, color, tracking.
- **Subheads / labels / CTA:** Montserrat style — geometric sans, Bold/ExtraBold.
- **Body / captions:** Inter style — clean, highly legible, Regular/Medium.
- Never thin or light weights. Never script or serif.

## Per-format layout

- **Infographic / Carousel (1:1 square, 1080px):** Deep Charcoal or Navy background. One large Bebas-style all-caps headline (the hook). One highlighted stat on the orange-gold gradient. Thin teal divider, minimal flat-line icons, white/light-gray text, 80px margins, uncluttered, high contrast. Logo bottom-right, white reversed, if shown.
- **Reel / TikTok cover (9:16 vertical, 1080x1920):** Dark background. Big all-caps hook text upper-middle, optionally on a semi-transparent dark pill (#111827 at 70%). Text safe zones: 96px sides, 160px top, 300px bottom. Icon-only logo lower corner.
- **Product Showcase:** Photorealistic flat-lay or lifestyle. Warm soft daylight 5000-5500K. Clean brand-aligned background (off-white, navy, charcoal). Product fills 70-85%, leave padding for text. Subtle Navy/Teal presence. 2000px+.
- **Behind the Scenes:** Photorealistic modern US fulfillment/manufacturing facility. Warm authentic light, real-feeling people and equipment, optimistic and trustworthy. Leave clean space for overlay.

## Photography rules

Soft diffused light, no harsh flash. Warm-neutral temperature, never cool/clinical. Product is the hero, no distracting props, no competitor products. Authentic and relatable, not staged stock-photo. Brand colors echoed naturally where possible.

## The Image Style Block (paste into any image tool / automation)

```
COMPLETEFUL VISUAL BRAND.
Backgrounds: deep charcoal #111827 or navy #1B2A4A for social/infographic; off-white or warm light gray for product flat-lays.
Text: white #FFFFFF and light gray #E8ECF0. Accent: teal #1ABC9C for dividers, icons, highlights. Secondary: accent blue #3A7BD5. Reserve an orange-to-gold gradient #F5A623 to #E85D04 for ONE stat or hook highlight only.
Type feel: bold condensed all-caps display headlines (Bebas Neue style); clean geometric sans for support (Montserrat / Inter). Never thin, script, or serif.
Mood: professional, confident, energetic, US-made print-on-demand for Etsy / TikTok Shop / Shopify sellers. Generous margins, high contrast, modern, uncluttered.
Always: crisp legible correctly-spelled on-image text, balanced composition.
Never: watermarks, fake logos, stock-photo cliche, clutter, emojis, neon/off-brand colors, busy backgrounds behind text.
```

## Usage Notes

- The Image Generation n8n workflow's art-director step builds each prompt from this system plus the piece's hook, proof point, and format.
- For true infographics with locked layout, type, and logo, use a Canva brand template autofill instead of raw image generation (stronger and more consistent than any model).
- Update the palette here if the pink/orange web theme is adopted for social.

## Related

- [[00 Brand/Visual Identity/Color Palette|Color Palette]]
- [[00 Brand/Visual Identity/Typography|Typography]]
- [[00 Brand/Visual Identity/Templates & Dimensions|Templates & Dimensions]]
- [[00 Brand/Visual Identity/Photography & Mockup Style|Photography & Mockup Style]]
- [[00 Brand/Visual Identity/Logo Usage|Logo Usage]]
- [[00 Brand/AI Context/_Completeful Master Brand Prompt|Master Brand Prompt]]
