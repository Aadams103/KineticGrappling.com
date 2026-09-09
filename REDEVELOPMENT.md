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

`main` was inspected at `d2e66bd5c34c272fca73c7bd2bd2d1a6b1d00aba`; the Cursor branch at `60f101c08bd17190c783ab67dbf61c886e78f638`. The first published Work commit mistakenly inherited Cursor history. With the owner's explicit approval, the Work ref was corrected on 2026-09-09: commit `db917cc58358fa72f42ea8902da5961aeaa62d14` has latest main as its sole parent. Its tree `1fe338985b98de2ee68a10797ac321be9d51d254` exactly matches the pre-repair files. Recovery ref: `work/kinetic-site-redevelopment-v1-before-history-repair` at `052eadfe0e23e5c5c8189a9cf963d04b6bb695b9`. Neither main nor Cursor was modified. Subsequent work continues normally on the corrected Work branch.

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

Graphite and black create the training-floor foundation; warm paper improves long-form readability; logo gold preserves the existing identity; red identifies primary conversion controls. Exo 2 is the display face and Source Sans 3 is the reading face. Primary controls target at least 44px height, focus is visible, motion honors reduced-motion preferences, and mobile has persistent Call / Schedule / Free Trial actions. Text links still require a full touch-target/spacing review.

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

Live sitemap inventory fetched 2026-09-09: `/sitemap.xml` references `/pages-sitemap.xml` and `/member-profile_p_first-chunk-sitemap.xml`. The pages sitemap contains exactly seven entries: homepage, `/calendar`, `/programs`, `/about-us-1`, `/membership`, `/contact`, `/about-8`. All are covered above or retained. Member-profile sitemap is empty. Live robots allows the public site and references that sitemap. Search Console may reveal additional historical URLs not in the live sitemap; that historical coverage remains a launch check.

## Analytics events

`free_trial_cta_click`, `trial_form_start`, `trial_form_submit`, `phone_click`, `directions_click`, `schedule_view`, `program_view`, `pricing_view`, `social_outbound_click`.

`Analytics.tsx` records route views after navigation and delegates anchor click events, covering footer and inline links as well as CTAs. Form events contain program/path only, never name, phone, email or message. No analytics destination/container has been configured or verified.

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
- No-Gi Fundamentals class structure and prerequisites/trial eligibility. Owner confirmed Wednesday evening is adult No-Gi but the current published description duplicates competition copy; do not treat that text as a curriculum source.
- Other Glofox-derived sessions (Tuesday/Thursday mornings, Friday open mat and advanced evening classes) plus Saturday's noon end time were not reconfirmed by the owner's latest table and remain subject to live-booking verification.
- Exact map coordinates and ZIP were inherited, not independently verified. Coordinates, postal code and inferred weekday opening hours have been removed from schema. Office availability is not a class schedule.
- Power Hour's discipline and trial eligibility for individual sessions; current categorization/flags need confirmation.

## Owner-confirmed schedule and structure — 2026-09-09

The owner's corrected table supersedes earlier conflicting evening entries: Power Hour Monday/Wednesday 5:00–6:00 PM (60 minutes); Kids Monday/Wednesday 5:15–6:00 PM (45 minutes); Adult Gi Fundamentals Monday/Tuesday 6:00–7:30 PM (90 minutes); Adult No-Gi Fundamentals Wednesday 6:00–7:30 PM (90 minutes); No-Gi competition Saturday starts at 10:00 AM. All are America/Chicago / Central Time. Wednesday now has one adult fundamentals session, explicitly No-Gi. The owner subsequently confirmed there are no classes after 7:30 PM; the Monday–Wednesday 7:30–8:30 PM Advanced Grappling and Drilling entries have been removed from the shared schedule. Saturday's noon end remains sourced from the earlier Glofox calendar, not the owner's confirmation. Other previously observed sessions ending by 7:30 PM are retained subject to live-booking verification; omission from the corrected table was not treated as cancellation.

