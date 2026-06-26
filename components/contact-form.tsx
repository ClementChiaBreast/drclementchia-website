"use client";

import { useState, type FormEvent } from "react";
import { Arrow } from "@/components/icons";
import { enquiryCategories } from "@/lib/contact";

type Status = { kind: "idle" | "sending" | "success" | "error"; message: string };

export function ContactForm() {
  const [status, setStatus] = useState<Status>({ kind: "idle", message: "" });

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    setStatus({ kind: "sending", message: "Sending your enquiry…" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          category: data.get("category"),
          message: data.get("message"),
          contactFax: data.get("contactFax"),
          acknowledgement: data.get("acknowledgement") === "on",
        }),
      });
      const result = await response.json() as { error?: string };
      if (!response.ok) throw new Error(result.error || "Your enquiry could not be sent.");
      form.reset();
      setStatus({ kind: "success", message: "Thank you. Your enquiry has been sent successfully." });
    } catch (error) {
      setStatus({ kind: "error", message: error instanceof Error ? error.message : "Your enquiry could not be sent. Please try again." });
    }
  }

  const fieldClass = "mt-3 w-full border-b-2 hairline bg-transparent py-3 outline-none focus:border-[var(--coral)]";

  return <form className="relative mt-10 space-y-8" onSubmit={submit}>
    <div className="absolute -left-[9999px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
      <input name="contactFax" tabIndex={-1} autoComplete="new-password" aria-hidden="true" />
    </div>
    <label className="block"><span className="eyebrow">Name</span><input name="name" required minLength={2} maxLength={120} autoComplete="name" className={fieldClass} placeholder="Your name" /></label>
    <label className="block"><span className="eyebrow">Email</span><input name="email" required type="email" maxLength={254} autoComplete="email" className={fieldClass} placeholder="you@organisation.com" /></label>
    <label className="block"><span className="eyebrow">Enquiry category</span><select name="category" required defaultValue="" className={fieldClass}><option value="" disabled>Select a category</option>{enquiryCategories.map((category) => <option key={category}>{category}</option>)}</select></label>
    <label className="block"><span className="eyebrow">Message</span><textarea name="message" required minLength={10} maxLength={5000} rows={5} className={`${fieldClass} resize-none`} placeholder="Tell me about your enquiry. Please do not include confidential clinical information." /></label>
    <div className="rounded-2xl border hairline bg-[var(--cream)] p-5"><p className="text-sm font-bold leading-6">This form is not for urgent medical concerns, confidential clinical information, appointment requests or personal medical advice.</p><p className="muted mt-2 text-sm leading-6">Patients should contact their treating healthcare team or the appropriate healthcare institution. For urgent concerns, seek timely medical care through the appropriate local service.</p><label className="mt-4 flex items-start gap-3 text-sm leading-6"><input name="acknowledgement" required type="checkbox" className="mt-1 h-4 w-4 accent-[var(--coral)]" /><span>I understand and will not submit confidential clinical information or request personal medical advice.</span></label></div>
    <button disabled={status.kind === "sending"} className="inline-flex min-h-12 items-center gap-5 rounded-full bg-[var(--ink)] px-7 py-4 text-xs font-bold uppercase tracking-[.12em] !text-white transition-opacity disabled:cursor-wait disabled:opacity-60">{status.kind === "sending" ? "Sending…" : "Send enquiry"}<Arrow className="h-4 w-4" /></button>
    <p role="status" aria-live="polite" className={`min-h-7 text-sm font-semibold leading-7 ${status.kind === "success" ? "text-[var(--ink)]" : status.kind === "error" ? "text-[var(--coral)]" : "muted"}`}>{status.message}</p>
  </form>;
}
