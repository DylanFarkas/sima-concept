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

      <MobileIndex items={items} />

      <ol className={`hidden lg:col-span-5 lg:flex lg:flex-col lg:justify-center ${stage}`}>
        {items.map((item, index) => {
          const selected = index === active;
          return (
            <li key={item.handle} className="border-b border-ink/12 first:border-t">
              <Link
                href={`/producto/${item.handle}`}
                onMouseEnter={() => setActive(index)}
                onFocus={() => setActive(index)}
                className={`group flex w-full items-center gap-5 px-5 py-4 outline-none transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink ${
                  selected ? "bg-ink text-cream" : "text-ink/75 hover:bg-ink/4 hover:text-ink"
                }`}
              >
                <span
                  className={`w-7 shrink-0 font-display text-[11px] font-bold tracking-[0.14em] ${
                    selected ? "text-cream/55" : "text-ink/40"
                  }`}
                >
                  {pad(index + 1)}
                </span>
                <span className="min-w-0 flex-1 font-display text-[17px] font-bold uppercase leading-tight tracking-[0.01em] transition-transform duration-300 group-hover:translate-x-1">
                  {item.title}
                </span>
                <span
                  className={`shrink-0 font-display text-sm font-bold tracking-[0.03em] ${
                    selected ? "text-cream/80" : "text-ink/70"
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

const EXPAND_MS = 500;

function MobileIndex({ items }: { items: IndexItem[] }) {
  const [open, setOpen] = useState(0);

  function select(index: number, row: HTMLElement) {
    if (index === open) return;
    const anchor = row.getBoundingClientRect().top;
    setOpen(index);

    const until = performance.now() + EXPAND_MS + 100;
    const holdRow = () => {
      const drift = row.getBoundingClientRect().top - anchor;
      if (drift !== 0) window.scrollBy({ top: drift, behavior: "instant" });
      if (performance.now() < until) requestAnimationFrame(holdRow);
    };
    requestAnimationFrame(holdRow);
  }

  return (
    <ol className="border-t border-ink/15 lg:hidden">
      {items.map((item, index) => {
        const expanded = index === open;
        const panelId = `seleccion-${item.handle}`;

        return (
          <li key={item.handle} className="border-b border-ink/15">
            <button
              type="button"
              aria-expanded={expanded}
              aria-controls={panelId}
              onClick={(event) => select(index, event.currentTarget)}
              className="flex w-full items-center gap-4 py-4 text-left outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
            >
              <span
                className={`w-6 shrink-0 font-display text-[11px] font-bold tracking-[0.14em] transition-colors duration-300 ${
                  expanded ? "text-ink" : "text-ink/40"
                }`}
              >
                {pad(index + 1)}
              </span>
              <span
                className={`min-w-0 flex-1 font-display font-bold uppercase leading-tight tracking-[0.01em] transition-[font-size,color] duration-300 ${
                  expanded ? "text-xl text-ink sm:text-2xl" : "text-[15px] text-ink/75 sm:text-base"
                }`}
              >
                {item.title}
              </span>
              <span className="shrink-0 font-display text-xs font-bold tracking-[0.03em] text-ink/70 sm:text-sm">
                {item.price}
              </span>
              <span
                aria-hidden
                className={`relative h-3 w-3 shrink-0 transition-transform duration-300 ${expanded ? "rotate-45" : ""}`}
              >
                <span className="absolute inset-x-0 top-1/2 h-[1.5px] -translate-y-1/2 bg-ink" />
                <span className="absolute inset-y-0 left-1/2 w-[1.5px] -translate-x-1/2 bg-ink" />
              </span>
            </button>

            <div
              id={panelId}
              inert={!expanded}
              className={`grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                expanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <Link
                  href={`/producto/${item.handle}`}
                  className="group relative mb-5 block aspect-4/5 overflow-hidden bg-[#e4e0d8] outline-none focus-visible:outline-2 focus-visible:-outline-offset-4 focus-visible:outline-white sm:aspect-3/2"
                >
                  <img
                    src={item.image}
                    alt=""
                    loading={index === 0 ? "eager" : "lazy"}
                    className={`absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out ${
                      expanded ? "scale-100" : "scale-[1.06]"
                    }`}
                  />
                  <span className="absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-black/50 to-transparent" />
                  <span className="absolute bottom-4 right-4 bg-white px-4 py-3 text-[11px] font-bold uppercase tracking-widest text-ink transition-colors group-hover:bg-cream">
                    Ver pieza
                  </span>
                </Link>
              </div>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
