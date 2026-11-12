import type { Metadata } from "next";
import { NewsletterForm } from "@/components/newsletter-form";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { focusLight } from "@/components/shared/editorial";
import { socialLinks } from "@/lib/home-content";
import { catalogProduct } from "@/lib/home-picks";

export const metadata: Metadata = {
  title: "Comunidad – SIMA",
  description:
    "Tu proceso, tu disciplina, tu estilo de vida. SIMA está aquí para acompañarte.",
};

const pillars = ["Tu proceso.", "Tu disciplina.", "Tu estilo de vida."];

const lines = [
  "Se trata de sentirte mejor.",
  "De cuidar tu cuerpo.",
  "De fortalecer tu mente.",
  "De crear hábitos.",
  "De superar tus propios límites.",
  "De convertir el movimiento en una forma de vivir.",
];

const people = [
  "/sima/IMG_5024.webp",
  catalogProduct("enterizo-nova-copy").image,
  "/sima/entrenamiento-img.webp",
  catalogProduct("conjunto-adidas").image,
];

const pad = (value: number) => String(value).padStart(2, "0");
const outline = "text-transparent [-webkit-text-stroke:1.5px_white]";
const outlineInk =
  "text-transparent [-webkit-text-stroke:1px_var(--ink)] sm:[-webkit-text-stroke:1.5px_var(--ink)]";

