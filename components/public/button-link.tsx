import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { Locale } from "@/lib/types";
import { cn } from "@/lib/utils";

export function ButtonLink({
  href,
  children,
  locale,
  variant = "primary"
}: {
  href: string;
  children: React.ReactNode;
  locale: Locale;
  variant?: "primary" | "dark" | "light" | "outline";
}) {
  const Arrow = locale === "ar" ? ArrowLeft : ArrowRight;
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-lg border-2 px-6 py-3 text-sm font-semibold transition hover:-translate-y-0.5",
        variant === "primary" && "border-teal bg-teal text-white shadow-[0_4px_18px_rgba(0,128,128,.28)] hover:border-teal-hover hover:bg-teal-hover",
        variant === "dark" && "border-navy bg-transparent text-navy hover:bg-navy hover:text-white",
        variant === "light" && "border-white bg-white text-navy hover:bg-transparent hover:text-white",
        variant === "outline" && "border-white/25 bg-transparent text-white/80 hover:border-teal hover:text-teal"
      )}
    >
      {children}
      <Arrow className="h-4 w-4" />
    </Link>
  );
}
