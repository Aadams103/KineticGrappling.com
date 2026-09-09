export type AnalyticsEvent =
  | "free_trial_cta_click"
  | "trial_form_start"
  | "trial_form_submit"
  | "phone_click"
  | "directions_click"
  | "schedule_view"
  | "program_view"
  | "pricing_view"
  | "social_outbound_click";

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
  }
}

export function trackEvent(event: AnalyticsEvent, details: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push({ event, ...details });
}

export function inferAnalyticsEvent(href: string): AnalyticsEvent | undefined {
  if (href.startsWith("tel:")) return "phone_click";
  if (href.includes("google.com/maps")) return "directions_click";
  if (href.startsWith("/free-trial")) return "free_trial_cta_click";
  if (/instagram|facebook|youtube/.test(href)) return "social_outbound_click";
}
