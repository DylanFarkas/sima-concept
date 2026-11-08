"use client";

import Link from "next/link";
import { Fragment, useLayoutEffect, useMemo, useRef, useState, type ReactNode } from "react";
import type { Product } from "@/lib/catalog";
import type { GridInsert, Tone } from "@/lib/category-pages";
import {
  applyFacets,
  buildFacets,
  emptyFacetState,
  facetSelectionCount,
  type FacetState,
} from "@/lib/facets";
import type { Subcategory } from "@/lib/taxonomy";
import { ButtonLabel, Photo, focusDark, focusLight } from "@/components/shared/editorial";
import { PhraseLine } from "@/components/category/phrase-band";
import { FilterSidebar } from "@/components/category/filter-sidebar";

type SortKey = "vendidos" | "az" | "za" | "precio-asc" | "precio-desc";

const sortOptions: { value: SortKey; label: string }[] = [
  { value: "vendidos", label: "Más vendidos" },
  { value: "az", label: "Alfabéticamente, A-Z" },
  { value: "za", label: "Alfabéticamente, Z-A" },
  { value: "precio-asc", label: "Precio, menor a mayor" },
  { value: "precio-desc", label: "Precio, mayor a menor" },
];

function formatPrice(value: number) {
  const formatted = new Intl.NumberFormat("es-CO", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
  return `$${formatted}`;
}

const toneClasses = {
  dark: {
    section: "bg-background text-white",
    soft: "text-white/85",
    count: "text-white/80",
    muted: "text-white/70",
    input: "border-white/20 text-white",
    menu: "border-white/15 bg-ink",
    option: "text-white",
    optionIdle: "text-white/70",
    density: "text-white",
    densityIdle: "text-white/45",
    drawer: "border-white/15 bg-background",
  },
  white: {
    section: "bg-white text-ink",
    soft: "text-ink/85",
    count: "text-ink/80",
    muted: "text-ink/70",
    input: "border-ink/25 text-ink",
    menu: "border-ink/15 bg-white",
    option: "text-ink",
    optionIdle: "text-ink/65",
    density: "text-ink",
    densityIdle: "text-ink/40",
    drawer: "border-ink/15 bg-white",
  },
} as const;

type ToneClasses = (typeof toneClasses)[Tone];

export function ProductGrid({
  products,
  heading,
  aspect = "square",
  tone = "dark",
  inserts = [],
  card = "original",
  sidebarFilters = false,
  subcategories = [],
  allHref,
  activeKey,
}: {
  products: Product[];
  heading?: string | null;
  aspect?: "portrait" | "square";
  tone?: Tone;
  inserts?: GridInsert[];
  card?: "original" | "editorial";
  sidebarFilters?: boolean;
  subcategories?: Subcategory[];
  allHref?: string;
  activeKey?: string;
}) {
  const t = toneClasses[tone];
  const [facetsState, setFacetsState] = useState<FacetState>(emptyFacetState);
  const [sort, setSort] = useState<SortKey>("vendidos");
  const [columns, setColumns] = useState<4 | 5>(5);
  const [open, setOpen] = useState<"stock" | "price" | "sort" | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [catalogMinHeight, setCatalogMinHeight] = useState<number>();
  const scrollYRef = useRef(0);
  const retainScrollRef = useRef(false);
  const resultsRef = useRef<HTMLDivElement>(null);

  function updateFacets(next: FacetState | ((current: FacetState) => FacetState)) {
    scrollYRef.current = window.scrollY;
    retainScrollRef.current = true;
    if (resultsRef.current) {
      const height = resultsRef.current.getBoundingClientRect().height;
      setCatalogMinHeight((current) => Math.max(current ?? 0, Math.ceil(height)));
    }
    setFacetsState(next);
  }

  const facets = useMemo(() => buildFacets(products), [products]);
  const filterState = useMemo<FacetState>(
    () =>
      sidebarFilters
        ? facetsState
        : {
            ...emptyFacetState,
            stock: facetsState.stock,
            minPrice: facetsState.minPrice,
            maxPrice: facetsState.maxPrice,
          },
    [sidebarFilters, facetsState],
  );
  const selected = sidebarFilters
    ? facetSelectionCount(facetsState)
    : facetsState.stock.length +
      (facetsState.minPrice.trim() ? 1 : 0) +
      (facetsState.maxPrice.trim() ? 1 : 0);

  const visible = useMemo(() => {
    const filtered = applyFacets(products, filterState).map((product, index) => ({
      product,
      index: products.indexOf(product),
    }));

    if (sort === "az" || sort === "za") {
      filtered.sort((a, b) =>
        a.product.title.localeCompare(b.product.title, "es", {
          sensitivity: "base",
        }),
      );
      if (sort === "za") filtered.reverse();
    } else if (sort === "precio-asc" || sort === "precio-desc") {
      filtered.sort((a, b) => a.product.price - b.product.price);
      if (sort === "precio-desc") filtered.reverse();
    } else {
      filtered.sort((a, b) => a.index - b.index);
    }

    return filtered.map(({ product }) => product);
  }, [products, filterState, sort]);

  useLayoutEffect(() => {
    if (!retainScrollRef.current) return;
    const y = scrollYRef.current;
    const restore = () => {
      window.scrollTo(0, y);
      document.documentElement.scrollTop = y;
      document.body.scrollTop = y;
    };
    restore();
    const frame = requestAnimationFrame(() => {
      restore();
      retainScrollRef.current = false;
    });
    return () => cancelAnimationFrame(frame);
  }, [facetsState, visible.length]);

  useLayoutEffect(() => {
    if (selected === 0) setCatalogMinHeight(undefined);
  }, [selected]);

  const gridClass = sidebarFilters
    ? columns === 5
      ? "grid-cols-2 md:grid-cols-3 xl:grid-cols-4"
      : "grid-cols-2 md:grid-cols-3 xl:grid-cols-3"
    : columns === 5
      ? "grid-cols-2 md:grid-cols-3 xl:grid-cols-5"
      : "grid-cols-2 md:grid-cols-3 xl:grid-cols-4";

  const pristine = selected === 0 && sort === "vendidos";
  const insertsAt = new Map<number, GridInsert[]>();
  if (pristine) {
    for (const insert of inserts) {
      if (insert.after >= visible.length) continue;
      insertsAt.set(insert.after, [...(insertsAt.get(insert.after) ?? []), insert]);
    }
  }
  const editorial = card === "editorial";

  const sidebarProps = {
    facets,
    state: facetsState,
    onChange: updateFacets,
    subcategories,
    allHref,
    activeKey,
    tone,
  } as const;

  function toggleStock(value: "in" | "out") {
    updateFacets((current) => ({
      ...current,
      stock: current.stock.includes(value)
        ? current.stock.filter((item) => item !== value)
        : [...current.stock, value],
    }));
  }

  const toolbar = (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex flex-wrap items-center gap-3 sm:gap-6">
        {sidebarFilters ? (
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            className={`inline-flex items-center gap-2 px-3 py-2 text-sm lg:hidden ${t.soft} ${
              tone === "white"
                ? "shadow-[inset_0_0_0_1px_rgba(18,18,18,0.2)]"
                : "shadow-[inset_0_0_0_1px_rgba(255,255,255,0.25)]"
            }`}
          >
            Filtros
            {selected > 0 ? <span className={t.muted}>({selected})</span> : null}
          </button>
        ) : (
          <>
            <FilterMenu
              t={t}
              label="Disponibilidad"
              open={open === "stock"}
              onToggle={() => setOpen(open === "stock" ? null : "stock")}
            >
              <label className="flex items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  checked={facetsState.stock.includes("in")}
                  onChange={() => toggleStock("in")}
                />
                En existencia
              </label>
              <label className="flex items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  checked={facetsState.stock.includes("out")}
                  onChange={() => toggleStock("out")}
                  disabled={!products.some((product) => !product.available)}
                />
                Agotado
              </label>
            </FilterMenu>
            <FilterMenu
              t={t}
              label="Precio"
              open={open === "price"}
              onToggle={() => setOpen(open === "price" ? null : "price")}
            >
              <label className={`block text-xs ${t.muted}`}>
                Precio bajo
                <input
                  inputMode="numeric"
                  value={facetsState.minPrice}
                  placeholder="0"
                  onChange={(event) =>
                    updateFacets((current) => ({ ...current, minPrice: event.target.value }))
                  }
                  className={`mt-1 w-full border bg-transparent px-3 py-2 text-sm outline-none ${t.input}`}
                />
              </label>
              <label className={`mt-3 block text-xs ${t.muted}`}>
                Precio alto
                <input
                  inputMode="numeric"
                  value={facetsState.maxPrice}
                  placeholder={formatPrice(facets.maxPrice)}
                  onChange={(event) =>
                    updateFacets((current) => ({ ...current, maxPrice: event.target.value }))
                  }
                  className={`mt-1 w-full border bg-transparent px-3 py-2 text-sm outline-none ${t.input}`}
                />
              </label>
            </FilterMenu>
          </>
        )}
        {sidebarFilters ? (
          <p className={`text-sm ${t.count}`}>
            {visible.length} {visible.length === 1 ? "artículo" : "artículos"}
          </p>
        ) : null}
      </div>

      <div className="flex flex-wrap items-center gap-4">
        {!sidebarFilters ? (
          <p className={`text-sm ${t.count}`}>
            {visible.length} {visible.length === 1 ? "artículo" : "artículos"}
          </p>
        ) : null}
        <FilterMenu
          t={t}
          label="Ordenar"
          open={open === "sort"}
          onToggle={() => setOpen(open === "sort" ? null : "sort")}
          align="right"
        >
          {sortOptions.map((option) => (
            <button
              key={option.value}
              type="button"
              onClick={() => {
                setSort(option.value);
                setOpen(null);
              }}
              className={`block w-full px-1 py-1 text-left text-sm ${
                sort === option.value ? t.option : t.optionIdle
              }`}
            >
              {option.label}
            </button>
          ))}
        </FilterMenu>
        <div className="flex items-center gap-1">
          <DensityButton
            t={t}
            label="Predeterminado"
            pressed={columns === 5}
            onClick={() => setColumns(5)}
            dense
          />
          <DensityButton
            t={t}
            label="Alejar"
            pressed={columns === 4}
            onClick={() => setColumns(4)}
          />
        </div>
      </div>
    </div>
  );

  const catalog = (
    <div
      ref={resultsRef}
      className="[overflow-anchor:none]"
      style={catalogMinHeight ? { minHeight: catalogMinHeight } : undefined}
    >
      {visible.length === 0 ? (
        <p className={`mt-10 text-sm ${t.muted}`}>No hay productos con esos filtros.</p>
      ) : editorial ? (
        <ul className={`mt-8 grid grid-flow-row-dense gap-x-3 gap-y-10 ${gridClass}`}>
          {visible.map((product, index) => (
            <Fragment key={product.handle}>
              <li className="[overflow-anchor:none]">
                <EditorialCard product={product} aspect={aspect} tone={tone} />
              </li>
              {insertsAt.get(index + 1)?.map((insert) => (
                <InsertTile key={`${insert.kind}-${insert.after}`} insert={insert} tone={tone} />
              ))}
            </Fragment>
          ))}
        </ul>
      ) : (
        <ul className={`mt-8 grid gap-x-4 gap-y-6 ${gridClass}`}>
          {visible.map((product) => (
            <li key={product.handle} className="[overflow-anchor:none]">
              <Link href={`/producto/${product.handle}`} className="group block">
                <span className="relative block aspect-square overflow-hidden bg-white">
                  {product.image ? (
                    <img
                      src={product.image}
                      alt={product.title}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <span className="flex h-full items-center justify-center bg-neutral-200 font-display text-sm tracking-[0.2em] text-ink/40">
                      SIMA
                    </span>
                  )}
                  <span className="absolute bottom-4 left-1/2 hidden -translate-x-1/2 bg-white px-4 py-2 text-sm text-ink group-hover:block">
                    {product.variantCount > 1 ? "Elegir" : "Agregar"}
                  </span>
                </span>
                <span className="mt-2 block text-sm leading-[1.6]">{product.title}</span>
                <span className="block font-display text-xs font-bold uppercase tracking-[0.03em]">
                  {formatPrice(product.price)}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );

  return (
    <section id="productos" className={`${t.section} ${editorial ? "scroll-mt-16" : ""}`}>
      <div className={`page-wrap ${editorial ? "pb-20 pt-12 lg:pb-28 lg:pt-16" : "py-10 lg:py-12"}`}>
        {heading === null ? null : (
          <h2 className="font-display text-[clamp(2.25rem,4.8vw,3rem)] font-bold uppercase leading-none">
            {heading ?? "PRODUCTOS"}
          </h2>
        )}

        {sidebarFilters ? (
          <div
            className={`lg:grid lg:grid-cols-[15.5rem_minmax(0,1fr)] lg:gap-10 xl:grid-cols-[17rem_minmax(0,1fr)] xl:gap-12 ${
              heading === null ? "" : "mt-8"
            }`}
          >
            <div className="hidden lg:block">
              <FilterSidebar {...sidebarProps} />
            </div>
            <div>
              {toolbar}
              {catalog}
            </div>
          </div>
        ) : (
          <div className={heading === null ? "" : "mt-8"}>
            {toolbar}
            {catalog}
          </div>
        )}
      </div>

      {mobileOpen && sidebarFilters ? (
        <div className="fixed inset-0 z-50 lg:hidden">
          <button
            type="button"
            aria-label="Cerrar filtros"
            className="absolute inset-0 bg-black/55"
            onClick={() => setMobileOpen(false)}
          />
          <div
            className={`absolute inset-y-0 left-0 flex w-[min(100%,22rem)] flex-col border-r ${t.drawer}`}
          >
            <div className="flex items-center justify-between border-b border-inherit px-5 py-4">
              <p className="font-display text-sm font-bold uppercase tracking-[0.14em]">Filtros</p>
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                className={`text-sm ${t.soft}`}
              >
                Cerrar
              </button>
            </div>
            <div className="filter-scroll flex-1 overflow-y-auto px-5 py-4">
              <FilterSidebar {...sidebarProps} showHeading={false} />
            </div>
            <div className="border-t border-inherit px-5 py-4">
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                className={`w-full px-4 py-3 text-xs font-bold uppercase tracking-[0.08em] ${
                  tone === "white" ? "bg-ink text-white" : "bg-white text-ink"
                }`}
              >
                Ver {visible.length} {visible.length === 1 ? "artículo" : "artículos"}
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}

function EditorialCard({
  product,
  aspect,
  tone,
}: {
  product: Product;
  aspect: "portrait" | "square";
  tone: Tone;
}) {
  const frame = aspect === "portrait" ? "aspect-3/4 bg-card" : "aspect-square bg-white";
  return (
    <Link
      href={`/producto/${product.handle}`}
      className={`group block ${tone === "white" ? focusLight : focusDark}`}
    >
      <span className={`relative block overflow-hidden ${frame}`}>
        {product.image ? (
          <Photo product={product} />
        ) : (
          <span className="flex h-full items-center justify-center bg-neutral-200 font-display text-sm tracking-[0.2em] text-ink/40">
            SIMA
          </span>
        )}
        {!product.available ? (
          <span className="absolute left-3 top-3 bg-ink px-2.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-white">
            Agotado
          </span>
        ) : null}
      </span>
      <span className="mt-4 flex items-baseline justify-between gap-3">
        <span className="text-sm leading-snug">{product.title}</span>
        <span className="shrink-0 font-display text-sm font-bold tracking-[0.03em]">
          {formatPrice(product.price)}
        </span>
      </span>
    </Link>
  );
}

function InsertTile({ insert, tone }: { insert: GridInsert; tone: Tone }) {
  if (insert.kind === "phrase") {
    return (
      <li
        className={`col-span-full border-y-2 py-14 lg:py-20 ${tone === "white" ? "border-ink" : "border-white"}`}
      >
        <PhraseLine text={insert.text} tone={tone} cta={insert.cta} />
      </li>
    );
  }

  return (
    <li className="col-span-2">
      <Link
        href={insert.cta.href}
        className={`group relative flex h-full min-h-105 flex-col justify-end overflow-hidden bg-card p-6 text-white lg:p-8 ${
          tone === "white" ? focusLight : focusDark
        }`}
      >
        <Photo product={insert.product} />
        <span className="absolute inset-0 bg-linear-to-t from-black/80 via-black/25 to-transparent" />
        <span className="relative flex flex-col items-start gap-5">
          <span className="max-w-[12ch] font-display text-[clamp(2.25rem,3.6vw,3.75rem)] font-bold uppercase leading-[0.9] tracking-[-0.02em]">
            {insert.title}
          </span>
          <span className="max-w-[34ch] text-sm leading-relaxed text-white/80">{insert.text}</span>
          <ButtonLabel>{insert.cta.label}</ButtonLabel>
        </span>
      </Link>
    </li>
  );
}

function FilterMenu({
  t,
  label,
  open,
  onToggle,
  align = "left",
  children,
}: {
  t: ToneClasses;
  label: string;
  open: boolean;
  onToggle: () => void;
  align?: "left" | "right";
  children: ReactNode;
}) {
  return (
    <div className="relative">
      <button
        type="button"
        aria-expanded={open}
        onClick={onToggle}
        className={`flex items-center gap-1 text-sm ${t.soft}`}
      >
        {label}
        <Chevron />
      </button>
      {open ? (
        <div
          className={`absolute top-full z-20 mt-3 min-w-52 border p-4 ${t.menu} ${
            align === "right" ? "right-0" : "left-0"
          }`}
        >
          {children}
        </div>
      ) : null}
    </div>
  );
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

function DensityButton({
  t,
  label,
  pressed,
  onClick,
  dense = false,
}: {
  t: ToneClasses;
  label: string;
  pressed: boolean;
  onClick: () => void;
  dense?: boolean;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      aria-pressed={pressed}
      onClick={onClick}
      className={`flex h-9 w-9 items-center justify-center ${
        pressed ? t.density : t.densityIdle
      }`}
    >
      <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor" aria-hidden="true">
        {dense ? (
          <>
            <rect x="1" y="1" width="4" height="4" />
            <rect x="7" y="1" width="4" height="4" />
            <rect x="13" y="1" width="4" height="4" />
            <rect x="1" y="7" width="4" height="4" />
            <rect x="7" y="7" width="4" height="4" />
            <rect x="13" y="7" width="4" height="4" />
            <rect x="1" y="13" width="4" height="4" />
            <rect x="7" y="13" width="4" height="4" />
            <rect x="13" y="13" width="4" height="4" />
          </>
        ) : (
          <>
            <rect x="1" y="1" width="7" height="7" />
            <rect x="10" y="1" width="7" height="7" />
            <rect x="1" y="10" width="7" height="7" />
            <rect x="10" y="10" width="7" height="7" />
          </>
        )}
      </svg>
    </button>
  );
}
