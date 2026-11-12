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

const colorAliases: Record<string, string> = {
  biege: "Beige",
  cafe: "Café",
  marron: "Marrón",
  morada: "Morado",
};

const ignoredColors = new Set(["top + leggins", "camiseta + leggins"]);

const swatchHex: Record<string, string> = {
  negro: "#111111",
  blanco: "#f4f4f4",
  gris: "#8a8a8a",
  "gris oscuro": "#4a4a4a",
  plata: "#c0c0c0",
  plateado: "#c0c0c0",
  beige: "#d6c6a8",
  moca: "#7a5a42",
  cafe: "#5a3a22",
  marron: "#6b4630",
  azul: "#2a4a7a",
  "azul marino": "#1a2f4d",
  "azul cielo": "#8cb8e0",
  verde: "#2f5d3a",
  rojo: "#b03a3a",
  vinotinto: "#6a1a2a",
  rosa: "#e8a0b0",
  rosado: "#e8a0b0",
  fuscia: "#c03a7a",
  salmon: "#e09078",
  naranja: "#d46a2a",
  amarillo: "#d4b02a",
  dorado: "#c9a646",
  morado: "#5a3a7a",
  violeta: "#6a3a8a",
};

function colorKey(value: string) {
  return value
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .toLowerCase()
    .trim();
}

export function colorSwatches(value: string) {
  return value.split("-").map((part) => swatchHex[colorKey(part)] ?? "#6b6b6b");
}

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

function canonicalColor(value: string) {
  const cleaned = value.trim().replace(/\s*-\s*/g, "-").replace(/\s+/g, " ");
  const key = colorKey(cleaned);
  if (!key || ignoredColors.has(key)) return null;
  if (colorAliases[key]) return colorAliases[key];
  return cleaned
    .split("-")
    .map((part) =>
      part
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(" "),
    )
    .join("-");
}

export function productColors(handle: string) {
  const detail = productDetails[handle];
  if (!detail) return [] as string[];
  const values = new Set<string>();
  for (const option of detail.options) {
    if (!isColorOption(option.name)) continue;
    for (const value of option.values) {
      const color = canonicalColor(value);
      if (color) values.add(color);
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
