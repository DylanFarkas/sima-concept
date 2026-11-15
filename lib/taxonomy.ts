import { categories, isCategorySlug, type CategorySlug, type Product } from "@/lib/catalog";

export type Audience = "hombre" | "mujer" | "unisex";
export type Department = "ropa" | "calzado" | "tech" | "nutricion" | "accesorios";

export type ProductClass = {
  audience: Audience;
  department: Department;
  type: string;
  brand?: string;
};

export type NavLink = { label: string; href: string; children?: NavLink[] };
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
  running: "Running",
  hiking: "Hiking",
  training: "Training",
  basketball: "Basketball",
  classic: "Classic",
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

type ShoeDiscipline = "running" | "hiking" | "training" | "basketball" | "classic";

const shoeDisciplineByHandle: Record<string, ShoeDiscipline> = {
  "brooks-running-hombre": "running",
  "nike-pegasus-42-mujer": "running",
  "nike-zoom-pegasus-hombre": "running",
  "adidas-eq21-run-unisex": "running",
  "asics-running-hombre": "running",
  "new-balance-hierro-mujer-copia": "running",
  "nike-zoom-mujer-copia-3": "running",
  "nik-vomero-premium": "running",
  "nike-vomero-18-hombre": "running",
  "nike-vomero-18-mujer": "running",
  "nike-vomero-gorotex-hombre": "running",
  "adidas-adizero-mujer": "running",
  "adizero-hombre": "running",
  "adidas-adizero-hombre-copia-2": "running",
  "adidas-duramo-speed-mujer": "running",
  "nike-initiator-hombre": "running",
  "adidas-adistar-hombre": "running",
  "nike-v2k-mujer-copia": "running",
  "adidas-questar-mujer": "running",
  "adidas-hyperboost-edge-hombre": "running",
  "new-balance-fresh-foam-mujer-copia": "hiking",
  "nike-metcon-v1-mujer": "training",
  "new-balance-hierro-mujer-copia-2": "training",
  "nike-metcon-10-mujer": "training",
  "adidas-samba-unisex": "classic",
  "nikeaf1-unisex": "classic",
  "nikeaf1-bota-unisex": "classic",
  "nike-jordanr1-unisex": "classic",
  "nike-blazer-unisex": "classic",
  "nike-air-max-90-hombre": "classic",
  "nike-air-270-mujer": "classic",
  "nike-tn-unisex": "classic",
  "nike-p6000-hombre": "classic",
  "nike-p6000-mujer": "classic",
  "nike-v2k-mujer": "classic",
  "new-balance-574-mujer": "classic",
  "new-balance-530-unisex": "classic",
  "new-balance-9060-dama": "classic",
  "new-balance-9060-cafe-negro-hombre": "classic",
  "new-balance-1906r-unisex": "classic",
};

function classify(slug: CategorySlug, product: Product): ProductClass {
  const brand = detectBrand(product.title);
  if (slug === "zapatos") {
    return {
      audience: shoeAudience(product.title),
      department: "calzado",
      type: shoeDisciplineByHandle[product.handle] ?? "calzado",
      brand,
    };
  }
  if (slug === "tecnologia") {
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

function link(label: string, href: string, children?: NavLink[]): NavLink {
  return children?.length ? { label, href, children } : { label, href };
}

export const shoeDisciplines = ["running", "hiking", "training", "basketball", "classic"] as const;

function disciplineLinks(audience: Audience): NavLink[] {
  return shoeDisciplines.map((tipo) =>
    link(typeLabels[tipo], `/zapatos?audiencia=${audience}&disciplina=${tipo}`),
  );
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
    links: [link("Zapatillas", "/zapatos?audiencia=hombre", disciplineLinks("hombre"))],
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
    links: [link("Zapatillas", "/zapatos?audiencia=mujer", disciplineLinks("mujer"))],
  },
];

const calzadoColumns: NavColumn[] = [
  {
    title: "Calzado",
    links: [
      link("Ver todo", "/zapatos"),
      link("Hombre", "/zapatos?audiencia=hombre", disciplineLinks("hombre")),
      link("Mujer", "/zapatos?audiencia=mujer", disciplineLinks("mujer")),
      link("Unisex", "/zapatos?audiencia=unisex", disciplineLinks("unisex")),
    ],
  },
  {
    title: "Disciplina",
    links: [
      link("Running", "/zapatos?tipo=running"),
      link("Hiking", "/zapatos?tipo=hiking"),
      link("Training", "/zapatos?tipo=training"),
      link("Basketball", "/zapatos?tipo=basketball"),
      link("Classic", "/zapatos?tipo=classic"),
    ],
  },
];

const techColumns: NavColumn[] = [
  {
    title: "Tech",
    links: [
      link("Ver todo", "/tecnologia"),
      link("Audífonos", "/tecnologia?tipo=audifonos"),
      link("Relojes y bandas", "/tecnologia?tipo=relojes"),
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
    link("Tech", "/tecnologia"),
    link("Nutrición", "/suplementos"),
    link("Accesorios", "/accesorios"),
  ],
};

export const departmentNav: NavItem[] = [
  { id: "hombre", label: "Hombre", href: "/hombre", columns: hombreColumns, tone: "primary" },
  { id: "mujer", label: "Mujer", href: "/mujer", columns: mujerColumns, tone: "primary" },
  { id: "calzado", label: "Calzado", href: "/zapatos", columns: calzadoColumns, tone: "primary" },
  { id: "tech", label: "Tech", href: "/tecnologia", columns: techColumns, tone: "primary" },
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
    href: "/zapatos?audiencia=unisex",
    columns: [
      {
        title: "Calzado",
        links: [
          link("Ver zapatillas", "/zapatos?audiencia=unisex", disciplineLinks("unisex")),
          link("Todo el calzado", "/zapatos"),
        ],
      },
      lineasColumn,
    ],
    tone: "primary",
  },
  { id: "calzado", label: "Calzado", href: "/zapatos", columns: calzadoColumns, tone: "primary" },
  { id: "tech", label: "Tech", href: "/tecnologia", columns: techColumns, tone: "quiet" },
  { id: "nutricion", label: "Nutrición", href: "/suplementos", columns: nutricionColumns, tone: "quiet" },
  { id: "accesorios", label: "Accesorios", href: "/accesorios", columns: accesorioColumns, tone: "quiet" },
];

const campaignHandles: Record<string, string> = {
  hombre: "conjunto-deportivo-dri-fit-adidas",
  mujer: "chaqueta-drifit",
  calzado: "adizero-hombre",
  unisex: "adizero-hombre",
  tecnologia: "airpods-pro3",
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
  tecnologia: () => productsWhere((info) => info.department === "tech"),
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
  disciplina?: string | string[];
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
    audiencia ? audienceLabels[audiencia] : null,
    tipo ? typeLabels[tipo] : null,
    marca ? brandLabels[marca] : null,
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
    if (slug === "zapatos" && item.id === "calzado") return true;
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
        ? targetSlug === "zapatos"
          ? "calzado"
          : targetSlug
        : (tipo ?? audience);
      if (!key || result.some((entry) => entry.key === key)) continue;

      const count = filterCatalog(categories[targetSlug].products, params).products.length;
      if (count <= 0 && tipo !== "basketball") continue;

      const label = crossCategory && targetSlug === "zapatos"
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
