"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";
import { CTAButton } from "./CTAButton";
import { Logo } from "./Logo";

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-brand-black/90 backdrop-blur-md" onKeyDown={(event) => {
      if (event.key === "Escape" && mobileOpen) {
        setMobileOpen(false);
        menuButton.current?.focus();
      }
    }}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Logo onClick={() => setMobileOpen(false)} className="shrink-0" />

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main navigation">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-xs font-semibold uppercase tracking-[0.18em] transition-colors hover:text-brand-gold",
                pathname === item.href ? "text-brand-gold" : "text-white/70"
              )}
            >
              {item.label}
            </Link>
          ))}
          <CTAButton href={siteConfig.ctaNav.href} className="!px-5 !py-2.5 !text-xs">
            {siteConfig.ctaNav.label}
          </CTAButton>
        </nav>

        <button
          type="button"
          ref={menuButton}
          className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-sm p-2 text-white hover:bg-white/10 lg:hidden"
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
          className="border-t border-white/10 bg-brand-black px-4 py-4 lg:hidden"
          aria-label="Mobile navigation"
          onClick={(event) => {
            if ((event.target as HTMLElement).closest("a")) setMobileOpen(false);
          }}
        >
          <ul className="space-y-1">
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "block rounded-sm px-4 py-3 text-sm font-semibold uppercase tracking-wider transition-colors",
                    pathname === item.href
                      ? "bg-brand-gold/10 text-brand-gold"
                      : "text-white hover:bg-white/5"
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
