---
title: "Completeful (Capp2) — Route Node Map"
type: reference
tags:
  - app
  - engineering
  - product
  - architecture
  - routes
source: imported 2026-06-09
---

# Completeful (Capp2) — Route Node Map

Hierarchical map of Capp2 pages/routes and API surface, imported from the interactive node-map.


# Pages & Routes

## Completeful

Print-on-demand seller platform: design studio, product catalog, multi-marketplace listing & order fulfillment, community, and a full admin back office. React 19 + react-router-dom v7 frontend, Express/Supabase backend.

### Core
*cat*
Primary landing surfaces every signed-in user sees.
#### Dashboard — `/`
*page*
Home dashboard with onboarding checklist and news.
- KPI overview
- Onboarding checklist
- News carousel
- Role-aware (seller/designer/3PL)

#### AI Onboarding — `/onboarding`
*page*
Conversational AI onboarding that builds your first products.
- Chat panel
- Live preview panel
- Agent actions
- Streaming responses

#### Notifications — `/notifications`
*page*
User notification center with unread badge.
- Notification feed
- Unread count
- Mark read

### Design Studio
*cat*
Create and edit designs, mockups, and product infographics.
#### My Designs — `/designs`
*page*
Library of saved designs.
- Design list
- Open in editor
- Create new

#### Design Editor — `/design/:id`
*page*
Konva-based canvas editor for an existing design.
- Konva canvas
- Yjs collaboration
- Layers
- Export

#### New Design — `/design/new`
*page*
Create-design editor for a blank canvas.
- Blank canvas
- Asset upload
- Templates

##### From Template — `/design-template/:id`
*sub*
Start a new design from a template.
#### Infographic Editor — `/infographic-editor/:id`
*page*
Designer for product infographic graphics.
- Infographic canvas
- Per-product layout

##### New Infographic — `/infographic-editor/new/:productId`
*sub*
Create an infographic for a product.
### Catalog
*cat*
Browse the print-on-demand product catalog.
#### Catalog — `/catalog`
*page*
Browse blank products available to customize and sell.
- Product grid
- Category & facet filters
- Print types
- Featured products
- Infographic counts

### Products & Kits
*cat*
Manage your customized products and bundled kits.
#### My Products — `/products`
*page*
Your customized products ready to list.
- Product list
- Edit/duplicate
- Cost status

##### Product Success — `/products/:id/success`
*sub*
Confirmation after creating a product.
#### Cost Approvals — `/product-cost-approvals`
*page*
Review and approve product cost changes.
- Cost change requests
- Approve / reject

#### Kits (Beta) — `/kits`
*page*
Bundle products into sellable kits (admin gated).
- Kit builder
- Bundled products

##### Kit Detail — `/kits/:kitStoreProductId`
*sub*
View/edit a single kit.
### Listings
*cat*
Create and publish marketplace listings (Etsy, Shopify, TikTok).
#### My Listings — `/listings`
*page*
All marketplace listings across connected channels.
- Listing list
- Marketplace mapping
- Sync status

#### Listing Wizard — `/listing/new`
*page*
Guided AI listing creation flow.
- AI listing drafts
- Marketplace forms
- Image selection
- Multi-step wizard

##### Edit Listing — `/listing/:storeProductId/edit`
*sub*
Edit an existing store listing.
##### Edit Etsy Listing — `/listing/etsy/:mappingId/edit`
*sub*
Update an Etsy listing mapping.
##### Listing Detail — `/listings/:id`
*sub*
View a single listing.
### Sales Channels & Storefront
*cat*
Connect marketplaces and run a public storefront.
#### Sales Channels — `/sales-channels`
*page*
Connect and manage Etsy, Shopify, and TikTok accounts.
- Channel connections
- OAuth install
- Sync controls

#### Public Storefront — `/storefront/public/:sub/*`
*page*
Customer-facing storefront for a seller's subdomain.
- Storefront home
- Custom domain

##### Storefront Product — `/storefront/public/:sub/p/:slug`
*sub*
Public product detail page.
#### Etsy OAuth Forwarder — `/install/etsy/oauth`
*page*
Handles Etsy install OAuth redirect.
- OAuth callback

