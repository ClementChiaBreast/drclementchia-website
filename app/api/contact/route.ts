import { randomUUID } from "node:crypto";
import { NextResponse } from "next/server";
import { enquiryCategories, type ContactPayload } from "@/lib/contact";

export const runtime = "nodejs";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type ResendError = {
  name?: string;
  message?: string;
};

function clean(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function escapeHtml(value: string) {
  return value.replace(/[&<>'"]/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[character] ?? character);
}

export async function POST(request: Request) {
  let body: Partial<ContactPayload>;

  try {
    const parsed: unknown = await request.json();
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) throw new Error("Invalid request");
    body = parsed as Partial<ContactPayload>;
  } catch {
    return NextResponse.json({ error: "Please check the form and try again." }, { status: 400 });
  }

  const name = clean(body.name, 120);
  const email = clean(body.email, 254).toLowerCase();
  const category = clean(body.category, 80);
  const message = clean(body.message, 5000);
  const contactFax = clean(body.contactFax, 200);

  // Silently accept automated submissions so the honeypot does not reveal itself.
  if (contactFax) return NextResponse.json({ ok: true });

  if (name.length < 2 || !emailPattern.test(email) || !enquiryCategories.includes(category as ContactPayload["category"]) || message.length < 10 || body.acknowledgement !== true) {
    return NextResponse.json({ error: "Please complete all required fields and confirm the form disclaimer." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !to || !from || !emailPattern.test(to) || !emailPattern.test(from)) {
    return NextResponse.json({ error: "The enquiry service is temporarily unavailable. Please try again later." }, { status: 503 });
  }

  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeCategory = escapeHtml(category);
  const safeMessage = escapeHtml(message).replace(/\n/g, "<br />");

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        "Idempotency-Key": randomUUID(),
      },
      body: JSON.stringify({
        from: `Dr Clement Chia Website <${from}>`,
        to: [to],
        reply_to: email,
        subject: `[Website enquiry] ${category} — ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nCategory: ${category}\n\nMessage:\n${message}`,
        html: `<h2>New website enquiry</h2><p><strong>Name:</strong> ${safeName}</p><p><strong>Email:</strong> ${safeEmail}</p><p><strong>Category:</strong> ${safeCategory}</p><p><strong>Message:</strong><br />${safeMessage}</p>`,
        tags: [{ name: "source", value: "website-contact" }],
      }),
    });

    if (response.ok) return NextResponse.json({ ok: true });

    const providerError = await response.json().catch(() => ({})) as ResendError;
    const providerMessage = providerError.message?.toLowerCase() ?? "";

    console.error("Resend rejected contact email", {
      status: response.status,
      name: providerError.name ?? "unknown",
      message: providerError.message ?? "No provider message",
    });

    if (providerMessage.includes("domain") && providerMessage.includes("verif")) {
      return NextResponse.json({ error: "The website email sender has not been verified yet. Please try again after the email domain is verified." }, { status: 503 });
    }

    if (response.status === 401 || response.status === 403) {
      return NextResponse.json({ error: "The website email service is not authorised. Please check the Resend API key and sending-domain verification." }, { status: 503 });
    }

    if (providerError.message) {
      return NextResponse.json({ error: `Resend could not send the enquiry: ${providerError.message}` }, { status: 502 });
    }
  } catch {
    console.error("Resend contact request failed before receiving a response");
    return NextResponse.json({ error: "The website could not reach Resend. Please check that the Resend API key is active and try again." }, { status: 502 });
  }

  return NextResponse.json({ error: "Your enquiry could not be sent. Please try again later." }, { status: 502 });
}
