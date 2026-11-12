"use client";

import Link from "next/link";
import { useState } from "react";
import type { Product } from "@/lib/catalog";
import { ButtonLabel, Photo, SectionTitle, focusDark } from "@/components/shared/editorial";

export type AudienceTile = {
  label: string;
  text: string;
  href: string;
  product: Product;
  image?: string;
};

const PAGE_SIZE = 3;

export function AudienceRail({ tiles }: { tiles: AudienceTile[] }) {
  const pages = chunk(tiles, PAGE_SIZE);
  const [page, setPage] = useState(0);
  const [animating, setAnimating] = useState(false);

  function goTo(nextPage: number) {
    if (animating || nextPage === page || nextPage < 0 || nextPage >= pages.length) return;
    setAnimating(true);
    setPage(nextPage);
    window.setTimeout(() => setAnimating(false), 520);
  }

  const canPrev = page > 0;
  const canNext = page < pages.length - 1;
  const navClass =
    "absolute top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white text-ink shadow-[0_2px_12px_rgba(0,0,0,0.28)] transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white disabled:pointer-events-none disabled:opacity-0";

  return (
    <div>
      <div className="page-wrap">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <SectionTitle>Equípate para crecer</SectionTitle>
          <p className="max-w-[34ch] text-sm leading-relaxed text-white/70">
            Ropa, calzado y lo que necesitas para dar el primer paso, en un solo lugar.
          </p>
        </div>
      </div>

      <ul className="rail mt-10 flex snap-x snap-mandatory gap-3 overflow-x-auto lg:hidden">
        {tiles.map((tile) => (
          <li key={tile.href} className="w-[78vw] shrink-0 snap-start sm:w-[46vw]">
            <TileCard tile={tile} />
          </li>
        ))}
      </ul>

      <div className="page-wrap relative mt-12 hidden lg:block">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
            style={{ transform: `translate3d(-${page * 100}%, 0, 0)` }}
          >
            {pages.map((group, index) => (
              <ul
                key={group.map((tile) => tile.href).join("-")}
                className="grid w-full shrink-0 grid-cols-3 gap-3"
                aria-hidden={index !== page}
              >
                {group.map((tile) => (
                  <li key={tile.href}>
                    <TileCard tile={tile} />
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>

        {pages.length > 1 ? (
          <>
            <button
              type="button"
              aria-label="Categorías anteriores"
              onClick={() => goTo(page - 1)}
              disabled={animating || !canPrev}
              className={`${navClass} left-0 -translate-x-1/2`}
            >
              <Chevron className="rotate-180" />
            </button>
            <button
              type="button"
              aria-label="Más categorías"
              onClick={() => goTo(page + 1)}
              disabled={animating || !canNext}
              className={`${navClass} right-0 translate-x-1/2`}
            >
              <Chevron />
            </button>
          </>
        ) : null}
      </div>
    </div>
  );
}

function TileCard({ tile }: { tile: AudienceTile }) {
  return (
    <Link
      href={tile.href}
      className={`group relative block aspect-4/5 overflow-hidden bg-card lg:aspect-3/4 ${focusDark}`}
    >
      {tile.image ? (
        <img
          src={tile.image}
          alt=""
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
      ) : (
        <Photo product={tile.product} />
      )}
      <span className="absolute inset-0 bg-linear-to-t from-black/75 via-black/10 to-transparent" />
      <span className="absolute inset-x-0 bottom-0 flex flex-col items-start gap-3 p-5 sm:gap-4 sm:p-6 lg:p-8">
        <span>
          <span className="block font-display text-[clamp(1.75rem,5.5vw,3rem)] font-bold uppercase leading-none">
            {tile.label}
          </span>
          <span className="mt-2 block max-w-[28ch] text-sm leading-snug text-white/80">{tile.text}</span>
        </span>
        <ButtonLabel>Comprar</ButtonLabel>
      </span>
    </Link>
  );
}

function Chevron({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden
      className={`h-4 w-4 ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
    >
      <path d="m9 5 7 7-7 7" />
    </svg>
  );
}

function chunk<T>(items: T[], size: number) {
  const pages: T[][] = [];
  for (let i = 0; i < items.length; i += size) {
    pages.push(items.slice(i, i + size));
  }
  return pages;
}
