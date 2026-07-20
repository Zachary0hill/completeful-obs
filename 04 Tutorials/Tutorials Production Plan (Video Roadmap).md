---
title: "Tutorials Production Plan (Video Roadmap)"
type: reference
tags:
  - tutorial
  - video
  - production
  - planning
  - roadmap
source: imported 2026-06-21
---

# Tutorials Production Plan (Video Roadmap)

A complete, prioritized list of walkthrough videos to make for the Completeful app (Capp2.0). The list is mapped to the actual routes, panels, and flows in the codebase (auth, dashboard, design editor with AI tools, catalog/products/kits, listings & marketplaces, storefront, orders/personalization, wallet/earnings/premium, community, account, admin).

Each video has:

- **Audience** — who it is for
- **Length** — target runtime
- **Priority** — P0 (must-ship), P1 (should-ship), P2 (nice-to-have)
- **Covers** — bulleted beats / script outline
- **Prereqs** — other videos a viewer should watch first

A summary table is at the bottom. This is the planning doc; published scripts live alongside it in [[04 Tutorials/_Tutorials Index|Tutorials Index]].

---

## 1. Getting Started (P0 — ship these first)

### 1.1 Welcome to Completeful (90-second overview)

- **Audience:** brand-new sellers
- **Length:** 1–2 min
- **Priority:** P0
- **Covers:**
  - What Completeful is (POD + storefront + multi-marketplace)
  - The 3 core jobs: design, list, fulfill
  - Quick montage of catalog, editor, listings, orders
  - "Where to go next" pointer to video 1.2
- **Prereqs:** none

### 1.2 Create your account & finish onboarding

- **Audience:** new users on `/auth/signup` then `/auth/confirm`
- **Length:** 2–3 min
- **Priority:** P0
- **Covers:**
  - Signing up, email confirmation, first login
  - Profile basics on `/profile` (name, photo)
  - Filling out the dashboard onboarding checklist (`OnboardingChecklist.tsx`)
  - The Resources hub (`/resources`) and where in-app tours live
- **Prereqs:** none

### 1.3 Your dashboard tour

- **Audience:** all sellers
- **Length:** 3 min
- **Priority:** P0
- **Covers:**
  - Walkthrough of `DashboardPage`: recently added products, quick actions, KPIs
  - Sidebar navigation (`UserNavigationSidebar`)
  - How notifications, cart drawer, and the help chatbot appear
  - How to launch in-app tours (Resources page tour cards)
- **Prereqs:** 1.2

### 1.4 Add a payment method & wallet basics

- **Audience:** all sellers (required before you can publish/print)
- **Length:** 3–4 min
- **Priority:** P0
- **Covers:**
  - `/wallet` overview
  - Adding a card via `AddPaymentMethodModal`
  - Adding funds via `AddFundsModal`
  - Auto-recharge settings
  - Store billing toggle (`StoreBillingModal`)
  - The "payment method required" banner: what triggers it
- **Prereqs:** 1.2

### 1.5 Free vs Premium — what's included

- **Audience:** sellers deciding to upgrade
- **Length:** 2–3 min
- **Priority:** P1
- **Covers:**
  - The `/premium` page
  - What unlocks (AI tools quotas, font uploads, advanced features; verify against your plan matrix)
  - How to start/cancel
- **Prereqs:** 1.3

### 1.6 Your first product, end-to-end

- **Audience:** new sellers (the "aha" video)
- **Length:** 6–8 min (longest of the Getting Started set)
- **Priority:** P0
- **Covers:**
  - Browse `/catalog`, pick a t-shirt
  - Open the design editor (`/design/new`)
  - Add a text element and an image
  - Save design (`SaveDesignModal`)
  - Apply to product, review variants, publish to "My Products"
  - View it on `/products/:id/success`
- **Prereqs:** 1.2, 1.4

### 1.7 Connect your first sales channel

- **Audience:** sellers with an existing store
- **Length:** 3–4 min
- **Priority:** P0
- **Covers:**
  - `/sales-channels` overview
  - Pick Shopify, Etsy, or TikTok
  - OAuth handshake (link to deeper per-marketplace videos in §5)
- **Prereqs:** 1.2

---

## 2. Design Editor — Core Tools (P0/P1)

### 2.1 Editor overview & layout

