export const navLinks = [
  { label: "INICIO", href: "/" },
  { label: "HOMBRE", href: "/hombre" },
  { label: "MUJER", href: "/mujer" },
  { label: "ZAPATILLAS", href: "/zapatillas" },
  { label: "TECH", href: "/tech" },
  { label: "SUPLEMENTOS", href: "/suplementos" },
  { label: "ACCESORIOS", href: "/accesorios" },
] as const;

export const heroValues = [
  "DISCIPLINA",
  "CONSTANCIA",
  "PERSEVERANCIA",
  "AMOR",
  "CONFIANZA",
  "FE",
] as const;

export const valuePillars = [
  {
    icon: "quality",
    title: "CALIDAD",
    text: "Productos que rinden contigo en cada paso.",
  },
  {
    icon: "purpose",
    title: "PROPÓSITO",
    text: "Más que una marca, un estilo de vida.",
  },
  {
    icon: "community",
    title: "COMUNIDAD",
    text: "Avanzamos juntos, crecemos juntos.",
  },
  {
    icon: "awareness",
    title: "CONCIENCIA",
    text: "Productos responsables, impacto positivo.",
  },
  {
    icon: "inspiration",
    title: "INSPIRACIÓN",
    text: "Contenido que te motiva a ser mejor.",
  },
  {
    icon: "faith",
    title: "FE",
    text: "Creemos que con fe todo es posible.",
  },
] as const;

export const collections = [
  {
    icon: "shirt",
    title: "HOMBRE",
    text: "Ropa y calzado de entrenamiento.",
    href: "/hombre",
  },
  {
    icon: "dress",
    title: "MUJER",
    text: "Diseño y rendimiento en cada prenda.",
    href: "/mujer",
  },
  {
    icon: "shoe",
    title: "ZAPATOS",
    text: "Pisada firme en cada kilómetro.",
    href: "/zapatillas",
  },
  {
    icon: "headphones",
    title: "TECH",
    text: "Mide tu progreso",
    href: "/tech",
  },
  {
    icon: "bottle",
    title: "SUPLEMENTOS",
    text: "Nutrición que potencia tu mejor version.",
    href: "/suplementos",
  },
  {
    icon: "bag",
    title: "ACCESORIOS",
    text: "Los detalles que completan tu equipo.",
    href: "/accesorios",
  },
] as const;

export const aboutValues = [
  {
    icon: "check",
    title: "DISCIPLINA",
    text: "Decidimos hoy por nuestro mejor mañana.",
  },
  {
    icon: "target",
    title: "CONSTANCIA",
    text: "Pequeños hábitos, grandes resultados.",
  },
  {
    icon: "trend",
    title: "PERSEVERANCIA",
    text: "No nos rendimos. Mejores cada día.",
  },
  {
    icon: "heart",
    title: "AMOR",
    text: "Amamos el proceso y a quienes somos.",
  },
  {
    icon: "heartCheck",
    title: "CONFIANZA",
    text: "Creemos en lo que podemos lograr.",
  },
  {
    icon: "faith",
    title: "FE",
    text: "Con fe, todo es posible.",
  },
] as const;

export const trustItems = [
  {
    icon: "truck",
    title: "ENVÍOS A\nTODA COLOMBIA",
    text: "Rápidos y seguros.",
  },
  {
    icon: "lock",
    title: "PAGOS 100%\nSEGUROS",
    text: "Protegemos tu información.",
  },
  {
    icon: "refresh",
    title: "CAMBIOS\nY DEVOLUCIONES",
    text: "Fáciles y sin complicaciones.",
  },
  {
    icon: "headset",
    title: "ATENCIÓN\nPERSONALIZADA",
    text: "Estamos para ayudarte.",
  },
] as const;

export const footerLinks = {
  enlaces: [
    { label: "Tienda", href: "/" },
    { label: "Colecciones", href: "/#colecciones" },
    { label: "Nosotros", href: "/nosotros" },
    { label: "Comunidad", href: "/comunidad" },
    { label: "Contacto", href: "/contacto" },
  ],
  ayuda: [
    { label: "Guía de tallas", href: "/guia-de-tallas" },
    { label: "Preguntas frecuentes", href: "/preguntas-frecuentes" },
    { label: "Envíos", href: "/envios" },
    { label: "Cambios y devoluciones", href: "/cambios-y-devoluciones" },
    { label: "Política de privacidad", href: "/politica-de-privacidad" },
  ],
} as const;

export const footerColumns = [
  {
    title: "Tienda",
    links: [
      { label: "Hombre", href: "/hombre" },
      { label: "Mujer", href: "/mujer" },
      { label: "Zapatillas", href: "/zapatillas" },
      { label: "Tech", href: "/tech" },
      { label: "Suplementos", href: "/suplementos" },
      { label: "Accesorios", href: "/accesorios" },
    ],
  },
  {
    title: "SIMA",
    links: [
      { label: "Nosotros", href: "/nosotros" },
      { label: "Comunidad", href: "/comunidad" },
      { label: "Contacto", href: "/contacto" },
    ],
  },
  { title: "Ayuda", links: footerLinks.ayuda },
] as const;

export const whatsappNumber = "+57 318 915 4899";

export const socialLinks = [
  {
    label: "Facebook",
    name: "Facebook",
    href: "https://www.facebook.com/simalifestyle.co/",
    icon: "facebook",
  },
  {
    label: "Instagram",
    name: "Instagram",
    href: "https://www.instagram.com/sima._co_/",
    icon: "instagram",
  },
  {
    label: "Tiktok",
    name: "TikTok",
    href: "https://www.tiktok.com/@sima16547",
    icon: "tiktok",
  },
  {
    label: "Wa",
    name: "WhatsApp",
    href: "https://wa.me/573189154899",
    icon: "whatsapp",
  },
] as const;
