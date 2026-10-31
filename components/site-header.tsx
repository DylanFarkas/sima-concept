"use client";

import Link from "next/link";
import { Suspense, useCallback, useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { IconAccount, IconCart, IconSearch } from "@/components/icons";
import { DesktopPanel } from "@/components/nav/desktop-panel";
import { MobileMenu } from "@/components/nav/mobile-menu";
import { isNavVariant, navVariant, type NavVariant } from "@/lib/nav-variants";
import { audienceNav, departmentNav, type NavItem } from "@/lib/taxonomy";

function menusFor(variant: NavVariant) {
  return variant === "audiencia" ? audienceNav : departmentNav;
}

function pathOf(href: string) {
  return href.split("?")[0] ?? href;
}

export function SiteHeader() {
  return (
    <Suspense fallback={<HeaderShell variant={navVariant} locationKey="" />}>
      <HeaderFromQuery />
    </Suspense>
  );
}

function HeaderFromQuery() {
  const params = useSearchParams();
  const pathname = usePathname();
  const requested = params.get("nav");
  const variant = isNavVariant(requested) ? requested : navVariant;
  return (
    <HeaderShell variant={variant} locationKey={`${pathname}?${params.toString()}`} />
  );
}

function HeaderShell({
  variant,
  locationKey,
}: {
  variant: NavVariant;
  locationKey: string;
}) {
  const pathname = usePathname();
  const items = menusFor(variant);
  const [active, setActive] = useState<string | null>(null);
  const [mobile, setMobile] = useState(false);
  const current = items.find((item) => item.id === active) ?? null;
  const closeMobile = useCallback(() => setMobile(false), []);

  useEffect(() => {
    setActive(null);
    setMobile(false);
  }, [locationKey]);

  useEffect(() => {
    if (!active) return;
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setActive(null);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active]);

  return (
    <header
      className="sticky top-0 z-40 bg-background text-white"
      onMouseLeave={() => setActive(null)}
    >
      <div className="page-wrap mt-2 grid h-16.5 grid-cols-[auto_1fr_auto] items-center lg:grid-cols-[1fr_auto_1fr]">
        <Link
          href="/"
          className="justify-self-start pr-[0.2em] font-sans text-[1.7rem] font-bold uppercase leading-none tracking-[0.28em] text-white sm:text-[2.2rem] sm:tracking-[0.36em] lg:mr-50 lg:pr-[0.42em] lg:text-[2.6rem] lg:tracking-[0.42em]"
          aria-label="SIMA"
        >
          SIMA
        </Link>

        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex items-center">
            {items.map((item, index) => (
              <NavEntry
                key={item.id}
                item={item}
                variant={variant}
                divider={item.tone === "quiet" && items[index - 1]?.tone !== "quiet"}
                open={active === item.id}
                current={pathOf(item.href) === pathname}
                onOpen={() => setActive(item.id)}
              />
            ))}
          </ul>
        </nav>

        <div className="flex items-center justify-end justify-self-end">
          <button
            type="button"
            aria-label="Abrir menú"
            className="flex h-11 w-11 items-center justify-center lg:hidden"
            onClick={() => setMobile(true)}
          >
            <span className="flex w-5 flex-col gap-[7px]" aria-hidden>
              <span className="h-px w-full bg-white" />
              <span className="h-px w-3/4 bg-white" />
            </span>
          </button>
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

      {current ? (
        <div className="absolute inset-x-0 top-full z-30 hidden max-h-[calc(100svh-5.5rem)] overflow-y-auto border-y border-white/10 bg-background shadow-[0_28px_70px_rgba(0,0,0,0.55)] lg:block">
          <div key={`${variant}-${current.id}`} className="nav-rise">
            <DesktopPanel variant={variant} item={current} />
          </div>
        </div>
      ) : null}

      <MobileMenu open={mobile} onClose={closeMobile} />
    </header>
  );
}

function NavEntry({
  item,
  variant,
  divider,
  open,
  current,
  onOpen,
}: {
  item: NavItem;
  variant: NavVariant;
  divider: boolean;
  open: boolean;
  current: boolean;
  onOpen: () => void;
}) {
  const quiet = variant === "audiencia" && item.tone === "quiet";
  const marked = open || current;

  return (
    <li className="flex items-center" onMouseEnter={onOpen}>
      {divider ? <span className="mx-2 h-4 w-px bg-white/20" aria-hidden /> : null}
      <Link
        href={item.href}
        aria-expanded={open}
        aria-current={current ? "page" : undefined}
        onFocus={onOpen}
        className={`relative flex h-11 items-center px-3 font-display uppercase transition-colors duration-300 ${
          quiet
            ? "text-[11px] tracking-[0.16em] text-white/45 hover:text-white"
            : variant === "audiencia"
              ? "text-[14px] tracking-[0.2em] text-white"
              : "text-[13px] tracking-[0.16em] text-white/75 hover:text-white"
        } ${marked ? "text-white" : ""}`}
      >
        {item.label}
        <span
          className={`absolute bottom-2 left-3 right-3 h-px origin-left bg-white transition-transform duration-300 ${
            marked ? "scale-x-100" : "scale-x-0"
          }`}
        />
      </Link>
    </li>
  );
}
