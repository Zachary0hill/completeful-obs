---
title: "App Tools To Build"
type: reference
tags:
  - app
  - product
  - seo
  - pricing
  - mockups
  - automation
  - etsy
---

# App Tools To Build

This page details each tool currently in the build queue for the Completeful app. Each section describes the tool's purpose, the problem it solves for sellers, and the key functional requirements as currently understood. This is a working reference for internal product and engineering discussions.

## App Tours and AI Support

### Problem It Solves
New sellers often abandon the app during onboarding because the workflow from catalog browse to first listing is not obvious. Support volume from first-week users is high and repetitive. Sellers need contextual guidance at the moment they get stuck, not a static FAQ page.

### What It Does
- In-app guided tours triggered on first use of key screens (catalog, design editor, listings, wallet)
- Tours use a step-by-step overlay pattern that highlights UI elements and explains what to do next
- An AI-powered support layer surfaces relevant answers based on the screen the seller is currently viewing
- Sellers can ask questions in plain language and get answers grounded in Completeful's actual documentation and product catalog

### Key Requirements
- Tours must be dismissible and re-launchable from a Help menu
- AI responses must cite Completeful-specific information, not generic e-commerce advice
- Support layer should escalate to a human agent (support@completeful.com) if the AI cannot resolve the question

---

## Mockup Blank Bank

### Problem It Solves
Sellers need product blank images to build mockups and listing photos but currently have to source them from third parties or take their own photos. This slows down listing creation and leads to inconsistent presentation quality across storefronts.

### What It Does
- A curated library of clean, high-resolution product blank images available inside the app
- Organized by product category matching the Completeful catalog
- Blanks can be used as base layers in the Mockup Playground or exported directly for use in external design tools
- Updated as new products are added to the Completeful catalog

### Key Requirements
- Image library must match the actual products available in the Completeful catalog
- Images should be provided in multiple standard angles (front, back, detail) where applicable
- Access from both the catalog product detail page and the Mockup Playground

---

## Mockup Playground (Photoroom + Nano Banana Pro)

### Problem It Solves
Creating professional product mockups currently requires sellers to use Photoshop, Canva, or a separate mockup app. The friction reduces listing quality and slows time-to-market. Bringing mockup creation inside Completeful closes the loop between design and listing.

### What It Does
- Powered by Photoroom for background removal and scene composition, and Nano Banana Pro for product placement and shadow/lighting effects
- Sellers select a product blank from the Blank Bank, apply their design, adjust placement and scale, and generate a finished mockup
- Output images are export-ready for Shopify and Etsy listing use
- Mockups can be saved to the seller's asset library for reuse across listings

### Key Requirements
- Photoroom API integration for background processing
- Nano Banana Pro integration for realistic product staging
- Output resolution must meet Etsy (2000 x 2000 px minimum) and Shopify (2048 x 2048 px recommended) requirements
- Workflow must complete in under 30 seconds per mockup to keep the seller experience fast

---

## Profit Calculator

### Problem It Solves
Sellers frequently underprice products because they are calculating margins manually or not accounting for all platform fees. The profit calculator provides a fast, in-app check before listing, reducing pricing mistakes that erode margins.

### What It Does
- Input: retail price (set by seller) and selected product (with known Completeful base cost)
- Output: gross margin in dollars and as a percentage, after deducting the Completeful base cost
- Optionally accounts for Etsy, Shopify, or TikTok Shop transaction and listing fees
- Available from the product detail page and from the listing creation flow
- Suggested retail price range shown based on similar products in the catalog

### Key Requirements
- Must pull live base cost from the Completeful catalog, not a static table
- Platform fee structures for Etsy, Shopify, and TikTok Shop must be configurable as they change
- Should display a clear warning if the entered retail price produces a margin below a recommended threshold

---

## Store Health Page (Quality Analyzer)

### Problem It Solves
Sellers often do not know which of their listings are underperforming or why. Without a quality signal, they publish weak listings and leave conversion potential on the table. A health score gives them an actionable improvement path.

### What It Does
- Scans all listings on connected stores (Shopify, Etsy) and scores each one on a defined quality rubric
- Rubric dimensions include: title keyword strength, description completeness, number of listing images, presence of an infographic, pricing versus recommended margin, and whether a sample order has been placed for the product
- Produces a store-level health score and a per-listing score
- Flags specific issues with recommended actions: "Add an infographic to improve this listing," "This price is below the recommended margin floor," "Your title is missing key search terms"

### Key Requirements
- Must connect to the live listing data from each sales channel integration
- Scoring rubric must be maintained and updated as platform best practices evolve
- Recommendations must link directly to the relevant app tool (e.g., flag for missing infographic links to the Infographic Editor)
- Store health score should be visible from the app home screen as a summary widget

## Related
- [[02 App & Product/Feature Roadmap|Feature Roadmap]]
- [[02 App & Product/App Overview & Capabilities|App Overview & Capabilities]]
- [[04 Tutorials/How to create your first product with completeful|How to create your first product with completeful]]
- [[02 App & Product/Canvas Designer Route Node Map|Canvas Designer — Route Node Map]]
- [[02 App & Product/Completeful (Capp2) Route Node Map|Completeful (Capp2) — Route Node Map]]
