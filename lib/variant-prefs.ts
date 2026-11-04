import { contentMode, contentModes, isContentMode, type ContentMode } from "@/lib/content-variants";
import { footerVariant, footerVariants, isFooterVariant, type FooterVariant } from "@/lib/footer-variants";
import { heroVariant, heroVariants, isHeroVariant, type HeroVariant } from "@/lib/hero-variants";
import { isNavVariant, navVariant, navVariants, type NavVariant } from "@/lib/nav-variants";

export const VARIANT_STORAGE_KEY = "sima-variant-prefs";

export type VariantPrefs = {
  nav: NavVariant;
  hero: HeroVariant;
  content: ContentMode;
  footer: FooterVariant;
};

export const variantDefaults: VariantPrefs = {
  nav: navVariant,
  hero: heroVariant,
  content: contentMode,
  footer: footerVariant,
};

function optionsWithOriginalFirst<T extends string>(
  values: readonly T[],
  labelFor: (value: T) => string,
) {
  const options = values.map((value) => ({ value, label: labelFor(value) }));
  return [...options.filter((o) => o.value === "original"), ...options.filter((o) => o.value !== "original")];
}

export const variantSections = [
  {
    key: "nav" as const,
    label: "Navegación",
    options: optionsWithOriginalFirst(navVariants, (value) =>
      value === "original" ? "Original" : value,
    ),
  },
  {
    key: "hero" as const,
    label: "Hero",
    options: optionsWithOriginalFirst(heroVariants, (value) =>
      value === "original" ? "Original" : value,
    ),
  },
  {
    key: "content" as const,
    label: "Contenido",
    options: optionsWithOriginalFirst(contentModes, (value) =>
      value === "nuevo" ? "Nuevo" : "Original",
    ),
  },
  {
    key: "footer" as const,
    label: "Footer",
    options: optionsWithOriginalFirst(footerVariants, (value) =>
      value === "original" ? "Original" : value,
    ),
  },
] as const;

export function resolveParam<T extends string>(
  urlValue: string | null,
  storedValue: string | undefined,
  fallback: T,
  isValid: (value: string | null) => value is T,
): T {
  if (isValid(urlValue)) return urlValue;
  if (storedValue != null && isValid(storedValue)) return storedValue;
  return fallback;
}

export function readPrefs(): Partial<VariantPrefs> {
  if (typeof window === "undefined") return {};
  try {
    const raw = window.localStorage.getItem(VARIANT_STORAGE_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw) as Partial<Record<keyof VariantPrefs, string>>;
    const prefs: Partial<VariantPrefs> = {};
    if (isNavVariant(parsed.nav ?? null)) prefs.nav = parsed.nav;
    if (isHeroVariant(parsed.hero ?? null)) prefs.hero = parsed.hero;
    if (isContentMode(parsed.content ?? null)) prefs.content = parsed.content;
    if (isFooterVariant(parsed.footer ?? null)) prefs.footer = parsed.footer;
    return prefs;
  } catch {
    return {};
  }
}

export function writePrefs(prefs: VariantPrefs) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(VARIANT_STORAGE_KEY, JSON.stringify(prefs));
  } catch {
    // ignore quota / private mode
  }
}

export function resolvePrefs(searchParams: URLSearchParams): VariantPrefs {
  const stored = readPrefs();
  return {
    nav: resolveParam(searchParams.get("nav"), stored.nav, variantDefaults.nav, isNavVariant),
    hero: resolveParam(searchParams.get("hero"), stored.hero, variantDefaults.hero, isHeroVariant),
    content: resolveParam(
      searchParams.get("content"),
      stored.content,
      variantDefaults.content,
      isContentMode,
    ),
    footer: resolveParam(
      searchParams.get("footer"),
      stored.footer,
      variantDefaults.footer,
      isFooterVariant,
    ),
  };
}

export function prefsToSearchParams(
  prefs: VariantPrefs,
  current?: URLSearchParams,
): URLSearchParams {
  const next = new URLSearchParams(current?.toString());
  next.set("nav", prefs.nav);
  next.set("hero", prefs.hero);
  next.set("content", prefs.content);
  next.set("footer", prefs.footer);
  return next;
}
