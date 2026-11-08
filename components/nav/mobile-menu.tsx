"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { SimaMark } from "@/components/sima-mark";
import { audienceNav } from "@/lib/taxonomy";

export function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [expanded, setExpanded] = useState<string | null>(audienceNav[0]?.id ?? null);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-background text-white lg:hidden">
      <div className="flex h-16 items-center justify-between px-5">
        <Link
          href="/"
          onClick={onClose}
          className="flex items-center gap-2.5"
          aria-label="SIMA"
        >
          <SimaMark className="accent-text h-5 w-auto shrink-0" />
          <span className="font-sans text-[1.65rem] font-bold uppercase leading-none tracking-[0.42em]">
            IMA
          </span>
        </Link>
        <button
          type="button"
          aria-label="Cerrar menú"
          onClick={onClose}
          className="flex h-11 w-11 items-center justify-center text-3xl leading-none"
        >
          ×
        </button>
      </div>
      <div className="flex-1 overflow-y-auto px-5 pb-12">
        {audienceNav.map((item) => {
          const isOpen = expanded === item.id;
          return (
            <div key={item.id} className="border-b border-white/10">
              <button
                type="button"
                className="flex w-full items-center justify-between py-5 text-left"
                aria-expanded={isOpen}
                onClick={() => setExpanded(isOpen ? null : item.id)}
              >
                <span className="font-display text-[2rem] uppercase leading-none tracking-[0.02em]">
                  {item.label}
                </span>
                <span className="font-display text-[1.7rem] leading-none text-white/45">
                  {isOpen ? "−" : "+"}
                </span>
              </button>
              <div
                className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                  isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="pb-6">
                    {item.columns.map((column) => (
                      <div key={column.title} className="mb-5 last:mb-0">
                        <p className="mb-2 font-display text-[11px] uppercase tracking-[0.28em] text-white/50">
                          {column.title}
                        </p>
                        <ul>
                          {column.links.map((link) => (
                            <li key={link.href}>
                              <Link
                                href={link.href}
                                onClick={onClose}
                                className="block py-2 text-[15px] text-white/85"
                              >
                                {link.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
