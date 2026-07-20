---
title: Content Month Overview
Status: Idea
type: folder-overview
tags:
  - marketing
  - content
  - instagram
  - automation
  - linkedin
---
## What This Folder Is

The Content Month folder is the operational hub for Completeful's monthly content output. Every piece of content that gets planned, drafted, and published flows through this folder. Think of it as the staging area between raw ideas (which live in Content Ideas) and the live post on any platform.

Each month gets its own subfolder — named `YYYY-MM MonthName` — containing draft files, scheduled copy, and final approved assets. The overview file (this one) and the two supporting documents (Monthly Planning Template and Content Status Workflow) stay at the root of Content Month and apply to every monthly cycle.

## Content Types Tracked Here

- Short-form reels (15-60 seconds, TikTok and Instagram Reels)
- 7-slide carousels (hook slide + 5 listicle body slides + CTA slide), used on Instagram and LinkedIn
- Static graphics and infographics
- Long-form video scripts (YouTube, posted to a dedicated script file)
- Blog post drafts (completeful.com/blog)
- X threads and standalone posts
- LinkedIn articles and native posts

## Status Tags

Every draft file carries one of the following statuses in its YAML frontmatter or in the Notion board synced to this folder.

| Status | Meaning |
|---|---|
| Planned | Topic approved, no copy written yet |
| Outlined | Structure exists, copy is not finalized |
| Drafted | Full copy written, pending review |
| Approved | Reviewed and cleared for scheduling |
| Scheduled | Loaded into the publishing queue |
| Posted | Live on platform, link logged |
| Evergreen | Posted and flagged for future repurpose |

## How Drafts Flow to Publishing

1. A topic moves from the Content Idea Backlog into the current month's subfolder with status `Planned`.
2. Copy is written against the brand rules (no emojis, no dashes in finalized social copy) and the relevant Writing Prompt for that platform.
3. The draft reaches `Drafted` status and is reviewed against Completeful voice: coaching, empowering, seller-first.
4. On approval, the post is loaded into the scheduling tool. The Notion automation built on n8n marks the card `Scheduled` and populates the publish date.
5. After the post goes live, the Notion card updates to `Posted`, the live URL is appended, and the content is evaluated for repurposing potential.

## Monthly Rhythm

| Week | Activity |
|---|---|
| Week 4 of prior month | Pull ideas from backlog, assign themes, fill weekly grid |
| Week 1 | Finalize hooks, write drafts for weeks 1-2 |
| Week 2 | Review and approve weeks 1-2, draft weeks 3-4 |
| Week 3 | Review and approve weeks 3-4, schedule all remaining posts |
| Week 4 | Monitor performance, capture learnings, seed next month |

## Naming Convention for Draft Files

`YYYY-MM-DD [Platform] [Format] [Short Title].md`

Example: `2025-08-05 IG Carousel No Order Minimums.md`

## Related
- [[01 Marketing/Writing Prompts/_Writing Prompts Overview|Writing Prompts Overview]]
- [[01 Marketing/Content Ideas/Idea Capture Template|Idea Capture Template]]
- [[01 Marketing/Cross Platform Rules|Cross Platform Rules]]
- [[01 Marketing/Nano Banana Pro Mockup Prompts/_Mockup Prompt Overview|Mockup Prompt Overview]]
- [[08 Reference/Key Links & Resources|Key Links & Resources]]
