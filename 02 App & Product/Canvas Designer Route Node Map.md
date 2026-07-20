---
title: "Canvas Designer — Route Node Map"
type: reference
tags:
  - engineering
  - app
  - product
  - architecture
  - routes
source: imported 2026-06-09
---

# Canvas Designer — Route Node Map

Hierarchical map of the app's pages/routes and API surface, imported from the interactive node-map.

# Pages & Routes

## Canvas Designer

Print-ready design platform: order management, production, inventory, shipping, invoicing, project management, and a seller/client portal. React (CRA) frontend + Express backend on Supabase.

### Auth & Public
*cat*
Unauthenticated entry points and public-token views. Read from AppRoutes.jsx.

#### Login — `/login`
*page*
Email/password sign-in.

- Sign in
- Session start

#### Sign Up — `/signup`
*page*
New account registration.

- Registration
- Account creation

#### Forgot Password — `/forgot-password`
*page*
Request a password reset link.

- Reset request
- Email link

#### Reset Password — `/reset-password`
*page*
Set a new password from a reset link.

- Password reset

#### Maintenance — `/maintenance`
*page*
Maintenance-mode splash page.

- Downtime notice

#### Public API Docs — `/api-docs`
*page*
Public-facing API documentation.

- API reference
- Endpoint docs

#### Public SLA View — `/sla/view/:token`
*page*
Tokenized public view of a service-level agreement.

- Shared SLA
- Token access

#### Timeclock Kiosk — `/timeclock`
*page*
Shared shop-floor kiosk for clocking in/out.

- Clock in/out
- Kiosk mode
- Badge entry

### Dashboards
*cat*
Landing dashboards by role. Home redirects based on role.

#### Home — `/`
*page*
Role-based redirect to the right landing page.

- Role routing
- Redirect

#### Dashboard — `/dashboard`
*page*
Default user dashboard.

- KPI tiles
- Recent activity

#### Dashboard Admin — `/dashboard-admin`
*page*
Admin dashboard configuration and overview.

- Dashboard config
- Admin metrics

### Design Studio
*cat*
Artwork editor, mockups, design library, templates, and print prep.

#### Editor — `/editor`
*page*
Canvas design editor (Fabric.js) for print-ready artwork.

- Canvas editor
- Layers
- Text & image tools
- Print-ready export

#### Mockups — `/mockups`
*page*
Generate product mockups from designs.

- Mockup preview
- Product render

#### Design Management — `/designs`
*page*
Library of all designs with filtering and management.

- Design library
- Filtering
- Bulk actions

#### Templates — `/templates`
*page*
Design library filtered to reusable templates.

- Template gallery
- Reuse designs

#### Print Review — `/print-review`
*page*
Review queue for print files before production.

- Print QA
- Approve/reject
- Review queue

#### Print Layouts — `/print-layouts`
*page*
SKU print-layout grid (cake SKU layout editor).

- SKU grid
- Layout editor

#### Print Formats — `/print-formats`
*page*
Manage print file formats and specs.

- Format manager
- Spec presets

#### Packing Slip Designer — `/packing-slip-designer`
*page*
Design packing slip templates.

- Slip templates
- Layout designer

#### Product Onboarding — `/products/new`
*page*
Onboard a new product into the catalog.

- Product setup
- Onboarding wizard

### Orders
*cat*
Order management for staff, sellers, and clients.

#### Orders — `/orders`
*page*
Primary order management table across roles.

- Order table
- Status tracking
- Bulk actions
- Advanced search

#### My Requests — `/my-requests`
*page*
Customer-facing request list for sellers/clients.

- Request list
- Status

#### My Orders (alias) — `/my-orders`
*page*
Back-compat redirect to /orders.

- Redirect

### Production
*cat*
Production dashboard, planner, batching, stations, and KPIs. Inferred from route structure + production page set.

#### Production (admin) — `/production`
*page*
Admin production catalog and configuration view.

- Catalog config
- Production setup

