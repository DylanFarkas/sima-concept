"use client";

import Link from "next/link";
import { useMemo, useState, type ReactNode } from "react";
import type { Product } from "@/lib/catalog";

type SortKey = "vendidos" | "az" | "za" | "precio-asc" | "precio-desc";
type StockFilter = "in" | "out";

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

function parsePrice(value: string) {
  const cleaned = value.trim().replace(/\./g, "").replace(",", ".");
  if (!cleaned) return null;
  const number = Number(cleaned);
  return Number.isFinite(number) ? number : null;
}

export function ProductGrid({ products }: { products: Product[] }) {
  const [stock, setStock] = useState<StockFilter[]>([]);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [sort, setSort] = useState<SortKey>("vendidos");
  const [columns, setColumns] = useState<4 | 5>(5);
  const [open, setOpen] = useState<"stock" | "price" | "sort" | null>(null);

  const maxCatalogPrice = useMemo(
    () => products.reduce((max, product) => Math.max(max, product.price), 0),
    [products],
  );

  const visible = useMemo(() => {
    const min = parsePrice(minPrice);
    const max = parsePrice(maxPrice);
    const indexed = products.map((product, index) => ({ product, index }));

    const filtered = indexed.filter(({ product }) => {
      if (stock.length === 1) {
        if (stock[0] === "in" && !product.available) return false;
        if (stock[0] === "out" && product.available) return false;
      }
      if (min !== null && product.price < min) return false;
      if (max !== null && product.price > max) return false;
      return true;
    });

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
    }

    return filtered.map(({ product }) => product);
  }, [products, stock, minPrice, maxPrice, sort]);

  function toggleStock(value: StockFilter) {
    setStock((current) =>
      current.includes(value)
        ? current.filter((item) => item !== value)
        : [...current, value],
    );
  }

  const gridClass =
    columns === 5
      ? "grid-cols-2 md:grid-cols-3 xl:grid-cols-5"
      : "grid-cols-2 md:grid-cols-3 xl:grid-cols-4";

  return (
    <section id="productos" className="bg-background text-white">
      <div className="page-wrap py-10 lg:py-12">
        <h2 className="font-display text-[clamp(2.25rem,4.8vw,3rem)] font-bold uppercase leading-none">
          PRODUCTOS
        </h2>

        <div className="mt-8 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap items-center gap-6">
            <FilterMenu
              label="Disponibilidad"
              open={open === "stock"}
              onToggle={() => setOpen(open === "stock" ? null : "stock")}
            >
              <label className="flex items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  checked={stock.includes("in")}
                  onChange={() => toggleStock("in")}
                />
                En existencia
              </label>
              <label className="flex items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  checked={stock.includes("out")}
                  onChange={() => toggleStock("out")}
                  disabled={!products.some((product) => !product.available)}
                />
                Agotado
              </label>
            </FilterMenu>

            <FilterMenu
              label="Precio"
              open={open === "price"}
              onToggle={() => setOpen(open === "price" ? null : "price")}
            >
              <label className="block text-xs text-white/70">
                Precio bajo
                <input
                  inputMode="numeric"
                  value={minPrice}
                  placeholder="0"
                  onChange={(event) => setMinPrice(event.target.value)}
                  className="mt-1 w-full border border-white/20 bg-transparent px-3 py-2 text-sm text-white outline-none"
                />
              </label>
              <label className="mt-3 block text-xs text-white/70">
                Precio alto
                <input
                  inputMode="numeric"
                  value={maxPrice}
                  placeholder={formatPrice(maxCatalogPrice)}
                  onChange={(event) => setMaxPrice(event.target.value)}
                  className="mt-1 w-full border border-white/20 bg-transparent px-3 py-2 text-sm text-white outline-none"
                />
              </label>
            </FilterMenu>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <p className="text-sm text-white/80">
              {visible.length} {visible.length === 1 ? "artículo" : "artículos"}
            </p>
            <FilterMenu
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
                    sort === option.value ? "text-white" : "text-white/70"
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </FilterMenu>
            <div className="flex items-center gap-1">
              <DensityButton
                label="Predeterminado"
                pressed={columns === 5}
                onClick={() => setColumns(5)}
                dense
              />
              <DensityButton
                label="Alejar"
                pressed={columns === 4}
                onClick={() => setColumns(4)}
              />
            </div>
          </div>
        </div>

        {visible.length === 0 ? (
          <p className="mt-10 text-sm text-white/70">
            No hay productos con esos filtros.
          </p>
        ) : (
          <ul className={`mt-8 grid gap-x-4 gap-y-6 ${gridClass}`}>
            {visible.map((product) => (
              <li key={product.handle}>
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
                  <span className="mt-2 block text-sm leading-[1.6]">
                    {product.title}
                  </span>
                  <span className="block font-display text-xs font-bold uppercase tracking-[0.03em]">
                    {formatPrice(product.price)}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}

function FilterMenu({
  label,
  open,
  onToggle,
  align = "left",
  children,
}: {
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
        className="flex items-center gap-1 text-sm text-white/85"
      >
        {label}
        <Chevron />
      </button>
      {open ? (
        <div
          className={`absolute top-full z-20 mt-3 min-w-52 border border-white/15 bg-ink p-4 ${
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
  label,
  pressed,
  onClick,
  dense = false,
}: {
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
        pressed ? "text-white" : "text-white/45"
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
