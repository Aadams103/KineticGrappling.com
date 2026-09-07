import Image from "next/image";
import Link from "next/link";
import { brandAssets } from "@/lib/site-config";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  breadcrumb?: { label: string; href?: string }[];
  imageSrc?: string;
  imageAlt?: string;
}

export function PageHero({
  title,
  subtitle,
  breadcrumb,
  imageSrc = brandAssets.heroImage,
  imageAlt = brandAssets.heroAlt,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-brand-charcoal">
      <div className="absolute inset-0">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover opacity-25"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-brand-black/90 to-brand-black/70" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        {breadcrumb && (
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.18em] text-white/50">
              {breadcrumb.map((item, index) => (
                <li key={item.label} className="flex items-center gap-2">
                  {index > 0 && <span aria-hidden="true">/</span>}
                  {item.href ? (
                    <Link href={item.href} className="hover:text-white">
                      {item.label}
                    </Link>
                  ) : (
                    <span className="text-white/80">{item.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}
        <h1 className="font-display max-w-4xl text-4xl font-extrabold uppercase tracking-tight text-white md:text-5xl lg:text-6xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-white/80 md:text-xl">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
