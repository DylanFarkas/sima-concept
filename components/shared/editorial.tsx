import type { ReactNode } from "react";
import type { Product } from "@/lib/catalog";

export const focusDark =
  "outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white";
export const focusLight =
  "outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink";

export function SectionTitle({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <h2
      className={`font-display text-[clamp(2rem,4.2vw,3.5rem)] font-bold uppercase leading-[0.95] tracking-[-0.01em] ${className}`}
    >
      {children}
    </h2>
  );
}

export function Photo({ product, className = "" }: { product: Product; className?: string }) {
  return (
    <img
      src={product.image}
      alt=""
      loading="lazy"
      className={`absolute inset-0 h-full w-full object-cover ${className}`}
    />
  );
}

export function ButtonLabel({ children, tone = "light" }: { children: ReactNode; tone?: "light" | "dark" }) {
  return (
    <span
      className={`inline-flex items-center justify-center px-5 py-3.5 text-xs font-bold uppercase tracking-[0.08em] transition-colors ${
        tone === "light"
          ? "bg-white text-ink group-hover:bg-cream"
          : "bg-ink text-white group-hover:bg-black"
      }`}
    >
      {children}
    </span>
  );
}
