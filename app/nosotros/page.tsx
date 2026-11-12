import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { ButtonLabel, focusDark } from "@/components/shared/editorial";
import { ValuesTicker } from "@/components/shared/values-ticker";
import { catalogProduct } from "@/lib/home-picks";

export const metadata: Metadata = {
  title: "Nosotros – SIMA",
  description:
    "En SIMA queremos acompañar cada camino: ropa, calzado y orientación para convertir el deporte en parte de tu vida.",
};

const startingPoints = [
  { text: "Algunos están comenzando.", image: "/sima/IMG_5024.webp" },
  { text: "Otros quieren volver a entrenar.", image: "/sima/entrenamiento-img.webp" },
  {
    text: "Otros llevan años haciendo del deporte parte de su vida.",
    image: catalogProduct("conjunto-adidas").image,
  },
];

const paths = [
  { label: "Ropa", image: "/sima/camisa-basic-mujer.webp" },
  { label: "Calzado", image: catalogProduct("asics-ff-turbo-hombre-1").image },
  { label: "Accesorios", image: "/sima/hidratacion-img.webp" },
  { label: "Tecnología", image: "/sima/tecnologia-img.webp" },
];

const beliefSteps = [
  "cuando entiendes lo que haces,",
  "encuentras las herramientas adecuadas",
  "y construyes hábitos con disciplina,",
];

const eyebrow = "font-display text-xs font-bold uppercase tracking-[0.2em]";

export default function NosotrosPage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-background text-white">
        <section className="relative isolate flex min-h-[calc(100svh-74px)] items-end overflow-hidden">
          <video
            className="absolute inset-0 -z-20 h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            src="/sima/sima-category-hero-video.mp4"
          />
          <div
            aria-hidden
            className="absolute inset-0 -z-10 bg-linear-to-t from-background via-background/55 to-background/20"
          />
          <div className="page-wrap w-full pb-14 pt-32 sm:pb-20 lg:pb-24">
            <p className={`${eyebrow} flex items-center gap-4 text-white/70`}>
              Nosotros
            </p>
            <h1 className="mt-8 font-display text-[clamp(2.5rem,10.5vw,10rem)] font-bold uppercase leading-none tracking-tight">
              <span className="sm:block">Queremos</span>{" "}
              <span className="sm:block">acompañarte en el</span>{" "}
              <span className="accent-stroke block text-transparent [-webkit-text-stroke:1.5px_white]">
                proceso
              </span>
            </h1>
          </div>
        </section>

        <section className="bg-cream text-ink">
          <div className="page-wrap py-20 sm:py-24 lg:py-32">
            <p className="grid gap-12 lg:grid-cols-12 lg:gap-16">
              <span className="block max-w-[22ch] font-display text-[clamp(2.25rem,5.4vw,5rem)] font-bold uppercase leading-[0.95] tracking-[-0.015em] lg:col-span-9">
                Sabemos que cada persona tiene un punto de partida diferente.
              </span>
              <span className="grid gap-10 sm:grid-cols-3 sm:gap-5 lg:col-span-12">
                {startingPoints.map((point, index) => (
                  <span key={point.text} className="flex flex-col">
                    <span className="relative block aspect-4/3 overflow-hidden bg-ink/10 sm:aspect-4/5">
                      <img
                        src={point.image}
                        alt=""
                        loading="lazy"
                        className="absolute inset-0 h-full w-full object-cover grayscale-[0.25]"
                      />
                      <span
                        aria-hidden
                        className="absolute left-4 top-4 bg-cream px-2.5 py-1.5 font-display text-xs font-bold tracking-[0.18em]"
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </span>
                    <span className="mt-5 block border-t-2 border-ink pt-5 font-display text-[clamp(1.375rem,2.2vw,2rem)] font-bold uppercase leading-[1.02] sm:pr-8">
                      {" "}
                      {point.text}
                    </span>
                  </span>
                ))}
              </span>
            </p>
          </div>
        </section>

        <section className="border-b border-white/15">
          <div className="page-wrap grid gap-14 py-20 sm:py-24 lg:grid-cols-12 lg:gap-16 lg:py-32">
            <div className="lg:col-span-5 lg:self-center">
              <h2 className="font-display text-[clamp(2.5rem,5.2vw,5rem)] font-bold uppercase leading-[0.92] tracking-[-0.02em]">
                En SIMA queremos acompañar{" "}
                <span className="text-white/35">cada uno de esos caminos.</span>
              </h2>
              <p className="mt-10 max-w-[46ch] text-lg leading-relaxed text-white/70">
                Queremos que encuentres en un solo lugar ropa, calzado, accesorios, tecnología y
                productos deportivos,{" "}
                <span className="text-white">
                  pero también la orientación necesaria para tomar mejores decisiones.
                </span>
              </p>
            </div>
            <ul aria-hidden className="grid grid-cols-2 gap-3 sm:gap-4 lg:col-span-7">
              {paths.map((path, index) => (
                <li
                  key={path.label}
                  className={`relative overflow-hidden bg-card ${
                    index % 2 === 1 ? "aspect-4/5 translate-y-8 sm:translate-y-14" : "aspect-4/5"
                  }`}
                >
                  <img
                    src={path.image}
                    alt=""
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <span className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/70 to-transparent px-4 pb-4 pt-12 font-display text-sm font-bold uppercase tracking-[0.14em] sm:px-5 sm:pb-5 sm:text-base">
                    {path.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section>
          <div className="page-wrap py-24 sm:py-28 lg:py-36">
            <p>
              <span className="accent-text block font-display text-[clamp(1.25rem,2vw,1.75rem)] font-bold uppercase tracking-[0.08em]">
                Porque creemos que
              </span>
              <span className="mt-10 block border-t border-white/15">
                {beliefSteps.map((step, index) => (
                  <span
                    key={step}
                    className="grid grid-cols-[3rem_1fr] items-baseline gap-4 border-b border-white/15 py-6 sm:grid-cols-[5rem_1fr] sm:py-8"
                  >
                    <span aria-hidden className="font-display text-xs font-bold tracking-[0.18em] text-white/40">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="font-display text-[clamp(1.75rem,4.2vw,3.75rem)] font-bold uppercase leading-none tracking-[-0.01em] text-white/80">
                      {" "}
                      {step}
                    </span>
                  </span>
                ))}
              </span>
              <span className="mt-14 block max-w-[22ch] font-display text-[clamp(2.5rem,7.2vw,7rem)] font-bold uppercase leading-[1.02] tracking-tight sm:mt-20">
                {" "}
                el deporte deja de ser una obligación y comienza a convertirse en{" "}
                <span className="accent-stroke text-transparent [-webkit-text-stroke:1.5px_white]">
                  parte de tu vida.
                </span>
              </span>
            </p>
            <Link href="/comunidad" className={`group mt-14 inline-flex sm:mt-16 ${focusDark}`}>
              <ButtonLabel>Únete a la comunidad</ButtonLabel>
            </Link>
          </div>
        </section>

        <section className="overflow-hidden bg-cream text-ink">
          <ValuesTicker />
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
