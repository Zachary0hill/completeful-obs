---
title: "Completeful Enhancement Tracker"
type: reference
tags:
  - product
  - app
  - enhancements
  - tracker
source: imported 2026-06-09
---

# Completeful Enhancement Tracker

## Tracker

| ID | Section | Page | Route | Type | Recommendation | Priority | Effort | Owner | Status |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | Cross-Cutting | — App-wide — | multiple | Theme | alert()/confirm()/prompt() native dialogs in 15+ places — replace with toast/modal. | P0 | M |  | Open |
| 2 | Cross-Cutting | — App-wide — | multiple | Theme | Inline style={} usage rampant on legacy/community pages — standardize. | P1 | L |  | Open |
| 3 | Cross-Cutting | — App-wide — | multiple | Theme | Loading states inconsistent (bare text vs Loader2 vs skeleton) — build <PageLoader/>, <TableLoader/>, <CardSkeleton/>. | P1 | M |  | Open |
| 4 | Cross-Cutting | — App-wide — | multiple | Theme | Error states show raw e.message — wrap with friendlier copy + retry CTAs. | P1 | M |  | Open |
| 5 | Cross-Cutting | — App-wide — | multiple | Theme | Empty states wildly inconsistent — Earnings is best-in-class, PersonalizationQueue is a single string. | P1 | M |  | Open |
| 6 | Cross-Cutting | — App-wide — | multiple | Theme | Mobile responsiveness uneven — most pages stack awkwardly on phones. | P0 | L |  | Open |
| 7 | Cross-Cutting | — App-wide — | multiple | Theme | Connection-health fragmented — token expiration hidden from sellers. | P0 | M |  | Open |
| 8 | Cross-Cutting | — App-wide — | multiple | Theme | Etsy-first bias — Earnings/admin tools Etsy-only; Shopify/TikTok sellers second-class. | P0 | L |  | Open |
| 9 | Cross-Cutting | — App-wide — | multiple | Theme | Onboarding orphaned — signup never routes to /onboarding; sidebar entry is capability-gated. | P0 | M |  | Open |
| 10 | Cross-Cutting | — App-wide — | multiple | Theme | No autosave anywhere meaningful — Editor, Listing Wizard, Kit Editor all lose work on refresh. | P0 | L |  | Open |
| 11 | Cross-Cutting | — App-wide — | multiple | Theme | Yjs collaboration scaffolding present but no provider connected — unrealized flagship feature. | P1 | XL |  | Open |
| 12 | Cross-Cutting | — App-wide — | multiple | Theme | Hardcoded rates / config / URLs (commission %, plan features, help URLs) — move to backend/config. | P1 | M |  | Open |
| 13 | Cross-Cutting | — App-wide — | multiple | Theme | Avatar absence — author identity is text-only everywhere; reusable Avatar component needed. | P1 | S |  | Open |
| 14 | Cross-Cutting | — App-wide — | multiple | Theme | MFA admin-only — sellers can't enroll TOTP/passkey. | P0 | M |  | Open |
| 15 | Cross-Cutting | — App-wide — | multiple | Theme | No "unsaved changes" beforeunload guard on editor + wizards. | P0 | S |  | Open |
| 16 | Cross-Cutting | — App-wide — | multiple | Theme | Toolbar/shortcut discoverability — LeftDockBar tooltip-only, no `?` overlay. | P1 | M |  | Open |
| 17 | Cross-Cutting | — App-wide — | multiple | Theme | AI fragmented across 5+ surfaces — unify under "AI Studio". | P2 | L |  | Open |
| 18 | Cross-Cutting | — App-wide — | multiple | Theme | No telemetry for editor friction — only GA pageviews. | P1 | M |  | Open |
| 19 | Landing & Auth | Landing Page | / | Fix | Hero CTA "Create a design" routes to auth-gated /design/new; anonymous visitors hit a redirect. Should route to /auth/signup or guest demo. | P0 | S |  | Open |
| 20 | Landing & Auth | Landing Page | / | Fix | Newsletter form has no backend; console.log only. TODO from line 30 ships to prod. | P0 | S |  | Open |
| 21 | Landing & Auth | Landing Page | / | Fix | Lorem ipsum copy in cta-description (lines 242-243) still ships. | P0 | S |  | Open |
| 22 | Landing & Auth | Landing Page | / | Fix | Footer Privacy/ToS column shows heading only — no links. Compliance gap. | P0 | S |  | Open |
| 23 | Landing & Auth | Landing Page | / | Fix | Fixed transparent header has no scrolled-state styling — contrast issues on scroll. | P1 | S |  | Open |
| 24 | Landing & Auth | Landing Page | / | Fix | Newsletter form lacks aria-label; submit arrow has no accessible name. | P1 | S |  | Open |
| 25 | Landing & Auth | Landing Page | / | Fix | Feature card buttons route to authenticated routes without sign-up wall. | P1 | S |  | Open |
| 26 | Landing & Auth | Landing Page | / | Fix | No :focus-visible on landing buttons. | P1 | S |  | Open |
| 27 | Landing & Auth | Landing Page | / | Fix | useScroll/useTransform imported but unused — dead code. | P2 | S |  | Open |
| 28 | Landing & Auth | Landing Page | / | Fix | Hero CTA button oversized (min-width 400px) dominates hero on smaller laptops. | P2 | S |  | Open |
| 29 | Landing & Auth | Landing Page | / | Polish | Rewrite hero subtitle: "The easiest design studio for print-on-demand…" | P1 | S |  | Open |
| 30 | Landing & Auth | Landing Page | / | Polish | Soft-CTA subtitle: "From blank canvas to live listing in under five minutes." | P1 | S |  | Open |
| 31 | Landing & Auth | Landing Page | / | Polish | Lock 2-accent palette per section — palette is busy across sections. | P2 | M |  | Open |
| 32 | Landing & Auth | Landing Page | / | Polish | "Privacy policy ↗" subtitle arrow looks clickable but isn't. | P1 | S |  | Open |
| 33 | Landing & Auth | Landing Page | / | Polish | Bento titles lack body copy — add one-line description per tool. | P1 | M |  | Open |
| 34 | Landing & Auth | Landing Page | / | Polish | Footer-nav blocks too large; feel like primary CTAs but go external. | P2 | M |  | Open |
| 35 | Landing & Auth | Landing Page | / | Polish | Final CTA uses Framer Motion; nothing else does — standardize micro-interactions. | P2 | S |  | Open |
| 36 | Landing & Auth | Landing Page | / | Polish | Hero "sell" word has no visual treatment despite being the accent. | P2 | S |  | Open |
| 37 | Landing & Auth | Landing Page | / | Feature | Interactive hero demo — typing prompt animates AI design onto tee mockup. | P0 | L |  | Open |
| 38 | Landing & Auth | Landing Page | / | Feature | "See a demo store" preview link — anonymous read-only storefront. | P1 | M |  | Open |
| 39 | Landing & Auth | Landing Page | / | Feature | Niche-picker quiz — tailored hero copy + onboarding seed. | P1 | L |  | Open |
| 40 | Landing & Auth | Landing Page | / | Feature | ROI/profit calculator widget. | P1 | M |  | Open |
| 41 | Landing & Auth | Landing Page | / | Feature | Social proof strip — marketplace logos, seller counts, products created. | P0 | S |  | Open |
| 42 | Landing & Auth | Landing Page | / | Feature | Embedded <15s looping video of AI design → mockup → publish. | P1 | M |  | Open |
| 43 | Landing & Auth | Landing Page | / | Feature | Customer testimonial carousel with revenue numbers. | P1 | M |  | Open |
| 44 | Landing & Auth | Landing Page | / | Feature | "Try without an account" guest editor with 5-min timer. | P1 | L |  | Open |
| 45 | Landing & Auth | Landing Page | / | Feature | Pricing teaser block ("Free to design, pay only when you sell"). | P1 | S |  | Open |
| 46 | Landing & Auth | Login Page | /auth/login | Fix | No show/hide password toggle. | P1 | S |  | Open |
| 47 | Landing & Auth | Login Page | /auth/login | Fix | Unused useEffect import (dead code). | P2 | S |  | Open |
| 48 | Landing & Auth | Login Page | /auth/login | Fix | Double navigation: navigate("/") then App.tsx redirects to /dashboard. | P1 | S |  | Open |
| 49 | Landing & Auth | Login Page | /auth/login | Fix | No returnTo support — login forgets user intent. | P0 | M |  | Open |
| 50 | Landing & Auth | Login Page | /auth/login | Fix | No MFA challenge handoff on login — aal2-required accounts dump on /dashboard unprompted. | P0 | M |  | Open |
| 51 | Landing & Auth | Login Page | /auth/login | Fix | Bespoke error mapping only covers invalid credentials; "Email not confirmed" should trigger resend-code CTA. | P0 | S |  | Open |
| 52 | Landing & Auth | Login Page | /auth/login | Fix | Email not trimmed/lowercased before submit. | P1 | S |  | Open |
| 53 | Landing & Auth | Login Page | /auth/login | Fix | Missing autoComplete="email" / "current-password". | P1 | S |  | Open |
| 54 | Landing & Auth | Login Page | /auth/login | Fix | Loading state collapses button text to "" — relies on .loading CSS class. | P1 | S |  | Open |
| 55 | Landing & Auth | Login Page | /auth/login | Fix | No CAPS LOCK warning on password field. | P2 | S |  | Open |
| 56 | Landing & Auth | Login Page | /auth/login | Fix | No rate-limit / lockout UI. | P1 | M |  | Open |
| 57 | Landing & Auth | Login Page | /auth/login | Polish | Heading "Sign In" is generic — try "Welcome back". | P2 | S |  | Open |
| 58 | Landing & Auth | Login Page | /auth/login | Polish | Inline error styles repeated across 5 auth pages — extract .alert-error. | P1 | M |  | Open |
| 59 | Landing & Auth | Login Page | /auth/login | Polish | Forgot-password link too small/gray — lift contrast + underline. | P1 | S |  | Open |
| 60 | Landing & Auth | Login Page | /auth/login | Polish | No social sign-in (Google/Apple) — expected by POD audience. | P1 | M |  | Open |
| 61 | Landing & Auth | Login Page | /auth/login | Polish | Add subtle entrance fade-up animation. | P2 | S |  | Open |
| 62 | Landing & Auth | Login Page | /auth/login | Feature | Magic-link option ("Email me a sign-in link instead") via signInWithOtp. | P0 | M |  | Open |
| 63 | Landing & Auth | Login Page | /auth/login | Feature | OAuth: Google / Apple / Etsy / Shopify. "Continue with Shopify" doubles as store connect. | P0 | L |  | Open |
| 64 | Landing & Auth | Login Page | /auth/login | Feature | Remember-me / extended session toggle. | P2 | S |  | Open |
| 65 | Landing & Auth | Login Page | /auth/login | Feature | Referrer detection (?from=etsy) for tailored welcome copy. | P2 | M |  | Open |
| 66 | Landing & Auth | Login Page | /auth/login | Feature | WebAuthn / passkey support. | P2 | L |  | Open |
| 67 | Landing & Auth | Login Page | /auth/login | Feature | Post-login: zero-listing users → /onboarding instead of /dashboard. | P1 | M |  | Open |
| 68 | Landing & Auth | Signup Page | /auth/signup | Fix | Success screen always says "An account already exists" — gaslights real new users. | P0 | S |  | Open |
| 69 | Landing & Auth | Signup Page | /auth/signup | Fix | Password min length 6 — too weak. Require 8+ with complexity hint. | P0 | S |  | Open |
| 70 | Landing & Auth | Signup Page | /auth/signup | Fix | No show-password toggle. | P1 | S |  | Open |
| 71 | Landing & Auth | Signup Page | /auth/signup | Fix | Email not trimmed/lowercased before submit. | P1 | S |  | Open |
| 72 | Landing & Auth | Signup Page | /auth/signup | Fix | Missing autoComplete attributes. | P1 | S |  | Open |
| 73 | Landing & Auth | Signup Page | /auth/signup | Fix | Role cards lack preview of what each unlocks; "(rare)" parenthetical leaks internal jargon. | P1 | S |  | Open |
| 74 | Landing & Auth | Signup Page | /auth/signup | Fix | No Terms / Privacy checkbox or text near submit — legal compliance gap. | P0 | S |  | Open |
| 75 | Landing & Auth | Signup Page | /auth/signup | Fix | No "Resend code" path on success screen. | P0 | M |  | Open |
| 76 | Landing & Auth | Signup Page | /auth/signup | Fix | signupSessionId persists indefinitely across signups / shared devices. | P2 | S |  | Open |
| 77 | Landing & Auth | Signup Page | /auth/signup | Fix | Role radio cards have role="radio" but no arrow-key navigation. | P1 | M |  | Open |
| 78 | Landing & Auth | Signup Page | /auth/signup | Polish | Heading "Create Account" → "Start designing in 30 seconds". | P2 | S |  | Open |
| 79 | Landing & Auth | Signup Page | /auth/signup | Polish | Designer description references Canva by name — replace. | P1 | S |  | Open |
| 80 | Landing & Auth | Signup Page | /auth/signup | Polish | 3PL "(rare)" parenthetical is engineer-speak — remove. | P1 | S |  | Open |
| 81 | Landing & Auth | Signup Page | /auth/signup | Polish | Show chip "Referral applied from link" when ?ref= prefills. | P1 | S |  | Open |
| 82 | Landing & Auth | Signup Page | /auth/signup | Polish | Selected card uses hardcoded HSL gradients — use design tokens. | P2 | S |  | Open |
| 83 | Landing & Auth | Signup Page | /auth/signup | Polish | Split into 2 mini steps (account → role) to reduce form anxiety. | P2 | M |  | Open |
| 84 | Landing & Auth | Signup Page | /auth/signup | Polish | Submit button "Sign Up" → "Create my account". | P2 | S |  | Open |
| 85 | Landing & Auth | Signup Page | /auth/signup | Feature | Magic-link signup as primary path. | P1 | M |  | Open |
| 86 | Landing & Auth | Signup Page | /auth/signup | Feature | OAuth: Google / Apple / Shopify. | P0 | M |  | Open |
| 87 | Landing & Auth | Signup Page | /auth/signup | Feature | Persona-tailored signup: pre-fill role from ?role= query. | P2 | S |  | Open |
| 88 | Landing & Auth | Signup Page | /auth/signup | Feature | Capture first-design idea on confirm screen so onboarding has context. | P0 | L |  | Open |
| 89 | Landing & Auth | Signup Page | /auth/signup | Feature | "Active sellers: 12,432" social proof above form. | P2 | S |  | Open |
| 90 | Landing & Auth | Signup Page | /auth/signup | Feature | Inline marketplace pre-connect: "I already sell on:" checkboxes. | P1 | M |  | Open |
| 91 | Landing & Auth | Confirm Email | /auth/confirm | Fix | No real resend-code endpoint — link routes back to /auth/signup which would duplicate. | P0 | S |  | Open |
| 92 | Landing & Auth | Confirm Email | /auth/confirm | Fix | Forces re-login after verify — should auto-sign-in. | P0 | M |  | Open |
| 93 | Landing & Auth | Confirm Email | /auth/confirm | Fix | Single text input rather than 6-box auto-advance OTP pattern. | P1 | M |  | Open |
| 94 | Landing & Auth | Confirm Email | /auth/confirm | Fix | verifyOtp runs with empty email if param missing — hard-block. | P1 | S |  | Open |
| 95 | Landing & Auth | Confirm Email | /auth/confirm | Fix | Raw Supabase error messages shown — map to human copy. | P1 | S |  | Open |
| 96 | Landing & Auth | Confirm Email | /auth/confirm | Fix | Missing autoComplete="one-time-code". | P0 | S |  | Open |
| 97 | Landing & Auth | Confirm Email | /auth/confirm | Fix | Missing inputMode="numeric". | P1 | S |  | Open |
| 98 | Landing & Auth | Confirm Email | /auth/confirm | Fix | No countdown / re-arm timer / rate-limit handling. | P1 | M |  | Open |
| 99 | Landing & Auth | Confirm Email | /auth/confirm | Fix | No "Wrong email?" link. | P1 | S |  | Open |
| 100 | Landing & Auth | Confirm Email | /auth/confirm | Polish | Success state uses emoji ✅ — replace with <CheckCircle/>. | P2 | S |  | Open |
| 101 | Landing & Auth | Confirm Email | /auth/confirm | Polish | Auto-verifying screen lacks escape hatch ("Cancel and enter code manually"). | P1 | S |  | Open |
| 102 | Landing & Auth | Confirm Email | /auth/confirm | Polish | No "Step 2 of 2" progress indicator. | P2 | S |  | Open |
| 103 | Landing & Auth | Confirm Email | /auth/confirm | Polish | 2s auto-redirect has no visible countdown. | P2 | S |  | Open |
| 104 | Landing & Auth | Confirm Email | /auth/confirm | Polish | Single-input + letterSpacing OTP visual could be Stripe-style 6 boxes. | P1 | M |  | Open |
| 105 | Landing & Auth | Confirm Email | /auth/confirm | Feature | Auto-sign-in after OTP verify. | P0 | M |  | Open |
| 106 | Landing & Auth | Confirm Email | /auth/confirm | Feature | Smart "Open your email" CTA — detect domain (gmail.com → Open Gmail). | P2 | S |  | Open |
| 107 | Landing & Auth | Confirm Email | /auth/confirm | Feature | "Verify with magic link instead" fallback. | P1 | M |  | Open |
| 108 | Landing & Auth | Confirm Email | /auth/confirm | Feature | Tell users what's next ("…then drop into AI onboarding"). | P1 | S |  | Open |
| 109 | Landing & Auth | Confirm Email | /auth/confirm | Feature | Trust signal row (SSL, no spam). | P2 | S |  | Open |
| 110 | Landing & Auth | Confirm Email | /auth/confirm | Feature | 6-box OTP with paste + auto-advance + delete-back. | P1 | M |  | Open |
| 111 | Landing & Auth | Forgot Password | /auth/forgot-password | Fix | 3s auto-redirect is aggressive — make manual. | P1 | S |  | Open |
| 112 | Landing & Auth | Forgot Password | /auth/forgot-password | Fix | Email not passed to /auth/reset-password?otp=true — user retypes. | P0 | S |  | Open |
| 113 | Landing & Auth | Forgot Password | /auth/forgot-password | Fix | Email not normalized before submit. | P1 | S |  | Open |
| 114 | Landing & Auth | Forgot Password | /auth/forgot-password | Fix | No rate-limit / cooldown messaging. | P1 | M |  | Open |
| 115 | Landing & Auth | Forgot Password | /auth/forgot-password | Fix | Success message leaks account existence (anti-enumeration gap). | P1 | S |  | Open |
| 116 | Landing & Auth | Forgot Password | /auth/forgot-password | Fix | Missing autoComplete attribute. | P2 | S |  | Open |
| 117 | Landing & Auth | Forgot Password | /auth/forgot-password | Polish | Heading "Reset Password" reused on next page — use distinct titles. | P2 | S |  | Open |
| 118 | Landing & Auth | Forgot Password | /auth/forgot-password | Polish | Trim subtitle copy. | P2 | S |  | Open |
| 119 | Landing & Auth | Forgot Password | /auth/forgot-password | Polish | Submit "Send Verification Code" → "Email me a code." | P2 | S |  | Open |
| 120 | Landing & Auth | Forgot Password | /auth/forgot-password | Polish | Countdown text-only — add progress ring. | P2 | S |  | Open |
| 121 | Landing & Auth | Forgot Password | /auth/forgot-password | Feature | Magic-link fallback ("sign in without resetting"). | P1 | M |  | Open |
| 122 | Landing & Auth | Forgot Password | /auth/forgot-password | Feature | Combined "Trouble signing in?" funnel page. | P1 | M |  | Open |
| 123 | Landing & Auth | Forgot Password | /auth/forgot-password | Feature | Detect known-seller email and offer support contact. | P2 | M |  | Open |
| 124 | Landing & Auth | Reset Password | /auth/reset-password | Fix | Password min length 6 — same weakness as signup. | P0 | S |  | Open |
| 125 | Landing & Auth | Reset Password | /auth/reset-password | Fix | Email query param not auto-filled in OTP mode — user retypes. | P0 | S |  | Open |
| 126 | Landing & Auth | Reset Password | /auth/reset-password | Fix | Forces re-login after reset — should auto-sign-in. | P0 | M |  | Open |
| 127 | Landing & Auth | Reset Password | /auth/reset-password | Fix | "Invalid or expired reset link" error set at mount but password fields still enabled. | P1 | S |  | Open |
| 128 | Landing & Auth | Reset Password | /auth/reset-password | Fix | Missing autoComplete="new-password" / "one-time-code" + inputMode="numeric". | P0 | S |  | Open |
| 129 | Landing & Auth | Reset Password | /auth/reset-password | Fix | console.debug leaks last-2 chars of OTP code. | P2 | S |  | Open |
| 130 | Landing & Auth | Reset Password | /auth/reset-password | Fix | Three-branch fallback chain is hard to follow. | P2 | M |  | Open |
| 131 | Landing & Auth | Reset Password | /auth/reset-password | Fix | No show-password toggle. | P1 | S |  | Open |
| 132 | Landing & Auth | Reset Password | /auth/reset-password | Polish | Add subtitle "You're almost there — pick a strong password." | P2 | S |  | Open |
| 133 | Landing & Auth | Reset Password | /auth/reset-password | Polish | OTP visual style differs from ConfirmEmailPage — standardize. | P1 | S |  | Open |
| 134 | Landing & Auth | Reset Password | /auth/reset-password | Polish | Visual breadcrumb (Email → Code → New password). | P2 | M |  | Open |
| 135 | Landing & Auth | Reset Password | /auth/reset-password | Feature | Inline password strength meter with concrete suggestions. | P1 | M |  | Open |
| 136 | Landing & Auth | Reset Password | /auth/reset-password | Feature | Password breach check (HIBP k-anon). | P2 | M |  | Open |
| 137 | Landing & Auth | Reset Password | /auth/reset-password | Feature | Auto-sign-in after reset. | P0 | M |  | Open |
| 138 | Landing & Auth | Reset Password | /auth/reset-password | Feature | "Generate a strong password" button. | P2 | S |  | Open |
| 139 | Landing & Auth | MFA Setup | /auth/mfa/setup | Fix | Setup URI shown as raw <code> — add Copy URI / Open-in-app affordance. | P1 | S |  | Open |
| 140 | Landing & Auth | MFA Setup | /auth/mfa/setup | Fix | Manual setup key lacks a copy button. | P1 | S |  | Open |
| 141 | Landing & Auth | MFA Setup | /auth/mfa/setup | Fix | 6-digit input lacks autoComplete="one-time-code", maxLength, auto-submit. | P1 | S |  | Open |
| 142 | Landing & Auth | MFA Setup | /auth/mfa/setup | Fix | No digit filter on inputs. | P1 | S |  | Open |
| 143 | Landing & Auth | MFA Setup | /auth/mfa/setup | Fix | No backup codes / lockout-recovery path — critical risk for admins. | P0 | L |  | Open |
| 144 | Landing & Auth | MFA Setup | /auth/mfa/setup | Fix | Cancel-pending-enrollment failures only logged — account can be stuck. | P1 | M |  | Open |
| 145 | Landing & Auth | MFA Setup | /auth/mfa/setup | Fix | Setup-success message disappears 600ms later — too fast. | P2 | S |  | Open |
| 146 | Landing & Auth | MFA Setup | /auth/mfa/setup | Fix | "Needs verification" fallback misleading on load failures. | P2 | S |  | Open |
| 147 | Landing & Auth | MFA Setup | /auth/mfa/setup | Fix | MFA admin-only — non-admins need TOTP/passkey too. | P0 | M |  | Open |
| 148 | Landing & Auth | MFA Setup | /auth/mfa/setup | Polish | Header is jargon — soften with subtitle. | P2 | S |  | Open |
| 149 | Landing & Auth | MFA Setup | /auth/mfa/setup | Polish | "aal2"/"aal1" exposed in copy — map to "Standard"/"Verified". | P1 | S |  | Open |
| 150 | Landing & Auth | MFA Setup | /auth/mfa/setup | Polish | Promote "Set up authenticator app" CTA to hero on first run. | P2 | S |  | Open |
| 151 | Landing & Auth | MFA Setup | /auth/mfa/setup | Feature | Backup codes (10 single-use) + secure download. | P0 | L |  | Open |
| 152 | Landing & Auth | MFA Setup | /auth/mfa/setup | Feature | WebAuthn / passkey alternative. | P2 | L |  | Open |
| 153 | Landing & Auth | MFA Setup | /auth/mfa/setup | Feature | "Test code now" button after enrollment. | P1 | S |  | Open |
| 154 | Landing & Auth | MFA Setup | /auth/mfa/setup | Feature | Trusted-device opt-out ("Don't ask again for 30 days"). | P2 | M |  | Open |
| 155 | Landing & Auth | MFA Setup | /auth/mfa/setup | Feature | SMS / email OTP fallback for lockout recovery. | P2 | L |  | Open |
| 156 | Landing & Auth | MFA Challenge Modal | global | Fix | No countdown timer for the 90s expiry. | P0 | S |  | Open |
| 157 | Landing & Auth | MFA Challenge Modal | global | Fix | Closing the modal abandons the original action without confirming. | P2 | S |  | Open |
| 158 | Landing & Auth | MFA Challenge Modal | global | Fix | No retry-limit handling. | P1 | M |  | Open |
| 159 | Landing & Auth | MFA Challenge Modal | global | Fix | "123456 " with trailing space fails TOTP_REGEX silently. | P2 | S |  | Open |
| 160 | Landing & Auth | MFA Challenge Modal | global | Polish | Surface action visually ("You're about to: Impersonate user@example.com"). | P1 | S |  | Open |
| 161 | Landing & Auth | MFA Challenge Modal | global | Polish | Key-icon shake on incorrect code. | P2 | S |  | Open |
| 162 | Landing & Auth | MFA Challenge Modal | global | Polish | Live countdown copy ("Expires in 1:23"). | P1 | S |  | Open |
| 163 | Landing & Auth | MFA Challenge Modal | global | Feature | Passkey alternative inline ("Use Touch ID instead"). | P2 | L |  | Open |
| 164 | Landing & Auth | Access Required | /access-required | Fix | Direct URL access (no location.state) becomes generic — redirect or richer fallback. | P1 | S |  | Open |
| 165 | Landing & Auth | Access Required | /access-required | Fix | mailto: lacks body template. | P1 | S |  | Open |
| 166 | Landing & Auth | Access Required | /access-required | Fix | Back button uses navigate(-1) — dead-ends new tabs. Add "Go to dashboard". | P0 | S |  | Open |
| 167 | Landing & Auth | Access Required | /access-required | Fix | Capability key exposed as raw <code> — internal jargon. | P2 | S |  | Open |
| 168 | Landing & Auth | Access Required | /access-required | Fix | No support chat / Intercom hook. | P1 | M |  | Open |
| 169 | Landing & Auth | Access Required | /access-required | Polish | Soften "Contact an administrator…" copy. | P1 | S |  | Open |
| 170 | Landing & Auth | Access Required | /access-required | Polish | Pair shield with user avatar. | P2 | S |  | Open |
| 171 | Landing & Auth | Access Required | /access-required | Polish | Tooltip explaining the capability gating model. | P2 | M |  | Open |
| 172 | Landing & Auth | Access Required | /access-required | Feature | In-app access-request button → admin approval queue. | P0 | L |  | Open |
| 173 | Landing & Auth | Access Required | /access-required | Feature | Show plan-upgrade CTA if gated by subscription tier. | P1 | M |  | Open |
| 174 | Landing & Auth | Access Required | /access-required | Feature | Resolve and show which team admin to contact. | P2 | M |  | Open |
| 175 | Landing & Auth | Conversational Onboarding | /onboarding | Fix | CRITICAL: Onboarding is orphaned — nothing routes new users here; sidebar entry is capability-gated. | P0 | M |  | Open |
| 176 | Landing & Auth | Conversational Onboarding | /onboarding | Fix | "Products"/"Orders" header buttons at opacity 0.5 have no onClick — placeholders. | P1 | S |  | Open |
| 177 | Landing & Auth | Conversational Onboarding | /onboarding | Fix | Typo in hero: "Desribe the product…" | P0 | S |  | Open |
| 178 | Landing & Auth | Conversational Onboarding | /onboarding | Fix | Workspace right column fixed 400px — horizontal scroll on 1280px screens; no mobile layout. | P0 | L |  | Open |
| 179 | Landing & Auth | Conversational Onboarding | /onboarding | Fix | No exit confirmation when navigating mid-stream. | P1 | S |  | Open |
| 180 | Landing & Auth | Conversational Onboarding | /onboarding | Fix | "Publish to Shopify" appears without checking marketplace connection. | P0 | M |  | Open |
| 181 | Landing & Auth | Conversational Onboarding | /onboarding | Fix | Right-panel preview has hardcoded fallbacks ($49.99 / $23 / 46%). | P1 | S |  | Open |
| 182 | Landing & Auth | Conversational Onboarding | /onboarding | Fix | Workspace background hardcoded "#0a0a0a" bypasses theming. | P1 | S |  | Open |
| 183 | Landing & Auth | Conversational Onboarding | /onboarding | Fix | dispatchActionRef.current mutated in render — stale closure risk. | P2 | S |  | Open |
| 184 | Landing & Auth | Conversational Onboarding | /onboarding | Fix | abortControllerRef shared across hooks — race risk. | P2 | M |  | Open |
| 185 | Landing & Auth | Conversational Onboarding | /onboarding | Fix | Readiness checklist may not mirror requiresSizeSelection / requiresColorSelection gating. | P1 | M |  | Open |
| 186 | Landing & Auth | Conversational Onboarding | /onboarding | Polish | Soften hero subtitle: "Tell me about the product you want to make…" | P0 | S |  | Open |
| 187 | Landing & Auth | Conversational Onboarding | /onboarding | Polish | Add 3–4 example chips below hero input for one-tap starts. | P0 | M |  | Open |
| 188 | Landing & Auth | Conversational Onboarding | /onboarding | Polish | Tooltip for "Publish Locked" explaining what's missing. | P0 | S |  | Open |
| 189 | Landing & Auth | Conversational Onboarding | /onboarding | Polish | Phase breadcrumb (intent → product → variants → publish). | P1 | M |  | Open |
| 190 | Landing & Auth | Conversational Onboarding | /onboarding | Polish | Breathing animation on Completeful AI dot pill. | P2 | S |  | Open |
| 191 | Landing & Auth | Conversational Onboarding | /onboarding | Polish | Toast/breadcrumb when history sidebar auto-collapses. | P2 | S |  | Open |
| 192 | Landing & Auth | Conversational Onboarding | /onboarding | Feature | Voice input ("Talk to design"). | P1 | L |  | Open |
| 193 | Landing & Auth | Conversational Onboarding | /onboarding | Feature | Inline mini-mockup that animates as AI proposes variants. | P1 | L |  | Open |
| 194 | Landing & Auth | Conversational Onboarding | /onboarding | Feature | "Save and continue later" with shareable resume link. | P1 | M |  | Open |
| 195 | Landing & Auth | Conversational Onboarding | /onboarding | Feature | Niche templates: "Start from a wedding favor". | P1 | L |  | Open |
| 196 | Landing & Auth | Conversational Onboarding | /onboarding | Feature | "Show me 3 alternative product ideas" chip after first response. | P1 | M |  | Open |
| 197 | Landing & Auth | Conversational Onboarding | /onboarding | Feature | AI-suggested follow-ups as side chips. | P0 | M |  | Open |
| 198 | Landing & Auth | Conversational Onboarding | /onboarding | Feature | Estimated time-to-publish indicator at top. | P2 | S |  | Open |
| 199 | Landing & Auth | Conversational Onboarding | /onboarding | Feature | Co-pilot autocomplete in input. | P2 | M |  | Open |
| 200 | Landing & Auth | Maintenance Mode | /maintenance | Fix | No ETA / status feed / estimated completion. | P0 | S |  | Open |
| 201 | Landing & Auth | Maintenance Mode | /maintenance | Fix | "Sign in" button routes to /auth/login but auth likely fails in maintenance. | P1 | S |  | Open |
| 202 | Landing & Auth | Maintenance Mode | /maintenance | Fix | No retry / refresh button. | P1 | S |  | Open |
| 203 | Landing & Auth | Maintenance Mode | /maintenance | Fix | No status-page link. | P1 | S |  | Open |
| 204 | Landing & Auth | Maintenance Mode | /maintenance | Fix | getSession() runs on mount with no loading state. | P2 | S |  | Open |
| 205 | Landing & Auth | Maintenance Mode | /maintenance | Fix | No feedback after sign-out. | P2 | S |  | Open |
| 206 | Landing & Auth | Maintenance Mode | /maintenance | Polish | Replace generic copy with specifics when known. | P1 | S |  | Open |
| 207 | Landing & Auth | Maintenance Mode | /maintenance | Polish | Email link looks plain — make button-styled CTA. | P2 | S |  | Open |
| 208 | Landing & Auth | Maintenance Mode | /maintenance | Polish | Add wrench/gear illustration. | P2 | S |  | Open |
| 209 | Landing & Auth | Maintenance Mode | /maintenance | Polish | Use design tokens, not inline hex. | P2 | S |  | Open |
| 210 | Landing & Auth | Maintenance Mode | /maintenance | Feature | Live status feed widget polling a status endpoint. | P1 | M |  | Open |
| 211 | Landing & Auth | Maintenance Mode | /maintenance | Feature | Twitter/X embed for @completeful updates. | P2 | S |  | Open |
| 212 | Landing & Auth | Maintenance Mode | /maintenance | Feature | Subscribe-for-email-when-back form. | P2 | M |  | Open |
| 213 | Landing & Auth | Maintenance Mode | /maintenance | Feature | Read-only fallback from cached dashboard (PWA-style). | P2 | L |  | Open |
| 214 | Dashboard + Editor | Dashboard | /dashboard, / | Fix | No loading state for products — empty state flashes briefly. | P0 | S |  | Open |
| 215 | Dashboard + Editor | Dashboard | /dashboard, / | Fix | .slice(-12).reverse() relies on server sort with no explicit ordering. | P1 | S |  | Open |
| 216 | Dashboard + Editor | Dashboard | /dashboard, / | Fix | console.error on load failure swallowed — no UI feedback / retry. | P1 | S |  | Open |
| 217 | Dashboard + Editor | Dashboard | /dashboard, / | Fix | "Recently Added" heading remains visible when empty. | P2 | S |  | Open |
| 218 | Dashboard + Editor | Dashboard | /dashboard, / | Fix | Tour restart wipes 3 keys but not firstDesign tour state. | P1 | S |  | Open |
| 219 | Dashboard + Editor | Dashboard | /dashboard, / | Fix | Tile click triggers fetchLinkedPrintMethods with no spinner. | P1 | S |  | Open |
| 220 | Dashboard + Editor | Dashboard | /dashboard, / | Fix | Sample overlay has no Escape-key handler. | P1 | S |  | Open |
| 221 | Dashboard + Editor | Dashboard | /dashboard, / | Fix | SellerChecklist fails silently ("Fail closed: hide on error"). | P1 | M |  | Open |
| 222 | Dashboard + Editor | Dashboard | /dashboard, / | Fix | 960px mobile breakpoint — DashNewsCarousel slot overflows on intermediate widths. | P1 | S |  | Open |
| 223 | Dashboard + Editor | Dashboard | /dashboard, / | Fix | 3PL dashboard is a coming-soon stub. | P2 | M |  | Open |
| 224 | Dashboard + Editor | Dashboard | /dashboard, / | Fix | Tour gated on products.length > 0 — zero-product users never see it. | P1 | S |  | Open |
| 225 | Dashboard + Editor | Dashboard | /dashboard, / | Polish | Hero h1 generic — personalize ("Welcome back, {first_name}"). | P2 | S |  | Open |
| 226 | Dashboard + Editor | Dashboard | /dashboard, / | Polish | Hero CTAs duplicate the action cards directly below. | P1 | S |  | Open |
| 227 | Dashboard + Editor | Dashboard | /dashboard, / | Polish | "Tour on / Tour off" pills too heavy for a low-importance control. | P2 | S |  | Open |
| 228 | Dashboard + Editor | Dashboard | /dashboard, / | Polish | No hover actions on product tiles. | P2 | S |  | Open |
| 229 | Dashboard + Editor | Dashboard | /dashboard, / | Polish | Empty-state copy uninspiring — show trending products instead. | P2 | S |  | Open |
| 230 | Dashboard + Editor | Dashboard | /dashboard, / | Polish | Carousel auto-advance ignores prefers-reduced-motion. | P1 | S |  | Open |
| 231 | Dashboard + Editor | Dashboard | /dashboard, / | Polish | Inline SVG illustrations ~80 LOC — extract to component. | P2 | M |  | Open |
| 232 | Dashboard + Editor | Dashboard | /dashboard, / | Polish | Carousel pagination dots tiny / low-contrast. | P2 | S |  | Open |
| 233 | Dashboard + Editor | Dashboard | /dashboard, / | Polish | Audit gradient-text contrast in light theme. | P1 | S |  | Open |
| 234 | Dashboard + Editor | Dashboard | /dashboard, / | Feature | Personalized stats strip ("3 designs this week · 12 products · $X earned"). | P1 | M |  | Open |
| 235 | Dashboard + Editor | Dashboard | /dashboard, / | Feature | "Continue where you left off" tile from __visitedDesignDbNames. | P1 | M |  | Open |
| 236 | Dashboard + Editor | Dashboard | /dashboard, / | Feature | Kebab menu on product tiles (Duplicate / Delete / Order Sample). | P2 | M |  | Open |
| 237 | Dashboard + Editor | Dashboard | /dashboard, / | Feature | Activity timeline widget (orders / saves / notifications). | P2 | L |  | Open |
| 238 | Dashboard + Editor | Dashboard | /dashboard, / | Feature | AI-generated daily design prompt + one-click start. | P1 | M |  | Open |
| 239 | Dashboard + Editor | Dashboard | /dashboard, / | Feature | Trending products by season/category with "Add to my store". | P2 | M |  | Open |
| 240 | Dashboard + Editor | Dashboard | /dashboard, / | Feature | Revenue/sales sparkline placeholder to upsell Premium. | P2 | M |  | Open |
| 241 | Dashboard + Editor | Dashboard | /dashboard, / | Feature | Drag-and-drop image onto dashboard to start a design. | P2 | M |  | Open |
| 242 | Dashboard + Editor | Designs List | /designs | Fix | CRITICAL: Filter chips have UI + active state but no logic — never filter results. | P0 | M |  | Open |
| 243 | Dashboard + Editor | Designs List | /designs | Fix | alert("Failed to load designs") — use showToast. | P1 | S |  | Open |
| 244 | Dashboard + Editor | Designs List | /designs | Fix | alert()/confirm() in 4+ places — replace with toast/modal. | P1 | S |  | Open |
| 245 | Dashboard + Editor | Designs List | /designs | Fix | Quick-categories print/apparel/upload route to /design/new — misleading affordance. | P0 | S |  | Open |
| 246 | Dashboard + Editor | Designs List | /designs | Fix | "upload" quick-action case not handled. | P1 | S |  | Open |
| 247 | Dashboard + Editor | Designs List | /designs | Fix | Search input lacks debounce. | P2 | S |  | Open |
| 248 | Dashboard + Editor | Designs List | /designs | Fix | Filter popover closes on outside click but not Esc. | P1 | S |  | Open |
| 249 | Dashboard + Editor | Designs List | /designs | Fix | thumbRatios state grows unbounded. | P2 | S |  | Open |
| 250 | Dashboard + Editor | Designs List | /designs | Fix | Shared design tile navigates to /catalog with no visual hint. | P1 | S |  | Open |
| 251 | Dashboard + Editor | Designs List | /designs | Fix | Usage queries fire across ALL designs — blows up at 500+. | P1 | M |  | Open |
| 252 | Dashboard + Editor | Designs List | /designs | Fix | No keyboard navigation between cards. | P2 | M |  | Open |
| 253 | Dashboard + Editor | Designs List | /designs | Fix | Sort omits "Most used" despite usage counts being computed. | P2 | S |  | Open |
| 254 | Dashboard + Editor | Designs List | /designs | Fix | Organize modal lacks tag autocomplete. | P1 | M |  | Open |
| 255 | Dashboard + Editor | Designs List | /designs | Fix | Folder card menu only has "Delete" — no "Rename". | P1 | M |  | Open |
| 256 | Dashboard + Editor | Designs List | /designs | Polish | Quick-categories: 5 of 7 do nothing — remove or wire all. | P0 | S |  | Open |
| 257 | Dashboard + Editor | Designs List | /designs | Polish | Organize modal uses 150+ LOC of inline styles. | P2 | M |  | Open |
| 258 | Dashboard + Editor | Designs List | /designs | Polish | Cards lack a star/favorite affordance. | P2 | S |  | Open |
| 259 | Dashboard + Editor | Designs List | /designs | Polish | Card thumbnails letterbox inconsistently — square+contain normalizes. | P2 | S |  | Open |
| 260 | Dashboard + Editor | Designs List | /designs | Polish | Loading is generic spinner — use skeleton cards. | P2 | S |  | Open |
| 261 | Dashboard + Editor | Designs List | /designs | Polish | Top-tab grouping confusing (Browse all / Templates / your-designs / shared). | P1 | S |  | Open |
| 262 | Dashboard + Editor | Designs List | /designs | Polish | Zero-design zero-folder page is mostly blank — preview template gallery. | P1 | M |  | Open |
| 263 | Dashboard + Editor | Designs List | /designs | Polish | Tooltip exact-timestamp on relative time labels. | P2 | S |  | Open |
| 264 | Dashboard + Editor | Designs List | /designs | Feature | Design version history — expose Yjs snapshots as a versions timeline. | P0 | L |  | Open |
| 265 | Dashboard + Editor | Designs List | /designs | Feature | Bulk operations — multi-select for tag / move / delete / share / export. | P1 | M |  | Open |
| 266 | Dashboard + Editor | Designs List | /designs | Feature | AI tag suggestion on save (vision model on thumbnail). | P1 | L |  | Open |
| 267 | Dashboard + Editor | Designs List | /designs | Feature | Smart folders ("unused in 30 days", "used in 0 products"). | P2 | M |  | Open |
| 268 | Dashboard + Editor | Designs List | /designs | Feature | Duplicate & remix on hover. | P1 | S |  | Open |
| 269 | Dashboard + Editor | Designs List | /designs | Feature | Drag a design onto a folder tile to move it. | P2 | M |  | Open |
| 270 | Dashboard + Editor | Designs List | /designs | Feature | Export collection as ZIP/PDF catalog. | P2 | L |  | Open |
| 271 | Dashboard + Editor | Designs List | /designs | Feature | Inline hover preview (larger thumb). | P2 | S |  | Open |
| 272 | Dashboard + Editor | Designs List | /designs | Feature | Recently-deleted recycle bin (30-day soft delete). | P1 | M |  | Open |
| 273 | Dashboard + Editor | Designs List | /designs | Feature | "Use design with product" inline popover picker. | P1 | M |  | Open |
| 274 | Dashboard + Editor | Design Editor (core) | /design/new, /design/:id, /design-template/:id | Fix | CRITICAL: No autosave. Yjs IndexedDB is only safety net; clearing storage = data loss. | P0 | L |  | Open |
| 275 | Dashboard + Editor | Design Editor (core) | /design/new, /design/:id, /design-template/:id | Fix | CRITICAL: No "unsaved changes" warning on navigation. | P0 | M |  | Open |
| 276 | Dashboard + Editor | Design Editor (core) | /design/new, /design/:id, /design-template/:id | Fix | alert() for editor errors — load fail, "Please create a design first", "Add to Product failed", AI gen fail. | P0 | S |  | Open |
| 277 | Dashboard + Editor | Design Editor (core) | /design/new, /design/:id, /design-template/:id | Fix | Setup-modal × button navigates to /dashboard — loses context. | P1 | S |  | Open |
| 278 | Dashboard + Editor | Design Editor (core) | /design/new, /design/:id, /design-template/:id | Fix | Mobile right panel with LayersAccordion does not collapse below 768px — overflows 380px viewport. | P0 | M |  | Open |
| 279 | Dashboard + Editor | Design Editor (core) | /design/new, /design/:id, /design-template/:id | Fix | Image upload errors swallowed inconsistently across panels. | P1 | S |  | Open |
| 280 | Dashboard + Editor | Design Editor (core) | /design/new, /design/:id, /design-template/:id | Fix | Font load failure handled with .catch(()=>{}) — silent fallback. | P1 | M |  | Open |
| 281 | Dashboard + Editor | Design Editor (core) | /design/new, /design/:id, /design-template/:id | Fix | No "Last saved" / sync status indicator anywhere in editor. | P0 | M |  | Open |
| 282 | Dashboard + Editor | Design Editor (core) | /design/new, /design/:id, /design-template/:id | Fix | Ctrl+Y advertised in Guides but not implemented. | P1 | S |  | Open |
| 283 | Dashboard + Editor | Design Editor (core) | /design/new, /design/:id, /design-template/:id | Fix | Yjs UndoManager scope only covers canvas elements, not page ops. | P1 | M |  | Open |
| 284 | Dashboard + Editor | Design Editor (core) | /design/new, /design/:id, /design-template/:id | Fix | PreviewModal 12s failsafe — timeout with no retry. | P1 | S |  | Open |
| 285 | Dashboard + Editor | Design Editor (core) | /design/new, /design/:id, /design-template/:id | Fix | Download modal Pages checkboxes show raw page ids. | P1 | S |  | Open |
| 286 | Dashboard + Editor | Design Editor (core) | /design/new, /design/:id, /design-template/:id | Fix | PDF export via pdf-lib has no progress indicator. | P1 | S |  | Open |
| 287 | Dashboard + Editor | Design Editor (core) | /design/new, /design/:id, /design-template/:id | Fix | SaveDesignModal category is single-select; /designs organize is multi-select — inconsistent. | P1 | S |  | Open |
| 288 | Dashboard + Editor | Design Editor (core) | /design/new, /design/:id, /design-template/:id | Fix | NewDesignSetupModal "From Product" tab has no pagination. | P2 | M |  | Open |
| 289 | Dashboard + Editor | Design Editor (core) | /design/new, /design/:id, /design-template/:id | Fix | LeftSecondaryPanel width jumps 280↔400 abruptly. | P2 | S |  | Open |
| 290 | Dashboard + Editor | Design Editor (core) | /design/new, /design/:id, /design-template/:id | Fix | Outside-click to close left panel can fire during a canvas drag. | P1 | M |  | Open |
| 291 | Dashboard + Editor | Design Editor (core) | /design/new, /design/:id, /design-template/:id | Fix | hideAux/hideLocations/hidePatch/hideNext/hideVariants magic booleans — refactor. | P2 | M |  | Open |
| 292 | Dashboard + Editor | Design Editor (core) | /design/new, /design/:id, /design-template/:id | Polish | LeftDockBar 10 icons are tooltip-only — labels needed for new users. | P1 | M |  | Open |
| 293 | Dashboard + Editor | Design Editor (core) | /design/new, /design/:id, /design-template/:id | Polish | No persistent Save status indicator ("saved 2 min ago" / "saving…"). | P0 | S |  | Open |
| 294 | Dashboard + Editor | Design Editor (core) | /design/new, /design/:id, /design-template/:id | Polish | No `?` keyboard-shortcuts overlay. | P1 | M |  | Open |
| 295 | Dashboard + Editor | Design Editor (core) | /design/new, /design/:id, /design-template/:id | Polish | "Mode: Mouse Wheel to enable zoom with the mouse wheel" is awkward grammar. | P2 | S |  | Open |
| 296 | Dashboard + Editor | Design Editor (core) | /design/new, /design/:id, /design-template/:id | Polish | Right panel button grid heavy uppercase + letter-spacing. | P2 | S |  | Open |
| 297 | Dashboard + Editor | Design Editor (core) | /design/new, /design/:id, /design-template/:id | Polish | AI Panel gallery requires manual Refresh after generation. | P1 | S |  | Open |
| 298 | Dashboard + Editor | Design Editor (core) | /design/new, /design/:id, /design-template/:id | Polish | Undo/Redo buttons don't disable when nothing to undo/redo. | P1 | S |  | Open |
| 299 | Dashboard + Editor | Design Editor (core) | /design/new, /design/:id, /design-template/:id | Polish | Layer fallback icon is emoji — inconsistent. | P2 | S |  | Open |
| 300 | Dashboard + Editor | Design Editor (core) | /design/new, /design/:id, /design-template/:id | Polish | drag-handle rendered as text "⋮⋮". | P2 | S |  | Open |
| 301 | Dashboard + Editor | Design Editor (core) | /design/new, /design/:id, /design-template/:id | Polish | Setup modal preset cards use hardcoded purple gradient. | P2 | S |  | Open |
| 302 | Dashboard + Editor | Design Editor (core) | /design/new, /design/:id, /design-template/:id | Polish | "View variants" CTA small/right-aligned — easy to miss. | P2 | S |  | Open |
| 303 | Dashboard + Editor | Design Editor (core) | /design/new, /design/:id, /design-template/:id | Feature | Design version history / timeline (Yjs snapshots). | P0 | L |  | Open |
| 304 | Dashboard + Editor | Design Editor (core) | /design/new, /design/:id, /design-template/:id | Feature | Live collaborative editing — Yjs already wired; needs provider. | P1 | L |  | Open |
| 305 | Dashboard + Editor | Design Editor (core) | /design/new, /design/:id, /design-template/:id | Feature | AI design suggestions / "improve this design". | P1 | L |  | Open |
| 306 | Dashboard + Editor | Design Editor (core) | /design/new, /design/:id, /design-template/:id | Feature | "Design score" feedback (contrast, text inside print area, resolution). | P1 | L |  | Open |
| 307 | Dashboard + Editor | Design Editor (core) | /design/new, /design/:id, /design-template/:id | Feature | Distribute button surfacing equalSpacing rule in MultiSelectToolbar. | P1 | M |  | Open |
| 308 | Dashboard + Editor | Design Editor (core) | /design/new, /design/:id, /design-template/:id | Feature | Brand kit — define brand colors/fonts/logos; apply via right-click. | P1 | L |  | Open |
| 309 | Dashboard + Editor | Design Editor (core) | /design/new, /design/:id, /design-template/:id | Feature | Batch design generation — promote BulkDesignsModal with CSV/JSON input. | P2 | L |  | Open |
| 310 | Dashboard + Editor | Design Editor (core) | /design/new, /design/:id, /design-template/:id | Feature | Multi-mockup carousel panel in editor (lifestyle / front / back). | P1 | M |  | Open |
| 311 | Dashboard + Editor | Design Editor (core) | /design/new, /design/:id, /design-template/:id | Feature | One-click background remover on uploaded images. | P1 | M |  | Open |
| 312 | Dashboard + Editor | Design Editor (core) | /design/new, /design/:id, /design-template/:id | Feature | Snap-to-print-area-margin toggle in BottomBar. | P1 | S |  | Open |
| 313 | Dashboard + Editor | Design Editor (core) | /design/new, /design/:id, /design-template/:id | Feature | Mobile-first quick design (touch UI). | P1 | L |  | Open |
| 314 | Dashboard + Editor | Design Editor (core) | /design/new, /design/:id, /design-template/:id | Feature | Template marketplace. | P2 | L |  | Open |
| 315 | Dashboard + Editor | ChatBot (floating) | global | Fix | No retry on network failure. | P1 | S |  | Open |
| 316 | Dashboard + Editor | ChatBot (floating) | global | Fix | Input lacks aria-label. | P2 | S |  | Open |
| 317 | Dashboard + Editor | ChatBot (floating) | global | Fix | No clear-history button. | P1 | S |  | Open |
| 318 | Dashboard + Editor | ChatBot (floating) | global | Fix | Page context sent silently — user can't tell why answers are page-specific. | P2 | S |  | Open |
| 319 | Dashboard + Editor | ChatBot (floating) | global | Fix | No streaming response — feels slow vs modern chat UX. | P1 | M |  | Open |
| 320 | Dashboard + Editor | ChatBot (floating) | global | Polish | Generic greeting — make contextual. | P2 | S |  | Open |
| 321 | Dashboard + Editor | ChatBot (floating) | global | Polish | Generic MessageCircle button — brand mark. | P2 | S |  | Open |
| 322 | Dashboard + Editor | ChatBot (floating) | global | Polish | No typing-indicator animation. | P2 | S |  | Open |
| 323 | Dashboard + Editor | ChatBot (floating) | global | Feature | In-editor design coach mode. | P1 | M |  | Open |
| 324 | Dashboard + Editor | ChatBot (floating) | global | Feature | Voice input. | P2 | M |  | Open |
| 325 | Dashboard + Editor | ChatBot (floating) | global | Feature | Quick-reply chips for common questions. | P1 | S |  | Open |
| 326 | Dashboard + Editor | ChatBot (floating) | global | Feature | Paste-screenshot upload for context. | P2 | M |  | Open |
| 327 | Dashboard + Editor | ChatBot (floating) | global | Feature | Slash commands (/help, /contact-support, /feature-request). | P2 | S |  | Open |
| 328 | Dashboard + Editor | UserNavigationSidebar | global | Fix | Hover-expand 70ms triggers accidentally when grazing the edge. | P1 | S |  | Open |
| 329 | Dashboard + Editor | UserNavigationSidebar | global | Fix | Sidebar top:60 hardcoded — assumes 60px header. | P2 | S |  | Open |
| 330 | Dashboard + Editor | UserNavigationSidebar | global | Fix | Bell badge contrast for unread > 99 needs audit. | P2 | S |  | Open |
| 331 | Dashboard + Editor | UserNavigationSidebar | global | Fix | React.cloneElement per render for icon sizing — minor perf hit. | P2 | S |  | Open |
| 332 | Dashboard + Editor | UserNavigationSidebar | global | Fix | No keyboard arrow-key navigation. | P2 | M |  | Open |
| 333 | Dashboard + Editor | UserNavigationSidebar | global | Fix | Parent group "active" state misleading — click doesn't navigate. | P2 | S |  | Open |
| 334 | Dashboard + Editor | UserNavigationSidebar | global | Polish | Refer & Earn gradient swap flickers on hover. | P2 | S |  | Open |
| 335 | Dashboard + Editor | UserNavigationSidebar | global | Polish | "Premium" hardcoded gold #D4AF37 — not theme-aware. | P2 | S |  | Open |
| 336 | Dashboard + Editor | UserNavigationSidebar | global | Polish | Native browser tooltips in collapsed mode are slow — custom popover. | P2 | S |  | Open |
| 337 | Dashboard + Editor | UserNavigationSidebar | global | Polish | Logout has no confirmation. | P1 | S |  | Open |
| 338 | Dashboard + Editor | UserNavigationSidebar | global | Feature | Pin frequently-used items. | P2 | M |  | Open |
| 339 | Dashboard + Editor | UserNavigationSidebar | global | Feature | Cmd+K command palette. | P1 | L |  | Open |
| 340 | Dashboard + Editor | UserNavigationSidebar | global | Feature | Onboarding progress badge on Dashboard nav item. | P2 | S |  | Open |
| 341 | Dashboard + Editor | UserNavigationSidebar | global | Feature | Bell hover popover with top 3 unread. | P1 | M |  | Open |
| 342 | Dashboard + Editor | Notifications | /notifications | Fix | No pagination — caps at 200. | P1 | M |  | Open |
| 343 | Dashboard + Editor | Notifications | /notifications | Fix | window.location.href for internal navigation — use React Router. | P1 | S |  | Open |
| 344 | Dashboard + Editor | Notifications | /notifications | Fix | window.dispatchEvent for cross-component refresh — use Zustand. | P2 | M |  | Open |
| 345 | Dashboard + Editor | Notifications | /notifications | Fix | No grouping (Today / This week / Earlier). | P1 | S |  | Open |
| 346 | Dashboard + Editor | Notifications | /notifications | Fix | No filter by type/channel. | P2 | S |  | Open |
| 347 | Dashboard + Editor | Notifications | /notifications | Fix | Status badge "queued"/"processing"/"sent" leaks jargon. | P1 | S |  | Open |
| 348 | Dashboard + Editor | Notifications | /notifications | Fix | n.body rendered raw — no markdown/link auto-detection. | P2 | M |  | Open |
| 349 | Dashboard + Editor | Notifications | /notifications | Fix | No real-time updates — page doesn't poll. | P1 | M |  | Open |
| 350 | Dashboard + Editor | Notifications | /notifications | Fix | Mark-all on 200 items has no progress. | P2 | S |  | Open |
| 351 | Dashboard + Editor | Notifications | /notifications | Polish | Empty state copy great — keep. | P2 | S |  | Open |
| 352 | Dashboard + Editor | Notifications | /notifications | Polish | Unread items need stronger delineation. | P2 | S |  | Open |
| 353 | Dashboard + Editor | Notifications | /notifications | Polish | No avatars/icons per notification type. | P2 | M |  | Open |
| 354 | Dashboard + Editor | Notifications | /notifications | Polish | Bell badge: no animation on new arrival. | P2 | S |  | Open |
| 355 | Dashboard + Editor | Notifications | /notifications | Feature | Notification preferences (mute by category). | P1 | M |  | Open |
| 356 | Dashboard + Editor | Notifications | /notifications | Feature | In-app push banner for critical events. | P1 | M |  | Open |
| 357 | Dashboard + Editor | Notifications | /notifications | Feature | Search notifications. | P2 | M |  | Open |
| 358 | Dashboard + Editor | Notifications | /notifications | Feature | Snooze for later. | P2 | M |  | Open |
| 359 | Dashboard + Editor | Notifications | /notifications | Feature | Email digest summary. | P2 | M |  | Open |
| 360 | Catalog · Products · Kits · Listings | Catalog | /catalog | Fix | Initial loader bare <p>Loading products…</p> — needs shimmer grid. | P1 | S |  | Open |
| 361 | Catalog · Products · Kits · Listings | Catalog | /catalog | Fix | Featured banner silently disappears when admin removes all featured. | P0 | S |  | Open |
| 362 | Catalog · Products · Kits · Listings | Catalog | /catalog | Fix | Search input has no inline clear (X). | P1 | S |  | Open |
| 363 | Catalog · Products · Kits · Listings | Catalog | /catalog | Fix | Mobile grid forced 2 columns on 360px viewports — too tight. | P1 | M |  | Open |
| 364 | Catalog · Products · Kits · Listings | Catalog | /catalog | Fix | No scroll-to-top after deep infinite-scroll. | P1 | S |  | Open |
| 365 | Catalog · Products · Kits · Listings | Catalog | /catalog | Fix | Category checkboxes don't show counts (data returned but not rendered). | P2 | S |  | Open |
| 366 | Catalog · Products · Kits · Listings | Catalog | /catalog | Fix | No applied-filters chip strip above grid. | P1 | M |  | Open |
| 367 | Catalog · Products · Kits · Listings | Catalog | /catalog | Fix | fetchCatalogProducts abort during scroll is silent. | P2 | S |  | Open |
| 368 | Catalog · Products · Kits · Listings | Catalog | /catalog | Fix | handleProductClick fails silently on print-method-fetch error. | P2 | S |  | Open |
| 369 | Catalog · Products · Kits · Listings | Catalog | /catalog | Fix | Sort dropdown labels verbose ("Sort: Catalog"). | P1 | M |  | Open |
| 370 | Catalog · Products · Kits · Listings | Catalog | /catalog | Polish | Sticky search bar pinned on mobile only. | P2 | S |  | Open |
| 371 | Catalog · Products · Kits · Listings | Catalog | /catalog | Polish | ProgressSteps crowds the title on mid widths. | P2 | S |  | Open |
| 372 | Catalog · Products · Kits · Listings | Catalog | /catalog | Polish | "Start Designing" CTA noisy on every card — entire card is clickable. | P2 | S |  | Open |
| 373 | Catalog · Products · Kits · Listings | Catalog | /catalog | Polish | Hardcoded pin colors for 6 print types — no theming abstraction. | P2 | M |  | Open |
| 374 | Catalog · Products · Kits · Listings | Catalog | /catalog | Polish | Featured carousel relationship to main grid unclear. | P2 | S |  | Open |
| 375 | Catalog · Products · Kits · Listings | Catalog | /catalog | Polish | Cap grid at 5 columns on ultra-wide monitors. | P2 | S |  | Open |
| 376 | Catalog · Products · Kits · Listings | Catalog | /catalog | Polish | "Has Mockups" filter buried in collapsed Other section. | P2 | S |  | Open |
| 377 | Catalog · Products · Kits · Listings | Catalog | /catalog | Polish | No tooltips on Featured/New status dots. | P2 | S |  | Open |
| 378 | Catalog · Products · Kits · Listings | Catalog | /catalog | Feature | AI catalog search (natural-language re-rank). | P0 | M |  | Open |
| 379 | Catalog · Products · Kits · Listings | Catalog | /catalog | Feature | Trending / Best-selling badges from store_products counts. | P1 | M |  | Open |
| 380 | Catalog · Products · Kits · Listings | Catalog | /catalog | Feature | Profit calculator overlay (price + fees + margin live). | P1 | M |  | Open |
| 381 | Catalog · Products · Kits · Listings | Catalog | /catalog | Feature | Side-by-side comparison drawer (checkbox 2-3 products). | P1 | M |  | Open |
| 382 | Catalog · Products · Kits · Listings | Catalog | /catalog | Feature | Sample order CTA inline from cards. | P2 | M |  | Open |
| 383 | Catalog · Products · Kits · Listings | Catalog | /catalog | Feature | Catalog favorites / saved searches. | P2 | L |  | Open |
| 384 | Catalog · Products · Kits · Listings | Catalog | /catalog | Feature | "Pro mockups" badge for products with >10 mockups. | P1 | S |  | Open |
| 385 | Catalog · Products · Kits · Listings | Catalog | /catalog | Feature | "Personalizable" tag for Etsy personalization-eligible products. | P2 | M |  | Open |
| 386 | Catalog · Products · Kits · Listings | My Products | /products | Fix | Default filter is "active" — drafts hidden on first load. Default to "all". | P0 | S |  | Open |
| 387 | Catalog · Products · Kits · Listings | My Products | /products | Fix | No bulk selection / bulk actions. | P0 | M |  | Open |
| 388 | Catalog · Products · Kits · Listings | My Products | /products | Fix | Delete uses confirm(); duplicate error uses alert(). | P1 | S |  | Open |
| 389 | Catalog · Products · Kits · Listings | My Products | /products | Fix | Loading is full-page spinner — needs per-card skeleton. | P1 | S |  | Open |
| 390 | Catalog · Products · Kits · Listings | My Products | /products | Fix | loadMarketplaceListings fires on every products change — extra roundtrip. | P1 | M |  | Open |
| 391 | Catalog · Products · Kits · Listings | My Products | /products | Fix | No pagination for 200+ products. | P1 | S |  | Open |
| 392 | Catalog · Products · Kits · Listings | My Products | /products | Fix | "Not listed" pill same visual weight as marketplace pills. | P1 | S |  | Open |
| 393 | Catalog · Products · Kits · Listings | My Products | /products | Fix | No "Publish to marketplace" CTA on card itself. | P0 | M |  | Open |
| 394 | Catalog · Products · Kits · Listings | My Products | /products | Fix | Kit detection alert() for non-admins — replace with modal + waitlist. | P2 | S |  | Open |
| 395 | Catalog · Products · Kits · Listings | My Products | /products | Fix | Duplicate immediately navigates to /listing/{id}/edit — disorienting. | P1 | S |  | Open |
| 396 | Catalog · Products · Kits · Listings | My Products | /products | Fix | Status is binary active/draft — no "needs cost approval" / "pending". | P1 | M |  | Open |
| 397 | Catalog · Products · Kits · Listings | My Products | /products | Polish | Marketplace tab counts lag visible cards briefly. | P2 | S |  | Open |
| 398 | Catalog · Products · Kits · Listings | My Products | /products | Polish | "New Order" modal duplicates card-rendering logic. | P2 | M |  | Open |
| 399 | Catalog · Products · Kits · Listings | My Products | /products | Polish | Variant picker modal lacks breadcrumb back to products. | P2 | S |  | Open |
| 400 | Catalog · Products · Kits · Listings | My Products | /products | Polish | Card border-radius / shadow inconsistent with catalog ProductCard. | P2 | S |  | Open |
| 401 | Catalog · Products · Kits · Listings | My Products | /products | Polish | Empty-state hero only shows when ALL filters clear AND zero products. | P2 | S |  | Open |
| 402 | Catalog · Products · Kits · Listings | My Products | /products | Polish | No "last updated" timestamp on cards. | P2 | S |  | Open |
| 403 | Catalog · Products · Kits · Listings | My Products | /products | Polish | Inline SVG marketplace icons — extract to components. | P2 | S |  | Open |
| 404 | Catalog · Products · Kits · Listings | My Products | /products | Polish | "Untitled Product" common after duplication — banner urging rename. | P2 | S |  | Open |
| 405 | Catalog · Products · Kits · Listings | My Products | /products | Feature | Bulk publish to marketplaces. | P0 | M |  | Open |
| 406 | Catalog · Products · Kits · Listings | My Products | /products | Feature | Listing health score per card. | P1 | M |  | Open |
| 407 | Catalog · Products · Kits · Listings | My Products | /products | Feature | Product analytics drawer (clicks / conv / views by marketplace). | P1 | L |  | Open |
| 408 | Catalog · Products · Kits · Listings | My Products | /products | Feature | Smart drafts queue surfacing partially listed products. | P2 | M |  | Open |
| 409 | Catalog · Products · Kits · Listings | My Products | /products | Feature | Duplicate with variants (fan out into sizes). | P1 | M |  | Open |
| 410 | Catalog · Products · Kits · Listings | My Products | /products | Feature | "Use this design on another product" inline. | P2 | M |  | Open |
| 411 | Catalog · Products · Kits · Listings | My Products | /products | Feature | Quick price-edit inline. | P1 | S |  | Open |
| 412 | Catalog · Products · Kits · Listings | My Products | /products | Feature | Sort by sales velocity once data wired. | P2 | M |  | Open |
| 413 | Catalog · Products · Kits · Listings | Product Success | /products/:id/success | Fix | Hardcoded colors/borders bypass design tokens. | P1 | S |  | Open |
| 414 | Catalog · Products · Kits · Listings | Product Success | /products/:id/success | Fix | No preview of the created product. | P1 | S |  | Open |
| 415 | Catalog · Products · Kits · Listings | Product Success | /products/:id/success | Fix | No marketplace shortcut ("List on Etsy now"). | P1 | S |  | Open |
| 416 | Catalog · Products · Kits · Listings | Product Success | /products/:id/success | Fix | 100vh fixed wastes desktop screen. | P2 | S |  | Open |
| 417 | Catalog · Products · Kits · Listings | Product Success | /products/:id/success | Fix | "Create another product" tertiary CTA missing. | P1 | S |  | Open |
| 418 | Catalog · Products · Kits · Listings | Product Success | /products/:id/success | Fix | No celebratory animation / confetti. | P1 | S |  | Open |
| 419 | Catalog · Products · Kits · Listings | Product Success | /products/:id/success | Fix | "Product Created" feels like system status, not celebration. | P2 | S |  | Open |
| 420 | Catalog · Products · Kits · Listings | Product Success | /products/:id/success | Fix | Missing id param guard. | P1 | S |  | Open |
| 421 | Catalog · Products · Kits · Listings | Product Success | /products/:id/success | Polish | Use gradient-text h1 to match catalog/products. | P2 | S |  | Open |
| 422 | Catalog · Products · Kits · Listings | Product Success | /products/:id/success | Polish | "What's next?" task checklist. | P2 | S |  | Open |
| 423 | Catalog · Products · Kits · Listings | Product Success | /products/:id/success | Polish | Responsive padding adjustments. | P2 | S |  | Open |
| 424 | Catalog · Products · Kits · Listings | Product Success | /products/:id/success | Polish | Share / copy-link if products shareable. | P2 | S |  | Open |
| 425 | Catalog · Products · Kits · Listings | Product Success | /products/:id/success | Feature | Next-best-action chooser ("Most sellers list on Etsy first"). | P1 | S |  | Open |
| 426 | Catalog · Products · Kits · Listings | Product Success | /products/:id/success | Feature | AI description preview here. | P2 | M |  | Open |
| 427 | Catalog · Products · Kits · Listings | Product Success | /products/:id/success | Feature | Bulk variant generator from base SKU. | P2 | M |  | Open |
| 428 | Catalog · Products · Kits · Listings | Product Success | /products/:id/success | Feature | Photo upload prompt. | P2 | S |  | Open |
| 429 | Catalog · Products · Kits · Listings | Product Success | /products/:id/success | Feature | Share to team. | P2 | S |  | Open |
| 430 | Catalog · Products · Kits · Listings | Kits (admin beta) | /kits | Fix | Page does NOT enforce admin gating in render — only shows the banner copy. | P0 | S |  | Open |
| 431 | Catalog · Products · Kits · Listings | Kits (admin beta) | /kits | Fix | Empty state is "No kits yet." — no illustration, CTA, or explanation. | P1 | S |  | Open |
| 432 | Catalog · Products · Kits · Listings | Kits (admin beta) | /kits | Fix | No search / filter / sort. | P1 | S |  | Open |
| 433 | Catalog · Products · Kits · Listings | Kits (admin beta) | /kits | Fix | Inline styles everywhere. | P1 | M |  | Open |
| 434 | Catalog · Products · Kits · Listings | Kits (admin beta) | /kits | Fix | Refresh function exists but no refresh button. | P1 | S |  | Open |
| 435 | Catalog · Products · Kits · Listings | Kits (admin beta) | /kits | Fix | Errors render as red text below title — no toast. | P1 | S |  | Open |
| 436 | Catalog · Products · Kits · Listings | Kits (admin beta) | /kits | Fix | toLocaleString() — use relative time. | P2 | S |  | Open |
| 437 | Catalog · Products · Kits · Listings | Kits (admin beta) | /kits | Fix | No bulk delete / duplicate. | P2 | S |  | Open |
| 438 | Catalog · Products · Kits · Listings | Kits (admin beta) | /kits | Polish | Header lacks gradient-text / page-container class. | P2 | S |  | Open |
| 439 | Catalog · Products · Kits · Listings | Kits (admin beta) | /kits | Polish | Table columns not sortable. | P2 | S |  | Open |
| 440 | Catalog · Products · Kits · Listings | Kits (admin beta) | /kits | Polish | No way to mark a kit inactive from the list. | P2 | S |  | Open |
| 441 | Catalog · Products · Kits · Listings | Kits (admin beta) | /kits | Polish | No kit-ID disambiguation when titles share. | P2 | S |  | Open |
| 442 | Catalog · Products · Kits · Listings | Kits (admin beta) | /kits | Feature | Kit preview canvas. | P1 | L |  | Open |
| 443 | Catalog · Products · Kits · Listings | Kits (admin beta) | /kits | Feature | Slot templates library ("Coffee bundle" preset). | P1 | M |  | Open |
| 444 | Catalog · Products · Kits · Listings | Kits (admin beta) | /kits | Feature | Bulk variant pricing rules. | P2 | M |  | Open |
| 445 | Catalog · Products · Kits · Listings | Kits (admin beta) | /kits | Feature | Kit analytics — which combos sell. | P2 | L |  | Open |
| 446 | Catalog · Products · Kits · Listings | Kits (admin beta) | /kits | Feature | Validation gates before publish. | P1 | M |  | Open |
| 447 | Catalog · Products · Kits · Listings | Kit Editor (admin beta) | /kits/:kitStoreProductId | Fix | Raw taxonomy_id input — sellers don't know Etsy IDs. | P0 | M |  | Open |
| 448 | Catalog · Products · Kits · Listings | Kit Editor (admin beta) | /kits/:kitStoreProductId | Fix | No autosave — tab switch loses unsaved title/description. | P0 | S |  | Open |
| 449 | Catalog · Products · Kits · Listings | Kit Editor (admin beta) | /kits/:kitStoreProductId | Fix | prompt("Rename slot") native dialog. | P1 | S |  | Open |
| 450 | Catalog · Products · Kits · Listings | Kit Editor (admin beta) | /kits/:kitStoreProductId | Fix | Slot min/max unvalidated — min can exceed max transiently. | P1 | M |  | Open |
| 451 | Catalog · Products · Kits · Listings | Kit Editor (admin beta) | /kits/:kitStoreProductId | Fix | Variant SKU preview is comma-separated text. | P1 | S |  | Open |
| 452 | Catalog · Products · Kits · Listings | Kit Editor (admin beta) | /kits/:kitStoreProductId | Fix | No way to see/edit individual variant prices. | P1 | M |  | Open |
| 453 | Catalog · Products · Kits · Listings | Kit Editor (admin beta) | /kits/:kitStoreProductId | Fix | when_made dropdown has only 3 options. | P2 | S |  | Open |
| 454 | Catalog · Products · Kits · Listings | Kit Editor (admin beta) | /kits/:kitStoreProductId | Fix | Publish targets always show both Etsy and Shopify regardless of connections. | P2 | M |  | Open |
| 455 | Catalog · Products · Kits · Listings | Kit Editor (admin beta) | /kits/:kitStoreProductId | Fix | No "Unpublish" after publishing. | P2 | S |  | Open |
| 456 | Catalog · Products · Kits · Listings | Kit Editor (admin beta) | /kits/:kitStoreProductId | Fix | Error state + alert() success — inconsistent. | P2 | S |  | Open |
| 457 | Catalog · Products · Kits · Listings | Kit Editor (admin beta) | /kits/:kitStoreProductId | Fix | "Generate variants" replaces existing without confirmation. | P1 | S |  | Open |
| 458 | Catalog · Products · Kits · Listings | Kit Editor (admin beta) | /kits/:kitStoreProductId | Polish | No diff view between current and proposed variants. | P2 | M |  | Open |
| 459 | Catalog · Products · Kits · Listings | Kit Editor (admin beta) | /kits/:kitStoreProductId | Polish | Component "Design" button navigates to editor with no breadcrumb back. | P2 | S |  | Open |
| 460 | Catalog · Products · Kits · Listings | Kit Editor (admin beta) | /kits/:kitStoreProductId | Polish | No mobile responsive layout. | P2 | M |  | Open |
| 461 | Catalog · Products · Kits · Listings | Kit Editor (admin beta) | /kits/:kitStoreProductId | Feature | Etsy taxonomy picker (autocomplete category tree). | P0 | M |  | Open |
| 462 | Catalog · Products · Kits · Listings | Kit Editor (admin beta) | /kits/:kitStoreProductId | Feature | Bulk variant editor — paginated price table. | P1 | L |  | Open |
| 463 | Catalog · Products · Kits · Listings | Kit Editor (admin beta) | /kits/:kitStoreProductId | Feature | Variant impact preview before Generate. | P1 | M |  | Open |
| 464 | Catalog · Products · Kits · Listings | Listings | /listings | Fix | Auto-sync fires unconditionally for single-account users with no opt-in or feedback. | P0 | M |  | Open |
| 465 | Catalog · Products · Kits · Listings | Listings | /listings | Fix | selectedAccount defaults to first Etsy — Shopify-only sellers get weird state. | P1 | S |  | Open |
| 466 | Catalog · Products · Kits · Listings | Listings | /listings | Fix | Refresh re-loads mappings only, not synced listings — confusing name. | P1 | S |  | Open |
| 467 | Catalog · Products · Kits · Listings | Listings | /listings | Fix | Table not sortable. | P1 | M |  | Open |
| 468 | Catalog · Products · Kits · Listings | Listings | /listings | Fix | Pagination doesn't reset to page 1 when switching modes. | P1 | S |  | Open |
| 469 | Catalog · Products · Kits · Listings | Listings | /listings | Fix | ActionsDropdown <details> lacks aria-haspopup / focus mgmt. | P1 | S |  | Open |
| 470 | Catalog · Products · Kits · Listings | Listings | /listings | Fix | Synced vs mapped column schemas differ — confusing toggle. | P1 | M |  | Open |
| 471 | Catalog · Products · Kits · Listings | Listings | /listings | Fix | Shopify deep-link opens admin, not storefront. | P2 | S |  | Open |
| 472 | Catalog · Products · Kits · Listings | Listings | /listings | Fix | <img> without lazy loading. | P2 | S |  | Open |
| 473 | Catalog · Products · Kits · Listings | Listings | /listings | Fix | Cached listings silently displayed with no "Last synced" timestamp. | P2 | S |  | Open |
| 474 | Catalog · Products · Kits · Listings | Listings | /listings | Fix | Lost-linkage listings have no remap path — dead end. | P2 | M |  | Open |
| 475 | Catalog · Products · Kits · Listings | Listings | /listings | Polish | "Completeful" vs "External POD" naming inconsistent. | P2 | S |  | Open |
| 476 | Catalog · Products · Kits · Listings | Listings | /listings | Polish | Stats cards count differs by mode — layout shifts. | P2 | S |  | Open |
| 477 | Catalog · Products · Kits · Listings | Listings | /listings | Polish | lp-row-fulfilled has no legend. | P2 | S |  | Open |
| 478 | Catalog · Products · Kits · Listings | Listings | /listings | Polish | Error state has no retry CTA. | P2 | S |  | Open |
| 479 | Catalog · Products · Kits · Listings | Listings | /listings | Polish | "Import Listings" duplicated as toggle + button. | P2 | S |  | Open |
| 480 | Catalog · Products · Kits · Listings | Listings | /listings | Feature | Map by SKU — bulk-map listings to store_products. | P1 | M |  | Open |
| 481 | Catalog · Products · Kits · Listings | Listings | /listings | Feature | "Listings missing on marketplace X" — surface gaps. | P1 | M |  | Open |
| 482 | Catalog · Products · Kits · Listings | Listings | /listings | Feature | Listing health score per marketplace. | P2 | M |  | Open |
| 483 | Catalog · Products · Kits · Listings | Listings | /listings | Feature | Cross-marketplace price sync. | P2 | L |  | Open |
| 484 | Catalog · Products · Kits · Listings | Listings | /listings | Feature | Stale-listing detection (price drift). | P2 | M |  | Open |
| 485 | Catalog · Products · Kits · Listings | Listings | /listings | Feature | Opt-in nightly auto-sync with status. | P1 | M |  | Open |
| 486 | Catalog · Products · Kits · Listings | Listings | /listings | Feature | Buyer-facing "View on marketplace" deep link. | P2 | S |  | Open |
| 487 | Catalog · Products · Kits · Listings | Listing Wizard | /listing/new, /listing/:id/edit | Fix | CRITICAL: NO AUTOSAVE — refresh loses 5–15 min of work. | P0 | L |  | Open |
| 488 | Catalog · Products · Kits · Listings | Listing Wizard | /listing/new, /listing/:id/edit | Fix | No "back without losing" guard. | P0 | M |  | Open |
| 489 | Catalog · Products · Kits · Listings | Listing Wizard | /listing/new, /listing/:id/edit | Fix | Cancel navigates away with no confirmation. | P0 | M |  | Open |
| 490 | Catalog · Products · Kits · Listings | Listing Wizard | /listing/new, /listing/:id/edit | Fix | Step 1 title validation doesn't enforce Etsy 140-char max in step header. | P1 | S |  | Open |
| 491 | Catalog · Products · Kits · Listings | Listing Wizard | /listing/new, /listing/:id/edit | Fix | No way to skip Variants step for single-SKU sellers. | P1 | M |  | Open |
| 492 | Catalog · Products · Kits · Listings | Listing Wizard | /listing/new, /listing/:id/edit | Fix | alert() for "Select at least one marketplace" — inline error preferred. | P1 | S |  | Open |
| 493 | Catalog · Products · Kits · Listings | Listing Wizard | /listing/new, /listing/:id/edit | Fix | Marketplace bootstrap blocks all interaction with full-page loader. | P1 | M |  | Open |
| 494 | Catalog · Products · Kits · Listings | Listing Wizard | /listing/new, /listing/:id/edit | Fix | marketplaceBootstrapReady gating prevents tweaking common.title until everything loads. | P1 | S |  | Open |
| 495 | Catalog · Products · Kits · Listings | Listing Wizard | /listing/new, /listing/:id/edit | Fix | Creation modal partial-success has no "retry failed marketplaces". | P1 | M |  | Open |
| 496 | Catalog · Products · Kits · Listings | Listing Wizard | /listing/new, /listing/:id/edit | Fix | Step-3 complete passes even when seller hasn't reviewed mockups. | P2 | S |  | Open |
| 497 | Catalog · Products · Kits · Listings | Listing Wizard | /listing/new, /listing/:id/edit | Fix | userInitiatedExpandRef + 300ms timer is race-prone. | P2 | S |  | Open |
| 498 | Catalog · Products · Kits · Listings | Listing Wizard | /listing/new, /listing/:id/edit | Fix | Etsy Update wizard only loads basic fields — no variants editable. | P1 | M |  | Open |
| 499 | Catalog · Products · Kits · Listings | Listing Wizard | /listing/new, /listing/:id/edit | Fix | "Admin AI Preview" toggle label is confusing. | P2 | S |  | Open |
| 500 | Catalog · Products · Kits · Listings | Listing Wizard | /listing/new, /listing/:id/edit | Polish | Etsy validation errors propagate locally — surface to step card header. | P1 | S |  | Open |
| 501 | Catalog · Products · Kits · Listings | Listing Wizard | /listing/new, /listing/:id/edit | Polish | Variant price errors only shown at step completion — inline preferred. | P1 | S |  | Open |
| 502 | Catalog · Products · Kits · Listings | Listing Wizard | /listing/new, /listing/:id/edit | Polish | TikTok category attributes silently blank if seller submits before load. | P1 | M |  | Open |
| 503 | Catalog · Products · Kits · Listings | Listing Wizard | /listing/new, /listing/:id/edit | Polish | Inline-style soup in ListingWizardFooter. | P2 | M |  | Open |
| 504 | Catalog · Products · Kits · Listings | Listing Wizard | /listing/new, /listing/:id/edit | Polish | No character counts for Etsy tags/title. | P2 | S |  | Open |
| 505 | Catalog · Products · Kits · Listings | Listing Wizard | /listing/new, /listing/:id/edit | Polish | "Admin AI Preview" toggle buried in footer left. | P2 | S |  | Open |
| 506 | Catalog · Products · Kits · Listings | Listing Wizard | /listing/new, /listing/:id/edit | Polish | AllPhotosModal has no debounce on photo selection. | P2 | S |  | Open |
| 507 | Catalog · Products · Kits · Listings | Listing Wizard | /listing/new, /listing/:id/edit | Polish | Loading is centered text — skeleton structure preferred. | P2 | S |  | Open |
| 508 | Catalog · Products · Kits · Listings | Listing Wizard | /listing/new, /listing/:id/edit | Feature | Autosave to localStorage every 5s with "Resume" banner. | P0 | M |  | Open |
| 509 | Catalog · Products · Kits · Listings | Listing Wizard | /listing/new, /listing/:id/edit | Feature | Promote AI description generator + per-marketplace regenerate. | P0 | M |  | Open |
| 510 | Catalog · Products · Kits · Listings | Listing Wizard | /listing/new, /listing/:id/edit | Feature | SEO keyword suggester (13 Etsy tags by search volume). | P1 | M |  | Open |
| 511 | Catalog · Products · Kits · Listings | Listing Wizard | /listing/new, /listing/:id/edit | Feature | Title A/B variants — generate 3 options. | P1 | M |  | Open |
| 512 | Catalog · Products · Kits · Listings | Listing Wizard | /listing/new, /listing/:id/edit | Feature | Cross-marketplace preview side-by-side. | P1 | M |  | Open |
| 513 | Catalog · Products · Kits · Listings | Listing Wizard | /listing/new, /listing/:id/edit | Feature | Per-marketplace pricing overrides. | P1 | L |  | Open |
| 514 | Catalog · Products · Kits · Listings | Listing Wizard | /listing/new, /listing/:id/edit | Feature | Competitor price scrape. | P2 | M |  | Open |
| 515 | Catalog · Products · Kits · Listings | Listing Wizard | /listing/new, /listing/:id/edit | Feature | Mockup recommender by marketplace performance. | P2 | M |  | Open |
| 516 | Catalog · Products · Kits · Listings | Listing Wizard | /listing/new, /listing/:id/edit | Feature | Save as template — reuse description/tags. | P1 | S |  | Open |
| 517 | Catalog · Products · Kits · Listings | Etsy Update Wizard | /listing/etsy/:mappingId/edit | Fix | didLoadRef doesn't reset on mappingId change — second mapping never loads. | P1 | S |  | Open |
| 518 | Catalog · Products · Kits · Listings | Etsy Update Wizard | /listing/etsy/:mappingId/edit | Fix | moneyToFloat has no error for malformed input. | P1 | S |  | Open |
| 519 | Catalog · Products · Kits · Listings | Etsy Update Wizard | /listing/etsy/:mappingId/edit | Fix | Error states bail with red text — no retry. | P1 | S |  | Open |
| 520 | Catalog · Products · Kits · Listings | Etsy Update Wizard | /listing/etsy/:mappingId/edit | Fix | "Please re-sync or recreate the listing mapping" provides no path forward. | P1 | S |  | Open |
| 521 | Catalog · Products · Kits · Listings | Etsy Update Wizard | /listing/etsy/:mappingId/edit | Fix | taxonomyId fallback to 0 is invalid for Etsy. | P2 | S |  | Open |
| 522 | Catalog · Products · Kits · Listings | Etsy Update Wizard | /listing/etsy/:mappingId/edit | Fix | Tags joined with ", " — brittle for tags containing commas. | P2 | S |  | Open |
| 523 | Catalog · Products · Kits · Listings | Etsy Update Wizard | /listing/etsy/:mappingId/edit | Fix | created_at uses epoch — should use real timestamp. | P2 | S |  | Open |
| 524 | Catalog · Products · Kits · Listings | Etsy Update Wizard | /listing/etsy/:mappingId/edit | Polish | Loading header is plain text. | P2 | S |  | Open |
| 525 | Catalog · Products · Kits · Listings | Etsy Update Wizard | /listing/etsy/:mappingId/edit | Polish | Scroll position not preserved when returning to /listings. | P2 | S |  | Open |
| 526 | Catalog · Products · Kits · Listings | Etsy Update Wizard | /listing/etsy/:mappingId/edit | Feature | Side-by-side diff vs Etsy state before publishing. | P1 | M |  | Open |
| 527 | Catalog · Products · Kits · Listings | Etsy Update Wizard | /listing/etsy/:mappingId/edit | Feature | Auto-detect drift — flag externally-changed fields. | P1 | M |  | Open |
| 528 | Catalog · Products · Kits · Listings | Etsy Update Wizard | /listing/etsy/:mappingId/edit | Feature | Bulk Etsy editor (price-only / tag-only). | P2 | M |  | Open |
| 529 | Catalog · Products · Kits · Listings | Etsy Update Wizard | /listing/etsy/:mappingId/edit | Feature | Restore previous version from listing_history. | P2 | S |  | Open |
| 530 | Storefront · Checkout · Marketplaces · Orders | Public Storefront | /storefront/public/:sub, custom domain | Fix | CRITICAL: No add-to-cart / checkout flow — storefront is non-functional commerce. | P0 | L |  | Open |
| 531 | Storefront · Checkout · Marketplaces · Orders | Public Storefront | /storefront/public/:sub, custom domain | Fix | Replace inline style={} with themeable CSS — hardcoded colors block theming. | P0 | M |  | Open |
| 532 | Storefront · Checkout · Marketplaces · Orders | Public Storefront | /storefront/public/:sub, custom domain | Fix | Add SEO meta via react-helmet-async (title, OG, description, canonical). | P1 | S |  | Open |
| 533 | Storefront · Checkout · Marketplaces · Orders | Public Storefront | /storefront/public/:sub, custom domain | Fix | Add Product JSON-LD structured data. | P1 | S |  | Open |
| 534 | Storefront · Checkout · Marketplaces · Orders | Public Storefront | /storefront/public/:sub, custom domain | Fix | Loading is "Loading…" text — needs skeleton. | P1 | S |  | Open |
| 535 | Storefront · Checkout · Marketplaces · Orders | Public Storefront | /storefront/public/:sub, custom domain | Fix | Error state single line — needs real 404 page. | P1 | S |  | Open |
| 536 | Storefront · Checkout · Marketplaces · Orders | Public Storefront | /storefront/public/:sub, custom domain | Fix | Mobile: no hamburger, no responsive nav, no mobile grid. | P0 | M |  | Open |
| 537 | Storefront · Checkout · Marketplaces · Orders | Public Storefront | /storefront/public/:sub, custom domain | Fix | Image alt uses just {p.title} — richer alt for a11y + SEO. | P2 | S |  | Open |
| 538 | Storefront · Checkout · Marketplaces · Orders | Public Storefront | /storefront/public/:sub, custom domain | Fix | Hardcoded "$" prefix — use Intl.NumberFormat with store currency. | P1 | S |  | Open |
| 539 | Storefront · Checkout · Marketplaces · Orders | Public Storefront | /storefront/public/:sub, custom domain | Fix | "No products yet" zero state is a one-liner. | P1 | S |  | Open |
| 540 | Storefront · Checkout · Marketplaces · Orders | Public Storefront | /storefront/public/:sub, custom domain | Polish | Sticky header with logo support. | P2 | S |  | Open |
| 541 | Storefront · Checkout · Marketplaces · Orders | Public Storefront | /storefront/public/:sub, custom domain | Polish | Breadcrumbs on product page. | P2 | S |  | Open |
| 542 | Storefront · Checkout · Marketplaces · Orders | Public Storefront | /storefront/public/:sub, custom domain | Polish | Image gallery with thumbnails — only images[0] rendered. | P1 | M |  | Open |
| 543 | Storefront · Checkout · Marketplaces · Orders | Public Storefront | /storefront/public/:sub, custom domain | Polish | Hover-zoom desktop / swipeable carousel mobile. | P2 | M |  | Open |
| 544 | Storefront · Checkout · Marketplaces · Orders | Public Storefront | /storefront/public/:sub, custom domain | Polish | Footer with policies + "Powered by Completeful" referral. | P2 | S |  | Open |
| 545 | Storefront · Checkout · Marketplaces · Orders | Public Storefront | /storefront/public/:sub, custom domain | Polish | Product card hover lift / image scale. | P2 | S |  | Open |
| 546 | Storefront · Checkout · Marketplaces · Orders | Public Storefront | /storefront/public/:sub, custom domain | Polish | "Back" link is bare ← Back text — real button. | P2 | S |  | Open |
| 547 | Storefront · Checkout · Marketplaces · Orders | Public Storefront | /storefront/public/:sub, custom domain | Polish | Page transitions on product nav. | P2 | S |  | Open |
| 548 | Storefront · Checkout · Marketplaces · Orders | Public Storefront | /storefront/public/:sub, custom domain | Polish | Favicon + theme-color from store branding. | P2 | S |  | Open |
| 549 | Storefront · Checkout · Marketplaces · Orders | Public Storefront | /storefront/public/:sub, custom domain | Polish | Replace bare <h1> with a real hero section. | P2 | M |  | Open |
| 550 | Storefront · Checkout · Marketplaces · Orders | Public Storefront | /storefront/public/:sub, custom domain | Feature | Live theme editor in seller admin (brand color, font, hero, layout). | P0 | XL |  | Open |
| 551 | Storefront · Checkout · Marketplaces · Orders | Public Storefront | /storefront/public/:sub, custom domain | Feature | Editable hero banner / featured collection. | P1 | L |  | Open |
| 552 | Storefront · Checkout · Marketplaces · Orders | Public Storefront | /storefront/public/:sub, custom domain | Feature | Categories / collections (currently flat list). | P1 | L |  | Open |
| 553 | Storefront · Checkout · Marketplaces · Orders | Public Storefront | /storefront/public/:sub, custom domain | Feature | Search + filters on home. | P2 | M |  | Open |
| 554 | Storefront · Checkout · Marketplaces · Orders | Public Storefront | /storefront/public/:sub, custom domain | Feature | Social proof widget ("37 sold in last 24h"). | P2 | M |  | Open |
| 555 | Storefront · Checkout · Marketplaces · Orders | Public Storefront | /storefront/public/:sub, custom domain | Feature | Related products on product page. | P2 | M |  | Open |
| 556 | Storefront · Checkout · Marketplaces · Orders | Public Storefront | /storefront/public/:sub, custom domain | Feature | AI-generated product descriptions (seller approves). | P2 | M |  | Open |
| 557 | Storefront · Checkout · Marketplaces · Orders | Public Storefront | /storefront/public/:sub, custom domain | Feature | Abandoned cart recovery drip. | P2 | L |  | Open |
| 558 | Storefront · Checkout · Marketplaces · Orders | Public Storefront | /storefront/public/:sub, custom domain | Feature | Guided DNS panel with copy CNAME + auto re-verify + SSL status. | P1 | M |  | Open |
| 559 | Storefront · Checkout · Marketplaces · Orders | Checkout | /checkout | Fix | Country picker is free-text input, not searchable select. | P0 | M |  | Open |
| 560 | Storefront · Checkout · Marketplaces · Orders | Checkout | /checkout | Fix | State should be a <select> for US/Canada/Australia. | P0 | S |  | Open |
| 561 | Storefront · Checkout · Marketplaces · Orders | Checkout | /checkout | Fix | No address autocomplete (Google Places / Stripe Address Element). | P0 | M |  | Open |
| 562 | Storefront · Checkout · Marketplaces · Orders | Checkout | /checkout | Fix | No shipping speed / carrier options. | P1 | M |  | Open |
| 563 | Storefront · Checkout · Marketplaces · Orders | Checkout | /checkout | Fix | No tax line breakdown. | P1 | M |  | Open |
| 564 | Storefront · Checkout · Marketplaces · Orders | Checkout | /checkout | Fix | No real post-order confirmation page — only toast + redirect. | P1 | M |  | Open |
| 565 | Storefront · Checkout · Marketplaces · Orders | Checkout | /checkout | Fix | Quantity input has no max — paste "9999999" can crash preview. | P1 | S |  | Open |
| 566 | Storefront · Checkout · Marketplaces · Orders | Checkout | /checkout | Fix | promoApplyPending logic non-obvious — disable Apply with tooltip. | P2 | S |  | Open |
| 567 | Storefront · Checkout · Marketplaces · Orders | Checkout | /checkout | Fix | Estimate effect re-runs on every change — debounce. | P1 | S |  | Open |
| 568 | Storefront · Checkout · Marketplaces · Orders | Checkout | /checkout | Fix | Cancel navigates to /products without warning if cart has items. | P2 | S |  | Open |
| 569 | Storefront · Checkout · Marketplaces · Orders | Checkout | /checkout | Polish | Quantity indicator could show an "x2" badge in addition to bare number. | P2 | S |  | Open |
| 570 | Storefront · Checkout · Marketplaces · Orders | Checkout | /checkout | Polish | Variant preview swap flashes when select changes — preload images. | P2 | S |  | Open |
| 571 | Storefront · Checkout · Marketplaces · Orders | Checkout | /checkout | Polish | Applied-code state shown in two places — combine. | P2 | S |  | Open |
| 572 | Storefront · Checkout · Marketplaces · Orders | Checkout | /checkout | Polish | "Items (3)" + unit pluralization repeated — DRY. | P2 | S |  | Open |
| 573 | Storefront · Checkout · Marketplaces · Orders | Checkout | /checkout | Polish | Move trust strip higher near place-order button. | P2 | S |  | Open |
| 574 | Storefront · Checkout · Marketplaces · Orders | Checkout | /checkout | Polish | Add "Payment ready" chip mirroring "Address ready". | P2 | S |  | Open |
| 575 | Storefront · Checkout · Marketplaces · Orders | Checkout | /checkout | Polish | Sticky place-order button on mobile. | P2 | S |  | Open |
| 576 | Storefront · Checkout · Marketplaces · Orders | Checkout | /checkout | Polish | "Couldn't calculate your total" leaks raw API error. | P2 | S |  | Open |
| 577 | Storefront · Checkout · Marketplaces · Orders | Checkout | /checkout | Polish | Double-sided print cost note buried in tooltip. | P2 | S |  | Open |
| 578 | Storefront · Checkout · Marketplaces · Orders | Checkout | /checkout | Feature | Saved address book (multiple shipping addresses). | P2 | M |  | Open |
| 579 | Storefront · Checkout · Marketplaces · Orders | Checkout | /checkout | Feature | Express checkout (Apple Pay / Google Pay). | P1 | M |  | Open |
| 580 | Storefront · Checkout · Marketplaces · Orders | Checkout | /checkout | Feature | ACH / bank debit for big sample orders. | P2 | M |  | Open |
| 581 | Storefront · Checkout · Marketplaces · Orders | Checkout | /checkout | Feature | Order arrival date estimate. | P1 | M |  | Open |
| 582 | Storefront · Checkout · Marketplaces · Orders | Checkout | /checkout | Feature | Gift options (wrap, custom note). | P2 | M |  | Open |
| 583 | Storefront · Checkout · Marketplaces · Orders | Checkout | /checkout | Feature | "Save as re-order template". | P2 | M |  | Open |
| 584 | Storefront · Checkout · Marketplaces · Orders | Checkout | /checkout | Feature | Sample-discount tier hints. | P2 | S |  | Open |
| 585 | Storefront · Checkout · Marketplaces · Orders | Marketplaces / Sales Channels | /sales-channels | Fix | CRITICAL: Sellers can't see reauth/token-missing status — wrapped in admin-only. | P0 | S |  | Open |
| 586 | Storefront · Checkout · Marketplaces · Orders | Marketplaces / Sales Channels | /sales-channels | Fix | Replace ALL alert()/confirm() with toast/modal (7+ alerts). | P0 | M |  | Open |
| 587 | Storefront · Checkout · Marketplaces · Orders | Marketplaces / Sales Channels | /sales-channels | Fix | OAuth fallback messaging via alert() — make persistent banner with retry CTA. | P0 | S |  | Open |
| 588 | Storefront · Checkout · Marketplaces · Orders | Marketplaces / Sales Channels | /sales-channels | Fix | Connection health monitoring banner at top. | P0 | M |  | Open |
| 589 | Storefront · Checkout · Marketplaces · Orders | Marketplaces / Sales Channels | /sales-channels | Fix | Disconnect should require typing shop name for production accounts. | P1 | S |  | Open |
| 590 | Storefront · Checkout · Marketplaces · Orders | Marketplaces / Sales Channels | /sales-channels | Fix | TikTok uses window.open popup — popup blockers eat it. | P1 | S |  | Open |
| 591 | Storefront · Checkout · Marketplaces · Orders | Marketplaces / Sales Channels | /sales-channels | Fix | "Ingest last 24h" / "Backfill open orders" exposed to users — should be admin. | P1 | S |  | Open |
| 592 | Storefront · Checkout · Marketplaces · Orders | Marketplaces / Sales Channels | /sales-channels | Fix | Connection guide modal: hero button always passes "etsy". | P2 | S |  | Open |
| 593 | Storefront · Checkout · Marketplaces · Orders | Marketplaces / Sales Channels | /sales-channels | Fix | Last-sync timestamp not shown per account. | P1 | M |  | Open |
| 594 | Storefront · Checkout · Marketplaces · Orders | Marketplaces / Sales Channels | /sales-channels | Fix | EtsyInstallOAuthForwarder has no spinner / timeout / retry. | P1 | S |  | Open |
| 595 | Storefront · Checkout · Marketplaces · Orders | Marketplaces / Sales Channels | /sales-channels | Polish | Hero stat counters read like marketing — replace with real metrics. | P2 | S |  | Open |
| 596 | Storefront · Checkout · Marketplaces · Orders | Marketplaces / Sales Channels | /sales-channels | Polish | Persist grid/list view toggle in localStorage. | P2 | S |  | Open |
| 597 | Storefront · Checkout · Marketplaces · Orders | Marketplaces / Sales Channels | /sales-channels | Polish | "Coming Soon" Amazon — capture email for notify. | P2 | S |  | Open |
| 598 | Storefront · Checkout · Marketplaces · Orders | Marketplaces / Sales Channels | /sales-channels | Polish | Inline-styled shop rows — extract to classes. | P2 | S |  | Open |
| 599 | Storefront · Checkout · Marketplaces · Orders | Marketplaces / Sales Channels | /sales-channels | Polish | Buried TikTok-Shopify auto-sync toggle in <details>. | P2 | S |  | Open |
| 600 | Storefront · Checkout · Marketplaces · Orders | Marketplaces / Sales Channels | /sales-channels | Polish | Dense "auto-add new products" label. | P2 | S |  | Open |
| 601 | Storefront · Checkout · Marketplaces · Orders | Marketplaces / Sales Channels | /sales-channels | Polish | Bare loading text — skeleton cards. | P2 | S |  | Open |
| 602 | Storefront · Checkout · Marketplaces · Orders | Marketplaces / Sales Channels | /sales-channels | Polish | Duplicate platform-card structure — extract component. | P2 | M |  | Open |
| 603 | Storefront · Checkout · Marketplaces · Orders | Marketplaces / Sales Channels | /sales-channels | Polish | Shopify webhook admin block renders raw JSON. | P2 | S |  | Open |
| 604 | Storefront · Checkout · Marketplaces · Orders | Marketplaces / Sales Channels | /sales-channels | Polish | Connection guide CTA placed twice in hero. | P2 | S |  | Open |
| 605 | Storefront · Checkout · Marketplaces · Orders | Marketplaces / Sales Channels | /sales-channels | Feature | Connection health dashboard widget (per-account ping + last-success + next-refresh). | P0 | L |  | Open |
| 606 | Storefront · Checkout · Marketplaces · Orders | Marketplaces / Sales Channels | /sales-channels | Feature | Marketplace-specific tip cards on each platform card. | P1 | M |  | Open |
| 607 | Storefront · Checkout · Marketplaces · Orders | Marketplaces / Sales Channels | /sales-channels | Feature | "Publish everywhere" CTA with per-platform templates. | P1 | XL |  | Open |
| 608 | Storefront · Checkout · Marketplaces · Orders | Marketplaces / Sales Channels | /sales-channels | Feature | Listing-sync alerts for price/inventory drift. | P2 | L |  | Open |
| 609 | Storefront · Checkout · Marketplaces · Orders | Marketplaces / Sales Channels | /sales-channels | Feature | OAuth-failure self-heal — giant Reconnect button on token_missing rows. | P0 | M |  | Open |
| 610 | Storefront · Checkout · Marketplaces · Orders | Marketplaces / Sales Channels | /sales-channels | Feature | Per-account analytics chips (orders/24h, top product, 7-day revenue). | P2 | M |  | Open |
| 611 | Storefront · Checkout · Marketplaces · Orders | Marketplaces / Sales Channels | /sales-channels | Feature | Webhook diagnostic ("Test connection" button). | P2 | M |  | Open |
| 612 | Storefront · Checkout · Marketplaces · Orders | Marketplaces / Sales Channels | /sales-channels | Feature | Soft 7-day disconnect grace period. | P2 | M |  | Open |
| 613 | Storefront · Checkout · Marketplaces · Orders | Orders | /orders | Fix | Row click opens modal vs Order# click navigates — two paths from same row. | P1 | S |  | Open |
| 614 | Storefront · Checkout · Marketplaces · Orders | Orders | /orders | Fix | No status timeline (Placed → Personalized → Printed → Shipped → Delivered). | P1 | M |  | Open |
| 615 | Storefront · Checkout · Marketplaces · Orders | Orders | /orders | Fix | Date range defaults to Jan 1 — slow for high-volume sellers. Use last 30 days. | P1 | S |  | Open |
| 616 | Storefront · Checkout · Marketplaces · Orders | Orders | /orders | Fix | Bulk actions only "Retry" — add cancel, export, mark fulfilled, change shipping. | P1 | L |  | Open |
| 617 | Storefront · Checkout · Marketplaces · Orders | Orders | /orders | Fix | Search is single field across order# + customer — scoped search needed. | P2 | M |  | Open |
| 618 | Storefront · Checkout · Marketplaces · Orders | Orders | /orders | Fix | Tracking column shows raw number — no carrier link. | P0 | S |  | Open |
| 619 | Storefront · Checkout · Marketplaces · Orders | Orders | /orders | Fix | No visual de-emphasis on refunded rows. | P2 | S |  | Open |
| 620 | Storefront · Checkout · Marketplaces · Orders | Orders | /orders | Fix | No filter for expedited orders. | P2 | S |  | Open |
| 621 | Storefront · Checkout · Marketplaces · Orders | Orders | /orders | Fix | retrySelected concurrency 3 — no per-order progress UI. | P2 | M |  | Open |
| 622 | Storefront · Checkout · Marketplaces · Orders | Orders | /orders | Fix | our_cost rendered "—" when 0 — misleading. | P3 | S |  | Open |
| 623 | Storefront · Checkout · Marketplaces · Orders | Orders | /orders | Polish | Customer column left-aligned, marketplace right-aligned — inconsistent. | P2 | S |  | Open |
| 624 | Storefront · Checkout · Marketplaces · Orders | Orders | /orders | Polish | Anonymous Etsy buyer shows blank — show "—". | P2 | S |  | Open |
| 625 | Storefront · Checkout · Marketplaces · Orders | Orders | /orders | Polish | "Spend Summary" feels like a separate page. | P2 | S |  | Open |
| 626 | Storefront · Checkout · Marketplaces · Orders | Orders | /orders | Polish | Add jump-to-page input for power users. | P2 | S |  | Open |
| 627 | Storefront · Checkout · Marketplaces · Orders | Orders | /orders | Polish | Combine filter dropdowns into combobox. | P2 | M |  | Open |
| 628 | Storefront · Checkout · Marketplaces · Orders | Orders | /orders | Polish | Clear button only clears filters, not date range. | P2 | S |  | Open |
| 629 | Storefront · Checkout · Marketplaces · Orders | Orders | /orders | Polish | Spend-summary table is bare — sort / filter / total row. | P2 | M |  | Open |
| 630 | Storefront · Checkout · Marketplaces · Orders | Orders | /orders | Polish | Sticky table header on long scrolls. | P2 | S |  | Open |
| 631 | Storefront · Checkout · Marketplaces · Orders | Orders | /orders | Polish | Expedited badge sits next to refund + payment badges — hierarchy unclear. | P2 | S |  | Open |
| 632 | Storefront · Checkout · Marketplaces · Orders | Orders | /orders | Feature | AI-summarized personalization across all orders + name/date extraction. | P1 | L |  | Open |
| 633 | Storefront · Checkout · Marketplaces · Orders | Orders | /orders | Feature | Customer service templates tied to order. | P1 | M |  | Open |
| 634 | Storefront · Checkout · Marketplaces · Orders | Orders | /orders | Feature | Exception queue / "needs attention" tab. | P1 | M |  | Open |
| 635 | Storefront · Checkout · Marketplaces · Orders | Orders | /orders | Feature | Conflict detection — duplicate personalization in same batch. | P2 | M |  | Open |
| 636 | Storefront · Checkout · Marketplaces · Orders | Orders | /orders | Feature | CSV / Excel export of filtered orders. | P1 | S |  | Open |
| 637 | Storefront · Checkout · Marketplaces · Orders | Orders | /orders | Feature | Custom views / saved filters. | P2 | M |  | Open |
| 638 | Storefront · Checkout · Marketplaces · Orders | Orders | /orders | Feature | Order tagging system (VIP / RUSH / GIFT). | P2 | M |  | Open |
| 639 | Storefront · Checkout · Marketplaces · Orders | Orders | /orders | Feature | Bulk packing-slip PDF. | P1 | L |  | Open |
| 640 | Storefront · Checkout · Marketplaces · Orders | Order Route Resolver | /orders/:id | Fix | "No matching orders found" is a dead end — add "Search all orders" CTA. | P1 | S |  | Open |
| 641 | Storefront · Checkout · Marketplaces · Orders | Order Route Resolver | /orders/:id | Fix | Multi-match list shows store + date but no order status / payment / total. | P1 | S |  | Open |
| 642 | Storefront · Checkout · Marketplaces · Orders | Order Route Resolver | /orders/:id | Fix | Error display shows raw API error. | P2 | S |  | Open |
| 643 | Storefront · Checkout · Marketplaces · Orders | Order Route Resolver | /orders/:id | Fix | No "Did you mean #1235?" fuzzy suggestion. | P2 | M |  | Open |
| 644 | Storefront · Checkout · Marketplaces · Orders | Order Route Resolver | /orders/:id | Fix | Loading state bare. | P3 | S |  | Open |
| 645 | Storefront · Checkout · Marketplaces · Orders | Order Route Resolver | /orders/:id | Polish | Truncated UUID feels engineery — remove or replace with date. | P2 | S |  | Open |
| 646 | Storefront · Checkout · Marketplaces · Orders | Order Route Resolver | /orders/:id | Polish | "Resolving order number…" copy awkward. | P2 | S |  | Open |
| 647 | Storefront · Checkout · Marketplaces · Orders | Order Route Resolver | /orders/:id | Polish | Multi-match buttons styled too subtly. | P2 | S |  | Open |
| 648 | Storefront · Checkout · Marketplaces · Orders | Order Route Resolver | /orders/:id | Polish | Quick-preview hover for each multi-match. | P2 | S |  | Open |
| 649 | Storefront · Checkout · Marketplaces · Orders | Order Route Resolver | /orders/:id | Polish | Back-to-orders button only on no-match — add everywhere. | P2 | S |  | Open |
| 650 | Storefront · Checkout · Marketplaces · Orders | Order Route Resolver | /orders/:id | Feature | Smart redirect from external URLs (paste etsy.com/orders/1234). | P3 | M |  | Open |
| 651 | Storefront · Checkout · Marketplaces · Orders | Order Route Resolver | /orders/:id | Feature | Recently-viewed orders cache. | P3 | S |  | Open |
| 652 | Storefront · Checkout · Marketplaces · Orders | Order Route Resolver | /orders/:id | Feature | Multi-match merge. | P3 | M |  | Open |
| 653 | Storefront · Checkout · Marketplaces · Orders | Order Item Design Edit | /orders/:orderId/items/:itemId/design | Fix | No order context shown in editor — seller has no cue which order. | P0 | S |  | Open |
| 654 | Storefront · Checkout · Marketplaces · Orders | Order Item Design Edit | /orders/:orderId/items/:itemId/design | Fix | Loading state is bare text. | P1 | S |  | Open |
| 655 | Storefront · Checkout · Marketplaces · Orders | Order Item Design Edit | /orders/:orderId/items/:itemId/design | Fix | Error state has only "Back to Orders". | P1 | S |  | Open |
| 656 | Storefront · Checkout · Marketplaces · Orders | Order Item Design Edit | /orders/:orderId/items/:itemId/design | Fix | Save redirects to /orders losing workflow context. | P1 | S |  | Open |
| 657 | Storefront · Checkout · Marketplaces · Orders | Order Item Design Edit | /orders/:orderId/items/:itemId/design | Fix | "Save (order-only)" label is jargon. | P1 | S |  | Open |
| 658 | Storefront · Checkout · Marketplaces · Orders | Order Item Design Edit | /orders/:orderId/items/:itemId/design | Fix | No preview of customer's personalization request inside editor. | P0 | M |  | Open |
| 659 | Storefront · Checkout · Marketplaces · Orders | Order Item Design Edit | /orders/:orderId/items/:itemId/design | Fix | URL-canonicalizing useEffect causes resolution flash. | P2 | S |  | Open |
| 660 | Storefront · Checkout · Marketplaces · Orders | Order Item Design Edit | /orders/:orderId/items/:itemId/design | Fix | No "unsaved changes" warning on browser close. | P1 | M |  | Open |
| 661 | Storefront · Checkout · Marketplaces · Orders | Order Item Design Edit | /orders/:orderId/items/:itemId/design | Fix | baseName.slice(0,80) truncates silently. | P3 | S |  | Open |
| 662 | Storefront · Checkout · Marketplaces · Orders | Order Item Design Edit | /orders/:orderId/items/:itemId/design | Fix | No way to revert override to store default. | P1 | M |  | Open |
| 663 | Storefront · Checkout · Marketplaces · Orders | Order Item Design Edit | /orders/:orderId/items/:itemId/design | Polish | Header showing customer name, order #, item, personalization text inline. | P1 | S |  | Open |
| 664 | Storefront · Checkout · Marketplaces · Orders | Order Item Design Edit | /orders/:orderId/items/:itemId/design | Polish | "Next item / Previous item" navigation to walk the queue. | P1 | M |  | Open |
| 665 | Storefront · Checkout · Marketplaces · Orders | Order Item Design Edit | /orders/:orderId/items/:itemId/design | Polish | Visual indicator design is "order-specific only". | P2 | S |  | Open |
| 666 | Storefront · Checkout · Marketplaces · Orders | Order Item Design Edit | /orders/:orderId/items/:itemId/design | Polish | Side-by-side: customer note vs canvas. | P1 | S |  | Open |
| 667 | Storefront · Checkout · Marketplaces · Orders | Order Item Design Edit | /orders/:orderId/items/:itemId/design | Polish | Auto-save draft to localStorage. | P1 | M |  | Open |
| 668 | Storefront · Checkout · Marketplaces · Orders | Order Item Design Edit | /orders/:orderId/items/:itemId/design | Feature | AI-assisted personalization — parse "For Sarah on her 30th" → auto-place name. | P1 | XL |  | Open |
| 669 | Storefront · Checkout · Marketplaces · Orders | Order Item Design Edit | /orders/:orderId/items/:itemId/design | Feature | Batch-edit similar orders. | P2 | L |  | Open |
| 670 | Storefront · Checkout · Marketplaces · Orders | Order Item Design Edit | /orders/:orderId/items/:itemId/design | Feature | Approval flow for new sellers (route through senior teammate). | P3 | L |  | Open |
| 671 | Storefront · Checkout · Marketplaces · Orders | Order Item Design Edit | /orders/:orderId/items/:itemId/design | Feature | Print-file preview / proof PDF. | P1 | M |  | Open |
| 672 | Storefront · Checkout · Marketplaces · Orders | Order Item Design Edit | /orders/:orderId/items/:itemId/design | Feature | Auto "Mark as ready to print" status update. | P1 | S |  | Open |
| 673 | Storefront · Checkout · Marketplaces · Orders | Personalization Queue | /orders/personalization | Fix | No priority / "ship by" column. | P0 | M |  | Open |
| 674 | Storefront · Checkout · Marketplaces · Orders | Personalization Queue | /orders/personalization | Fix | No filters. | P0 | M |  | Open |
| 675 | Storefront · Checkout · Marketplaces · Orders | Personalization Queue | /orders/personalization | Fix | Personalization text truncated with ellipsis — hides names/dates. | P0 | S |  | Open |
| 676 | Storefront · Checkout · Marketplaces · Orders | Personalization Queue | /orders/personalization | Fix | No image of the item — text-only table. | P1 | M |  | Open |
| 677 | Storefront · Checkout · Marketplaces · Orders | Personalization Queue | /orders/personalization | Fix | Inline styles throughout. | P1 | M |  | Open |
| 678 | Storefront · Checkout · Marketplaces · Orders | Personalization Queue | /orders/personalization | Fix | No bulk processing. | P1 | L |  | Open |
| 679 | Storefront · Checkout · Marketplaces · Orders | Personalization Queue | /orders/personalization | Fix | Bare "Loading…" state. | P2 | S |  | Open |
| 680 | Storefront · Checkout · Marketplaces · Orders | Personalization Queue | /orders/personalization | Fix | Empty state copy uninspiring. | P2 | S |  | Open |
| 681 | Storefront · Checkout · Marketplaces · Orders | Personalization Queue | /orders/personalization | Fix | Only "Back to Orders" nav — no breadcrumb. | P2 | S |  | Open |
| 682 | Storefront · Checkout · Marketplaces · Orders | Personalization Queue | /orders/personalization | Fix | Error border uses brand color, not error red. | P2 | S |  | Open |
| 683 | Storefront · Checkout · Marketplaces · Orders | Personalization Queue | /orders/personalization | Polish | Row hover effect for tactile feedback. | P2 | S |  | Open |
| 684 | Storefront · Checkout · Marketplaces · Orders | Personalization Queue | /orders/personalization | Polish | Marketplace badge styling consistent with OrdersPage. | P2 | S |  | Open |
| 685 | Storefront · Checkout · Marketplaces · Orders | Personalization Queue | /orders/personalization | Polish | Per-status counts in pagination footer. | P2 | S |  | Open |
| 686 | Storefront · Checkout · Marketplaces · Orders | Personalization Queue | /orders/personalization | Polish | Action button varies by item state (Re-generate if override exists). | P2 | S |  | Open |
| 687 | Storefront · Checkout · Marketplaces · Orders | Personalization Queue | /orders/personalization | Polish | Sticky table header. | P2 | S |  | Open |
| 688 | Storefront · Checkout · Marketplaces · Orders | Personalization Queue | /orders/personalization | Polish | Time-on-queue chip ("Waiting 3 days") for urgency. | P1 | S |  | Open |
| 689 | Storefront · Checkout · Marketplaces · Orders | Personalization Queue | /orders/personalization | Feature | Priority badges (rush, repeat customer, high-value). | P0 | M |  | Open |
| 690 | Storefront · Checkout · Marketplaces · Orders | Personalization Queue | /orders/personalization | Feature | Queue ordering modes (FIFO / ship-by / longest-waiting / by-product). | P1 | M |  | Open |
| 691 | Storefront · Checkout · Marketplaces · Orders | Personalization Queue | /orders/personalization | Feature | Conflict detection — duplicate-personalization within minutes. | P2 | M |  | Open |
| 692 | Storefront · Checkout · Marketplaces · Orders | Personalization Queue | /orders/personalization | Feature | AI auto-fill design with extracted name/date. | P1 | XL |  | Open |
| 693 | Storefront · Checkout · Marketplaces · Orders | Personalization Queue | /orders/personalization | Feature | Batch print — multi-page PDF from 20 selected items. | P0 | L |  | Open |
| 694 | Storefront · Checkout · Marketplaces · Orders | Personalization Queue | /orders/personalization | Feature | Done / Skip / Need-info inline actions. | P1 | M |  | Open |
| 695 | Storefront · Checkout · Marketplaces · Orders | Personalization Queue | /orders/personalization | Feature | Assign to teammate. | P2 | M |  | Open |
| 696 | Storefront · Checkout · Marketplaces · Orders | Personalization Queue | /orders/personalization | Feature | Daily summary email. | P3 | S |  | Open |
| 697 | Storefront · Checkout · Marketplaces · Orders | Wallet | /wallet | Fix | No wallet transaction history — sellers can't see "where did my money go". | P0 | M |  | Open |
| 698 | Storefront · Checkout · Marketplaces · Orders | Wallet | /wallet | Fix | No way to withdraw / refund wallet balance. | P1 | M |  | Open |
| 699 | Storefront · Checkout · Marketplaces · Orders | Wallet | /wallet | Fix | Auto-recharge has no preview / worked example. | P1 | S |  | Open |
| 700 | Storefront · Checkout · Marketplaces · Orders | Wallet | /wallet | Fix | currency() only USD — multi-currency wallets unsupported. | P1 | M |  | Open |
| 701 | Storefront · Checkout · Marketplaces · Orders | Wallet | /wallet | Fix | No download / export of wallet statements. | P0 | M |  | Open |
| 702 | Storefront · Checkout · Marketplaces · Orders | Wallet | /wallet | Fix | No 1099-K / VAT invoice handling. | P1 | L |  | Open |
| 703 | Storefront · Checkout · Marketplaces · Orders | Wallet | /wallet | Fix | Two sources of truth for default payment method. | P2 | S |  | Open |
| 704 | Storefront · Checkout · Marketplaces · Orders | Wallet | /wallet | Fix | Auto-recharge Save button buried at end. | P2 | S |  | Open |
| 705 | Storefront · Checkout · Marketplaces · Orders | Wallet | /wallet | Fix | No confirmation before deleting payment method. | P2 | S |  | Open |
| 706 | Storefront · Checkout · Marketplaces · Orders | Wallet | /wallet | Fix | Low-balance threshold hardcoded (1000 cents). | P2 | S |  | Open |
| 707 | Storefront · Checkout · Marketplaces · Orders | Wallet | /wallet | Polish | Balance hero crowded by quickadd row. | P2 | S |  | Open |
| 708 | Storefront · Checkout · Marketplaces · Orders | Wallet | /wallet | Polish | Quick-add editor inputs too small. | P2 | S |  | Open |
| 709 | Storefront · Checkout · Marketplaces · Orders | Wallet | /wallet | Polish | Bank accounts show credit card icon — use bank icon. | P2 | S |  | Open |
| 710 | Storefront · Checkout · Marketplaces · Orders | Wallet | /wallet | Polish | "Add funds" CTA duplicated 3 times. | P2 | S |  | Open |
| 711 | Storefront · Checkout · Marketplaces · Orders | Wallet | /wallet | Polish | Sparkline of balance over time. | P2 | M |  | Open |
| 712 | Storefront · Checkout · Marketplaces · Orders | Wallet | /wallet | Polish | Replace two number inputs with sentence ("When below ___, top up by ___"). | P2 | S |  | Open |
| 713 | Storefront · Checkout · Marketplaces · Orders | Wallet | /wallet | Polish | Mobile responsiveness for auto-recharge row. | P2 | S |  | Open |
| 714 | Storefront · Checkout · Marketplaces · Orders | Wallet | /wallet | Feature | Wallet transaction ledger with filters + CSV export. | P0 | M |  | Open |
| 715 | Storefront · Checkout · Marketplaces · Orders | Wallet | /wallet | Feature | Payout forecasting based on order velocity. | P1 | L |  | Open |
| 716 | Storefront · Checkout · Marketplaces · Orders | Wallet | /wallet | Feature | Instant payout option (1–2% fee). | P1 | XL |  | Open |
| 717 | Storefront · Checkout · Marketplaces · Orders | Wallet | /wallet | Feature | Accounting integrations (QuickBooks, Xero, Wave). | P2 | L |  | Open |
| 718 | Storefront · Checkout · Marketplaces · Orders | Wallet | /wallet | Feature | Monthly branded PDF statement. | P0 | M |  | Open |
| 719 | Storefront · Checkout · Marketplaces · Orders | Wallet | /wallet | Feature | 1099-K tax doc generation. | P1 | L |  | Open |
| 720 | Storefront · Checkout · Marketplaces · Orders | Wallet | /wallet | Feature | Multi-currency wallets for international sellers. | P2 | XL |  | Open |
| 721 | Storefront · Checkout · Marketplaces · Orders | Wallet | /wallet | Feature | Wallet email/push alerts on low balance. | P1 | S |  | Open |
| 722 | Storefront · Checkout · Marketplaces · Orders | Earnings | /earnings | Fix | CRITICAL: Etsy-only — Shopify sellers see nothing. | P0 | L |  | Open |
| 723 | Storefront · Checkout · Marketplaces · Orders | Earnings | /earnings | Fix | No TikTok earnings. | P1 | L |  | Open |
| 724 | Storefront · Checkout · Marketplaces · Orders | Earnings | /earnings | Fix | Single shop selector — no "All shops" aggregate. | P0 | M |  | Open |
| 725 | Storefront · Checkout · Marketplaces · Orders | Earnings | /earnings | Fix | CSV export omits currency column header. | P1 | S |  | Open |
| 726 | Storefront · Checkout · Marketplaces · Orders | Earnings | /earnings | Fix | Pagination resets to page 0 on filter change. | P1 | S |  | Open |
| 727 | Storefront · Checkout · Marketplaces · Orders | Earnings | /earnings | Fix | No quick-picker for common date ranges. | P1 | S |  | Open |
| 728 | Storefront · Checkout · Marketplaces · Orders | Earnings | /earnings | Fix | Refresh vs Sync now distinction unclear. | P1 | S |  | Open |
| 729 | Storefront · Checkout · Marketplaces · Orders | Earnings | /earnings | Fix | Raw e.message in error display. | P2 | S |  | Open |
| 730 | Storefront · Checkout · Marketplaces · Orders | Earnings | /earnings | Fix | Last-sync error tucked below meta line. | P1 | S |  | Open |
| 731 | Storefront · Checkout · Marketplaces · Orders | Earnings | /earnings | Fix | Ledger shows raw reference_type:reference_id chip. | P1 | M |  | Open |
| 732 | Storefront · Checkout · Marketplaces · Orders | Earnings | /earnings | Polish | KPI cards lack period-over-period delta. | P2 | S |  | Open |
| 733 | Storefront · Checkout · Marketplaces · Orders | Earnings | /earnings | Polish | Clicking "Fees" category should filter the table. | P2 | S |  | Open |
| 734 | Storefront · Checkout · Marketplaces · Orders | Earnings | /earnings | Polish | Search input has no clear button. | P2 | S |  | Open |
| 735 | Storefront · Checkout · Marketplaces · Orders | Earnings | /earnings | Polish | Sort menu arrows subtle. | P2 | S |  | Open |
| 736 | Storefront · Checkout · Marketplaces · Orders | Earnings | /earnings | Polish | Excellent zero-state — use as template elsewhere. | P2 | S |  | Open |
| 737 | Storefront · Checkout · Marketplaces · Orders | Earnings | /earnings | Polish | "Last synced 2 min ago" status dot is excellent — keep. | P2 | S |  | Open |
| 738 | Storefront · Checkout · Marketplaces · Orders | Earnings | /earnings | Polish | Pagination missing "Show X per page" picker. | P2 | S |  | Open |
| 739 | Storefront · Checkout · Marketplaces · Orders | Earnings | /earnings | Polish | Mobile: KPI grid stacks awkwardly. | P2 | S |  | Open |
| 740 | Storefront · Checkout · Marketplaces · Orders | Earnings | /earnings | Feature | Multi-platform earnings aggregation (Etsy + Shopify + TikTok + samples). | P0 | XL |  | Open |
| 741 | Storefront · Checkout · Marketplaces · Orders | Earnings | /earnings | Feature | True profit calc (revenue − Completeful cost − marketplace fees). | P0 | L |  | Open |
| 742 | Storefront · Checkout · Marketplaces · Orders | Earnings | /earnings | Feature | Charts (bar by day, pie by category). | P1 | M |  | Open |
| 743 | Storefront · Checkout · Marketplaces · Orders | Earnings | /earnings | Feature | Year-over-year comparison view. | P1 | M |  | Open |
| 744 | Storefront · Checkout · Marketplaces · Orders | Earnings | /earnings | Feature | Tax-ready quarterly exports. | P0 | L |  | Open |
| 745 | Storefront · Checkout · Marketplaces · Orders | Earnings | /earnings | Feature | Top products by earnings widget. | P1 | M |  | Open |
| 746 | Storefront · Checkout · Marketplaces · Orders | Earnings | /earnings | Feature | Forecasted earnings (trailing 30/90). | P2 | L |  | Open |
| 747 | Storefront · Checkout · Marketplaces · Orders | Earnings | /earnings | Feature | Monthly earnings goal with progress meter. | P3 | M |  | Open |
| 748 | Account · Community · Support · Premium | Account | /profile | Fix | Add tab navigation — 1070 LOC stacked. | P0 | M |  | Open |
| 749 | Account · Community · Support · Premium | Account | /profile | Fix | MFA admin-only — non-admins need TOTP/passkey. | P0 | M |  | Open |
| 750 | Account · Community · Support · Premium | Account | /profile | Fix | No account deletion / deactivation — GDPR/CCPA risk. | P0 | M |  | Open |
| 751 | Account · Community · Support · Premium | Account | /profile | Fix | No email change flow — profile.email read-only. | P1 | M |  | Open |
| 752 | Account · Community · Support · Premium | Account | /profile | Fix | Referral link overflow on narrow viewports. | P2 | S |  | Open |
| 753 | Account · Community · Support · Premium | Account | /profile | Fix | ShipStation password-manager workaround is fragile. | P1 | M |  | Open |
| 754 | Account · Community · Support · Premium | Account | /profile | Fix | confirm("Delete this font?") native dialog. | P2 | S |  | Open |
| 755 | Account · Community · Support · Premium | Account | /profile | Fix | "Disabled by admin" email-prefs copy unclear. | P2 | S |  | Open |
| 756 | Account · Community · Support · Premium | Account | /profile | Fix | Self-switch user_type with no warning. | P1 | S |  | Open |
| 757 | Account · Community · Support · Premium | Account | /profile | Fix | ShipStation timestamp uses absolute time, not relative. | P2 | S |  | Open |
| 758 | Account · Community · Support · Premium | Account | /profile | Polish | Add avatar upload (users.avatar_url referenced elsewhere). | P1 | M |  | Open |
| 759 | Account · Community · Support · Premium | Account | /profile | Polish | Tenure badge near hero. | P2 | S |  | Open |
| 760 | Account · Community · Support · Premium | Account | /profile | Polish | Inline single-field saves instead of bulk Edit/Save. | P2 | M |  | Open |
| 761 | Account · Community · Support · Premium | Account | /profile | Polish | Custom fonts table: add preview row with alphabet rendered. | P2 | S |  | Open |
| 762 | Account · Community · Support · Premium | Account | /profile | Polish | ShipStation "Test connection" button distinct from save. | P1 | S |  | Open |
| 763 | Account · Community · Support · Premium | Account | /profile | Polish | Referral: QR code + social share sheet. | P1 | S |  | Open |
| 764 | Account · Community · Support · Premium | Account | /profile | Polish | Persist collapsible-section state in localStorage. | P2 | S |  | Open |
| 765 | Account · Community · Support · Premium | Account | /profile | Polish | Role badge tooltip explaining what role means. | P2 | S |  | Open |
| 766 | Account · Community · Support · Premium | Account | /profile | Polish | Unified "Connected apps" section — Shopify/Etsy/Stripe/ShipStation. | P1 | M |  | Open |
| 767 | Account · Community · Support · Premium | Account | /profile | Feature | Sessions & devices panel with "Sign out everywhere". | P0 | M |  | Open |
| 768 | Account · Community · Support · Premium | Account | /profile | Feature | Login alerts (new device email). | P1 | M |  | Open |
| 769 | Account · Community · Support · Premium | Account | /profile | Feature | 2FA backup codes generator + secure download. | P0 | M |  | Open |
| 770 | Account · Community · Support · Premium | Account | /profile | Feature | GDPR data export ZIP. | P1 | L |  | Open |
| 771 | Account · Community · Support · Premium | Account | /profile | Feature | API access audit log. | P2 | M |  | Open |
| 772 | Account · Community · Support · Premium | Account | /profile | Feature | Pre-screen warning on user_type switch. | P1 | S |  | Open |
| 773 | Account · Community · Support · Premium | Account | /profile | Feature | Secondary recovery email. | P2 | S |  | Open |
| 774 | Account · Community · Support · Premium | Account | /profile | Feature | Theme + locale prefs (currency, date format, timezone). | P1 | M |  | Open |
| 775 | Account · Community · Support · Premium | Community Landing | /community | Fix | CRITICAL: Landing never links to GroupFeed/Events/Post that already work. | P0 | M |  | Open |
| 776 | Account · Community · Support · Premium | Community Landing | /community | Fix | No waitlist / email-capture despite "Coming Soon". | P0 | S |  | Open |
| 777 | Account · Community · Support · Premium | Community Landing | /community | Fix | No way to preview groups (even read-only). | P1 | M |  | Open |
| 778 | Account · Community · Support · Premium | Community Landing | /community | Fix | Title is "Join a community" but no Join action. | P1 | S |  | Open |
| 779 | Account · Community · Support · Premium | Community Landing | /community | Fix | Animated SVG circles ignore prefers-reduced-motion. | P2 | S |  | Open |
| 780 | Account · Community · Support · Premium | Community Landing | /community | Fix | Three feature teasers static with no link to functionality. | P1 | S |  | Open |
| 781 | Account · Community · Support · Premium | Community Landing | /community | Fix | No countdown / target launch date. | P2 | S |  | Open |
| 782 | Account · Community · Support · Premium | Community Landing | /community | Fix | Inline raw SVG icons — codebase uses lucide-react. | P2 | S |  | Open |
| 783 | Account · Community · Support · Premium | Community Landing | /community | Polish | Replace placeholder with real landing (trending groups, events, members). | P1 | L |  | Open |
| 784 | Account · Community · Support · Premium | Community Landing | /community | Polish | Social proof strip (members, posts/week, events scheduled). | P1 | S |  | Open |
| 785 | Account · Community · Support · Premium | Community Landing | /community | Polish | Group cards with member counts + trending post previews. | P1 | M |  | Open |
| 786 | Account · Community · Support · Premium | Community Landing | /community | Polish | "What's happening" featured posts strip. | P2 | M |  | Open |
| 787 | Account · Community · Support · Premium | Community Landing | /community | Polish | Mentor / "Build in public" spotlight slot. | P2 | M |  | Open |
| 788 | Account · Community · Support · Premium | Community Landing | /community | Polish | Pulse-glow on "Coming Soon" badge dot. | P3 | S |  | Open |
| 789 | Account · Community · Support · Premium | Community Landing | /community | Polish | Seeded testimonials. | P2 | S |  | Open |
| 790 | Account · Community · Support · Premium | Community Landing | /community | Polish | Verify SVG hero scaling on mobile. | P2 | S |  | Open |
| 791 | Account · Community · Support · Premium | Community Landing | /community | Feature | Group directory with categories + activity filters + Join. | P0 | L |  | Open |
| 792 | Account · Community · Support · Premium | Community Landing | /community | Feature | Member directory. | P1 | M |  | Open |
| 793 | Account · Community · Support · Premium | Community Landing | /community | Feature | Cross-community search. | P1 | M |  | Open |
| 794 | Account · Community · Support · Premium | Community Landing | /community | Feature | Weekly digest email opt-in. | P1 | M |  | Open |
| 795 | Account · Community · Support · Premium | Community Landing | /community | Feature | Mentorship matching. | P2 | L |  | Open |
| 796 | Account · Community · Support · Premium | Community Landing | /community | Feature | Build-in-public threads. | P2 | M |  | Open |
| 797 | Account · Community · Support · Premium | Community Landing | /community | Feature | Achievement / badge system. | P1 | M |  | Open |
| 798 | Account · Community · Support · Premium | Community Landing | /community | Feature | "Trending designs" share feed. | P2 | L |  | Open |
| 799 | Account · Community · Support · Premium | Group Feed | /community/groups/:groupId | Fix | Inline-style avalanche — move to CSS classes. | P1 | M |  | Open |
| 800 | Account · Community · Support · Premium | Group Feed | /community/groups/:groupId | Fix | window.prompt for Report + window.confirm — replace with modals. | P1 | M |  | Open |
| 801 | Account · Community · Support · Premium | Group Feed | /community/groups/:groupId | Fix | No pagination — fetchGroupPosts hard-capped at 50. | P0 | M |  | Open |
| 802 | Account · Community · Support · Premium | Group Feed | /community/groups/:groupId | Fix | No sort options (Top / Hot / New / Unanswered). | P1 | M |  | Open |
| 803 | Account · Community · Support · Premium | Group Feed | /community/groups/:groupId | Fix | No rollback on create-post failure after optimistic insertion. | P2 | S |  | Open |
| 804 | Account · Community · Support · Premium | Group Feed | /community/groups/:groupId | Fix | Search button has dead conditional (both branches identical). | P2 | S |  | Open |
| 805 | Account · Community · Support · Premium | Group Feed | /community/groups/:groupId | Fix | Search results lose like/count state; like buttons no-op. | P1 | M |  | Open |
| 806 | Account · Community · Support · Premium | Group Feed | /community/groups/:groupId | Fix | @mentions rendered as <span>, not links to profile. | P1 | S |  | Open |
| 807 | Account · Community · Support · Premium | Group Feed | /community/groups/:groupId | Fix | Pin/Lock toggles run duplicated sort logic. | P2 | S |  | Open |
| 808 | Account · Community · Support · Premium | Group Feed | /community/groups/:groupId | Fix | No member count / online indicator on group header. | P2 | S |  | Open |
| 809 | Account · Community · Support · Premium | Group Feed | /community/groups/:groupId | Polish | Rich-media post composer (image / embed / poll). | P0 | L |  | Open |
| 810 | Account · Community · Support · Premium | Group Feed | /community/groups/:groupId | Polish | Sticky tab bar on scroll. | P2 | S |  | Open |
| 811 | Account · Community · Support · Premium | Group Feed | /community/groups/:groupId | Polish | Post cards lack hover state + author avatar. | P1 | S |  | Open |
| 812 | Account · Community · Support · Premium | Group Feed | /community/groups/:groupId | Polish | Comments count + last-reply timestamp on post cards. | P1 | S |  | Open |
| 813 | Account · Community · Support · Premium | Group Feed | /community/groups/:groupId | Polish | Leaderboard: add change indicator (▲ +3 this week) + avatar. | P1 | M |  | Open |
| 814 | Account · Community · Support · Premium | Group Feed | /community/groups/:groupId | Polish | Event create form: 2-col grid, grouped date/time, recurring toggle. | P1 | M |  | Open |
| 815 | Account · Community · Support · Premium | Group Feed | /community/groups/:groupId | Polish | About tab: moderator list + rules acceptance. | P1 | M |  | Open |
| 816 | Account · Community · Support · Premium | Group Feed | /community/groups/:groupId | Polish | Section "(Locked)" suffix — use icon. | P2 | S |  | Open |
| 817 | Account · Community · Support · Premium | Group Feed | /community/groups/:groupId | Polish | Add Day/Month/Year leaderboard windows. | P1 | S |  | Open |
| 818 | Account · Community · Support · Premium | Group Feed | /community/groups/:groupId | Feature | Emoji reactions beyond Like (🔥💡❤️🎉). | P0 | M |  | Open |
| 819 | Account · Community · Support · Premium | Group Feed | /community/groups/:groupId | Feature | Threaded replies (1-level). | P1 | L |  | Open |
| 820 | Account · Community · Support · Premium | Group Feed | /community/groups/:groupId | Feature | Polls in posts. | P1 | L |  | Open |
| 821 | Account · Community · Support · Premium | Group Feed | /community/groups/:groupId | Feature | @channel / @section mentions + push. | P1 | M |  | Open |
| 822 | Account · Community · Support · Premium | Group Feed | /community/groups/:groupId | Feature | Save / bookmark posts. | P2 | S |  | Open |
| 823 | Account · Community · Support · Premium | Group Feed | /community/groups/:groupId | Feature | Auto "best of week" digest pinned. | P2 | M |  | Open |
| 824 | Account · Community · Support · Premium | Group Feed | /community/groups/:groupId | Feature | Trending sort (likes/comments velocity). | P1 | M |  | Open |
| 825 | Account · Community · Support · Premium | Group Feed | /community/groups/:groupId | Feature | Badges + ranks inline with author name. | P1 | M |  | Open |
| 826 | Account · Community · Support · Premium | Post Detail | /community/posts/:postId | Fix | Title literally "Post: <uuid>" — show excerpt for SEO + breadcrumbs. | P0 | S |  | Open |
| 827 | Account · Community · Support · Premium | Post Detail | /community/posts/:postId | Fix | No deep-link scroll to specific comment. | P1 | S |  | Open |
| 828 | Account · Community · Support · Premium | Post Detail | /community/posts/:postId | Fix | Deleted-post restore is only Delete label swap — clearer messaging. | P1 | S |  | Open |
| 829 | Account · Community · Support · Premium | Post Detail | /community/posts/:postId | Fix | Move-to-section uses window.confirm. | P2 | S |  | Open |
| 830 | Account · Community · Support · Premium | Post Detail | /community/posts/:postId | Fix | Section dropdown shows "(Locked)" but doesn't prevent selection. | P2 | S |  | Open |
| 831 | Account · Community · Support · Premium | Post Detail | /community/posts/:postId | Fix | No parent_comment_id UI even if backend supports threading. | P1 | M |  | Open |
| 832 | Account · Community · Support · Premium | Post Detail | /community/posts/:postId | Fix | Generic "deleted post" message — show "Deleted by moderator on X". | P2 | S |  | Open |
| 833 | Account · Community · Support · Premium | Post Detail | /community/posts/:postId | Fix | Comment Like has no debounce. | P2 | S |  | Open |
| 834 | Account · Community · Support · Premium | Post Detail | /community/posts/:postId | Fix | No profile hovercard on author_name. | P1 | M |  | Open |
| 835 | Account · Community · Support · Premium | Post Detail | /community/posts/:postId | Fix | URL has UUID, no slug — SEO unfriendly. | P2 | M |  | Open |
| 836 | Account · Community · Support · Premium | Post Detail | /community/posts/:postId | Polish | Reorder: reply composer below comments (mirror Reddit/SO). | P1 | S |  | Open |
| 837 | Account · Community · Support · Premium | Post Detail | /community/posts/:postId | Polish | Show like/comment counts in header. | P2 | S |  | Open |
| 838 | Account · Community · Support · Premium | Post Detail | /community/posts/:postId | Polish | Quote-reply on comments. | P1 | M |  | Open |
| 839 | Account · Community · Support · Premium | Post Detail | /community/posts/:postId | Polish | Edit post/comment within X minutes — no edit UI exists. | P0 | M |  | Open |
| 840 | Account · Community · Support · Premium | Post Detail | /community/posts/:postId | Polish | Markdown preview in composer. | P1 | S |  | Open |
| 841 | Account · Community · Support · Premium | Post Detail | /community/posts/:postId | Polish | Copy permalink button. | P2 | S |  | Open |
| 842 | Account · Community · Support · Premium | Post Detail | /community/posts/:postId | Polish | Time tooltip (relative + absolute on hover). | P2 | S |  | Open |
| 843 | Account · Community · Support · Premium | Post Detail | /community/posts/:postId | Polish | Auto-linkify URLs. | P2 | S |  | Open |
| 844 | Account · Community · Support · Premium | Post Detail | /community/posts/:postId | Feature | Subscribe to thread. | P1 | M |  | Open |
| 845 | Account · Community · Support · Premium | Post Detail | /community/posts/:postId | Feature | Best/accepted answer mark. | P1 | M |  | Open |
| 846 | Account · Community · Support · Premium | Post Detail | /community/posts/:postId | Feature | Share to X/LinkedIn with auto-image. | P2 | M |  | Open |
| 847 | Account · Community · Support · Premium | Post Detail | /community/posts/:postId | Feature | AI thread summary (TL;DR of 47 comments). | P2 | L |  | Open |
| 848 | Account · Community · Support · Premium | Post Detail | /community/posts/:postId | Feature | Translate post/comment via LLM. | P2 | M |  | Open |
| 849 | Account · Community · Support · Premium | Post Detail | /community/posts/:postId | Feature | Award/tip system — gift leaderboard points. | P2 | M |  | Open |
| 850 | Account · Community · Support · Premium | Post Detail | /community/posts/:postId | Feature | Embed designs/products inline. | P1 | L |  | Open |
| 851 | Account · Community · Support · Premium | Post Detail | /community/posts/:postId | Feature | Admin moderation queue page surfacing reports. | P0 | M |  | Open |
| 852 | Account · Community · Support · Premium | Events Overview | /community/events | Fix | Month grid hand-rolled with inline styles + no keyboard nav. | P1 | M |  | Open |
| 853 | Account · Community · Support · Premium | Events Overview | /community/events | Fix | limit:100 caps future horizon. | P1 | S |  | Open |
| 854 | Account · Community · Support · Premium | Events Overview | /community/events | Fix | No week view. | P2 | M |  | Open |
| 855 | Account · Community · Support · Premium | Events Overview | /community/events | Fix | No filter by group in aggregate view. | P1 | S |  | Open |
| 856 | Account · Community · Support · Premium | Events Overview | /community/events | Fix | No timezone display. | P1 | M |  | Open |
| 857 | Account · Community · Support · Premium | Events Overview | /community/events | Fix | "+N more" not clickable. | P2 | S |  | Open |
| 858 | Account · Community · Support · Premium | Events Overview | /community/events | Fix | No search by event title/description. | P2 | S |  | Open |
| 859 | Account · Community · Support · Premium | Events Overview | /community/events | Fix | Cancelled events render the same as active. | P2 | S |  | Open |
| 860 | Account · Community · Support · Premium | Events Overview | /community/events | Fix | Day-of-week labels hardcoded English. | P3 | S |  | Open |
| 861 | Account · Community · Support · Premium | Events Overview | /community/events | Fix | Inline borderRight per cell fragile if calendar <7 cols. | P2 | S |  | Open |
| 862 | Account · Community · Support · Premium | Events Overview | /community/events | Polish | "Today" button + arrow-key navigation. | P1 | S |  | Open |
| 863 | Account · Community · Support · Premium | Events Overview | /community/events | Polish | Color-code by group with legend. | P1 | M |  | Open |
| 864 | Account · Community · Support · Premium | Events Overview | /community/events | Polish | iCal / Google Calendar export. | P1 | M |  | Open |
| 865 | Account · Community · Support · Premium | Events Overview | /community/events | Polish | Hover card with description + RSVP. | P2 | M |  | Open |
| 866 | Account · Community · Support · Premium | Events Overview | /community/events | Polish | Density toggle. | P3 | S |  | Open |
| 867 | Account · Community · Support · Premium | Events Overview | /community/events | Polish | My events filter (RSVPed only). | P1 | S |  | Open |
| 868 | Account · Community · Support · Premium | Events Overview | /community/events | Polish | Day cell hover state. | P2 | S |  | Open |
| 869 | Account · Community · Support · Premium | Events Overview | /community/events | Polish | Empty-state illustration. | P2 | S |  | Open |
| 870 | Account · Community · Support · Premium | Events Overview | /community/events | Feature | Recurring events. | P1 | L |  | Open |
| 871 | Account · Community · Support · Premium | Events Overview | /community/events | Feature | External calendar subscribe (.ics feed). | P1 | M |  | Open |
| 872 | Account · Community · Support · Premium | Events Overview | /community/events | Feature | User-configurable event reminders. | P2 | M |  | Open |
| 873 | Account · Community · Support · Premium | Events Overview | /community/events | Feature | Featured / pinned event carousel. | P2 | M |  | Open |
| 874 | Account · Community · Support · Premium | Events Overview | /community/events | Feature | Past events archive with recordings. | P1 | M |  | Open |
| 875 | Account · Community · Support · Premium | Events Overview | /community/events | Feature | In-event chat / Q&A. | P2 | L |  | Open |
| 876 | Account · Community · Support · Premium | Events Overview | /community/events | Feature | Promo/preview image per event. | P1 | M |  | Open |
| 877 | Account · Community · Support · Premium | Events Overview | /community/events | Feature | Capacity limits + waitlist. | P2 | M |  | Open |
| 878 | Account · Community · Support · Premium | Event Detail | /community/events/:eventId | Fix | Admin tools only Cancel — no edit (title/time/desc/location/URL). | P0 | M |  | Open |
| 879 | Account · Community · Support · Premium | Event Detail | /community/events/:eventId | Fix | Cancel uses window.confirm. | P2 | S |  | Open |
| 880 | Account · Community · Support · Premium | Event Detail | /community/events/:eventId | Fix | No reschedule. | P1 | M |  | Open |
| 881 | Account · Community · Support · Premium | Event Detail | /community/events/:eventId | Fix | Attendees listed as plain text with raw UUID fallback. | P1 | S |  | Open |
| 882 | Account · Community · Support · Premium | Event Detail | /community/events/:eventId | Fix | Cancelled events: no banner explaining "cancelled on X". | P1 | S |  | Open |
| 883 | Account · Community · Support · Premium | Event Detail | /community/events/:eventId | Fix | clearRsvp removes RSVP silently. | P2 | S |  | Open |
| 884 | Account · Community · Support · Premium | Event Detail | /community/events/:eventId | Fix | No ICS download button. | P1 | S |  | Open |
| 885 | Account · Community · Support · Premium | Event Detail | /community/events/:eventId | Fix | No "add to calendar" dropdown. | P1 | M |  | Open |
| 886 | Account · Community · Support · Premium | Event Detail | /community/events/:eventId | Fix | No copy-link / share button. | P2 | S |  | Open |
| 887 | Account · Community · Support · Premium | Event Detail | /community/events/:eventId | Fix | Markdown rendered without components override — mentions break. | P2 | S |  | Open |
| 888 | Account · Community · Support · Premium | Event Detail | /community/events/:eventId | Polish | Countdown timer ("Starts in 3h 14m"). | P1 | S |  | Open |
| 889 | Account · Community · Support · Premium | Event Detail | /community/events/:eventId | Polish | Cover image for event. | P0 | M |  | Open |
| 890 | Account · Community · Support · Premium | Event Detail | /community/events/:eventId | Polish | Speaker/host card. | P1 | M |  | Open |
| 891 | Account · Community · Support · Premium | Event Detail | /community/events/:eventId | Polish | Attendee avatars with overflow "+N more". | P1 | S |  | Open |
| 892 | Account · Community · Support · Premium | Event Detail | /community/events/:eventId | Polish | Time in user tz + event tz when differ. | P1 | M |  | Open |
| 893 | Account · Community · Support · Premium | Event Detail | /community/events/:eventId | Polish | Join button auto-enables 10 min before start. | P1 | M |  | Open |
| 894 | Account · Community · Support · Premium | Event Detail | /community/events/:eventId | Polish | Event discussion thread. | P2 | L |  | Open |
| 895 | Account · Community · Support · Premium | Event Detail | /community/events/:eventId | Polish | Past-event view with recording + slides. | P2 | M |  | Open |
| 896 | Account · Community · Support · Premium | Event Detail | /community/events/:eventId | Feature | In-app video meeting embed. | P3 | L |  | Open |
| 897 | Account · Community · Support · Premium | Event Detail | /community/events/:eventId | Feature | Calendar invite email on RSVP. | P0 | M |  | Open |
| 898 | Account · Community · Support · Premium | Event Detail | /community/events/:eventId | Feature | Live Q&A + raise hand. | P2 | L |  | Open |
| 899 | Account · Community · Support · Premium | Event Detail | /community/events/:eventId | Feature | Post-event survey auto-sent. | P2 | M |  | Open |
| 900 | Account · Community · Support · Premium | Event Detail | /community/events/:eventId | Feature | Waitlist when capacity set. | P2 | M |  | Open |
| 901 | Account · Community · Support · Premium | Event Detail | /community/events/:eventId | Feature | Co-hosts. | P2 | M |  | Open |
| 902 | Account · Community · Support · Premium | Event Detail | /community/events/:eventId | Feature | Speaker spotlight surfacing products/designs. | P2 | M |  | Open |
| 903 | Account · Community · Support · Premium | Event Detail | /community/events/:eventId | Feature | Resource attachments. | P1 | M |  | Open |
| 904 | Account · Community · Support · Premium | Commissions | /commissions | Fix | CRITICAL: Designer tab non-functional — hasCommissions=false constant; populated branch unreachable. | P0 | M |  | Open |
| 905 | Account · Community · Support · Premium | Commissions | /commissions | Fix | "20%" rate hardcoded — needs config/API. | P0 | S |  | Open |
| 906 | Account · Community · Support · Premium | Commissions | /commissions | Fix | Designer empty state offers no concrete next step. | P1 | S |  | Open |
| 907 | Account · Community · Support · Premium | Commissions | /commissions | Fix | Tier rates not pulled into Designer tab. | P1 | S |  | Open |
| 908 | Account · Community · Support · Premium | Commissions | /commissions | Fix | No payout schedule explanation. | P0 | M |  | Open |
| 909 | Account · Community · Support · Premium | Commissions | /commissions | Fix | No payout method UI. | P0 | M |  | Open |
| 910 | Account · Community · Support · Premium | Commissions | /commissions | Fix | Tax forms / W-9 / 1099 missing. | P0 | M |  | Open |
| 911 | Account · Community · Support · Premium | Commissions | /commissions | Fix | referral_code duplicated with AccountPage. | P2 | S |  | Open |
| 912 | Account · Community · Support · Premium | Commissions | /commissions | Fix | Tab state not URL-persisted. | P2 | S |  | Open |
| 913 | Account · Community · Support · Premium | Commissions | /commissions | Fix | Dead-branch icons (Coins/ShoppingBag) imported. | P3 | S |  | Open |
| 914 | Account · Community · Support · Premium | Commissions | /commissions | Polish | Earnings-over-time sparkline. | P0 | M |  | Open |
| 915 | Account · Community · Support · Premium | Commissions | /commissions | Polish | Top-earners leaderboard for social proof. | P1 | M |  | Open |
| 916 | Account · Community · Support · Premium | Commissions | /commissions | Polish | Referral analytics — clicks / signups / conversion by UTM. | P0 | M |  | Open |
| 917 | Account · Community · Support · Premium | Commissions | /commissions | Polish | Automated marketing kit download (banners, social copy, email templates). | P0 | M |  | Open |
| 918 | Account · Community · Support · Premium | Commissions | /commissions | Polish | Payouts filter: add seller-name search. | P1 | S |  | Open |
| 919 | Account · Community · Support · Premium | Commissions | /commissions | Polish | KPI deltas vs last month. | P1 | M |  | Open |
| 920 | Account · Community · Support · Premium | Commissions | /commissions | Polish | Tooltip "Link copied" when navigator.share unavailable. | P2 | S |  | Open |
| 921 | Account · Community · Support · Premium | Commissions | /commissions | Polish | CSV/PDF export of payouts. | P1 | M |  | Open |
| 922 | Account · Community · Support · Premium | Commissions | /commissions | Polish | Tier filter (active vs churned referrals). | P2 | S |  | Open |
| 923 | Account · Community · Support · Premium | Commissions | /commissions | Polish | Port Referrals empty-state demo to Designer tab. | P1 | M |  | Open |
| 924 | Account · Community · Support · Premium | Commissions | /commissions | Feature | ROI calculator widget. | P1 | M |  | Open |
| 925 | Account · Community · Support · Premium | Commissions | /commissions | Feature | Performance-based bonus tiers with progress bar. | P1 | M |  | Open |
| 926 | Account · Community · Support · Premium | Commissions | /commissions | Feature | One-click social-share templates (Twitter card, IG story, LinkedIn). | P0 | L |  | Open |
| 927 | Account · Community · Support · Premium | Commissions | /commissions | Feature | Monthly leaderboard with prize pool. | P1 | M |  | Open |
| 928 | Account · Community · Support · Premium | Commissions | /commissions | Feature | Custom landing-page builder at completeful.com/r/{code}. | P2 | L |  | Open |
| 929 | Account · Community · Support · Premium | Commissions | /commissions | Feature | Email referral tool from inside the app. | P1 | M |  | Open |
| 930 | Account · Community · Support · Premium | Commissions | /commissions | Feature | Designer royalties tab. | P2 | L |  | Open |
| 931 | Account · Community · Support · Premium | Commissions | /commissions | Feature | Withdrawal / cashout UI. | P0 | L |  | Open |
| 932 | Account · Community · Support · Premium | Support | /support, /help | Fix | No search across tickets. | P1 | M |  | Open |
| 933 | Account · Community · Support · Premium | Support | /support, /help | Fix | No filter by category. | P2 | S |  | Open |
| 934 | Account · Community · Support · Premium | Support | /support, /help | Fix | No priority field on creation. | P0 | S |  | Open |
| 935 | Account · Community · Support · Premium | Support | /support, /help | Fix | AI response double-fetches (temp + openThread refresh). | P2 | S |  | Open |
| 936 | Account · Community · Support · Premium | Support | /support, /help | Fix | Attachments image-only — need screen recordings / PDFs / CSV. | P1 | S |  | Open |
| 937 | Account · Community · Support · Premium | Support | /support, /help | Fix | Send-on-Enter but no Shift+Enter newline hint. | P2 | S |  | Open |
| 938 | Account · Community · Support · Premium | Support | /support, /help | Fix | relativeTime not TZ-aware. | P3 | S |  | Open |
| 939 | Account · Community · Support · Premium | Support | /support, /help | Fix | No way to close a ticket from UI. | P1 | S |  | Open |
| 940 | Account · Community · Support · Premium | Support | /support, /help | Fix | No CSAT rating on closed. | P1 | S |  | Open |
| 941 | Account · Community · Support · Premium | Support | /support, /help | Fix | Error banner uses inline style={}. | P2 | S |  | Open |
| 942 | Account · Community · Support · Premium | Support | /support, /help | Polish | AI as first responder before opening ticket. | P0 | M |  | Open |
| 943 | Account · Community · Support · Premium | Support | /support, /help | Polish | Embedded help article suggestions by subject keywords. | P0 | M |  | Open |
| 944 | Account · Community · Support · Premium | Support | /support, /help | Polish | SLA badge ("We typically respond within 4 hours"). | P0 | S |  | Open |
| 945 | Account · Community · Support · Premium | Support | /support, /help | Polish | Queue position indicator on submitted tickets. | P2 | S |  | Open |
| 946 | Account · Community · Support · Premium | Support | /support, /help | Polish | Typing indicator from admin/AI. | P2 | M |  | Open |
| 947 | Account · Community · Support · Premium | Support | /support, /help | Polish | Preserve scroll on attachment-only sends. | P2 | S |  | Open |
| 948 | Account · Community · Support · Premium | Support | /support, /help | Polish | Category visual cards instead of dropdown. | P2 | S |  | Open |
| 949 | Account · Community · Support · Premium | Support | /support, /help | Polish | Attachment preview in composer. | P2 | S |  | Open |
| 950 | Account · Community · Support · Premium | Support | /support, /help | Polish | Markdown rendering in messages. | P1 | S |  | Open |
| 951 | Account · Community · Support · Premium | Support | /support, /help | Feature | Priority routing for premium users. | P0 | M |  | Open |
| 952 | Account · Community · Support · Premium | Support | /support, /help | Feature | Intelligent LLM-based auto-categorization. | P0 | M |  | Open |
| 953 | Account · Community · Support · Premium | Support | /support, /help | Feature | Embedded video walkthroughs. | P1 | M |  | Open |
| 954 | Account · Community · Support · Premium | Support | /support, /help | Feature | Self-serve troubleshooter wizard. | P1 | L |  | Open |
| 955 | Account · Community · Support · Premium | Support | /support, /help | Feature | Knowledge base search inside the page. | P0 | M |  | Open |
| 956 | Account · Community · Support · Premium | Support | /support, /help | Feature | AI thread summary when assigned to admin. | P1 | M |  | Open |
| 957 | Account · Community · Support · Premium | Support | /support, /help | Feature | Screen-recording capture for bug reports. | P2 | L |  | Open |
| 958 | Account · Community · Support · Premium | Support | /support, /help | Feature | Re-open closed ticket with one click + reason. | P2 | S |  | Open |
| 959 | Account · Community · Support · Premium | Premium | /premium | Fix | SUBSCRIPTIONS_PUBLIC_ENABLED likely false — most users see waitlist not pricing. | P0 | S |  | Open |
| 960 | Account · Community · Support · Premium | Premium | /premium | Fix | PLAN_FEATURES hardcoded client-side. | P0 | S |  | Open |
| 961 | Account · Community · Support · Premium | Premium | /premium | Fix | 6-card FEATURES grid identical across plans — doesn't show what's gated. | P0 | M |  | Open |
| 962 | Account · Community · Support · Premium | Premium | /premium | Fix | Legacy plan slug remap (pro→growth, elite→business). | P1 | S |  | Open |
| 963 | Account · Community · Support · Premium | Premium | /premium | Fix | Enterprise CTA hardcoded mailto:sales@capp.app. | P1 | S |  | Open |
| 964 | Account · Community · Support · Premium | Premium | /premium | Fix | No annual vs monthly toggle. | P0 | M |  | Open |
| 965 | Account · Community · Support · Premium | Premium | /premium | Fix | No "what happens on downgrade" explainer. | P0 | M |  | Open |
| 966 | Account · Community · Support · Premium | Premium | /premium | Fix | No trial / free-trial period. | P0 | M |  | Open |
| 967 | Account · Community · Support · Premium | Premium | /premium | Fix | Capability alert hard-references plan names. | P2 | S |  | Open |
| 968 | Account · Community · Support · Premium | Premium | /premium | Fix | No card-on-file picker if multiple in confirm modal. | P1 | M |  | Open |
| 969 | Account · Community · Support · Premium | Premium | /premium | Polish | Side-by-side feature compare table. | P0 | L |  | Open |
| 970 | Account · Community · Support · Premium | Premium | /premium | Polish | "Best for…" persona descriptions on tiers. | P0 | M |  | Open |
| 971 | Account · Community · Support · Premium | Premium | /premium | Polish | Social proof ("Used by X+ stores", testimonials). | P0 | M |  | Open |
| 972 | Account · Community · Support · Premium | Premium | /premium | Polish | FAQ accordion (billing, cancellation, taxes, downgrades). | P0 | M |  | Open |
| 973 | Account · Community · Support · Premium | Premium | /premium | Polish | ROI calculator ("Save $X/month on fulfillment"). | P0 | M |  | Open |
| 974 | Account · Community · Support · Premium | Premium | /premium | Polish | Annual savings highlight. | P0 | S |  | Open |
| 975 | Account · Community · Support · Premium | Premium | /premium | Polish | Discount / promo code input. | P1 | S |  | Open |
| 976 | Account · Community · Support · Premium | Premium | /premium | Polish | "Plan details available at checkout." fallback should never show. | P1 | S |  | Open |
| 977 | Account · Community · Support · Premium | Premium | /premium | Polish | Capability alert dynamic CTA. | P0 | S |  | Open |
| 978 | Account · Community · Support · Premium | Premium | /premium | Feature | Free trial with credit card hold + reminder. | P0 | M |  | Open |
| 979 | Account · Community · Support · Premium | Premium | /premium | Feature | "What you'll unlock" preview modal with screenshots. | P0 | M |  | Open |
| 980 | Account · Community · Support · Premium | Premium | /premium | Feature | Plan recommendation quiz. | P1 | M |  | Open |
| 981 | Account · Community · Support · Premium | Premium | /premium | Feature | Usage-based teaser ("You used 87% of free tier"). | P1 | M |  | Open |
| 982 | Account · Community · Support · Premium | Premium | /premium | Feature | Referral discount stacking. | P1 | M |  | Open |
| 983 | Account · Community · Support · Premium | Premium | /premium | Feature | Plan history view. | P2 | S |  | Open |
| 984 | Account · Community · Support · Premium | Premium | /premium | Feature | Pause subscription option. | P1 | M |  | Open |
| 985 | Account · Community · Support · Premium | Premium | /premium | Feature | Team / org plans (multi-seat). | P2 | L |  | Open |
| 986 | Account · Community · Support · Premium | Mockups API Docs | /mockups-api | Fix | Markdown fetch fails silently with no retry / error UI. | P1 | S |  | Open |
| 987 | Account · Community · Support · Premium | Mockups API Docs | /mockups-api | Fix | No API key issuance flow surfaced here. | P0 | S |  | Open |
| 988 | Account · Community · Support · Premium | Mockups API Docs | /mockups-api | Fix | TOC only H2/H3 — long sections lose granularity. | P2 | S |  | Open |
| 989 | Account · Community · Support · Premium | Mockups API Docs | /mockups-api | Fix | Slugify doesn't dedupe heading IDs. | P2 | S |  | Open |
| 990 | Account · Community · Support · Premium | Mockups API Docs | /mockups-api | Fix | Curl only — no Node/Python/Ruby/PHP language tabs. | P0 | M |  | Open |
| 991 | Account · Community · Support · Premium | Mockups API Docs | /mockups-api | Fix | Beyond lazy Swagger UI, no interactive try-it-now. | P1 | M |  | Open |
| 992 | Account · Community · Support · Premium | Mockups API Docs | /mockups-api | Fix | Copy button falls back to window.prompt silently. | P3 | S |  | Open |
| 993 | Account · Community · Support · Premium | Mockups API Docs | /mockups-api | Fix | No search across docs. | P1 | M |  | Open |
| 994 | Account · Community · Support · Premium | Mockups API Docs | /mockups-api | Fix | "Hybrid behavior" 200/202 note needs visual hierarchy. | P2 | S |  | Open |
| 995 | Account · Community · Support · Premium | Mockups API Docs | /mockups-api | Fix | No versioning UI. | P2 | M |  | Open |
| 996 | Account · Community · Support · Premium | Mockups API Docs | /mockups-api | Polish | Multi-language code samples with tabs. | P0 | M |  | Open |
| 997 | Account · Community · Support · Premium | Mockups API Docs | /mockups-api | Polish | Sticky TOC with active-section highlight. | P1 | S |  | Open |
| 998 | Account · Community · Support · Premium | Mockups API Docs | /mockups-api | Polish | Dark/light code theme toggle. | P3 | S |  | Open |
| 999 | Account · Community · Support · Premium | Mockups API Docs | /mockups-api | Polish | Open-in-Postman / Open-in-Insomnia buttons. | P2 | S |  | Open |
| 1000 | Account · Community · Support · Premium | Mockups API Docs | /mockups-api | Polish | Rate-limit and pricing section linked from hero. | P1 | M |  | Open |
| 1001 | Account · Community · Support · Premium | Mockups API Docs | /mockups-api | Polish | Status badge linking to status.completeful.com. | P2 | S |  | Open |
| 1002 | Account · Community · Support · Premium | Mockups API Docs | /mockups-api | Polish | Changelog section for API versions. | P1 | M |  | Open |
| 1003 | Account · Community · Support · Premium | Mockups API Docs | /mockups-api | Polish | "Get your API key →" deep link in hero meta. | P0 | S |  | Open |
| 1004 | Account · Community · Support · Premium | Mockups API Docs | /mockups-api | Feature | Interactive playground with user key auto-injected. | P1 | L |  | Open |
| 1005 | Account · Community · Support · Premium | Mockups API Docs | /mockups-api | Feature | SDK downloads for popular languages. | P1 | L |  | Open |
| 1006 | Account · Community · Support · Premium | Mockups API Docs | /mockups-api | Feature | Webhook tester. | P1 | M |  | Open |
| 1007 | Account · Community · Support · Premium | Mockups API Docs | /mockups-api | Feature | Rate-limit dashboard for authenticated viewers. | P2 | M |  | Open |
| 1008 | Account · Community · Support · Premium | Mockups API Docs | /mockups-api | Feature | Sample apps repo links. | P2 | S |  | Open |
| 1009 | Account · Community · Support · Premium | Mockups API Docs | /mockups-api | Feature | Inline API status incidents. | P2 | M |  | Open |
| 1010 | Account · Community · Support · Premium | Mockups API Docs | /mockups-api | Feature | Embedded video walkthroughs. | P2 | M |  | Open |
| 1011 | Account · Community · Support · Premium | Mockups API Docs | /mockups-api | Feature | Quota / billing breakdown. | P2 | M |  | Open |
| 1012 | Account · Community · Support · Premium | Resources | /resources | Fix | All "guides" are external — users leave the app entirely. | P0 | L |  | Open |
| 1013 | Account · Community · Support · Premium | Resources | /resources | Fix | Hardcoded completeful.com URLs — breaks silently on path change. | P1 | S |  | Open |
| 1014 | Account · Community · Support · Premium | Resources | /resources | Fix | Three tour cards but no progress tracking. | P0 | S |  | Open |
| 1015 | Account · Community · Support · Premium | Resources | /resources | Fix | No search across resources. | P1 | M |  | Open |
| 1016 | Account · Community · Support · Premium | Resources | /resources | Fix | ResourcesPage inlined in App.tsx — harder to maintain. | P2 | S |  | Open |
| 1017 | Account · Community · Support · Premium | Resources | /resources | Fix | Tour card images have no missing-image fallback. | P3 | S |  | Open |
| 1018 | Account · Community · Support · Premium | Resources | /resources | Fix | No filter by user_type. | P1 | M |  | Open |
| 1019 | Account · Community · Support · Premium | Resources | /resources | Fix | "Visit Help Center" duplicated header + banner. | P2 | S |  | Open |
| 1020 | Account · Community · Support · Premium | Resources | /resources | Fix | No "new" badge on newly added guides. | P2 | S |  | Open |
| 1021 | Account · Community · Support · Premium | Resources | /resources | Fix | External-link cards lack visual leave-app indicator. | P2 | S |  | Open |
| 1022 | Account · Community · Support · Premium | Resources | /resources | Polish | Personalized recommendations by user_type + recent activity. | P0 | M |  | Open |
| 1023 | Account · Community · Support · Premium | Resources | /resources | Polish | Progress indicators on tour cards. | P0 | S |  | Open |
| 1024 | Account · Community · Support · Premium | Resources | /resources | Polish | Video thumbnails with duration overlay. | P1 | M |  | Open |
| 1025 | Account · Community · Support · Premium | Resources | /resources | Polish | Dynamic "Popular" / "Recently updated" sections. | P1 | M |  | Open |
| 1026 | Account · Community · Support · Premium | Resources | /resources | Polish | Tag/filter chips (Beginner / Intermediate / Advanced). | P2 | S |  | Open |
| 1027 | Account · Community · Support · Premium | Resources | /resources | Polish | Bookmark / favorite an article. | P1 | M |  | Open |
| 1028 | Account · Community · Support · Premium | Resources | /resources | Polish | Recent reads strip at top. | P2 | M |  | Open |
| 1029 | Account · Community · Support · Premium | Resources | /resources | Polish | hueVar legend explaining sections. | P3 | S |  | Open |
| 1030 | Account · Community · Support · Premium | Resources | /resources | Feature | In-app help reader (markdown rendered inline with breadcrumbs). | P0 | L |  | Open |
| 1031 | Account · Community · Support · Premium | Resources | /resources | Feature | AI Q&A over help-center corpus. | P0 | L |  | Open |
| 1032 | Account · Community · Support · Premium | Resources | /resources | Feature | Onboarding checklist showing pending tours/connections. | P0 | M |  | Open |
| 1033 | Account · Community · Support · Premium | Resources | /resources | Feature | Achievements badge → community leaderboard points. | P1 | M |  | Open |
| 1034 | Account · Community · Support · Premium | Resources | /resources | Feature | Webinars/live events integration with EventsPage. | P2 | M |  | Open |
| 1035 | Account · Community · Support · Premium | Resources | /resources | Feature | "Was this helpful?" feedback on guide. | P2 | S |  | Open |
| 1036 | Account · Community · Support · Premium | Resources | /resources | Feature | Community Q&A tagged with each guide. | P2 | M |  | Open |
| 1037 | Account · Community · Support · Premium | Resources | /resources | Feature | Embedded courses (multi-step learning paths). | P2 | L |  | Open |

