import { Download, FileText } from "lucide-react";
import { SectionHeading } from "@/components/public/section-heading";
import { getPublicData } from "@/data/queries";
import type { Locale } from "@/lib/types";
import { t } from "@/lib/utils";

export default async function DownloadsPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const data = await getPublicData();
  const isAr = locale === "ar";

  return (
    <section className="bg-gray-light px-6 py-16 md:px-10 md:py-20">
      <div className="mx-auto max-w-[1100px]">
        <SectionHeading eyebrow={isAr ? "التحميلات" : "Downloads"} title={isAr ? "مركز التحميل" : "Download Center"} locale={locale}>
          {isAr
            ? "يمكنك الوصول إلى مواد مشروع SSRC والملفات التعريفية والموارد القابلة للتحميل في مكان واحد."
            : "Access SSRC project materials, company documents, and downloadable resources in one place."}
        </SectionHeading>

        <div className="mx-auto grid max-w-[840px] grid-cols-1 gap-6 md:grid-cols-2">
          {data.downloads.map((download) => (
            <article key={download.slug} className="card-bar relative overflow-hidden rounded-2xl border border-border bg-white px-7 py-8 transition hover:-translate-y-1 hover:shadow-card">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-pale text-teal">
                <FileText className="h-6 w-6" />
              </div>
              <h2 className="mb-2 font-head text-[1.15rem] font-bold text-navy">{t(download.filenames, locale)}</h2>
              <p className="mb-6 text-sm leading-7 text-muted">{t(download.descriptions, locale)}</p>
              <a href={download.filePath} download className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-teal bg-teal px-5 py-3 text-[.92rem] font-semibold text-white shadow-[0_4px_18px_rgba(0,128,128,.22)] transition hover:-translate-y-0.5 hover:border-teal-hover hover:bg-teal-hover">
                {t(download.filenames, locale)}
                <Download className="h-4 w-4" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
