# Kinetic Grappling website redevelopment

## Goal

Turn local search, social, and referral traffic into an informed first visit: understand the programs, see current class times and prices, choose a first class, request a free trial, get directions, and contact the academy.

## Architecture and source of truth

- Next.js 15 App Router, React 19, TypeScript, Tailwind CSS 4, deployed by Vercel.
- Repeated business facts, programs, coaches, pricing, schedule, FAQs, and resources live in `src/lib/site-config.ts`.
- Metadata helpers live in `src/lib/metadata.ts`; JSON-LD builders live in `src/lib/schema.ts`.
- The trial form posts to `src/app/api/contact/route.ts`. With Resend variables it sends email; without them it returns a prefilled email fallback. Glofox remains the authoritative public booking and membership system.
- Conversion events are defined in `src/lib/analytics.ts` and pushed to `window.dataLayer` when an analytics container is present.

## Source-control status

`main` was inspected at `d2e66bd5c34c272fca73c7bd2bd2d1a6b1d00aba`; the Cursor branch at `60f101c08bd17190c783ab67dbf61c886e78f638`. The first published Work commit mistakenly used the Cursor commit as its parent. This incorporated the full Cursor changeset, not selective independent implementation as requested. Neither `main` nor the Cursor ref was modified. Correcting the published Work ancestry requires owner approval before rewriting the ref. Keep the PR draft until corrected.

## Baseline and reuse decisions

- Main already supplied App Router pages, program components, centralized content, authentic images, SEO helpers and the package lock. These were retained rather than replacing the framework.
- Cursor supplied the athletic visual system, typography, smaller navigation, resource detail page and 404. Its entire commit was inherited (see source-control correction above); this was broader than the requested selective reuse.
- Live Wix observations: vague hero positioning; several misleading/self-referencing CTAs; footer schedule pointed to programs; phone opened a search instead of dialing; YouTube links included an administrative/channel mismatch. The redevelopment uses direct route, telephone and booking links.
- Conversion changes: dedicated trial page, visible schedule preview, centralized class data, monthly plan comparison, beginner guidance and persistent mobile actions. Removed unsupported testimonials rather than publishing invented social proof.
- Remaining baseline gaps: a complete legacy index/sitemap inventory, Search Console and analytics access, measured field Core Web Vitals and full device-width QA have not been completed. No performance or accessibility certification is implied.

## Route map

| Intent | Route |
| --- | --- |
| Local BJJ/MMA overview | `/` |
| Program comparison | `/programs` |
| Adult BJJ | `/adult-bjj-college-station` |
| Kids BJJ | `/kids-jiu-jitsu-college-station` |
| No-Gi | `/no-gi-grappling-college-station` |
| MMA | `/mma-college-station` |
| Wrestling | `/wrestling-college-station` |
| Competition | `/bjj-competition-training-college-station` |
| Private lessons | `/private-jiu-jitsu-lessons-college-station` |
| Weekly schedule | `/schedule` |
| Pricing | `/membership` |
| First-visit conversion | `/free-trial` |
| Coaches, academy, reviews | `/coaches`, `/about`, `/reviews` |
| Support | `/faq`, `/blog`, `/contact` |

## Design system

Graphite and black create the training-floor foundation; warm paper improves long-form readability; logo gold carries the primary brand; red is a controlled conversion and orientation accent. Exo 2 is the display face and Source Sans 3 is the reading face. Interactive targets are at least 44px tall, focus is visible, motion honors reduced-motion preferences, and mobile has persistent Call / Schedule / Free Trial actions.

## Verified content sources

- Production Wix pages: business name, disciplines, mission, address, phone, email, office hours, program ages/descriptions, coach names/titles, private lessons, Ambrose Adams biography.
- Public Kinetic Glofox portal, checked 2026-09-07: weekly class pattern, monthly plan prices, joining fees, and free-trial offer.
- Repository assets: authentic Kinetic photography and logo files originally sourced from the production site.

## Legacy redirects

| Old URL | New URL |
| --- | --- |
| `/about-us-1` | `/about` |
| `/about-8` | `/coaches#ambrose-adams` |
| `/calendar` | `/schedule` |

