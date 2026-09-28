import Image from "next/image";
import { brandAssets, firstClassExpectations, siteConfig } from "@/lib/site-config";
import { CTAButton } from "./CTAButton";
import { SectionHeading } from "./SectionHeading";

export function FirstClassSection() {
  return (
    <section className="bg-brand-paper py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="First visit"
              title="What to Expect in Your First Class"
              subtitle="Your first visit should feel simple, welcoming, and low-pressure."
              align="left"
            />
            <ul className="space-y-3">
              {firstClassExpectations.map((item) => (
                <li key={item} className="flex items-start gap-3 text-brand-gray">
                  <svg
                    className="mt-1 h-5 w-5 shrink-0 text-brand-gold"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <CTAButton href={siteConfig.contactPath}>{siteConfig.primaryCta}</CTAButton>
            </div>
          </div>
          <div className="mx-auto w-full max-w-lg bg-brand-light">
            <Image
              src={brandAssets.firstClassImage}
              alt={brandAssets.firstClassAlt}
              width={1600}
              height={1600}
              className="h-auto w-full"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
