import type { CategorySlug, Product } from "@/lib/catalog";
import { catalogProduct } from "@/lib/home-picks";

export type HeroMedia = { type: "video" | "image"; src: string };
export type Cta = { label: string; href: string };
export type Tone = "dark" | "white";

export type TripticoPanel = { product: Product; label?: string; href?: string };

export type CategoryHeroConfig =
  | {
      format: "pantalla";
      title: string;
      text: string;
      cta: Cta;
      product: Product;
      media?: HeroMedia;
    }
  | {
      format: "triptico";
      title: string;
      text: string;
      cta: Cta;
      left: TripticoPanel;
      right: TripticoPanel;
      extra?: Cta;
    }
  | {
      format: "partido";
      tone: Tone;
      title: string;
      text: string;
      product: Product;
      media?: HeroMedia;
    };

export type CategoryModule =
  | { kind: "explore"; title: string; photos: Record<string, Product | string> }
  | { kind: "bestsellers"; title: string; eyebrow: string; products: Product[] }
  | { kind: "brands"; title: string; text: string }
  | { kind: "feature"; eyebrow: string; text: string; product: Product; image?: string }
  | { kind: "phrase"; text: string; tone: Tone; cta?: Cta };

export type GridInsert =
  | { after: number; kind: "campaign"; title: string; text: string; cta: Cta; product: Product }
  | { after: number; kind: "phrase"; text: string; cta?: Cta };

export type GridConfig = {
  aspect: "portrait" | "square";
  tone: Tone;
  inserts: GridInsert[];
};

export type CategoryPage = {
  hero: CategoryHeroConfig;
  before: CategoryModule[];
  grid: GridConfig;
  after: CategoryModule[];
};

const toGrid: Cta = { label: "Ver productos", href: "#productos" };

