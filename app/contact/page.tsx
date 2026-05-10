import { Mail, Phone } from "lucide-react";
import { Section, SectionIntro } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/site";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({ title: "Contact", description: "Contact Mia’s Cleaning Service for questions, service areas, and booking help.", path: "/contact" });

export default function ContactPage() {
  return (
    <Section>
      <SectionIntro eyebrow="Contact" title="We would love to help with your home" />
      <div className="grid gap-8 lg:grid-cols-[1fr_380px]">
        <form className="rounded-3xl border border-teal/20 bg-white p-6 shadow-sm">
          <div className="grid gap-4">
            <label className="font-bold">Name<input className="focus-ring mt-2 w-full rounded-2xl border border-teal/25 px-4 py-3 font-normal" /></label>
            <label className="font-bold">Email<input type="email" className="focus-ring mt-2 w-full rounded-2xl border border-teal/25 px-4 py-3 font-normal" /></label>
            <label className="font-bold">Message<textarea className="focus-ring mt-2 min-h-36 w-full rounded-2xl border border-teal/25 px-4 py-3 font-normal" /></label>
            <Button type="submit">Send Message</Button>
          </div>
        </form>
        <aside className="rounded-3xl bg-mint p-6">
          <h2 className="text-2xl font-black">Contact details</h2>
          <p className="mt-4 flex gap-2"><Phone /> {siteConfig.phone}</p>
          <p className="mt-3 flex gap-2"><Mail /> {siteConfig.email}</p>
          <h3 className="mt-6 font-black">Hours</h3>
          {siteConfig.hours.map((h) => <p key={h} className="mt-2 text-charcoal/70">{h}</p>)}
          <h3 className="mt-6 font-black">Service area</h3>
          <p className="mt-2 text-charcoal/70">{siteConfig.serviceArea}</p>
          <Button href="/faq" variant="secondary" className="mt-6 bg-white">View FAQs</Button>
        </aside>
      </div>
    </Section>
  );
}
