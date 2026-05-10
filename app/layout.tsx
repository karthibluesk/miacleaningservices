import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";
import { siteConfig } from "@/lib/site";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: "Mia’s Cleaning Service | Elegant Home Cleaning", template: "%s | Mia’s Cleaning Service" },
  description: "Premium, friendly house cleaning with simple booking, recurring plans, deep cleans, and eco-conscious options.",
  applicationName: siteConfig.name,
  openGraph: {
    title: "Mia’s Cleaning Service",
    description: "Women owned and operated premium home cleaning with friendly, detail-focused care.",
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [{ url: "/images/mias-cleaning-service-logo.png", width: 1536, height: 1024, alt: "Mia’s Cleaning Service logo" }],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Mia’s Cleaning Service",
    description: "Women owned and operated premium home cleaning.",
    images: ["/images/mias-cleaning-service-logo.png"]
  },
  icons: {
    icon: "/images/mias-cleaning-service-logo.webp"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <StickyMobileCTA />
      </body>
    </html>
  );
}
