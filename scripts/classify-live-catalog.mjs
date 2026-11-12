/**
 * Classifies live Shopify products using the same rules as lib/taxonomy.ts
 * and prints tagsAdd batches + smart collection specs.
 *
 * Input: scripts/live-products.json  [{id, handle, title, tags}]
 * Output: scripts/tag-plan.json
 */
import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const products = JSON.parse(readFileSync(join(root, "scripts/live-products.json"), "utf8"));

const brandLabels = {
  nike: "Nike",
  adidas: "Adidas",
  "new-balance": "New Balance",
  asics: "Asics",
  on: "On",
  hoka: "Hoka",
  salomon: "Salomon",
  puma: "Puma",
  brooks: "Brooks",
  skechers: "Skechers",
  columbia: "Columbia",
  "under-armour": "Under Armour",
  jordan: "Jordan",
  stanley: "Stanley",
  owala: "Owala",
};

const brandPatterns = [
  [/\bnew balance\b/, "new-balance"],
  [/\bunder ?armour\b/, "under-armour"],
  [/\bjordan\b/, "jordan"],
  [/\badidas\b/, "adidas"],
  [/\bnike\b/, "nike"],
  [/\bpuma\b/, "puma"],
  [/\basics\b/, "asics"],
  [/\bhoka\b/, "hoka"],
  [/\bsalomon\b/, "salomon"],
  [/\bbrooks\b/, "brooks"],
  [/\bskechers\b/, "skechers"],
  [/\bcolumbia\b/, "columbia"],
  [/\bstanley\b/, "stanley"],
  [/\bowala\b/, "owala"],
  [/\bon\b/, "on"],
];

