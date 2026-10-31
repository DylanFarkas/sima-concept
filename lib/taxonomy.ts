import { categories, type CategorySlug, type Product } from "@/lib/catalog";

export type Audience = "hombre" | "mujer" | "unisex";
export type Department = "ropa" | "calzado" | "tech" | "nutricion" | "accesorios";

export type ProductClass = {
  audience: Audience;
  department: Department;
  type: string;
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

function normalize(title: string) {
  return title
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
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
  if (slug === "zapatillas") {
    return {
      audience: shoeAudience(product.title),
      department: "calzado",
      type: "calzado",
    };
  }
  if (slug === "tech") {
    return { audience: "unisex", department: "tech", type: techType(product.title) };
  }
  if (slug === "suplementos") {
    return { audience: "unisex", department: "nutricion", type: "proteina" };
  }
  if (slug === "accesorios") {
    return {
      audience: "unisex",
      department: "accesorios",
      type: accessoryType(product.title),
    };
  }
  const audience: Audience = slug === "mujer" ? "mujer" : "hombre";
  return { audience, department: "ropa", type: ropaType(product.title, audience) };
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

export function filterCatalog(
  products: Product[],
  query: { tipo?: string | string[]; audiencia?: string | string[] },
) {
  const tipoValue = one(query.tipo);
  const audienceValue = one(query.audiencia);
  const tipo = tipoValue && typeLabels[tipoValue] ? tipoValue : undefined;
  const audiencia =
    audienceValue === "hombre" || audienceValue === "mujer" || audienceValue === "unisex"
      ? audienceValue
      : undefined;
  if (!tipo && !audiencia) return { products, label: null as string | null };

  const next = products.filter((product) => {
    const info = productClass.get(product.handle);
    if (!info) return false;
    if (tipo && info.type !== tipo) return false;
    if (audiencia && info.audience !== audiencia) return false;
    return true;
  });

  const label = [tipo ? typeLabels[tipo] : null, audiencia ? audienceLabels[audiencia] : null]
    .filter(Boolean)
    .join(" · ");

  return { products: next, label };
}
