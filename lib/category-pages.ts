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
        kind: "explore",
        title: "Elige tu prenda",
        photos: {
          conjuntos: catalogProduct("conjunto-adidas"),
          camisetas: catalogProduct("compresion-manga-larga"),
          pantalonetas: catalogProduct("pantaloneta-jordan-diamond"),
          sudaderas: catalogProduct("sudadera-antifluido-cargo"),
          basics: catalogProduct("basics-algodon"),
        },
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
      text: "Ropa para entrenar, con rendimiento, también si estás empezando.",
      cta: toGrid,
      product: catalogProduct("enterizo-vitalia"),
      media: { type: "video", src: "/sima/sima-category-hero-video.mp4" },
    },
    before: [],
    grid: {
      aspect: "portrait",
      tone: "dark",
      inserts: [
        {
          after: 4,
          kind: "campaign",
          title: "Hecha para moverte",
          text: "Enterizos y sets que te acompañan dentro y fuera del gimnasio.",
          cta: { label: "Ver enterizos", href: "/mujer?tipo=enterizos" },
          product: catalogProduct("enterizo-vitalia"),
        },
      ],
    },
    after: [],
  },
  zapatillas: {
    hero: {
      format: "triptico",
      title: "Calzado",
      text: "Ligereza y soporte en cada kilómetro.",
      cta: { label: "Ver todo", href: "#productos" },
      left: {
        product: catalogProduct("asics-ff-turbo-hombre-1"),
        label: "Hombre",
        href: "/zapatillas?audiencia=hombre",
      },
      right: {
        product: catalogProduct("new-balance-9060-dama"),
        label: "Mujer",
        href: "/zapatillas?audiencia=mujer",
      },
      extra: { label: "Unisex", href: "/zapatillas?audiencia=unisex" },
    },
    before: [
      {
        kind: "brands",
        title: "Encuentra tu marca",
        text: "Las marcas con las que entrenas, en un solo lugar.",
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
          cta: { label: "Zapatillas de hombre", href: "/zapatillas?audiencia=hombre" },
          product: catalogProduct("salomon-hombre"),
        },
        {
          after: 26,
          kind: "campaign",
          title: "Clásicos para todos los días",
          text: "Modelos que van del entrenamiento a la calle.",
          cta: { label: "Ver unisex", href: "/zapatillas?audiencia=unisex" },
          product: catalogProduct("adidas-samba-unisex"),
        },
      ],
    },
    after: [],
  },
  tech: {
    hero: {
      format: "partido",
      tone: "dark",
      title: "Tech",
      text: "Tecnología que impulsa tu entrenamiento.",
      product: catalogProduct("watch-ultra-serie-11"),
      media: { type: "image", src: "/sima/tecnologia-img.webp" },
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