- **Audience:** all designers
- **Length:** 4 min
- **Priority:** P0
- **Covers:**
  - The Konva stage (`KonvaStage`) and what "print area" means
  - Left dock bar (`LeftDockBar`) and the secondary panel drawer
  - Right panel for selected-element properties (`RightPanel`)
  - Top toolbar (`Toolbar`, `EditorTopToolbarHost`) and bottom bar (`BottomBar`)
  - Layers accordion, page list, undo/redo
  - Zoom, pan, fit-to-screen
- **Prereqs:** 1.6

### 2.2 Text basics — straight, circle, and bezier text

- **Audience:** all designers
- **Length:** 5 min
- **Priority:** P0
- **Covers:**
  - Adding text from the Text panel (`TextPanel`)
  - Switching between `TextElementStraight`, `TextElementCircle`, `TextElementBezier`
  - Inline editing (`InlineTextEditor`), font, size, weight
  - The text toolbar (`TextToolbar`): alignment, spacing, kerning
- **Prereqs:** 2.1

### 2.3 Uploading & placing images

- **Audience:** all designers
- **Length:** 4 min
- **Priority:** P0
- **Covers:**
  - Upload panel (`UploadPanel`)
  - Drag-on, resize, rotate via `CanvasTransformer`
  - Image toolbar (`ImageToolbar`): flip, opacity, lock
  - File-format guidance (PNG vs JPG vs SVG, transparency)
- **Prereqs:** 2.1

### 2.4 Shapes & graphics library

- **Audience:** all designers
- **Length:** 3–4 min
- **Priority:** P1
- **Covers:**
  - Shapes panel (`PatchShapesPanel`) and graphics panel (`GraphicsPanel`)
  - Recoloring shapes, stroke vs fill
  - Combining shapes with text and images
- **Prereqs:** 2.1

### 2.5 Layers, grouping & arrangement

- **Audience:** all designers
- **Length:** 3 min
- **Priority:** P1
- **Covers:**
  - The layers accordion (`LayersAccordion`)
  - Drag to reorder, lock, hide
  - Multi-select plus group/ungroup
  - The hover transformer and overlap selection layer
- **Prereqs:** 2.1

### 2.6 Color tools — palettes & color select

- **Audience:** all designers
- **Length:** 4 min
- **Priority:** P1
- **Covers:**
  - Color panel (`ColorPanel`)
  - Color select tool (`ColorSelectToolbar`, `colorSelect.worker.ts`) for picking and swapping colors in raster art
  - Saving brand palettes
- **Prereqs:** 2.3

### 2.7 Effects panel

- **Audience:** designers polishing artwork
- **Length:** 3 min
- **Priority:** P1
- **Covers:**
  - Shadow, outline, glow on text and shapes (`EffectsPanel`)
  - When effects don't print well (DTG vs DTF vs embroidery)
- **Prereqs:** 2.2, 2.3

### 2.8 Guides, alignment & snapping

- **Audience:** all designers
- **Length:** 3 min
- **Priority:** P1
- **Covers:**
  - Guides panel (`GuidesPanel`)
  - Centering to print area, distributing
  - Margins and bleed lines
- **Prereqs:** 2.1

### 2.9 Save, version & organize designs

- **Audience:** all designers
- **Length:** 4 min
- **Priority:** P0
- **Covers:**
  - Save flows: `SaveDesignModal`, `SaveChoiceModal`, `SaveDesignBankModal`
  - Folders plus recents on `/designs` (`DesignsListPage`)
  - Search-all (`SearchAllModal`)
  - The Design Bank concept
- **Prereqs:** 2.1

### 2.10 Multi-page designs (front/back, location pages)

- **Audience:** designers building multi-print products
- **Length:** 4 min
- **Priority:** P1
- **Covers:**
  - Page list view (`PageListView`)
  - Locations panel (`LocationsPanel`): front, back, sleeve, etc.
  - Print method chooser (`PrintMethodChooserModal`)
  - The "Apply Design Pages" modal for batch application
- **Prereqs:** 2.1, 2.9

---

## 3. Design Editor — AI & Power Features (P1/P2)

### 3.1 AI generate — text-to-image

- **Audience:** designers using AI
- **Length:** 4 min
- **Priority:** P1
- **Covers:**
  - AI panel (`AIPanel`)
  - Writing prompts that work
  - Style controls, aspect ratio
  - Quota/credit usage
- **Prereqs:** 2.1

### 3.2 AI edit — background remove, vectorize, color island detect

