import { cookies } from "next/headers";
import {
  VARIANT_STORAGE_KEY,
  parsePrefs,
  resolvePrefs,
  type VariantPrefs,
} from "@/lib/variant-prefs";

export async function getServerVariantPrefs(): Promise<Partial<VariantPrefs>> {
  const jar = await cookies();
  const raw = jar.get(VARIANT_STORAGE_KEY)?.value;
  if (!raw) return {};
  const decoded = raw.includes("%") ? decodeURIComponent(raw) : raw;
  return parsePrefs(decoded);
}

export async function resolveServerPrefs(query: {
  nav?: string | string[];
  hero?: string | string[];
  content?: string | string[];
  categorias?: string | string[];
  footer?: string | string[];
  acento?: string | string[];
}): Promise<VariantPrefs> {
  const stored = await getServerVariantPrefs();
  const params = new URLSearchParams();
  for (const key of ["nav", "hero", "content", "categorias", "footer", "acento"] as const) {
    const value = query[key];
    const one = Array.isArray(value) ? value[0] : value;
    if (one) params.set(key, one);
  }
  return resolvePrefs(params, stored);
}
