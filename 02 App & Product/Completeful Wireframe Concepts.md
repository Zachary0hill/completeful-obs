---
title: "Completeful Wireframe Concepts"
type: reference
tags:
  - app
  - product
  - design
  - ux
  - wireframes
source: imported 2026-06-09
---

> Note: original file contained 12 SVG wireframe skeletons (visual). This note preserves their titles and annotations; see the source HTML for the drawings.

Completeful · Wireframe Concepts

12 annotated skeletons showing where the recommended enhancements live on each page. Numbered callouts map to the legend on the right of each wireframe.

[Landing Page](#landing)[Signup Page](#signup)[Dashboard](#dashboard)[Design Editor](#editor)[Designs List](#designs)[Catalog](#catalog)[My Products](#products)[Listing Wizard](#listing-wizard)[Public Storefront](#storefront)[Checkout](#checkout)[Orders](#orders)[Wallet](#wallet)

# Wireframe Concepts

Annotated skeleton mockups for the 12 highest-impact pages from the enhancement outline. Light gray boxes are existing structure; dashed purple boxes are recommended additions. Numbered circles map to the explanations on the right.

Existing UI

Recommended addition

Numbered callout

/

## Landing Page

Anonymous marketing page — needs to convert visitors to signup. Today's hero CTA routes to an auth-gated route, the newsletter has no backend, and lorem ipsum still ships.

1. 1Interactive AI demo in hero — type a prompt, see a live tee-mockup render. Visceral "wow" before signup.
2. 2Hero CTA routes to /auth/signup (was: /design/new which is auth-gated and redirects).
3. 3Social proof strip — rotating marketplace logos + seller count + products created.
4. 4Profit calculator widget — answers the new seller's #1 question right on the page.
5. 5"See a demo store" preview — anonymous read-only storefront showing what the end deliverable looks like.
6. 6Testimonial carousel with real seller names, stores, and revenue numbers.
7. 7Niche-picker quiz overlay (or pinned banner) — "What do you sell?" → tailored hero copy + onboarding seed after signup.

/auth/signup

## Signup Page

Critical funnel surface. Today's success screen falsely says "an account already exists" for new users, and there's no OAuth or magic link.

1. 1OAuth row: Google / Apple / Shopify / Etsy. "Continue with Shopify" doubles as store connect.
2. 2Inline password strength meter with concrete suggestions.
3. 3Marketplace pre-connect chips — "I sell on …" → faster integration handshake later.
4. 4Required Terms / Privacy checkbox (compliance gap today).
5. 5First-design idea capture on the signup form — feeds context into AI onboarding so it starts warm.

/dashboard

## Dashboard

Today: gradient hero + duplicated CTAs + recent products. Refactor: personalize, surface in-progress work, and turn the dashboard into a daily destination.

1. 1Personalized stats strip — designs/products/orders/earnings with deltas vs last period.
2. 2"Continue where you left off" — single click resumes the most recent in-progress design.
3. 3Daily AI design prompt — gives sellers a creative starting point. One click → editor pre-seeded.
4. 4"Trending in your niche" — top-performing products with one-click "Add to my store".
5. 5Revenue sparkline footer + jump to /earnings. Calm at-a-glance trend.

/design/:id

## Design Editor

The product's core. Today: no autosave, no version history, no live collab, alert() on errors. Refactor: durability, AI assistance, and discoverability.

1. 1Save status indicator: "Saved 12 sec ago" — replaces ambiguous Save button state. Autosave every change.
2. 2Collaborator avatars — Yjs is already wired, this exposes the live presence and unlocks co-editing.
3. 3Version history button → full timeline modal; auto-snapshots every save.
4. 4Keyboard shortcuts overlay (`?` opens it). Label-on-hover for new users.
5. 5Live design score card — contrast, text inside print area, resolution, overlap. Suggest fixes inline.
6. 6Brand kit panel — define brand colors / fonts / logo once, apply with one click.
7. 7Multi-mockup carousel — see front/back/lifestyle mockups side-by-side without leaving the editor.
8. 8Background-remove / image-fix buttons surfaced on the dock + contextual top-toolbar.

/designs

## Designs List

Today: quick-category buttons that do nothing, filter chips that don't filter, no bulk actions, no version history surface.

1. 1New Recycle bin tab — 30-day soft delete for accidental removals.
2. 2Applied-filter chips strip — filter UI today exists but doesn't filter. Wire it up and show what's active.
3. 3Bulk-select toolbar — tag/move/share/export/delete N designs at once.
4. 4Card hover overlay with AI tag suggestions, usage count, version number, and quick actions (Edit / Versions / Duplicate / Use with product).
5. 5"Versions" action opens a timeline modal — every save is a Yjs snapshot you can revert to.

/catalog

## Catalog

Today: solid sidebar filters but no AI search, no profit calculator, no compare drawer, no applied-filters chip strip.

1. 1AI natural-language search — type a sentence, get re-ranked results with filters applied automatically.
2. 2Applied-filters chip strip above the grid — see what's active, clear individually.
3. 3Profit calculator inline on every card — base cost + marketplace fees + your price → margin live.
4. 4Compare drawer at the bottom — checkbox 2-3 products → side-by-side comparison drawer.
5. 5Trending / New badges from real product analytics.

/products

## My Products

Today: cards default to "active" hiding drafts, no bulk actions, no per-card publish CTA, no reauth warning when marketplace tokens expire.

1. 1Connection-health banner at top — surfaces token\_missing / reauth\_needed to sellers (today admin-only).
2. 2Default filter changed from "active" → "all" so drafts aren't hidden on first load.
3. 3Bulk actions: Publish to Etsy / Shopify, bulk price edit, duplicate, delete.
4. 4Listing health score on every card (title length, description, mockup count, tags, price competitiveness).
5. 5Inline price-edit on each card — quick change without entering the editor.

/listing/new

## Listing Wizard

Today: NO autosave (refresh = lose 15min of work), no cross-marketplace preview, no SEO suggester, no resume-draft banner.

1. 1Autosave indicator in header — drafts persist every 5s. Refresh-safe.
2. 2Resume banner — pick up unfinished listings from last session.
3. 3AI suggests 3 title alternatives — A/B test against original.
4. 4SEO keyword chips — one-tap-to-add suggested tags from Etsy search volume.
5. 5Cross-marketplace preview pane — see your listing rendered as Etsy / Shopify / TikTok side-by-side.
6. 6Inline errors in step header — surface variant pricing errors without entering the step.

mystore.completeful.com

## Public Storefront

Today: ~212 lines of inline-styled JSX. No cart, no checkout, no SEO, no theme system. Refactor: a real e-commerce surface.

1. 1Hero banner editable from seller admin — image background, tagline, primary CTA.
2. 2Top-nav with category links — today there's no category structure.
3. 3Featured collection rail — admin picks which products feature.
4. 4Add-to-cart button on every product card. Cart drawer + checkout — the missing commerce loop.
5. 5Cart icon with badge in header — global cart state.
6. 6Live social proof strip — "37 sold in last 24h", live purchase ticker.
7. 7Footer with shipping/returns/contact + "Powered by Completeful" (also a referral surface).
8. 8Recently viewed / Related products grid on product page.

/checkout

## Checkout

Today: country is free text, state is free text, no address autocomplete, no shipping speed options, no tax breakdown, no real success screen.

1. 1Address autocomplete (Google Places / Stripe Address Element) — drops the manual fields drop-off rate.
2. 2State picker — searchable dropdown for US/CA/AU (today free text).
3. 3Country picker — searchable combobox (today free text + separate ISO field).
4. 4Shipping-speed options with prices — today only a flat shipping line.
5. 5Tax line item shown separately — today not broken out.
6. 6Apple Pay / Google Pay express checkout — Stripe Payment Request Button.
7. 7Arrival-date estimate under the order total — major trust signal.

/orders

## Orders

Today: no status timeline, raw tracking number with no link, no saved filters, no bulk actions beyond Retry, no exception queue.

1. 1Exception queue tab — orders needing attention (failed tracking, address invalid, missing personalization) auto-route here with a count badge.
2. 2Saved views / filter shortcuts — "Etsy + this week", "Unfulfilled", "Awaiting personalization" pinned for one-click access.
3. 3Bulk actions: Retry, Mark fulfilled, Tag VIP, Packing slip PDF.
4. 4Status timeline visualization replaces flat label (Placed → Printed → Shipped → Delivered).
5. 5Tracking column becomes a clickable carrier link with carrier inference (UPS / USPS / FedEx auto-detected).
6. 6CSV export of filtered orders.

/wallet

## Wallet

Today: balance + quickadd + payment methods + auto-recharge. Missing: transaction ledger, statement export, balance trend, withdrawal.

1. 1Transaction ledger — paginated table with type (top-up / order debit / refund / promo) + filters + CSV export.
2. 2Withdrawal flow — request payout of unused balance back to a connected bank.
3. 3Balance sparkline — visual cash-flow trend over 30 days.
4. 4"How this works for your shop" auto-recharge preview — uses your actual debit velocity to predict next recharge.
5. 5Monthly branded PDF statement download — for taxes / accounting.
6. 6Low-balance alerts toggle — email + push when balance crosses your threshold.

Generated from analysis of the Capp2 codebase at /Users/Mac/dev/Capp2. Wireframes are intentionally low-fidelity to emphasize structure and placement — they're a starting point for Figma exploration, not final designs.

## Related
- [[02 App & Product/Completeful — User Flow & Improvement Plan|Completeful — User Flow & Improvement Plan]]
- [[02 App & Product/App Overview & Capabilities|App Overview & Capabilities]]
- [[02 App & Product/Feature Roadmap|Feature Roadmap]]
- [[02 App & Product/App Tools To Build|App Tools To Build]]
- [[02 App & Product/Canvas Designer Route Node Map|Canvas Designer — Route Node Map]]