- **Audience:** designers cleaning art
- **Length:** 5 min
- **Priority:** P1
- **Covers:**
  - AI Edit panel (`AIEditPanel`)
  - Background removal
  - Vectorize raster art
  - Island detection (`islandDetect.worker.ts`) for cleaning trapped pixels
  - Stencil verification (`StencilVerifyModal`)
- **Prereqs:** 2.3, 3.1

### 3.3 Image clipping & masking

- **Audience:** intermediate designers
- **Length:** 3 min
- **Priority:** P2
- **Covers:**
  - The image clip toolbar (`ImageClipToolbar`)
  - Masking with shapes
- **Prereqs:** 2.3, 2.4

### 3.4 Array & patch layouts

- **Audience:** designers doing repeat patterns
- **Length:** 3 min
- **Priority:** P2
- **Covers:**
  - Array panel (`ArrayPanel`) and `ArrayLayoutModal`
  - All-over-print and tiling
- **Prereqs:** 2.3

### 3.5 Reusing one design across many products

- **Audience:** sellers expanding catalogs
- **Length:** 4 min
- **Priority:** P0 (matches the existing `reuse_designs` tour)
- **Covers:**
  - Open a saved design from `/designs`
  - "Apply to product": `BulkDesignsModal`, `ApplyDesignPagesModal`
  - Resizing for each product's print area
  - Bulk publishing to "My Products"
- **Prereqs:** 1.6, 2.9

### 3.6 Sharing designs with collaborators

- **Audience:** team accounts
- **Length:** 3 min
- **Priority:** P2
- **Covers:**
  - `ContentSharingModal`
  - Roles, expiry, revoking access
  - Yjs real-time co-editing behavior
- **Prereqs:** 2.9

### 3.7 Uploading custom fonts

- **Audience:** brand-conscious sellers
- **Length:** 3 min
- **Priority:** P2
- **Covers:**
  - `FontUploadModal` from the editor
  - Custom Fonts section on `/account`
  - Licensing reminder
- **Prereqs:** 2.2

---

## 4. Catalog, Products & Kits (P0/P1)

### 4.1 Browsing the product catalog

- **Audience:** all sellers
- **Length:** 3 min
- **Priority:** P0
- **Covers:**
  - `/catalog` filters: print method, color, size, category
  - Product detail view plus `ProductInfographicsModal`
  - "Start designing" hand-off
- **Prereqs:** 1.3

### 4.2 Configuring product variants & print locations

- **Audience:** all sellers
- **Length:** 4 min
- **Priority:** P1
- **Covers:**
  - Selecting sizes, colors, base price
  - Choosing print locations (front/back/sleeve)
  - `PrintMethodChooserModal` and what each method costs
  - The Variant Toolbar (`VariantToolbar`)
- **Prereqs:** 2.10, 4.1

### 4.3 "My Products" — managing your catalog

- **Audience:** all sellers
- **Length:** 3 min
- **Priority:** P1
- **Covers:**
  - `/products` (`MyProductsPage`)
  - Edit, duplicate, archive, delete
  - The empty state vs populated state
- **Prereqs:** 4.2

### 4.4 Building Kits (product bundles)

- **Audience:** sellers offering bundles
- **Length:** 4–5 min
- **Priority:** P2
- **Covers:**
  - `/kits` overview
  - `CreateKitWizardModal` and `ProductPickerModal`
  - Kit pricing & display
- **Prereqs:** 4.3

### 4.5 Infographics — product photos that sell

- **Audience:** sellers building listings
- **Length:** 4 min
- **Priority:** P1
- **Covers:**
  - Infographic editor (`/infographic-editor/new/:productId`)
  - Picking a template, swapping photos, editing copy
  - Saving and pushing to listings
- **Prereqs:** 4.3

---

## 5. Listings & Marketplaces (P0/P1)

### 5.1 Listings overview

- **Audience:** sellers about to publish
- **Length:** 3 min
- **Priority:** P0
- **Covers:**
  - `/listings` page
  - Difference between "products" and "listings"
  - Listing statuses
- **Prereqs:** 4.3

### 5.2 Connecting Shopify

- **Audience:** Shopify sellers
- **Length:** 4 min
- **Priority:** P0
- **Covers:**
  - `/sales-channels` then Shopify install
  - OAuth handshake
  - Webhook registration (what gets synced)
  - Verifying connection
- **Prereqs:** 1.7

### 5.3 Connecting Etsy

- **Audience:** Etsy sellers
- **Length:** 4 min
- **Priority:** P0
- **Covers:**
  - Etsy install then `/install/etsy/oauth` forwarder
  - Granting scopes
  - Shipping profile import
  - Common connection errors
