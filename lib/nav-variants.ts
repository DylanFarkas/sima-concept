// 1 = columnas, 2 = editorial, 3 = audiencia, original = original
export const navVariants = ["1", "2", "3", "original"] as const;

export type NavVariant = (typeof navVariants)[number];

export const navVariant: NavVariant = "original";

export function isNavVariant(value: string | null): value is NavVariant {
  return navVariants.some((variant) => variant === value);
}
