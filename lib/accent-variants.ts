// original = sin acento, arena = beige arena #BCB1A6
export const accentVariants = ["original", "arena"] as const;

export type AccentVariant = (typeof accentVariants)[number];

export const accentVariant: AccentVariant = "arena";

export function isAccentVariant(value: string | null): value is AccentVariant {
  return accentVariants.some((variant) => variant === value);
}