export default function ComunidadPage() {
  return (
    <>
      <SiteHeader />
      <main className="overflow-hidden bg-background text-white">
        <section className="page-wrap pt-14 sm:pt-20 lg:pt-24">
          <h1 className="font-display text-[clamp(4rem,19.5vw,18rem)] font-bold uppercase leading-[0.8] tracking-[-0.03em]">
            Comunidad
          </h1>
        </section>

        <section className="page-wrap mt-10 sm:mt-14">
          <div className="relative aspect-4/5 overflow-hidden bg-card sm:aspect-video lg:aspect-21/9">
            <video
              className="absolute inset-0 h-full w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              src="/sima/sima-home-hero-video.mp4"
            />
            <div aria-hidden className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent" />
            <p className="absolute inset-x-0 bottom-0 p-6 font-display text-[clamp(2rem,5.6vw,5.5rem)] font-bold uppercase leading-[0.9] tracking-[-0.015em] sm:p-10">
              {pillars.map((pillar, index) => (
                <span key={pillar} className={`block ${index === pillars.length - 1 ? outline : ""}`}>
                  {pillar}{" "}
                </span>
              ))}
            </p>
          </div>
          <div className="grid gap-8 py-14 sm:py-16 lg:grid-cols-12 lg:gap-16 lg:py-24">
            <p className="font-display text-[clamp(1.75rem,3.2vw,2.75rem)] font-bold uppercase leading-[1.08] lg:col-span-5">
              SIMA está aquí para acompañarte.
            </p>
            <p className="max-w-[52ch] text-lg leading-relaxed text-white/75 lg:col-span-6 lg:col-start-7 lg:text-xl">
              Desde ese primer entrenamiento en el que no sabes por dónde empezar, hasta el día en que
              miras atrás y reconoces todo lo que has construido.
            </p>
          </div>
        </section>

        <section className="bg-cream text-ink">
          <div className="page-wrap py-20 sm:py-24 lg:py-32">
            <p className="max-w-[20ch] font-display text-[clamp(2rem,4.6vw,4.25rem)] font-bold uppercase leading-[0.95] tracking-[-0.015em] text-ink/40">
              Porque no se trata solamente de verte mejor.
            </p>
            <ul className="mt-14 border-t-2 border-ink sm:mt-20">
              {lines.map((line, index) => {
                const isLast = index === lines.length - 1;
                return (
                <li
                  key={line}
                  className={`grid grid-cols-[2.5rem_1fr] items-baseline gap-3 py-5 sm:grid-cols-[5rem_1fr] sm:py-7 lg:py-8 ${
                    isLast ? "bg-ink px-4 text-cream sm:px-6" : "border-b border-ink/25"
                  }`}
                >
                  <span
                    aria-hidden
                    className={`font-display text-xs font-bold tracking-[0.18em] ${isLast ? "accent-text" : "text-ink/50"}`}
                  >
                    {pad(index + 1)}
                  </span>
                  <span
                    className={`font-display text-[clamp(1.75rem,5.8vw,6rem)] font-bold uppercase leading-none tracking-[-0.02em] ${
                      index % 2 === 1 && !isLast ? outlineInk : ""
                    }`}
                  >
                    {line}
                  </span>
                </li>
                );
              })}
            </ul>
          </div>
        </section>

        <section className="page-wrap grid gap-14 py-20 sm:py-24 lg:grid-cols-12 lg:items-center lg:gap-16 lg:py-32">
          <p className="lg:col-span-5">
            <span className="block font-display text-[clamp(2.25rem,4.4vw,4rem)] font-bold uppercase leading-[0.95] tracking-[-0.015em]">
              La comunidad la hacen personas reales que entrenan,{" "}
              <span className="accent-text">no solo atletas.</span>
            </span>{" "}
            <span className="mt-8 block max-w-[40ch] text-lg leading-relaxed text-white/70">
              Distintas formas de vivir el deporte, con las que te puedes identificar.
            </span>
          </p>
          <ul aria-hidden className="grid grid-cols-2 gap-3 sm:gap-4 lg:col-span-7">
            {people.map((image, index) => (
              <li
                key={image}
                className={`relative aspect-4/5 overflow-hidden bg-card ${index % 2 === 1 ? "translate-y-10 sm:translate-y-16" : ""}`}
              >
                <img src={image} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
              </li>
            ))}
          </ul>
        </section>

        <section className="border-y border-white/15">
          <p className="page-wrap flex flex-col gap-6 py-16 sm:gap-8 sm:py-20 lg:flex-row lg:items-end lg:justify-between lg:py-24">
            <span className="block font-display text-[clamp(5rem,22vw,20rem)] font-bold uppercase leading-[0.8] tracking-[-0.03em]">
              SIMA.
            </span>{" "}
            <span className="block max-w-[20ch] font-display text-[clamp(1.5rem,3vw,2.75rem)] font-bold uppercase leading-[1.05] text-white/60 lg:pb-2">
              Un lugar donde comienza un estilo de vida deportivo.
            </span>
          </p>
        </section>

        <section className="bg-cream text-ink">
          <div className="page-wrap grid gap-14 py-20 sm:py-24 lg:grid-cols-12 lg:gap-16 lg:py-32">
            <div className="lg:col-span-5">
              <h2 className="font-display text-[clamp(3.5rem,9vw,8.5rem)] font-bold uppercase leading-[0.85] tracking-[-0.03em]">
                Sé <span className={outlineInk}>parte</span>
              </h2>
              <p className="mt-8 max-w-[44ch] text-base leading-relaxed sm:text-lg">
                Síguenos en nuestras redes y suscríbete para recibir contenido exclusivo. La disciplina
                te lleva donde la motivación no puede, y es más fácil recorrer ese camino en compañía.
              </p>
              <NewsletterForm tone="ink" id="comunidad-email" />
            </div>
            <ul className="border-t-2 border-ink lg:col-span-6 lg:col-start-7 lg:self-end">
              {socialLinks.map((item, index) => (
                <li key={item.href} className="border-b border-ink/25">
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className={`group grid grid-cols-[2.5rem_1fr_auto] items-center gap-3 py-5 transition-colors hover:bg-ink hover:text-cream sm:grid-cols-[4rem_1fr_auto] sm:px-4 sm:py-6 ${focusLight}`}
                  >
                    <span aria-hidden className="font-display text-xs font-bold tracking-[0.18em] opacity-50">
                      {pad(index + 1)}
                    </span>
                    <span className="font-display text-[clamp(1.75rem,3.6vw,3.25rem)] font-bold uppercase leading-none">
                      {item.name}
                    </span>
                    <span
                      aria-hidden
                      className="pr-1 text-2xl transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 sm:text-3xl"
                    >
                      ↗
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
