// nuevo = HomeRest, original = cuerpo de la home original
export const contentModes = ["nuevo", "original"] as const;

export type ContentMode = (typeof contentModes)[number];

export const contentMode: ContentMode = "original";

export function isContentMode(value: string | null): value is ContentMode {
  return contentModes.some((mode) => mode === value);
}
