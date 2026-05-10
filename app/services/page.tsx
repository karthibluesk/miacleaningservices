import services from "@/data/services.json";
import { Button } from "@/components/ui/Button";
import { FAQAccordion } from "@/components/FAQAccordion";
import { Section, SectionIntro } from "@/components/ui/Section";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({ title: "Cleaning Services", description: "Standard cleaning, deep cleaning, move-in/move-out cleaning, and eco-friendly cleaning.", path: "/services" });

export default function ServicesPage() {
  return (
    <Section>
      <SectionIntro eyebrow="Services" title="Detailed cleaning services with a personal touch" />
      <div className="grid gap-8">
        {services.map((service) => (
          <article id={service.slug} key={service.slug} className="scroll-mt-28 rounded-3xl border border-teal/20 bg-white p-6 shadow-sm md:p-8">
            <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
              <div>
                <h2 className="text-3xl font-black">{service.title}</h2>
                <p className="mt-3 text-lg leading-8 text-charcoal/70">{service.description}</p>
                <h3 className="mt-6 font-black">Included tasks</h3>
                <ul className="mt-3 grid gap-2">{service.includes.map((item) => <li key={item} className="rounded-xl bg-mint/50 px-4 py-3">✓ {item}</li>)}</ul>
                <div className="mt-6"><FAQAccordion items={service.faqs} /></div>
              </div>
              <aside className="rounded-3xl bg-ivory p-6">
                <p className="text-sm font-bold uppercase tracking-widest text-sage">Estimate</p>
                <p className="mt-2 text-3xl font-black">From ${service.startingAt}</p>
                <p className="mt-3 text-charcoal/70">Typical duration: {service.duration}</p>
                <Button href="/booking" className="mt-6 w-full">Book this service</Button>
              </aside>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
