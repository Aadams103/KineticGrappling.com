import Image from "next/image";
import { CTAButton } from "./CTAButton";

interface ProgramCardProps {
  title: string;
  ages?: string;
  description: string;
  cta: string;
  href: string;
  image: string;
  imageAlt: string;
}

export function ProgramCard({
  title,
  ages,
  description,
  cta,
  href,
  image,
  imageAlt,
}: ProgramCardProps) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-shadow hover:shadow-lg">
      <div className="relative aspect-[16/10] overflow-hidden bg-brand-light">
        <Image
          src={image}
          alt={imageAlt}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {ages && (
          <span className="absolute left-4 top-4 rounded-full bg-brand-red px-3 py-1 text-xs font-semibold text-white">
            {ages}
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-bold text-brand-charcoal">{title}</h3>
        <p className="mt-3 flex-1 text-brand-gray leading-relaxed">{description}</p>
        <div className="mt-6">
          <CTAButton href={href} className="w-full sm:w-auto !text-sm !px-5 !py-3">
            {cta}
          </CTAButton>
        </div>
      </div>
    </article>
  );
}
