"use client";

import Link from "next/link";
import { useState } from "react";

export type IndexItem = {
  handle: string;
  title: string;
  image: string;
  price: string;
};

const stage = "lg:h-[min(70svh,700px)]";

function pad(value: number) {
  return String(value).padStart(2, "0");
}

export function SelectionIndex({ items }: { items: IndexItem[] }) {
  const [active, setActive] = useState(0);
  const current = items[active];

  return (
    <div className="mt-10 grid gap-8 lg:mt-14 lg:grid-cols-12 lg:items-stretch lg:gap-8 xl:gap-12">
      <div className={`relative hidden lg:col-span-7 lg:block ${stage}`}>
        <Link
          href={`/producto/${current.handle}`}
          tabIndex={-1}
          aria-hidden
          className="group absolute inset-0 block overflow-hidden bg-[#e4e0d8]"
        >
          {items.map((item, index) => (
            <img
              key={item.handle}
              src={item.image}
              alt=""
              loading="lazy"
              className={`absolute inset-0 h-full w-full object-cover transition duration-700 ease-out ${
                index === active ? "scale-100 opacity-100" : "scale-[1.04] opacity-0"
              }`}
            />
          ))}
          <span className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-black/5" />
          <span className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-6 p-7 text-white xl:p-9">
            <span className="min-w-0">
              <span className="font-display text-[11px] font-bold uppercase tracking-[0.22em] text-white/65">
                {pad(active + 1)} / {pad(items.length)}
              </span>
              <span className="mt-3 block max-w-[16ch] font-display text-[clamp(1.85rem,2.6vw,3rem)] font-bold uppercase leading-[0.92] tracking-[-0.015em]">
                {current.title}
              </span>
            </span>
            <span className="flex shrink-0 flex-col items-end gap-4">
              <span className="font-display text-lg font-bold tracking-[0.03em]">{current.price}</span>
              <span className="bg-white px-4 py-3 text-[11px] font-bold uppercase tracking-widest text-ink transition-colors group-hover:bg-cream">
                Ver pieza
              </span>
            </span>
          </span>
        </Link>
      </div>

      <ol className={`border-t border-ink/15 lg:col-span-5 lg:flex lg:flex-col lg:justify-center lg:border-t-0 ${stage}`}>
        {items.map((item, index) => {
          const selected = index === active;
          return (
            <li
              key={item.handle}
              className="border-b border-ink/15 lg:border-ink/12 lg:first:border-t"
            >
              <Link
                href={`/producto/${item.handle}`}
                onMouseEnter={() => setActive(index)}
                onFocus={() => setActive(index)}
                className={`group flex w-full items-center gap-4 py-3.5 outline-none transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink sm:gap-5 lg:px-5 lg:py-4 ${
                  selected ? "lg:bg-ink lg:text-cream" : "text-ink lg:text-ink/75 lg:hover:bg-ink/4 lg:hover:text-ink"
                }`}
              >
                <span className="relative h-16 w-13 shrink-0 overflow-hidden bg-[#e4e0d8] lg:hidden">
                  <img src={item.image} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
                </span>
                <span
                  className={`hidden w-7 shrink-0 font-display text-[11px] font-bold tracking-[0.14em] lg:block ${
                    selected ? "text-cream/55" : "text-ink/40"
                  }`}
                >
                  {pad(index + 1)}
                </span>
                <span className="min-w-0 flex-1 font-display text-[15px] font-bold uppercase leading-tight tracking-[0.01em] transition-transform duration-300 sm:text-base lg:text-[17px] lg:group-hover:translate-x-1">
                  {item.title}
                </span>
                <span
                  className={`shrink-0 font-display text-xs font-bold tracking-[0.03em] sm:text-sm ${
                    selected ? "lg:text-cream/80" : "text-ink/70"
                  }`}
                >
                  {item.price}
                </span>
              </Link>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
