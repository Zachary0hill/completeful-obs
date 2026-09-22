---
title: Tools & Tech Stack
type: reference
tags:
  - reference
  - automation
  - mockups
  - brand-voice
  - design
  - tiktok-shop
---

# Tools & Tech Stack

This document covers every tool in active use across Completeful's marketing, content, and automation operations, along with the role each plays. This is the canonical reference — if a tool is adopted or deprecated, update this file and log the decision in [[Decision Log]].

---

## Automation & Orchestration

### n8n
**Role:** Primary workflow automation platform and the backbone of the Content Orchestra.
**Usage:** All automated content pipelines run through n8n. Workflows handle agent handoffs between the ten AI agents (Conductor through Analyst), trigger logic from Notion, API calls to OpenAI, Canva, ElevenLabs, Remotion, Photoroom, and Nano Banana Pro, and the final push to social publishing endpoints.
**Why n8n:** Self-hostable, cost-effective at scale, supports complex conditional branching and multi-step agent orchestration that Zapier or Make cannot handle cleanly.

---

## AI & Language Models

### OpenAI GPT-4o
**Role:** Core language model powering all text generation in the Content Orchestra.
**Usage:** Used by the Strategy, Hook Generator, Social Writer, Long-Form Writer, QC, and Analyst agents to generate content ideas, write captions and hooks, produce long-form blog or educational content, quality-check drafts against brand voice, and analyze performance data.
**Notes:** GPT-4o is the production model. Model selection is revisited quarterly; any change requires a new [[Decision Log]] entry.

---

## Content Management & Triggers

### Notion
**Role:** Content database, editorial calendar, and pipeline trigger layer.
**Usage:** The Notion content DB holds all content briefs, status fields, and publishing metadata. Status changes in Notion (e.g., marking a brief as "Ready for Generation") fire webhooks that trigger n8n workflows. The DB also serves as the human review interface — editors approve or reject AI-generated drafts before the pipeline publishes.
**Notes:** Notion is the single source of truth for content status. All agents write back to Notion with their output and a status update.

---

## Design & Visual Production

### Canva Connect API
**Role:** Programmatic graphic generation for carousels, infographics, and branded social assets.
**Usage:** The Formatter agent calls the Canva Connect API to generate on-brand carousel slides and static graphics using approved Canva templates. Templates are locked to brand colors (Pink #ED128C, gradient #FF2B92 to #FF8433, Navy #34424E) and approved typefaces (Owners or Archivo for headlines, Inter for body). The Canva brand kit still lists Gotham and SF Pro Display and needs updating.
**Notes:** Templates are owned in the Completeful Canva account. Manual Canva is not used for pipeline content — only for one-off design work.

### Photoroom
**Role:** Primary product mockup generation tool.
**Usage:** Generates clean apparel and product mockups for content. Integrates into the pipeline to produce visual assets that accompany written social content.

### Nano Banana Pro
**Role:** Supplemental mockup tool for lifestyle and flat-lay mockup styles not covered by Photoroom.
**Usage:** Used when a content brief requires a mockup style outside of Photoroom's library. Decision to adopt documented in [[Decision Log]] D-006.

---

## Video Production

### Remotion
**Role:** Programmatic video generation for short-form and tutorial video content.
**Usage:** The Publisher agent can invoke Remotion to generate video assets from templates — used for product showcases, how-to content, and TikTok-format educational videos. Works in conjunction with ElevenLabs for voiceover.

### ElevenLabs
**Role:** AI voiceover generation for video content.
**Usage:** Provides consistent, professional-quality voiceover tracks for Remotion-generated videos. A locked voice profile is used across all content for brand consistency. Voiceover scripts are produced by the Long-Form Writer or Social Writer agents, then passed to ElevenLabs before video assembly.

---

## Knowledge Management

### Obsidian
**Role:** Internal knowledge base and operating wiki for marketing and content operations.
**Usage:** This vault. Stores brand documentation, strategy, meeting notes, templates, decision logs, reference material, and asset indexes. Obsidian is the primary reference tool for anyone working on Completeful's marketing and content — not a project management tool.
**Notes:** The vault is organized across numbered folders: 00 Brand, 01 Marketing, 02 Content, 03 Automation, 07 Meetings, 08 Reference, 99 Assets.

---

## The 10-Agent Content Orchestra

The Content Orchestra is Completeful's multi-agent AI content system, orchestrated through n8n with GPT-4o as the underlying model.

| Agent | Role |
|---|---|
| Conductor | Receives briefs from Notion, assigns tasks, coordinates handoffs between all agents |
| Strategy | Develops content angles, themes, and platform-specific approaches from briefs |
| Hook Generator | Writes opening hooks optimized for scroll-stopping on each platform |
| Social Writer | Writes short-form captions and post copy for IG, TikTok, X, and LinkedIn |
| Long-Form Writer | Produces blog posts, YouTube scripts, and educational long-form content |
| QC | Reviews all generated content for brand voice compliance, factual accuracy, and formatting rules |
| Formatter | Calls Canva Connect API and formats content for each platform's specs |
| Atomizer | Repurposes long-form content into multiple short-form pieces across channels |
| Publisher | Schedules and pushes approved content to social platforms |
| Analyst | Reviews performance data post-publish, feeds insights back to the Strategy agent |

---

*Last updated: 2026-06-09. See [[Decision Log]] for all tool adoption and deprecation decisions.*

## Related
- [[08 Reference/Key Links & Resources|Key Links & Resources]]
- [[08 Reference/Glossary (POD & Fulfillment Terms)|Glossary (POD & Fulfillment Terms)]]
- [[07 Meetings/Decision Log|Decision Log]]
- [[08 Reference/Skills/walkthrough-video-editor|walkthrough-video-editor]]
- [[08 Reference/Skills/footage-organizer-pro|footage-organizer-pro]]
