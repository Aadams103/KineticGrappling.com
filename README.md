# Kinetic Grappling Website

Modern, conversion-focused website for [Kinetic Grappling](https://www.kineticgrappling.com) — a Brazilian Jiu-Jitsu academy in College Station, TX.

## Tech Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS 4
- Deployed on Vercel

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Deploy to Vercel

1. Push this repo to GitHub
2. Import the project at [vercel.com/new](https://vercel.com/new)
3. Vercel auto-detects Next.js — no custom build settings needed
4. Add your custom domain `KineticGrappling.com` in Project Settings → Domains

## Contact Form

The free-class form validates on the server and opens a prefilled email to `AmbroseAdams@KineticGrappling.com`. When you connect a mail provider later, add:

| Variable | Purpose |
|----------|---------|
| `RESEND_API_KEY` | Email delivery for the free trial form |
| `NEXT_PUBLIC_GA_ID` | Google Analytics (optional) |

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
