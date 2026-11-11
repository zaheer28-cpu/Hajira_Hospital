import type { Metadata } from "next";
import { Newsreader, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  display: "swap",
  style: ["normal", "italic"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hajira Hospital · Promoting Health and Care · Kanispora Baramulla",
  description:
    "Hajira Hospital (Regd. No. CMO/CE/269), Near J&K Bank / Petrol Pump, Kanispora – Baramulla. Senior faculty & clinicians from GMC Baramulla, SKIMS & SMHS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${newsreader.variable} ${plusJakartaSans.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen bg-[#FAF8F5] text-[#18231E] font-sans selection:bg-[#1C382B] selection:text-white">
        {children}
      </body>
    </html>
  );
}
