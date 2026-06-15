import Link from "next/link";
import { cn } from "@/lib/utils";

type CTAButtonVariant = "primary" | "secondary" | "outline" | "white";

interface CTAButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: CTAButtonVariant;
  className?: string;
  external?: boolean;
}

const variantStyles: Record<CTAButtonVariant, string> = {
  primary:
    "bg-brand-red text-white hover:bg-brand-red-dark shadow-lg shadow-brand-red/20",
  secondary:
    "bg-brand-charcoal text-white hover:bg-brand-gray",
  outline:
    "border-2 border-brand-charcoal text-brand-charcoal hover:bg-brand-charcoal hover:text-white",
  white:
    "bg-white text-brand-charcoal hover:bg-brand-light border border-white/20",
};

export function CTAButton({
  href,
  children,
  variant = "primary",
  className,
  external,
}: CTAButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center rounded-lg px-6 py-3.5 text-base font-semibold transition-all duration-200 min-h-[48px]",
    variantStyles[variant],
    className
  );

  if (external) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
