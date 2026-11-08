import { accentVariant, accentVariants, isAccentVariant, type AccentVariant } from "@/lib/accent-variants";
import { categoryMode, categoryModes, isCategoryMode, type CategoryMode } from "@/lib/category-variants";
import { contentMode, contentModes, isContentMode, type ContentMode } from "@/lib/content-variants";
import { footerVariant, footerVariants, isFooterVariant, type FooterVariant } from "@/lib/footer-variants";
import { heroVariant, heroVariants, isHeroVariant, type HeroVariant } from "@/lib/hero-variants";
import { isNavVariant, navVariant, navVariants, type NavVariant } from "@/lib/nav-variants";

export const VARIANT_STORAGE_KEY = "sima-variant-prefs";

export type VariantPrefs = {
  nav: NavVariant;
  hero: HeroVariant;
  content: ContentMode;
  categorias: CategoryMode;
  footer: FooterVariant;
  acento: AccentVariant;
};

export const variantDefaults: VariantPrefs = {
  nav: navVariant,
  hero: heroVariant,
  content: contentMode,
  categorias: categoryMode,
  footer: footerVariant,
  acento: accentVariant,
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
    key: "categorias" as const,
    label: "Categorías",
    options: optionsWithOriginalFirst(categoryModes, (value) =>
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
  {
    key: "acento" as const,
    label: "Acento",
    options: optionsWithOriginalFirst(accentVariants, (value) =>
      value === "arena" ? "Arena" : "Original",
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

export function parsePrefs(raw: string | null | undefined): Partial<VariantPrefs> {
  if (!raw) return {};
  try {
    const parsed = JSON.parse(raw) as Partial<Record<keyof VariantPrefs, string>>;
    const prefs: Partial<VariantPrefs> = {};
    const nav = parsed.nav ?? null;
    const hero = parsed.hero ?? null;
    const content = parsed.content ?? null;
    const categorias = parsed.categorias ?? null;
    const footer = parsed.footer ?? null;
    const acento = parsed.acento ?? null;
    if (isNavVariant(nav)) prefs.nav = nav;
    if (isHeroVariant(hero)) prefs.hero = hero;
    if (isContentMode(content)) prefs.content = content;
    if (isCategoryMode(categorias)) prefs.categorias = categorias;
    if (isFooterVariant(footer)) prefs.footer = footer;
    if (isAccentVariant(acento)) prefs.acento = acento;
    return prefs;
  } catch {
    return {};
  }
}

export function readPrefs(): Partial<VariantPrefs> {
  if (typeof window === "undefined") return {};
  try {
    return parsePrefs(window.localStorage.getItem(VARIANT_STORAGE_KEY));
  } catch {
    return {};
  }
}

function writeCookie(prefs: VariantPrefs) {
  if (typeof document === "undefined") return;
  const value = encodeURIComponent(JSON.stringify(prefs));
  document.cookie = `${VARIANT_STORAGE_KEY}=${value}; Path=/; Max-Age=31536000; SameSite=Lax`;
}

export function writePrefs(prefs: VariantPrefs) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(VARIANT_STORAGE_KEY, JSON.stringify(prefs));
  } catch {
    // ignore quota / private mode
  }
  writeCookie(prefs);
}

export function resolvePrefs(
  searchParams: URLSearchParams,
  stored: Partial<VariantPrefs> = readPrefs(),
): VariantPrefs {
  return {
    nav: resolveParam(searchParams.get("nav"), stored.nav, variantDefaults.nav, isNavVariant),
    hero: resolveParam(searchParams.get("hero"), stored.hero, variantDefaults.hero, isHeroVariant),
    content: resolveParam(
      searchParams.get("content"),
      stored.content,
      variantDefaults.content,
      isContentMode,
    ),
    categorias: resolveParam(
      searchParams.get("categorias"),
      stored.categorias,
      variantDefaults.categorias,
      isCategoryMode,
    ),
    footer: resolveParam(
      searchParams.get("footer"),
      stored.footer,
      variantDefaults.footer,
      isFooterVariant,
    ),
    acento: resolveParam(
      searchParams.get("acento"),
      stored.acento,
      variantDefaults.acento,
      isAccentVariant,
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
  next.set("categorias", prefs.categorias);
  next.set("footer", prefs.footer);
  next.set("acento", prefs.acento);
  return next;
}
