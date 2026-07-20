---
title: "Completeful App Notes — Outline & Build Plan"
type: reference
tags:
  - app
  - product
  - build-plan
  - notes
source: imported 2026-06-09
---

# Completeful App Notes — Outlines + Additional Build Points

Analysis of 4 handwritten note PDFs: **App edits**, **App changes**, **Listing-agent app**, **Meeting John**.

---

## 1. App edits.pdf

### Page 1 — Designer
- Add minimap
- Font categories
- Graphics categories
- Designated product details tab
- Select subject masking / remove background
- Color contrast checker
- Cleaner tools tab with obvious UI
- Remove double save/next buttons
- Fix UI for steps guide + add print-type label
- Guide: print designs vs. etched designs
- Popup explaining variants + color contrast handling
- Preview with multiple tab views
- Clean up multi-design UI + help guide

### Page 2 — Main Dashboard
- Professional mockup thumbnails
- Fix theme colors; proper light mode
- AI chat: "Need any help?" message + clickable link labels that redirect
- Resource article cards under product row on homepage
- Expandable/pinned navbar (like TrendTrack)
- Product details: restore custom catalog details box
- More empty-state illustrations/guides
- Newsletters in notification section
- YouTube guides per page by topic
- Designs page: full-size cards; fix buttons going black
- "Explore Designs" community page (like Higgsfield)
- Define: My Designs vs. My Products vs. My Listings
- Define: Commissions vs. Earnings pages

### Page 3 — AI Features + Build Out (priority list)
1. Brand kit onboarding ("URL or DIY")
2. Community pages
3. AI product creator flow (like ChatGPT mockup flow)
4. Profiles + following/favoriting
5. Clean subscriptions UI
6. Auto-posting for Completeful blog posts
7. Mockups page + builder tool (Photoroom + Canva combined)
8. Completeful landing pages
9. Onboarding for transfers from another provider

---

## 2. App changes.pdf

### Page 1 — Feature/UI checklist
- Font categories; illustration for image generator
- Final page of product listing route
- Help guide for background remover
- Cleaner AI upscale UI; cleaner tools tab UI
- Gmail login
- Brand kit flow + brand kits in side tab
- Details tab: print area, print resolution, file types, print types
- Designing guidelines; print methods; mockups guide
- Combine My Listings + My Products pages
- Empty-state UI for support tickets
- Cleaner profile settings page
- Tab view for sample orders placed
- Warning for black-on-black / color-on-color designs
- Dial in multi-print-type products
- Better product catalog cover photos

### Pages 2–3 — Hover/info system
- Hover on catalog shows product + print area
- ⓘ icons in hover captions across the app for guides
- Tutorial videos on empty-state pages
- Workflow that auto-generates help center pages
- Display print type from designer
- Design preview when opening minimap
- Open question: "where all needs the info callout"

---

## 3. Listing-agent app.pdf

### Page 1 — UX fixes + batching concept
- Pull-down to refresh; download button on job images
- Tap rejected image → leave note why
- Global function: edit generated designs → regenerate
- Fix generated assets section; top image on designs page = top performer
- Better download button UI, page-change motion, button tap UI, resize text/components
- **Studio Product Photos Automation:** batch products to tackle (mother mugs, mother flasks, 20oz tumblers), batch at a time, choose the best, pipeline generates studio shots per garment, some JSON format for UI

### Page 2 — Mockup pipeline math
- Pipeline auto-generates multiple angles incl. detail shots (helps image generation too)
- Whole catalog generated
- **1 product × 7 colors × 6 angles × 300 products = 10,000 mockups**
- All images embedded into VB (vector DB) + bulk tags for product niche + use — "this is core"

### Page 3 — Platform-specific listing strategy
- Scrape Everbee + analytics tools for tagging data
- **Etsy:** tags, categories, keyword titles, description templates
- **Amazon:** EDC gifts/must-haves, repetitive auto-fill sections, closer white detail shots, tech infographics, product + 4–6 listicle features
- **TikTok Shop:** cheap add-ons win, keep under $15 for free-shipping promotion, visuals beat SEO, non-personalized focus (seasonal/trending/giftable)
- **Shopify:** branded professional, build brand trust, popups + upsells, email campaigns + SMS (subscribe & save)
- Cross-cutting: common product positioning, amount of mockups, infographics generator, niches + seasonal

---

## 4. Meeting John.pdf

### Page 1 — AI tools
- Scraping socials for live content ideas + filter by performance
- AI mockup generator
- Tutorials / long-form content
- Help guide article builder
- Multi-platform content repurposing
- Short-form reels automation
- Infographics built with writing styles
- Completeful brand outline reference

### Page 2 — More AI tools
- App tours + AI assistant
- Full product mockup generator with detail shots + angles
- Profit calculator
- Store health/quality analyzer
- Mockup blank bank
- Mockup playground
- Graphics builder + Pinterest scraper