#### Production System — `/production-system`
*page*
Operational production dashboard hub.

- Production overview
- Station routing

##### Production Planner — `/production/planner`
*sub*
Plan and schedule production work.

- Scheduling
- Capacity

##### Batches — `/production/batches`
*sub*
List of production batches.

- Batch list
- Status

##### Create Batch — `/production/batches/create`
*sub*
Create a new production batch.

- Batch creation

##### Batch Detail — `/production/batches/:batchId`
*sub*
Detail view for a single batch.

- Batch items
- Progress

##### Order Tagger — `/production/stations/order-tagger`
*sub*
Station tool for tagging orders.

- Order tagging
- Station UI

##### Bins — `/production/bins`
*sub*
Manage production/sortation bins.

- Bin assignment
- Sortation

##### Multi-Dept Orders — `/production/multi-dept-orders`
*sub*
Orders spanning multiple departments.

- Cross-dept routing
- Split orders

#### Production KPIs — `/kpi/production`
*page*
Production KPI dashboard.

- Throughput
- KPI charts

#### KPI Labor Mapping — `/kpi/labor-mapping`
*page*
Map labor activities to KPI categories.

- Labor mapping
- KPI config

### Inventory
*cat*
Inventory levels, alerts, snapshots, queue, and the 3D map.

#### Inventory — `/inventory`
*page*
Inventory levels by SKU/location.

- Stock levels
- Locations
- Search

#### Inventory Alerts — `/inventory-alerts`
*page*
Low-stock and threshold alerts.

- Low-stock alerts
- Thresholds

#### Inventory Snapshot — `/inventory-snapshot`
*page*
Point-in-time inventory snapshot and reorder.

- Snapshot
- Reorder planning

##### Create PO from Snapshot — `/inventory-snapshot/create-po`
*sub*
Multi-PO creation from snapshot data.

- Multi-PO
- Bulk ordering

#### Inventory Queue — `/inventory-queue`
*page*
Queue analysis for inventory processing.

- Queue analysis
- Prioritization

#### Category Ordering Rules — `/category-ordering-rules`
*page*
Rules that drive category-based ordering.

- Ordering rules
- Category config

#### Barcode Labels — `/barcode-labels`
*page*
Generate and print barcode labels.

- Barcode gen
- Label printing

#### Inventory Map (3D) — `/inventory-map`
*page*
Lazy-loaded 3D warehouse inventory map.

- 3D map
- Location visualization

### Purchasing & Suppliers
*cat*
Purchase orders (admin and client portal variants), vendor mapping, and suppliers.

#### Purchase Orders — `/purchase-orders`
*page*
PO list — admin or client view based on role.

- PO list
- Status
- Role-aware view

##### New PO — `/purchase-orders/new`
*sub*
Create a new purchase order.

- PO creation

##### PO Detail — `/purchase-orders/:id`
*sub*
View a purchase order.

- PO detail
- Line items

##### Edit PO — `/purchase-orders/:id/edit`
*sub*
Edit an existing purchase order.

- PO edit

#### Vendor Mapping — `/vendor-mapping`
*page*
Map vendors to SKUs/products.

- Vendor-SKU mapping

#### Vendor Price Breaks — `/vendor-price-breaks`
*page*
Manage tiered vendor pricing.

- Price tiers
- Break points

#### Suppliers — `/suppliers`
*page*
Supplier management directory.

- Supplier directory
- Contacts

### Receiving & Inbound
*cat*
Inbound shipment receiving for staff and seller/client portal.

#### Receiving — `/receiving`
*page*
Receive inbound shipments against POs.

- Receive items
- Status: pending/partial/received
- PO matching

#### Inbound Shipments — `/inbound-shipments`
*page*
Seller/client inbound shipment list.

- Shipment list
- Tracking

##### New Inbound Shipment — `/inbound-shipments/new`
*sub*
Create an inbound shipment.

- Shipment creation

### Shipping
*cat*
Shipping workspace, rate/rules config, timelines, packaging, and membrane ops.

