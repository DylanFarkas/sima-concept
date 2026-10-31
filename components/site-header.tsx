"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/lib/home-content";
import { IconAccount, IconCart, IconSearch } from "@/components/icons";

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 bg-background text-white">
      <div className="page-wrap grid h-16.5 grid-cols-[1fr_auto_1fr] items-center mt-2">
        <Link
          href="/"
          className="justify-self-start pr-[0.42em] font-sans text-[2.6rem] font-bold uppercase leading-none tracking-[0.42em] text-white mr-50"
          aria-label="SIMA"
        >
          SIMA
        </Link>

        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex items-center">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={`flex h-11 items-center px-[11.2px] font-display text-[14px] font-normal uppercase tracking-[0.14em] ${
                      active ? "text-white" : "text-white/80 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center justify-end justify-self-end">
          <button
            type="button"
            aria-label="Buscar"
            className="flex h-11 w-11 items-center justify-center"
          >
            <IconSearch className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="Cuenta"
            className="flex h-11 w-11 items-center justify-center"
          >
            <IconAccount className="h-4.25 w-3.75" />
          </button>
          <button
            type="button"
            aria-label="Carrito"
            className="relative flex h-11 w-11 items-center justify-center"
          >
            <IconCart className="h-5 w-5" />
            <span className="absolute right-0 top-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-white text-[10px] leading-none text-ink">
              0
            </span>
          </button>
        </div>
      </div>

      <nav aria-label="Principal móvil" className="page-wrap pb-3 lg:hidden">
        <ul className="flex gap-4 overflow-x-auto">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <li key={link.href} className="shrink-0">
                <Link
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={`font-display text-xs uppercase tracking-[0.14em] ${
                    active ? "text-white" : "text-white/80"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
