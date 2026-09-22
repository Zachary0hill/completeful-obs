---
title: Design System & Components
type: brand-guideline
status: canonical
source: Completeful Brand Kit v1.0 components.css + Completeful Design System (reverse engineered from the production Next.js codebase)
updated: 2026-09-22
tags:
  - brand
  - brand/visual
  - visual-identity
  - design
  - app
---

# Design System & Components

> [!important] Production specs
> Values lifted from the production build, not approximations. Copy CSS from [[99 Assets/Brand Kit/Tokens/components.css|components.css]].

## Two surfaces

| Surface | URL | Theme | Background | Card |
|---|---|---|---|---|
| Marketing site | completeful.com | Light | `#F9FAFB` / white | `#FFFFFF`, 1px `#E5E7EB` |
| Seller dashboard | app.completeful.com | Dark | `#0A0A0A` | `#111111` to `#141414`, 2px border, accent on hover |

## Buttons

<div style="display:flex;flex-wrap:wrap;gap:10px;margin:12px 0;font-family:Owners,Archivo,sans-serif">
<span style="background:#ED128C;color:#fff;padding:12px 22px;border-radius:8px;font-weight:700;letter-spacing:1px;font-size:14px;box-shadow:0 4px 15px rgba(237,18,140,.25)">GET A FREE QUOTE</span>
<span style="background:linear-gradient(135deg,#FF2B92 0%,#FF8433 100%);color:#fff;padding:12px 22px;border-radius:8px;font-weight:700;letter-spacing:1px;font-size:14px">START FOR FREE</span>
<span style="border:2px solid #ED128C;color:#ED128C;padding:10px 20px;border-radius:8px;font-weight:700;letter-spacing:1px;font-size:14px">SCHEDULE A CALL</span>
<span style="border:2px solid #34424E;color:#34424E;padding:10px 20px;border-radius:8px;font-weight:700;letter-spacing:1px;font-size:14px;background:#fff">LEARN MORE</span>
</div>

| Type | Rest | Hover | Use |
|---|---|---|---|
| Primary | `#ED128C`, white label, shadow `0 4px 15px rgba(237,18,140,.25)` | `#C4106A`, lift 2px, shadow deepens | The one main action on a page |
| Gradient | `135deg #FF2B92 to #FF8433` | `#E00072 to #D63501`, lift, scale 1.02 | Hero CTA only, one per screen |
| Secondary | 2px pink outline, pink label | Fills pink, label white | Second action beside a primary |
| Outline | 2px navy `#34424E` outline, navy label | Fills navy, label white | Low emphasis, dense UI |

All buttons:

- Owners Bold 700, 16px, uppercase, 1px tracking
- Padding 14px block, 24px inline (outline variants 12px / 22px)
- 8px radius
- Press: scale 0.98
- Mobile under 768px: 14px, 12px / 20px padding, 0.8px tracking

## Cards

- White fill, 1px `#E5E7EB` border, no resting shadow
- Radius 1.5rem, padding 1.5rem
- Hover: border `rgba(237,18,140,.2)`, shadow `0 8px 30px rgba(237,18,140,.08)`, lift 2px

## Radius ladder

| Element | Radius |
|---|---|
| Buttons, inputs | 8px |
| Badges, small cards | 12px |
| Cards (`rounded-2xl`) | 16px to 1.5rem |
| Large feature cards | 24px to 2rem |
| Pills | full |

Tokens: `sm 8px` · `xl 1rem` · `2xl 1.5rem` · `3xl 2rem`

## Spacing and layout

- 4px base scale
- Content max width 1280px, wide chrome 1600px
- Section vertical rhythm about 64px

## Shadows

- Pink tinted, not gray
- Borders do most structural work. Elevation used sparingly

## Motion

- 300ms ease out (`cubic-bezier(0,0,0.2,1)`) on transform and shadow
- Hover lift 2px. Gradient CTAs add scale 1.02
- Image zoom on hover: scale 1.04, 500ms, inside a clipped rounded frame
- Press: scale 0.98
- Nothing bounces, nothing spins, no heavy parallax

## Backgrounds

1. Clean white
2. Diagonal pastel washes (lavender, peach, mint, coral) behind heroes and catalog headers
3. Dark photographic heroes (3PL): real warehouse or map photo at low opacity under a dark gradient scrim

No noise, no grain, no illustrated scenes.

## Transparency

- Sticky header: `bg-white/95` + backdrop blur once scrolled
- Dark forms: `rgba(255,255,255,0.05)` fills, faint borders
- Image scrims: linear black gradients for overlaid text

## Gradient text utility

```css
.cf-gradient-text {
  background: linear-gradient(135deg, #FF2B92 0%, #FF8433 100%);
  -webkit-background-clip: text; background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

One word per headline. Example: CREATE AND SELL YOUR **IDEAS** ONLINE.

## Code drop-ins (in vault)

| File | Use |
|---|---|
| [[99 Assets/Brand Kit/Tokens/tokens.json\|tokens.json]] | W3C design tokens: color, font, gradient, radius |
| [[99 Assets/Brand Kit/Tokens/tailwind.brand.js\|tailwind.brand.js]] | Tailwind config fragment |
| [[99 Assets/Brand Kit/Tokens/components.css\|components.css]] | `.cf-btn-*`, `.cf-card`, `.cf-gradient-text` |
| [[99 Assets/Brand Kit/Tokens/webfont_import.css\|webfont_import.css]] | `@font-face` + `--cf-font-heading` / `--cf-font-body` |
| [[99 Assets/Brand Kit/Colors/completeful_colors.css\|completeful_colors.css]] | Color custom properties |

## Full design system (Drive)

Location: `Media Vault/02 Brand Assets/Completeful/Completeful Design System/`

| Folder | Contents |
|---|---|
| `styles.css` + `tokens/` | Root entry. Imports fonts, colors, typography, spacing, base `.cf-*` classes |
| `components/` | React primitives: Button, Badge, Tag, Card, FeatureCard, Input, Select, Checkbox, Switch, ProductCard, ServiceTile, StatStrip. Each has `.jsx`, `.d.ts`, `.prompt.md` |
| `ui_kits/marketing/` | completeful.com recreations: Home, Catalog, 3PL. Light |
| `ui_kits/dashboard/` | Seller app recreation: Home, Products. Dark |
| `templates/` | `marketing-landing` (pastel hero, feature grid, stat band, CTA) and `dashboard-home` (dark shell, sidebar, KPI cards) |
| `guidelines/foundations/` | Specimen cards: logo, gradient, colors, type, spacing |
| `assets/` | Emblem, warehouse and map photography, product and service photos, line icon subset |
| `SKILL.md` | `completeful-design` skill. Load it in Claude to generate on-brand UI and assets |

Bundle namespace: `window.CompletefulDesignSystem_ca6aab` after loading `_ds_bundle.js`.

> [!note] Font source conflict
> The Design System readme says Owners loads from Fontshare. The Brand Kit confirms Fontshare does not serve Owners. Follow [[00 Brand/Visual Identity/Typography|Typography]]: Adobe Fonts or Archivo.

## Related
- [[00 Brand/Visual Identity/_Completeful Brand System|★ Completeful Brand System]]
- [[00 Brand/Visual Identity/Color Palette|Color Palette]]
- [[00 Brand/Visual Identity/Typography|Typography]]
- [[00 Brand/Visual Identity/Iconography|Iconography]]
- [[02 App & Product/Fix Theme Colors|Fix Theme Colors]]
- [[02 App & Product/Proper Light Mode|Proper Light Mode]]