### Page 3 — Next To-Do
- Tutorials / guidelines
- Mockup blank bank
- Long-form YouTube tutorials
- Outline strong hooks/selling points → target new sellers
- Outline clean category UI with the catalog

---

# Cross-Document Themes

1. **Mockup engine is the core bet** — appears in all 4 docs (generator, blank bank, playground, batch pipeline, 10k mockup math, vector DB embedding).
2. **Education layer everywhere** — guides, tooltips, empty states, tutorial videos, auto-generated help center.
3. **Naming/IA confusion** — My Designs vs. Products vs. Listings; Commissions vs. Earnings must be resolved before more pages ship.
4. **Platform-aware listing agent** — per-marketplace templates (Etsy/Amazon/TikTok/Shopify) driven by scraped analytics data.
5. **Brand kit as onboarding hook** — URL-scrape or DIY, then referenced across designer, listings, and content tools.

---

# Additional Building Points & Nice-to-Haves

## Designer
- **Undo/redo history panel** with named checkpoints — pairs with "edit generated designs."
- **Smart print-safety preflight**: one automated check combining contrast checker, black-on-black warning, resolution/DPI check, and print-area overflow — run before "next" instead of separate popups.
- **Auto-fix suggestions**: when contrast fails, offer one-click recolor per variant rather than just warning.
- Keyboard shortcuts + shortcut cheat-sheet overlay.
- Design versioning per product (v1, v2) so sellers can A/B listings later.
- Template/remix system: start from community designs in Explore (with licensing flags).
- Autosave + recovery (eliminates the double-save problem entirely).

## Dashboard & IA
- **Glossary tooltip system** backed by one definitions file — fixes Designs/Products/Listings confusion once, everywhere.
- Global search (cmd+K) across products, designs, listings, orders, help articles.
- Setup checklist widget ("Connect store → Create design → Publish first product") with progress %; proven activation driver.
- Personalized homepage: recent activity, drafts, "continue where you left off."
- In-app changelog/what's-new feed (replaces some newsletter need).

## Mockup Pipeline (the core)
- **Dedup + quality scoring** on the 10k-mockup pipeline: auto-flag bad renders before they hit the bank; human review only on flagged items (matches the "choose the best" flow).
- Mockup A/B performance loop: track CTR per mockup style per platform, feed back into which angles/scenes get generated.
- Seasonal scene packs (Mother's Day, Christmas) generated ahead of demand calendar.
- Lifestyle-model diversity controls (hands, settings, demographics) for brand fit.
- CDN + lazy generation: generate angles on first request rather than all upfront to cut compute cost.
- Export presets per platform (Etsy 1:1 2000px, Amazon white-bg main image rules, TikTok 9:16).

## Listing Agent
- **Compliance linting per platform**: Amazon title char limits, Etsy 13-tag cap, banned-word lists — validate before publish.
- Keyword cannibalization check across a seller's own listings.
- Auto-refresh stale listings: rotate tags/photos on listings with declining impressions.
- Price suggestion from scraped comps + profit calculator integration.
- Bulk edit grid (spreadsheet view) for titles/tags across 100s of listings.
- Listing health score per listing, rolled up into the store health analyzer.

## AI Assistant & Education
- Context-aware assistant: knows current page + user's store state, so "why isn't my product publishing" gets a real answer.
- Help-center auto-gen pipeline (from notes) + **auto-screenshot refresh** so docs never show stale UI.
- Interactive walkthroughs (driver.js-style) instead of only videos — cheaper to maintain.
- "Watch me do it" mode: assistant performs the flow in a sandbox while narrating.

## Growth & Retention
- Referral program + community design contests (feeds Explore page).
- Win-back email triggers from store health drops.
- Public seller profiles with follower counts (already planned) → add shareable portfolio link for social bios.
- Migration concierge: the "transfer from another provider" onboarding could auto-import via Printify/Printful API + CSV.

## Infrastructure Nice-to-Haves
- Event tracking taxonomy now (design_created, mockup_generated, listing_published) — everything above depends on it.
- Feature flags for staged rollouts of the big bets (brand kit, community).
- Rate-limit + cost dashboards for AI generation spend per user tier.

---

# Suggested Sequencing (if useful)

1. **Now:** IA naming fixes, preflight checks in designer, glossary tooltips, mockup blank bank (already "Next To-Do").
2. **Next:** Brand kit onboarding, mockup pipeline + quality scoring, listing agent with platform linting.
3. **Later:** Community/Explore, profiles/following, auto-help-center, performance feedback loops.

## Related
- [[02 App & Product/Completeful — Feature Build Plans|Completeful — Feature Build Plans]]
- [[02 App & Product/App Overview & Capabilities|App Overview & Capabilities]]
- [[02 App & Product/App Tools To Build|App Tools To Build]]
- [[02 App & Product/Canvas Designer Route Node Map|Canvas Designer — Route Node Map]]
- [[02 App & Product/Completeful (Capp2) Route Node Map|Completeful (Capp2) — Route Node Map]]
