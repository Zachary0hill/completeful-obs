---
title: "_Completeful Image Style Spec"
type: brand-guideline
canonical: true
status: canonical
updated: 2026-09-22
tags:
  - brand
  - brand/visual
  - visual-identity
  - mockups
  - design
---

# Completeful Image Style Spec

Single source of truth for AI image and infographic generation. Visual twin of the master brand prompt. Paste the style block into any image model (nano-banana, fal, Photoroom prompts, Canva briefs) or feed it to an automation that builds image prompts.

> [!success] Palette resolved 2026-09-22
> The Brand Kit v1.0 (built from production tokens) is the only current system. Navy and teal and the imported `#FF2D7E` theme are retired. See [[00 Brand/Visual Identity/_Completeful Brand System|Completeful Brand System]] and [[00 Brand/_Archive/Legacy Visual Identity (Deprecated)|Legacy archive]].

## Core palette

- **Completeful Pink** `#ED128C`: primary accent. Dividers, icons, highlights, key words
- **Signature gradient** `#FF2B92 to #FF8433` at 135deg: ONE element per image. Hook word, stat, or CTA. Never body text, never full background
- **Orange** `#FF6B35`: small accent only. Never text
- **Navy** `#34424E`: secondary structure, dark text on light
- **Dark background** `#0A0A0A` / Ink `#111827`, card `#111111`
- **Light background** white or `#F9FAFB`, pastel washes: lavender `#F3F0FF`, peach `#FFF4F0`, mint `#F0FFF7`, coral `#FFE8E8`
- **Text** white `#FFFFFF` / `#E8E8E8` on dark. `#111111` / `#444444` on light
- Composition: dark or white base 60 to 70%, whitespace 20%, pink 5 to 10%, gradient 3 to 5%

## Typography feel (on-image text)

- **Headlines, hooks, stat callouts:** Owners style. Bold wide geometric grotesque, all caps, tight tracking
- **Labels, CTA:** Owners Bold style, uppercase, 1px tracking
- **Body, captions:** Inter style. Clean, legible, Regular or Medium
- Never thin or light weights. Never script, serif, or condensed display faces

## Per-format layout

- **Infographic / Carousel (1:1, 1080px):** `#0A0A0A` background. One large all-caps headline, one word in the pink to orange gradient. One highlighted stat. Thin pink divider. Pink line icons. White and light gray text. 80px margins. Uncluttered, high contrast. White logo bottom right if shown
- **Reel / TikTok cover (9:16, 1080x1920):** Dark background or dark photo with scrim. Big all-caps hook upper middle, optional `#0A0A0A` pill at 70%. Safe zones: 96px sides, 160px top, 300px bottom. Emblem lower corner
- **Product Showcase:** Photorealistic flat lay or lifestyle. Natural light, neutral white balance. White, off-white or soft pastel background. Product fills 70 to 85%, padding for text. Pink appears as an accent inside the frame only. 2000px+
- **Behind the Scenes:** Real Lafayette facility feel. Warehouse racking, machines mid-run (laser engraver, UV printer, embroidery head, DTG), personalized close ups with a legible name, packed boxes, hands in frame. Natural light. Leave clean space for overlay

## Photography rules

- Real facility, real product, real hands. Operational credibility over stock polish
- Natural light, neutral white balance, no heavy filters
- Product is the hero. No distracting props, no competitor products
- Pink as an accent inside the frame, never a color overlay across it
- Text over photo: dark low detail area or a solid brand color band

## The Image Style Block (paste into any image tool or automation)

```
COMPLETEFUL VISUAL BRAND.
Backgrounds: near-black #0A0A0A or ink #111827 for social and infographics, cards #111111; white or #F9FAFB with soft pastel washes (lavender #F3F0FF, peach #FFF4F0, mint #F0FFF7) for product and light layouts.
Accent: vivid pink #ED128C for dividers, icons, highlights. Signature pink-to-orange gradient #FF2B92 to #FF8433 at 135 degrees on ONE element only (a hook word, a stat, or the CTA). Orange #FF6B35 as a tiny accent only. Navy #34424E for secondary structure on light.
Text: white #FFFFFF and #E8E8E8 on dark, #111111 and #444444 on light.
Type feel: bold wide geometric grotesque headlines in ALL CAPS with tight tracking (Owners style); clean sans for support (Inter). Never thin, script, serif, or condensed.
Mood: direct, operational, confident. US-made print on demand and 3PL for Etsy, TikTok Shop, Shopify sellers. Real warehouse, real product, natural light, neutral white balance. Generous margins, high contrast, rounded 24px cards, modern, uncluttered.
Always: crisp legible correctly spelled on-image text, balanced composition, brand name spelled Completeful.
Never: watermarks, fake logos, stock-photo cliche, clutter, emojis, teal, navy-and-teal palettes, neon off-brand colors, pink color overlays across photos, busy backgrounds behind text.
```

## Usage notes

- The Image Generation n8n workflow's art director step builds each prompt from this system plus the piece's hook, proof point and format
- Locked layout infographics: use a Canva brand template autofill instead of raw image generation
- Canva brand kit still needs updating to this palette and type stack. Open item in [[00 Brand/Visual Identity/_Completeful Brand System|Completeful Brand System]]

## Related
- [[00 Brand/Visual Identity/_Completeful Brand System|★ Completeful Brand System]]
- [[00 Brand/Visual Identity/Color Palette|Color Palette]]
- [[00 Brand/Visual Identity/Typography|Typography]]
- [[00 Brand/Visual Identity/Templates & Dimensions|Templates & Dimensions]]
- [[00 Brand/Visual Identity/Photography & Mockup Style|Photography & Mockup Style]]
- [[00 Brand/Visual Identity/Logo Usage|Logo Usage]]
- [[00 Brand/AI Context/_Completeful Master Brand Prompt|Master Brand Prompt]]
