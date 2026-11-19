"use client";

import Link from "next/link";
import { useCallback, useEffect, useState, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import { IconAccount, IconCart, IconSearch } from "@/components/icons";
import { SimaMark } from "@/components/sima-mark";
import { AnnouncementBar } from "@/components/announcement-bar";
import { DesktopPanel } from "@/components/nav/desktop-panel";
import { MobileMenu } from "@/components/nav/mobile-menu";
import { departmentNav, type NavItem } from "@/lib/taxonomy";

function pathOf(href: string) {
  return href.split("?")[0] ?? href;
}

export function SiteHeaderClient() {
  return <MegaHeader />;
}

function HeaderActions({
  menuButton,
}: {
  menuButton?: ReactNode;
}) {
  return (
    <div className="flex items-center justify-end justify-self-end">
      {menuButton}
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
  );
}

function MegaHeader() {
  const pathname = usePathname();
  const items = departmentNav;
  const [active, setActive] = useState<string | null>(null);
  const [mobile, setMobile] = useState(false);
  const current = items.find((item) => item.id === active) ?? null;
  const closeMobile = useCallback(() => setMobile(false), []);

  useEffect(() => {
    setActive(null);
    setMobile(false);
  }, [pathname]);

  useEffect(() => {
    if (!active) return;
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setActive(null);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active]);

  return (
    <>
      <AnnouncementBar />
      <header
        className="sticky top-0 z-40 bg-background text-white"
        onMouseLeave={() => setActive(null)}
      >
      <div className="page-wrap grid h-16.5 grid-cols-[auto_1fr_auto] items-center lg:grid-cols-[1fr_auto_1fr]">
        <Link
          href="/"
          className="flex items-center gap-2 justify-self-start text-white sm:gap-3 lg:mr-50"
          aria-label="SIMA"
        >
          <SimaMark className="accent-text h-5 w-auto shrink-0 sm:h-6 lg:h-7" />
          <span className="pr-[0.2em] font-sans text-[1.7rem] font-bold uppercase leading-none tracking-[0.28em] sm:pr-[0.28em] sm:text-[2.2rem] sm:tracking-[0.36em] lg:pr-[0.42em] lg:text-[2.3rem] lg:tracking-[0.42em]">
            IMA
          </span>
        </Link>

        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex items-center">
            {items.map((item) => (
              <NavEntry
                key={item.id}
                item={item}
                open={active === item.id}
                current={pathOf(item.href) === pathname}
                onOpen={() => setActive(item.id)}
              />
            ))}
          </ul>
        </nav>

        <HeaderActions
          menuButton={
            <button
              type="button"
              aria-label="Abrir menú"
              className="flex h-11 w-11 items-center justify-center lg:hidden"
              onClick={() => setMobile(true)}
            >
              <span className="flex w-5 flex-col gap-1.75" aria-hidden>
                <span className="h-px w-full bg-white" />
                <span className="h-px w-3/4 bg-white" />
              </span>
            </button>
          }
        />
      </div>

      {current ? (
        <div className="absolute inset-x-0 top-full z-30 hidden max-h-[calc(100svh-var(--site-header-offset))] overflow-y-auto border-y border-white/10 bg-background shadow-[0_28px_70px_rgba(0,0,0,0.55)] lg:block">
          <div key={current.id} className="nav-rise">
            <DesktopPanel item={current} />
          </div>
        </div>
      ) : null}

      <MobileMenu open={mobile} onClose={closeMobile} />
      </header>
    </>
  );
}

function NavEntry({
  item,
  open,
  current,
  onOpen,
}: {
  item: NavItem;
  open: boolean;
  current: boolean;
  onOpen: () => void;
}) {
  const marked = open || current;

  return (
    <li className="flex items-center" onMouseEnter={onOpen}>
      <Link
        href={item.href}
        aria-expanded={open}
        aria-current={current ? "page" : undefined}
        onFocus={onOpen}
        className={`relative flex h-11 items-center px-3 font-display text-[13px] uppercase tracking-[0.16em] text-white/75 transition-colors duration-300 hover:text-white ${
          marked ? "accent-text text-white" : ""
        }`}
      >
        {item.label}
        <span
          className={`accent-fill absolute bottom-2 left-3 right-3 h-px origin-left bg-white transition-transform duration-300 ${
            marked ? "scale-x-100" : "scale-x-0"
          }`}
        />
      </Link>
    </li>
  );
}
