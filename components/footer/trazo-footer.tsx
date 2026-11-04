import Link from "next/link";
import { footerColumns, socialLinks } from "@/lib/home-content";
import { IconFacebook, IconInstagram, IconTiktok } from "@/components/icons";
import { NewsletterForm } from "@/components/newsletter-form";

const focus =
  "outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white";

const socialIcons = {
  facebook: IconFacebook,
  instagram: IconInstagram,
  tiktok: IconTiktok,
} as const;

const handles = [
  "left-0 top-0",
  "left-1/2 top-0",
  "left-full top-0",
  "left-0 top-1/2",
  "left-full top-1/2",
  "left-0 top-full",
  "left-1/2 top-full",
  "left-full top-full",
];

export function TrazoFooter() {
  return (
    <footer className="border-t border-white/15 bg-background text-white">
      <div className="page-wrap grid gap-14 py-16 lg:grid-cols-[1fr_1.4fr] lg:gap-16 lg:py-24">
        <div>
          <p className="max-w-[16ch] font-display text-[clamp(2.25rem,4vw,3.5rem)] font-bold uppercase leading-[0.92] tracking-[-0.01em]">
            Disciplina te lleva <span className="text-white/35">donde la motivación no puede.</span>
          </p>
          <p className="mt-10 text-sm text-white/70">
            Recibe contenido exclusivo para tu mejor versión.
          </p>
          <NewsletterForm tone="line" />
        </div>

        <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4 lg:pt-2">
          {footerColumns.map((column) => (
            <div key={column.title}>
              <p className="text-sm font-bold">{column.title}</p>
              <ul className="mt-4 space-y-3">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`text-sm text-white/65 transition-colors hover:text-white ${focus}`}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <p className="text-sm font-bold">Conecta</p>
            <ul className="mt-4 space-y-3">
              {socialLinks.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className={`text-sm text-white/65 transition-colors hover:text-white ${focus}`}
                  >
                    {item.name} <span aria-hidden>↗</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="group/trazo relative overflow-hidden border-y border-white/25" aria-hidden>
        <span className="pointer-events-none absolute inset-x-0 top-1/2 border-t border-dashed border-white/10" />
        <div className="page-wrap flex justify-between py-[0.03em] font-display text-[min(36vw,38rem)] font-bold uppercase leading-none *:[text-box:trim-both_cap_alphabetic]">
          <span>S</span>
          <span>I</span>
          <span className="relative">
            <span className="text-transparent transition-colors duration-500 [-webkit-text-stroke:1.5px_var(--cream)] group-hover/trazo:text-cream">
              M
            </span>
            <span className="absolute inset-0 border border-cream/50 transition-opacity duration-500 group-hover/trazo:opacity-0" />
            {handles.map((position) => (
              <span
                key={position}
                className={`absolute size-2 -translate-x-1/2 -translate-y-1/2 border border-cream bg-background transition-opacity duration-500 group-hover/trazo:opacity-0 ${position}`}
              />
            ))}
          </span>
          <span className="mr-[-0.02em]">A</span>
        </div>
      </div>

      <div className="page-wrap flex flex-col gap-5 py-6 sm:flex-row sm:items-center sm:justify-between">
        <ul className="flex items-center gap-5">
          {socialLinks.map((item) => {
            if (item.icon === "whatsapp") {
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={item.name}
                    className={`font-display text-xs font-bold uppercase tracking-[0.03em] text-white/80 hover:text-white ${focus}`}
                  >
                    Wa
                  </a>
                </li>
              );
            }

            const Icon = socialIcons[item.icon];
            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={item.name}
                  className={`block text-white/80 hover:text-white ${focus}`}
                >
                  <Icon className="h-5 w-5" />
                </a>
              </li>
            );
          })}
        </ul>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-white/60">
          <Link href="/politica-de-privacidad" className={`hover:text-white ${focus}`}>
            Política de privacidad
          </Link>
          <Link href="/cambios-y-devoluciones" className={`hover:text-white ${focus}`}>
            Cambios y devoluciones
          </Link>
          <p>© 2026 SIMA. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
