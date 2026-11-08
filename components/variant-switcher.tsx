"use client";

import { Suspense, useEffect, useRef, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {
  prefsToSearchParams,
  resolvePrefs,
  variantDefaults,
  variantSections,
  writePrefs,
  type VariantPrefs,
} from "@/lib/variant-prefs";

export function VariantSwitcher() {
  return (
    <Suspense fallback={null}>
      <VariantSwitcherInner />
    </Suspense>
  );
}

function prefsMatchUrl(prefs: VariantPrefs, params: URLSearchParams) {
  return (
    params.get("nav") === prefs.nav &&
    params.get("hero") === prefs.hero &&
    params.get("content") === prefs.content &&
    params.get("categorias") === prefs.categorias &&
    params.get("footer") === prefs.footer &&
    params.get("acento") === prefs.acento
  );
}

function VariantSwitcherInner() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  const query = searchParams.toString();
  const prefs = resolvePrefs(searchParams);

  useEffect(() => {
    const params = new URLSearchParams(query);
    const resolved = resolvePrefs(params);
    writePrefs(resolved);
    if (prefsMatchUrl(resolved, params)) return;
    const next = prefsToSearchParams(resolved, params);
    router.replace(`${pathname}?${next.toString()}`, { scroll: false });
  }, [pathname, query, router]);

  useEffect(() => {
    if (!open) return;

    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    function onPointer(event: MouseEvent) {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    }

    window.addEventListener("keydown", onKey);
    window.addEventListener("mousedown", onPointer);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("mousedown", onPointer);
    };
  }, [open]);

  function applyPrefs(nextPrefs: VariantPrefs) {
    writePrefs(nextPrefs);
    const next = prefsToSearchParams(nextPrefs, searchParams);
    router.replace(`${pathname}?${next.toString()}`, { scroll: false });
  }

  function setPref<K extends keyof VariantPrefs>(key: K, value: VariantPrefs[K]) {
    applyPrefs({ ...prefs, [key]: value });
  }

  function resetAll() {
    applyPrefs(variantDefaults);
  }

  const isAtDefaults = (Object.keys(variantDefaults) as (keyof VariantPrefs)[]).every(
    (key) => prefs[key] === variantDefaults[key],
  );

  return (
    <div ref={rootRef} className="fixed bottom-0 right-0 z-50">
      {open ? (
        <div className="absolute bottom-3 right-3 max-h-[calc(100svh-1.5rem)] w-[min(calc(100vw-1.5rem),17.5rem)] overflow-y-auto rounded-2xl border border-white/20 bg-[#0A0A0A] p-3.5 text-white shadow-[0_18px_50px_rgba(0,0,0,0.55),inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur-2xl backdrop-saturate-150 sm:bottom-4 sm:right-4">
          <div className="mb-3.5 flex items-center justify-between gap-3 px-0.5">
            <div>
              <p className="text-[13px] font-medium tracking-tight text-white">
                Variantes
              </p>
              <p className="mt-0.5 text-[11px] text-white/50">Concepto SIMA</p>
            </div>
            <button
              type="button"
              aria-label="Cerrar opciones"
              className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-full bg-white/10 text-[15px] leading-none text-white/60 transition-colors hover:bg-white/16 hover:text-white"
              onClick={() => setOpen(false)}
            >
              ×
            </button>
          </div>

          <div className="space-y-3">
            {variantSections.map((section) => (
              <div key={section.key}>
                <p className="mb-1.5 px-0.5 text-[10px] font-medium uppercase tracking-[0.14em] text-gray-200">
                  {section.label}
                </p>
                <div className="flex rounded-lg bg-black/35 p-0.5 ring-1 ring-white/10">
                  {section.options.map((option) => {
                    const active = prefs[section.key] === option.value;
                    return (
                      <button
                        key={option.value}
                        type="button"
                        aria-pressed={active}
                        onClick={() => setPref(section.key, option.value)}
                        className={`min-w-0 flex-1 cursor-pointer rounded-md px-1.5 py-1.5 text-center text-[11px] font-medium tracking-wide transition-all duration-200 ${
                          active
                            ? "bg-white text-ink shadow-[0_1px_2px_rgba(0,0,0,0.25)]"
                            : "text-white/55 hover:text-white/85"
                        }`}
                      >
                        {option.label}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          <button
            type="button"
            disabled={isAtDefaults}
            onClick={resetAll}
            className="mt-3.5 w-full cursor-pointer rounded-lg py-2 text-[11px] font-medium tracking-wide text-white/55 transition-colors hover:bg-white/8 hover:text-white disabled:cursor-default disabled:text-white/25 disabled:hover:bg-transparent"
          >
            Restablecer
          </button>
        </div>
      ) : (
        <button
          type="button"
          aria-expanded={false}
          aria-label="Abrir opciones de variantes"
          onClick={() => setOpen(true)}
          className="group absolute bottom-2 right-2 flex h-12 w-12 cursor-pointer items-end justify-end p-0"
        >
          <span
            aria-hidden
            className="pointer-events-none absolute bottom-0 right-0 flex h-7 w-7 items-center justify-center rounded-full border border-white/25 bg-[#1a1a1a]/90 opacity-90 shadow-[0_10px_28px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.14)] backdrop-blur-xl backdrop-saturate-150 transition duration-300 group-hover:h-8 group-hover:w-auto group-hover:min-w-22 group-hover:rounded-full group-hover:border-white/30 group-hover:bg-[#1a1a1a]/95 group-hover:px-3.5 group-hover:opacity-100 group-focus-visible:h-8 group-focus-visible:w-auto group-focus-visible:min-w-22 group-focus-visible:rounded-full group-focus-visible:border-white/30 group-focus-visible:bg-[#1a1a1a]/95 group-focus-visible:px-3.5 group-focus-visible:opacity-100"
          >
            <span className="flex flex-col gap-0.5 group-hover:hidden group-focus-visible:hidden">
              <span className="h-px w-2.5 rounded-full bg-white/85" />
              <span className="h-px w-1.5 rounded-full bg-white/85" />
              <span className="h-px w-2.5 rounded-full bg-white/85" />
            </span>
            <span className="hidden text-[11px] font-medium tracking-wide text-white group-hover:inline group-focus-visible:inline">
              Opciones
            </span>
          </span>
        </button>
      )}
    </div>
  );
}
