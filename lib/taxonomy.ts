import { categories, isCategorySlug, type CategorySlug, type Product } from "@/lib/catalog";

export type Audience = "hombre" | "mujer" | "unisex";
export type Department = "ropa" | "calzado" | "tech" | "nutricion" | "accesorios";

export type ProductClass = {
  audience: Audience;
  department: Department;
  type: string;
  brand?: string;
};

export type NavLink = { label: string; href: string };
export type NavColumn = { title: string; links: NavLink[] };
export type NavItem = {
  id: string;
  label: string;
  href: string;
  columns: NavColumn[];
  tone: "primary" | "quiet";
};

export const typeLabels: Record<string, string> = {
  conjuntos: "Conjuntos",
  camisetas: "Camisetas",
  pantalonetas: "Pantalonetas",
  sudaderas: "Sudaderas",
  basics: "Basics",
  chaquetas: "Chaquetas",
  sets: "Sets",
  enterizos: "Enterizos",
  vestidos: "Vestidos",
  audifonos: "Audífonos",
  relojes: "Relojes y bandas",
  proteina: "Proteína",
  entrenamiento: "Entrenamiento",
  hidratacion: "Hidratación",
};

export const audienceLabels: Record<Audience, string> = {
  hombre: "Hombre",
  mujer: "Mujer",
  unisex: "Unisex",
};

