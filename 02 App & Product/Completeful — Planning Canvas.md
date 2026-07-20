---
title: "Completeful — Planning Canvas"
type: reference
tags:
  - app
  - product
  - ideas
  - planning
source: imported 2026-06-09
---

# Completeful — Planning Canvas

Planning-canvas node board exported to markdown (87 nodes), grouped by type then status.

## Root

- **Completeful** _(existing)_
  - Print-on-demand seller platform: design studio, product catalog, multi-marketplace listing & order fulfillment, community, and a full admin back office. React 19 + react-router-dom v7 frontend, Express/Supabase backend.

## Section

- **Core** _(existing)_
  - Primary landing surfaces every signed-in user sees.
- **Design Studio** _(existing)_
  - Create and edit designs, mockups, and product infographics.
- **Catalog** _(existing)_
  - Browse the print-on-demand product catalog.
- **Products & Kits** _(existing)_
  - Manage your customized products and bundled kits.
- **Listings** _(existing)_
  - Create and publish marketplace listings (Etsy, Shopify, TikTok).
- **Sales Channels & Storefront** _(existing)_
  - Connect marketplaces and run a public storefront.
- **Orders** _(existing)_
  - View and personalize incoming orders.
- **Money** _(existing)_
  - Wallet, commissions, earnings, and checkout.
- **Community** _(existing)_
  - Groups, posts, and events for sellers.
- **Account & Support** _(existing)_
  - Profile, branding, premium, help and resources.
- **Auth** _(existing)_
  - Authentication and account recovery flows.
