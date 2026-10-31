export const navVariants = ["columnas", "editorial", "audiencia"] as const;

export type NavVariant = (typeof navVariants)[number];

export const navVariant: NavVariant = "editorial";

export function isNavVariant(value: string | null): value is NavVariant {
  return navVariants.some((variant) => variant === value);
}
