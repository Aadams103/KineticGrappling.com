"use client";

import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { trackEvent } from "@/lib/analytics";

export function StickyMobileCTA() {
  return <nav aria-label="Quick actions" className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-brand-black/95 p-2 backdrop-blur-md md:hidden">
    <div className="grid grid-cols-3 gap-2">
      <a href={siteConfig.phoneHref} onClick={() => trackEvent("phone_click", { location: "mobile_bar" })} className="flex min-h-12 items-center justify-center border border-white/20 px-2 text-xs font-bold uppercase tracking-wider text-white">Call</a>
      <Link href="/schedule" onClick={() => trackEvent("schedule_view", { location: "mobile_bar" })} className="flex min-h-12 items-center justify-center border border-brand-gold px-2 text-xs font-bold uppercase tracking-wider text-brand-gold">Schedule</Link>
      <Link href="/free-trial" onClick={() => trackEvent("free_trial_cta_click", { location: "mobile_bar" })} className="flex min-h-12 items-center justify-center bg-brand-gold px-2 text-center text-xs font-extrabold uppercase tracking-wider text-brand-black">Free trial</Link>
    </div>
  </nav>;
}
