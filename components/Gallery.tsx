import Image from "next/image";
import gallery from "@/data/gallery.json";

export function Gallery() {
  return (
    <div className="grid gap-5 md:grid-cols-3">
      {gallery.map((item) => (
        <article key={item.title} className="overflow-hidden rounded-3xl border border-teal/20 bg-white">
          <div className="grid grid-cols-2">
            <Image src={item.before} alt={`${item.alt} before`} width={400} height={300} className="h-44 w-full object-cover" />
            <Image src={item.after} alt={`${item.alt} after`} width={400} height={300} className="h-44 w-full object-cover" />
          </div>
          <div className="p-5">
            <p className="font-black">{item.title}</p>
            <p className="text-sm text-charcoal/60">Before / After gallery placeholder</p>
          </div>
        </article>
      ))}
    </div>
  );
}