- **Prereqs:** 1.7

### 5.4 Connecting TikTok Shop

- **Audience:** TikTok sellers
- **Length:** 4 min
- **Priority:** P1
- **Covers:**
  - TikTok auth flow
  - Category mapping
  - Sync limitations vs Shopify/Etsy
- **Prereqs:** 1.7

### 5.5 Listing Wizard — Etsy

- **Audience:** Etsy sellers
- **Length:** 6 min
- **Priority:** P0
- **Covers:**
  - `/listing/new`, pick product, Etsy
  - `EtsyListingForm` walkthrough
  - Categories (`EtsyCategoryPicker`), attributes, shipping profile
  - Photos via `AllPhotosModal`, mockups
  - Publish plus verifying it landed in Etsy
- **Prereqs:** 5.3, 4.5

### 5.6 Listing Wizard — Shopify

- **Audience:** Shopify sellers
- **Length:** 5 min
- **Priority:** P0
- **Covers:**
  - `ShopifyListingForm`
  - Variants, inventory, SEO fields
  - Publishing to Online Store, sales channel selection
- **Prereqs:** 5.2, 4.5

### 5.7 Listing Wizard — TikTok Shop

- **Audience:** TikTok sellers
- **Length:** 5 min
- **Priority:** P1
- **Covers:**
  - `TiktokListingForm`
  - Compliance fields, category nuances
- **Prereqs:** 5.4, 4.5

### 5.8 Updating an existing Etsy listing

- **Audience:** Etsy sellers
- **Length:** 4 min
- **Priority:** P1
- **Covers:**
  - `EtsyUpdateListingWizardPage`
  - When to update vs republish
  - Photo replace, price change, variant edits
- **Prereqs:** 5.5

### 5.9 Mapping imported listings to your products

- **Audience:** sellers migrating from elsewhere
- **Length:** 4 min
- **Priority:** P1
- **Covers:**
  - `ImportedListingMappingModal`
  - Auto-suggested matches
  - Bulk vs per-listing mapping
- **Prereqs:** 5.2 or 5.3

### 5.10 Sending photos & mockups to listings

- **Audience:** all sellers
- **Length:** 3 min
- **Priority:** P1
- **Covers:**
  - Mockup picker, ordering photos
  - Replacing the hero image
  - Re-syncing to the marketplace
- **Prereqs:** 5.5 or 5.6

---

## 6. Your Completeful Storefront (P1)

### 6.1 Set up your Completeful storefront

- **Audience:** sellers using the built-in store
- **Length:** 4 min
- **Priority:** P1
- **Covers:**
  - `/storefront/setup` (`StoreSetupPage`)
  - Subdomain, branding, theme
  - Adding products to the storefront
- **Prereqs:** 4.3

### 6.2 Customize your storefront brand & domain

- **Audience:** branded sellers
- **Length:** 4 min
- **Priority:** P2
- **Covers:**
  - Logo, colors, hero, about
  - Custom domain pointer (DNS guidance)
  - SEO basics (`applySeoForCurrentRoute`)
- **Prereqs:** 6.1

### 6.3 Storefront orders & customer checkout

- **Audience:** sellers running the storefront
- **Length:** 3 min
- **Priority:** P2
- **Covers:**
  - `PublicStoreApp` shopper flow
  - Cart drawer plus `/checkout`
  - How storefront orders appear in `/orders`
- **Prereqs:** 6.1

---

## 7. Orders & Fulfillment (P0/P1)

### 7.1 Orders dashboard tour

- **Audience:** all sellers
- **Length:** 3 min
- **Priority:** P0
- **Covers:**
  - `/orders` (`OrdersPage`): filters, search, status chips
  - Spend summary
  - Empty state vs populated
- **Prereqs:** 1.3

### 7.2 Order details & tracking

- **Audience:** all sellers
- **Length:** 4 min
- **Priority:** P0
- **Covers:**
  - `/orders/:id` (`OrderDetailsPage`)
  - Items, costs, shipping, tracking number
  - When/how tracking appears (`add_tracking_to_store_orders.sql`)
- **Prereqs:** 7.1

### 7.3 Personalization queue (custom orders)

- **Audience:** sellers offering custom products
- **Length:** 5 min
- **Priority:** P1
- **Covers:**
  - `/orders/personalization` (`PersonalizationQueuePage`)
  - Reading buyer notes
  - Editing the per-order design at `/orders/:orderId/items/:itemId/design`
  - Marking ready to print
