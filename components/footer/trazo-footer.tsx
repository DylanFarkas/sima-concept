import { FooterLink } from "@/components/footer/footer-link";
import { SimaMark } from "@/components/sima-mark";
import { footerColumns, socialLinks } from "@/lib/home-content";
import { NewsletterForm } from "@/components/newsletter-form";

const focus =
  "outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white";

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
                    <FooterLink
                      href={link.href}
                      className={`text-sm text-white/65 transition-colors hover:text-white ${focus}`}
                    >
                      {link.label}
                    </FooterLink>
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

      <div className="page-wrap pb-6 pt-10 sm:pt-14" aria-hidden>
        <p className="flex justify-between font-sans text-[min(34vw,34rem)] font-bold uppercase leading-none *:[text-box:trim-both_cap_alphabetic]">
          <span>S</span>
          <span>I</span>
          <span>M</span>
          <span>A</span>
        </p>
      </div>

      <div className="page-wrap grid grid-cols-1 items-end gap-4 py-5 text-xs text-white/55 sm:grid-cols-3">
        <div className="flex flex-col items-start gap-2">
          <SimaMark className="h-5 w-auto text-cream sm:h-6" />
          <p className="text-[9px] font-bold uppercase tracking-[0.32em] text-white/80 sm:text-[10px]">
            Lifestyle
          </p>
          <p className="mt-1">© 2026 SIMA. Todos los derechos reservados.</p>
        </div>
        <p className="font-display font-bold uppercase tracking-[0.28em] sm:text-center sm:self-center">
          Disciplina · Propósito · Fe
        </p>
        <a href="#" className={`transition-colors hover:text-white sm:justify-self-end sm:self-center ${focus}`}>
          Volver arriba ↑
        </a>
      </div>
    </footer>
  );
}
