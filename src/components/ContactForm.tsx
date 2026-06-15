"use client";

import { useState, FormEvent } from "react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-green-200 bg-green-50 p-8 text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green-100">
          <svg className="h-7 w-7 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="mt-4 text-xl font-bold text-brand-charcoal">Thank You!</h3>
        <p className="mt-2 text-brand-gray">
          We received your free trial request. Our team will contact you shortly to help you choose the right first class.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-brand-charcoal">
            Full Name <span className="text-brand-red">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            autoComplete="name"
            className="mt-1.5 w-full rounded-lg border border-gray-200 px-4 py-3 text-brand-charcoal transition-colors focus:border-brand-red focus:ring-2 focus:ring-brand-red/20"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-brand-charcoal">
            Email <span className="text-brand-red">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            autoComplete="email"
            className="mt-1.5 w-full rounded-lg border border-gray-200 px-4 py-3 text-brand-charcoal transition-colors focus:border-brand-red focus:ring-2 focus:ring-brand-red/20"
            placeholder="you@email.com"
          />
        </div>
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-brand-charcoal">
          Phone <span className="text-brand-red">*</span>
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          required
          autoComplete="tel"
          className="mt-1.5 w-full rounded-lg border border-gray-200 px-4 py-3 text-brand-charcoal transition-colors focus:border-brand-red focus:ring-2 focus:ring-brand-red/20"
          placeholder="(979) 555-0123"
        />
      </div>

      <fieldset>
        <legend className="block text-sm font-medium text-brand-charcoal">
          Who is the class for? <span className="text-brand-red">*</span>
        </legend>
        <div className="mt-2 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {["Adult", "Child", "Teen", "Private Lesson"].map((option) => (
            <label
              key={option}
              className="flex cursor-pointer items-center gap-2 rounded-lg border border-gray-200 px-4 py-3 transition-colors has-[:checked]:border-brand-red has-[:checked]:bg-brand-red/5"
            >
              <input
                type="radio"
                name="classFor"
                value={option}
                required
                className="h-4 w-4 text-brand-red focus:ring-brand-red"
              />
              <span className="text-sm font-medium">{option}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <div>
        <label htmlFor="program" className="block text-sm font-medium text-brand-charcoal">
          Program Interest
        </label>
        <select
          id="program"
          name="program"
          className="mt-1.5 w-full rounded-lg border border-gray-200 px-4 py-3 text-brand-charcoal transition-colors focus:border-brand-red focus:ring-2 focus:ring-brand-red/20"
          defaultValue=""
        >
          <option value="" disabled>
            Select a program
          </option>
          <option value="little-grapplers">Little Grapplers (Ages 3–5)</option>
          <option value="kids-bjj">Kids BJJ (Ages 6–12)</option>
          <option value="adult-fundamentals">Adult BJJ Fundamentals</option>
          <option value="no-gi">No-Gi Grappling</option>
          <option value="competition">Competition Training</option>
          <option value="private-lessons">Private Lessons</option>
          <option value="not-sure">Not sure — help me choose</option>
        </select>
      </div>

      <div>
        <label htmlFor="preferredTime" className="block text-sm font-medium text-brand-charcoal">
          Preferred Class Time
        </label>
        <select
          id="preferredTime"
          name="preferredTime"
          className="mt-1.5 w-full rounded-lg border border-gray-200 px-4 py-3 text-brand-charcoal transition-colors focus:border-brand-red focus:ring-2 focus:ring-brand-red/20"
          defaultValue=""
        >
          <option value="" disabled>
            Select a time preference
          </option>
          <option value="weekday-evening">Weekday evenings</option>
          <option value="weekday-morning">Weekday mornings</option>
          <option value="weekend">Weekends</option>
          <option value="flexible">Flexible</option>
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
          className="mt-1.5 w-full rounded-lg border border-gray-200 px-4 py-3 text-brand-charcoal transition-colors focus:border-brand-red focus:ring-2 focus:ring-brand-red/20"
          placeholder="Tell us about your goals, your child's age, or any questions you have..."
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-lg bg-brand-red px-6 py-4 text-base font-semibold text-white transition-colors hover:bg-brand-red-dark min-h-[52px]"
      >
        Book My Free Trial
      </button>

      <p className="text-center text-xs text-brand-gray">
        By submitting, you agree to be contacted about your free trial class. We respect your privacy.
      </p>
    </form>
  );
}
