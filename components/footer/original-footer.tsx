import { FooterLink } from "@/components/footer/footer-link";
import { SimaMark } from "@/components/sima-mark";
import { footerLinks, socialLinks } from "@/lib/home-content";
import {
  IconFacebook,
  IconInstagram,
  IconTiktok,
} from "@/components/icons";
import { NewsletterForm } from "@/components/newsletter-form";

const socialIcons = {
  facebook: IconFacebook,
  instagram: IconInstagram,
  tiktok: IconTiktok,
} as const;

export function OriginalFooter() {
  return (
    <footer className="border-t border-white/15 bg-background text-white">
      <div className="page-wrap grid gap-10 py-12 lg:grid-cols-[1fr_auto_1fr] lg:items-start lg:gap-8 lg:py-14">
        <div>
          <p className="font-display text-xs font-bold uppercase tracking-[0.03em]">
            INSPIRACIÓN, CONSEJOS Y NOVEDADES.
          </p>
          <p className="mt-1.5 max-w-116.75 text-sm text-muted">
            Recibe contenido exclusivo para tu mejor versión.
          </p>
          <NewsletterForm />
        </div>

        <div className="flex flex-col items-center text-center lg:px-8">
          <div className="flex items-center gap-3">
            <SimaMark className="accent-text h-8 w-auto shrink-0" />
            <p className="pr-[0.42em] font-sans text-[2rem] font-bold uppercase leading-none tracking-[0.42em] text-white">
              SIMA
            </p>
          </div>
          <p className="accent-text mt-2 text-[10px] font-bold uppercase tracking-[0.28em] text-white/60">Lifestyle</p>
          <p className="mt-3 font-display text-xs font-bold uppercase leading-[1.2] tracking-[0.03em] text-muted">
            DISCIPLINA TE LLEVA
            <br />
            DONDE LA MOTIVACIÓN NO PUEDE.
          </p>
          <ul className="mt-4 flex items-center gap-3">
            {socialLinks.map((item) => {
              if (item.icon === "whatsapp") {
                return (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={item.label}
                      className="font-display text-xs font-bold uppercase tracking-[0.03em] text-white"
                    >
                      Wa
                    </a>
                  </li>
                );
              }

              const Icon = socialIcons[item.icon];
              return (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={item.label}
                    className="block text-white"
                  >
                    <Icon className="h-6 w-6" />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="flex gap-7.5 lg:ml-auto lg:w-95 lg:justify-end">
          <div className="w-47">
            <p className="font-display text-xs font-bold uppercase tracking-[0.03em]">
              ENLACES
            </p>
            <ul className="mt-3 space-y-2.25">
              {footerLinks.enlaces.map((link) => (
                <li key={link.label}>
                  <FooterLink href={link.href} className="text-sm text-white/70 hover:text-white">
                    {link.label}
                  </FooterLink>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-40.5">
            <p className="font-display text-xs font-bold uppercase tracking-[0.03em]">
              AYUDA
            </p>
            <ul className="mt-3 space-y-2.25">
              {footerLinks.ayuda.map((link) => (
                <li key={link.label}>
                  <FooterLink href={link.href} className="text-sm text-white/70 hover:text-white">
                    {link.label}
                  </FooterLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/15">
        <div className="page-wrap flex flex-col gap-2 py-6 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 SIMA. Todos los derechos reservados.</p>
          <p className="sm:text-right">Hecho con propósito. Diseñado para crecer.</p>
        </div>
      </div>
    </footer>
  );
}
