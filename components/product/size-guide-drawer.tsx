"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { focusLight } from "@/components/shared/editorial";
import {
  shoeCharts,
  shoeMeasureSteps,
  shoeSizeKey,
  type ShoeAudience,
  type ShoeFit,
  type ShoeRow,
} from "@/lib/shoe-sizes";

type Props = {
  open: boolean;
  onClose: () => void;
  audience: ShoeAudience;
  fit: ShoeFit | null;
  onFit: (fit: ShoeFit) => void;
  selectedCol: string;
};

const fits: readonly { id: ShoeFit; label: string }[] = [
  { id: "mujer", label: "Mujer" },
  { id: "hombre", label: "Hombre" },
];

const motionMs = 320;

function closeDelay() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return 0;
  return motionMs;
}

export function SizeGuideDrawer({ open, onClose, audience, fit, onFit, selectedCol }: Props) {
  const titleId = useId();
  const panelRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const onCloseRef = useRef(onClose);
  const [present, setPresent] = useState(false);
  const [shown, setShown] = useState(false);
  onCloseRef.current = onClose;

  useEffect(() => {
    if (open) {
      setPresent(true);
      return;
    }
    setShown(false);
    const timer = window.setTimeout(() => setPresent(false), closeDelay());
    return () => window.clearTimeout(timer);
  }, [open]);

  useEffect(() => {
    if (!present || !open) return;
    let inner = 0;
    const outer = window.requestAnimationFrame(() => {
      inner = window.requestAnimationFrame(() => setShown(true));
    });
    return () => {
      window.cancelAnimationFrame(outer);
      window.cancelAnimationFrame(inner);
    };
  }, [present, open]);

  useEffect(() => {
    if (!present) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [present]);

  useEffect(() => {
    if (!open || !present) return;
    const previous = document.activeElement;
    const panel = panelRef.current;
    closeRef.current?.focus();

    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        onCloseRef.current();
        return;
      }
      if (event.key !== "Tab" || !panel) return;
      const focusable = [...panel.querySelectorAll<HTMLElement>("a[href], button:not([disabled])")];
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      if (previous instanceof HTMLElement) previous.focus();
    };
  }, [open, present]);

  if (!present) return null;

  const charts: ShoeFit[] = audience === "unisex" ? (fit ? [fit] : ["mujer", "hombre"]) : [audience];

  return (
    <div className="fixed inset-0 z-[60]">
      <button
        type="button"
        aria-label="Cerrar guía de tallas"
        className={`absolute inset-0 bg-black/45 transition-opacity duration-[320ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${
          shown ? "opacity-100" : "opacity-0"
        } ${open ? "" : "pointer-events-none"}`}
        onClick={onClose}
      />
      <div
        ref={panelRef}
        role="dialog"
        aria-modal={open}
        aria-hidden={!open}
        aria-labelledby={titleId}
        className={`absolute inset-y-0 right-0 flex w-full flex-col bg-white text-ink shadow-[-16px_0_40px_rgba(0,0,0,0.18)] sm:w-[440px] sm:border-l sm:border-ink/10 ${
          open ? "" : "pointer-events-none"
        }`}
        style={{
          transform: shown ? "translate3d(0,0,0)" : "translate3d(100%,0,0)",
          transition:
            typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches
              ? "none"
              : "transform 320ms cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      >
        <div className="flex items-start justify-between gap-4 px-6 pb-2 pt-6">
          <div>
            <h2 id={titleId} className="text-base font-medium leading-none">
              Guía de tallas
            </h2>
            {audience === "unisex" ? null : (
              <p className="mt-1.5 text-sm text-ink/45">{audience === "hombre" ? "Hombre" : "Mujer"}</p>
            )}
          </div>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Cerrar"
            className={`-mr-1 -mt-1 flex h-8 w-8 items-center justify-center text-xl leading-none text-ink/70 ${focusLight}`}
          >
            ×
          </button>
        </div>

        <div className="filter-scroll-light flex-1 overflow-y-auto px-6 pb-8 pt-4">
          {audience === "unisex" ? (
            <div className="mb-8">
              <p className="mb-2 text-xs text-ink/45">Equivalencia</p>
              <FitSwitch fit={fit} onFit={onFit} />
            </div>
          ) : null}

          <p className="text-xs text-ink/45">Cómo medir</p>
          <ol className="mt-4 space-y-5">
            {shoeMeasureSteps.map((step) => (
              <li key={step.id} className="grid grid-cols-[1.5rem_1fr] gap-3">
                <span className="pt-0.5 text-xs tabular-nums text-ink/35">{step.id}</span>
                <div>
                  <h3 className="text-sm font-medium leading-none">{step.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink/55">{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
          <img
            src="/sima/guia-talla-pie.png"
            alt=""
            width={452}
            height={324}
            className="mx-auto mt-8 h-auto w-full max-w-[16rem] invert"
          />

          <div className="mt-10 space-y-10">
            {charts.map((chart) => (
              <ShoeTable
                key={chart}
                title={audience === "unisex" && !fit ? (chart === "hombre" ? "Hombre" : "Mujer") : undefined}
                rows={shoeCharts[chart]}
                selectedCol={fit === chart || audience !== "unisex" ? selectedCol : ""}
              />
            ))}
          </div>

          <p className="mt-8 text-sm leading-relaxed text-ink/50">
            En SIMA pides la talla de Colombia. Si vas a usar medias gruesas o plantillas, considera
            media talla más.
          </p>
          <Link
            href="/guia-de-tallas#zapatos"
            className={`mt-3 inline-block text-sm text-ink/70 underline decoration-ink/20 underline-offset-4 ${focusLight}`}
          >
            Ver la guía completa
          </Link>
        </div>
      </div>
    </div>
  );
}

function FitSwitch({ fit, onFit }: { fit: ShoeFit | null; onFit: (fit: ShoeFit) => void }) {
  return (
    <div className="grid grid-cols-2 gap-[11px]" role="radiogroup" aria-label="Equivalencia">
      {fits.map((item) => {
        const active = fit === item.id;
        return (
          <button
            key={item.id}
            type="button"
            role="radio"
            aria-checked={active}
            onClick={() => onFit(item.id)}
            className={`h-9 text-sm ${focusLight} ${
              active ? "text-ink underline decoration-ink underline-offset-4" : "text-ink/40"
            }`}
          >
            {item.label}
          </button>
        );
      })}
    </div>
  );
}

function ShoeTable({
  title,
  rows,
  selectedCol,
}: {
  title?: string;
  rows: readonly ShoeRow[];
  selectedCol: string;
}) {
  const selectedKey = shoeSizeKey(selectedCol);
  return (
    <figure>
      {title ? <figcaption className="mb-3 text-xs text-ink/45">{title}</figcaption> : null}
      <table className="w-full border-separate border-spacing-y-2 text-left text-sm tabular-nums">
        <thead>
          <tr className="text-[11px] tracking-wide text-ink/40">
            <th scope="col" className="px-3 pb-2 pt-1 text-left font-normal">
              Colombia
            </th>
            <th scope="col" className="px-2 pb-2 pt-1 text-left font-normal">
              EUR
            </th>
            <th scope="col" className="px-2 pb-2 pt-1 text-left font-normal">
              US
            </th>
            <th scope="col" className="px-2 pb-2 pt-1 text-left font-normal">
              UK
            </th>
            <th scope="col" className="px-3 pb-2 pt-1 text-left font-normal">
              cm
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => {
            const active = shoeSizeKey(row.col) === selectedKey && selectedKey.length > 0;
            const tone = active ? "bg-ink py-4 text-white" : "py-2.5";
            return (
              <tr key={row.col}>
                <th
                  scope="row"
                  className={`rounded-l-lg px-3 text-left font-medium leading-none ${tone} ${
                    active ? "" : "text-ink"
                  }`}
                >
                  {row.col}
                </th>
                <td className={`px-2 leading-none ${tone} ${active ? "" : "text-ink/55"}`}>{row.eu}</td>
                <td className={`px-2 leading-none ${tone} ${active ? "" : "text-ink/55"}`}>{row.us}</td>
                <td className={`px-2 leading-none ${tone} ${active ? "" : "text-ink/55"}`}>{row.uk}</td>
                <td className={`rounded-r-lg px-3 leading-none ${tone} ${active ? "" : "text-ink/55"}`}>
                  {row.cm}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </figure>
  );
}
