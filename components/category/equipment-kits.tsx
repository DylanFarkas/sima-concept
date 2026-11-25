import Link from "next/link";
import type { Product } from "@/lib/catalog";
import { formatPrice } from "@/lib/home-picks";
import { SectionTitle } from "@/components/shared/editorial";

export type EquipmentKit = {
  key: string;
  label: string;
  href: string;
  image: string;
  tagline: string;
  text: string;
  count: number;
  from: number;
  picks: Product[];
};

type Props = { title: string; text: string; kits: EquipmentKit[] };

export function EquipmentKits({ title, text, kits }: Props) {
  return (
    <section className="bg-background pb-4 pt-20 text-white lg:pt-28">
      <div className="page-wrap">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <SectionTitle>{title}</SectionTitle>
          <p className="max-w-[36ch] text-sm leading-relaxed text-white/60 sm:text-right">{text}</p>
        </div>

        <ul className="mt-10 grid gap-3 lg:mt-12 lg:grid-cols-2">
          {kits.map((kit, index) => (
            <li key={kit.key}>
              <KitPanel kit={kit} index={index} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function KitPanel({ kit, index }: { kit: EquipmentKit; index: number }) {
  return (
    <article className="group relative isolate flex aspect-4/5 flex-col justify-between overflow-hidden bg-card sm:aspect-4/3 lg:aspect-square xl:aspect-[6/5]">
      <img
        src={kit.image}
        alt=""
        loading="lazy"
        className="absolute inset-0 -z-10 h-full w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
      />
      <span className="absolute inset-0 -z-10 bg-linear-to-t from-black via-black/45 to-black/10" />
      <span className="absolute inset-0 -z-10 bg-black/0 transition-colors duration-500 group-hover:bg-black/15" />

      <header className="flex items-start justify-between p-5 lg:p-7">
        <span
          aria-hidden
          className="accent-stroke font-display text-[clamp(2.75rem,5vw,4.5rem)] font-bold leading-none text-transparent [-webkit-text-stroke-width:1.5px]"
        >
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="border border-white/25 bg-black/25 px-3 py-1.5 font-display text-[11px] font-bold uppercase tracking-[0.18em] text-white/85 backdrop-blur-md">
          {kit.count} productos
        </span>
      </header>

      <div className="p-5 lg:p-7">
        <p className="accent-text font-display text-[11px] font-bold uppercase tracking-[0.24em]">
          {kit.tagline}
        </p>
        <h3 className="mt-3 font-display text-[clamp(2.75rem,6vw,5.5rem)] font-bold uppercase leading-[0.86] tracking-tight">
          <Link
            href={kit.href}
            className="outline-none after:absolute after:inset-0 after:z-0 focus-visible:after:outline focus-visible:after:outline-2 focus-visible:after:-outline-offset-4 focus-visible:after:outline-white"
          >
            {kit.label}
          </Link>
        </h3>
        <p className="mt-4 max-w-[40ch] text-sm leading-relaxed text-white/75 lg:text-[15px]">{kit.text}</p>

        <div className="mt-6 flex flex-wrap items-end justify-between gap-5 border-t border-white/15 pt-5">
          <ul className="relative z-10 flex gap-2" aria-label={`Destacados de ${kit.label}`}>
            {kit.picks.map((product, pick) => (
              <li
                key={product.handle}
                className="relative translate-y-0 transition-[translate,opacity] duration-500 lg:translate-y-2 lg:opacity-80 lg:group-hover:translate-y-0 lg:group-hover:opacity-100"
                style={{ transitionDelay: `${pick * 60}ms` }}
              >
                <Link
                  href={`/producto/${product.handle}`}
                  className="peer relative block size-14 overflow-hidden bg-white outline-none ring-1 ring-white/20 transition-transform duration-300 hover:-translate-y-1 focus-visible:ring-2 focus-visible:ring-white sm:size-16"
                >
                  <img src={product.image} alt={product.title} loading="lazy" className="h-full w-full object-cover" />
                </Link>
                <span className="pointer-events-none absolute bottom-full left-0 mb-3 hidden whitespace-nowrap bg-white px-3 py-2 text-ink opacity-0 transition-opacity peer-hover:opacity-100 peer-focus-visible:opacity-100 lg:block">
                  <span className="block text-xs font-semibold">{product.title}</span>
                  <span className="block font-display text-[11px] font-bold tracking-[0.04em] text-ink/60">
                    {formatPrice(product.price)}
                  </span>
                </span>
              </li>
            ))}
          </ul>

          <span aria-hidden className="flex items-center gap-4">
            <span className="leading-tight sm:text-right">
              <span className="block text-[11px] uppercase tracking-[0.14em] text-white/55">Desde</span>
              <span className="block font-display text-lg font-bold tracking-[0.02em]">{formatPrice(kit.from)}</span>
            </span>
            <span className="grid size-12 place-items-center bg-white text-ink transition-transform duration-500 group-hover:translate-x-1 group-hover:bg-cream">
              <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="square" />
              </svg>
            </span>
          </span>
        </div>
      </div>
    </article>
  );
}
