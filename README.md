# Kinetic Grappling Website

Modern, SEO-optimized website for [Kinetic Grappling](https://www.kineticgrappling.com) — a Brazilian Jiu-Jitsu academy in College Station, TX.

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

Or use the CLI:

```bash
npx vercel
npx vercel --prod
```

## Environment Variables

No environment variables are required for the current static site. When you connect a form backend, add:

| Variable | Purpose |
|----------|---------|
| `RESEND_API_KEY` or similar | Email delivery for free trial form |
| `NEXT_PUBLIC_GA_ID` | Google Analytics (optional) |

## Project Structure

```
src/
├── app/                    # Pages (App Router)
│   ├── page.tsx            # Homepage
│   ├── programs/
│   ├── kids-jiu-jitsu-college-station/
│   ├── adult-bjj-college-station/
│   ├── no-gi-grappling-college-station/
│   ├── schedule/
│   ├── coaches/
│   ├── membership/
│   ├── free-trial/
│   ├── layout.tsx
│   ├── sitemap.ts
│   └── robots.ts
├── components/             # Reusable UI components
└── lib/                    # Config, metadata, schema helpers
public/
└── images/                 # Placeholder images (replace with real photos)
```

## Content Checklist

Replace placeholder content before launch:

- [ ] Hero and program photos in `/public/images/`
- [ ] Coach headshots in `/public/images/coaches/`
- [ ] Real Google reviews in `src/lib/site-config.ts`
- [ ] Verified class schedule in `weeklySchedule`
- [ ] Coach bios, ranks, and credentials
- [ ] Connect free trial form to email/CRM
- [ ] Favicon and Open Graph image
- [ ] Google Business Profile link
- [ ] Membership pricing (if publishing publicly)
