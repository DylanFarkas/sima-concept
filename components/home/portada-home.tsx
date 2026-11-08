import Link from "next/link";
import { heroValues } from "@/lib/home-content";
import { HeroVideo } from "@/components/home/hero-video";

export function PortadaHome() {
  return (
    <section className="relative min-h-[calc(100svh-4.75rem)] overflow-hidden bg-ink text-white">
      <HeroVideo className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/45 to-black/10" />

      <div className="absolute right-8 top-1/2 z-10 hidden -translate-y-1/2 items-center gap-4 lg:flex">
        <span className="accent-fill h-28 w-px bg-white" />
        <p className="font-display text-[12px] font-bold uppercase leading-[1.35] tracking-[0.03em]">
          {heroValues.map((word) => (
            <span key={word} className="block">
              {word}
            </span>
          ))}
        </p>
      </div>

      <div className="page-wrap relative z-10 flex min-h-[calc(100svh-4.75rem)] flex-col justify-end pb-24 pt-16">
        <h1 className="mt-4 font-display text-[clamp(3rem,7.2vw,5.2rem)] font-bold uppercase leading-none">
          DISCIPLINA
          <br />
          PROPÓSITO. FE.
        </h1>
        <p className="mt-5 max-w-56 text-sm leading-[1.6]">
          Equipamos a personas que eligen
          <br />
          crecer cada día.
        </p>
        <Link
          href="/nosotros"
          className="mt-5 inline-flex w-fit items-center justify-center bg-white px-6 py-5 text-sm text-ink"
        >
          CONOCE MÁS
        </Link>
      </div>
    </section>
  );
}
