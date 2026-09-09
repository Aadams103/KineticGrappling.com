import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { CTAButton } from "./CTAButton";
import { Logo } from "./Logo";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const mapsQuery = encodeURIComponent(siteConfig.address.full);

  return (
    <footer className="bg-brand-black text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo variant="footer" />
            <p className="mt-4 text-sm leading-relaxed text-white/70">
              {siteConfig.localSeoText} Kids, teens, adults, and beginners welcome.
            </p>
            <div className="mt-4 flex gap-4">
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold uppercase tracking-wider text-white/55 transition-colors hover:text-brand-gold"
                aria-label="Kinetic Grappling on Instagram"
              >
                Instagram
              </a>
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold uppercase tracking-wider text-white/55 transition-colors hover:text-brand-gold"
                aria-label="Kinetic Grappling on Facebook"
              >
                Facebook
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-[0.2em] text-brand-gold">
              Academy
            </h3>
            <ul className="mt-4 space-y-2">
              {[...siteConfig.nav, ...siteConfig.footerExtra].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-white/70 hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-[0.2em] text-brand-gold">
              Programs
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              <li>
                <Link href="/kids-jiu-jitsu-college-station" className="hover:text-white">
                  Kids BJJ
                </Link>
              </li>
              <li>
                <Link href="/adult-bjj-college-station" className="hover:text-white">
                  Adult BJJ
                </Link>
              </li>
              <li>
                <Link href="/no-gi-grappling-college-station" className="hover:text-white">
                  No-Gi Grappling
                </Link>
              </li>
              <li><Link href="/mma-college-station" className="hover:text-white">MMA</Link></li>
              <li><Link href="/wrestling-college-station" className="hover:text-white">Wrestling</Link></li>
              <li>
                <Link href="/bjj-competition-training-college-station" className="hover:text-white">
                  Competition
                </Link>
              </li>
              <li>
                <Link href="/private-jiu-jitsu-lessons-college-station" className="hover:text-white">
                  Private Lessons
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-[0.2em] text-brand-gold">
              Visit
            </h3>
            <address className="mt-4 space-y-3 not-italic text-sm text-white/70">
              <p>{siteConfig.address.full}</p>
              <p>
                <a href={siteConfig.phoneHref} className="hover:text-brand-gold">
                  {siteConfig.phone}
                </a>
              </p>
              <p>
                <a href={siteConfig.emailHref} className="break-all hover:text-brand-gold">
                  {siteConfig.email}
                </a>
              </p>
              <p>Office hours: {siteConfig.officeHours}</p>
            </address>
            <a href={siteConfig.social.googleMaps} target="_blank" rel="noreferrer" className="mt-4 inline-flex min-h-11 items-center font-bold uppercase tracking-wider text-brand-gold underline underline-offset-4">Get directions</a>
            <div className="mt-6">
              <CTAButton href={siteConfig.contactPath}>{siteConfig.primaryCta}</CTAButton>
            </div>
          </div>
        </div>

        <div className="mt-12 overflow-hidden rounded-sm border border-white/10">
          <iframe
            title="Kinetic Grappling Brazilian Jiu-Jitsu Academy location on Google Maps"
            src={`https://maps.google.com/maps?q=${mapsQuery}&output=embed`}
            className="h-64 w-full border-0 grayscale-[25%] contrast-[1.1]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-white/45 md:flex-row">
          <p>
            &copy; {currentYear} {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-center md:text-right">{siteConfig.localSeoText}</p>
        </div>
      </div>
    </footer>
  );
}
