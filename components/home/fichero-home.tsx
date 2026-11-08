import Link from "next/link";
import { HeroVideo } from "@/components/home/hero-video";
import { ProductTile } from "@/components/home/product-tile";
import { ficheroIndex, ficheroProducts } from "@/lib/home-picks";

export function FicheroHome() {
  return (
    <section className="grid bg-background text-white lg:h-[calc(100svh-4.75rem)] lg:grid-cols-[minmax(260px,380px)_1fr] lg:overflow-hidden">
      <div className="border-b border-white/15 px-5 py-8 sm:px-8 lg:border-b-0 lg:border-r lg:px-10 lg:py-10">
        <p className="max-w-[28ch] text-sm leading-relaxed text-white/80">
          Equipamos a personas que eligen crecer cada día.
        </p>
        <p className="mt-2 max-w-[32ch] text-sm font-bold leading-snug">
          Disciplina te lleva donde la motivación no puede.
        </p>
        <nav aria-label="Tipos" className="mt-8">
          <ul>
            {ficheroIndex.map((item, index) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`block py-1 font-display text-[clamp(1.7rem,2.6vw,2.35rem)] uppercase leading-none tracking-[0.02em] outline-none focus-visible:outline focus-visible:outline-offset-4 focus-visible:outline-white ${
                    index === 0 ? "text-white" : "text-white/45 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="flex flex-col gap-4 px-5 py-6 sm:px-8 lg:px-8 lg:py-8">
        <div className="relative h-44 overflow-hidden sm:h-52">
          <HeroVideo className="absolute inset-0 h-full w-full object-cover" />
          <p className="absolute bottom-3 left-4 font-display text-xs font-bold uppercase tracking-[0.22em]">
            Hombre
          </p>
        </div>
        <div className="grid flex-1 grid-cols-2 gap-3 md:grid-cols-3">
          {ficheroProducts.map((product) => (
            <ProductTile key={product.handle} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
