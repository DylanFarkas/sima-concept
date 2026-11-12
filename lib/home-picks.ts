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
    text: "Ligereza y soporte en cada kilómetro.",
    href: "/zapatos",
    product: catalogProduct("asics-ff-turbo-hombre-1"),
  },
  {
    label: "Tech",
    text: "Tecnología que impulsa tu entrenamiento.",
    href: "/tecnologia",
    product: catalogProduct("watch-ultra-serie-11"),
    image: "/sima/tecnologia-img.webp",
  },
  {
    label: "Nutrición",
    text: "Nutrición que potencia tu mejor versión.",
    href: "/suplementos",
    product: catalogProduct("nitro-tech-whey-gold-proteina-5lb"),
  },
  {
    label: "Accesorios",
    text: "Equipamiento para cada entrenamiento.",
    href: "/accesorios",
    product: catalogProduct("termo-owala-32oz"),
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
  { product: catalogProduct("camisilla-basica") },
  {
    product: catalogProduct("basics-leggins"),
    image: "/sima/leggings-basic-mujer.webp",
  },
  {
    product: catalogProduct("basics"),
    image: "/sima/camisa-basic-mujer.webp",
  },
];

export const gearTiles = [
  {
    label: "Tech",
    text: "Tecnología que impulsa tu entrenamiento.",
    href: "/tecnologia",
    links: [
      { label: "Audífonos", href: "/tecnologia?tipo=audifonos" },
      { label: "Relojes y bandas", href: "/tecnologia?tipo=relojes" },
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
    text: "Equipamiento para cada entrenamiento.",
    href: "/accesorios",
    links: [
      { label: "Entrenamiento", href: "/accesorios?tipo=entrenamiento" },
      { label: "Hidratación", href: "/accesorios?tipo=hidratacion" },
    ],
    product: catalogProduct("termo-owala-32oz"),
  },
];
