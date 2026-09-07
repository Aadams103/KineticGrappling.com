"use client";

import { FormEvent, useMemo, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import { siteConfig } from "@/lib/site-config";
import { trackEvent } from "@/lib/analytics";

const programs = [
  ["little-grapplers", "Little Grapplers (ages 3–5)"], ["kids-bjj", "Kids BJJ (ages 6–12)"],
  ["adult-fundamentals", "Adult BJJ Fundamentals"], ["no-gi", "No-Gi Grappling"], ["mma", "MMA"],
  ["wrestling", "Wrestling"], ["competition", "Competition Training"], ["private-lessons", "Private Lessons"],
  ["not-sure", "Not sure — help me choose"],
] as const;

const fieldClass = "mt-1.5 min-h-12 w-full rounded-sm border border-black/20 bg-white px-4 py-3 text-base focus:border-brand-red focus:ring-2 focus:ring-brand-red/20";

export function ContactForm() {
  const searchParams = useSearchParams();
  const requested = searchParams.get("program") ?? "";
  const initialProgram = useMemo(() => programs.some(([value]) => value === requested) ? requested : "", [requested]);
  const started = useRef(false);
  const [state, setState] = useState<"idle" | "pending" | "success">("idle");
  const [error, setError] = useState("");
  const [fallback, setFallback] = useState<string | null>(null);

  function onStart() {
    if (!started.current) {
      started.current = true;
      trackEvent("trial_form_start", { path: window.location.pathname });
    }
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(""); setState("pending");
    const payload = Object.fromEntries(new FormData(event.currentTarget).entries());
    try {
      const response = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
      const result = await response.json() as { ok?: boolean; error?: string; mailto?: string; delivered?: boolean };
      if (!response.ok || !result.ok) throw new Error(result.error || "We could not prepare your request.");
      trackEvent("trial_form_submit", { program: payload.program, delivered: result.delivered });
      setFallback(result.mailto ?? null); setState("success");
    } catch (problem) {
      setError(problem instanceof Error ? problem.message : "We could not prepare your request."); setState("idle");
    }
  }

  if (state === "success") {
    return <div className="border border-brand-gold/40 bg-brand-light p-7" role="status" tabIndex={-1}>
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-red">Request received</p>
      <h2 className="font-display mt-2 text-2xl font-extrabold uppercase">Your next step is simple.</h2>
      <p className="mt-3 leading-relaxed text-brand-gray">The Kinetic team will use your details to help place you in the right class. Wear workout clothes, bring water, and plan to arrive early.</p>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <a className="inline-flex min-h-12 items-center justify-center bg-brand-gold px-5 font-bold uppercase tracking-wider text-brand-black" href={siteConfig.booking.glofox} target="_blank" rel="noreferrer">View live booking</a>
        {fallback && <a className="inline-flex min-h-12 items-center justify-center border-2 border-brand-charcoal px-5 font-bold uppercase tracking-wider" href={fallback}>Send by email</a>}
      </div>
    </div>;
  }

  return <form onSubmit={submit} onFocus={onStart} className="space-y-5" noValidate aria-describedby={error ? "form-error" : undefined}>
    <div className="hidden" aria-hidden="true"><label htmlFor="website">Website</label><input id="website" name="website" tabIndex={-1} autoComplete="off" /></div>
    <div className="grid gap-5 sm:grid-cols-2">
      <Field label="Name" name="name" autoComplete="name" required />
      <Field label="Phone" name="phone" type="tel" autoComplete="tel" required />
    </div>
    <Field label="Email" name="email" type="email" autoComplete="email" required />
    <div className="grid gap-5 sm:grid-cols-2">
      <div><label htmlFor="student" className="block font-semibold">Who will train? <span aria-hidden="true" className="text-brand-red">*</span></label>
        <select id="student" name="student" required className={fieldClass} defaultValue=""><option value="" disabled>Select one</option><option value="adult">Adult / teen</option><option value="child">Child</option><option value="family">Multiple family members</option></select>
      </div>
      <div><label htmlFor="program" className="block font-semibold">Program interest</label>
        <select id="program" name="program" className={fieldClass} defaultValue={initialProgram}><option value="">Select a program</option>{programs.map(([value, label]) => <option key={value} value={value}>{label}</option>)}</select>
      </div>
    </div>
    <div><label htmlFor="preferredDay" className="block font-semibold">Preferred class or day</label><input id="preferredDay" name="preferredDay" className={fieldClass} placeholder="Example: Monday evening" /></div>
    <div><label htmlFor="message" className="block font-semibold">Anything the coach should know? <span className="font-normal text-brand-gray">(optional)</span></label><textarea id="message" name="message" rows={3} className={fieldClass} placeholder="Goals, experience, child's age, or a question" /></div>
    {error && <p id="form-error" role="alert" className="border-l-4 border-brand-red bg-red-50 p-3 text-red-900">{error}</p>}
    <button type="submit" disabled={state === "pending"} className="min-h-[54px] w-full bg-brand-gold px-6 py-4 font-bold uppercase tracking-[0.14em] text-brand-black hover:bg-brand-gold-light disabled:opacity-60">{state === "pending" ? "Sending…" : "Request My Free Trial"}</button>
    <p className="text-sm text-brand-gray">Prefer to book directly? Use the current <a className="font-semibold text-brand-charcoal underline" href={siteConfig.booking.glofox} target="_blank" rel="noreferrer">Glofox class portal</a> or call <a className="font-semibold text-brand-charcoal underline" href={siteConfig.phoneHref}>{siteConfig.phone}</a>.</p>
  </form>;
}

function Field({ label, name, type = "text", required, autoComplete }: { label: string; name: string; type?: string; required?: boolean; autoComplete?: string }) {
  return <div><label htmlFor={name} className="block font-semibold">{label} {required && <span aria-hidden="true" className="text-brand-red">*</span>}</label><input id={name} name={name} type={type} required={required} className={fieldClass} autoComplete={autoComplete} /></div>;
}