- **Admin** _(existing)_
  - Back office: catalog, channels & fulfillment, orders, users, AI, community and system tools. (Gated under /admin/*.)

## Screen

- **Dashboard** _(existing)_
  - Home dashboard with onboarding checklist and news.

Features: KPI overview, Onboarding checklist, News carousel, Role-aware (seller/designer/3PL)
- **AI Onboarding** _(existing)_
  - Conversational AI onboarding that builds your first products.

Features: Chat panel, Live preview panel, Agent actions, Streaming responses
- **Notifications** _(existing)_
  - User notification center with unread badge.

Features: Notification feed, Unread count, Mark read
- **My Designs** _(existing)_
  - Library of saved designs.

Features: Design list, Open in editor, Create new
- **Design Editor** _(existing)_
  - Konva-based canvas editor for an existing design.

Features: Konva canvas, Yjs collaboration, Layers, Export
- **New Design** _(existing)_
  - Create-design editor for a blank canvas.

Features: Blank canvas, Asset upload, Templates
- **Infographic Editor** _(existing)_
  - Designer for product infographic graphics.

Features: Infographic canvas, Per-product layout
- **Catalog** _(existing)_
  - Browse blank products available to customize and sell.

Features: Product grid, Category & facet filters, Print types, Featured products, Infographic counts
- **My Products** _(existing)_
  - Your customized products ready to list.

Features: Product list, Edit/duplicate, Cost status
- **Cost Approvals** _(existing)_
  - Review and approve product cost changes.

Features: Cost change requests, Approve / reject
- **Kits (Beta)** _(existing)_
  - Bundle products into sellable kits (admin gated).

Features: Kit builder, Bundled products
- **My Listings** _(existing)_
  - All marketplace listings across connected channels.

Features: Listing list, Marketplace mapping, Sync status
- **Listing Wizard** _(existing)_
  - Guided AI listing creation flow.

Features: AI listing drafts, Marketplace forms, Image selection, Multi-step wizard
- **Sales Channels** _(existing)_
  - Connect and manage Etsy, Shopify, and TikTok accounts.

Features: Channel connections, OAuth install, Sync controls
- **Public Storefront** _(existing)_
  - Customer-facing storefront for a seller's subdomain.

Features: Storefront home, Custom domain
- **Etsy OAuth Forwarder** _(existing)_
  - Handles Etsy install OAuth redirect.

Features: OAuth callback
- **Orders** _(existing)_
  - All orders across channels.

Features: Order list, Status tracking, Fulfillment
- **Personalization Queue** _(existing)_
  - Orders awaiting personalization/design work.

Features: Personalization queue, Per-item design
- **Order Item Design** _(existing)_
  - Design editor for a specific order item.

Features: Canvas editor, Order context
- **Order Detail** _(existing)_
  - Single order detail view.

Features: Line items, Shipping, Tracking
- **Wallet** _(existing)_
  - Stripe wallet balance and top-ups.

Features: Balance, Top-up, Payment methods, Ledger
- **Commissions** _(existing)_
  - Commission tracking and referrals panel.

Features: Commission summary, Referrals panel, Payouts
- **Earnings** _(existing)_
  - Earnings overview and history.

Features: Earnings totals, History
- **Checkout** _(existing)_
  - Stripe checkout flow.

Features: Stripe Elements, Order summary, Payment
- **Community** _(existing)_
  - Community hub with feed and groups.

Features: Activity feed, Groups, Posts
- **Group Feed** _(existing)_
  - Feed for a single community group.

Features: Group posts, Membership
- **Post** _(existing)_
  - Single post with comments.

Features: Post detail, Comments
- **Events** _(existing)_
  - Community events listing.

Features: Event list, RSVP
- **Profile / Account** _(existing)_
  - Account settings and profile.

Features: Profile, ShipStation settings, Preferences
- **Branding** _(existing)_
  - Storefront and brand customization.

Features: Brand colors, Logo, Domain
- **Premium** _(existing)_
  - Premium / subscription upsell.

Features: Plans, Upgrade
- **Help / Support** _(existing)_
  - Support tickets and help center.

Features: Ticket list, Create ticket, Assistant reply
- **Resources** _(existing)_
  - Guides and resource library.

Features: Guides, Docs
- **Mockups API Docs** _(existing)_
  - Swagger docs for the public Mockups API.

Features: Swagger UI, API reference
- **Login** _(existing)_
  - Email/password login.

Features: Login form, Supabase auth
- **Sign Up** _(existing)_
  - New account registration.

Features: Signup form
- **Confirm Email** _(existing)_
  - Email confirmation handler.

Features: Email verify
- **Forgot Password** _(existing)_
  - Request a password reset.

Features: Reset request
- **Reset Password** _(existing)_
  - Set a new password.

Features: New password
- **MFA Setup** _(existing)_
  - Multi-factor authentication setup.

Features: TOTP setup, Recovery codes
- **Access Required** _(existing)_
  - Gate shown when access is restricted.

Features: Access gate
- **Maintenance** _(existing)_
  - Maintenance-mode page.

Features: Maintenance notice
- **Admin Dashboard** _(existing)_
  - Admin overview home.

Features: Admin overview
- **Products** _(existing)_
  - Master product catalog management.

Features: Product CRUD, NIRF products, Infographics
- **Product Groups** _(existing)_
  - Group products together.

Features: Grouping
- **Product Access** _(existing)_
  - Control product access/visibility.

Features: Access rules
- **Categories** _(existing)_
  - Manage catalog categories.

Features: Category tree
- **Print Types** _(existing)_
  - Manage print methods/types.

Features: Print methods
- **Patch Shapes** _(existing)_
  - Manage patch/print location shapes.

Features: Shapes
- **Shapes** _(existing)_
  - Shape library management.

Features: Shape library
- **Mockups** _(existing)_
  - Manage product mockups.

Features: Mockup library, Editor
- **Fonts** _(existing)_
  - Manage available fonts.

Features: Font library
- **Art Bank** _(existing)_
  - Manage stock art assets.

Features: Art assets, Semantic search
- **Design Bank** _(existing)_
  - Manage shared design templates.

Features: Template library, Editor
- **Shipping** _(existing)_
  - Shipping configuration.

Features: Shipping rates
- **Store Pricing** _(existing)_
  - Per-store pricing rules.

Features: Pricing rules
- **Seller Promos** _(existing)_
  - Manage seller promotions.

Features: Promo codes
- **Seller Checklist** _(existing)_
  - Seller onboarding checklist config.

Features: Checklist items
- **Billing Test** _(existing)_
  - Test billing/charges (Stripe).

Features: Test charge, Stripe backfill
- **Marketplaces** _(existing)_
  - Marketplace integration management.

Features: Etsy, Shopify, TikTok
- **Stores** _(existing)_
  - Connected store management.

Features: Store list, Per-store products
- **Orders** _(existing)_
  - All-orders management view.

Features: Order list, Fulfillment, Outbox
- **Personalization** _(existing)_
  - Personalization work queue.

Features: Queue, Per-item design
- **Test Orders** _(existing)_
  - Create/inspect test orders.

Features: Test order tools
- **Users** _(existing)_
  - User management and impersonation.

Features: User list, Impersonation, MFA
- **Authorisation** _(existing)_
  - Roles and permissions management.

Features: Roles, Permissions
- **Tours** _(existing)_
  - Product tour definitions and analytics.

Features: Tour definitions, Progress, Analytics
- **AI Settings** _(existing)_
  - Configure AI image/chat settings.

Features: Model settings, Prompts
- **PNG to Canvas** _(existing)_
  - Tool to convert PNGs into editable canvases.

Features: PNG import, Canvas conversion
- **Community** _(existing)_
  - Moderate community content.

Features: Moderation
- **Support** _(existing)_
  - Support ticket back office.

Features: Ticket queue, Replies, Status
- **Notifications** _(existing)_
  - Manage notifications and broadcasts.

Features: Settings, Broadcast
- **Settings** _(existing)_
  - System settings.

Features: Config
- **Migration** _(existing)_
  - Legacy data migration tools.

Features: User products, Staging preview

## Related
- [[02 App & Product/Completeful — Unique Additions Plan|Completeful — Unique Additions Plan]]
- [[02 App & Product/App Overview & Capabilities|App Overview & Capabilities]]
- [[02 App & Product/App Tools To Build|App Tools To Build]]
- [[02 App & Product/Canvas Designer Route Node Map|Canvas Designer — Route Node Map]]
- [[02 App & Product/Completeful (Capp2) Route Node Map|Completeful (Capp2) — Route Node Map]]
