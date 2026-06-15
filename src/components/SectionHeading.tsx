interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
}

export function SectionHeading({
  title,
  subtitle,
  align = "center",
  light = false,
  className = "",
}: SectionHeadingProps) {
  return (
    <div
      className={`mb-10 md:mb-12 ${align === "center" ? "text-center mx-auto max-w-3xl" : "text-left max-w-3xl"} ${className}`}
    >
      <h2
        className={`text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight ${light ? "text-white" : "text-brand-charcoal"}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-lg md:text-xl leading-relaxed ${light ? "text-white/85" : "text-brand-gray"}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
