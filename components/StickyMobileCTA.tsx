import { Button } from "@/components/ui/Button";

export function StickyMobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-teal/20 bg-cream/95 p-3 backdrop-blur md:hidden">
      <Button href="/booking" className="w-full">Book Your Cleaning</Button>
    </div>
  );
}
