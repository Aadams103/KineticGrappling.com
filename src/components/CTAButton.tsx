"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { inferAnalyticsEvent, trackEvent, type AnalyticsEvent } from "@/lib/analytics";

type CTAButtonVariant = "primary" | "secondary" | "outline" | "white" | "ghost";

interface CTAButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: CTAButtonVariant;
  className?: string;
  external?: boolean;
  analyticsEvent?: AnalyticsEvent;
}

const variantStyles: Record<CTAButtonVariant, string> = {
  primary:
    "bg-brand-gold text-brand-black hover:bg-brand-gold-light shadow-[0_10px_30px_-12px_rgba(233,178,90,0.8)] font-bold",
  secondary: "bg-brand-charcoal text-white hover:bg-brand-black",
  outline:
    "border-2 border-brand-gold text-brand-charcoal hover:bg-brand-gold hover:text-brand-black",
  white: "bg-white text-brand-charcoal hover:bg-brand-light border border-white/20 font-bold",
  ghost: "text-brand-gold hover:text-brand-gold-light underline-offset-4 hover:underline",
};

export function CTAButton({
  href,
  children,
  variant = "primary",
  className,
  external,
  analyticsEvent,
}: CTAButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center rounded-sm px-7 py-4 text-sm uppercase tracking-[0.14em] transition-all duration-200 min-h-[52px]",
    variantStyles[variant],
    className
  );

  if (external) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer" onClick={() => {
        const event = analyticsEvent ?? inferAnalyticsEvent(href);
        if (event) trackEvent(event, { href });
      }}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} onClick={() => {
      const event = analyticsEvent ?? inferAnalyticsEvent(href);
      if (event) trackEvent(event, { href });
    }}>
      {children}
    </Link>
  );
}
