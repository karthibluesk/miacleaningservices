import services from "@/data/services.json";
import pricing from "@/data/pricing.json";
import testimonials from "@/data/testimonials.json";
import faqs from "@/data/faqs.json";
import { Button } from "@/components/ui/Button";
import { Section, SectionIntro } from "@/components/ui/Section";
import { ServiceCard } from "@/components/ServiceCard";
import { FAQAccordion } from "@/components/FAQAccordion";
import { Gallery } from "@/components/Gallery";
import { Reveal } from "@/components/Reveal";
import Image from "next/image";
import { getAllPosts } from "@/lib/blog";
import { localBusinessSchema } from "@/lib/seo";

export default async function HomePage() {
  const posts = (await getAllPosts()).slice(0, 3);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema()) }} />
      <section className="overflow-hidden bg-gradient-to-br from-cream via-ivory to-blush/80">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-24">
          <Reveal>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-pink">Women owned & operated • Premium residential cleaning</p>
            <h1 className="mt-4 text-5xl font-black tracking-tight text-charcoal sm:text-6xl">A calmer, cleaner home without the stress.</h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-charcoal/70">Mia’s Cleaning Service is women owned and operated, bringing friendly, detail-focused house cleaning, deep cleans, move-out support, and eco-conscious options to busy households.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row"><Button href="/booking">Book a Cleaning</Button><Button href="/services" variant="secondary">Explore Services</Button></div>
            <div className="mt-8 grid grid-cols-3 gap-3 text-sm font-bold text-charcoal/75"><span>★ 5-star care</span><span>Background checked</span><span>Guaranteed clean</span></div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-[2rem] border border-pink/20 bg-white/85 p-5 shadow-glow">
              <div className="rounded-[1.5rem] bg-gradient-to-br from-blush via-white to-mint p-8">
                <Image
                  src="/images/mias-cleaning-service-logo.webp"
                  alt="Mia’s Cleaning Service logo with women owned and operated badge"
                  width={720}
                  height={480}
                  priority
                  className="mx-auto h-auto w-full max-w-md object-contain"
                />
                <div className="mt-6 rounded-2xl border border-pink/20 bg-white/80 p-4">
                  <p className="text-sm font-bold uppercase tracking-widest text-pink">Signature detail checklist</p>
                  <ul className="mt-4 grid gap-3 text-base font-bold sm:grid-cols-2">
                    <li>✓ Kitchens polished</li><li>✓ Bathrooms sanitized</li><li>✓ Floors refreshed</li><li>✓ Calm finishing touches</li>
                  </ul>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Section>
        <SectionIntro eyebrow="Services" title="Cleaning plans for every season of home" text="Choose routine maintenance, a detailed reset, move-out cleaning, or a gentler eco-forward clean." />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">{services.map((s) => <ServiceCard key={s.slug} service={s} />)}</div>
      </Section>

      <Section className="bg-soft/60">
        <SectionIntro eyebrow="Trust" title="A thoughtful cleaning experience from start to finish" />
        <div className="grid gap-5 md:grid-cols-5">
          {["Women owned & operated", "Google Reviews placeholder", "Satisfaction guarantee", "Eco-friendly options", "Screened cleaning team"].map((item) => <div key={item} className="rounded-3xl bg-white p-6 text-center font-black shadow-sm">{item}</div>)}
        </div>
      </Section>

      <Section>
        <SectionIntro eyebrow="Pricing" title="Clear starting rates with recurring savings" />
        <div className="grid gap-5 md:grid-cols-3">{pricing.tiers.map((tier) => <article key={tier.name} className={`rounded-3xl border p-6 ${tier.highlighted ? "border-pink bg-blush shadow-glow" : "border-teal/20 bg-white"}`}><h3 className="text-xl font-black">{tier.name}</h3><p className="mt-2 text-3xl font-black">{tier.price}</p><p className="mt-3 text-charcoal/70">{tier.description}</p></article>)}</div>
      </Section>

      <Section>
        <SectionIntro eyebrow="Gallery" title="Before and after details that feel instantly fresh" />
        <Gallery />
      </Section>

      <Section className="bg-ivory">
        <SectionIntro eyebrow="Reviews" title="Loved by local households" />
        <div className="grid gap-5 md:grid-cols-3">{testimonials.map((t) => <blockquote key={t.name} className="rounded-3xl bg-white p-6 shadow-sm"><p className="text-lg leading-8">“{t.quote}”</p><footer className="mt-5 font-bold">{t.name}</footer></blockquote>)}</div>
      </Section>

      <Section>
        <SectionIntro eyebrow="FAQ" title="Questions before you book?" />
        <div className="mx-auto max-w-3xl"><FAQAccordion items={faqs.slice(0, 4)} /></div>
      </Section>

      <Section>
        <SectionIntro eyebrow="Blog" title="Cleaning tips from Mia" />
        <div className="grid gap-5 md:grid-cols-3">{posts.map((post) => <a key={post.slug} href={`/blog/${post.slug}`} className="rounded-3xl border border-teal/20 bg-white p-6 shadow-sm hover:shadow-glow"><p className="text-sm font-bold text-sage">{post.category}</p><h3 className="mt-2 text-xl font-black">{post.title}</h3><p className="mt-3 text-charcoal/70">{post.description}</p></a>)}</div>
      </Section>

      <Section>
        <div className="rounded-[2rem] bg-gradient-to-r from-teal to-sky p-8 text-center shadow-glow sm:p-12">
          <h2 className="text-3xl font-black">Ready for a home that feels lighter?</h2>
          <p className="mx-auto mt-3 max-w-2xl text-charcoal/75">Start with a simple booking request and Mia’s team will confirm the best plan for your home.</p>
          <Button href="/booking" className="mt-6 bg-white">Book Now</Button>
        </div>
      </Section>
    </>
  );
}
