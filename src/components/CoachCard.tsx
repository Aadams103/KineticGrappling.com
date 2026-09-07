import Image from "next/image";

interface CoachCardProps {
  name: string;
  title: string;
  rank?: string;
  bio: string;
  focus: string[];
  image: string | null;
  imageAlt: string;
}

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2);
}

export function CoachCard({
  name,
  title,
  rank,
  bio,
  focus,
  image,
  imageAlt,
}: CoachCardProps) {
  return (
    <article className="overflow-hidden rounded-sm border border-black/5 bg-white shadow-[0_18px_50px_-28px_rgba(0,0,0,0.4)]">
      <div className="relative aspect-[4/5] bg-brand-charcoal">
        {image ? (
          <Image
            src={image}
            alt={imageAlt}
            fill
            className="object-cover object-top"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          />
        ) : (
          <div className="flex h-full flex-col items-center justify-center bg-gradient-to-br from-brand-charcoal to-brand-black text-brand-gold">
            <span className="font-display text-5xl font-extrabold">{initials(name)}</span>
            <span className="mt-2 text-xs uppercase tracking-[0.2em] text-white/50">Coach</span>
          </div>
        )}
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-black via-brand-black/80 to-transparent p-6 pt-16">
          <h3 className="font-display text-xl font-extrabold uppercase text-white">{name}</h3>
          <p className="text-sm font-medium text-brand-gold">{title}</p>
          {rank && <p className="text-xs uppercase tracking-wider text-white/70">{rank}</p>}
        </div>
      </div>
      <div className="p-6">
        <p className="leading-relaxed text-brand-gray">{bio}</p>
        <div className="mt-4">
          <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-charcoal">
            Teaching Focus
          </h4>
          <ul className="mt-2 flex flex-wrap gap-2">
            {focus.map((item) => (
              <li
                key={item}
                className="rounded-sm bg-brand-light px-3 py-1 text-xs font-medium text-brand-gray"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}
