import Image from "next/image";
import Link from "next/link";
import { brandAssets } from "@/lib/site-config";

interface LogoProps {
  variant?: "header" | "footer";
  className?: string;
  onClick?: () => void;
}

export function Logo({ variant = "header", className = "", onClick }: LogoProps) {
  const isFooter = variant === "footer";

  return (
    <Link href="/" className={`inline-flex items-center gap-3 ${className}`} onClick={onClick}>
      <Image
        src={isFooter ? brandAssets.logoFooter : brandAssets.logoHeader}
        alt={brandAssets.logoAlt}
        width={isFooter ? 56 : 48}
        height={isFooter ? 56 : 48}
        className="h-10 w-10 shrink-0 rounded-full object-cover md:h-12 md:w-12"
        priority={variant === "header"}
      />
      <span className="flex flex-col leading-tight">
        <span
          className={`text-lg font-bold tracking-tight md:text-xl ${isFooter ? "text-white" : "text-brand-charcoal"}`}
        >
          Kinetic Grappling
        </span>
        <span
          className={`text-[10px] font-medium uppercase tracking-widest md:text-xs ${isFooter ? "text-brand-red" : "text-brand-red"}`}
        >
          Brazilian Jiu-Jitsu
        </span>
      </span>
    </Link>
  );
}
