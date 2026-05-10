import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export function createMetadata({
  title,
  description,
  path = "/",
  image = "/og.svg"
}: {
  title: string;
  description: string;
  path?: string;
  image?: string;
}): Metadata {
  const url = `${siteConfig.url}${path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      images: [{ url: image, width: 1200, height: 630, alt: title }],
      locale: "en_US",
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image]
    }
  };
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "HouseCleaning",
    name: siteConfig.name,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    areaServed: siteConfig.serviceArea,
    priceRange: "$$",
    image: `${siteConfig.url}/og.svg`,
    sameAs: []
  };
}
