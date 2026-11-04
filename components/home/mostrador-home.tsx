import Link from "next/link";
import { HeroVideo } from "@/components/home/hero-video";
import { ProductTile } from "@/components/home/product-tile";
import { mostradorProducts } from "@/lib/home-picks";

const aisles = [
  { label: "Hombre", href: "/hombre" },
  { label: "Mujer", href: "/mujer" },
  { label: "Calzado", href: "/zapatillas" },
] as const;

export function MostradorHome() {
  return (
    <section className="grid bg-background text-white lg:h-[calc(100svh-4.75rem)] lg:grid-cols-2 lg:overflow-hidden">
      <div className="relative min-h-[52svh] overflow-hidden lg:min-h-0">
        <HeroVideo className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-black/20" />
        <p className="absolute inset-x-0 bottom-0 p-8 font-display text-[clamp(1.7rem,2.4vw,2.35rem)] font-bold uppercase leading-[1.05] tracking-[-0.03em] lg:p-10">
          Equipamos a personas que eligen crecer cada día.
        </p>
      </div>

      <div className="flex min-h-0 flex-col px-5 py-8 sm:px-8 lg:px-10 lg:py-8">
        <nav aria-label="Entrar a la tienda" className="flex flex-wrap gap-x-6 gap-y-2">
          {aisles.map((aisle, index) => (
            <Link
              key={aisle.href}
              href={aisle.href}
              className={`font-display text-[clamp(1.6rem,2.4vw,2rem)] uppercase leading-none tracking-[0.03em] outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white ${
                index === 0 ? "border-b border-white pb-1" : "text-white/70 hover:text-white"
              }`}
            >
              {aisle.label}
            </Link>
          ))}
        </nav>
        <div className="mt-8 grid flex-1 grid-cols-2 gap-3 sm:gap-4">
          {mostradorProducts.map((product) => (
            <ProductTile key={product.handle} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