#### Shipping — `/shipping`
*page*
Operational shipping workspace.

- Label creation
- Carrier selection
- Order fulfillment

#### Shipping Module — `/shipping-module`
*page*
Newer shipping module (XState-driven flow).

- Shipping flow
- Refresh
- Rate shopping

#### Shipping Rules — `/shipping-rules`
*page*
Configure shipping rules.

- Rule builder
- Carrier logic

#### Shipping Timelines — `/shipping-timelines`
*page*
Manage shipping timeline expectations.

- SLA timelines
- Transit windows

#### Packaging Rules — `/packaging-rules`
*page*
Rules for packaging selection.

- Packaging logic
- Box rules

#### Membrane Operations — `/membrane`
*page*
Membrane department operational view.

- Membrane queue
- Operator tools

#### ShipEasy (Pre-Shipments) — `/pre-shipments`
*page*
Pre-shipment staging and prep.

- Pre-ship staging
- Batch prep

### Finance & Invoicing
*cat*
AR invoicing, SLAs, 3PL storage AR, transactions, labor costs, seller invoices, and quotes.

#### Invoicing — `/invoicing`
*page*
Accounts-receivable invoicing workspace.

- Invoice list
- Date filters
- Line items
- AR reconciliation

#### SLA List — `/sla`
*page*
Service-level agreements list.

- SLA list
- Status

##### SLA Detail — `/sla/:id`
*sub*
View an SLA.

- SLA terms

##### SLA Builder — `/sla/:id/edit`
*sub*
Build/edit an SLA.

- SLA editor
- Terms config

#### 3PL Storage AR — `/3PLAR`
*page*
3PL storage accounts-receivable.

- Storage billing
- AR

#### Transactions — `/transactions`
*page*
Financial transactions ledger.

- Transaction ledger
- Filtering

#### Labor Costs — `/labor-costs`
*page*
Labor cost tracking and analysis.

- Cost tracking
- By department

##### Labor Costs History — `/labor-costs/history`
*sub*
Historical labor costs.

- History
- Trends

##### Labor Costs Settings — `/labor-costs/settings`
*sub*
Configure labor cost rules.

- Rate config

##### Department Costs — `/labor-costs/department/:departmentName`
*sub*
Labor costs for a department.

- Dept breakdown

#### Seller Invoices — `/seller/invoices`
*page*
Invoices for sellers.

- Seller billing
- Invoice list

#### Quote Calculator — `/quote`
*page*
Quote/pricing calculator.

- Pricing calc
- Quote generation

#### Quotes (alias) — `/quotes`
*page*
Alias of the quote calculator.

- Pricing calc

#### Quote Pricing Admin — `/admin/quote-pricing`
*page*
Admin config for quote pricing.

- Pricing rules
- Admin config

#### Quote Submissions — `/admin/quote-submissions`
*page*
Review submitted quotes.

- Submission review

### Returns & Requests
*cat*
Returns (staff + portal), redo/cancel requests, approvals, and feature requests.

#### Returns (portal) — `/returns`
*page*
Seller/client returns view.

- Return list
- RMA

#### Returns (admin) — `/admin/returns`
*page*
Staff returns processing.

- Return processing
- Disposition

#### Redo Requests — `/admin/redo-requests`
*page*
Manage order redo requests.

- Redo queue
- Approve/reject

#### Cancellation Requests — `/admin/cancel-requests`
*page*
Manage order cancellation requests.

- Cancel queue
- Approval

#### Approvals — `/approvals`
*page*
Centralized approvals workspace (gated).

- Approval queue
- Capability-gated

#### Feature Requests — `/feature-requests`
*page*
Internal feature request board.

- Request board
- Voting

### Project Management
*cat*
Jira-like PM module: projects, boards, sprints, backlog, roadmap, and more.

#### Projects Home — `/pm`
*page*
Project management landing.

- Project list
- Org overview

#### Project Workspace — `/pm/projects/:projectId`
*page*
Per-project workspace with many views.

