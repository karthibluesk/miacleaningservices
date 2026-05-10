import pricing from "@/data/pricing.json";
import faqs from "@/data/faqs.json";
import { Button } from "@/components/ui/Button";
import { FAQAccordion } from "@/components/FAQAccordion";
import { Section, SectionIntro } from "@/components/ui/Section";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({ title: "Cleaning Prices", description: "Explore cleaning rates, recurring discounts, and add-on pricing.", path: "/pricing" });

export default function PricingPage() {
  return (
    <Section>
      <SectionIntro eyebrow="Pricing" title="Simple starting prices and flexible add-ons" />
      <div className="grid gap-5 md:grid-cols-3">
        {pricing.tiers.map((tier) => <article key={tier.name} className={`rounded-3xl border p-6 ${tier.highlighted ? "border-teal bg-mint shadow-glow" : "border-teal/20 bg-white"}`}><h2 className="text-xl font-black">{tier.name}</h2><p className="mt-3 text-4xl font-black">{tier.price}</p><p className="mt-3 text-charcoal/70">{tier.description}</p><ul className="mt-5 grid gap-2">{tier.features.map((f) => <li key={f}>✓ {f}</li>)}</ul><Button href="/booking" className="mt-6 w-full">Book Now</Button></article>)}
      </div>
      <div className="mt-12 grid gap-8 lg:grid-cols-2">
        <div className="rounded-3xl bg-ivory p-6"><h2 className="text-2xl font-black">Recurring plan discounts</h2><div className="mt-5 grid gap-3">{pricing.discounts.map((d) => <div key={d.label} className="flex justify-between rounded-2xl bg-white p-4 font-bold"><span>{d.label}</span><span>{d.value}</span></div>)}</div></div>
        <div className="rounded-3xl bg-ivory p-6"><h2 className="text-2xl font-black">Add-on pricing</h2><div className="mt-5 grid gap-3">{pricing.addons.map((a) => <div key={a.name} className="flex justify-between rounded-2xl bg-white p-4 font-bold"><span>{a.name}</span><span>{a.price}</span></div>)}</div></div>
      </div>
      <div className="mx-auto mt-12 max-w-3xl"><FAQAccordion items={faqs} /></div>
    </Section>
  );
}
