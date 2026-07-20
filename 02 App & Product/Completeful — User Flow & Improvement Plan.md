---
title: "Completeful — User Flow & Improvement Plan"
type: reference
tags:
  - app
  - user-flow
  - ux
source: imported 2026-06-09
---

# Completeful — User Flow & Improvement Plan

End-to-end map of the seller journey, the friction at each step, and the fix plan.

## Seller Journey — Stages

### 🔑 Sign up & auth
*Landing → login / signup / confirm email → MFA / reset* · health: **amber**

Fixes:
- **[p0·M]** Email confirm dead-ends at /auth/login instead of carrying the user forward into onboarding.
- **[p0·M]** MFA/TOTP only enrolled for admins — sellers have no second factor despite a real security gap.
- **[p1·S]** Reset/forgot flows use raw error strings; no friendly copy or retry CTA.

Build:
- win — S — Post-confirm redirect → /onboarding instead of /auth/login.
- p1 — M — Self-serve TOTP + passkey enrollment in Account security.
- p2 — S — Unified auth error component with retry.

### 🧭 Onboarding
*Conversational AI onboarding — currently orphaned* · health: **red**

Fixes:
- **[p0·M]** Signup never routes to /onboarding and the route is capability-gated (ProtectedRoute permission). The whole conversational-AI investment is invisible by default.
- **[p0·S]** No fallback path for users who skip — they land on an empty dashboard with no first design.

Build:
- win — S — Remove the capability gate; route every new seller through onboarding.
- p0 — M — Onboarding seeds a first design and prompts one sales-channel connect.
- p1 — M — Resumable / skippable with a persistent 'finish setup' nudge on dashboard.

### 🎨 Design editor
*Konva canvas + Yjs · the core create surface* · health: **amber**

Fixes:
- **[p0·L]** No autosave — a refresh wipes work. Single biggest data-loss risk in the app.
- **[p0·S]** No beforeunload 'unsaved changes' guard.
- **[p1·XL]** Yjs collaboration scaffolding present but no provider wired — live co-edit potential unrealized.

Build:
- p0 — L — Debounced autosave to Yjs/IndexedDB + backend, with a visible save indicator.
- win — S — beforeunload guard on editor & all wizards.
- p2 — XL — Connect a Yjs provider for real-time multiplayer editing (flagship feature).

### 🏷️ List & publish
*Listing wizard · Etsy / Shopify / TikTok update wizards* · health: **amber**

Fixes:
- **[p0·L]** Listing wizard has no autosave — a 15-min flow is lost on refresh.
- **[p0·L]** Etsy-first bias — Shopify & TikTok sellers are second-class across the wizard.
- **[p1·M]** Listing description AI is a separate one-off UI.

Build:
- p0 — L — Draft persistence + resume for the wizard.
- p0 — L — Channel parity: same publish capabilities for all three marketplaces.
- p1 — M — Fold description AI into the unified AI surface.

### 🛒 Storefront & checkout
*Public seller storefront → buyer checkout* · health: **red**

Fixes:
- **[p0·XL]** Public storefront has no add-to-cart, no SEO, no theme system — the seller value prop literally can't complete today.

Build:
- p0 — XL — Working cart + checkout on the public storefront.
- p0 — L — SEO (meta, slugs, sitemap) so stores are discoverable.
- p1 — L — Theme system for seller-branded storefronts.

### 📦 Orders & earnings
*Orders · personalization queue · wallet · earnings* · health: **amber**

Fixes:
- **[p0·M]** Connection-health (reauth_needed / token_missing) is hidden behind admin-only gates — sellers don't know orders are silently failing.
- **[p0·L]** Earnings is Etsy-only; Shopify/TikTok revenue isn't reported.
- **[p1·M]** Personalization queue empty state is a single centered string.

Build:
- p0 — M — Global 'needs attention' connection-health banner visible to sellers.
- p0 — L — Multi-channel earnings & wallet reporting.
- win — S — Standardize empty/loading/error states (Earnings zero-state is the bar).

## Cross-Cutting Issues

- **Native dialogs** — alert/confirm/prompt scattered across 500+ call sites. Replace with the existing toast/modal pattern (showToast).
- **No autosave anywhere** — Editor, Listing Wizard, Kit Editor all lose work on refresh. Highest data-loss risk.
- **Onboarding orphaned** — Signup never routes to /onboarding and it's capability-gated. Make it the default path.
- **Connection-health hidden** — Token-expiry buried in admin gates. Build one global seller-facing banner.
- **Etsy-first bias** — Earnings & much tooling are Etsy-only. Bring Shopify + TikTok to parity.
- **AI fragmented** — 5 separate AI UIs (AIPanel, AIEditPanel, aiChat, support, listing). Unify into one surface.
- **Inconsistent states** — Loading/empty/error vary wildly. Ship PageLoader, TableLoader, CardSkeleton + friendly errors.
- **Mobile responsiveness** — Grid/flex layouts stack awkwardly on phones. Systematic audit + fix.
- **Hardcoded config** — 20% commission, plan bullets, help URLs hardcoded. Move to one config/backend source.

## Phased Plan

### Phase 0 — Stop the bleeding (data loss + dead ends)
*Weeks 1–3*
**Goal:** No seller ever loses work or hits a dead end.

- Debounced autosave on Design Editor (Yjs/IndexedDB + backend) with save indicator.
- beforeunload 'unsaved changes' guard on editor and all wizards.
- Draft persistence + resume for the Listing Wizard.
- Post-confirm redirect routes new users into /onboarding; remove the capability gate.

### Phase 1 — Make onboarding real
*Weeks 3–5*
**Goal:** Every new seller reaches a first design + a connected channel.

- Onboarding seeds a starter design and prompts one sales-channel connect.
- Resumable/skippable onboarding with a 'finish setup' dashboard nudge.
- Self-serve MFA (TOTP + passkey) for sellers.

### Phase 2 — Make selling actually work
*Weeks 5–10*
**Goal:** A buyer can discover a store and complete a purchase.

- Public storefront cart + checkout end-to-end.
- Storefront SEO: meta tags, clean slugs, sitemap.
- Seller-branded storefront theme system.

### Phase 3 — Channel parity
*Weeks 8–13*
**Goal:** Shopify and TikTok sellers are first-class everywhere.

- Listing wizard parity across Etsy / Shopify / TikTok.
- Multi-channel earnings & wallet reporting.
- Global connection-health 'needs attention' banner for sellers.

### Phase 4 — Polish & consistency
*Weeks 10–15*
**Goal:** The app feels coherent and trustworthy on every surface.

- Replace all native alert/confirm/prompt with toast/modal.
- Standard PageLoader / TableLoader / CardSkeleton + friendly error components.
- Mobile responsiveness audit + fixes.
- Move hardcoded rates/config/URLs into one config source.

### Phase 5 — Flagship bets
*Quarter 2*
**Goal:** Differentiators that go beyond table stakes.

- Unify the 5 AI UIs into one AI surface across editor / listings / support.
- Wire a Yjs provider for real-time multiplayer design editing.
- Reusable Avatar + identity across community / commissions / premium.

## Related
- [[02 App & Product/Completeful Wireframe Concepts|Completeful Wireframe Concepts]]
- [[02 App & Product/App Overview & Capabilities|App Overview & Capabilities]]
- [[02 App & Product/App Tools To Build|App Tools To Build]]
- [[02 App & Product/Canvas Designer Route Node Map|Canvas Designer — Route Node Map]]
- [[02 App & Product/Community Feature — Implementation Plan|Community Feature — Implementation Plan]]
