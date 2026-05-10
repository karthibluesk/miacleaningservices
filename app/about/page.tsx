import { Section, SectionIntro } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({ title: "About Mia’s Cleaning Service", description: "Learn about Mia’s friendly, premium, and detail-focused cleaning philosophy.", path: "/about" });

export default function AboutPage() {
  return (
    <Section>
      <SectionIntro eyebrow="About" title="A cleaning service built on care, consistency, and trust" />
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-black">Mia’s story</h2>
          <p className="mt-4 leading-8 text-charcoal/70">Mia started this service with a simple belief: a clean home should feel peaceful, personal, and easy to maintain. Every visit is guided by clear checklists, respectful communication, and details that make rooms feel refreshed.</p>
          <p className="mt-4 leading-8 text-charcoal/70">The brand is intentionally warm and professional, giving clients confidence that their home is cared for by trained, background-checked people who respect privacy and routines.</p>
          <Button href="/booking" className="mt-6">Book with Mia</Button>
        </div>
        <div className="grid gap-4">
          {["Kindness in every interaction", "Consistent quality standards", "Eco-conscious product options", "Respect for every home"].map((value) => <div key={value} className="rounded-3xl bg-mint p-6 text-xl font-black">{value}</div>)}
        </div>
      </div>
    </Section>
  );
}