function normalize(title) {
  return title
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function detectBrand(title) {
  const value = normalize(title).replace(/^bota\s+/, "");
  for (const [pattern, key] of brandPatterns) {
    if (pattern.test(value)) return key;
  }
  const first = value.split(/[\s-]+/)[0];
  return brandLabels[first] ? first : undefined;
}

function shoeAudience(title) {
  const value = normalize(title);
  if (/\bunisex\b/.test(value)) return "unisex";
  if (/\b(mujer|dama)\b/.test(value)) return "mujer";
  if (/\bhombre\b/.test(value)) return "hombre";
  return "unisex";
}

function ropaType(title, audience) {
  const value = normalize(title);
  if (/basic/.test(value)) return "basics";
  if (/\bset\b/.test(value) || /conjunto/.test(value)) {
    return audience === "mujer" ? "sets" : "conjuntos";
  }
  if (/enterizo/.test(value)) return "enterizos";
  if (/vestido/.test(value)) return "vestidos";
  if (audience === "mujer" && /chaqueta|sudadera/.test(value)) return "chaquetas";
  if (/sudadera/.test(value)) return "sudaderas";
  if (/pantaloneta|\bshort\b|pants|leggins/.test(value)) return "pantalonetas";
  if (/camiseta|camisilla|camisa|compresion/.test(value)) return "camisetas";
  return "otros";
}

function techType(title) {
  const value = normalize(title);
  if (/watch|band|reloj/.test(value)) return "relojes";
  return "audifonos";
}

function accessoryType(title) {
  const value = normalize(title);
  if (/termo/.test(value)) return "hidratacion";
  return "entrenamiento";
}

function classifyFromExisting(p) {
  const tags = new Set(p.tags || []);
  const brand = detectBrand(p.title);

  if (tags.has("tipo-calzado") || /\b(hombre|mujer|dama|unisex)\b/i.test(p.title) && /nike|adidas|asics|hoka|salomon|brooks|skechers|columbia|puma|jordan|balance|\bon\b/i.test(p.title) && !tags.has("genero-hombre") && !tags.has("genero-mujer") && !tags.has("Tecnologia") && !tags.has("suplementos") && !tags.has("tipo-accesorio")) {
    // Prefer explicit tipo-calzado; also catch untagged shoes by brand+audience in title
  }

  if (tags.has("tipo-calzado") || (!tags.has("genero-hombre") && !tags.has("genero-mujer") && !tags.has("Tecnologia") && !tags.has("suplementos") && !tags.has("tipo-accesorio") && /(adizero|pegasus|vomero|hoka|salomon|ultrabost|hyperboost|metcon|air max|air force|samba|gel |fresh foam|cloud|terrex|questar|running|calzado|bota )/i.test(p.title + " " + p.handle))) {
    return {
      audience: shoeAudience(p.title),
      department: "calzado",
      type: "calzado",
      brand,
    };
  }

  // Untagged shoes that slipped: adidas-ultrabost, hyperboost
  if (!tags.has("genero-hombre") && !tags.has("genero-mujer") && !tags.has("Tecnologia") && !tags.has("suplementos") && !tags.has("tipo-accesorio") && /(adidas|nike|asics|new balance|hoka|on |puma|brooks)/i.test(p.title) && /(hombre|mujer|dama|unisex)/i.test(p.title)) {
    return {
      audience: shoeAudience(p.title),
      department: "calzado",
      type: "calzado",
      brand,
    };
  }

  if (tags.has("Tecnologia")) {
    return { audience: "unisex", department: "tech", type: techType(p.title), brand };
  }
  if (tags.has("suplementos") || /proteina|proteína|whey|casein|gainer/i.test(p.title)) {
    return { audience: "unisex", department: "nutricion", type: "proteina", brand };
  }
  if (tags.has("tipo-accesorio")) {
    return {
      audience: "unisex",
      department: "accesorios",
      type: accessoryType(p.title),
      brand,
    };
  }
  if (tags.has("genero-mujer")) {
    return {
      audience: "mujer",
      department: "ropa",
      type: ropaType(p.title, "mujer"),
      brand,
    };
  }
  if (tags.has("genero-hombre")) {
    return {
      audience: "hombre",
      department: "ropa",
      type: ropaType(p.title, "hombre"),
      brand,
    };
  }

  // fallback by title cues
  if (/proteina|proteína/i.test(p.title)) {
    return { audience: "unisex", department: "nutricion", type: "proteina", brand };
  }
  return {
    audience: "unisex",
    department: "ropa",
    type: ropaType(p.title, "unisex"),
    brand,
  };
}

function tagsFor(info) {
  const tags = [
    `audiencia:${info.audience}`,
    `departamento:${info.department}`,
    `tipo:${info.type}`,
  ];
  if (info.brand) tags.push(`marca:${info.brand}`);
  return tags;
}

const classified = products.map((p) => {
  const info = classifyFromExisting(p);
  const desired = tagsFor(info);
  const existing = new Set(p.tags || []);
  const toAdd = desired.filter((t) => !existing.has(t));
  return { ...p, info, desired, toAdd };
});

const byType = {};
for (const row of classified) {
  const key = `${row.info.department}/${row.info.audience}/${row.info.type}`;
  byType[key] = (byType[key] || 0) + 1;
}

const collections = [
  { handle: "hombre-conjuntos", title: "Hombre - Conjuntos", tags: ["audiencia:hombre", "tipo:conjuntos"] },
  { handle: "hombre-camisetas", title: "Hombre - Camisetas", tags: ["audiencia:hombre", "tipo:camisetas"] },
  { handle: "hombre-pantalonetas", title: "Hombre - Pantalonetas", tags: ["audiencia:hombre", "tipo:pantalonetas"] },
  { handle: "hombre-sudaderas", title: "Hombre - Sudaderas", tags: ["audiencia:hombre", "tipo:sudaderas"] },
  { handle: "hombre-basics", title: "Hombre - Basics", tags: ["audiencia:hombre", "tipo:basics"] },
  { handle: "mujer-pantalonetas", title: "Mujer - Pantalonetas", tags: ["audiencia:mujer", "tipo:pantalonetas"] },
  { handle: "mujer-chaquetas", title: "Mujer - Chaquetas", tags: ["audiencia:mujer", "tipo:chaquetas"] },
  { handle: "mujer-sets", title: "Mujer - Sets", tags: ["audiencia:mujer", "tipo:sets"] },
  { handle: "mujer-enterizos", title: "Mujer - Enterizos", tags: ["audiencia:mujer", "tipo:enterizos"] },
  { handle: "mujer-vestidos", title: "Mujer - Vestidos", tags: ["audiencia:mujer", "tipo:vestidos"] },
  { handle: "mujer-basics", title: "Mujer - Basics", tags: ["audiencia:mujer", "tipo:basics"] },
  { handle: "zapatos-hombre", title: "Zapatos - Hombre", tags: ["departamento:calzado", "audiencia:hombre"] },
  { handle: "zapatos-mujer", title: "Zapatos - Mujer", tags: ["departamento:calzado", "audiencia:mujer"] },
  { handle: "zapatos-unisex", title: "Zapatos - Unisex", tags: ["departamento:calzado", "audiencia:unisex"] },
  { handle: "tecnologia-audifonos", title: "Tecnología - Audífonos", tags: ["departamento:tech", "tipo:audifonos"] },
  { handle: "tecnologia-relojes", title: "Tecnología - Relojes y bandas", tags: ["departamento:tech", "tipo:relojes"] },
  { handle: "suplementos-proteina", title: "Suplementos - Proteína", tags: ["departamento:nutricion", "tipo:proteina"] },
  { handle: "accesorios-entrenamiento", title: "Accesorios - Entrenamiento", tags: ["departamento:accesorios", "tipo:entrenamiento"] },
  { handle: "accesorios-hidratacion", title: "Accesorios - Hidratación", tags: ["departamento:accesorios", "tipo:hidratacion"] },
];

const obsoleteHandles = [
  "accesorios-botellas-y-termos",
  "accesorios-cinturones-y-fajas",
  "accesorios-cuidado-de-calzado",
  "accesorios-gorras-y-viseras",
  "accesorios-guantes",
  "accesorios-medias-y-calceteria-tecnica",
  "accesorios-mochilas-y-bolsos",
  "hombre-calzado-casual",
  "hombre-calzado-climbing",
  "hombre-calzado-running",
  "hombre-calzado-training",
  "hombre-ropa-casual",
  "hombre-ropa-climbing",
  "hombre-ropa-running",
  "hombre-ropa-training",
  "mujer-calzado-casual",
  "mujer-calzado-climbing",
  "mujer-calzado-running",
  "mujer-calzado-training",
  "mujer-ropa-climbing",
  "mujer-ropa-running",
  "mujer-ropa-casual",
  "mujer-ropa-training",
  "tecnologia-apps-y-conectividad",
  "tecnologia-auriculares-deportivos",
  "tecnologia-relojes-deportivos-gps",
];

const plan = {
  total: classified.length,
  byType,
  tagUpdates: classified.filter((r) => r.toAdd.length).map((r) => ({
    id: r.id,
    handle: r.handle,
    tags: r.toAdd,
  })),
  collections,
  obsoleteHandles,
  renameSuplementos: {
    id: "gid://shopify/Collection/542147182868",
    handle: "suplementos",
  },
};

writeFileSync(join(root, "scripts/tag-plan.json"), JSON.stringify(plan, null, 2));
console.log(JSON.stringify({ total: plan.total, toTag: plan.tagUpdates.length, byType }, null, 2));
