import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-pink/15 bg-[#fff7fb]">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-4 lg:px-8">
        <div className="md:col-span-2">
          <Image
            src="/images/mias-cleaning-service-logo.webp"
            alt="Mia’s Cleaning Service logo"
            width={190}
            height={127}
            className="h-20 w-auto object-contain"
          />
          <p className="mt-3 inline-flex rounded-full border border-pink/30 bg-blush px-3 py-1 text-xs font-black uppercase tracking-[0.16em] text-pink">Women owned & operated</p>
          <p className="mt-3 max-w-md text-charcoal/70">Friendly, premium residential cleaning with thoughtful details, simple booking, and a satisfaction guarantee.</p>
        </div>
        <div>
          <p className="font-bold">Explore</p>
          <div className="mt-3 grid gap-2 text-sm">
            {siteConfig.nav.map((item) => <Link key={item.href} href={item.href as any} className="hover:underline">{item.label}</Link>)}
            <Link href="/faq">FAQ</Link>
          </div>
        </div>
        <div>
          <p className="font-bold">Contact</p>
          <div className="mt-3 grid gap-2 text-sm text-charcoal/70">
            <a href={`tel:${siteConfig.phone}`}>{siteConfig.phone}</a>
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            {siteConfig.hours.slice(0,2).map((h) => <span key={h}>{h}</span>)}
          </div>
        </div>
      </div>
      <div className="mx-auto flex max-w-7xl flex-col gap-3 border-t border-pink/15 px-4 py-5 text-sm text-charcoal/60 sm:flex-row sm:justify-between sm:px-6 lg:px-8">
        <span>© {new Date().getFullYear()} Mia’s Cleaning Service. All rights reserved.</span>
        <span className="flex gap-4"><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link></span>
      </div>
    </footer>
  );
}
