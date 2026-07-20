---
title: "Completeful — Feature Build Plans"
type: reference
tags:
  - app
  - engineering
  - product
  - build-plan
  - features
source: imported 2026-06-09
---

# Completeful — Feature Build Plans

Detailed engineering roadmaps for seven new features, written to match the app's current architecture.

**Conventions referenced throughout (verified against the codebase):**

- **Routes** are lazy-imported and declared in `frontend/src/App.tsx`, gated with `ProtectedRoute`.
- **Nav items** are `MenuItem` objects in `frontend/src/components/UserNavigationSidebar.tsx` (`allMenuItems`, filtered by `profile.user_type`, with grouped expandable sections like "Assets" and "My Money").
- **Pages** live in a domain folder, default-export `XxxPage`, and import a co-located plain `.css` file with a prefix (e.g. `cp-`, `dash-`). Tokens come from `frontend/src/styles/themes.css`; shared classes (`card`, `btn btn-primary`, `gradient-text`) from `components.css`. Icons are `lucide-react`.
- **State**: Zustand slices in `frontend/src/store/` (`create<State>((set, get) => ({...}))`).
- **Services**: `frontend/src/services/` — either direct Supabase (`supabaseClient`, RLS-enforced) or backend `authedFetch` from `services/backendAuth.ts`.
- **Backend**: Express routers `backend/routes/*.js` mounted in `backend/index.js`; `requireAuth`, `getUserScopedSupabase(req)`, `getSupabaseAdmin()`.
- **DB**: dated migrations in `backend/migrations/`; keep `frontend/src/current_schema.sql` in sync.
- **Feedback**: `showToast()` from `frontend/src/utils/toast.ts`; modals use `open`/`onClose` props.

Effort key: **S** < 1 day · **M** 1–3 days · **L** 3–7 days · **XL** 1–2 weeks.

---

## 1. Trend Radar

**Goal.** A weekly, AI-curated feed of rising niches, keywords, and product opportunities per marketplace, with a one-click "design this trend" that seeds the editor. Turns Completeful from a tool into a growth partner and gives sellers a recurring reason to open the app.

### Where it lives

- New route `frontend/src/App.tsx`: `<Route path="/trend-radar" element={<ProtectedRoute><TrendRadarPage /></ProtectedRoute>} />` (lazy import).
- New nav `MenuItem` in `UserNavigationSidebar.tsx` — `{ icon: <Radar size={20}/>, label: 'Trend Radar', path: '/trend-radar', badge: 'New' }`. Place it directly under `/dashboard` in `primaryMenuItems`; the existing `badge` prop renders the "New" pill.
- Page folder `frontend/src/trends/` → `TrendRadarPage.tsx` + `TrendRadarPage.css` (prefix `tr-`).

### Wireframe (see HTML)

Header with marketplace toggle (All · Etsy · Shopify · TikTok) and a date stamp ("Updated weekly"). Below, a grid of trend cards: rank chip, trend name, sparkline of search momentum, top keywords as pills, an estimated-competition meter, and two CTAs — "Design this" and "Save". A right rail shows "Your niches" (followed tags) and a "Why this trend" AI explainer drawer.

### Frontend

- `trends/TrendRadarPage.tsx` — fetches via service, renders `TrendCard` grid + `NicheRail`.
- `trends/components/TrendCard.tsx`, `TrendSparkline.tsx` (tiny inline SVG, no new dep), `CompetitionMeter.tsx`, `WhyThisTrendDrawer.tsx`.
- `store/useTrendStore.ts` — `{ trends, savedTrends, followedNiches, marketplace, loading, fetchTrends(mkt), toggleSave(id), followNiche(tag) }`.
- `services/trends.ts` — `getTrends(marketplace)`, `saveTrend(id)`, `getFollowedNiches()` via `authedFetch`.
- "Design this" → navigate to `/design/new?trendId=…`; `CreateDesignEditor` reads the param and (optional) pre-loads an AI prompt seeded from the trend keywords (reuses `AIPanel` plumbing).

