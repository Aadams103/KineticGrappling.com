import Image from "next/image";
import Link from "next/link";
import { brandAssets } from "@/lib/site-config";
import { cn } from "@/lib/utils";

interface LogoProps {
  variant?: "header" | "footer";
  className?: string;
  onClick?: () => void;
}

export function Logo({ variant = "header", className = "", onClick }: LogoProps) {
  const isFooter = variant === "footer";

  return (
    <Link href="/" className={cn("inline-flex items-center gap-3", className)} onClick={onClick}>
      <Image
        src={brandAssets.logoHeader}
        alt=""
        width={56}
        height={56}
        className="h-11 w-11 shrink-0 rounded-full object-cover md:h-12 md:w-12"
        priority={variant === "header"}
      />
      <span className="flex min-w-0 flex-col leading-tight">
        <span
          className={cn(
            "font-display text-lg font-extrabold uppercase tracking-wide md:text-xl",
            isFooter ? "text-white" : "text-white"
          )}
        >
          Kinetic Grappling
        </span>
        <span className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-gold">
          Brazilian Jiu-Jitsu
        </span>
      </span>
    </Link>
  );
}
