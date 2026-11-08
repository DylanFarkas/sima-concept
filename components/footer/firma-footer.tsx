import { FooterLink } from "@/components/footer/footer-link";
import { SimaMark } from "@/components/sima-mark";
import { footerColumns, socialLinks } from "@/lib/home-content";
import { NewsletterForm } from "@/components/newsletter-form";

const focus =
  "outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white";

// Inter Bold a 1000 unidades: cada x deja 180 unidades de aire entre la tinta de una letra y la siguiente.
const wordmark = [
  { char: "S", x: -41 },
  { char: "I", x: 686 },
  { char: "M", x: 1015 },
  { char: "A", x: 2037 },
];

export function FirmaFooter() {
  return (
    <footer className="border-t border-white/15 bg-background text-white">
      <div className="page-wrap pt-16 lg:pt-24">
        <div className="grid grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-4">
          {footerColumns.map((column) => (
            <div key={column.title} className="border-l border-white/15 pl-5">
              <p className="font-display text-[11px] uppercase tracking-[0.2em] text-white/45">
                {column.title}
              </p>
              <ul className="mt-5 space-y-2.5">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <FooterLink
                      href={link.href}
                      className={`text-[15px] text-white/80 transition-colors hover:text-white lg:text-[17px] ${focus}`}
                    >
                      {link.label}
                    </FooterLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="border-l border-white/15 pl-5">
            <p className="font-display text-[11px] uppercase tracking-[0.2em] text-white/45">
              Síguenos
            </p>
            <ul className="mt-5 space-y-2.5">
              {socialLinks.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className={`group text-[15px] text-white/80 transition-colors hover:text-white lg:text-[17px] ${focus}`}
                  >
                    {item.name}{" "}
                    <span
                      aria-hidden
                      className="inline-block text-white/35 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white"
                    >
                      ↗
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 grid gap-10 border-t border-white/15 pt-10 lg:mt-20 lg:grid-cols-2 lg:items-end lg:gap-16 lg:pt-12">
          <p className="max-w-[22ch] font-display text-[clamp(1.5rem,2.4vw,2rem)] font-bold uppercase leading-[0.95]">
            Disciplina te lleva <span className="text-white/35">donde la motivación no puede.</span>
          </p>
          <div className="lg:justify-self-end lg:w-full lg:max-w-135">
            <p className="text-lg font-bold leading-snug">
              Inspiración, consejos y novedades: contenido exclusivo para tu mejor versión.
            </p>
            <NewsletterForm tone="solid" />
          </div>
        </div>
      </div>

      <div className="page-wrap mt-16 max-w-360 lg:mt-24">
        <div className="flex items-end gap-3 sm:gap-5" aria-hidden>
          <SimaMark className="accent-text mb-1 h-8 w-auto shrink-0 sm:h-12" />
          <svg viewBox="0 -740 2760 752" className="block h-auto min-w-0 flex-1 overflow-visible">
          <text fontSize={1000} className="fill-white font-sans font-bold">
            {wordmark.map((letter) => (
              <tspan key={letter.char} x={letter.x} y={0}>
                {letter.char}
              </tspan>
            ))}
          </text>
          </svg>
        </div>
        <p className="accent-text mt-3 text-[11px] font-bold uppercase tracking-[0.32em] text-white/55">Lifestyle</p>
      </div>

      <div className="page-wrap flex flex-col gap-3 pb-8 pt-8 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 SIMA. Todos los derechos reservados.</p>
        <p className="font-display uppercase tracking-[0.2em]">Disciplina · Propósito · Fe</p>
        <a href="#" className={`transition-colors hover:text-white ${focus}`}>
          Volver arriba ↑
        </a>
      </div>
    </footer>
  );
}
