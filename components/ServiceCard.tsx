import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import type { Service } from "@/types/site";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link href={`/services#${service.slug}`} className="focus-ring group rounded-3xl border border-teal/20 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-glow">
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-mint"><Sparkles aria-hidden /></div>
      <h3 className="text-xl font-black">{service.title}</h3>
      <p className="mt-3 leading-7 text-charcoal/70">{service.summary}</p>
      <div className="mt-5 flex items-center justify-between text-sm font-bold text-sage">
        From ${service.startingAt}<ArrowRight className="transition group-hover:translate-x-1" />
      </div>
    </Link>
  );
}
