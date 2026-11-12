import Link from "next/link";
import type { Product } from "@/lib/catalog";
import type { Tone } from "@/lib/category-pages";
import { formatPrice } from "@/lib/home-picks";
import { SectionTitle, focusDark, focusLight } from "@/components/shared/editorial";

export function BestSellers({
  title,
  eyebrow,
  products,
  tone = "dark",
}: {
  title: string;
  eyebrow: string;
  products: Product[];
  tone?: Tone;
}) {
  if (tone === "white") {
    return (
      <section className="bg-white pb-2 pt-16 text-ink lg:pt-24">
        <div className="page-wrap">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionTitle>{title}</SectionTitle>
            <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-gray-600">{eyebrow}</p>
          </div>
          <ul className="mt-10 grid grid-cols-2 gap-x-3 gap-y-10 sm:grid-cols-3 lg:mt-12 lg:grid-cols-5">
            {products.map((product) => (
              <li key={product.handle}>
                <Link href={`/producto/${product.handle}`} className={`group block ${focusLight}`}>
                  <span className="relative block aspect-3/4 overflow-hidden bg-cream">
                    <img
                      src={product.image}
                      alt=""
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </span>
                  <span className="mt-4 flex items-baseline justify-between gap-3">
                    <span className="min-w-0 truncate text-sm leading-snug">{product.title}</span>
                    <span className="shrink-0 font-display text-sm font-bold tracking-[0.03em]">
                      {formatPrice(product.price)}
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-background pb-4 pt-20 text-white lg:pt-28">
      <div className="page-wrap">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionTitle>{title}</SectionTitle>
          <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-white/45">{eyebrow}</p>
        </div>
        <ul className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:mt-12 lg:grid-cols-5">
          {products.map((product) => (
            <li key={product.handle}>
              <Link
                href={`/producto/${product.handle}`}
                className={`group relative block aspect-3/4 overflow-hidden bg-card ${focusDark}`}
              >
                <img src={product.image} alt="" className="absolute inset-0 h-full w-full object-cover" />
                <span className="absolute inset-0 bg-linear-to-t from-black/80 via-black/10 to-transparent" />
                <span className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4">
                  <span className="min-w-0 truncate font-display text-sm font-bold uppercase leading-tight tracking-[-0.01em]">
                    {product.title}
                  </span>
                  <span className="shrink-0 font-display text-[11px] font-bold tracking-[0.04em] text-white/75">
                    {formatPrice(product.price)}
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
