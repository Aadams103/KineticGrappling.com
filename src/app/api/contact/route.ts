import { NextResponse } from "next/server";
import { siteConfig } from "@/lib/site-config";

const clean = (value: unknown, max = 500) => typeof value === "string" ? value.trim().slice(0, max) : "";
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  const body = await request.json().catch(() => null) as Record<string, unknown> | null;
  if (!body) return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  if (clean(body.website)) return NextResponse.json({ ok: true, delivered: true });
  const fields = {
    name: clean(body.name, 100), phone: clean(body.phone, 40), email: clean(body.email, 160),
    student: clean(body.student, 40), program: clean(body.program, 80), preferredDay: clean(body.preferredDay, 100), message: clean(body.message, 1000),
  };
  if (!fields.name || !fields.phone || !fields.email || !fields.student) return NextResponse.json({ ok: false, error: "Name, phone, email, and who will train are required." }, { status: 400 });
  if (!emailPattern.test(fields.email)) return NextResponse.json({ ok: false, error: "Enter a valid email address." }, { status: 400 });

  const subject = `Kinetic free-trial request: ${fields.name}`;
  const bodyText = [`Name: ${fields.name}`, `Phone: ${fields.phone}`, `Email: ${fields.email}`, `Student: ${fields.student}`, `Program: ${fields.program || "Not sure"}`, `Preferred class/day: ${fields.preferredDay || "Not specified"}`, "", fields.message || "No additional note."].join("\n");
  const mailto = `mailto:${siteConfig.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyText)}`;
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return NextResponse.json({ ok: true, delivered: false, mailto });

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({ from: process.env.TRIAL_FORM_FROM_EMAIL || "Kinetic Grappling Website <onboarding@resend.dev>", to: [process.env.TRIAL_FORM_TO_EMAIL || siteConfig.email], reply_to: fields.email, subject, text: bodyText }),
  });
  if (!response.ok) return NextResponse.json({ ok: true, delivered: false, mailto });
  return NextResponse.json({ ok: true, delivered: true });
}
