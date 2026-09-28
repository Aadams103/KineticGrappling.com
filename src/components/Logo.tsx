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
        width={80}
        height={80}
        className={cn("shrink-0 rounded-full bg-white p-1.5 object-contain", isFooter ? "h-20 w-20" : "h-16 w-16 md:h-20 md:w-20")}
        priority={variant === "header"}
      />
      <span className="flex min-w-0 flex-col leading-tight">
        <span
          className={cn(
            "font-display text-base font-extrabold uppercase tracking-wide sm:text-lg",
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
