---
title: Content Status Workflow
Status: Idea
Pillar: Education
type: workflow
tags:
  - marketing
  - automation
  - content
  - mockups
category: Educational
platforms:
  - Instagram Reel
  - Instagram Carousel
  - TikTok
funnel_stage: Consideration
audience_temp: Cold
hook_formula: Myth vs fact
---
## The Content Lifecycle at Completeful

Every piece of content moves through six stages from first idea to live post. This document defines what happens at each stage, who or what system handles it, and what triggers the transition to the next stage.

---

## Stage 1: Idea

**Entry point:** Content Idea Backlog or spontaneous capture via Idea Capture Template.
**What happens:** A topic, hook, or format concept is logged with enough context to act on it later. No copy is written yet.
**Triggers transition to Planned:** The idea is pulled into the current month's planning grid during the Week 4 planning session and assigned to a publish week.

**Tools:** Obsidian (backlog file), Notion (content board)

---

## Stage 2: Planned

**What it means:** The idea has a slot on the weekly grid. Platform, format, and target publish date are set. No draft exists.
**What happens at this stage:** The content brief is confirmed (hook direction, content pillar, CTA). If the post requires a product mockup, the mockup prompt is queued for Photoroom + Nano Banana Pro.
**Triggers transition to Outlined:** Copy structure is sketched, hooks are selected from the Hook Formulas Library, and a slide-by-slide or section-by-section skeleton exists.

**Tools:** Notion content board, Monthly Planning Template

---

## Stage 3: Outlined

**What it means:** The structure exists but finalized copy is not written.
**What happens at this stage:** For carousels, each of the 7 slides has a title or direction. For reels and TikTok, the script hook, body beats, and CTA are roughed in. For blog posts, H2 headers and key points per section are noted.
**Triggers transition to Drafted:** Full copy is written, all slides or script sections are complete, the brand rules are applied (no emojis, no dashes in finalized social copy).

**Tools:** Obsidian draft file, Writing Prompts (per-platform), GPT-4o via n8n automation

---

## Stage 4: Drafted

**What it means:** Full copy exists and is ready for human review.
**What happens at this stage:** Draft is reviewed against Completeful voice (coaching, empowering, seller-first). Brand rule compliance is checked. Visual direction is confirmed or mockup assets are attached.
**Automation touchpoint:** The n8n workflow monitoring Notion status changes detects the `Drafted` status, pulls the draft text, runs it through the brand rule checker, and flags any violations back to the Notion card as a comment before a human reviews it.
**Triggers transition to Approved:** Human sign-off confirms the copy, visuals, and CTA are correct.

**Tools:** Notion (card review), n8n (automated rule check), GPT-4o

---

## Stage 5: Approved and Scheduled

**What it means:** Content is cleared and placed into the publishing queue.
**What happens at this stage:** The finalized copy, media, and link-in-bio or UTM parameters are loaded into the scheduling tool. The publish date and time are confirmed based on the weekly grid.
**Automation touchpoint:** When the Notion card status updates to `Approved`, the n8n workflow moves the content to the scheduling queue and logs the scheduled publish time back to the Notion card.
**Triggers transition to Scheduled:** Scheduling tool confirms the post is queued.

**Tools:** n8n, scheduling tool, Notion

---

## Stage 6: Posted

**What it means:** The post is live on platform.
**What happens at this stage:** The live URL is logged to the Notion card. Initial engagement data (first 24-hour views, saves, shares, comments) is captured for performance review.
**Automation touchpoint:** The n8n workflow monitors for the publish confirmation from the scheduling tool, updates the Notion card to `Posted`, and appends the live URL and timestamp.
**Repurposing flag:** If the post performs above average or covers an evergreen topic, it is tagged `Evergreen` for inclusion in the Evergreen Idea Bank.

**Tools:** n8n, Notion, analytics dashboards

---

## Notion + n8n Automation Handoff Map

| Trigger | Action | Output |
|---|---|---|
| Status set to `Drafted` | n8n pulls draft text, runs brand rule check | Notion comment with pass/fail and violations |
| Status set to `Approved` | n8n pushes to scheduling queue | Publish time logged to Notion card |
| Post goes live | Scheduling tool webhook fires | Notion card status set to `Posted`, URL logged |
| Card tagged `Evergreen` | n8n copies summary to Evergreen Idea Bank | New row in evergreen Notion database |

---

## Who Owns What

| Stage | Primary Owner |
|---|---|
| Idea capture and planning | Marketing lead |
| Drafting | Copywriter or GPT-4o with human review |
| Visual assets | Designer or Photoroom + Nano Banana Pro |
| Brand rule review | Automated (n8n) then human sign-off |
| Scheduling | n8n automation |
| Performance review | Marketing lead |

## Related
- [[01 Marketing/Nano Banana Pro Mockup Prompts/_Mockup Prompt Overview|Mockup Prompt Overview]]
- [[01 Marketing/Content Month/_Content Month Overview|Content Month Overview]]
- [[01 Marketing/Content Month/How to Photograph Your Own POD Samples (Studio-Quality on a Phone Budget)|How to Photograph Your Own POD Samples (Studio-Quality on a Phone Budget)]]
- [[01 Marketing/Content Month/How to use Pinterest to grow your store in 2026|How to use Pinterest to grow your store in 2026]]
- [[01 Marketing/Content Month/The Ultimate POD Startup Checklist (Save This and Follow It Step by Step)|The Ultimate POD Startup Checklist (Save This and Follow It Step by Step)]]
