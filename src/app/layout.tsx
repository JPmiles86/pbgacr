import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-plus-jakarta-sans",
});

export const metadata: Metadata = {
  title: "Pacific Business & Accounting Group | PBAG Costa Rica",
  description: "Leading accounting, tax, and business advisory services in Costa Rica. Over 15 years of expertise helping businesses thrive with comprehensive financial solutions.",
  keywords: "accounting costa rica, tax services costa rica, cpa costa rica, business advisory, payroll services, audit services",
  openGraph: {
    title: "Pacific Business & Accounting Group | PBAG Costa Rica",
    description: "Leading accounting, tax, and business advisory services in Costa Rica. Over 15 years of expertise helping businesses thrive.",
    type: "website",
    locale: "en_US",
    alternateLocale: "es_ES",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${plusJakartaSans.variable} ${plusJakartaSans.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
