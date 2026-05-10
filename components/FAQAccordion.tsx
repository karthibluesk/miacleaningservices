"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/utils/cn";

export function FAQAccordion({ items }: { items: { question: string; answer: string }[] }) {
  const [open, setOpen] = useState(0);
  return (
    <div className="grid gap-3">
      {items.map((item, index) => (
        <div key={item.question} className="rounded-2xl border border-teal/20 bg-white">
          <button className="focus-ring flex w-full items-center justify-between gap-4 rounded-2xl p-5 text-left font-bold" onClick={() => setOpen(open === index ? -1 : index)} aria-expanded={open === index}>
            {item.question}<ChevronDown className={cn("shrink-0 transition", open === index && "rotate-180")} />
          </button>
          {open === index && <p className="px-5 pb-5 leading-7 text-charcoal/70">{item.answer}</p>}
        </div>
      ))}
    </div>
  );
}
