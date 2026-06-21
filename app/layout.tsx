import type { Metadata } from "next";
import { Cairo, DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-body" });
const playfair = Playfair_Display({ subsets: ["latin"], weight: ["700", "800"], variable: "--font-head" });
const cairo = Cairo({ subsets: ["arabic", "latin"], weight: ["400", "600", "700", "800"], variable: "--font-arabic" });

export const metadata: Metadata = {
  title: "SSRC",
  description: "Strategic Solutions for Research and Consulting"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${dmSans.variable} ${playfair.variable} ${cairo.variable} font-body`}>{children}</body>
    </html>
  );
}