- **Prereqs:** 7.1, 2.1

### 7.4 Editing an order item's design

- **Audience:** sellers handling tweaks
- **Length:** 4 min
- **Priority:** P1
- **Covers:**
  - `OrderItemDesignEditPage`
  - Save changes back to the order, not the master design
- **Prereqs:** 7.3

### 7.5 Expediting an order

- **Audience:** sellers with rush requests
- **Length:** 2 min
- **Priority:** P2
- **Covers:**
  - `ExpediteOrderModal`
  - Cost, eligibility, SLA
- **Prereqs:** 7.2

### 7.6 Returns, refunds & quality issues

- **Audience:** all sellers
- **Length:** 4 min
- **Priority:** P1
- **Covers:**
  - When the buyer reports an issue
  - Replacement vs refund
  - Photo evidence requirements
  - Where it shows up in `/orders`
- **Prereqs:** 7.2

---

## 8. Money — Wallet, Earnings, Commissions, Premium (P0/P1)

### 8.1 Wallet deep-dive

- **Audience:** all sellers
- **Length:** 4 min
- **Priority:** P0
- **Covers:**
  - `/wallet`: balance, ledger, holds
  - Auto-recharge thresholds
  - Failed-charge recovery
- **Prereqs:** 1.4

### 8.2 Store billing — letting buyers pay print costs

- **Audience:** sellers using their own checkout
- **Length:** 3 min
- **Priority:** P1
- **Covers:**
  - Toggling Store Billing
  - How charges flow on each order
- **Prereqs:** 8.1

### 8.3 Earnings dashboard

- **Audience:** sellers earning commissions
- **Length:** 3 min
- **Priority:** P1
- **Covers:**
  - `/earnings` (`EarningsPage`)
  - Date filters, entries, payout cadence
- **Prereqs:** 8.1

### 8.4 Commissions explained

- **Audience:** referral / designer commissions
- **Length:** 3 min
- **Priority:** P2
- **Covers:**
  - `/commissions` (`CommissionsPage`)
  - "How it works" section
  - Referral tracking (`add_referral_tracking_and_payouts.sql`)
- **Prereqs:** 8.3

### 8.5 Upgrading to Premium

- **Audience:** sellers ready to upgrade
- **Length:** 3 min
- **Priority:** P1
- **Covers:**
  - `/premium` features and pricing
  - Billing management
- **Prereqs:** 1.5

---

## 9. Account & Settings (P1/P2)

### 9.1 Profile & security (password, 2FA, reset)

- **Audience:** all users
- **Length:** 3 min
- **Priority:** P1
- **Covers:**
  - `/account` Profile plus Security sections
  - Password change, 2FA
  - `/auth/forgot-password` and `/auth/reset-password` flows
- **Prereqs:** 1.2

### 9.2 Email preferences & notifications

- **Audience:** all users
- **Length:** 2 min
- **Priority:** P2
- **Covers:**
  - Email Preferences section on `/account`
  - `/notifications` page
  - Quieting noise without missing important alerts
- **Prereqs:** 1.3

### 9.3 ShipStation integration

- **Audience:** sellers fulfilling outside Completeful
- **Length:** 4 min
- **Priority:** P2
- **Covers:**
  - ShipStation section on `/account`
  - Storing credentials (`20251215_create_shipstation_credentials.sql`)
  - When orders push to ShipStation vs default fulfillment
- **Prereqs:** 7.1

### 9.4 Custom fonts management

- **Audience:** brand sellers
- **Length:** 2 min
- **Priority:** P2
- **Covers:**
  - Custom Fonts section on `/account`
  - Limits and licensing
- **Prereqs:** 3.7

---

## 10. Community (P2)

### 10.1 Joining a community group

- **Audience:** all users
- **Length:** 2 min
- **Priority:** P2
- **Covers:**
  - `/community` (`CommunityPage`)
  - Group feed (`GroupFeedPage`)
- **Prereqs:** 1.3

### 10.2 Posting, commenting, and finding events

- **Audience:** active members
- **Length:** 3 min
- **Priority:** P2
- **Covers:**
  - `PostPage`, `EventsPage`, `EventPage`
  - Etiquette / what gets moderated
- **Prereqs:** 10.1

> See [[02 App & Product/Community Feature — Implementation Plan|Community Feature — Implementation Plan]] for the full build spec behind these flows.

---

