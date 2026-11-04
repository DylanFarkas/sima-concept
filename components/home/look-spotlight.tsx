"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import type { IndexItem } from "@/components/home/selection-index";

const focusDark =
  "outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white";

export function LookSpotlight({ items }: { items: IndexItem[] }) {
  const [active, setActive] = useState(0);
  const touchStart = useRef<number | null>(null);
  const current = items[active];
  const pad = (value: number) => String(value).padStart(2, "0");

  function go(direction: 1 | -1) {
    setActive((index) => (index + direction + items.length) % items.length);
  }

  return (
    <div className="page-wrap grid gap-8 lg:grid-cols-12 lg:gap-12">
      <Link
        href={`/producto/${current.handle}`}
        aria-label={current.title}
        onTouchStart={(event) => {
          touchStart.current = event.touches[0].clientX;
        }}
        onTouchEnd={(event) => {
          if (touchStart.current === null) return;
          const delta = event.changedTouches[0].clientX - touchStart.current;
          touchStart.current = null;
          if (Math.abs(delta) > 40) go(delta < 0 ? 1 : -1);
        }}
        className={`group relative block aspect-4/5 overflow-hidden bg-card lg:col-span-6 lg:aspect-auto lg:h-[min(86svh,820px)] ${focusDark}`}
      >
        {items.map((item, index) => (
          <img
            key={item.handle}
            src={item.image}
            alt=""
            loading="lazy"
            className={`absolute inset-0 h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.03] ${
              index === active ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </Link>

      <div className="flex flex-col lg:col-span-6 lg:py-2">
        <div>
          <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-white/60">Compra el look</p>
          <h2 className="mt-4 max-w-[14ch] font-display text-[clamp(2rem,4.2vw,3.5rem)] font-bold uppercase leading-[0.95] tracking-[-0.01em]">
            Del gimnasio a la calle
          </h2>
        </div>

        <div className="mt-10 lg:mt-auto lg:pt-10" aria-live="polite">
          <p className="font-display text-[clamp(5rem,12vw,11rem)] font-bold leading-[0.8] tracking-[-0.03em]">
            {pad(active + 1)}
            <span className="ml-2 align-top text-[0.22em] tracking-[0.04em] text-white/40">/ {pad(items.length)}</span>
          </p>
          <p className="mt-8 max-w-[24ch] font-display text-[clamp(1.5rem,2.4vw,2.25rem)] font-bold uppercase leading-[0.95]">
            {current.title}
          </p>
          <p className="mt-3 font-display text-lg font-bold tracking-[0.03em] text-white/80">{current.price}</p>
          <Link href={`/producto/${current.handle}`} className={`group mt-7 inline-flex ${focusDark}`}>
            <span className="inline-flex items-center justify-center bg-white px-5 py-3.5 text-xs font-bold uppercase tracking-[0.08em] text-ink transition-colors group-hover:bg-cream">
              Ver producto
            </span>
          </Link>
        </div>

        <div className="mt-10 flex items-center gap-6 lg:mt-14">
          <div className="flex flex-1 gap-1.5">
            {items.map((item, index) => (
              <button
                key={item.handle}
                type="button"
                aria-label={`Look ${index + 1}`}
                aria-current={index === active ? "true" : undefined}
                onClick={() => setActive(index)}
                className={`group/seg flex-1 py-3 ${focusDark}`}
              >
                <span
                  className={`block h-0.5 transition-colors ${
                    index === active ? "bg-white" : "bg-white/20 group-hover/seg:bg-white/50"
                  }`}
                />
              </button>
            ))}
          </div>
          <div className="flex gap-2">
            <ArrowButton label="Anterior" onClick={() => go(-1)} flip />
            <ArrowButton label="Siguiente" onClick={() => go(1)} />
          </div>
        </div>
      </div>
    </div>
  );
}

function ArrowButton({ label, onClick, flip = false }: { label: string; onClick: () => void; flip?: boolean }) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className="grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-white hover:text-ink focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-white"
    >
      <svg
        viewBox="0 0 24 24"
        aria-hidden
        className={`h-4 w-4 ${flip ? "rotate-180" : ""}`}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="m9 5 7 7-7 7" />
      </svg>
    </button>
  );
}
