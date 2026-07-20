---
source: Listing-agent app.pdf
category: Listing Agent
status: backlog
created: 2026-06-09
tags: [listing-agent, core, automation]
---

# Studio Product Photos Automation Pipeline

> Raw note: "Studio Product Photos Automation — Batch of products to find the best one + list of all colors required; batch at a time, choose the best; pipeline generates studio shots for every variant; some JSON prompt for all. Pipeline auto-generates multiple angles including detail shots (helps image generation too). 1 product x7 colors x6 angles x300 products = 10,000 MF mockups. THIS IS CORE. Whole catalog generated -> all images embedded into VB + add bulk tags relating to product niche + use."

## Problem / Goal
Build the core automation pipeline that generates studio-quality product photos for every product, color, and angle across the whole catalog — the central listing-agent capability.

## Proposed Approach
- Batch generate by product, processing a batch at a time and selecting the best results.
- Drive generation from a standard JSON prompt applied across all products.
- Generate multiple angles including detail shots (which also improves downstream AI image generation).
- Scale target: ~1 product × 7 colors × 6 angles × 300 products ≈ 10,000 mockups.
- Embed all generated images into the vector DB (VB) and apply bulk tags by product niche + use.
- Feed outputs into catalog cover photos and dashboard thumbnails.

## Sub-tasks
- [ ] Define the JSON prompt schema for studio shots.
- [ ] Build batch generation + best-of selection.
- [ ] Generate all angles/colors per product.
- [ ] Embed images into the vector DB.
- [ ] Auto-apply bulk niche/use tags.
- [ ] Wire outputs to catalog covers + dashboard thumbnails.

## Open Questions
- What generation backend produces the studio shots?
- How is 'best of batch' chosen — automatic scoring or human pick?
- What is 'VB' precisely (vector database) and what's the embedding/tagging schema?

## Status
Backlog — not started.
