import Link from "next/link";
import { heroValues } from "@/lib/home-content";
import { formatPrice, portadaProduct } from "@/lib/home-picks";
import { HeroVideo } from "@/components/home/hero-video";

export function PortadaHome() {
  const product = portadaProduct;

  return (
    <section className="relative min-h-[calc(100svh-4.75rem)] overflow-hidden bg-ink text-white">
      <HeroVideo className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/45 to-black/10" />

      <p className="absolute right-8 top-10 z-10 hidden font-display text-xs font-bold uppercase tracking-[0.28em] [writing-mode:vertical-rl] lg:block">
        Disciplina · Propósito · Fe
      </p>

      <div className="page-wrap relative z-10 flex min-h-[calc(100svh-4.75rem)] flex-col justify-end pb-24 pt-16">
        <h1 className="font-display text-[clamp(3rem,7.2vw,5.2rem)] font-bold uppercase leading-none mb-5">
          DISCIPLINA
          <br />
          PROPÓSITO. FE.
        </h1>
        <p className="max-w-56 pt-1 text-sm leading-[1.6]">
          Equipamos a personas que eligen
          <br />
          crecer cada día.
        </p>
        <Link
          href="/nosotros"
          className="mt-5 w-fit inline-flex items-center justify-center bg-white px-6 py-5 text-sm text-ink"
        >
          CONOCE MÁS
        </Link>
      </div>
    </section>
  );
}
