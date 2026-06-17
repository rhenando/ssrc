"use client";

import { useActionState } from "react";
import { Send } from "lucide-react";
import { submitContact } from "./actions";
import type { Locale } from "@/lib/types";

export function ContactForm({ locale }: { locale: Locale }) {
  const [state, action, pending] = useActionState(submitContact, null);
  const isAr = locale === "ar";

  return (
    <form action={action} className="rounded-2xl border border-border bg-white p-6 shadow-card md:p-8">
      <input type="hidden" name="locale" value={locale} />
      <div className="grid gap-4">
        <label className="grid gap-1.5 text-sm font-semibold text-navy">
          {isAr ? "الاسم" : "Name"}
          <input name="name" required className="rounded-lg border border-border px-4 py-3 text-text outline-none focus:border-teal" />
        </label>
        <label className="grid gap-1.5 text-sm font-semibold text-navy">
          {isAr ? "البريد الإلكتروني" : "Email"}
          <input name="email" type="email" required className="rounded-lg border border-border px-4 py-3 text-text outline-none focus:border-teal" />
        </label>
        <label className="grid gap-1.5 text-sm font-semibold text-navy">
          {isAr ? "الشركة" : "Company"}
          <input name="company" className="rounded-lg border border-border px-4 py-3 text-text outline-none focus:border-teal" />
        </label>
        <label className="grid gap-1.5 text-sm font-semibold text-navy">
          {isAr ? "الرسالة" : "Message"}
          <textarea name="message" required rows={6} className="resize-none rounded-lg border border-border px-4 py-3 text-text outline-none focus:border-teal" />
        </label>
      </div>
      {state?.error && <p className="mt-4 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">{state.error}</p>}
      {state?.ok && <p className="mt-4 rounded-lg bg-teal-pale px-4 py-3 text-sm text-teal">{isAr ? "تم استلام رسالتك." : "Your message has been received."}</p>}
      <button disabled={pending} className="mt-6 inline-flex items-center gap-2 rounded-lg border-2 border-teal bg-teal px-6 py-3 text-sm font-semibold text-white transition hover:bg-teal-hover disabled:opacity-60">
        {isAr ? "إرسال" : "Send Message"}
        <Send className="h-4 w-4" />
      </button>
    </form>
  );
}