### Backend

- `backend/routes/trends.js` mounted `app.use('/api/trends', require('./routes/trends'))`.
  - `GET /api/trends?marketplace=etsy` — returns the latest cached snapshot for the user's followed niches + global risers.
  - `POST /api/trends/:id/save`, `GET /api/trends/niches`, `POST /api/trends/niches`.
- `backend/jobs/trendIngest.js` — scheduled worker (cron / Railway scheduled job) that pulls marketplace keyword signals, computes week-over-week momentum, and writes a `trend_snapshots` row. AI summarization ("why this trend") via the existing OpenAI service (`services/openai.ts`) with a new prompt in `services/marketplacePrompts.ts`.

### Database (`backend/migrations/<date>_trend_radar.sql`)

- `trend_snapshots(id, marketplace, captured_at, payload jsonb)` — payload holds the ranked trends + keywords + momentum series.
- `trend_niches(id, user_id, tag, marketplace, created_at)` — followed niches (RLS: owner only).
- `trend_saves(id, user_id, trend_key, snapshot_id, created_at)`.
- Add all three to `current_schema.sql`.

### Integration points

- `CreateDesignEditor` / `AIPanel` — accept `trendId`/`prompt` query param.
- `UserNavigationSidebar.tsx` — nav item + badge.
- Reuse `services/openai.ts` and `marketplacePrompts.ts` for the explainer.

### Unique add-ons

