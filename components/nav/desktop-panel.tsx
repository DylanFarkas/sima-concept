import Link from "next/link";
import type { NavVariant } from "@/lib/nav-variants";
import { menuSpotlight, type NavItem } from "@/lib/taxonomy";

function formatPrice(value: number) {
  const formatted = new Intl.NumberFormat("es-CO", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
  return `$${formatted}`;
}

function Columnas({ item }: { item: NavItem }) {
  return (
    <div className="page-wrap grid min-h-90 grid-cols-1 items-center gap-12 py-16 lg:grid-cols-12">
      <div
        className="grid gap-x-16 gap-y-12 lg:col-span-7"
        style={{
          gridTemplateColumns: `repeat(${Math.min(item.columns.length, 3)}, minmax(0, 1fr))`,
        }}
      >
        {item.columns.map((column) => (
          <div key={column.title}>
            <p className="font-display text-[11px] uppercase tracking-[0.32em] text-white/45">
              {column.title}
            </p>
            <ul className="mt-8 space-y-4">
              {column.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-3 text-[16px] text-white/80 transition-colors duration-300 hover:text-white"
                  >
                    <span className="h-px w-0 bg-white transition-all duration-300 group-hover:w-5" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <p
        aria-hidden
        className="hidden text-right font-display text-[clamp(4.5rem,6vw,7.5rem)] font-bold uppercase leading-normal tracking-tighter text-white/10 lg:col-span-5 lg:block"
      >
        {item.label}
      </p>
    </div>
  );
}

function Editorial({ item }: { item: NavItem }) {
  const { cards, campaign } = menuSpotlight(item.id);

  return (
    <div className="page-wrap grid min-h-140 items-stretch gap-10 py-10 lg:grid-cols-[220px_minmax(0,1fr)_minmax(240px,320px)] lg:py-12">
      <div className="flex flex-col justify-center">
        {item.columns.map((column) => (
          <div key={column.title} className="mb-8 last:mb-0">
            <p className="font-display text-[11px] uppercase tracking-[0.32em] text-white/35">
              {column.title}
            </p>
            <ul className="mt-4">
              {column.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block py-1.5 font-display text-[1.65rem] uppercase leading-none tracking-[0.02em] text-white/65 transition-colors duration-300 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="grid h-full grid-cols-2 gap-4">
        {cards.map((card) => (
          <Link key={card.handle} href={`/producto/${card.handle}`} className="group flex h-full flex-col">
            <span className="relative block min-h-80 flex-1 overflow-hidden bg-[#1a1a1a]">
              {card.image ? (
                <img
                  src={card.image}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105"
                />
              ) : null}
            </span>
            <span className="mt-3 block text-[13px] leading-snug text-white/90">{card.title}</span>
            <span className="mt-1 block font-display text-xs font-bold tracking-[0.06em]">
              {formatPrice(card.price)}
            </span>
          </Link>
        ))}
      </div>

      {campaign ? (
        <Link
          href={item.href}
          className="group relative hidden min-h-120 overflow-hidden lg:block"
        >
          {campaign.image ? (
            <img
              src={campaign.image}
              alt=""
              className="absolute inset-0 h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105"
            />
          ) : null}
          <span className="absolute inset-0 bg-linear-to-t from-black via-black/25 to-black/10" />
          <span className="absolute inset-x-0 bottom-0 p-6">
            <span className="block font-display text-[11px] uppercase tracking-[0.28em] text-white/70">
              {item.label}
            </span>
            <span className="mt-3 block font-display text-[2rem] font-bold uppercase leading-[0.95]">
              {campaign.title}
            </span>
            <span className="mt-5 inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.2em]">
              Ver todo
              <span aria-hidden className="transition group-hover:translate-x-1">
                →
              </span>
            </span>
          </span>
        </Link>
      ) : null}
    </div>
  );
}

function AudienciaPanel({ item }: { item: NavItem }) {
  const giant =
    item.label.length > 8
      ? "text-[clamp(2.5rem,3.1vw,3.5rem)]"
      : "text-[clamp(3rem,5vw,4.75rem)]";

  return (
    <div className="page-wrap flex min-h-80 items-stretch gap-10 py-14 lg:gap-16">
      <p
        className={`w-[34%] max-w-75 shrink-0 self-center font-display font-bold uppercase leading-[0.84] tracking-[-0.045em] ${giant}`}
      >
        {item.label}
      </p>
      <div className="w-px bg-white/15" />
      <div
        className="grid flex-1 content-center gap-12"
        style={{
          gridTemplateColumns: `repeat(${item.columns.length}, minmax(0, 1fr))`,
        }}
      >
        {item.columns.map((column) => (
          <div key={column.title}>
            <p className="font-display text-[11px] uppercase tracking-[0.32em] text-white/40">
              {column.title}
            </p>
            <ul className="mt-6 space-y-3">
              {column.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[15px] text-white/75 transition-colors duration-300 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export function DesktopPanel({
  variant,
  item,
}: {
  variant: Exclude<NavVariant, "original">;
  item: NavItem;
}) {
  if (variant === "2") return <Editorial item={item} />;
  if (variant === "3") return <AudienciaPanel item={item} />;
  return <Columnas item={item} />;
}
