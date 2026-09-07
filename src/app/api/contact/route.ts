import { NextResponse } from "next/server";
import { siteConfig } from "@/lib/site-config";

function asString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as Record<string, unknown> | null;

  const name = asString(body?.name);
  const email = asString(body?.email);
  const phone = asString(body?.phone);
  const program = asString(body?.program);
  const message = asString(body?.message);

  if (!name || !email || !phone) {
    return NextResponse.json(
      { ok: false, error: "Name, email, and phone are required." },
      { status: 400 }
    );
  }

  const subject = `Free class request from ${name}`;
  const lines = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${phone}`,
    `Program: ${program || "Not specified"}`,
    "",
    message || "No additional message.",
  ];
  const mailto = `mailto:${siteConfig.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join("\n"))}`;

  return NextResponse.json({
    ok: true,
    mailto,
    notice:
      "Your email app should open with the request filled in. If it does not, call or email us directly.",
  });
}