Existing `/membership`, `/programs`, and `/contact` paths remain live routes and need no redirect.

## Analytics events

`free_trial_cta_click`, `trial_form_start`, `trial_form_submit`, `phone_click`, `directions_click`, `schedule_view`, `program_view`, `pricing_view`, `social_outbound_click`.

## Environment variables

- `RESEND_API_KEY`: enables server-side trial-request delivery.
- `TRIAL_FORM_TO_EMAIL`: optional destination override; defaults to the academy email.
- `TRIAL_FORM_FROM_EMAIL`: verified Resend sender.
- An existing Google Tag Manager or analytics bootstrap may consume the data-layer events; no competing analytics package is installed.

Resend is an optional adapter, not a verified existing business integration. Both key and sender are required; no demo sender is used. Without them, or when the provider fails, the form explicitly says the request has **not** been sent and offers a prepared email plus Glofox/call alternatives. `trial_form_submit` fires only after provider acceptance, not for the fallback. Provider acceptance does not prove inbox delivery. Do not activate delivery without confirming the approved integration and adding deployment-level abuse/rate controls.

## Business facts still requiring confirmation

- Regular Little Grapplers times; the public Glofox week checked did not list a separate Little Grapplers class.
- Current standalone MMA and wrestling class times; both disciplines are named by the academy but not separately listed in the checked Glofox week.
- Full biographies, ranks, headshots, and credentials for Bobby Power, Jay Kelly, and Aidan Forgay.
- Public-review excerpts/permissions and the canonical Google Business Profile review URL.
- Parking and parent-viewing policies.
- Whether the Wednesday adult gi class is intentionally 60 minutes while other fundamentals sessions are 80 minutes.
- Wednesday Gi and No-Gi overlap and 7:20 versus previously supplied 7:30 fundamentals end times; resolve with the owner before launch.
- Exact map coordinates and ZIP were inherited, not independently verified. Coordinates, postal code and inferred weekday opening hours have been removed from schema. Office availability is not a class schedule.
- Power Hour's discipline and trial eligibility for individual sessions; current categorization/flags need confirmation.
- Final Resend sender/domain configuration and the existing analytics container ID.

## Verification record

Earlier pass: dependency install, TypeScript, ESLint and production build passed. Desktop browser checks covered key routes, Wednesday filtering, empty-form errors, initial skip-link keyboard behavior, canonical/OG/parseable JSON-LD and the three listed redirects. Sitemap/robots were inspected in build output. Vercel reported a successful branch deployment, but its protected preview required login and was not visually tested.

Hardening pass, 2026-09-09: corrected unsent-form messaging and success focus, added native required/email validation plus server phone/student/origin/size checks, handled provider/network failures, escaped JSON-LD script content, removed unverified schema claims, updated schedule day after hydration in America/Chicago, stacked mobile class times and added menu Escape handling. Automated contact-handler tests use mocked delivery only; they never send messages.

Hardening checks executed: `npm ci`, `npm run typecheck`, `npm run lint`, `npm test` (14/14 passing), `npm run build` (27 generated entries), and `git diff --check`. Browser checks above belong to the earlier pass; the hardening UI changes have not yet been browser-tested.

Still outstanding: actual 375/430/768/1024/1440px browser checks, comprehensive keyboard/contrast/accessibility review, field or lab CWV measurement, real form delivery, actual analytics receipt and a complete internal-link/legacy-URL crawl. Do not mark this release fully QA-passed or production-ready until these gates are recorded with results.

## Launch checklist

- Confirm unresolved facts and update `site-config.ts`.
- Configure trial-form delivery variables and test a real submission.
- Confirm Glofox deep links, schedule, prices, joining fees, and free-trial terms.
- Validate Search Console ownership, analytics receipt, metadata, schema, sitemap, robots, redirects, and social cards.
- Run typecheck, lint, production build, link/route checks, keyboard review, form validation, and responsive browser QA at 375, 430, 768, 1024, and 1440px.
- Review the Vercel branch preview. Do not attach the production domain until explicit approval.