- Board
- Backlog
- Sprints
- Roadmap

##### Board — `/pm/projects/:projectId/boards/:boardId`
*sub*
Kanban board.

- Kanban
- Drag & drop

##### Board Settings — `/pm/projects/:projectId/boards/:boardId/settings`
*sub*
Configure a board.

- Columns
- WIP limits

##### Flow — `/pm/projects/:projectId/flow`
*sub*
Flow/graph view of tasks.

- Task flow
- Dependencies

##### Tasks — `/pm/projects/:projectId/tasks`
*sub*
Task list.

- Task list

##### Tickets — `/pm/projects/:projectId/tickets`
*sub*
Project tickets.

- Tickets

##### Backlog — `/pm/projects/:projectId/backlog`
*sub*
Backlog grooming.

- Backlog
- Prioritization

##### Sprints — `/pm/projects/:projectId/sprints`
*sub*
Sprint list.

- Sprints

##### Sprint Detail — `/pm/projects/:projectId/sprints/:sprintId`
*sub*
Single sprint.

- Sprint board
- Burndown

##### Releases — `/pm/projects/:projectId/releases`
*sub*
Release tracking.

- Releases

##### Reports — `/pm/projects/:projectId/reports`
*sub*
Project reports.

- Velocity
- Charts

##### Roadmap — `/pm/projects/:projectId/roadmap`
*sub*
Roadmap timeline.

- Roadmap
- Timeline

##### Calendar — `/pm/projects/:projectId/calendar`
*sub*
Calendar view.

- Calendar

##### Goals — `/pm/projects/:projectId/goals`
*sub*
Project goals.

- Goals
- OKRs

##### Project Settings — `/pm/projects/:projectId/settings`
*sub*
Project configuration.

- Settings

##### Templates — `/pm/projects/:projectId/templates`
*sub*
Project templates.

- Templates

#### My Tasks — `/pm/my-tasks`
*page*
Tasks assigned to me.

- My tasks

#### My Timesheet — `/pm/my-timesheet`
*page*
Personal timesheet.

- Time logging

#### Team Focus — `/pm/team-focus`
*page*
Team focus/allocation view.

- Team load
- Focus

#### PM Notifications — `/pm/notifications`
*page*
PM notifications center.

- Notifications

#### Shared Board — `/pm/share/:token`
*page*
Public tokenized board view.

- Shared board
- Token access

#### Accept Invite — `/pm/invite`
*page*
Accept a PM invitation.

- Invite acceptance

#### PM Admin Tickets — `/pm/admin/tickets`
*page*
Admin ticket triage across projects.

- Ticket triage
- Admin

#### PM Global Settings — `/settings/pm`
*page*
Global PM configuration.

- Global config

### Support
*cat*
Support hub (tickets, messages, routing, agents), workflows, knowledge base, and customer portal. Tabs read from SupportHub.

#### Support Hub — `/support`
*page*
Agent support workspace with many tabs.

- Tickets
- Messages
- Canned Responses
- Routing
- Inbox Queue
- Agents

#### Store Authority — `/support/authority`
*page*
Manage per-store support authority.

- Authority mapping
- Permissions

#### Support Workflows — `/support-workflows`
*page*
List of support automation workflows.

- Workflow list
- Automation

##### Workflow Builder — `/support-workflows/builder/:id`
*sub*
Build a support workflow.

- Visual builder
- Triggers & actions

##### Instances — `/support-workflows/instances`
*sub*
Running workflow instances.

- Instance monitor

##### Monitor — `/support-workflows/monitor/:instanceId`
*sub*
Monitor a workflow instance.

- Run trace
- Status

##### Tasks — `/support-workflows/tasks`
*sub*
Workflow-generated tasks.

- Task queue

#### Tribal Knowledge — `/help/tribal-knowledge`
*page*
Internal knowledge base.

- KB articles
- Search

##### Tribal Knowledge Admin — `/help/tribal-knowledge/admin`
*sub*
Approve/manage KB entries.

