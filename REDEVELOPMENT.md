# Kinetic Grappling website redevelopment

## Goal

Turn local search, social, and referral traffic into an informed first visit: understand the programs, see current class times and prices, choose a first class, request a free trial, get directions, and contact the academy.

## Architecture and source of truth

- Next.js 15 App Router, React 19, TypeScript, Tailwind CSS 4, deployed by Vercel.
- Repeated business facts, programs, coaches, pricing, schedule, FAQs, and resources live in `src/lib/site-config.ts`.
- Metadata helpers live in `src/lib/metadata.ts`; JSON-LD builders live in `src/lib/schema.ts`.
- The trial form posts to `src/app/api/contact/route.ts`. With Resend variables it sends email; without them it returns a prefilled email fallback. Glofox remains the authoritative public booking and membership system.
- Conversion events are defined in `src/lib/analytics.ts` and pushed to `window.dataLayer` when an analytics container is present.

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

## Business facts still requiring confirmation

- Regular Little Grapplers times; the public Glofox week checked did not list a separate Little Grapplers class.
- Current standalone MMA and wrestling class times; both disciplines are named by the academy but not separately listed in the checked Glofox week.
- Full biographies, ranks, headshots, and credentials for Bobby Power, Jay Kelly, and Aidan Forgay.
- Public-review excerpts/permissions and the canonical Google Business Profile review URL.
- Parking and parent-viewing policies.
- Whether the Wednesday adult gi class is intentionally 60 minutes while other fundamentals sessions are 80 minutes.
- Final Resend sender/domain configuration and the existing analytics container ID.

## Launch checklist

- Confirm unresolved facts and update `site-config.ts`.
- Configure trial-form delivery variables and test a real submission.
- Confirm Glofox deep links, schedule, prices, joining fees, and free-trial terms.
- Validate Search Console ownership, analytics receipt, metadata, schema, sitemap, robots, redirects, and social cards.
- Run typecheck, lint, production build, link/route checks, keyboard review, form validation, and responsive browser QA at 375, 430, 768, 1024, and 1440px.
- Review the Vercel branch preview. Do not attach the production domain until explicit approval.
