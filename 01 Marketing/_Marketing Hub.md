---
title: Completeful Marketing Hub
type: hub overview
tags:
  - marketing
  - mockups
  - instagram
  - pricing
  - seo
  - tiktok-shop
  - fulfillment
---

# Completeful Marketing

> Completeful is a Print on Demand & 3PL Fulfillment Company for Companies & Sellers worldwide.

> **Primary Growth Goal:** Use socials as a tool for creators to get top tips, tutorials, app/catalog updates, and overall aim for post saves/shares while also showing how convenient the app tools are with endless capabilities.

## Social Platforms & Quick Links

- Instagram: https://www.instagram.com/completeful/
- Twitter/X: https://x.com/completefultech
- TikTok: https://www.tiktok.com/@completeful
- LinkedIn: https://www.linkedin.com/company/completeful/
- YouTube: https://www.youtube.com/@Completeful
- Website Blog: https://completeful.com/blog
- Logos Library: https://drive.google.com/drive/folders/1VDTGZLhvCBgocyynfCfZgIwrvmeuxsFM
- AI Clothing Mockups: https://drive.google.com/drive/folders/1F56li7zjuPpfA0u6oHkKmkYXH1MjWTSi
- Bulk Content: https://drive.google.com/drive/folders/1QHup-aFkeONCFBIq8naOAPGkRDkXTXzf

## AI Automations (planned/in progress)

| Agent | Purpose |
|---|---|
| Content Scraping tool | Scrape competitors or niche YouTube, Instagram, TikTok, etc. to see latest content ideas, performance, and reference Completeful's content bank to generate new content ideas from top performing content |
| AI Mockup Generator | Insert two images: (1) image of the scene/inspiration you want, (2) source product to replace the subject in image 1 |
| Tutorials/Long form Content Generator | Generate automatic tutorials and video guides with Remotion skill + Claude Code or Codex |
| Multi Platform Repurposing Automation | Takes 1 post and refactors it to fit each platform's writing style / posting template (see Writing Prompts) |
| Short Form reels automation | Takes a post and turns it into a motion graphics reel with ElevenLabs voiceover/script + Remotion + Codex |
| Infographics Automation | Takes a post with listicles and generates a carousel post with consistent branding |
| Store health/quality analyzer Agent (idea) | Scrapes your store and generates an audit check of store quality, listing titles, tags, images, and lists improvement goals |
| Design Generator Automation | Scrapes Pinterest based on a search term, culls results by good vs bad design examples, then recreates the good results through Nano Banana Pro |
| App Product Mockups with Multi Angles | Takes a product and generates multiple angles for the app catalog |

## Completeful App Tools to Build