## 11. Help, Support & In-App Tours (P1)

### 11.1 Getting help — chatbot, support, resources

- **Audience:** all users
- **Length:** 2 min
- **Priority:** P1
- **Covers:**
  - The `ChatBot` widget
  - `/help` (`SupportPage`) and `/resources`
  - Filing a bug vs a question
- **Prereqs:** 1.3

### 11.2 Replaying an in-app tour

- **Audience:** all users
- **Length:** 1–2 min
- **Priority:** P2
- **Covers:**
  - The Resources tour cards (`first_product`, `first_design`, `reuse_designs`)
  - That progress is tracked across devices (per `tour_system.sql`)
  - How to "start over" a tour
- **Prereqs:** 1.2

---

## 12. Power-User Workflow (P2)

### 12.1 Keyboard shortcuts in the editor

- **Audience:** frequent designers
- **Length:** 2 min
- **Priority:** P2
- **Covers:**
  - The 10–15 highest-impact shortcuts (undo, duplicate, group, snap toggle, etc.)
- **Prereqs:** 2.1

### 12.2 Bulk operations on designs and products

- **Audience:** high-volume sellers
- **Length:** 3 min
- **Priority:** P2
- **Covers:**
  - `BulkDesignsModal`
  - Multi-select on `/products` and `/designs`
- **Prereqs:** 4.3, 2.9

### 12.3 The Design Bank workflow

- **Audience:** brand-style sellers
- **Length:** 3 min
- **Priority:** P2
- **Covers:**
  - When to save to Design Bank vs personal designs
  - `SaveDesignBankModal`
- **Prereqs:** 2.9

### 12.4 Search-everything (`SearchAllModal`)

- **Audience:** power users
- **Length:** 2 min
- **Priority:** P2
- **Covers:**
  - Opening the universal search
  - Indexing (designs, products, listings, orders)
- **Prereqs:** 1.3

---

## 13. Developer / API (P2 — separate audience)

### 13.1 Mockups API quickstart

- **Audience:** developers, partners
- **Length:** 5 min
- **Priority:** P2
- **Covers:**
  - `/mockups-api` docs page (`MockupsApiDocsPage`)
  - Auth, request shape, sample response
  - Quotas and pricing pointer
- **Prereqs:** none (separate audience)

---

## 14. Admin / Operator (P1/P2 — internal training)

### 14.1 Admin dashboard tour

- **Audience:** Completeful staff
- **Length:** 3 min
- **Priority:** P1
- **Covers:**
  - `/admin/*` layout (`AdminLayout`, `AdminNavigationSidebar`)
  - High-level map of admin sections
- **Prereqs:** none

### 14.2 Product Wizard (creating new product templates)

- **Audience:** product ops
- **Length:** 8 min (matches the existing `product_wizard` tour, 10 steps)
- **Priority:** P1
- **Covers:**
  - `/admin/products/new` then `ProductWizardPage`
  - Print areas, locations, mockups, cost notice
  - Comments & approval (`ProductWizardCommentsModal`)
- **Prereqs:** 14.1

### 14.3 Mockups generation & approval

- **Audience:** mockups team
- **Length:** 6 min
- **Priority:** P1
- **Covers:**
  - `MockupsListPage`, `MockupsApprovalPage`, `PhotoRoomBatchMockupsPage`
  - Approval workflow (`20251218_add_product_mockup_approval_workflow.sql`)
- **Prereqs:** 14.1

### 14.4 Product audits & cost approvals

- **Audience:** ops/finance
- **Length:** 5 min
- **Priority:** P2
- **Covers:**
  - `ProductAuditsPage`, `ProductCostApprovalsPage`
  - Snapshot diffs and approval flow
- **Prereqs:** 14.1

### 14.5 Tours management

- **Audience:** growth/onboarding
- **Length:** 3 min
- **Priority:** P2
- **Covers:**
  - `/admin/tours` dashboard
  - Toggle active/auto-start, view stats, reset user progress
- **Prereqs:** 14.1

### 14.6 User & impersonation tools

- **Audience:** support
- **Length:** 4 min
- **Priority:** P2
- **Covers:**
  - `admin/users`
  - Impersonation banner behavior (`ImpersonationBanner`)
  - When NOT to impersonate
- **Prereqs:** 14.1

### 14.7 Marketplace admin

- **Audience:** ops
- **Length:** 4 min
- **Priority:** P2
- **Covers:**
  - `admin/marketplaces` (`MarketplacesPage`)
  - Webhook health, token re-auth
