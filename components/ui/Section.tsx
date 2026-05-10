import { cn } from "@/utils/cn";

export function Section({ children, className }: { children: React.ReactNode; className?: string }) {
  return <section className={cn("mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24", className)}>{children}</section>;
}

export function SectionIntro({ eyebrow, title, text }: { eyebrow?: string; title: string; text?: string }) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      {eyebrow && <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-sage">{eyebrow}</p>}
      <h2 className="text-3xl font-black tracking-tight text-charcoal sm:text-4xl">{title}</h2>
      {text && <p className="mt-4 text-lg leading-8 text-charcoal/70">{text}</p>}
    </div>
  );
}
