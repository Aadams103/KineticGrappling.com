"use client";

import { FormEvent, useEffect, useMemo, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import { siteConfig, weeklySchedule } from "@/lib/site-config";
import { trackEvent } from "@/lib/analytics";

const programs = [
  ["little-grapplers", "Little Grapplers (ages 3–5)"], ["kids-bjj", "Kids BJJ (ages 6–12)"],
  ["adult-fundamentals", "Adult BJJ Fundamentals"], ["no-gi", "No-Gi Grappling"], ["mma", "MMA"],
  ["wrestling", "Wrestling"], ["competition", "Competition Training"], ["private-lessons", "Private Lessons"],
  ["not-sure", "Not sure — help me choose"],
] as const;

const fieldClass = "mt-1.5 min-h-12 w-full rounded-sm border border-brand-gray bg-white px-4 py-3 text-base focus:border-brand-red focus:ring-2 focus:ring-brand-red/20";

export function ContactForm({ deliveryEnabled = false }: { deliveryEnabled?: boolean }) {
  const searchParams = useSearchParams();
  const requested = searchParams.get("program") ?? "";
  const initialProgram = useMemo(() => programs.some(([value]) => value === requested) ? requested : "", [requested]);
  const requestedClass = searchParams.get("class") ?? "";
  const initialClass = weeklySchedule.some(entry => `${entry.day} · ${entry.program} · ${entry.time} Central` === requestedClass) ? requestedClass : "";
  const started = useRef(false);
  const [state, setState] = useState<"idle" | "pending" | "success" | "prepared">("idle");
  const confirmation = useRef<HTMLDivElement>(null);
  const [error, setError] = useState("");
  const [fallback, setFallback] = useState<string | null>(null);
  useEffect(() => {
    if (state === "success" || state === "prepared") confirmation.current?.focus();
  }, [state]);

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
      if (result.delivered) trackEvent("trial_form_submit", { program: payload.program });
      else if (!result.mailto) throw new Error("Your request has not been sent. Please call the academy or use Glofox.");
      setFallback(result.mailto ?? null); setState(result.delivered ? "success" : "prepared");
    } catch (problem) {
      setError(problem instanceof Error ? problem.message : "We could not prepare your request."); setState("idle");
    }
  }

  if (state === "success" || state === "prepared") {
    return <div ref={confirmation} className="border border-brand-gold/40 bg-brand-light p-7" role="status" tabIndex={-1}>
      <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-red">{state === "success" ? "Request sent" : "Your request has not been sent"}</p>
      <h2 className="font-display mt-2 text-2xl font-extrabold uppercase">{state === "success" ? "Let’s find your first class." : "One more step: send your email."}</h2>
      <p className="mt-3 leading-relaxed text-brand-gray">{state === "success" ? "Your request was accepted by our email provider for delivery to Kinetic. Your class is not reserved yet; please wait for the team to confirm, or call to arrange your visit." : "Online delivery is unavailable. Open the prepared message below in your email app, then press Send there. No class is reserved and the team has not received these details."}</p>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <a className="inline-flex min-h-12 items-center justify-center bg-brand-gold px-5 font-bold uppercase tracking-wider text-brand-black" href={siteConfig.booking.glofox} target="_blank" rel="noreferrer">View live booking</a>
        {fallback && <a className="order-first inline-flex min-h-12 items-center justify-center bg-brand-red px-5 py-3 font-bold text-white" href={fallback}>Open email to send request</a>}
      </div>
      <p className="mt-5 text-brand-gray">No email app? Call <a className="underline" href={siteConfig.phoneHref}>{siteConfig.phone}</a>. Once your visit is arranged, wear workout clothes and bring water.</p>
      <a className="mt-4 inline-flex min-h-11 items-center underline" href={siteConfig.social.googleMaps} target="_blank" rel="noreferrer">Directions to {siteConfig.address.full}</a>
    </div>;
  }

  return <form onSubmit={submit} onFocus={onStart} className="space-y-5" aria-describedby={error ? "form-error" : undefined}>
    {!deliveryEnabled && <p className="border-l-4 border-brand-red bg-brand-paper p-4 text-sm">This form prepares an email request. You’ll send it from your email app on the next step. You can also book directly through Glofox below.</p>}
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
    <div><label htmlFor="preferredDay" className="block font-semibold">Preferred class or day</label><input id="preferredDay" name="preferredDay" defaultValue={initialClass} maxLength={200} className={fieldClass} placeholder="Example: Monday evening" /></div>
    <div><label htmlFor="message" className="block font-semibold">Anything the coach should know? <span className="font-normal text-brand-gray">(optional)</span></label><textarea id="message" name="message" rows={3} className={fieldClass} placeholder="Goals, experience, child's age, or a question" /></div>
    {error && <p id="form-error" role="alert" className="border-l-4 border-brand-red bg-red-50 p-3 text-red-900">{error}</p>}
    <button type="submit" disabled={state === "pending"} className="min-h-[54px] w-full bg-brand-red px-6 py-4 font-bold uppercase tracking-[0.14em] text-white hover:bg-brand-red-dark disabled:opacity-60">{state === "pending" ? "Preparing…" : deliveryEnabled ? "Request My Free Trial" : "Prepare Trial Email"}</button>
    <p className="text-sm text-brand-gray">Prefer to book directly? Use the current <a className="font-semibold text-brand-charcoal underline" href={siteConfig.booking.glofox} target="_blank" rel="noreferrer">Glofox class portal</a> or call <a className="font-semibold text-brand-charcoal underline" href={siteConfig.phoneHref}>{siteConfig.phone}</a>.</p>
  </form>;
}

function Field({ label, name, type = "text", required, autoComplete }: { label: string; name: string; type?: string; required?: boolean; autoComplete?: string }) {
  return <div><label htmlFor={name} className="block font-semibold">{label} {required && <span aria-hidden="true" className="text-brand-red">*</span>}</label><input id={name} name={name} type={type} required={required} className={fieldClass} autoComplete={autoComplete} /></div>;
}