export const brandLabels: Record<string, string> = {
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

function normalize(title: string) {
  return title
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

const brandPatterns: [RegExp, string][] = [
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

export function detectBrand(title: string) {
  const value = normalize(title).replace(/^bota\s+/, "");
  for (const [pattern, key] of brandPatterns) {
    if (pattern.test(value)) return key;
  }
  const first = value.split(/[\s-]+/)[0];
  return brandLabels[first] ? first : undefined;
}

function shoeAudience(title: string): Audience {
  const value = normalize(title);
  if (/\bunisex\b/.test(value)) return "unisex";
  if (/\b(mujer|dama)\b/.test(value)) return "mujer";
  if (/\bhombre\b/.test(value)) return "hombre";
  return "unisex";
}

function ropaType(title: string, audience: Audience) {
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

function techType(title: string) {
  const value = normalize(title);
  if (/watch|band|reloj/.test(value)) return "relojes";
  return "audifonos";
}

function accessoryType(title: string) {
  const value = normalize(title);
  if (/termo/.test(value)) return "hidratacion";
  return "entrenamiento";
}

function classify(slug: CategorySlug, product: Product): ProductClass {
  const brand = detectBrand(product.title);
  if (slug === "zapatillas") {
    return {
      audience: shoeAudience(product.title),
      department: "calzado",
      type: "calzado",
      brand,
    };
  }
  if (slug === "tech") {
    return { audience: "unisex", department: "tech", type: techType(product.title), brand };
  }
  if (slug === "suplementos") {
    return { audience: "unisex", department: "nutricion", type: "proteina", brand };
  }
  if (slug === "accesorios") {
    return {
      audience: "unisex",
      department: "accesorios",
      type: accessoryType(product.title),
      brand,
    };
  }
  const audience: Audience = slug === "mujer" ? "mujer" : "hombre";
  return { audience, department: "ropa", type: ropaType(product.title, audience), brand };
}

export const productClass = new Map<string, ProductClass>();
const productByHandle = new Map<string, Product>();

for (const [slug, category] of Object.entries(categories) as [
  CategorySlug,
  (typeof categories)[CategorySlug],
][]) {
  for (const product of category.products) {
    productClass.set(product.handle, classify(slug, product));
    productByHandle.set(product.handle, product);
  }
}

function link(label: string, href: string): NavLink {
  return { label, href };
}

const hombreColumns: NavColumn[] = [
  {
    title: "Ropa",
    links: [
      link("Ver todo", "/hombre"),
      link("Conjuntos", "/hombre?tipo=conjuntos"),
      link("Camisetas", "/hombre?tipo=camisetas"),
      link("Pantalonetas", "/hombre?tipo=pantalonetas"),
      link("Sudaderas", "/hombre?tipo=sudaderas"),
      link("Basics", "/hombre?tipo=basics"),
    ],
  },
  {
    title: "Calzado",
    links: [link("Zapatillas", "/zapatillas?audiencia=hombre")],
  },
];

const mujerColumns: NavColumn[] = [
  {
    title: "Ropa",
    links: [
      link("Ver todo", "/mujer"),
      link("Pantalonetas", "/mujer?tipo=pantalonetas"),
      link("Chaquetas", "/mujer?tipo=chaquetas"),
      link("Sets", "/mujer?tipo=sets"),
      link("Enterizos", "/mujer?tipo=enterizos"),
      link("Vestidos", "/mujer?tipo=vestidos"),
      link("Basics", "/mujer?tipo=basics"),
    ],
  },
  {
    title: "Calzado",
    links: [link("Zapatillas", "/zapatillas?audiencia=mujer")],
  },
];

const calzadoColumns: NavColumn[] = [
  {
    title: "Calzado",
    links: [
      link("Ver todo", "/zapatillas"),
      link("Hombre", "/zapatillas?audiencia=hombre"),
      link("Mujer", "/zapatillas?audiencia=mujer"),
      link("Unisex", "/zapatillas?audiencia=unisex"),
    ],
  },
];

const techColumns: NavColumn[] = [
  {
    title: "Tech",
    links: [
      link("Ver todo", "/tech"),
      link("Audífonos", "/tech?tipo=audifonos"),
      link("Relojes y bandas", "/tech?tipo=relojes"),
    ],
  },
];

const nutricionColumns: NavColumn[] = [
  {
    title: "Nutrición",
    links: [
      link("Ver todo", "/suplementos"),
      link("Proteína", "/suplementos?tipo=proteina"),
    ],
  },
];

const accesorioColumns: NavColumn[] = [
  {
    title: "Accesorios",
    links: [
      link("Ver todo", "/accesorios"),
      link("Entrenamiento", "/accesorios?tipo=entrenamiento"),
      link("Hidratación", "/accesorios?tipo=hidratacion"),
    ],
  },
];

const lineasColumn: NavColumn = {
  title: "También",
  links: [
    link("Tech", "/tech"),
    link("Nutrición", "/suplementos"),
    link("Accesorios", "/accesorios"),
  ],
};

export const departmentNav: NavItem[] = [
  { id: "hombre", label: "Hombre", href: "/hombre", columns: hombreColumns, tone: "primary" },
  { id: "mujer", label: "Mujer", href: "/mujer", columns: mujerColumns, tone: "primary" },
  { id: "calzado", label: "Calzado", href: "/zapatillas", columns: calzadoColumns, tone: "primary" },
  { id: "tech", label: "Tech", href: "/tech", columns: techColumns, tone: "primary" },
  { id: "nutricion", label: "Nutrición", href: "/suplementos", columns: nutricionColumns, tone: "primary" },
  { id: "accesorios", label: "Accesorios", href: "/accesorios", columns: accesorioColumns, tone: "primary" },
];

export const audienceNav: NavItem[] = [
  {
    id: "hombre",
    label: "Hombre",
    href: "/hombre",
    columns: [...hombreColumns, lineasColumn],
    tone: "primary",
  },
  {
    id: "mujer",
    label: "Mujer",
    href: "/mujer",
    columns: [...mujerColumns, lineasColumn],
    tone: "primary",
  },
  {
    id: "unisex",
    label: "Unisex",
    href: "/zapatillas?audiencia=unisex",
    columns: [
      {
        title: "Calzado",
        links: [
          link("Ver zapatillas", "/zapatillas?audiencia=unisex"),
          link("Todo el calzado", "/zapatillas"),
        ],
      },
      lineasColumn,
    ],
    tone: "primary",
  },
  { id: "tech", label: "Tech", href: "/tech", columns: techColumns, tone: "quiet" },
  { id: "nutricion", label: "Nutrición", href: "/suplementos", columns: nutricionColumns, tone: "quiet" },
  { id: "accesorios", label: "Accesorios", href: "/accesorios", columns: accesorioColumns, tone: "quiet" },
];

const campaignHandles: Record<string, string> = {
  hombre: "conjunto-deportivo-dri-fit-adidas",
  mujer: "chaqueta-drifit",
  calzado: "adizero-hombre",
  unisex: "adizero-hombre",
  tech: "airpods-pro3",
  nutricion: "nitro-tech-whey-gold-proteina-5lb",
  accesorios: "termo-stanley-40oz",
};

function productsWhere(predicate: (info: ProductClass) => boolean) {
  const list: Product[] = [];
  for (const [handle, info] of productClass) {
    const product = productByHandle.get(handle);
    if (product && predicate(info)) list.push(product);
  }
  return list;
}

const pools: Record<string, () => Product[]> = {
  hombre: () => productsWhere((info) => info.audience === "hombre" && info.department === "ropa"),
  mujer: () => productsWhere((info) => info.audience === "mujer" && info.department === "ropa"),
  calzado: () => productsWhere((info) => info.department === "calzado"),
  unisex: () =>
    productsWhere((info) => info.department === "calzado" && info.audience === "unisex"),
  tech: () => productsWhere((info) => info.department === "tech"),
  nutricion: () => productsWhere((info) => info.department === "nutricion"),
  accesorios: () => productsWhere((info) => info.department === "accesorios"),
};

export function menuSpotlight(id: string) {
  const pool = (pools[id] ?? pools.hombre)();
  const preferred = productByHandle.get(campaignHandles[id] ?? "");
  const campaign = preferred ?? pool[0] ?? null;
  const cards = pool.filter((product) => product.handle !== campaign?.handle).slice(0, 2);
  for (const product of pool) {
    if (cards.length >= 2) break;
    if (!cards.some((card) => card.handle === product.handle)) cards.push(product);
  }
  return { cards, campaign };
}

function one(value: string | string[] | undefined) {
  return Array.isArray(value) ? value[0] : value;
}

export type CatalogQuery = {
  tipo?: string | string[];
  audiencia?: string | string[];
  marca?: string | string[];
};

export function filterCatalog(products: Product[], query: CatalogQuery) {
  const tipoValue = one(query.tipo);
  const audienceValue = one(query.audiencia);
  const marcaValue = one(query.marca);
  const tipo = tipoValue && typeLabels[tipoValue] ? tipoValue : undefined;
  const audiencia =
    audienceValue === "hombre" || audienceValue === "mujer" || audienceValue === "unisex"
      ? audienceValue
      : undefined;
  const marca = marcaValue && brandLabels[marcaValue] ? marcaValue : undefined;
  if (!tipo && !audiencia && !marca) {
    return { products, label: null as string | null, tipo, audiencia, marca };
  }

  const next = products.filter((product) => {
    const info = productClass.get(product.handle);
    if (!info) return false;
    if (tipo && info.type !== tipo) return false;
    if (audiencia && info.audience !== audiencia) return false;
    if (marca && info.brand !== marca) return false;
    return true;
  });

  const label = [
    marca ? brandLabels[marca] : null,
    tipo ? typeLabels[tipo] : null,
    audiencia ? audienceLabels[audiencia] : null,
  ]
    .filter(Boolean)
    .join(" · ");

  return { products: next, label, tipo, audiencia, marca };
}

export type Subcategory = {
  key: string;
  label: string;
  href: string;
  count: number;
};

function navItemForCategory(slug: CategorySlug) {
  return departmentNav.find((item) => {
    if (item.href === `/${slug}`) return true;
    if (slug === "zapatillas" && item.id === "calzado") return true;
    if (slug === "suplementos" && item.id === "nutricion") return true;
    return false;
  });
}

export function subcategoriesOf(slug: CategorySlug): Subcategory[] {
  const result: Subcategory[] = [];
  const navItem = navItemForCategory(slug);
  if (!navItem) return result;

  for (const column of navItem.columns) {
    for (const navLink of column.links) {
      const [path, search] = navLink.href.split("?");
      if (!search) continue;
      const targetSlug = path.slice(1);
      if (!isCategorySlug(targetSlug)) continue;

      const params = Object.fromEntries(new URLSearchParams(search));
      const audience = (params.audiencia as Audience | undefined) ?? undefined;
      const tipo = params.tipo;
      const crossCategory = targetSlug !== slug;
      const key = crossCategory
        ? targetSlug === "zapatillas"
          ? "calzado"
          : targetSlug
        : (tipo ?? audience);
      if (!key || result.some((entry) => entry.key === key)) continue;

      const count = filterCatalog(categories[targetSlug].products, params).products.length;
      if (count <= 0) continue;

      const label = crossCategory && targetSlug === "zapatillas"
        ? "Calzado"
        : audience && audienceLabels[audience] && !tipo
          ? audienceLabels[audience]
          : navLink.label;

      result.push({ key, label, href: navLink.href, count });
    }
  }
  return result;
}

export function brandsOf(products: Product[]) {
  const counts = new Map<string, Product[]>();
  for (const product of products) {
    const brand = productClass.get(product.handle)?.brand;
    if (!brand) continue;
    counts.set(brand, [...(counts.get(brand) ?? []), product]);
  }
  return [...counts.entries()]
    .map(([key, list]) => ({ key, label: brandLabels[key], products: list }))
    .sort((a, b) => b.products.length - a.products.length);
}
