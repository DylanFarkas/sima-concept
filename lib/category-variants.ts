// original = CategoryHero + grilla de siempre, nuevo = lib/category-pages.ts
export const categoryModes = ["nuevo", "original"] as const;

export type CategoryMode = (typeof categoryModes)[number];

export const categoryMode: CategoryMode = "original";

export function isCategoryMode(value: string | null): value is CategoryMode {
  return categoryModes.some((mode) => mode === value);
}
