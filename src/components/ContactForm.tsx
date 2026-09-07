"use client";

import { FormEvent, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { siteConfig } from "@/lib/site-config";

const programOptions = [
  { value: "little-grapplers", label: "Little Grapplers (Ages 3–5)" },
  { value: "kids-bjj", label: "Kids BJJ (Ages 6–12)" },
  { value: "adult-fundamentals", label: "Teen / Adult BJJ Fundamentals" },
  { value: "no-gi", label: "No-Gi Grappling" },
  { value: "competition", label: "Competition Training" },
  { value: "private-lessons", label: "Private Lessons" },
  { value: "not-sure", label: "Not sure — help me choose" },
] as const;

const fieldClass =
  "mt-1.5 w-full rounded-sm border border-black/10 bg-white px-4 py-3 focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20";

export function ContactForm() {
  const searchParams = useSearchParams();
  const defaultProgram = useMemo(() => {
    const requested = searchParams.get("program") ?? "";
    return programOptions.some((option) => option.value === requested) ? requested : "";
  }, [searchParams]);

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [pending, setPending] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    setPending(true);

    const form = new FormData(e.currentTarget);
    const payload = {
      name: String(form.get("name") ?? ""),
      email: String(form.get("email") ?? ""),
      phone: String(form.get("phone") ?? ""),
      program: String(form.get("program") ?? ""),
      message: String(form.get("message") ?? ""),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = (await response.json()) as { ok?: boolean; mailto?: string; error?: string };

      if (!response.ok || !data.ok) {
        throw new Error(data.error || "Unable to send your request.");
      }

      if (data.mailto) {
        window.location.href = data.mailto;
      }
      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unable to send your request.");
    } finally {
      setPending(false);
    }
  }

  if (submitted) {
    return (
      <div className="border border-brand-gold/30 bg-brand-light p-8 text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand-gold/20">
          <svg className="h-7 w-7 text-brand-gold-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-display mt-4 text-xl font-extrabold uppercase text-brand-charcoal">
          Request Ready
        </h3>
        <p className="mt-2 text-brand-gray">
          Your email app should open with the class request filled in. If it does not, call{" "}
          <a href={siteConfig.phoneHref} className="font-semibold text-brand-gold-dark">
            {siteConfig.phone}
          </a>{" "}
          or email{" "}
          <a href={siteConfig.emailHref} className="font-semibold text-brand-gold-dark">
            {siteConfig.email}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-brand-charcoal">
            Full Name <span className="text-brand-gold-dark">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            autoComplete="name"
            className={fieldClass}
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-brand-charcoal">
            Email <span className="text-brand-gold-dark">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            autoComplete="email"
            className={fieldClass}
            placeholder="you@email.com"
          />
        </div>
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-brand-charcoal">
          Phone <span className="text-brand-gold-dark">*</span>
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          required
          autoComplete="tel"
          className={fieldClass}
          placeholder="(979) 555-0123"
        />
      </div>

      <div>
        <label htmlFor="program" className="block text-sm font-medium text-brand-charcoal">
          Interested Program
        </label>
        <select
          id="program"
          name="program"
          className={fieldClass}
          defaultValue={defaultProgram}
        >
          <option value="">Select a program</option>
          {programOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-brand-charcoal">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className={fieldClass}
          placeholder="Tell us about your goals, your child's age, or any questions..."
        />
      </div>

      {error && <p className="text-sm text-red-700">{error}</p>}

      <button
        type="submit"
        disabled={pending}
        className="min-h-[52px] w-full rounded-sm bg-brand-gold px-6 py-4 text-sm font-bold uppercase tracking-[0.14em] text-brand-black transition-colors hover:bg-brand-gold-dark disabled:opacity-70"
      >
        {pending ? "Preparing request..." : "Book a Free Class"}
      </button>
    </form>
  );
}
