---
name: ux-friction-audit
description: >
  Autonomously explores a web app through the eyes of multiple user personas, tests
  buttons and flows, and logs every friction point — confusion, dead-ends, ambiguous
  labels, scroll glitches, hesitation moments, broken hierarchy — to a structured
  markdown report with screenshots. Use whenever the user says "audit my app's UX",
  "find friction in [url]", "test my user flow", "where do users get confused on
  [url]", "play with my app and tell me what's broken", "QA my app from a user's
  perspective", "ux audit", "usability test [url]", "explore [url] like a user", or
  provides a URL and asks for feedback on user experience. Drives the app via the
  Chrome MCP (DOM-aware), simulates 5 default personas (first-timer, non-technical,
  power user, mobile-mindset, accessibility-conscious) plus any custom personas
  supplied, and produces a severity-ranked report (blocker / confusion / nit) with
  per-persona summaries, screenshots at each problem point, and suggested fixes.
  Do NOT use for native desktop apps (this skill is web-only) or for accessibility
  conformance audits (use the design:accessibility-review skill for WCAG).
tags:
  - reference
  - content
  - getting-started
---

# UX Friction Audit

Autonomously explores a web app through multiple personas, logs friction, and produces a polish-the-UX report.

## When invoked

The user wants you to play with their app and tell them where the experience breaks down. They are not asking for a strict accessibility audit, a performance audit, or a code review — they want **felt UX feedback**: where would a real user hesitate, get lost, get annoyed, give up.

## Required setup

This skill drives the browser via the **Chrome MCP** (`mcp__Claude_in_Chrome__*` tools). Before doing anything else:

1. Confirm Chrome MCP is connected by calling `mcp__Claude_in_Chrome__list_connected_browsers`.
2. If not connected, ask the user to install the Claude in Chrome extension before continuing — do **not** fall through to computer-use (mouse-pixel clicks miss the DOM signals this skill depends on).

## Inputs to gather