export const categoryPages: Record<CategorySlug, CategoryPage> = {
  hombre: {
    hero: {
      format: "pantalla",
      title: "Hombre",
      text: "Ropa de entrenamiento para cada sesión, del calentamiento a la última serie.",
      cta: toGrid,
      product: catalogProduct("compresion-manga-larga"),
      media: { type: "video", src: "/sima/sima-category-hero-video.mp4" },
    },
    before: [
      {
        kind: "bestsellers",
        title: "Más vendidos",
        eyebrow: "Best sellers",
        products: [
          catalogProduct("sudadera-antifluido-cargo"),
          catalogProduct("conjunto-corto-algodon-nike"),
          catalogProduct("conjunto-deportivo-dri-fit-nike-1"),
          catalogProduct("camiseta-dri-fit-nike"),
          catalogProduct("pantaloneta-nike-dri-fit"),
        ],
      },
    ],
    grid: {
      aspect: "portrait",
      tone: "dark",
      inserts: [
        {
          after: 8,
          kind: "campaign",
          title: "Constancia en cada serie",
          text: "Conjuntos completos para entrenar sin pensar qué ponerte.",
          cta: { label: "Ver conjuntos", href: "/hombre?tipo=conjuntos" },
          product: catalogProduct("conjunto-nike-tech"),
        },
        {
          after: 20,
          kind: "phrase",
          text: "Entrena con disciplina",
          cta: { label: "Ver sudaderas", href: "/hombre?tipo=sudaderas" },
        },
      ],
    },
    after: [],
  },
  mujer: {
    hero: {
      format: "pantalla",
      title: "Mujer",
      text: "Ropa para entrenar con estilo, también si estás empezando.",
      cta: toGrid,
      product: catalogProduct("enterizo-vitalia"),
      media: { type: "video", src: "/sima/sima-category-hero-video.mp4" },
    },
    before: [
      {
        kind: "bestsellers",
        title: "Más vendidos",
        eyebrow: "Best sellers",
        products: [
          catalogProduct("pantaloneta-running-nike-plizada"),
          catalogProduct("chaqueta-drifit"),
          catalogProduct("sudadera-fit"),
          catalogProduct("basics-leggins"),
          catalogProduct("enterizo-vitalia"),
        ],
      },
    ],
    grid: {
      aspect: "portrait",
      tone: "white",
      inserts: [
        {
          after: 4,
          kind: "campaign",
          title: "Hecha para ti",
          text: "Enterizos y sets que te acompañan dentro y fuera del gimnasio.",
          cta: { label: "Ver enterizos", href: "/mujer?tipo=enterizos" },
          product: catalogProduct("enterizo-vitalia"),
        },
      ],
    },
    after: [],
  },
  zapatos: {
    hero: {
      format: "pantalla",
      title: "Calzado",
      text: "Ligereza y soporte en cada kilómetro.",
      cta: toGrid,
      product: catalogProduct("asics-ff-turbo-hombre-1"),
      media: { type: "video", src: "/sima/sima-category-hero-video.mp4" },
    },
    before: [
      {
        kind: "explore",
        title: "Elige tu calzado",
        photos: {
          hombre: catalogProduct("asics-ff-turbo-hombre-1"),
          mujer: "/sima/IMG_5024.webp",
        },
      },
      {
        kind: "explore",
        title: "Por disciplina",
        photos: {
          running: catalogProduct("nike-vomero-18-hombre"),
          hiking: catalogProduct("new-balance-fresh-foam-mujer-copia"),
          training: catalogProduct("nike-metcon-10-mujer"),
          basketball: "/sima/sima-category.png",
          classic: catalogProduct("adidas-samba-unisex"),
        },
      },
    ],
    grid: {
      aspect: "square",
      tone: "dark",
      inserts: [
        {
          after: 8,
          kind: "campaign",
          title: "Kilómetro a kilómetro",
          text: "Zapatillas para correr, entrenar y volver a salir mañana.",
          cta: { label: "Zapatillas de hombre", href: "/zapatos?audiencia=hombre" },
          product: catalogProduct("salomon-hombre"),
        },
        {
          after: 26,
          kind: "campaign",
          title: "Clásicos para todos los días",
          text: "Modelos que van del entrenamiento a la calle.",
          cta: { label: "Ver unisex", href: "/zapatos?audiencia=unisex" },
          product: catalogProduct("adidas-samba-unisex"),
        },
      ],
    },
    after: [],
  },
  tecnologia: {
    hero: {
      format: "pantalla",
      title: "Tech",
      text: "Tecnología que impulsa tu entrenamiento.",
      cta: toGrid,
      product: catalogProduct("watch-ultra-serie-11"),
      media: { type: "video", src: "/sima/sima-category-hero-video.mp4" },
    },
    before: [
      {
        kind: "feature",
        eyebrow: "Destacado",
        text: "Tu música en cada serie, del primer calentamiento al último kilómetro.",
        product: catalogProduct("airpods-pro3"),
        image: "/sima/airpods.webp",
      },
    ],
    grid: { aspect: "square", tone: "dark", inserts: [] },
    after: [],
  },
  suplementos: {
    hero: {
      format: "pantalla",
      title: "Nutrición",
      text: "Nutrición que potencia tu mejor versión.",
      cta: toGrid,
      product: catalogProduct("nitro-tech-whey-gold-proteina-5lb"),
      media: { type: "video", src: "/sima/sima-category-hero-video.mp4" },
    },
    before: [],
    grid: { aspect: "square", tone: "white", inserts: [] },
    after: [
      {
        kind: "phrase",
        text: "Nutre tu disciplina",
        tone: "dark",
        cta: { label: "Completa tu equipo", href: "/accesorios" },
      },
    ],
  },
  accesorios: {
    hero: {
      format: "pantalla",
      title: "Accesorios",
      text: "Equipamiento para cada entrenamiento.",
      cta: toGrid,
      product: catalogProduct("termo-owala-32oz"),
      media: { type: "video", src: "/sima/sima-category-hero-video.mp4" },
    },
    before: [
      {
        kind: "explore",
        title: "Completa tu equipo",
        photos: {
          entrenamiento: "/sima/entrenamiento-img.webp",
          hidratacion: "/sima/hidratacion-img.webp",
        },
      },
    ],
    grid: { aspect: "square", tone: "dark", inserts: [] },
    after: [],
  },
};

export const insertMinimum = 12;