### Orders
*cat*
View and personalize incoming orders.
#### Orders — `/orders`
*page*
All orders across channels.
- Order list
- Status tracking
- Fulfillment

#### Personalization Queue — `/orders/personalization`
*page*
Orders awaiting personalization/design work.
- Personalization queue
- Per-item design

#### Order Item Design — `/orders/:orderId/items/:itemId/design`
*page*
Design editor for a specific order item.
- Canvas editor
- Order context

##### Edit Item Design — `/orders/:orderId/items/:itemId/design/:id`
*sub*
Edit a saved design on an order item.
#### Order Detail — `/orders/:id`
*page*
Single order detail view.
- Line items
- Shipping
- Tracking

### Money
*cat*
Wallet, commissions, earnings, and checkout.
#### Wallet — `/wallet`
*page*
Stripe wallet balance and top-ups.
- Balance
- Top-up
- Payment methods
- Ledger

#### Commissions — `/commissions`
*page*
Commission tracking and referrals panel.
- Commission summary
- Referrals panel
- Payouts

#### Earnings — `/earnings`
*page*
Earnings overview and history.
- Earnings totals
- History

#### Checkout — `/checkout`
*page*
Stripe checkout flow.
- Stripe Elements
- Order summary
- Payment

### Community
*cat*
Groups, posts, and events for sellers.
#### Community — `/community`
*page*
Community hub with feed and groups.
- Activity feed
- Groups
- Posts

#### Group Feed — `/community/groups/:groupId`
*page*
Feed for a single community group.
- Group posts
- Membership

#### Post — `/community/posts/:postId`
*page*
Single post with comments.
- Post detail
- Comments

#### Events — `/community/events`
*page*
Community events listing.
- Event list
- RSVP

##### Event Detail — `/community/events/:eventId`
*sub*
Single event page.
### Account & Support
*cat*
Profile, branding, premium, help and resources.
#### Profile / Account — `/profile`
*page*
Account settings and profile.
- Profile
- ShipStation settings
- Preferences

#### Branding — `/branding`
*page*
Storefront and brand customization.
- Brand colors
- Logo
- Domain

#### Premium — `/premium`
*page*
Premium / subscription upsell.
- Plans
- Upgrade

#### Help / Support — `/help`
*page*
Support tickets and help center.
- Ticket list
- Create ticket
- Assistant reply

#### Resources — `/resources`
*page*
Guides and resource library.
- Guides
- Docs

#### Mockups API Docs — `/mockups-api`
*page*
Swagger docs for the public Mockups API.
- Swagger UI
- API reference

### Auth
*cat*
Authentication and account recovery flows.
#### Login — `/auth/login`
*page*
Email/password login.
- Login form
- Supabase auth

#### Sign Up — `/auth/signup`
*page*
New account registration.
- Signup form

#### Confirm Email — `/auth/confirm`
*page*
Email confirmation handler.
- Email verify

#### Forgot Password — `/auth/forgot-password`
*page*
Request a password reset.
- Reset request

#### Reset Password — `/auth/reset-password`
*page*
Set a new password.
- New password

#### MFA Setup — `/auth/mfa/setup`
*page*
Multi-factor authentication setup.
- TOTP setup
- Recovery codes

#### Access Required — `/access-required`
*page*
Gate shown when access is restricted.
- Access gate

#### Maintenance — `/maintenance`
*page*
Maintenance-mode page.
- Maintenance notice