## Summary

| Completeful Enhancement Tracker — Summary |  |  |  |
| --- | --- | --- | --- |
| Use the Tracker sheet for the full filterable list. Filters: Section, Page, Type (Fix/Polish/Feature/Theme), Priority (P0/P1/P2/P3), Effort (S/M/L/XL), Status. |  |  |  |
| Totals |  |  |  |
| Total items |  |  |  |
| P0 items |  |  |  |
| P1 items |  |  |  |
| P2 items |  |  |  |
| P3 items |  |  |  |
| Fix |  |  |  |
| Polish |  |  |  |
| Feature |  |  |  |
| Cross-cutting Theme |  |  |  |
| P0 by Type |  |  |  |
| P0 · Fix |  |  |  |
| P0 · Polish |  |  |  |
| P0 · Feature |  |  |  |
| P0 · Theme |  |  |  |

## Related
- [[02 App & Product/Completeful Enhancement Outline|Completeful Enhancement Outline]]
- [[02 App & Product/App Overview & Capabilities|App Overview & Capabilities]]
- [[02 App & Product/App Tools To Build|App Tools To Build]]
- [[02 App & Product/Canvas Designer Route Node Map|Canvas Designer — Route Node Map]]
- [[02 App & Product/Completeful (Capp2) Route Node Map|Completeful (Capp2) — Route Node Map]]