Before exploring, confirm these with the user (one short message — don't grill them):

- **URL** (required) — the page to start from.
- **Auth** (optional) — credentials or a logged-in profile if the audit needs to cover post-login flows. If the user wants logged-in coverage but hasn't given credentials, ask once.
- **Personas** (optional) — defaults to all 5 below. The user may add custom ones (e.g., "a small-business owner shopping for invoicing software") or restrict to a subset.
- **Time/depth budget** (optional) — default is "thorough but bounded": ~10–15 minutes of exploration per persona, ~8–15 distinct interactions logged per persona. The user may say "quick pass" (3–5 min/persona) or "deep dive" (no cap).
- **Out-of-scope areas** (optional) — pages or actions to skip (billing, deletion, anything that mutates production data).

**Safety rail**: by default, do not submit forms that look like they create real records, send messages, charge money, or trigger external integrations. If you're unsure whether an action has side effects, stop and ask. Always prefer test/staging URLs.

## Default personas

Run these unless the user restricts the set. Each persona has a stance — read the app the way they would.

1. **First-time visitor (Alex)** — landed from a link, has 30 seconds to decide if this is worth their time. Doesn't read instructions. Looks for: what is this, what do I do, why should I care.
2. **Non-technical user (Maria)** — capable but not tech-savvy. Avoids jargon. Looks for plain-language guidance, expects hand-holding. Gets nervous at error messages.
3. **Power user (Sam)** — skips tutorials, hunts for keyboard shortcuts, opens devtools out of habit, expects bulk actions and density. Annoyed by hand-holding.
4. **Mobile-mindset user (Riley)** — even on desktop, expects thumb-sized targets, large tap zones, and content-first layouts. Notices when nav is fiddly. Resize the viewport to ~390×844 for at least part of this persona's run.
5. **Accessibility-conscious user (Jordan)** — navigates by keyboard first. Tabs through, looks for visible focus rings, reads labels carefully, expects skip-links. (This is *felt* a11y, not a WCAG audit — flag obvious issues, don't run a full conformance test.)

If the user adds a custom persona, treat it the same way: write down the persona's stance in 1–2 lines before starting their run.

## Exploration loop (per persona)

For each persona, follow this loop. **Stay in character** — the persona's stance shapes what counts as friction.

1. **Set the scene.** Navigate to the start URL. For Riley, resize the viewport. For Jordan, plan to drive by keyboard (Tab/Shift-Tab/Enter/Space/Esc/Arrow keys via `mcp__Claude_in_Chrome__shortcuts_execute` or equivalent).
2. **First impression (15 seconds of fake patience).** Take a screenshot. Read the page. Write down: what does this persona think this app is, what do they think they should do next, what catches their eye, what feels off.
3. **Pick a goal autonomously.** Based on what's visible, decide what this persona would try to do. Examples: "sign up", "find pricing", "start the main thing", "find help", "log in". Don't be exhaustive — pick the 2–3 things this persona would actually try.
4. **Pursue the goal.** For each interaction:
   - **Predict** what should happen ("I expect this CTA to take me to a sign-up form").
   - **Act.** Use `mcp__Claude_in_Chrome__find` + `left_click`/`form_input`/`navigate`/`shortcuts_execute`. Prefer DOM-aware tools over coordinate clicks.
   - **Observe.** Take a screenshot or snapshot. Compare actual vs expected.
   - **Log if friction.** Apply the signal taxonomy below. If nothing went wrong, don't log — only friction goes in the report.
5. **Probe scroll behavior.** On every long page, scroll top→bottom and back. Note any: jank, stutter, content jumps (CLS), broken sticky elements, scroll-snap surprises, infinite-scroll dead-ends, hijacked scroll, fixed elements occluding content, momentum mismatch, scroll-linked animations that don't pay off.
6. **Probe edges.** Try one or two predictable edge inputs in character: empty submit, very long text, browser back button, refresh mid-flow, opening a modal then hitting Esc, double-clicking a submit button. Log surprises.
7. **Stop conditions.** End the persona run when: (a) you've completed 2–3 goals, (b) you've hit a hard blocker you can't route around, or (c) you're at the budget. Don't pad — short and sharp beats long and watery.

Run personas **sequentially**, not in parallel — Chrome state would collide. After each persona, clear cookies/localStorage if you're starting fresh next persona, or note that state is being reused.

## Friction signal taxonomy

When something feels off, classify it as one of these. The taxonomy is the report's spine.

- **Element not findable** — couldn't locate a control the persona expected (e.g., no obvious "back", login hidden in a menu).
- **Label ambiguity** — a button or link's text/icon didn't tell the persona what it does. Note both the label and what they thought it might do.
- **Unexpected state change** — clicked something and got a different result than predicted; navigation, modals, or panels appeared/disappeared surprisingly.
- **Dead-end** — completed an action and there's no clear next step (e.g., success screen with no CTA, empty state with no path forward).
- **Error without recovery** — error appeared but no explanation, no retry, no link to help, or the form lost the user's input.
- **Slow load / perceived lag** — the persona would have given up; note the action and approx wait. Use `mcp__Claude_in_Chrome__read_network_requests` if a specific request looks slow.
- **Broken visual hierarchy** — primary action wasn't visually primary, two CTAs competed, page didn't tell the persona where to look first.
- **Scroll glitch** — jank, stutter, jumps, broken sticky/sticky-footer, hijacked scroll, snap weirdness, infinite-scroll without an end-state, momentum issues. (User explicitly called this out — be thorough here.)
- **Hesitation moment** — the persona had to stop and think for more than ~3 seconds about what to do. Even if they figured it out, log it. These are gold for polish work.
- **Persona mismatch** — the experience served a different audience than this persona (e.g., dense jargon for Maria; baby-step hand-holding for Sam).

## Severity

- **Blocker** — persona could not complete a reasonable goal. Always cite the goal that broke.
- **Confusion** — persona figured it out but it cost them multiple tries, a back-button, or a guess. Worth fixing — these are the cuts that bleed slowly.
- **Nit** — minor polish: a tooltip that's slightly wrong, a subtle alignment issue, an icon that doesn't quite match.

When in doubt, downgrade. The report is more useful with a few sharp blockers than 40 nits.

## Output

Write the report to `./ux-audit-{YYYY-MM-DD-HHmm}/report.md` (relative to the user's CWD). Save screenshots in the same folder as `screenshots/{persona}/{step}-{slug}.png`, and reference them inline with relative markdown image links.

Report structure:

```markdown
# UX Friction Audit — {app name or URL}

**Date:** {date}
**Personas run:** {list}
**Scope:** {what was covered, what was skipped}

## TL;DR
- {3–5 bullets: the things the user should fix this week}

## Blockers ({n})
For each: persona, goal that broke, where it broke, screenshot, suggested fix.

## Confusion ({n})
For each: persona, what they tried, what they expected, what happened, screenshot, suggested fix.

## Nits ({n})
Compact bullet list, screenshot links optional.

## Per-persona notes
### Alex (first-time visitor)
- 30-second impression: {…}
- Goals attempted: {…}
- Standout friction: {…}

### Maria (non-technical)
…

### Sam (power user)
…

### Riley (mobile-mindset)
…

### Jordan (accessibility-conscious)
…

## Scroll behavior
Page-by-page scroll notes — anything that wasn't smooth or expected.

## What worked well
A short section. Honest praise sharpens the critical feedback.
```

**Suggested fixes** — for each blocker and confusion item, propose one concrete fix. Examples: "Rename CTA from 'Get started' to 'Create your first project'", "Add a visible focus ring to button.primary (currently outline:none)", "On the empty dashboard, surface a 'New project' CTA above the fold."

Keep suggestions concrete and small. The user is going to polish, not redesign.

## Tone of the report

Specific, observational, not preachy. Write the way a sharp friend who happens to do UX would: "I clicked this expecting X and got Y," not "This violates Nielsen's heuristic #3." Persona-driven friction is the whole point — every finding should trace back to a persona's actual experience.

## Anti-patterns (don't do these)

- **Don't mutate production data.** No real signups, real purchases, real messages. If you can't tell whether an action is destructive, ask.
- **Don't log non-friction.** If a button worked exactly as expected, it doesn't go in the report. Only friction.
- **Don't break character.** Sam doesn't need a hand-holding tour; logging "tutorial was hard to find" for Sam is wrong. Every finding should be plausible *for that persona*.
- **Don't generalize from one persona.** "All users will be confused" — no, "Maria was confused; Sam wasn't." Persona-tagged findings are more actionable.
- **Don't run personas in parallel.** Chrome state collides; the audit gets noisy.
- **Don't skip the screenshots.** Every blocker and confusion needs a screenshot at the moment of friction. The user is going to scan visually.
- **Don't pad the report.** A short, sharp report gets read and acted on. A long one gets bookmarked and forgotten.

## Related
- [[08 Reference/Key Links & Resources|Key Links & Resources]]
- [[08 Reference/Skills/dashboard-tutorial|dashboard-tutorial]]
- [[08 Reference/Skills/footage-organizer-pro|footage-organizer-pro]]
- [[08 Reference/Skills/metadata-keyworder|metadata-keyworder]]
- [[08 Reference/Skills/remotion-kinetic-typography|remotion-kinetic-typography]]