- **Prereqs:** 14.1

---

## 15. Troubleshooting & FAQs (P1 — short, evergreen)

Each of these is intentionally short (60–120 seconds), high-search-volume.

### 15.1 "Why does it say I need a payment method?"

- Triggered by `PaymentMethodRequiredBanner`; fix in 60 seconds.

### 15.2 "My Etsy listing didn't sync"

- Re-auth, scope check, shipping profile, error log location.

### 15.3 "My order is stuck in personalization"

- Where to find it in the queue, how to mark ready.

### 15.4 "Wallet auto-recharge failed"

- Update card, retry, contact support.

### 15.5 "I can't reset my password / 2FA"

- The reset flow plus how support unlocks it.

### 15.6 "My mockup looks wrong / was rejected"

- Common reasons, how to re-submit.

### 15.7 "Where did my design go?"

- Folders, recents, shared-with-you, search.

---

## Summary table

| # | Title | Priority | Length |
|---|---|---|---|
| 1.1 | Welcome to Completeful | P0 | 1–2 min |
| 1.2 | Create your account & finish onboarding | P0 | 2–3 min |
| 1.3 | Your dashboard tour | P0 | 3 min |
| 1.4 | Add a payment method & wallet basics | P0 | 3–4 min |
| 1.5 | Free vs Premium | P1 | 2–3 min |
| 1.6 | Your first product, end-to-end | P0 | 6–8 min |
| 1.7 | Connect your first sales channel | P0 | 3–4 min |
| 2.1 | Editor overview & layout | P0 | 4 min |
| 2.2 | Text basics — straight, circle, bezier | P0 | 5 min |
| 2.3 | Uploading & placing images | P0 | 4 min |
| 2.4 | Shapes & graphics library | P1 | 3–4 min |
| 2.5 | Layers, grouping & arrangement | P1 | 3 min |
| 2.6 | Color tools — palettes & color select | P1 | 4 min |
| 2.7 | Effects panel | P1 | 3 min |
| 2.8 | Guides, alignment & snapping | P1 | 3 min |
| 2.9 | Save, version & organize designs | P0 | 4 min |
| 2.10 | Multi-page designs (front/back, locations) | P1 | 4 min |
| 3.1 | AI generate — text-to-image | P1 | 4 min |
| 3.2 | AI edit — bg remove, vectorize, island detect | P1 | 5 min |
| 3.3 | Image clipping & masking | P2 | 3 min |
| 3.4 | Array & patch layouts | P2 | 3 min |
| 3.5 | Reusing one design across many products | P0 | 4 min |
| 3.6 | Sharing designs with collaborators | P2 | 3 min |
| 3.7 | Uploading custom fonts | P2 | 3 min |
| 4.1 | Browsing the product catalog | P0 | 3 min |
| 4.2 | Configuring product variants & print locations | P1 | 4 min |
| 4.3 | "My Products" — managing your catalog | P1 | 3 min |
| 4.4 | Building Kits (product bundles) | P2 | 4–5 min |
| 4.5 | Infographics — product photos that sell | P1 | 4 min |
| 5.1 | Listings overview | P0 | 3 min |
| 5.2 | Connecting Shopify | P0 | 4 min |
| 5.3 | Connecting Etsy | P0 | 4 min |
| 5.4 | Connecting TikTok Shop | P1 | 4 min |
| 5.5 | Listing Wizard — Etsy | P0 | 6 min |
| 5.6 | Listing Wizard — Shopify | P0 | 5 min |
| 5.7 | Listing Wizard — TikTok Shop | P1 | 5 min |
| 5.8 | Updating an existing Etsy listing | P1 | 4 min |
| 5.9 | Mapping imported listings to your products | P1 | 4 min |
| 5.10 | Sending photos & mockups to listings | P1 | 3 min |
| 6.1 | Set up your Completeful storefront | P1 | 4 min |
| 6.2 | Customize storefront brand & domain | P2 | 4 min |
| 6.3 | Storefront orders & customer checkout | P2 | 3 min |
| 7.1 | Orders dashboard tour | P0 | 3 min |
| 7.2 | Order details & tracking | P0 | 4 min |
| 7.3 | Personalization queue | P1 | 5 min |
| 7.4 | Editing an order item's design | P1 | 4 min |
| 7.5 | Expediting an order | P2 | 2 min |
| 7.6 | Returns, refunds & quality issues | P1 | 4 min |
| 8.1 | Wallet deep-dive | P0 | 4 min |
| 8.2 | Store billing | P1 | 3 min |
| 8.3 | Earnings dashboard | P1 | 3 min |
| 8.4 | Commissions explained | P2 | 3 min |
| 8.5 | Upgrading to Premium | P1 | 3 min |
| 9.1 | Profile & security | P1 | 3 min |
| 9.2 | Email preferences & notifications | P2 | 2 min |
| 9.3 | ShipStation integration | P2 | 4 min |
| 9.4 | Custom fonts management | P2 | 2 min |
| 10.1 | Joining a community group | P2 | 2 min |
| 10.2 | Posting, commenting, finding events | P2 | 3 min |
| 11.1 | Getting help — chatbot, support, resources | P1 | 2 min |
| 11.2 | Replaying an in-app tour | P2 | 1–2 min |
| 12.1 | Keyboard shortcuts in the editor | P2 | 2 min |
| 12.2 | Bulk operations on designs & products | P2 | 3 min |
| 12.3 | The Design Bank workflow | P2 | 3 min |
| 12.4 | Search-everything | P2 | 2 min |
| 13.1 | Mockups API quickstart | P2 | 5 min |
| 14.1 | Admin dashboard tour | P1 | 3 min |
| 14.2 | Product Wizard | P1 | 8 min |
| 14.3 | Mockups generation & approval | P1 | 6 min |
| 14.4 | Product audits & cost approvals | P2 | 5 min |
| 14.5 | Tours management | P2 | 3 min |
| 14.6 | User & impersonation tools | P2 | 4 min |
| 14.7 | Marketplace admin | P2 | 4 min |
| 15.1 | "Need a payment method" FAQ | P1 | ~1 min |
| 15.2 | "Etsy listing didn't sync" FAQ | P1 | ~1 min |
| 15.3 | "Order stuck in personalization" FAQ | P1 | ~1 min |
| 15.4 | "Wallet auto-recharge failed" FAQ | P1 | ~1 min |
| 15.5 | "Can't reset password / 2FA" FAQ | P1 | ~1 min |
| 15.6 | "Mockup looks wrong / was rejected" FAQ | P1 | ~1 min |
| 15.7 | "Where did my design go?" FAQ | P1 | ~1 min |

