export const heroValues = [
  "DISCIPLINA",
  "CONSTANCIA",
  "PERSEVERANCIA",
  "AMOR",
  "CONFIANZA",
  "FE",
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
    text: "No nos rendimos. Seamos mejores cada día.",
  },
  {
    icon: "heart",
    title: "AMOR",
    text: "Amamos el proceso y a quienes somos.",
  },
  {
    icon: "heartCheck",
    title: "CONFIANZA",
    text: "Creemos en nosotros y en lo que podemos lograr.",
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

export const whatsappHref = "https://wa.me/573189154899";

export const helpPages = [
  { label: "Guía de tallas", href: "/guia-de-tallas" },
  { label: "Preguntas frecuentes", href: "/preguntas-frecuentes" },
  { label: "Envíos", href: "/envios" },
  { label: "Cambios y devoluciones", href: "/cambios-y-devoluciones" },
  { label: "Política de privacidad", href: "/politica-de-privacidad" },
] as const;

export type HelpHref = (typeof helpPages)[number]["href"];

export const footerColumns = [
  {
    title: "Tienda",
    links: [
      { label: "Hombre", href: "/hombre" },
      { label: "Mujer", href: "/mujer" },
      { label: "Zapatillas", href: "/zapatos" },
      { label: "Tech", href: "/tecnologia" },
      { label: "Suplementos", href: "/suplementos" },
      { label: "Accesorios", href: "/accesorios" },
    ],
  },
  {
    title: "SIMA",
    links: [
      { label: "Nosotros", href: "/nosotros" },
      { label: "Comunidad", href: "/comunidad" },
      { label: "Contacto", href: whatsappHref },
    ],
  },
  {
    title: "Ayuda",
    links: [...helpPages, { label: "Asesoría", href: whatsappHref }],
  },
] as const;

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
    href: whatsappHref,
    icon: "whatsapp",
  },
] as const;
