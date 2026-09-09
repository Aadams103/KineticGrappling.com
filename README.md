# Kinetic Grappling Website

Modern, conversion-focused website for [Kinetic Grappling](https://www.kineticgrappling.com) — a Brazilian Jiu-Jitsu academy in College Station, TX.

## Tech Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS 4
- Deployed on Vercel

## Getting Started

```bash
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Verification

```bash
npm run typecheck
npm run lint
npm test
npm run build
npm run check:site
```

`check:site` checks every built public HTML route, internal links and fragments, local image references, titles/descriptions, canonical/OG fields, JSON-LD parsing, sitemap parity and legacy redirects. It does not replace browser/accessibility/performance testing.

## Branch previews only

Continue on `work/kinetic-site-redevelopment-v1`. The existing Vercel project deploys branch previews. Do not create another hosting project, change DNS, move the production domain or merge into `main` without the owner's explicit production approval. Read `REDEVELOPMENT.md` for source evidence, QA status and unresolved launch gates.

## Contact Form

Without delivery credentials, the form prepares an email and clearly tells the visitor to open their email app and send it. Glofox is the existing booking system and remains directly linked. Optional server delivery requires both a key and verified sender:

| Variable | Purpose |
|----------|---------|
| `RESEND_API_KEY` | Email delivery for the free trial form |
| `TRIAL_FORM_FROM_EMAIL` | Verified sender address |
| `TRIAL_FORM_TO_EMAIL` | Optional academy destination override |

No analytics container is installed by this redevelopment. `Analytics.tsx` pushes documented events to `window.dataLayer`; confirm the existing business analytics setup before adding its bootstrap.

## Project Structure

```
src/
├── app/          # Pages (App Router)
├── components/   # Shared UI
└── lib/          # Config, metadata, schema
public/images/    # Brand photos and logos
```

## Content to confirm before launch

- [ ] Current class times in `weeklySchedule`
- [ ] Coach photos for Bobby Power, Jay Kelly, and Aidan Forgay
- [ ] Live Google reviews if you want them on the homepage
- [ ] Published membership pricing (optional)
- [ ] Google Business Profile link
