// 1 = firma, 2 = trazo, 3 = cartel, original = original
export const footerVariants = ["1", "2", "3", "original"] as const;

export type FooterVariant = (typeof footerVariants)[number];

export const footerVariant: FooterVariant = "original";

export function isFooterVariant(value: string | null): value is FooterVariant {
  return footerVariants.some((variant) => variant === value);
}
