import type { Product } from "@/lib/catalog";
import { productDetails } from "@/lib/product-details";
import {
  audienceLabels,
  brandLabels,
  productClass,
  type Audience,
} from "@/lib/taxonomy";

export type FacetOption = {
  value: string;
  label: string;
  count: number;
};

export type CatalogFacets = {
  stock: FacetOption[];
  brands: FacetOption[];
  colors: FacetOption[];
  sizes: FacetOption[];
  audiences: FacetOption[];
  maxPrice: number;
};

export type FacetState = {
  stock: Array<"in" | "out">;
  brands: string[];
  colors: string[];
  sizes: string[];
  audiences: Audience[];
  minPrice: string;
  maxPrice: string;
};

export const emptyFacetState: FacetState = {
  stock: [],
  brands: [],
  colors: [],
  sizes: [],
  audiences: [],
  minPrice: "",
  maxPrice: "",
};

const colorSwatches: Record<string, string> = {
  Negro: "#111111",
  Blanco: "#f5f5f5",
  Beige: "#d6c6a8",
  Gris: "#8a8a8a",
  "Gris oscuro": "#4a4a4a",
  Verde: "#2f5d3a",
  Azul: "#2a4a7a",
  "Azul marino": "#1a2f4d",
  Rosa: "#e8a0b0",
  Rojo: "#b03a3a",
  Naranja: "#d46a2a",
  Moca: "#7a5a42",
  Morado: "#5a3a7a",
  Fuscia: "#c03a7a",
  Amarillo: "#d4b02a",
  Violeta: "#6a3a8a",
  Cafe: "#5a3a22",
  Salmon: "#e09078",
  Vinotinto: "#6a1a2a",
};

const apparelSizeOrder = ["XS", "S", "M", "L", "XL", "2XL", "3XL"];

function isSizeOption(name: string) {
  const value = name.toLowerCase();
  return value === "talla" || value === "size" || value === "talla del calzado";
}

function isColorOption(name: string) {
  return name.toLowerCase() === "color";
}

function normalizeSizeLabel(value: string) {
  if (value.toLowerCase() === "xl") return "XL";
  return value;
}

function sizeSortKey(value: string) {
  const apparel = apparelSizeOrder.indexOf(normalizeSizeLabel(value));
  if (apparel >= 0) return apparel;
  const numeric = Number(value.replace(",", ".").split(/[/-]/)[0]);
  if (Number.isFinite(numeric)) return 100 + numeric;
  return 1000 + value.charCodeAt(0);
}

export function colorSwatch(value: string) {
  return colorSwatches[value] ?? null;
}

export function productColors(handle: string) {
  const detail = productDetails[handle];
  if (!detail) return [] as string[];
  const values = new Set<string>();
  for (const option of detail.options) {
    if (!isColorOption(option.name)) continue;
    for (const value of option.values) {
      if (value && !value.includes("+")) values.add(value);
    }
  }
  return [...values];
}

export function productSizes(handle: string) {
  const detail = productDetails[handle];
  if (!detail) return [] as string[];
  const values = new Set<string>();
  for (const option of detail.options) {
    if (!isSizeOption(option.name)) continue;
    for (const value of option.values) {
      if (value) values.add(normalizeSizeLabel(value));
    }
  }
  return [...values];
}

function parsePrice(value: string) {
  const cleaned = value.trim().replace(/\./g, "").replace(",", ".");
  if (!cleaned) return null;
  const number = Number(cleaned);
  return Number.isFinite(number) ? number : null;
}

export function buildFacets(products: Product[]): CatalogFacets {
  const brands = new Map<string, number>();
  const colors = new Map<string, number>();
  const sizes = new Map<string, number>();
  const audiences = new Map<Audience, number>();
  let inStock = 0;
  let outStock = 0;
  let maxPrice = 0;

  for (const product of products) {
    maxPrice = Math.max(maxPrice, product.price);
    if (product.available) inStock += 1;
    else outStock += 1;

    const info = productClass.get(product.handle);
    if (info?.brand && brandLabels[info.brand]) {
      brands.set(info.brand, (brands.get(info.brand) ?? 0) + 1);
    }
    if (info?.audience) {
      audiences.set(info.audience, (audiences.get(info.audience) ?? 0) + 1);
    }
    for (const color of productColors(product.handle)) {
      colors.set(color, (colors.get(color) ?? 0) + 1);
    }
    for (const size of productSizes(product.handle)) {
      sizes.set(size, (sizes.get(size) ?? 0) + 1);
    }
  }

  const stock: FacetOption[] = [
    { value: "in", label: "En existencia", count: inStock },
    { value: "out", label: "Agotado", count: outStock },
  ].filter((option) => option.count > 0);

  return {
    stock,
    brands: [...brands.entries()]
      .map(([value, count]) => ({ value, label: brandLabels[value], count }))
      .sort((a, b) => b.count - a.count || a.label.localeCompare(b.label, "es")),
    colors: [...colors.entries()]
      .map(([value, count]) => ({ value, label: value, count }))
      .sort((a, b) => b.count - a.count || a.label.localeCompare(b.label, "es")),
    sizes: [...sizes.entries()]
      .map(([value, count]) => ({ value, label: value, count }))
      .sort((a, b) => sizeSortKey(a.value) - sizeSortKey(b.value)),
    audiences: (["hombre", "mujer", "unisex"] as Audience[])
      .filter((value) => (audiences.get(value) ?? 0) > 0)
      .map((value) => ({
        value,
        label: audienceLabels[value],
        count: audiences.get(value) ?? 0,
      })),
    maxPrice,
  };
}

export function applyFacets(products: Product[], state: FacetState) {
  const min = parsePrice(state.minPrice);
  const max = parsePrice(state.maxPrice);

  return products.filter((product) => {
    if (state.stock.length === 1) {
      if (state.stock[0] === "in" && !product.available) return false;
      if (state.stock[0] === "out" && product.available) return false;
    }
    if (min !== null && product.price < min) return false;
    if (max !== null && product.price > max) return false;

    const info = productClass.get(product.handle);
    if (state.brands.length > 0) {
      if (!info?.brand || !state.brands.includes(info.brand)) return false;
    }
    if (state.audiences.length > 0) {
      if (!info?.audience || !state.audiences.includes(info.audience)) return false;
    }
    if (state.colors.length > 0) {
      const colors = productColors(product.handle);
      if (!state.colors.some((color) => colors.includes(color))) return false;
    }
    if (state.sizes.length > 0) {
      const sizes = productSizes(product.handle);
      if (!state.sizes.some((size) => sizes.includes(size))) return false;
    }
    return true;
  });
}

export function facetSelectionCount(state: FacetState) {
  return (
    state.stock.length +
    state.brands.length +
    state.colors.length +
    state.sizes.length +
    state.audiences.length +
    (state.minPrice.trim() ? 1 : 0) +
    (state.maxPrice.trim() ? 1 : 0)
  );
}
