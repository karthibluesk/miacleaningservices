import faqs from "@/data/faqs.json";
import { FAQAccordion } from "@/components/FAQAccordion";
import { Section, SectionIntro } from "@/components/ui/Section";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({ title: "FAQ", description: "Common questions about Mia’s Cleaning Service.", path: "/faq" });

export default function FAQPage() {
  return <Section><SectionIntro eyebrow="FAQ" title="Frequently asked questions" /><div className="mx-auto max-w-3xl"><FAQAccordion items={faqs} /></div></Section>;
}
