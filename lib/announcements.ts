export type Announcement = {
  icon: "lock" | "truck" | "card" | "tag";
  lead: string;
  strong: string;
};

export const announcements: readonly Announcement[] = [
  { icon: "lock", lead: "Compra rápida y", strong: "100 % segura" },
  { icon: "truck", lead: "Envíos a toda Colombia desde", strong: "$14.000" },
  { icon: "card", lead: "Recibimos", strong: "todas las tarjetas" },
  { icon: "tag", lead: "Compra ahora y financia con", strong: "Addi" },
];

export function announcementText(item: Announcement) {
  return `${item.lead} ${item.strong}`;
}
