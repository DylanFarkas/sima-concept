"use client";

import Link from "next/link";
import { useState, type ReactNode } from "react";
import type { Tone } from "@/lib/category-pages";
import {
  colorSwatch,
  emptyFacetState,
  facetSelectionCount,
  type CatalogFacets,
  type FacetOption,
  type FacetState,
} from "@/lib/facets";
import type { Audience, Subcategory } from "@/lib/taxonomy";
import { focusDark, focusLight } from "@/components/shared/editorial";

type Props = {
  facets: CatalogFacets;
  state: FacetState;
  onChange: (next: FacetState) => void;
  subcategories?: Subcategory[];
  allHref?: string;
  activeKey?: string;
  tone?: Tone;
  className?: string;
  showHeading?: boolean;
};

function formatPrice(value: number) {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0,
  }).format(value);
}

export function FilterSidebar({
  facets,
  state,
  onChange,
  subcategories = [],
  allHref,
  activeKey,
  tone = "dark",
  className = "",
  showHeading = true,
}: Props) {
  const light = tone === "white";
  const focus = light ? focusLight : focusDark;
  const selected = facetSelectionCount(state);
  const rule = light ? "border-ink/12" : "border-white/12";
  const muted = light ? "text-ink/55" : "text-white/55";
  const soft = light ? "text-ink/80" : "text-white/80";
  const input = light
    ? "border-ink/20 bg-transparent text-ink placeholder:text-ink/35"
    : "border-white/20 bg-transparent text-white placeholder:text-white/35";

  function toggle<K extends "stock" | "brands" | "colors" | "sizes">(
    key: K,
    value: FacetState[K][number],
  ) {
    const current = state[key] as Array<typeof value>;
    const next = current.includes(value)
      ? current.filter((item) => item !== value)
      : [...current, value];
    onChange({ ...state, [key]: next });
  }

  function toggleAudience(value: Audience) {
    const next = state.audiences.includes(value)
      ? state.audiences.filter((item) => item !== value)
      : [...state.audiences, value];
    onChange({ ...state, audiences: next });
  }

  return (
    <aside
      className={`filter-scroll lg:sticky lg:top-24 lg:max-h-[calc(100svh-6.5rem)] lg:self-start lg:overflow-y-auto lg:pr-1 ${className}`}
    >
      {showHeading || selected > 0 ? (
        <div className={`mb-6 flex items-center justify-between gap-3 lg:mb-8 ${showHeading ? "" : "lg:mb-6"}`}>
          {showHeading ? (
            <p className="font-display text-sm font-bold uppercase tracking-[0.14em]">Filtros</p>
          ) : (
            <span />
          )}
          {selected > 0 ? (
            <button
              type="button"
              onClick={() => onChange(emptyFacetState)}
              className={`text-xs underline underline-offset-4 ${muted} ${focus}`}
            >
              Limpiar
            </button>
          ) : null}
        </div>
      ) : null}

      {subcategories.length > 0 && allHref ? (
        <nav aria-label="Subcategorías" className={`border-b pb-6 ${rule}`}>
          <ul className="space-y-1">
            <li>
              <Link
                href={allHref}
                aria-current={!activeKey ? "page" : undefined}
                className={`block py-1.5 text-[15px] transition-colors ${focus} ${
                  !activeKey ? (light ? "text-ink" : "text-white") : soft
                }`}
              >
                Todo
              </Link>
            </li>
            {subcategories.map((sub) => {
              const active = activeKey === sub.key;
              return (
                <li key={sub.key}>
                  <Link
                    href={sub.href}
                    aria-current={active ? "page" : undefined}
                    className={`block py-1.5 text-[15px] transition-colors ${focus} ${
                      active ? (light ? "text-ink" : "text-white") : soft
                    }`}
                  >
                    {sub.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      ) : null}

      <div className={subcategories.length > 0 ? "mt-2" : ""}>
        {facets.audiences.length > 1 ? (
          <Accordion title="Género" count={state.audiences.length} tone={tone}>
            <CheckboxList
              options={facets.audiences}
              selected={state.audiences}
              onToggle={(value) => toggleAudience(value as Audience)}
              tone={tone}
            />
          </Accordion>
        ) : null}

        {facets.stock.length > 0 ? (
          <Accordion title="Disponibilidad" count={state.stock.length} tone={tone}>
            <CheckboxList
              options={facets.stock}
              selected={state.stock}
              onToggle={(value) => toggle("stock", value as "in" | "out")}
              tone={tone}
            />
          </Accordion>
        ) : null}

        {facets.brands.length > 0 ? (
          <Accordion title="Marca" count={state.brands.length} tone={tone} defaultOpen>
            <CheckboxList
              options={facets.brands}
              selected={state.brands}
              onToggle={(value) => toggle("brands", value)}
              tone={tone}
            />
          </Accordion>
        ) : null}

        {facets.colors.length > 0 ? (
          <Accordion title="Color" count={state.colors.length} tone={tone} defaultOpen>
            <div className="flex flex-wrap gap-2.5">
              {facets.colors.map((option) => {
                const checked = state.colors.includes(option.value);
                const swatch = colorSwatch(option.value) ?? "#6b6b6b";
                const lightSwatch = isLightSwatch(swatch);
                return (
                  <button
                    key={option.value}
                    type="button"
                    aria-pressed={checked}
                    aria-label={option.label}
                    title={option.label}
                    onMouseDown={(event) => event.preventDefault()}
                    onClick={() => toggle("colors", option.value)}
                    className={`relative size-7 rounded-full transition ${focus} ${
                      checked
                        ? light
                          ? "ring-2 ring-ink ring-offset-2 ring-offset-white"
                          : "ring-2 ring-white ring-offset-2 ring-offset-background"
                        : light
                          ? "ring-1 ring-ink/15"
                          : "ring-1 ring-white/25"
                    }`}
                    style={{ backgroundColor: swatch }}
                  >
                    {checked ? (
                      <span
                        className={`absolute inset-0 grid place-items-center ${
                          lightSwatch ? "text-ink" : "text-white"
                        }`}
                      >
                        <Check />
                      </span>
                    ) : null}
                  </button>
                );
              })}
            </div>
          </Accordion>
        ) : null}

        <Accordion title="Precio" count={(state.minPrice ? 1 : 0) + (state.maxPrice ? 1 : 0)} tone={tone}>
          <div className="grid grid-cols-2 gap-3">
            <label className={`block text-xs ${muted}`}>
              Desde
              <input
                inputMode="numeric"
                value={state.minPrice}
                placeholder="0"
                onChange={(event) => onChange({ ...state, minPrice: event.target.value })}
                className={`mt-1.5 w-full border px-3 py-2 text-sm outline-none ${input}`}
              />
            </label>
            <label className={`block text-xs ${muted}`}>
              Hasta
              <input
                inputMode="numeric"
                value={state.maxPrice}
                placeholder={formatPrice(facets.maxPrice)}
                onChange={(event) => onChange({ ...state, maxPrice: event.target.value })}
                className={`mt-1.5 w-full border px-3 py-2 text-sm outline-none ${input}`}
              />
            </label>
          </div>
        </Accordion>

        {facets.sizes.length > 0 ? (
          <Accordion title="Talla" count={state.sizes.length} tone={tone} defaultOpen>
            <div className="flex flex-wrap gap-2">
              {facets.sizes.map((option) => {
                const checked = state.sizes.includes(option.value);
                return (
                  <button
                    key={option.value}
                    type="button"
                    aria-pressed={checked}
                    onMouseDown={(event) => event.preventDefault()}
                    onClick={() => toggle("sizes", option.value)}
                    className={`min-w-11 px-2.5 py-2 text-xs font-bold uppercase tracking-[0.04em] transition-colors ${focus} ${
                      checked
                        ? light
                          ? "bg-ink text-white"
                          : "bg-white text-ink"
                        : light
                          ? "shadow-[inset_0_0_0_1px_rgba(18,18,18,0.2)] text-ink/75 hover:bg-ink hover:text-white"
                          : "shadow-[inset_0_0_0_1px_rgba(255,255,255,0.25)] text-white/75 hover:bg-white hover:text-ink"
                    }`}
                  >
                    {option.label}
                  </button>
                );
              })}
            </div>
          </Accordion>
        ) : null}
      </div>
    </aside>
  );
}

function Accordion({
  title,
  count,
  tone,
  defaultOpen = false,
  children,
}: {
  title: string;
  count: number;
  tone: Tone;
  defaultOpen?: boolean;
  children: ReactNode;
}) {
  const light = tone === "white";
  const [open, setOpen] = useState(defaultOpen);
  return (
    <details
      open={open}
      onToggle={(event) => setOpen(event.currentTarget.open)}
      className={`group border-b ${light ? "border-ink/12" : "border-white/12"}`}
    >
      <summary className="flex cursor-pointer list-none items-center justify-between gap-3 py-4 text-sm font-bold uppercase tracking-[0.08em] [&::-webkit-details-marker]:hidden">
        <span className="flex items-center gap-2">
          {title}
          {count > 0 ? (
            <span className={light ? "text-ink/45" : "text-white/45"}>({count})</span>
          ) : null}
        </span>
        <span className="transition-transform duration-200 group-open:rotate-180">
          <Chevron />
        </span>
      </summary>
      <div className="pb-5">{children}</div>
    </details>
  );
}

function CheckboxList({
  options,
  selected,
  onToggle,
  tone,
}: {
  options: FacetOption[];
  selected: string[];
  onToggle: (value: string) => void;
  tone: Tone;
}) {
  const light = tone === "white";
  const soft = light ? "text-ink/80" : "text-white/80";
  const focus = light ? focusLight : focusDark;

  return (
    <ul className="space-y-1">
      {options.map((option) => {
        const checked = selected.includes(option.value);
        return (
          <li key={option.value}>
            <button
              type="button"
              aria-pressed={checked}
              onMouseDown={(event) => event.preventDefault()}
              onClick={() => onToggle(option.value)}
              className={`flex w-full items-center gap-3 py-1.5 text-left text-sm ${soft} ${focus}`}
            >
              <span
                aria-hidden
                className={`grid size-5 shrink-0 place-items-center border ${
                  checked
                    ? light
                      ? "border-ink bg-ink text-white"
                      : "border-white bg-white text-ink"
                    : light
                      ? "border-ink/25"
                      : "border-white/30"
                }`}
              >
                {checked ? <Check /> : null}
              </span>
              <span className="min-w-0 flex-1">{option.label}</span>
            </button>
          </li>
        );
      })}
    </ul>
  );
}

function isLightSwatch(hex: string) {
  const value = hex.replace("#", "");
  if (value.length !== 6) return false;
  const r = Number.parseInt(value.slice(0, 2), 16);
  const g = Number.parseInt(value.slice(2, 4), 16);
  const b = Number.parseInt(value.slice(4, 6), 16);
  return (r * 299 + g * 587 + b * 114) / 1000 > 160;
}

function Chevron() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path
        d="M11 5.5 7 9.5 3 5.5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Check() {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
      <path
        d="M1.5 5.2 3.8 7.5 8.5 2.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