| Title | Purpose |
|---|---|
| Finish App Tours + AI Support | Guides user through entire app with labels/callouts for sections and purpose |
| Mockup Blank Bank | Large bank of blank mockups to download for easy mockup access |
| Mockup Playground page | Page solely for generating mockups with AI background (Photoroom) + Nano Banana Pro integration |
| Profit Calculator | Uses product price + shipping + fees (can also show competitor pricing where a matching product exists, to show how Completeful's pricing keeps winning) |
| Store Health Page | Shows results from store quality analyzer runs with latest results; button to rerun the automation to update after low-quality sections are improved (like TikTok Shop Seller Center listing quality ratings mixed with a store health page) |

## Completeful Blog HTTP Request

API Route: `https://completeful.com/api/blog/posts`

### Curl Example

```bash
curl -X POST "https://YOUR_DOMAIN.com/api/blog/posts" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $BLOG_WORKFLOW_TOKEN" \
  -d '{
    "title": "Workflow-created post",
    "excerpt": "Short caption for the blog list.",
    "category_id": "guides",
    "published": false,
    "content_markdown": "## Section Heading\n\nThis was posted from a workflow."
  }'
```

### Request Body (JSON)

```json
{
  "title": "My Workflow Post",
  "slug": "optional-custom-slug",
  "excerpt": "Short caption...",
  "category_id": "guides",
  "author": "Completeful Team",
  "published": false,
  "content": "<p>HTML from your editor</p>",
  "content_markdown": "## Heading\nText",
  "featured_image_url": "https://...",
  "meta_title": "SEO title",
  "meta_description": "SEO description",
  "canonical_url": "https://...",
  "is_featured": false,
  "tags": ["print-on-demand", "fulfillment"]
}
```

## Department Features

Categories: METAL, WOOD, EMBROIDERY, ENGRAVING, SUBLIMATION, DTG (Direct to Garment).

### METAL
- 6 fiber lasers (3 open bed, 2 enclosed w/ interchangeable beds) — cuts up to 1/2" steel, 900 detailed signs/12hr day
- Needle scaling ("Poking") — 2 stations, 700 signs/8hrs
- 48" belt sander w/ ventilation — 1000 signs/8hrs, removes rust & oil
- Powder coating — 700–900 signs/8hrs depending on size
- Conveyor belt oven — bakes/cures 120 signs/hr
- Packing machine — 1000 signs packed & shipped/10hr day

### WOOD
- Miter saw — cuts hardwood for cutting boards, 1000 pieces/day
- Panel saw — 200 sheets of 1/2" plywood/day, 500 cutting board sets/8hrs, 1000 UV planks/day
- Jointer — edges wood for gluing, 250–300 cutting boards/8hrs
- Glue station — 20 large cutting boards/hr
- Planer — 300 cutting boards/8hrs
- Single-head CNC — juice grooves, 400–500 boards/day
- 4-head CNC router — thick paddle boards (CB1069 & PDCBRW), 400 boards/8hrs; 2nd 4-head coming (doubles output)
- Sanding room — router + 4 sanders, 300 cutting boards/day
- Band saw — splits 1" → 1/2" boards, 250 splits/day (500 thin boards)
- 2 laser cutters (1 benchtop, 1 full-size 4'x8') — thin cutting boards, up to 500/day
- Slide saw — cuts/assembles plywood boxes, 150/day
- Angle saw — 45° cuts on poplar for picture frames, 500 frames worth/day
- Auto V-Nailer — assembles frames, 500/day
- Staplers — frame UV planks, 600/day

### 40/90 UV Printers (Mats & Frames)
- 5 printers — 3 small (40s), 2 long (90s)
- 40s — 50–60 orders each/day; prints up to 14x14"; easy plate swaps; handles cups w/ rotary (tumblers, wine glasses, whiskey glasses, jars), flat items (bookmarks, bag tags, frames, nameplates, golf balls, ornaments, cutting boards, etc.)
- 90s — 50–60 orders/day total; prints up to 23x35"; mainly nameplates (28 at a time) & golf balls (250 at a time); slower plate changes
- Total output — 200–300 orders/day across 40/90 printers
- Mats — 600 orders/day w/ 3 printers (200 each); 12–14 small mats per print; sizes: 18x12, 24x16, 30x20, 30x18, 36x24
- Frames — 150–250 orders/day w/ 2 printers; 16 board types (12 thin, 4 thick); frame colors: grey, white, natural, black

### EMBROIDERY
- 16 machines
- Products — rags, hand towels, leather & fabric duffles, sweatshirts/hoodies, stockings, hats
- Peak seasons — Mother's Day & Christmas (sweatshirt sales spike)
- Top peak sellers — stockings, sweatshirts, leather duffles

### ENGRAVING
- 28 machines total, 22 used daily
- 14 standing lasers — CO2 (wood, leather, glass — etched look) + Fiber (metal, knives, lighters, aluminum — deep look)
- Gantry ("little orange guys") & Epilog — both CO2 w/ rotary; Gantry = sides only, Epilog = sides + bottoms; whiskey bottoms moved to Epilog after a jig was made
- Batch capacity per run: whiskey glass sides 3; whiskey glass bottoms 12; rect cutting board 11x17 (w/ & w/o groove) 12; rect cutting board 8x12 27; big paddle boards (PDCBRDW / CB1069) 18; oval thin 8x6 48; oval thin 11x8 27; paddle thin 12x6 36; paddle thin 15x7 18; flasks/lighters/coozies/luggage tags/keychains/bar blades/golf tags 3 each (3 stations); any unlisted SKU gets its own station
- Peak output — ~70 orders/hr from 10a–2p; ~280 orders in 4hrs; ~600 orders/day w/ 6 operators
- Products cater mostly to wedding parties
- Shipped 10k+ orders from 11/20–12/20 last year
- Top peak sellers — whiskey glasses, wallets, cutting boards, knives

### SUBLIMATION
- 20 auto heaters, 4 dual manual heaters
- Box machine — grabs, opens, folds & glues boxes shut
- Packing machine — folds flaps, tapes box, auto-prints & applies shipping label via sensor trigger
- Tape machine — aligns & tapes design to mug consistently every time
- Can print 30 designs/sheet
- Products — 11oz ceramic mugs (custom boxes), socks, metal wallet cards, badges, pillowcases, glass mugs, towels, tote bags, puzzles
- Also prints big coloring sheets for brain breaks

### DTG (Direct to Garment)
- 4 printers, 4 heat presses, 2 heating ovens, 2 pretreat machines
- Pretreat every color except light apparel
- Brands — Gildan, Hanes, Bella Canvas
- Products — hoodies, sweatshirts, t-shirts, jackets, baby shirts, onesies

## Embedded databases (in Notion)

This hub page links several databases now mirrored as folders in this vault:

- Brand Guidelines → `Marketing/Brand Guidelines/`
- Writing Prompts → `Marketing/Writing Prompts/`
- Nano Banana Pro Mockup Prompts → `Marketing/Nano Banana Pro Mockup Prompts/`
- Completeful Help-Center Documents → `Help Center/`
- Completeful Content Month → `Marketing/Content Month/`
- Completeful Content Ideas → `Marketing/Content Ideas/`
- Dump Marketing → `Marketing/Dump Marketing/`

---
Source: https://app.notion.com/p/302c843c536180699887d8337e8ef863

## Related
- [[01 Marketing/Marketing Strategy Overview|Marketing Strategy Overview]]
- [[01 Marketing/Channel Plan & Posting Cadence|Channel Plan & Posting Cadence]]
- [[01 Marketing/Writing Prompts/Instagram Writing Style|Instagram Writing Style]]
- [[01 Marketing/Cross Platform Rules|Cross Platform Rules]]
- [[01 Marketing/Content Dump Ideas|Content Dump Ideas]]
