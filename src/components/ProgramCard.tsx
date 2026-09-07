import Image from "next/image";
import Link from "next/link";
import { CTAButton } from "./CTAButton";

interface ProgramCardProps {
  title: string;
  ages?: string;
  description: string;
  whoFor: string;
  cta: string;
  href: string;
  learnMoreHref: string;
  image: string;
  imageAlt: string;
  slug?: string;
}

export function ProgramCard({
  title,
  ages,
  description,
  whoFor,
  cta,
  href,
  learnMoreHref,
  image,
  imageAlt,
  slug,
}: ProgramCardProps) {
  return (
    <article
      id={slug}
      className="group flex flex-col overflow-hidden rounded-sm border border-black/5 bg-white shadow-[0_18px_50px_-28px_rgba(0,0,0,0.45)]"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-brand-light">
        <Image
          src={image}
          alt={imageAlt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {ages && (
          <span className="absolute left-4 top-4 rounded-sm bg-brand-gold px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-brand-black">
            {ages}
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-2xl font-extrabold uppercase tracking-tight text-brand-charcoal">
          {title}
        </h3>
        <p className="mt-2 text-sm font-medium text-brand-gold-dark">{whoFor}</p>
        <p className="mt-3 flex-1 leading-relaxed text-brand-gray">{description}</p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Link
            href={learnMoreHref}
            className="inline-flex min-h-[48px] flex-1 items-center justify-center rounded-sm border-2 border-brand-charcoal px-5 py-3 text-xs font-semibold uppercase tracking-wider text-brand-charcoal transition-colors hover:bg-brand-charcoal hover:text-white"
          >
            Learn More
          </Link>
          <CTAButton href={href} className="flex-1 !px-5 !py-3 !text-xs">
            {cta}
          </CTAButton>
        </div>
      </div>
    </article>
  );
}
