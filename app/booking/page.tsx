import { BookingFlow } from "@/components/booking/BookingFlow";
import { Section, SectionIntro } from "@/components/ui/Section";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({ title: "Book Cleaning Service", description: "Request a cleaning appointment with Mia’s Cleaning Service.", path: "/booking" });

export default function BookingPage() {
  return <Section><SectionIntro eyebrow="Booking" title="Book your cleaning in a few simple steps" text="Choose a service, select timing, add special touches, and share your contact details." /><BookingFlow /></Section>;
}
