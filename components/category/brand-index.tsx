"use client";

import Link from "next/link";
import { useState } from "react";
import { focusLight } from "@/components/shared/editorial";

export type BrandEntry = {
  key: string;
  label: string;
  count: number;
  image: string;
};

type Props = {
  title: string;
  text: string;
  brands: BrandEntry[];
  others: { key: string; label: string }[];
  basePath: string;
};

export function BrandIndex({ title, text, brands, others, basePath }: Props) {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-cream py-20 text-ink lg:py-28">
      <div className="page-wrap">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="font-display text-[clamp(2rem,4.2vw,3.5rem)] font-bold uppercase leading-[0.95] tracking-[-0.01em]">
            {title}
          </h2>
          <p className="max-w-[34ch] text-sm leading-relaxed text-ink/70">{text}</p>
        </div>
        <div className="mt-10 grid gap-8 lg:mt-14 lg:grid-cols-12 lg:gap-12">
          <ol className="border-t-2 border-ink lg:col-span-8">
            {brands.map((brand, index) => (
              <li key={brand.key} className="border-b border-ink/15">
                <Link
                  href={`${basePath}?marca=${brand.key}`}
                  onMouseEnter={() => setActive(index)}
                  onFocus={() => setActive(index)}
                  className={`group flex items-center gap-5 py-3 transition-colors duration-300 hover:bg-ink hover:text-cream lg:px-5 ${focusLight} focus-visible:-outline-offset-2`}
                >
                  <span className="relative h-14 w-12 shrink-0 overflow-hidden bg-[#e4e0d8] lg:hidden">
                    <img src={brand.image} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
                  </span>
                  <span className="min-w-0 flex-1 font-display text-[clamp(2.25rem,5.5vw,5rem)] font-bold uppercase leading-[0.95] tracking-[-0.02em] transition-transform duration-300 lg:group-hover:translate-x-3">
                    {brand.label}
                  </span>
                  <span className="shrink-0 font-display text-xs font-bold tracking-[0.14em] opacity-55">
                    {String(brand.count).padStart(2, "0")}
                  </span>
                </Link>
              </li>
            ))}
          </ol>
          <div className="relative hidden border-t-2 border-transparent lg:col-span-4 lg:block">
            <div className="absolute inset-0 overflow-hidden bg-[#e4e0d8]">
              {brands.map((brand, index) => (
                <img
                  key={brand.key}
                  src={brand.image}
                  alt=""
                  loading="lazy"
                  className={`absolute inset-0 h-full w-full object-cover transition duration-700 ease-out ${
                    index === active ? "scale-100 opacity-100" : "scale-[1.04] opacity-0"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
        {others.length > 0 ? (
          <p className="mt-8 flex flex-wrap items-baseline gap-x-5 gap-y-2 text-sm">
            <span className="font-display text-xs font-bold uppercase tracking-[0.14em] text-ink/55">También</span>
            {others.map((brand) => (
              <Link
                key={brand.key}
                href={`${basePath}?marca=${brand.key}`}
                className={`font-bold underline decoration-ink/40 decoration-1 underline-offset-[6px] hover:decoration-ink ${focusLight}`}
              >
                {brand.label}
              </Link>
            ))}
          </p>
        ) : null}
      </div>
    </section>
  );
}
