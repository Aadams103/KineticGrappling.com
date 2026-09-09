import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  light = false,
  className = "",
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-10 md:mb-12",
        align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl text-left",
        className
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            "mb-3 text-xs font-semibold uppercase tracking-[0.28em]",
            light ? "text-brand-gold" : "text-brand-gold-dark"
          )}
        >
          {eyebrow}
        </p>
      )}
      <div
        className={cn(
          "gold-rule mb-5",
          align === "center" && "mx-auto bg-gradient-to-r from-transparent via-brand-gold to-transparent"
        )}
      />
      <h2
        className={cn(
          "font-display text-3xl font-extrabold uppercase tracking-tight md:text-4xl lg:text-5xl",
          light ? "text-white" : "text-brand-charcoal"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 text-lg leading-relaxed md:text-xl",
            light ? "text-white/80" : "text-brand-gray"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