Program descriptions now reflect the owner's supplied structure: Little Grapplers ages 3–5 with 30-minute games; Kids ages 6–12 with structured technique; Adult Fundamentals for adults with instruction, drilling and sparring; competition with advanced BJJ/wrestling/judo; private instruction scheduled directly with instructors. No-Gi prerequisites/trial eligibility and curriculum remain unconfirmed. Removed the unused duplicate `scheduleCategories` data. Durations derive from each entry's start/end, and the shared schedule UI labels Central Time explicitly.
- Final Resend sender/domain configuration and the existing analytics container ID.

## Verification record

Earlier pass: dependency install, TypeScript, ESLint and production build passed. Desktop browser checks covered key routes, Wednesday filtering, empty-form errors, initial skip-link keyboard behavior, canonical/OG/parseable JSON-LD and the three listed redirects. Sitemap/robots were inspected in build output. Vercel reported a successful branch deployment, but its protected preview required login and was not visually tested.

Hardening pass, 2026-09-09: corrected unsent-form messaging and success focus, added native required/email validation plus server phone/student/origin/size checks, handled provider/network failures, escaped JSON-LD script content, removed unverified schema claims, updated schedule day after hydration in America/Chicago, stacked mobile class times and added menu Escape handling. Automated contact-handler tests use mocked delivery only; they never send messages.

Hardening checks executed: `npm ci`, `npm run typecheck`, `npm run lint`, `npm test` (14/14 passing), `npm run build` (27 generated entries), and `git diff --check`. Browser checks above belong to the earlier pass; the hardening UI changes have not yet been browser-tested.

History-repair follow-up, final checks: `npm run lint`, `npm test` (14/14), `npm run build`, `npm run typecheck` and `git diff --check` passed. `npm run check:site` passed across 21 built pages, 710 internal links, 91 image references, 44 JSON-LD blocks, 21 sitemap URLs and three permanent redirects. This parses emitted markup and checks references, not Google's rich-result eligibility or visual rendering.

Browser follow-up: rendered the homepage in a 375px iframe (360px content area plus scrollbar); no document overflow, the first three images loaded, menu open and Escape close worked with focus returned, and Wednesday filtering on the schedule displayed the expected stored classes. The multi-width matrix did not complete: after timeouts Chromium displayed “This page has been blocked by Chromium” for embedded navigation. Stopped instead of bypassing that restriction. The latest hero/CTA/content changes were made after that observation and still need visual review.

`scripts/qa-responsive.html` is a local-only harness, not a public route. Copy into `public/` during local QA, run the normal development server, and use its width/page controls. Remove that public copy before building/publishing. It provides 375/430/768/1024/1440 CSS-pixel iframe widths; full mobile-device behavior still needs device testing. `.next-dev` isolates development artifacts from `.next` production output so QA and builds cannot overwrite each other's bundles.

SEO follow-up: breadcrumb markup matches visible navigation; resources include Article markup and visible academy authorship. FAQ answers remain visible but FAQ rich-result markup was removed: [Google Search Central's June 15, 2026 update](https://developers.google.com/search/updates) says the feature is no longer shown. Sitemap no longer invents a fresh content-modification date on every build. The homepage includes a dedicated location block.

Still outstanding: complete 375/430/768/1024/1440px browser matrix, comprehensive keyboard/contrast/accessibility review, field or lab CWV measurement, real form delivery, actual analytics receipt and Search Console historical URL inventory. Do not mark this release fully QA-passed or production-ready until these gates are recorded with results.

## Launch checklist

- Confirm unresolved facts and update `site-config.ts`.
- Configure trial-form delivery variables and test a real submission.
- Confirm Glofox deep links, schedule, prices, joining fees, and free-trial terms.
- Validate Search Console ownership, analytics receipt, metadata, schema, sitemap, robots, redirects, and social cards.
- Run typecheck, lint, production build, link/route checks, keyboard review, form validation, and responsive browser QA at 375, 430, 768, 1024, and 1440px.
- Review the Vercel branch preview. Do not attach the production domain until explicit approval.
