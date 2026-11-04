// 1 = portada, 2 = mostrador, 3 = fichero, original = hero original
export const heroVariants = ["1", "2", "3", "original"] as const;

export type HeroVariant = (typeof heroVariants)[number];

export const heroVariant: HeroVariant = "original";

export function isHeroVariant(value: string | null): value is HeroVariant {
  return heroVariants.some((variant) => variant === value);
}
