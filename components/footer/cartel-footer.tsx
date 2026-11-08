import type { ReactNode } from "react";
import { FooterLink } from "@/components/footer/footer-link";
import { SimaMark } from "@/components/sima-mark";
import { footerColumns, socialLinks, trustItems, whatsappHref, whatsappNumber } from "@/lib/home-content";
import { NewsletterForm } from "@/components/newsletter-form";

const focus =
  "outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink";

const linkClass = `text-[15px] font-bold transition-opacity hover:opacity-60 ${focus}`;

// Oswald Bold a 1000 unidades, 40 de aire entre letras.
// La tinta va de x 0 a 1842 y de y -821 a 11; el marco deja aire para que la S no pierda las curvas.
const wordmark = [
  { char: "S", x: -42 },
  { char: "I", x: 424 },
  { char: "M", x: 647 },
  { char: "A", x: 1313 },
];
const frame = { x: -36, y: -857, width: 1914, height: 904 };
const bleed = { x: frame.x - 20, y: frame.y - 20, width: frame.width + 40, height: frame.height + 40 };

function Column({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div>
      <p className="font-display text-sm font-bold uppercase tracking-[0.2em]">{title}</p>
      <ul className="mt-5 space-y-3">{children}</ul>
    </div>
  );
}

export function CartelFooter() {
  const whatsapp = socialLinks.find((item) => item.icon === "whatsapp");

  return (
    <footer className="bg-cream text-ink">
      <div className="page-wrap pt-16 lg:pt-24">
        <div className="grid grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-4 lg:gap-y-16">
          {footerColumns.map((column) => (
            <Column key={column.title} title={column.title}>
              {column.links.map((link) => (
                <li key={link.label}>
                  <FooterLink href={link.href} className={linkClass}>
                    {link.label}
                  </FooterLink>
                </li>
              ))}
            </Column>
          ))}

          <div className="col-span-2 lg:col-span-1">
            <p className="font-display text-sm font-bold uppercase tracking-[0.2em]">Suscríbete</p>
            <p className="mt-5 max-w-[40ch] text-[15px] font-bold leading-snug">
              Inspiración, consejos y novedades. Recibe contenido exclusivo para tu mejor versión.
            </p>
            <NewsletterForm tone="ink" />
          </div>

          <Column title="Escríbenos">
            {whatsapp ? (
              <li>
                <a href={whatsapp.href} target="_blank" rel="noreferrer" className={linkClass}>
                  WhatsApp <span className="whitespace-nowrap">{whatsappNumber}</span>
                </a>
              </li>
            ) : null}
            <li>
              <a href={whatsappHref} target="_blank" rel="noreferrer" className={linkClass}>
                Contacto
              </a>
            </li>
          </Column>

          <Column title="Síguenos">
            {socialLinks
              .filter((item) => item.icon !== "whatsapp")
              .map((item) => (
                <li key={item.href}>
                  <a href={item.href} target="_blank" rel="noreferrer" className={linkClass}>
                    {item.name}
                  </a>
                </li>
              ))}
          </Column>

          <Column title="Compra tranquilo">
            {trustItems.map((item) => (
              <li key={item.title} className="font-display text-[15px] font-bold uppercase tracking-[0.03em]">
                {item.title.replace("\n", " ")}
              </li>
            ))}
          </Column>

          <div className="flex items-start">
            <p className="font-display text-2xl font-bold uppercase leading-[1.05] lg:text-[1.75rem]">
              Disciplina te lleva donde la motivación no puede.
            </p>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-2 border-t border-ink/15 pt-6 text-xs text-ink/60 sm:flex-row sm:items-center sm:justify-between lg:mt-20">
          <p>© 2026 SIMA. Todos los derechos reservados.</p>
          <p>Hecho con propósito. Diseñado para crecer.</p>
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-340 items-end gap-4 lg:mt-14">
        <SimaMark className="mb-2 hidden h-12 w-auto shrink-0 sm:block" />
        <div className="min-w-0 flex-1">
      <div
        className="relative overflow-hidden bg-ink"
        style={{ aspectRatio: `${frame.width} / ${frame.height}` }}
        aria-hidden
      >
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          src="/sima/sima-home-hero-video.mp4"
        />
        <svg
          viewBox={`${frame.x} ${frame.y} ${frame.width} ${frame.height}`}
          className="absolute inset-0 h-full w-full overflow-visible"
        >
          <defs>
            <mask id="cartel-wordmark" maskUnits="userSpaceOnUse" {...bleed}>
              <rect {...bleed} fill="white" />
              <text fontSize={1000} fill="black" className="font-display font-bold">
                {wordmark.map((letter) => (
                  <tspan key={letter.char} x={letter.x} y={0}>
                    {letter.char}
                  </tspan>
                ))}
              </text>
            </mask>
          </defs>
          <rect {...bleed} className="fill-cream" mask="url(#cartel-wordmark)" />
        </svg>
      </div>
          <p className="mt-3 text-[11px] font-bold uppercase tracking-[0.32em]">Lifestyle</p>
        </div>
      </div>
    </footer>
  );
}
