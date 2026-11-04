"use client";

import { useRef, type ReactNode } from "react";

type RailProps = {
  title: ReactNode;
  action?: ReactNode;
  tone?: "dark" | "light";
  children: ReactNode;
};

export function Rail({ title, action, tone = "dark", children }: RailProps) {
  const track = useRef<HTMLUListElement>(null);

  function move(direction: 1 | -1) {
    const node = track.current;
    if (!node) return;
    node.scrollBy({ left: direction * node.clientWidth * 0.8, behavior: "smooth" });
  }

  const button =
    tone === "dark"
      ? "bg-white/10 text-white hover:bg-white hover:text-ink focus-visible:outline-white"
      : "bg-ink/8 text-ink hover:bg-ink hover:text-cream focus-visible:outline-ink";

  return (
    <div>
      <div className="page-wrap flex items-end justify-between gap-6">
        {title}
        <div className="flex shrink-0 items-center gap-5">
          {action}
          <div className="hidden gap-2 sm:flex">
            <button
              type="button"
              aria-label="Anterior"
              onClick={() => move(-1)}
              className={`grid h-11 w-11 place-items-center rounded-full transition-colors focus-visible:outline focus-visible:outline-offset-2 ${button}`}
            >
              <Chevron className="rotate-180" />
            </button>
            <button
              type="button"
              aria-label="Siguiente"
              onClick={() => move(1)}
              className={`grid h-11 w-11 place-items-center rounded-full transition-colors focus-visible:outline focus-visible:outline-offset-2 ${button}`}
            >
              <Chevron />
            </button>
          </div>
        </div>
      </div>
      <ul ref={track} className="rail mt-8 flex snap-x snap-mandatory gap-3 overflow-x-auto lg:mt-10">
        {children}
      </ul>
    </div>
  );
}

function Chevron({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={`h-4 w-4 ${className}`} fill="none" stroke="currentColor" strokeWidth="2">
      <path d="m9 5 7 7-7 7" />
    </svg>
  );
}
