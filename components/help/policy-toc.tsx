"use client";

import { useEffect, useState } from "react";
import { focusDark } from "@/components/shared/editorial";

type Section = { id: string; title: string };

const pad = (value: number) => String(value).padStart(2, "0");

export function PolicyToc({ sections, label }: { sections: readonly Section[]; label: string }) {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      let current: string | null = null;
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element && element.getBoundingClientRect().top <= 200) current = section.id;
      }
      setActive(current);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, [sections]);

  return (
    <nav aria-label={label} className="lg:sticky lg:top-40">
      <ol className="grid border-t border-white/15 sm:grid-cols-2 lg:grid-cols-1">
        {sections.map((section, index) => {
          const isActive = section.id === active;
          return (
            <li key={section.id} className="border-b border-white/15">
              <a
                href={`#${section.id}`}
                aria-current={isActive ? "location" : undefined}
                className={`group relative flex items-baseline gap-4 py-3 text-sm transition-colors hover:text-white ${
                  isActive ? "text-white" : "text-white/55"
                } ${focusDark}`}
              >
                <span
                  aria-hidden
                  className={`absolute -bottom-px left-0 h-px bg-white transition-[width] duration-300 ${
                    isActive ? "w-full" : "w-0"
                  }`}
                />
                <span
                  className={`w-5 shrink-0 font-display text-[11px] font-bold tracking-[0.16em] transition-colors group-hover:text-(--accent) ${
                    isActive ? "text-(--accent)" : "text-white/30"
                  }`}
                >
                  {pad(index + 1)}
                </span>
                <span className="leading-snug">{section.title}</span>
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