**Totals:** ~80 videos. **P0 = 19** (the ship-first set). **P1 = 28**. **P2 = 33**.

---

## Suggested production phasing

**Phase 1 — "Get the new seller to first sale" (P0 only, ~19 videos, ~75 min total).** A new user can find every video they need to go from signup to a published, fulfilled order. This pairs well with the existing in-app tours (`seller_home`, `first_design`, `first_product`, `reuse_designs`).

**Phase 2 — "Power-user & marketplace coverage" (P1, ~28 videos).** Adds full marketplace coverage, AI tools, infographics, personalization, billing depth, and the FAQ shorts. This is where you cover the 80% of support tickets.

**Phase 3 — "Long-tail & internal" (P2, ~33 videos).** Admin training, advanced editor, community, custom fonts, dev API. Lower urgency, evergreen value.

---

## Notes for production

- **Naming convention:** `Completeful — [section] [number]: [Title]` (e.g. "Completeful — Editor 02: Text basics"). Keeps them sorted in YouTube/Loom and easy to link from `/resources`.
- **Hosting:** publish on YouTube and embed in `/resources` and the relevant in-product help tooltips. The existing `TOUR_CARDS` in `App.tsx` can also link to specific videos as a fallback when a user closes the interactive tour.
- **Branding:** open with the same 3-second logo bumper, end with a "Next: [Video X.Y]" card to encourage flow-through.
- **Update cadence:** review P0 videos every 2 release cycles for UI drift; P1/P2 yearly.
- **Captions & chapters:** every video over 3 min should have YouTube chapters and burned-in captions. Helps SEO and accessibility.
- **In-app tour pairing:** for the 3 tours that already exist (`seller_home`, `design_editor`, `product_wizard`), record a "video version"; some users prefer passive watching to an interactive walkthrough.

---

## Related

- [[10 Maps/Tutorials MOC|Tutorials MOC]]
- [[04 Tutorials/_Tutorials Index|Tutorials Index]]
- [[02 App & Product/Community Feature — Implementation Plan|Community Feature — Implementation Plan]]
- [[02 App & Product/Completeful (Capp2) Route Node Map|Completeful (Capp2) — Route Node Map]]
