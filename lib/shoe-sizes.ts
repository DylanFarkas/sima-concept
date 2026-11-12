export type ShoeRow = {
  col: string;
  eu: string;
  us: string;
  uk: string;
  cm: string;
};

export type ShoeFit = "hombre" | "mujer";
export type ShoeAudience = ShoeFit | "unisex";
export type ShoeSizeSystem = "col" | "eur" | "us";

export const womenShoes: readonly ShoeRow[] = [
  { col: "35", eu: "36", us: "5", uk: "4.5", cm: "23.5" },
  { col: "36", eu: "37", us: "6", uk: "5", cm: "23.5" },
  { col: "37", eu: "38", us: "6.5", uk: "5.5", cm: "24.5" },
  { col: "38", eu: "39", us: "7.5", uk: "6.5", cm: "25.5" },
  { col: "39", eu: "40", us: "8.5", uk: "7.5", cm: "26.5" },
];

export const menShoes: readonly ShoeRow[] = [
  { col: "37", eu: "40", us: "8.5", uk: "7.5", cm: "26.5" },
  { col: "38", eu: "41", us: "9.5", uk: "8.5", cm: "27.5" },
  { col: "39", eu: "42", us: "10", uk: "9", cm: "28.5" },
  { col: "40", eu: "43", us: "11", uk: "10", cm: "29.5" },
  { col: "41/42", eu: "44", us: "12", uk: "11", cm: "30.5" },
  { col: "43", eu: "45", us: "13", uk: "12", cm: "31.5" },
];

export const shoeCharts: Record<ShoeFit, readonly ShoeRow[]> = {
  hombre: menShoes,
  mujer: womenShoes,
};

export const shoeMeasureSteps = [
  {
    id: "01",
    title: "Apoya el talón",
    text: "Pon el pie sobre una hoja de papel, con el talón tocando la pared.",
  },
  {
    id: "02",
    title: "Marca la punta",
    text: "Marca con un lápiz desde el talón hasta la punta del dedo más largo.",
  },
  {
    id: "03",
    title: "Mide los centímetros",
    text: "Mide esa distancia y busca el número en la columna cm de la tabla.",
  },
] as const;

export const shoeSizeSystems: readonly { id: ShoeSizeSystem; label: string }[] = [
  { id: "col", label: "COL" },
  { id: "eur", label: "EUR" },
  { id: "us", label: "US" },
];

export const shoeSizeSystemKey = "sima-shoe-size-system";

const rowByFit = {
  hombre: new Map(menShoes.map((row) => [shoeSizeKey(row.col), row])),
  mujer: new Map(womenShoes.map((row) => [shoeSizeKey(row.col), row])),
} as const;

export function shoeSizeKey(value: string) {
  return value.trim().replace(/\s+/g, "").replace("/", "-");
}

export function shoeAudienceFromTitle(title: string): ShoeAudience {
  const value = title
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
  if (/\bunisex\b/.test(value)) return "unisex";
  if (/\b(mujer|dama)\b/.test(value)) return "mujer";
  if (/\bhombre\b/.test(value)) return "hombre";
  return "unisex";
}

export function isShoeSizeValue(value: string) {
  return /^\d{2}(-\d{2})?$/.test(shoeSizeKey(value));
}

export function isShoeSizeOption(name: string, values: readonly string[]) {
  const key = name.trim().toLowerCase();
  if (key === "talla del calzado") return true;
  if ((key === "talla" || key === "size") && values.length > 0) {
    return values.every(isShoeSizeValue);
  }
  return false;
}

export function shoeRow(fit: ShoeFit, col: string) {
  return rowByFit[fit].get(shoeSizeKey(col));
}

export function readShoeSizeSystem(value: string | null): ShoeSizeSystem {
  if (value === "eur" || value === "us") return value;
  return "col";
}

export function shoeSizeLabel(system: ShoeSizeSystem, col: string, fit: ShoeFit | null) {
  if (system === "col" || !fit) return col;
  const row = shoeRow(fit, col);
  if (!row) return `${col} COL`;
  return system === "eur" ? row.eu : row.us;
}

export function shoeEquivalence(
  system: ShoeSizeSystem,
  col: string,
  fit: ShoeFit | null,
  audience: ShoeAudience,
) {
  if (!fit) {
    return audience === "unisex" ? "Elige mujer u hombre para ver EUR y US." : "";
  }
  const row = shoeRow(fit, col);
  if (!row) return `${col} Colombia no tiene equivalencia de ${fit}.`;
  if (system === "eur") return `${row.eu} EUR - ${col} Colombia - ${row.us} US`;
  if (system === "us") return `${row.us} US - ${col} Colombia - ${row.eu} EUR`;
  return `${col} Colombia - ${row.eu} EUR - ${row.us} US`;
}

export function shoeBarLabel(system: ShoeSizeSystem, col: string, fit: ShoeFit | null) {
  const shown = shoeSizeLabel(system, col, fit);
  if (system === "col" || !fit || !shoeRow(fit, col)) return `${col} COL`;
  return `${shown} ${system === "eur" ? "EUR" : "US"}`;
}

export function subscribeShoeSystem(onChange: () => void) {
  window.addEventListener("storage", onChange);
  window.addEventListener(shoeSizeSystemKey, onChange);
  return () => {
    window.removeEventListener("storage", onChange);
    window.removeEventListener(shoeSizeSystemKey, onChange);
  };
}

export function writeShoeSizeSystem(system: ShoeSizeSystem) {
  sessionStorage.setItem(shoeSizeSystemKey, system);
  window.dispatchEvent(new Event(shoeSizeSystemKey));
}

export function shoeSystemSnapshot() {
  return readShoeSizeSystem(sessionStorage.getItem(shoeSizeSystemKey));
}

export function shoeSystemServerSnapshot(): ShoeSizeSystem {
  return "col";
}
