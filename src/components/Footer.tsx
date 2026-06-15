import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { CTAButton } from "./CTAButton";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-charcoal text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <p className="text-2xl font-bold">{siteConfig.name}</p>
            <p className="mt-2 text-sm text-white/70">{siteConfig.tagline}</p>
            <p className="mt-4 text-sm leading-relaxed text-white/80">
              Brazilian Jiu-Jitsu for kids, adults, and beginners in College Station, TX.
              Beginner-friendly classes near Texas A&amp;M and the Bryan/College Station area.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/60">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/80 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/60">
              Programs
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/kids-jiu-jitsu-college-station" className="text-sm text-white/80 hover:text-white">
                  Kids Jiu-Jitsu
                </Link>
              </li>
              <li>
                <Link href="/adult-bjj-college-station" className="text-sm text-white/80 hover:text-white">
                  Adult BJJ
                </Link>
              </li>
              <li>
                <Link href="/no-gi-grappling-college-station" className="text-sm text-white/80 hover:text-white">
                  No-Gi Grappling
                </Link>
              </li>
              <li>
                <Link href="/programs" className="text-sm text-white/80 hover:text-white">
                  All Programs
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/60">
              Contact
            </h3>
            <address className="mt-4 space-y-3 not-italic text-sm text-white/80">
              <p>{siteConfig.address.full}</p>
              <p>
                <a href={siteConfig.phoneHref} className="hover:text-white">
                  {siteConfig.phone}
                </a>
              </p>
              <p>
                <a href={siteConfig.emailHref} className="hover:text-white">
                  {siteConfig.email}
                </a>
              </p>
            </address>
            <div className="mt-6">
              <CTAButton href="/free-trial" variant="primary">
                {siteConfig.primaryCta}
              </CTAButton>
            </div>
          </div>
        </div>

        <div className="mt-12 overflow-hidden rounded-xl border border-white/10">
          <iframe
            title="Kinetic Grappling location on Google Maps"
            src="https://maps.google.com/maps?q=1055+Texas+Ave+S+Suite+101+College+Station+TX+77840&output=embed"
            className="h-64 w-full border-0 grayscale-[30%] contrast-[1.1]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-white/50 md:flex-row">
          <p>&copy; {currentYear} {siteConfig.name}. All rights reserved.</p>
          <p>
            <a
              href={siteConfig.social.googleMaps}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white/80"
            >
              View on Google Maps
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
