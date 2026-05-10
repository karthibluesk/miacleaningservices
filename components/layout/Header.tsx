"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { siteConfig } from "@/lib/site";
import { Button } from "@/components/ui/Button";

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-pink/15 bg-cream/90 backdrop-blur-xl">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-white focus:p-3">Skip to content</a>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="focus-ring flex items-center gap-3 rounded-md" aria-label="Mia’s Cleaning Service home">
          <Image
            src="/images/mias-cleaning-service-logo.webp"
            alt="Mia’s Cleaning Service logo"
            width={152}
            height={102}
            priority
            className="h-14 w-auto object-contain sm:h-16"
          />
          <span className="hidden rounded-full border border-pink/30 bg-blush px-3 py-1 text-xs font-black uppercase tracking-[0.16em] text-pink lg:inline-flex">
            Women owned & operated
          </span>
        </Link>
        <nav aria-label="Primary navigation" className="hidden items-center gap-7 md:flex">
          {siteConfig.nav.map((item) => <Link key={item.href} href={item.href as any} className="focus-ring rounded-md text-sm font-semibold text-charcoal/75 hover:text-charcoal">{item.label}</Link>)}
        </nav>
        <div className="hidden md:block"><Button href="/booking">Book a Cleaning</Button></div>
        <button aria-label={open ? "Close menu" : "Open menu"} className="focus-ring rounded-full p-2 md:hidden" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      </div>
      {open && (
        <div className="border-t border-teal/15 bg-cream px-4 py-4 md:hidden">
          <nav className="grid gap-2" aria-label="Mobile navigation">
            {siteConfig.nav.map((item) => <Link key={item.href} onClick={() => setOpen(false)} href={item.href as any} className="rounded-xl px-3 py-3 font-semibold hover:bg-blush">{item.label}</Link>)}
            <Button href="/booking" className="mt-2">Book a Cleaning</Button>
          </nav>
        </div>
      )}
    </header>
  );
}
