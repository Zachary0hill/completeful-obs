---
title: Production Funnel & Workflow
type: workflow
tags: [marketing, workflow, production, content-ops, instagram, tiktok]
---

# Production Funnel and Workflow

The bottleneck is not ideas. The library holds 240+ pieces and only a handful have shipped. This doc defines how a piece moves from idea to posted, so output becomes predictable. It wires directly to `App Short Form Content/_App Content Posting Calendar` and the `Content Month` library.

## The status pipeline
Every content file carries a `Status` field. It moves left to right, one stage at a time.

| Status | Meaning | Exit criteria (Definition of Ready for next stage) |
|---|---|---|
| Idea | Captured, not committed | Has a clear hook formula, pillar, and a single CTA |
| Planned | Slotted into a calendar week | Assigned a week and a platform set |
| Drafting | Script and caption being finalized | Passes the compliance checklist below |
| Scheduled | Filmed, edited, queued in the scheduler | Asset rendered 9:16, caption and hashtags attached |
| Published | Live | Posted, link saved, metrics tracked after 7 and 28 days |

Keep work-in-progress low. Do not let more than about 15 pieces sit in Drafting at once. A growing Idea count is fine; a growing Drafting count means filming is the blocker.

## Definition of Ready (before filming)
A piece is ready to film only when all are true:
- Hook lands in the first 125 characters and uses a formula from `Hooks & Positioning/Hook Formulas Library`.
- One CTA, in the action verb plus next step plus benefit form.
- Pillar and `funnel_stage` set. Platforms set.
- Script has the 60 second beat structure and a B-roll or screen-capture cue list.
- Compliance checklist passes.

## Definition of Done (before marking Published)
- Posted to the planned platforms (Reel triple-posts to Instagram, TikTok, YouTube Short).
- Caption pulled from the file's POSTABLE CAPTION block, hashtags capped at 5.
- Permalink saved back into the file under a `published_url` field.
- Calendar row checked off.

## Compliance checklist (gate before Scheduled)
Run against `00 Brand/AI Context/Content Do's and Don'ts`:
- No emojis, no dashes used as punctuation, no ellipses, no ALL CAPS, at most one exclamation point.
- One CTA only.
- No specific fulfillment day counts. Use fast domestic fulfillment language.
- No invented revenue or named-competitor comparisons. Seller names and figures require permission.
- Approved facts only (no minimums, Lafayette Louisiana, 228,000 sq ft, 500 to 900+ catalog, five print methods, the four integrations).

## Weekly batch-shoot system
Batch production beats daily scrambling. One filming block per week feeds the whole week.

1. Monday plan, 20 minutes. Open the calendar. Confirm the 6 slots for the week. Pull the 4 app pieces and the 2 non-app pieces. Move them to Planned.
2. Batch film, one block. Film all screen-POV app pieces in one screen-recording session. Film talking-head and product pieces in one camera session. Pull BTS from the footage library, no new shooting needed.
3. Edit and caption. Cut to the 60 second scripts. Paste captions from each file's POSTABLE CAPTION block. Move to Scheduled.
4. Schedule. Queue all 6 in the scheduler at the planned days. Mark Scheduled.
5. Friday review, 10 minutes. Confirm everything posted. Mark Published and paste permalinks.

Target throughput: 5 to 7 short-form posts per week per the Channel Plan. At 6 per week the existing library alone is over 9 months of runway before any reposting.

## Roles (solo or small team)
- Strategy and selection: pick the week's 6 from the calendar, keep the 70/20/10 mix.
- Production: film and edit the batch.
- Publish and track: schedule, post, record metrics.
If solo, do each as a fixed block on a set day rather than mixing them.

## Mix guardrails
- About 70% educational, 20% behind the scenes or culture, 10% promotional. Never exceed 20% promotional.
- App tutorials and tips count as educational. Awareness clips split into BTS or promotional by angle.
- Two of six weekly slots stay non-app to hold the balance.

## Measurement loop (close the loop)
- At 7 and 28 days after publish, record saves, shares (DM sends), comments, and reach in the file or a tracking sheet.
- Monthly, sort by saves and DM sends (the signals weighted highest in `Instagram Writing Style`). Repost or iterate the top performers. Refresh hooks on the bottom quartile.
- Feed findings back into which hook formulas and pillars to weight next month.

## Related
- [[01 Marketing/App Short Form Content/_App Content Posting Calendar|App Content Posting Calendar]]
- [[01 Marketing/Channel Plan & Posting Cadence|Channel Plan & Posting Cadence]]
- [[01 Marketing/Hooks & Positioning/Hook Formulas Library|Hook Formulas Library]]
- [[00 Brand/AI Context/Content Do's and Don'ts|Content Do's and Don'ts]]
- [[00 Brand/AI Context/Content Pillars & Categories|Content Pillars & Categories]]
- [[01 Marketing/_Marketing Hub|Marketing Hub]]
