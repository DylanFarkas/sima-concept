import Link from "next/link";
import { menuSpotlight, type NavItem } from "@/lib/taxonomy";

function formatPrice(value: number) {
  const formatted = new Intl.NumberFormat("es-CO", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
  return `$${formatted}`;
}

export function DesktopPanel({ item }: { item: NavItem }) {
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
                  className="absolute inset-0 h-full w-full object-cover"
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
              className="absolute inset-0 h-full w-full object-cover"
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
