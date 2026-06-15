"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";
import { CTAButton } from "./CTAButton";

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
        <Link href="/" className="flex flex-col leading-tight" onClick={() => setMobileOpen(false)}>
          <span className="text-xl font-bold tracking-tight text-brand-charcoal">
            {siteConfig.name}
          </span>
          <span className="text-xs font-medium uppercase tracking-widest text-brand-red">
            {siteConfig.tagline}
          </span>
        </Link>

        <nav className="hidden xl:flex items-center gap-6" aria-label="Main navigation">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-brand-red",
                pathname === item.href ? "text-brand-red" : "text-brand-gray"
              )}
            >
              {item.label}
            </Link>
          ))}
          <CTAButton href={siteConfig.ctaNav.href} className="!px-5 !py-2.5 !text-sm">
            {siteConfig.ctaNav.label}
          </CTAButton>
        </nav>

        <button
          type="button"
          className="xl:hidden inline-flex items-center justify-center rounded-lg p-2 text-brand-charcoal hover:bg-brand-light"
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <nav
          id="mobile-menu"
          className="xl:hidden border-t border-gray-100 bg-white px-4 py-4"
          aria-label="Mobile navigation"
        >
          <ul className="space-y-1">
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "block rounded-lg px-4 py-3 text-base font-medium transition-colors",
                    pathname === item.href
                      ? "bg-brand-red/10 text-brand-red"
                      : "text-brand-charcoal hover:bg-brand-light"
                  )}
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <CTAButton href={siteConfig.ctaNav.href} className="w-full">
                {siteConfig.ctaNav.label}
              </CTAButton>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
