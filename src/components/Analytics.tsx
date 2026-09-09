"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { inferAnalyticsEvent, trackEvent, type AnalyticsEvent } from "@/lib/analytics";

export function Analytics() {
  const pathname = usePathname();
  useEffect(() => {
    const event = pathname === "/schedule" ? "schedule_view" : pathname === "/membership" ? "pricing_view" : /^\/(programs|.*-college-station)$/.test(pathname) ? "program_view" : undefined;
    if (event) trackEvent(event, { path: pathname });
  }, [pathname]);

  useEffect(() => {
    function click(event: MouseEvent) {
      const anchor = event.target instanceof Element ? event.target.closest("a") : null;
      if (!anchor) return;
      const href = anchor.getAttribute("href") ?? "";
      const name = anchor.dataset.analyticsEvent as AnalyticsEvent | undefined ?? inferAnalyticsEvent(href);
      if (name) trackEvent(name, { href, path: window.location.pathname });
    }
    document.addEventListener("click", click);
    return () => document.removeEventListener("click", click);
  }, []);
  return null;
}
