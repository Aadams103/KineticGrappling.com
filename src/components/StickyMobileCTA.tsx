"use client";

import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export function StickyMobileCTA() {
  return <nav aria-label="Quick actions" className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-brand-black/95 p-2 backdrop-blur-md md:hidden">
    <div className="grid grid-cols-3 gap-2">
      <a href={siteConfig.phoneHref} className="flex min-h-12 items-center justify-center border border-white/20 px-2 text-sm font-bold text-white">Call</a>
      <Link href="/schedule" className="flex min-h-12 items-center justify-center border border-brand-gold px-2 text-sm font-bold text-brand-gold">Schedule</Link>
      <Link href="/free-trial" className="flex min-h-12 items-center justify-center bg-brand-red px-2 text-center text-sm font-extrabold text-white">Free trial</Link>
    </div>
  </nav>;
}
