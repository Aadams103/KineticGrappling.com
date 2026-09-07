import { CTAButton } from "./CTAButton";
import { siteConfig } from "@/lib/site-config";

export function StickyMobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-white/10 bg-brand-black/95 p-3 backdrop-blur-md md:hidden">
      <div className="flex gap-2">
        <CTAButton href={siteConfig.contactPath} className="flex-1 !py-3 !text-xs">
          {siteConfig.primaryCta}
        </CTAButton>
        <a
          href={siteConfig.phoneHref}
          className="inline-flex min-h-[48px] items-center justify-center rounded-sm border-2 border-brand-gold px-4 py-3 text-sm font-semibold text-brand-gold"
          aria-label={`Call ${siteConfig.phone}`}
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}