- Approval
- Curation

#### Support Portal — `/support/portal/tickets`
*page*
Customer-facing support portal.

- Customer tickets
- Self-service

##### Portal Login — `/support/portal/login`
*sub*
Portal sign-in.

- Login

##### Portal Register — `/support/portal/register`
*sub*
Portal registration.

- Register

##### New Ticket — `/support/portal/tickets/new`
*sub*
Submit a ticket.

- Ticket form

##### Ticket Detail — `/support/portal/tickets/:id`
*sub*
View a portal ticket.

- Thread
- Replies

### Seller & Client Portal
*cat*
Seller/client self-service tools and account management. Legacy /portal/* paths redirect into main routes.

#### Seller Tools — `/seller-tools`
*page*
Seller utilities: tracking check, shipping benchmark.

- Tracking Check
- Shipping Benchmark
- Date ranges
- Cost analysis

#### Store Users — `/store-users`
*page*
Seller-admin user management.

- User list
- Roles
- Invite

#### API Keys — `/api-keys`
*page*
Manage seller/client API keys.

- Key management
- Generate/revoke

### HR & Time
*cat*
Employees, timekeeping, and scheduling. Capability-gated to HR.

#### Employees — `/employees`
*page*
Employee directory and profiles.

- Directory
- Profiles
- Badge templates

#### My Time — `/my-time`
*page*
Personal timeclock portal.

- Clock in/out
- My hours

#### Timeclock Admin — `/timeclock-admin`
*page*
Admin timeclock management.

- Punch edits
- Approvals
- Reports

#### Scheduling — `/scheduling`
*page*
Shift scheduling.

- Shift planning
- Calendar

### Admin & Platform
*cat*
Settings, users, clients, automations, workflows, operations, store health, jobs, reports, and tools.

#### Settings — `/settings`
*page*
Application settings.

- Preferences
- Menu visibility

##### Auto-Batching Settings — `/settings/auto-batching`
*sub*
Configure auto-batching.

- Batch rules

#### Users — `/users`
*page*
User administration.

- User list
- Roles
- Capabilities

#### Clients — `/clients`
*page*
Client/account management.

- Client list
- Management

#### Operations — `/operations`
*page*
Operations dashboard.

- Production metrics
- SKU breakdown
- Export

#### Store Health — `/store-health`
*page*
Store health monitoring and alerts.

- Idle stores
- Surge detection
- In vs out
- Hourly breakdown

##### Store Health Settings — `/store-health/settings`
*sub*
Configure store-health thresholds.

- Thresholds
- Alert config

#### Automations — `/automations`
*page*
Automation rules.

- Automation rules
- Triggers

#### Workflows — `/workflows`
*page*
Workflow studio (general).

- Workflow builder
- Nodes

#### Reports — `/reports`
*page*
Reporting hub.

- Report catalog
- Exports

#### Admin Tools — `/admin-tools`
*page*
Utility tools: ShipStation sync, importers, reconciliation.

- ShipStation sync
- Label import
- Reconciliation
- Bulk update

#### Jobs Orchestrator — `/admin/jobs`
*page*
Background job orchestration.

- Job runs
- Manual triggers
- Status

#### Email Notifications — `/notifications`
*page*
Email notification management.

- Notification config

#### Admin Notifications — `/admin/notifications`
*page*
Admin notification rules.

- Rules
- Channels

#### Migration — `/migration`
*page*
Data migration tooling.

- Migration runner

### Dev & Test
*cat*
Internal test/scratch pages.

#### Test Inventory — `/test-inventory`
*page*
Inventory trigger test page.

- Test harness

#### Test Page 2 — `/test-page2`
*page*
Scratch test page.

- Scratch


# API Surface

## API Routes

135 endpoints

### Auth & Users
*cat*
3 endpoints

#### auth — `/api/auth`
*page*
GET · POST · PATCH · DELETE

#### users — `/api/users`
*page*
GET · POST · PUT · DELETE

#### employee-profiles — `/api/employee-profiles`
*page*
GET · POST · PUT

### Orders
*cat*
7 endpoints

#### orders — `/api/orders`
*page*
GET · POST · PUT · PATCH

#### order-items — `/api/order-items`
*page*
GET

#### order-scans — `/api/order-scans`
*page*
GET · POST

#### order-reviews — `/api/order-reviews`
*page*
GET · POST

#### test-orders — `/api/test-orders`
*page*
POST

#### orders/expected-locations — `/api/orders/expected-locations`
*page*
POST

#### /api (orders projection / advanced search / bulk) — `/api (orders projection / advanced search / bulk)`
*page*
GET · POST

### Design & Artwork
*cat*
13 endpoints

#### templates — `/api/templates`
*page*
GET · POST · PATCH

#### designs — `/api/designs`
*page*
GET · POST · PATCH

#### fonts — `/api/fonts`
*page*
GET · POST · PUT · DELETE

#### artwork — `/api/artwork`
*page*
GET · POST

#### artwork-s3 — `/api/artwork-s3`
*page*
GET · POST · PUT · DELETE

#### images — `/api/images`
*page*
GET

#### mediamodifier — `/api/mediamodifier`
*page*
GET · POST

#### print-reviews — `/api/print-reviews`
*page*
GET · POST · PUT

#### print-layouts — `/api/print-layouts`
*page*
GET · POST · PUT · DELETE

#### cake — `/api/cake`
*page*
GET · POST · PUT · DELETE

#### jewelry — `/api/jewelry`
*page*
GET · POST

#### print-file-formats — `/api/print-file-formats`
*page*
GET · POST · PUT · DELETE

#### print-files — `/api/print-files`
*page*
GET

### AI & Automation
*cat*
8 endpoints

#### ai — `/api/ai`
*page*
POST

#### ai-filters — `/api/ai-filters`
*page*
GET · POST · PUT

#### openai — `/api/openai`
*page*
POST

#### help-agent — `/api/help-agent`
*page*
POST

#### v1 (public AI API) — `/api/v1 (public AI API)`
*page*
GET · POST

#### cursor — `/api/cursor`
*page*
GET · POST · DELETE

#### cursor-agent — `/api/cursor-agent`
*page*
POST

#### workflows — `/api/workflows`
*page*
GET · POST · PUT

### Production
*cat*
9 endpoints

#### production — `/api/production`
*page*
GET · POST · PUT · DELETE

#### batch — `/api/batch`
*page*
GET · POST · DELETE

#### bins — `/api/bins`
*page*
GET · POST

#### multi-dept-orders — `/api/multi-dept-orders`
*page*
GET · POST · PATCH

#### machines — `/api/machines`
*page*
GET · POST · PUT · DELETE

#### autobatch — `/api/autobatch`
*page*
GET · POST · DELETE

#### labels — `/api/labels`
*page*
GET · POST · DELETE

#### packaging — `/api/packaging`
*page*
GET · POST · PUT · DELETE

#### packaging-rules — `/api/packaging-rules`
*page*
GET · POST · PUT · DELETE

### Inventory
*cat*
9 endpoints

#### inventory — `/api/inventory`
*page*
GET · POST · PUT

#### inventory/movements — `/api/inventory/movements`
*page*
GET

#### inventory/closeout — `/api/inventory/closeout`
*page*
GET · POST

#### inventory/locations — `/api/inventory/locations`
*page*
GET · POST · PUT · DELETE

#### skus — `/api/skus`
*page*
GET

#### sku-mapping — `/api/sku-mapping`
*page*
GET

#### categories — `/api/categories`
*page*
GET · DELETE

#### category-rules — `/api/category-rules`
*page*
GET · POST · PUT · DELETE

#### bundles — `/api/bundles`
*page*
GET

### Purchasing & Suppliers
*cat*
4 endpoints

#### purchase-orders — `/api/purchase-orders`
*page*
GET · POST · PUT · PATCH · DELETE

#### client-portal-purchase-orders — `/api/client-portal-purchase-orders`
*page*
GET · POST

#### vendor-price-breaks — `/api/vendor-price-breaks`
*page*
GET · POST · PUT · DELETE

#### suppliers — `/api/suppliers`
*page*
GET · POST · PUT · DELETE

### Shipping
*cat*
13 endpoints

#### shipping — `/api/shipping`
*page*
GET · POST · PATCH

#### shipping/views — `/api/shipping/views`
*page*
GET · POST · PUT · DELETE

#### shipping-methods — `/api/shipping-methods`
*page*
GET · POST · PUT · DELETE

#### shipping-method-rules — `/api/shipping-method-rules`
*page*
GET · POST · PUT · DELETE

#### shipping-rules — `/api/shipping-rules`
*page*
GET · POST

#### shipping-alerts — `/api/shipping-alerts`
*page*
GET · POST · PUT · DELETE

#### shipping-timelines — `/api/shipping-timelines`
*page*
GET · POST

#### shipengine — `/api/shipengine`
*page*
GET · POST · PUT

#### veho — `/api/veho`
*page*
POST · PUT

#### veho-coverage — `/api/veho-coverage`
*page*
GET · POST · DELETE

#### pre-shipments — `/api/pre-shipments`
*page*
GET · POST · PATCH

#### membrane — `/api/membrane`
*page*
GET · POST

#### tracking-sync — `/api/tracking-sync`
*page*
GET · POST · DELETE

### ShipStation Integration
*cat*
2 endpoints

#### shipstation — `/api/shipstation`
*page*
GET · POST · PATCH

#### webhooks/v2/shipstation — `/api/webhooks/v2/shipstation`
*page*
POST

### Receiving
*cat*
2 endpoints

#### receiving — `/api/receiving`
*page*
GET · POST

#### internal-receiving — `/api/internal-receiving`
*page*
POST

### Finance & AR
*cat*
12 endpoints

#### ar — `/api/ar`
*page*
GET · POST · PATCH · DELETE

#### ar/fee-rules — `/api/ar/fee-rules`
*page*
GET · POST · PUT · DELETE

#### sla — `/api/sla`
*page*
GET · POST · PUT · DELETE

#### public/sla — `/api/public/sla`
*page*
GET · POST

#### public (AR) — `/api/public (AR)`
*page*
GET

#### extra-fees — `/api/extra-fees`
*page*
GET · POST · PUT · DELETE

#### seller-invoices — `/api/seller-invoices`
*page*
GET

#### quote — `/api/quote`
*page*
GET · POST · PUT · PATCH

#### labor-costs — `/api/labor-costs`
*page*
GET · POST · PUT

#### kpi-production — `/api/kpi-production`
*page*
GET

#### kpi-labor — `/api/kpi-labor`
*page*
GET · POST · PUT · DELETE

#### leaderboards — `/api/leaderboards`
*page*
GET

### Payments & Banking
*cat*
4 endpoints

#### stripe — `/api/stripe`
*page*
GET · POST · PATCH · DELETE

#### stripe-transactions — `/api/stripe-transactions`
*page*
GET · POST

#### plaid — `/api/plaid`
*page*
GET · POST

#### quickbooks — `/api/quickbooks`
*page*
GET · POST · PUT · DELETE

### Clients & Sellers
*cat*
6 endpoints

#### clients — `/api/clients`
*page*
GET · POST · PUT · DELETE

#### client-inventory — `/api/client-inventory`
*page*
GET · POST · PUT · PATCH · DELETE

#### seller-tools — `/api/seller-tools`
*page*
POST

#### seller-orders — `/api/seller-orders`
*page*
GET · POST

#### portal — `/api/portal`
*page*
GET · POST · PUT

#### stores — `/api/stores`
*page*
GET · POST · PUT · DELETE

### Support
*cat*
6 endpoints

#### support — `/api/support`
*page*
GET · POST · PUT · DELETE

#### support/authority — `/api/support/authority`
*page*
GET · POST · PATCH · DELETE

#### support/portal — `/api/support/portal`
*page*
GET · POST

#### support-workflows — `/api/support-workflows`
*page*
GET · POST · PUT · DELETE

#### capp — `/api/capp`
*page*
GET · POST

#### help-knowledge — `/api/help-knowledge`
*page*
GET · POST · PUT · DELETE

### Project Management
*cat*
1 endpoints

#### pm — `/api/pm`
*page*
GET · POST · PUT · DELETE

### Returns & Requests
*cat*
5 endpoints

#### returns — `/api/returns`
*page*
GET · POST · PUT

#### redo-requests — `/api/redo-requests`
*page*
GET · POST · PUT

#### cancel-requests — `/api/cancel-requests`
*page*
GET · POST · PUT

#### approval-requests — `/api/approval-requests`
*page*
GET · POST

#### feature-requests — `/api/feature-requests`
*page*
GET · POST · PUT

### HR & Time
*cat*
5 endpoints

#### timeclock/kiosk — `/api/timeclock/kiosk`
*page*
POST

#### timeclock/admin — `/api/timeclock/admin`
*page*
GET · POST · PUT · PATCH

#### scheduling — `/api/scheduling`
*page*
GET · POST · PUT · PATCH · DELETE

#### scheduling/me — `/api/scheduling/me`
*page*
GET

#### employee-badge-templates — `/api/employee-badge-templates`
*page*
GET · POST

### Notifications
*cat*
3 endpoints

#### notifications — `/api/notifications`
*page*
GET · POST · PUT

#### notification-rules — `/api/notification-rules`
*page*
GET · POST · PUT

#### announcements — `/api/announcements`
*page*
GET · POST

### Admin & Platform
*cat*
19 endpoints

#### settings — `/api/settings`
*page*
GET · POST · PUT

#### admin-tasks — `/api/admin-tasks`
*page*
GET · POST

#### admin-sidebar — `/api/admin-sidebar`
*page*
GET · PUT

#### menu-visibility — `/api/menu-visibility`
*page*
GET · PUT

#### views — `/api/views`
*page*
GET · POST · PUT · DELETE

#### store-health — `/api/store-health`
*page*
GET · PUT

#### operations — `/api/operations`
*page*
GET

#### reports — `/api/reports`
*page*
GET

#### tags — `/api/tags`
*page*
GET · POST · PUT · DELETE

#### jobs — `/api/jobs`
*page*
GET · POST · PUT

#### manual-jobs — `/api/manual-jobs`
*page*
POST

#### logging — `/api/logging`
*page*
GET · POST

#### log-ingest — `/api/log-ingest`
*page*
POST

#### products — `/api/products`
*page*
GET · POST · PATCH · DELETE

#### reconcile — `/api/reconcile`
*page*
GET · POST

#### storage — `/api/storage`
*page*
POST

#### skulabs — `/api/skulabs`
*page*
GET · POST

#### plc-proxy — `/api/plc-proxy`
*page*
GET · POST

#### legacy-import — `/api/legacy-import`
*page*
POST

### Webhooks & Integrations
*cat*
4 endpoints

#### webhooks — `/api/webhooks`
*page*
POST

#### etsy — `/api/etsy`
*page*
GET

#### maria — `/api/maria`
*page*
POST

#### proxy — `/api/proxy`
*page*
GET

## Related
- [[02 App & Product/Completeful (Capp2) Route Node Map|Completeful (Capp2) — Route Node Map]]
- [[02 App & Product/Completeful App 3.0 Architecture|Completeful App 3.0 Architecture]]
- [[02 App & Product/Completeful — Feature Build Plans|Completeful — Feature Build Plans]]
- [[02 App & Product/Community Feature — Implementation Plan|Community Feature — Implementation Plan]]
- [[02 App & Product/App Overview & Capabilities|App Overview & Capabilities]]