### Admin
*cat*
Back office: catalog, channels & fulfillment, orders, users, AI, community and system tools. (Gated under /admin/*.)
#### Admin Dashboard — `/admin`
*page*
Admin overview home.
- Admin overview

#### Products — `/admin/products`
*page*
Master product catalog management.
- Product CRUD
- NIRF products
- Infographics

##### New Product — `/admin/products/new`
*sub*
Create a catalog product.
##### Edit Product — `/admin/products/:id/edit`
*sub*
Edit a catalog product.
##### Product Audits — `/admin/products/audits`
*sub*
Audit product data quality.
##### Audit Approvals — `/admin/products/audits/approvals`
*sub*
Approve audit changes.
##### Cost Approvals — `/admin/products/cost-approvals`
*sub*
Approve product cost changes.
##### New Static Infographic — `/admin/products/:productId/infographics/new-static`
*sub*
Add a static infographic.
##### New Designer Infographic — `/admin/products/:productId/infographics/new-designer`
*sub*
Design a new infographic.
#### Product Groups — `/admin/product-groups`
*page*
Group products together.
- Grouping

#### Product Access — `/admin/product-access`
*page*
Control product access/visibility.
- Access rules

#### Categories — `/admin/categories`
*page*
Manage catalog categories.
- Category tree

#### Print Types — `/admin/print-types`
*page*
Manage print methods/types.
- Print methods

#### Patch Shapes — `/admin/patch-shapes`
*page*
Manage patch/print location shapes.
- Shapes

#### Shapes — `/admin/shapes`
*page*
Shape library management.
- Shape library

#### Mockups — `/admin/mockups`
*page*
Manage product mockups.
- Mockup library
- Editor

##### Mockup Approvals — `/admin/mockups/approvals`
*sub*
Approve generated mockups.
##### Mockup Editor — `/admin/mockups/editor`
*sub*
Edit mockup templates.
##### PhotoRoom Batch — `/admin/mockups/photoroom-batch`
*sub*
Batch background removal via PhotoRoom.
#### Fonts — `/admin/fonts`
*page*
Manage available fonts.
- Font library

#### Art Bank — `/admin/art-bank`
*page*
Manage stock art assets.
- Art assets
- Semantic search

#### Design Bank — `/admin/design-bank`
*page*
Manage shared design templates.
- Template library
- Editor

##### Design Bank Editor — `/admin/design-bank/editor/:id`
*sub*
Edit a design-bank template.
#### Shipping — `/admin/shipping`
*page*
Shipping configuration.
- Shipping rates

#### Store Pricing — `/admin/store-pricing`
*page*
Per-store pricing rules.
- Pricing rules

#### Seller Promos — `/admin/seller-promos`
*page*
Manage seller promotions.
- Promo codes

#### Seller Checklist — `/admin/seller-checklist`
*page*
Seller onboarding checklist config.
- Checklist items

#### Billing Test — `/admin/billing-test`
*page*
Test billing/charges (Stripe).
- Test charge
- Stripe backfill

#### Marketplaces — `/admin/marketplaces`
*page*
Marketplace integration management.
- Etsy
- Shopify
- TikTok

#### Stores — `/admin/stores`
*page*
Connected store management.
- Store list
- Per-store products

##### Store Products — `/admin/stores/:storeId/products`
*sub*
Products for one store.
##### Store Pricing — `/admin/stores/:storeId/pricing`
*sub*
Pricing for one store.
#### Orders — `/admin/orders`
*page*
All-orders management view.
- Order list
- Fulfillment
- Outbox

#### Personalization — `/admin/orders/personalization`
*page*
Personalization work queue.
- Queue
- Per-item design

#### Test Orders — `/admin/orders/test`
*page*
Create/inspect test orders.
- Test order tools

#### Users — `/admin/users`
*page*
User management and impersonation.
- User list
- Impersonation
- MFA

#### Authorisation — `/admin/authz`
*page*
Roles and permissions management.
- Roles
- Permissions

#### Tours — `/admin/tours`
*page*
Product tour definitions and analytics.
- Tour definitions
- Progress
- Analytics

#### AI Settings — `/admin/ai-settings`
*page*
Configure AI image/chat settings.
- Model settings
- Prompts

#### PNG to Canvas — `/admin/tools/png-to-canvas`
*page*
Tool to convert PNGs into editable canvases.
- PNG import
- Canvas conversion

#### Community — `/admin/community`
*page*
Moderate community content.
- Moderation

#### Support — `/admin/support`
*page*
Support ticket back office.
- Ticket queue
- Replies
- Status

#### Notifications — `/admin/notifications`
*page*
Manage notifications and broadcasts.
- Settings
- Broadcast

##### Notification Settings — `/admin/notifications/settings`
*sub*
Configure notification behavior.
##### Broadcast — `/admin/notifications/broadcast`
*sub*
Send a broadcast notification.
#### Settings — `/admin/settings`
*page*
System settings.
- Config

#### Migration — `/admin/migration`
*page*
Legacy data migration tools.
- User products
- Staging preview

##### User Products Migration — `/admin/migration/user-products`
*sub*
Migrate legacy user products.
##### Staging Preview — `/admin/migration/staging-preview`
*sub*
Preview staged migration data.

# API Surface

## API Routes

86 endpoints

### Auth & Users
*cat*
8 endpoints
#### auth/signup — `/api/auth/signup`
*page*
POST
#### auth/send-password-reset — `/api/auth/send-password-reset`
*page*
POST
#### users/profile — `/api/users/profile`
*page*
GET · PATCH
#### users/shipstation — `/api/users/shipstation`
*page*
GET · PUT
#### admin/mfa — `/api/admin/mfa`
*page*
POST
#### admin/impersonation — `/api/admin/impersonation`
*page*
POST
#### admin/users — `/api/admin/users`
*page*
GET · POST · PATCH
#### admin/authz — `/api/admin/authz`
*page*
GET · POST
### Catalog & Products
*cat*
11 endpoints
#### catalog/products — `/api/catalog/products`
*page*
GET
#### catalog/categories — `/api/catalog/categories`
*page*
GET
#### catalog/facets — `/api/catalog/facets`
*page*
GET
#### catalog/print-types — `/api/catalog/print-types`
*page*
GET
#### catalog/featured — `/api/catalog/featured`
*page*
GET
#### catalog/infographic-counts — `/api/catalog/infographic-counts`
*page*
GET
#### admin/products — `/api/admin/products`
*page*
GET · POST · PUT · DELETE
#### product-images — `/api/product-images`
*page*
GET · POST
#### product-audits — `/api/product-audits`
*page*
GET · POST
#### product-cost-change-requests — `/api/product-cost-change-requests`
*page*
GET · POST
#### admin/cost-change-requests — `/api/admin/cost-change-requests`
*page*
GET · POST
### Design, Mockups & AI
*cat*
9 endpoints
#### admin/design — `/api/admin/design`
*page*
GET · POST · PUT · DELETE
#### mockups/fetch-psd — `/api/mockups/fetch-psd`
*page*
POST
#### v1/mockups — `/api/v1/mockups`
*page*
GET · POST
#### photoroom — `/api/photoroom`
*page*
POST
#### claid — `/api/claid`
*page*
POST
#### ai/chat — `/api/ai/chat`
*page*
POST
#### ai/image — `/api/ai/image`
*page*
POST
#### ai-settings — `/api/ai-settings`
*page*
GET · POST
#### artwork-semantic-search — `/api/artwork-semantic-search`
*page*
GET · POST
### Listings & Marketplaces
*cat*
11 endpoints
#### marketplace-listings/sync — `/api/marketplace-listings/sync`
*page*
POST
#### marketplace-listings/map — `/api/marketplace-listings/map`
*page*
POST
#### marketplace-listings/stats — `/api/marketplace-listings/stats`
*page*
GET
#### admin/stores/:storeId/import — `/api/admin/stores/:storeId/import`
*page*
POST
#### admin/marketplace-listings — `/api/admin/marketplace-listings`
*page*
GET · POST
#### listings-agent-drafts — `/api/listings-agent-drafts`
*page*
GET · POST
#### etsy — `/api/etsy`
*page*
GET · POST
#### shopify — `/api/shopify`
*page*
GET · POST
#### tiktok — `/api/tiktok`
*page*
GET · POST
#### admin/store-products — `/api/admin/store-products`
*page*
GET · POST · PUT
#### admin/store-pricing — `/api/admin/store-pricing`
*page*
GET · POST
### Orders & Fulfillment
*cat*
3 endpoints
#### orders — `/api/orders`
*page*
GET · POST · PATCH
#### admin/oms-backfill — `/api/admin/oms-backfill`
*page*
POST
#### ingestion — `/api/ingestion`
*page*
POST
### Billing & Payments
*cat*
15 endpoints
#### billing/setup-intent — `/api/billing/setup-intent`
*page*
POST
#### billing/payment-methods — `/api/billing/payment-methods`
*page*
GET · POST
#### billing/payment-methods/attach — `/api/billing/payment-methods/attach`
*page*
POST
#### billing/payment-methods/default — `/api/billing/payment-methods/default`
*page*
POST
#### billing/wallet — `/api/billing/wallet`
*page*
GET
#### billing/wallet/settings — `/api/billing/wallet/settings`
*page*
POST
#### billing/wallet/top-up/intent — `/api/billing/wallet/top-up/intent`
*page*
POST
#### billing/wallet/top-up/confirm — `/api/billing/wallet/top-up/confirm`
*page*
POST
#### billing/wallet/top-up/charge — `/api/billing/wallet/top-up/charge`
*page*
POST
#### billing/admin/test-charge — `/api/billing/admin/test-charge`
*page*
POST
#### subscriptions/plans — `/api/subscriptions/plans`
*page*
GET
#### subscriptions/current — `/api/subscriptions/current`
*page*
GET
#### subscriptions/checkout — `/api/subscriptions/checkout`
*page*
POST
#### subscriptions/subscribe — `/api/subscriptions/subscribe`
*page*
POST
#### subscriptions/portal — `/api/subscriptions/portal`
*page*
POST
### Referrals & Promos
*cat*
8 endpoints
#### referrals/settings — `/api/referrals/settings`
*page*
GET · PATCH
#### referrals/me/summary — `/api/referrals/me/summary`
*page*
GET
#### referrals/me/tier1 — `/api/referrals/me/tier1`
*page*
GET
#### referrals/me/tier2 — `/api/referrals/me/tier2`
*page*
GET
#### referrals/me/payouts — `/api/referrals/me/payouts`
*page*
GET
#### admin/seller-promos — `/api/admin/seller-promos`
*page*
GET · POST
#### seller-checklist — `/api/seller-checklist`
*page*
GET · POST
#### admin/seller-checklist — `/api/admin/seller-checklist`
*page*
GET · POST
### Storefront
*cat*
2 endpoints
#### storefront/verify-domain — `/api/storefront/verify-domain`
*page*
POST
#### v1/storefront — `/api/v1/storefront`
*page*
GET · POST
### Onboarding
*cat*
1 endpoints
#### onboarding — `/api/onboarding`
*page*
GET · POST
### Support
*cat*
8 endpoints
#### support/tickets — `/api/support/tickets`
*page*
GET · POST
#### support/tickets/:id/messages — `/api/support/tickets/:id/messages`
*page*
GET · POST
#### support/tickets/:id/assistant-reply — `/api/support/tickets/:id/assistant-reply`
*page*
POST
#### support/attachments — `/api/support/attachments`
*page*
POST
#### support-tools/order-recon — `/api/support-tools/order-recon`
*page*
POST
#### admin/support/tickets — `/api/admin/support/tickets`
*page*
GET
#### admin/support/tickets/:id/messages — `/api/admin/support/tickets/:id/messages`
*page*
GET · POST
#### admin/support/tickets/:id/status — `/api/admin/support/tickets/:id/status`
*page*
POST
### Community & Notifications
*cat*
2 endpoints
#### admin/notifications — `/api/admin/notifications`
*page*
GET · POST
#### /product-comments — `/product-comments`
*page*
GET · POST
### Tours & System
*cat*
8 endpoints
#### tours/definitions — `/api/tours/definitions`
*page*
GET · POST · PUT · DELETE
#### tours/progress — `/api/tours/progress`
*page*
GET · POST
#### tours/analytics — `/api/tours/analytics`
*page*
GET · POST
#### tours/stats — `/api/tours/stats`
*page*
GET
#### maintenance — `/api/maintenance`
*page*
GET · POST
#### /health — `/health`
*page*
GET
#### admin/kits — `/api/admin/kits`
*page*
GET · POST
#### admin/legacy-migration-staging — `/api/admin/legacy-migration-staging`
*page*
GET · POST

## Related
- [[02 App & Product/Canvas Designer Route Node Map|Canvas Designer — Route Node Map]]
- [[02 App & Product/Completeful App 3.0 Architecture|Completeful App 3.0 Architecture]]
- [[02 App & Product/Completeful — Feature Build Plans|Completeful — Feature Build Plans]]
- [[02 App & Product/Community Feature — Implementation Plan|Community Feature — Implementation Plan]]
- [[02 App & Product/App Overview & Capabilities|App Overview & Capabilities]]
