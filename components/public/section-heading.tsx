import type { Locale } from "@/lib/types";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  children,
  locale,
  light = false
}: {
  eyebrow?: string;
  title: string;
  children?: React.ReactNode;
  locale: Locale;
  light?: boolean;
}) {
  return (
    <div className={cn("mx-auto mb-12 max-w-3xl text-center", locale === "ar" && "font-arabic")}>
      {eyebrow && <span className={cn("text-[.74rem] font-bold uppercase tracking-[2px]", light ? "text-teal-pale" : "text-teal")}>{eyebrow}</span>}
      <h2 className={cn("mt-1 font-head text-[clamp(1.7rem,3vw,2.4rem)] font-bold", light ? "text-white" : "text-navy")}>{title}</h2>
      <div className="section-rule mt-3" />
      {children && <p className={cn("mx-auto mt-5 max-w-2xl text-sm leading-7 md:text-base", light ? "text-white/70" : "text-muted")}>{children}</p>}
    </div>
  );
}
