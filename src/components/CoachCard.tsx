import Image from "next/image";

interface CoachCardProps {
  name: string;
  rank: string;
  bio: string;
  focus: string[];
  credentials: string[];
  image: string;
}

export function CoachCard({
  name,
  rank,
  bio,
  focus,
  credentials,
  image,
}: CoachCardProps) {
  return (
    <article className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
      <div className="relative aspect-[4/5] bg-brand-light">
        <Image
          src={image}
          alt={`${name}, ${rank} — coach at Kinetic Grappling in College Station, TX`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-charcoal/90 to-transparent p-6 pt-16">
          <h3 className="text-xl font-bold text-white">{name}</h3>
          <p className="text-sm font-medium text-brand-red">{rank}</p>
        </div>
      </div>
      <div className="p-6">
        <p className="text-brand-gray leading-relaxed">{bio}</p>
        <div className="mt-4">
          <h4 className="text-sm font-semibold uppercase tracking-wider text-brand-charcoal">
            Teaching Focus
          </h4>
          <ul className="mt-2 flex flex-wrap gap-2">
            {focus.map((item) => (
              <li
                key={item}
                className="rounded-full bg-brand-light px-3 py-1 text-xs font-medium text-brand-gray"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-4">
          <h4 className="text-sm font-semibold uppercase tracking-wider text-brand-charcoal">
            Credentials
          </h4>
          <ul className="mt-2 space-y-1">
            {credentials.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-brand-gray">
                <svg className="mt-0.5 h-4 w-4 shrink-0 text-brand-red" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}
