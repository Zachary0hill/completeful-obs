---
title: Decision Log
type: log
tags:
  - automation
  - meeting
  - tiktok-shop
  - mockups
  - brand-voice
---

# Decision Log

This is a running record of significant decisions made across marketing, content, operations, automation, and strategy. Each entry captures the context, what was decided, who made the call, and the date. Log any decision that affects tooling, process, budget, brand direction, or platform strategy.

For detailed meeting context behind a decision, link to the relevant meeting notes.

---

## Format

| Field | Description |
|---|---|
| ID | Sequential number, prefix D- |
| Date | Date decision was finalized |
| Area | Marketing / Automation / Product / Operations / Brand / Platform |
| Decision | What was decided, stated clearly and specifically |
| Rationale | Why this option was chosen over alternatives |
| Owner | Who is accountable for executing or overseeing this decision |
| Status | Active / Superseded / Under Review |
| Notes | Any follow-up conditions, related decisions, or links |

---

## Log

| ID | Date | Area | Decision | Rationale | Owner | Status | Notes |
|---|---|---|---|---|---|---|---|
| D-001 | 2025-11-10 | Automation | Adopt n8n as the primary workflow automation platform over Zapier and Make | n8n offers self-hostable infrastructure, lower per-run costs at scale, and greater flexibility for multi-agent orchestration. The 10-agent Content Orchestra architecture requires conditional branching and agent handoffs that n8n handles natively. | Zach | Active | All content automation workflows are built in n8n. Zapier workflows migrated or deprecated. |
| D-002 | 2025-11-24 | Automation | Use Canva Connect API (not manual Canva) for carousel and graphic generation in the content pipeline | Manual Canva production is not scalable for a daily multi-channel publishing cadence. Canva Connect API allows the Formatter agent to programmatically generate on-brand carousels using approved templates, maintaining brand consistency without human intervention per post. | Zach | Active | Templates must use brand colors Navy #1B2A4A, Teal #1ABC9C, Accent Blue #3A7BD5 and approved typefaces. |
| D-003 | 2025-12-09 | Brand | Remove emojis and dashes from finalized social copy across all channels | Inconsistent emoji use undermined the coaching, professional tone of the Completeful brand. Post-review feedback indicated emojis reduced perceived credibility with serious Etsy and Shopify sellers. Dashes in copy were found to read as filler and reduce clarity. | Zach | Active | Hook Generator and Social Writer agent prompts updated. QC agent flags violations. |
| D-004 | 2026-01-15 | Automation | Integrate ElevenLabs for AI voiceover in Remotion video content | Testing showed that AI voiceover via ElevenLabs produced consistent, professional audio at a fraction of the time cost of recording. Enables scaling tutorial and product demo video production without dedicated recording sessions. | Zach | Active | Voice profile selected and locked. Any voice changes require a new decision entry. |
| D-005 | 2026-02-20 | Platform | Prioritize TikTok Shop as a primary integration focus for Q2 2026 marketing messaging | TikTok Shop is the fastest-growing sales channel among Completeful's target audience of POD sellers. Seller adoption is high and Completeful's existing TikTok Shop integration is an undermarketed differentiator. | Zach / Josh | Active | Channel Plan updated. Content quota for TikTok increased accordingly. |
| D-006 | 2026-03-05 | Automation | Use Nano Banana Pro as the supplemental mockup tool alongside Photoroom | Photoroom covers most apparel mockup needs but lacks certain lifestyle and flat-lay options. Nano Banana Pro fills that gap. Dual-tool setup approved and documented in the pipeline. | Zach | Active | See [[Mockup & Content Library]] for asset locations. |

---

*Add new rows at the bottom. Increment the ID. Do not delete superseded entries — update the Status field to "Superseded" and note what replaced the decision.*

## Related
- [[07 Meetings/Standing Agendas|Standing Agendas]]
- [[08 Reference/Tools & Tech Stack|Tools & Tech Stack]]
- [[07 Meetings/Team Update — CompleteFull Dev & Strategy — 2026-04-07|Team Update — CompleteFull Dev & Strategy — 2026-04-07]]
- [[00 Brand/AI Context/Master Brand Context Prompt|Master Brand Context Prompt]]
- [[07 Meetings/_Meeting Notes Template|Meeting Notes Template]]
