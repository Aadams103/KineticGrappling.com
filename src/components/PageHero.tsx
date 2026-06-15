import Link from "next/link";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  breadcrumb?: { label: string; href?: string }[];
}

export function PageHero({ title, subtitle, breadcrumb }: PageHeroProps) {
  return (
    <section className="bg-brand-charcoal">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-20">
        {breadcrumb && (
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-white/60">
              {breadcrumb.map((item, index) => (
                <li key={item.label} className="flex items-center gap-2">
                  {index > 0 && <span aria-hidden="true">/</span>}
                  {item.href ? (
                    <Link href={item.href} className="hover:text-white">
                      {item.label}
                    </Link>
                  ) : (
                    <span className="text-white/90">{item.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}
        <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-white md:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-white/80 md:text-xl">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