- **Momentum alerts** — opt-in notification (existing `/notifications`) when a followed niche spikes.
- **Saturation score** — combine listing count vs. search momentum into a 0–100 "opportunity score" surfaced on each card.
- **Trend → product-line shortcut** — hand the trend straight to the "One-prompt product line" generator (feature synergy).
- **Seasonal calendar** — a horizontal timeline of upcoming seasonal spikes (Halloween, Mother's Day) with lead-time-to-list reminders.

### Build steps

1. Migration + `current_schema.sql` (S).
2. `routes/trends.js` returning a seeded mock snapshot (M).
3. Page + store + service + cards rendering the snapshot (L).
4. `trendIngest.js` worker + AI explainer (L).
5. "Design this" wiring + alerts add-on (M).

---

## 2. AI Mockup Photoshoot + Standalone Mockup Generator

**Goal.** Let a seller generate mockups (both template-overlay and AI lifestyle photoshoots) from a design **without** going through the full listing setup. Today mockups are produced inside `SellerListingsMockupEditor` as part of the listing flow; this lifts them into a first-class, standalone surface.

### Where it lives

- Two linked routes:
  - `/mockups` → `MockupStudioPage` (the generator hub).
  - `/mockups/photoshoot/:designId?` → `AIPhotoshootPage` (the AI lifestyle generator).
- Nav: add a "Mockup Studio" `MenuItem` (`<Camera size={20}/>`) inside the **Assets** group in `UserNavigationSidebar.tsx` (the group is assembled in `renderMenuItems` after `/catalog`), next to Designs/Products/Listings.
- Folder `frontend/src/mockups/` → `MockupStudioPage.tsx`, `AIPhotoshootPage.tsx` + CSS (prefix `mst-`).

### Wireframe (see HTML)

**Mockup Studio:** left column = design picker (grid of the seller's designs + upload) and product picker (mug/tee/tote chips). Center = live preview canvas. Right = mode tabs: "Template mockups" (existing overlay renderer) and "AI Photoshoot". Bottom action bar: "Generate", "Download all (ZIP)", "Send to listing".

**AI Photoshoot:** scene presets (studio, outdoor, flat-lay, model), background prompt field, aspect-ratio chips, "Generate 4" button, and a results gallery with per-image regenerate/upscale.

### Frontend

- `mockups/MockupStudioPage.tsx` — orchestrates `DesignPicker`, `ProductPicker`, `MockupPreview`, mode tabs.
- `mockups/AIPhotoshootPage.tsx` — scene/preset controls + results gallery.
- `mockups/components/` — `DesignPicker.tsx`, `ProductPicker.tsx`, `ScenePresetGrid.tsx`, `MockupResultCard.tsx`.
- `store/useMockupStudioStore.ts` — `{ selectedDesignId, selectedProductId, mode, results, generating, generate(), exportZip() }`.
- Reuse, don't rebuild: `services/mockupCompose.ts`, `services/mockupGLPreview.ts`, `services/productMockups.ts` (upload to `product-images` bucket) for template mode. Use `jszip` (already a dependency) for "Download all".
- New `services/aiPhotoshoot.ts` — `generatePhotoshoot({ designId, productId, scene, prompt })` via `authedFetch`.

### Backend

- Extend the existing public renderer rather than duplicate it: `routes/mockups.js` already backs `/api/mockups`, and `routes/mockupsApi.js` exposes `/api/v1/mockups/render` via `services/mockupRenderer.js` — the standalone page calls the same renderer for template mode.
- New `routes/mockupPhotoshoot.js` → `POST /api/mockups/photoshoot`: composites the design onto the product, then sends it to an image model (img2img / inpainting) for the lifestyle scene; stores results in the `product-images` bucket and returns URLs.
- AI image settings reuse `routes/ai_settings.js` (`ai_image_settings.sql`) for model/size/quality config so admins control cost.

### Database (`backend/migrations/<date>_mockup_studio.sql`)

- `mockup_jobs(id, user_id, design_id, product_id, mode, scene, status, result_urls jsonb, created_at)` — history + re-download (RLS: owner).
- No schema change needed for storage (existing `product-images` bucket).

### Integration points

- `seller/mockups/SellerListingsMockupEditor.tsx` — extract its renderer/preview into shared components consumed by both the listing flow and the new standalone page (avoids divergence).
- Listing wizard (`listing/ListingWizardPageContainer.tsx`, `useMockupPreviews` hook) — add a "use existing mockups" path so studio output flows into a listing ("Send to listing").
- `/mockups-api` docs page — add the new photoshoot endpoint.

### Unique add-ons

- **Batch mode** — pick one design + many products (or many designs + one product) and generate a full mockup set in one job.
- **Brand-kit backdrops** — pull the seller's Brand Kit (feature #4) colors into AI scene prompts for on-brand photoshoots.
- **Mockup templates library** — save a favorite scene+product combo as a reusable preset.
- **Smart crop / marketplace presets** — auto-export at Etsy/Shopify/TikTok's recommended dimensions.
- **Public API parity** — expose photoshoot through `/api/v1/mockups` so the developer offering grows too.

### Build steps

1. Extract shared renderer/preview components from `SellerListingsMockupEditor` (M).
2. `MockupStudioPage` template mode + design/product pickers + ZIP export (L).
3. `mockup_jobs` migration + history (S).
4. `routes/mockupPhotoshoot.js` + `AIPhotoshootPage` (L).
5. "Send to listing" wiring + batch mode add-on (M).

---

## 3. Print-on-Demand Profit Simulator

**Goal.** Before (and after) listing, show projected margin per channel after base cost, marketplace fees, and the platform commission — with a break-even price slider. Sellers price blind today; this is a small build on data you already hold.

> **Prerequisite worth fixing first:** there is currently **no central commission/base-cost/fee config** — the 20% commission is hard-coded display text in `commissions/CommissionsPage.tsx`. This feature should introduce that source of truth.

### Where it lives

- A **reusable panel**, not just a page, because it adds the most value inline:
  - Embedded in `listing/ListingWizardPageContainer.tsx` (a "Profitability" step/sidebar).
  - Embedded on `products/` product detail and the `/mockups` studio.
  - Plus a standalone `/profit-simulator` route for what-if exploration, in the **My Money** nav group (next to wallet/commissions/earnings).
- Folder `frontend/src/pricing/` → `ProfitSimulatorPage.tsx`, `components/ProfitSimulatorPanel.tsx` + CSS (prefix `ps-`).

### Wireframe (see HTML)

Left: inputs — product (base cost auto-filled), sell price slider, channel selector chips. Right: a stacked breakdown bar (base cost · marketplace fee · payment fee · platform commission · **your profit**), big margin % and profit-per-unit numbers, and a break-even readout. A small "compare channels" table shows net profit side by side for Etsy/Shopify/TikTok.

### Frontend

- `pricing/components/ProfitSimulatorPanel.tsx` — pure, prop-driven (`baseCost`, `channel`, `price`), recomputes on input; all displayed numbers run through `Math.round`/`toFixed`.
- `pricing/ProfitSimulatorPage.tsx` — wraps the panel with a product picker for standalone use.
- `pricing/feeConfig.ts` (client mirror) + `services/pricing.ts` — `getFeeConfig()` fetches the authoritative config from the backend so rates aren't hard-coded.
- No new store needed (local component state); optionally cache fee config on `useUiStore`.

### Backend

- **New source of truth:** `backend/config/fees.js` (or a `platform_fees` table) holding commission %, per-channel marketplace + payment fees, and default margins.
- `routes/pricing.js` → `GET /api/pricing/fees` (public-ish, cacheable) and `GET /api/pricing/base-cost?productId=…` (resolves base cost from the catalog).
- Replace the hard-coded 20% in `CommissionsPage` and `backend/services/onboardingPublish/` with reads from this config.

### Database (`backend/migrations/<date>_platform_fees.sql`)

- `platform_fees(id, scope, channel, commission_pct, marketplace_fee_pct, payment_fee_pct, payment_fee_flat, effective_from)` — versioned so historical earnings stay correct. Seed with current values (20% commission). Admin-editable later via `/admin`.

### Integration points

- `commissions/CommissionsPage.tsx`, `seller/EarningsPage.tsx` — read commission from config instead of literals.
- `listing/ListingWizardPageContainer.tsx` — mount the panel as a step.
- `catalog`/`products` services — expose base cost.

### Unique add-ons

- **"Suggested price"** — back-solve the price needed to hit a target margin, one click to apply into the listing.
- **Fee-change alerts** — if a marketplace changes fees, flag affected listings.
- **Volume/bundle modeling** — margin at qty 1 vs. a bundle (ties to bundles/upsells).
- **Profit goals** — set a monthly profit target; simulator shows units-to-goal at the current price.
- **Currency awareness** for international channels.

### Build steps

1. `platform_fees` migration + seed + `routes/pricing.js` (M).
2. Refactor hard-coded 20% to read config (S).
3. `ProfitSimulatorPanel` component + math (M).
4. Embed in listing wizard + product page (M).
5. Standalone page + "suggested price" add-on (M).

---

## 4. Brand Kit & Quick Apply (Canvas Editor)

**Goal.** Let a seller define fonts, colors, and a logo once, then one-click apply that brand across any new design (and later, storefront). Consistency is a pro-seller pain. **Bonus:** the `/branding` route is currently a placeholder stub in `App.tsx` — this feature gives it real substance.

### Where it lives

- Replace the inline `/branding` stub in `App.tsx` with a real `BrandKitPage` (lazy import). Keep the path `/branding` (already in nav).
- Add a **Brand Kit panel** inside the Konva editor's left secondary panel (`frontend/src/ui/leftSecondaryPanel/panels/`), alongside `AIPanel`/`AIEditPanel`.
- Folder `frontend/src/branding/` → `BrandKitPage.tsx` + CSS (prefix `bk-`); `ui/leftSecondaryPanel/panels/BrandKitPanel.tsx`.

### Wireframe (see HTML)

**Brand Kit page:** sections for Logo (upload + variants), Color palette (swatches with add/edit, roles: primary/secondary/accent), Fonts (heading + body, picked from the existing font store), and a live "brand preview" card. **In-editor panel:** the same palette/fonts/logo as quick-apply chips — click a swatch to recolor the selected element, "Apply brand" to restyle the whole canvas, "Drop logo" to place the logo layer.

### Frontend

- `branding/BrandKitPage.tsx` — CRUD for palette/fonts/logo.
- `store/useBrandKitStore.ts` — `{ kit: { colors, fonts, logos }, loading, fetch(), save(), applyToCanvas() }`.
- `services/brandKit.ts` — direct Supabase CRUD (RLS), logo upload to a `brand-assets` storage bucket.
- `ui/leftSecondaryPanel/panels/BrandKitPanel.tsx` — reads `useBrandKitStore` + `useCanvasStore`; "Apply brand" maps brand colors onto canvas elements via existing canvas commands (so it's undoable through the command/undo system).
- Reuse `store/useFontStore.ts` for font selection.

### Backend

- Mostly Supabase-direct (consistent with `services/products.ts`). Optional `routes/brandKit.js` only if server-side validation/limits are needed.

### Database (`backend/migrations/<date>_brand_kits.sql`)

- `brand_kits(id, user_id, name, colors jsonb, fonts jsonb, logo_urls jsonb, is_default boolean, created_at, updated_at)` — RLS owner-only. (jsonb keeps it flexible; most sellers have one kit but allow several.)
- New storage bucket `brand-assets`.
- Add to `current_schema.sql`.

### Integration points

- `App.tsx` — swap the `/branding` stub for `BrandKitPage`.
- `canvas/` + `store/useCanvasStore.ts` — "Apply brand" issues canvas commands (recolor fills/strokes/text to nearest brand role, set fonts) so it integrates with undo/redo and Yjs.
- `CreateDesignEditor` — offer "Start from brand" when creating a new design.
- Feature synergy: Mockup Photoshoot scenes and Storefront themes both read the kit.

### Unique add-ons

- **One-click rebrand** — apply a different kit to an existing design and preview before/after.
- **Auto-extract from logo** — pull a starter palette from an uploaded logo (color quantization, client-side).
- **Brand lint** — flag canvas elements using off-brand colors/fonts with a "fix" button.
- **Shareable kits** — designers/3PL accounts share a kit with sub-accounts (ties into `user_type`).
- **Storefront theming** — map the kit to storefront theme tokens.

### Build steps

1. `brand_kits` migration + storage bucket + `current_schema.sql` (S).
2. `useBrandKitStore` + `services/brandKit.ts` CRUD (M).
3. Real `BrandKitPage` replacing the stub (M).
4. In-editor `BrandKitPanel` with quick-apply chips (M).
5. "Apply brand" canvas command + undo integration (L).
6. Auto-extract palette add-on (M).

---

## 5. Listing Optimizer Agent

**Goal.** An AI agent that rewrites titles, tags, and descriptions for SEO **per marketplace**, scored against ranking signals, and folds today's five scattered AI surfaces toward one. High value, moderate effort because the plumbing exists.

### Where it lives

- Primarily an **inline assistant inside the listing wizard** (`listing/ListingWizardPageContainer.tsx`) — a new "Optimize" step/panel — plus a quick-action on existing listings (`/listings`, `/listing/:storeProductId/edit`).
- Optional standalone `/listing-optimizer` for bulk auditing existing listings.
- Components in `listing/components/`; service in `services/`.

### Wireframe (see HTML)

A right-side "Optimizer" panel in the wizard: an overall SEO score gauge (0–100), per-field cards (Title, Tags, Description) each showing current vs. suggested with a diff highlight and "Apply" / "Apply all", a keyword-coverage list (matched vs. missing), and a marketplace selector so suggestions follow Etsy vs. Shopify vs. TikTok rules. Bulk page: a table of listings with score column and "optimize" buttons.

### Frontend

- `listing/components/OptimizerPanel.tsx` — score gauge, per-field suggestion cards, apply actions wired to the wizard's existing field state (`useListingWizardState`).
- `listing/components/SeoScoreGauge.tsx`, `SuggestionDiff.tsx`.
- `listing/ListingOptimizerPage.tsx` (bulk) + CSS (prefix `lo-`).
- `services/listingOptimizer.ts` — `optimizeListing({ marketplace, title, tags, description, productType })`, `scoreListing(...)` via `authedFetch`.
- `store/useOptimizerStore.ts` — caches suggestions per listing.

### Backend

- Build on what exists: `services/openai.ts` already has `generateListingContent`, and `services/marketplacePrompts.ts` holds per-marketplace prompts. Add:
- `routes/listingOptimizer.js` → `POST /api/listing-optimizer/suggest` and `POST /api/listing-optimizer/score`. The score combines keyword coverage, title length/structure, tag count vs. marketplace max, and readability into a 0–100. Suggestions come from the OpenAI service with marketplace-specific system prompts.
- Reuse `routes/ai_settings.js` for model config/cost control.

### Database (`backend/migrations/<date>_listing_optimizer.sql`)

- `listing_optimizations(id, user_id, store_product_id, marketplace, score, suggestions jsonb, applied jsonb, created_at)` — history + measure lift over time (RLS owner).

### Integration points

- `listing/ListingWizardPageContainer.tsx` + `useListingWizardState` — apply suggestions back into form fields.
- `services/marketplacePrompts.ts` — extend with optimizer prompts.
- Consolidation path: route the listing-description AI (`openAIService.generateListingContent`) through this agent so there's one description engine.
- `/listings` — add a score badge column.

### Unique add-ons

- **Before/after score** — show projected score lift before applying.
- **Competitor-aware keywords** — pull missing keywords from Trend Radar (#1) data for the same niche.
- **Bulk optimize** — select multiple listings, queue a batch job, review/apply in one pass.
- **A/B handoff** — push two title/thumbnail variants straight into Storefront A/B testing (#6).
- **Compliance guard** — flag trademarked terms / banned words per marketplace.

### Build steps

1. `routes/listingOptimizer.js` (suggest + score) on top of existing OpenAI service (M).
2. `listing_optimizations` migration (S).
3. `OptimizerPanel` + score gauge in the wizard, apply-to-fields (L).
4. Consolidate description AI through the agent (M).
5. Bulk page + before/after add-on (L).

---

## 6. Storefront A/B Testing

**Goal.** Test two titles, thumbnails, or prices against each other on the public storefront and auto-promote the winner. Gives data-driven sellers a reason to stay — and pairs naturally with the storefront build.

> **Dependency:** storefront and checkout are early-stage (`storefront/PublicStoreApp.tsx`, inline-styled). A/B testing needs a working storefront product page + conversion event (add-to-cart or purchase) to measure against, so sequence it after the storefront/cart work in the main roadmap.

### Where it lives

- Seller-side management UI: new route `/storefront/experiments` → `ExperimentsPage` (reachable from the storefront setup area, `storefront/StoreSetupPage.tsx`).
- Buyer-side: variant assignment inside `storefront/PublicStoreApp.tsx` product rendering.
- Folder `frontend/src/storefront/experiments/` → `ExperimentsPage.tsx`, `ExperimentEditor.tsx` + CSS (prefix `ab-`).

### Wireframe (see HTML)

**Experiments list:** cards per experiment — name, target (title/thumbnail/price), status (running/complete), variant A vs. B with live conversion %, a confidence bar, and a "promote winner" button. **Editor:** pick a store product, choose what to test, define variant A (current) and B, set traffic split + goal metric (add-to-cart or purchase). **Results:** a small bar comparison + statistical-significance readout.

### Frontend

- `storefront/experiments/ExperimentsPage.tsx` — list + create.
- `storefront/experiments/ExperimentEditor.tsx` — variant setup.
- `storefront/experiments/ResultsCard.tsx` — conversion + confidence.
- `services/experiments.ts` — CRUD + `getAssignment(storeProductId, visitorId)` + `trackEvent(...)`.
- Buyer side: in `PublicStoreApp.tsx`, on product view, call `getAssignment` (sticky per visitor via a cookie/localStorage id), render the assigned variant, and fire `trackEvent('view')` / `trackEvent('add_to_cart')` / `trackEvent('purchase')` at the existing cart/checkout hooks.
- `store/useExperimentStore.ts` — seller-side list/results state.

### Backend

- `routes/experiments.js` → CRUD (`/api/experiments`), `GET /api/experiments/assignment` (deterministic hash of visitorId → variant for sticky split), `POST /api/experiments/event` (record view/conversion).
- `backend/jobs/experimentEvaluate.js` — periodically computes conversion + significance and, if "auto-promote" is on and the threshold is met, writes the winning variant back to the store product and marks the experiment complete.
- Storefront public API (`routes/storefrontApi.js`, `/api/v1/storefront`) — serve assignment + accept events without auth (public buyers), rate-limited.

### Database (`backend/migrations/<date>_storefront_experiments.sql`)

- `experiments(id, user_id, store_product_id, target, status, traffic_split, goal_metric, auto_promote, started_at, ended_at)`.
- `experiment_variants(id, experiment_id, label, payload jsonb)` — A/B content.
- `experiment_events(id, experiment_id, variant_id, visitor_id, event_type, created_at)` — append-only; index on `(experiment_id, event_type)`.
- RLS: experiments/variants owner-only; events insertable by the public storefront role.

### Integration points

- `storefront/PublicStoreApp.tsx` + `services/storefront.ts` — variant rendering + event hooks at product view and cart/checkout (depends on the cart build).
- `storefront/StoreSetupPage.tsx` — entry point to experiments.

### Unique add-ons

- **Auto-promote with guardrails** — only promote after minimum sample + significance to avoid false winners.
- **Multivariate-lite** — test thumbnail + price together with a small variant matrix.
- **Storewide tests** — test a theme/banner across the whole store, not just one product.
- **Optimizer handoff** — accept variants generated by the Listing Optimizer (#5).
- **Insight summary** — an AI one-liner explaining why B won ("shorter title + lower price drove +18% add-to-cart").

### Build steps

1. (Dependency) functional storefront product page + cart conversion event.
2. Migration + `routes/experiments.js` CRUD + assignment hash (L).
3. Buyer-side variant render + event tracking in `PublicStoreApp` (M).
4. `ExperimentsPage` + editor + results (L).
5. `experimentEvaluate.js` auto-promote + significance (M).

---

## 7. Seller Store Health & Optimization Tips

**Goal.** A single dashboard that scores the health of a seller's store and serves prioritized, actionable tips — pulling signals the app already has (connection health, listing SEO scores, missing mockups, pricing margin, storefront completeness). This is the connective tissue that surfaces every other feature at the right moment.

### Where it lives

- A **Store Health card on `/dashboard`** (top of `dashboard/`), plus a dedicated `/store-health` route for the full breakdown.
- Nav `MenuItem` (`<HeartPulse size={20}/>`) near the top of `primaryMenuItems`, or as a dashboard-embedded widget only (recommended: both — card on dashboard links to full page).
- Folder `frontend/src/storehealth/` → `StoreHealthPage.tsx` + CSS (prefix `sh-`).

### Wireframe (see HTML)

A big overall health ring (0–100) with category sub-scores: Connections, Listings/SEO, Catalog completeness, Pricing/margin, Storefront. Below, a prioritized "Action plan" list — each tip is a card with severity, the impact ("+12 health"), and a one-click deep link to the exact fix surface (reconnect channel, optimize listing, add mockups, set price, finish storefront). A trend line shows health over time.

### Frontend

- `storehealth/StoreHealthPage.tsx` — ring + category cards + action list.
- `storehealth/components/HealthRing.tsx`, `CategoryScore.tsx`, `TipCard.tsx`.
- `dashboard/StoreHealthWidget.tsx` — compact card embedded on the dashboard.
- `store/useStoreHealthStore.ts` — `{ score, categories, tips, history, loading, fetch() }`.
- `services/storeHealth.ts` — `getHealth()` via `authedFetch`.

### Backend

- `routes/storeHealth.js` → `GET /api/store-health`: aggregates existing signals server-side —
  - **Connections**: marketplace token status (`reauth_needed`/`token_missing`) from the marketplace tables — this also fixes the "connection health hidden" P0.
  - **Listings/SEO**: average score from `listing_optimizations` (#5).
  - **Catalog**: % of products with mockups (`mockup_jobs` / `productMockups`), designs not yet listed.
  - **Pricing**: listings below a healthy margin threshold (uses `platform_fees`, #3).
  - **Storefront**: setup completeness (theme, slug, products published).
  - Each signal yields a weighted sub-score + a templated tip with a deep link.
- `backend/jobs/storeHealthSnapshot.js` — nightly snapshot for the trend line.

### Database (`backend/migrations/<date>_store_health.sql`)

- `store_health_snapshots(id, user_id, overall, categories jsonb, captured_at)` — history (RLS owner). Tips are computed live, not stored.

### Integration points

- This feature **reads from** several others — best built after #3 (fees), #5 (SEO scores), and the connection-health banner. It degrades gracefully: any missing signal just doesn't contribute.
- `dashboard/` — embed the widget.
- `UserNavigationSidebar.tsx` — nav item.
- Deep links target existing routes (`/sales-channels`, `/listing/:id/edit`, `/mockups`, `/profit-simulator`, `/storefront/setup`).

### Unique add-ons

- **Weekly health email/notification** — "your store health is 78, here are 3 quick wins" (ties to `/notifications` + scheduled job).
- **Benchmarking** — "top sellers in your niche average 90" (anonymized, opt-in).
- **Quick-win mode** — filter the action plan to only S-effort, high-impact tips.
- **Gamified streaks** — maintaining 90+ unlocks a storefront badge (ties to seller leveling).
- **One-click "fix all easy"** — batch-apply trivial fixes (e.g., regenerate missing mockups, apply suggested prices).

### Build steps

1. `routes/storeHealth.js` aggregating whatever signals exist today (connections first) (L).
2. `store_health_snapshots` migration + nightly job (M).
3. `StoreHealthPage` ring + categories + tips with deep links (L).
4. `StoreHealthWidget` on dashboard (M).
5. Weekly notification + quick-win mode add-ons (M).

---

## Suggested build sequence across all seven

These features have real dependencies. Recommended order:

1. **Profit Simulator (#3) fee config** — unblocks margin signals used by #7 and pricing tips. (Also kills a hard-coded value.)
2. **Brand Kit (#4)** — gives the editor real `/branding` substance; feeds mockups + storefront theming.
3. **Mockup Studio + Photoshoot (#2)** — standalone value, reuses existing renderer.
4. **Listing Optimizer (#5)** — SEO scores feed Store Health.
5. **Trend Radar (#1)** — feeds optimizer keywords and "design this".
6. **Storefront A/B Testing (#6)** — after the storefront/cart build lands.
7. **Store Health (#7)** — last, because it aggregates signals from the above and degrades gracefully until they exist.

**Cross-cutting reminders:** every new table needs RLS + a `current_schema.sql` update; every new page needs a route in `App.tsx`, a nav `MenuItem`, and a co-located prefixed CSS file; reuse `showToast`, `themes.css` tokens, `components.css` classes, and `lucide-react` icons; replace native dialogs as you touch each surface.

## Related
- [[02 App & Product/Completeful App Notes — Outline & Build Plan|Completeful App Notes — Outline & Build Plan]]
- [[02 App & Product/Canvas Designer Route Node Map|Canvas Designer — Route Node Map]]
- [[02 App & Product/Completeful (Capp2) Route Node Map|Completeful (Capp2) — Route Node Map]]
- [[02 App & Product/Completeful App 3.0 Architecture|Completeful App 3.0 Architecture]]
- [[02 App & Product/Community Feature — Implementation Plan|Community Feature — Implementation Plan]]
