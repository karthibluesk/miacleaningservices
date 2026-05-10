import Link from "next/link";
import { cn } from "@/utils/cn";

type Props = {
  href?: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
};

export function Button({ href, children, variant = "primary", className, type = "button", onClick }: Props) {
  const classes = cn(
    "focus-ring inline-flex min-h-11 items-center justify-center rounded-full px-5 py-3 text-sm font-bold transition duration-200",
    variant === "primary" && "bg-pink text-white shadow-glow hover:-translate-y-0.5 hover:bg-[#d94d84]",
    variant === "secondary" && "border border-pink/40 bg-white/80 text-charcoal hover:bg-blush",
    variant === "ghost" && "text-charcoal hover:bg-blush",
    className
  );
  if (href) return <Link className={classes} href={href}>{children}</Link>;
  return <button className={classes} type={type} onClick={onClick}>{children}</button>;
}
