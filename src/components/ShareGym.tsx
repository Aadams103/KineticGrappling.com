"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/site-config";
import { trackEvent } from "@/lib/analytics";

export function ShareGym() {
  const [status, setStatus] = useState("");
  const url = siteConfig.url;
  async function share() {
    setStatus("");
    try {
      if (navigator.share) {
        await navigator.share({ title: siteConfig.name, text: "Want to try Jiu-Jitsu in College Station? Here are Kinetic’s programs, class times, and free trial.", url });
        trackEvent("gym_share", { method: "native" });
        setStatus("Share completed.");
      } else {
        await navigator.clipboard.writeText(url);
        trackEvent("gym_share", { method: "copy" });
        setStatus("Link copied. Send it to a friend.");
      }
    } catch (error) {
      if (error instanceof Error && error.name === "AbortError") return;
      setStatus(`Copy this address to share: ${url}`);
    }
  }
  return <div><button onClick={share} type="button" className="inline-flex min-h-12 items-center justify-center border-2 border-brand-charcoal px-6 py-3 text-sm font-bold uppercase tracking-wider hover:bg-brand-charcoal hover:text-white">Share Kinetic with a friend</button><p className="mt-2 min-h-6 break-words text-sm text-brand-gray" role="status">{status}</p></div>;
}
