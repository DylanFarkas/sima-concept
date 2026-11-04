import { categories, type Product } from "@/lib/catalog";

const byHandle = new Map<string, Product>();

for (const category of Object.values(categories)) {
  for (const product of category.products) {
    if (!byHandle.has(product.handle)) byHandle.set(product.handle, product);
  }
}

export function catalogProduct(handle: string) {
  const product = byHandle.get(handle);
  if (!product) throw new Error(`Producto ausente: ${handle}`);
  return product;
}

export function formatPrice(value: number) {
  const formatted = new Intl.NumberFormat("es-CO", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
  return `$${formatted}`;
}

export const portadaProduct = catalogProduct("conjunto-deportivo-dri-fit-adidas");

export const mostradorProducts = [
  catalogProduct("camiseta-dri-fit-nike"),
  catalogProduct("pantaloneta-running-nike-plizada"),
  catalogProduct("adizero-hombre"),
  catalogProduct("conjunto-deportivo-dri-fit-adidas"),
];

export const ficheroProducts = [
  catalogProduct("conjunto-deportivo-dri-fit-adidas"),
  catalogProduct("camiseta-dri-fit-nike"),
  catalogProduct("pantaloneta-running-nike-plizada"),
  catalogProduct("sudadera-antifluido-cargo"),
  catalogProduct("basics-algodon"),
  catalogProduct("adizero-hombre"),
];

export const audienceTiles = [
  {
    label: "Hombre",
    text: "Ropa y calzado de entrenamiento.",
    href: "/hombre",
    product: catalogProduct("compresion-manga-larga"),
  },
  {
    label: "Mujer",
    text: "Diseño y rendimiento en cada prenda.",
    href: "/mujer",
    product: catalogProduct("sudadera-fit"),
  },
  {
    label: "Calzado",
    text: "Pisada firme en cada kilómetro.",
    href: "/zapatillas",
    product: catalogProduct("asics-ff-turbo-hombre-1"),
  },
];

export const selectionProducts = [
  catalogProduct("conjunto-nike-tech"),
  catalogProduct("enterizo-vitalia"),
  catalogProduct("conjunto-tela-fria-underarmour"),
  catalogProduct("chaqueta-drifit"),
  catalogProduct("pantaloneta-jordan-diamond"),
  catalogProduct("conjunto-corto-algodon-nike"),
  catalogProduct("pantaloneta-running-puma"),
  catalogProduct("camisa-sisa-puma"),
];

export const campaignPair = [
  {
    title: "Entrena con propósito",
    text: "Conjuntos para cada sesión, del calentamiento a la última serie.",
    cta: "Comprar conjuntos",
    href: "/hombre?tipo=conjuntos",
    product: catalogProduct("conjunto-adidas"),
  },
  {
    title: "Muévete con confianza",
    text: "Sets y enterizos que te acompañan dentro y fuera del gimnasio.",
    cta: "Comprar mujer",
    href: "/mujer?tipo=sets",
    product: catalogProduct("enterizo-nova-copy"),
  },
];

export const shoeShowcase = [
  { word: "Salomon", product: catalogProduct("salomon-hombre") },
  { word: "Hoka", product: catalogProduct("hoka-hombre") },
  { word: "Asics", product: catalogProduct("asics-ff-leap") },
  { word: "Air Max", product: catalogProduct("nike-air-max-hombre") },
  { word: "Samba", product: catalogProduct("adidas-samba-unisex") },
  { word: "9060", product: catalogProduct("new-balance-9060-dama") },
];

export const basicsLine = [
  catalogProduct("camisilla-basica"),
  catalogProduct("basics-pants"),
  catalogProduct("basics-algodon"),
];

export const lookProducts = [
  catalogProduct("conjunto-underarmour"),
  catalogProduct("set-2-piezas"),
  catalogProduct("enterizo-nova"),
  catalogProduct("conjunto-nike"),
  catalogProduct("enterizo-eva"),
  catalogProduct("vestido-yoga-rose"),
];

export const gearTiles = [
  {
    label: "Tech",
    text: "Mide tu progreso.",
    href: "/tech",
    links: [
      { label: "Audífonos", href: "/tech?tipo=audifonos" },
      { label: "Relojes y bandas", href: "/tech?tipo=relojes" },
    ],
    product: catalogProduct("watch-ultra-serie-11"),
  },
  {
    label: "Nutrición",
    text: "Nutrición que potencia tu mejor versión.",
    href: "/suplementos",
    links: [{ label: "Proteína", href: "/suplementos?tipo=proteina" }],
    product: catalogProduct("nitro-tech-whey-gold-proteina-5lb"),
  },
  {
    label: "Accesorios",
    text: "Los detalles que completan tu equipo.",
    href: "/accesorios",
    links: [
      { label: "Entrenamiento", href: "/accesorios?tipo=entrenamiento" },
      { label: "Hidratación", href: "/accesorios?tipo=hidratacion" },
    ],
    product: catalogProduct("termo-owala-32oz"),
  },
];

export const ficheroIndex = [
  { label: "Conjuntos", href: "/hombre?tipo=conjuntos" },
  { label: "Camisetas", href: "/hombre?tipo=camisetas" },
  { label: "Pantalonetas", href: "/hombre?tipo=pantalonetas" },
  { label: "Zapatillas", href: "/zapatillas" },
  { label: "Tech", href: "/tech" },
  { label: "Nutrición", href: "/suplementos" },
  { label: "Accesorios", href: "/accesorios" },
] as const;
