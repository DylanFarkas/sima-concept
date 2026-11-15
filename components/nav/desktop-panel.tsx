"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { menuSpotlight, type NavItem, type NavLink } from "@/lib/taxonomy";

function formatPrice(value: number) {
  const formatted = new Intl.NumberFormat("es-CO", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
  return `$${formatted}`;
}

const linkClass =
  "block py-1.5 font-display text-[1.65rem] uppercase leading-none tracking-[0.02em] transition-colors duration-300";

export function DesktopPanel({ item }: { item: NavItem }) {
  const { cards, campaign } = menuSpotlight(item.id);
  const shoeMenu = item.id === "calzado" || item.id === "hombre" || item.id === "mujer";
  const [audience, setAudience] = useState<NavLink | null>(null);
  const columns = item.columns.filter((column) => column.title !== "Disciplina");

  useEffect(() => {
    setAudience(null);
  }, [item.id]);

  return (
    <div
      className={`page-wrap grid min-h-140 items-stretch gap-10 py-10 lg:py-12 ${
        shoeMenu
          ? "lg:grid-cols-[minmax(220px,auto)_minmax(0,1fr)_minmax(240px,320px)]"
          : "lg:grid-cols-[220px_minmax(0,1fr)_minmax(240px,320px)]"
      }`}
    >
      <div
        className="flex flex-col justify-center"
        onMouseLeave={() => {
          if (shoeMenu) setAudience(null);
        }}
      >
        {columns.map((column) => {
          const hasDisciplines = shoeMenu && column.links.some((link) => link.children?.length);
          const flyout =
            audience && column.links.some((link) => link.href === audience.href) ? audience : null;
          return (
            <div
              key={column.title}
              className={`mb-8 flex gap-8 last:mb-0 ${
                item.id === "calzado" ? "items-center" : "items-start"
              }`}
            >
              <div>
                <p className="font-display text-[11px] uppercase tracking-[0.32em] text-white/35">
                  {column.title}
                </p>
                <ul className="mt-4">
                  {column.links.map((link) => {
                    const selected = shoeMenu && audience?.href === link.href;
                    return (
                      <li
                        key={link.href}
                        onMouseEnter={() => {
                          if (shoeMenu) setAudience(link.children?.length ? link : null);
                        }}
                      >
                        <Link
                          href={link.href}
                          aria-expanded={link.children?.length ? selected : undefined}
                          onFocus={() => {
                            if (shoeMenu) setAudience(link.children?.length ? link : null);
                          }}
                          className={`${linkClass} ${
                            selected ? "text-white" : "text-white/65 hover:text-white"
                          }`}
                        >
                          {link.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
              {hasDisciplines ? <DisciplineFlyout link={flyout} /> : null}
            </div>
          );
        })}
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
        <Link href={item.href} className="group relative hidden min-h-120 overflow-hidden lg:block">
          {campaign.image ? (
            <img src={campaign.image} alt="" className="absolute inset-0 h-full w-full object-cover" />
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

function DisciplineFlyout({ link }: { link: NavLink | null }) {
  const open = Boolean(link?.children?.length);
  return (
    <div
      className={`shrink-0 overflow-hidden transition-[width,opacity] duration-300 ease-out motion-reduce:transition-none ${
        open ? "w-48 opacity-100" : "w-0 opacity-0"
      }`}
      aria-hidden={!open}
    >
      {open && link?.children ? (
        <nav key={link.href} aria-label={`Disciplinas de ${link.label}`} className="nav-shift w-48">
          <p className="font-display text-[11px] uppercase tracking-[0.32em] text-white/35">
            {link.label === "Zapatillas" ? "Disciplina" : link.label}
          </p>
          <ul className="mt-4 border-l border-white/15 pl-4">
            {link.children.map((child) => (
              <li key={child.href}>
                <Link
                  href={child.href}
                  tabIndex={open ? undefined : -1}
                  className="block py-1.5 font-display text-[1.35rem] uppercase leading-none tracking-[0.02em] text-white/65 transition-colors duration-300 hover:text-white"
                >
                  {child.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </div>
  );
}
