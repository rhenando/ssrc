import { Mail, Phone } from "lucide-react";
import { ContactForm } from "./contact-form";
import { SectionHeading } from "@/components/public/section-heading";
import { getPublicData } from "@/data/queries";
import type { Locale } from "@/lib/types";

export default async function ContactPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const data = await getPublicData();
  const isAr = locale === "ar";

  return (
    <section className="bg-gray-light px-6 py-16 md:px-10 md:py-20">
      <div className="mx-auto max-w-[1100px]">
        <SectionHeading eyebrow={isAr ? "تواصل" : "Contact"} title={isAr ? "تواصل معنا" : "Get in Touch"} locale={locale}>
          {isAr ? "أرسل لنا رسالة أو تواصل عبر البريد والهاتف." : "Send a message or reach out through email and phone."}
        </SectionHeading>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-[.9fr_1.1fr]">
          <div className="space-y-4">
            {data.contactChannels.map((channel) => (
              <a key={channel.value} href={channel.href} className="flex items-center gap-4 rounded-2xl border border-border bg-white p-5 shadow-card transition hover:-translate-y-0.5">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-pale text-teal">
                  {channel.type === "email" ? <Mail className="h-5 w-5" /> : <Phone className="h-5 w-5" />}
                </span>
                <span>
                  <span className="block text-xs font-bold uppercase tracking-[1px] text-muted">{channel.label}</span>
                  <span className="font-semibold text-navy">{channel.value}</span>
                </span>
              </a>
            ))}
          </div>
          <ContactForm locale={locale} />
        </div>
      </div>
    </section>
  );
}
