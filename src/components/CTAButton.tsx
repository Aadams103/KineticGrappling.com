"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { type AnalyticsEvent } from "@/lib/analytics";

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
    "bg-brand-red text-white hover:bg-brand-red-dark font-bold",
  secondary: "bg-brand-charcoal text-white hover:bg-brand-black",
  outline:
    "border-2 border-current text-brand-charcoal hover:bg-brand-gold hover:text-brand-black",
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
    "inline-flex items-center justify-center rounded-sm px-7 py-4 text-center text-sm uppercase tracking-[0.14em] transition-all duration-200 min-h-[52px]",
    variantStyles[variant],
    className
  );

  if (external) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer" data-analytics-event={analyticsEvent}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} data-analytics-event={analyticsEvent}>
      {children}
    </Link>
  );
}
