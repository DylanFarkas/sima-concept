import Link from "next/link";
import type { ReactNode } from "react";
import type { Product } from "@/lib/catalog";
import { aboutValues } from "@/lib/home-content";
import {
  audienceTiles,
  basicsCollage,
  campaignPair,
  formatPrice,
  gearTiles,
  lookProducts,
  selectionProducts,
  shoeShowcase,
} from "@/lib/home-picks";
import { LookSpotlight } from "@/components/home/look-spotlight";
import { Rail } from "@/components/home/rail";
import { SelectionIndex, type IndexItem } from "@/components/home/selection-index";
import { TrustBar } from "@/components/home/trust-bar";

const focusDark =
  "outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white";
const focusLight =
  "outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink";

export function HomeRest() {
  return (
    <>
      <AudienceSection />
      <SelectionSection />
      <CampaignSection />
      <ShoeSection />
      <BasicsSection />
      <LookSection />
      <GearSection />
      <ManifestoSection />
      <TrustBar />
    </>
  );
}

function SectionTitle({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <h2
      className={`font-display text-[clamp(2rem,4.2vw,3.5rem)] font-bold uppercase leading-[0.95] tracking-[-0.01em] ${className}`}
    >
      {children}
    </h2>
  );
}

function Photo({ product, className = "" }: { product: Product; className?: string }) {
  return (
    <img
      src={product.image}
      alt=""
      loading="lazy"
      className={`absolute inset-0 h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.04] ${className}`}
    />
  );
}

function ButtonLabel({ children, tone = "light" }: { children: ReactNode; tone?: "light" | "dark" }) {
  return (
    <span
      className={`inline-flex items-center justify-center px-5 py-3.5 text-xs font-bold uppercase tracking-[0.08em] transition-colors ${
        tone === "light"
          ? "bg-white text-ink group-hover:bg-cream"
          : "bg-ink text-white group-hover:bg-black"
      }`}
    >
      {children}
    </span>
  );
}

function AudienceSection() {
  return (
    <section id="colecciones" className="bg-background py-20 text-white lg:py-28">
      <div className="page-wrap">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <SectionTitle>Equípate para crecer</SectionTitle>
          <p className="max-w-[34ch] text-sm leading-relaxed text-white/70">
            Ropa, calzado y todo lo que necesitas para entrenar, en un solo lugar.
          </p>
        </div>
        <ul className="mt-10 grid gap-3 sm:grid-cols-3 lg:mt-12">
          {audienceTiles.map((tile) => (
            <li key={tile.href}>
              <Link
                href={tile.href}
                className={`group relative block aspect-4/5 overflow-hidden bg-card lg:aspect-3/4 ${focusDark}`}
              >
                <Photo product={tile.product} />
                <span className="absolute inset-0 bg-linear-to-t from-black/75 via-black/10 to-transparent" />
                <span className="absolute inset-x-0 bottom-0 flex flex-col items-start gap-4 p-6 lg:p-8">
                  <span>
                    <span className="block font-display text-[clamp(2rem,3.4vw,3rem)] font-bold uppercase leading-none">
                      {tile.label}
                    </span>
                    <span className="mt-2 block text-sm text-white/80">{tile.text}</span>
                  </span>
                  <ButtonLabel>Comprar</ButtonLabel>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function toIndexItem(product: Product): IndexItem {
  return {
    handle: product.handle,
    title: product.title,
    image: product.image,
    price: formatPrice(product.price),
  };
}

function SelectionSection() {
  return (
    <section className="bg-cream py-20 text-ink lg:py-28">
      <div className="page-wrap">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <SectionTitle>Selección SIMA</SectionTitle>
          <p className="max-w-[34ch] text-sm leading-relaxed text-ink/70">
            Ocho piezas elegidas para entrenar con todo. Pasa por la lista y mira cada una.
          </p>
        </div>
        <SelectionIndex items={selectionProducts.map(toIndexItem)} />
      </div>
    </section>
  );
}

function CampaignSection() {
  return (
    <section className="overflow-hidden bg-background pb-4 pt-24 text-white lg:pb-8 lg:pt-36">
      <div className="page-wrap flex flex-col gap-16 lg:gap-24">
        {campaignPair.map((item, index) => {
          const [lead, ...rest] = item.title.split(" ");
          const last = rest.pop();
          const flip = index % 2 === 1;

          return (
            <div key={item.href} className="relative">
              <Link
                href={item.href}
                className={`group flex w-fit items-center gap-[0.16em] font-display text-[clamp(2.75rem,10vw,10rem)] font-bold uppercase leading-[0.94] tracking-[-0.02em] ${flip ? "lg:ml-auto lg:flex-row-reverse" : ""} ${focusDark}`}
              >
                <span className="relative z-10 aspect-3/4 h-[1.94em] shrink-0 bg-card">
                  <span
                    className={`absolute inset-0 overflow-hidden transition-transform duration-500 ease-out group-hover:z-20 group-hover:scale-110 ${flip ? "origin-left" : "origin-right"}`}
                  >
                    <img
                      src={item.product.image}
                      alt=""
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  </span>
                </span>
                <span className={flip ? "text-right" : ""}>
                  <span className="block whitespace-nowrap">
                    {lead} {rest.join(" ")}
                  </span>
                  <span className="mt-[0.06em] block whitespace-nowrap text-transparent transition-colors duration-500 [-webkit-text-stroke:1.5px_white] group-hover:text-white">
                    {last}
                  </span>
                </span>
              </Link>
              <div
                className={`mt-6 flex max-w-[28ch] flex-col items-start gap-5 text-left lg:absolute lg:bottom-1 lg:mt-0 ${flip ? "lg:left-0" : "lg:right-0"}`}
              >
                <p className="text-sm leading-relaxed text-white/70 sm:text-base">{item.text}</p>
                <Link
                  href={item.href}
                  className={`text-sm font-bold underline decoration-1 underline-offset-[6px] ${focusDark}`}
                >
                  {item.cta}
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function ShoeSection() {
  return (
    <section className="bg-background py-20 text-white lg:py-28">
      <Rail
        title={<SectionTitle className="max-w-[16ch]">Pisada firme en cada kilómetro</SectionTitle>}
        action={
          <Link
            href="/zapatillas"
            className={`text-sm font-bold underline decoration-1 underline-offset-[6px] ${focusDark}`}
          >
            Ver calzado
          </Link>
        }
      >
        {shoeShowcase.map(({ word, product }) => (
          <li
            key={product.handle}
            className="w-[78vw] shrink-0 snap-start sm:w-[46vw] lg:w-[calc((100vw-80px-24px)/3)] 2xl:w-115"
          >
            <Link href={`/producto/${product.handle}`} className={`group block ${focusDark}`}>
              <span className="relative block aspect-4/5 overflow-hidden bg-card">
                <Photo product={product} />
                <span className="absolute inset-x-0 top-0 h-2/5 bg-linear-to-b from-black/70 to-transparent" />
                <span className="absolute inset-x-0 top-0 whitespace-nowrap px-5 pt-4 font-display text-[clamp(3.5rem,7vw,6.5rem)] font-bold uppercase leading-[0.9] tracking-[-0.02em]">
                  {word}
                </span>
              </span>
              <span className="mt-4 flex items-baseline justify-between gap-4">
                <span className="text-sm leading-snug">{product.title}</span>
                <span className="shrink-0 font-display text-base font-bold tracking-[0.03em]">
                  {formatPrice(product.price)}
                </span>
              </span>
            </Link>
          </li>
        ))}
      </Rail>
    </section>
  );
}

function CollageCell({ product, className = "" }: { product: Product; className?: string }) {
  return (
    <Link
      href={`/producto/${product.handle}`}
      aria-label={product.title}
      className={`group relative block overflow-hidden bg-cream ${focusLight} focus-visible:-outline-offset-4 ${className}`}
    >
      <Photo product={product} />
    </Link>
  );
}

function BasicsSection() {
  const [top, tall, extra] = basicsCollage.side;

  return (
    <section className="bg-cream py-20 text-ink lg:py-28">
      <div className="page-wrap">
        <div className="grid grid-cols-2 gap-0.5 border-2 border-ink bg-ink lg:h-[min(78svh,720px)] lg:grid-cols-12 lg:grid-rows-2">
          <div className="col-span-2 flex flex-col justify-end bg-cream p-6 sm:p-10 lg:col-span-4 lg:row-span-2 lg:p-12">
            <p className="font-display text-xs font-bold uppercase tracking-[0.2em]">Línea Basics</p>
            <h2 className="mt-4 font-display text-[clamp(3.5rem,7vw,6.5rem)] font-bold uppercase leading-[0.9] tracking-[-0.02em]">
              Vuelve a lo básico
            </h2>
            <p className="mt-5 max-w-[34ch] text-sm leading-relaxed sm:text-base">
              Algodón, pants y camisillas para entrenar y para el resto del día. Lo esencial, sin ruido.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/hombre?tipo=basics" className={`group ${focusLight}`}>
                <ButtonLabel tone="dark">Hombre</ButtonLabel>
              </Link>
              <Link href="/mujer?tipo=basics" className={`group ${focusLight}`}>
                <ButtonLabel tone="dark">Mujer</ButtonLabel>
              </Link>
            </div>
          </div>
          <CollageCell
            product={basicsCollage.lead}
            className="col-span-2 aspect-4/5 lg:col-span-4 lg:row-span-2 lg:aspect-auto"
          />
          <CollageCell product={top} className="aspect-3/4 lg:col-span-2 lg:aspect-auto" />
          <CollageCell
            product={tall}
            className="row-span-2 lg:col-span-2 lg:row-span-2 lg:aspect-auto"
          />
          <div className="grid aspect-3/4 place-items-center bg-cream lg:col-span-2 lg:aspect-auto">
            <span className="font-display text-[clamp(2rem,3.4vw,3.25rem)] font-bold uppercase tracking-[0.04em]">
              SIMA
            </span>
          </div>
          <CollageCell product={extra} className="col-span-2 aspect-video lg:hidden" />
        </div>
      </div>
    </section>
  );
}

function LookSection() {
  return (
    <section className="bg-background pb-10 pt-20 text-white lg:pt-28">
      <LookSpotlight items={lookProducts.map(toIndexItem)} />
    </section>
  );
}

function GearSection() {
  return (
    <section className="bg-background pb-20 pt-10 text-white lg:pb-28">
      <div className="page-wrap">
        <SectionTitle>Completa tu equipo</SectionTitle>
        <ul className="mt-10 grid gap-3 sm:grid-cols-3 lg:mt-12">
          {gearTiles.map((tile) => (
            <li key={tile.href} className="flex flex-col">
              <Link
                href={tile.href}
                className={`group relative block aspect-square overflow-hidden bg-card ${focusDark}`}
              >
                <Photo product={tile.product} />
                <span className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent" />
                <span className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6">
                  <span className="font-display text-[clamp(1.75rem,2.6vw,2.5rem)] font-bold uppercase leading-none">
                    {tile.label}
                  </span>
                  <ButtonLabel>Ver todo</ButtonLabel>
                </span>
              </Link>
              <p className="mt-4 text-sm text-white/75">{tile.text}</p>
              <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
                {tile.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`text-sm font-bold underline decoration-white/40 decoration-1 underline-offset-[6px] transition-colors hover:decoration-white ${focusDark}`}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function ManifestoSection() {
  const words = aboutValues.map((value) => value.title);

  return (
    <section className="overflow-hidden bg-cream text-ink">
      <div className="page-wrap grid items-end gap-12 py-24 lg:grid-cols-[1.35fr_1fr] lg:gap-16 lg:py-32">
        <div>
          <p className="font-display text-xs font-bold uppercase tracking-[0.2em]">Sobre SIMA</p>
          <h2 className="mt-6 font-display text-[clamp(2.75rem,6.4vw,6rem)] font-bold uppercase leading-[0.92] tracking-[-0.02em]">
            No es solo lo que usas.{" "}
            <span className="text-ink/35">Es lo que te impulsa a seguir adelante.</span>
          </h2>
          <p className="mt-8 max-w-[44ch] text-base leading-relaxed">
            Equipamos a personas que eligen crecer cada día. Avanzamos juntos, crecemos juntos.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/nosotros" className={`group ${focusLight}`}>
              <ButtonLabel tone="dark">Conoce más</ButtonLabel>
            </Link>
            <Link
              href="/comunidad"
              className={`inline-flex items-center justify-center px-5 py-3.5 text-xs font-bold uppercase tracking-[0.08em] shadow-[inset_0_0_0_1.5px_var(--ink)] transition-colors hover:bg-ink hover:text-cream ${focusLight}`}
            >
              Únete a la comunidad
            </Link>
          </div>
        </div>
        <div className="relative aspect-4/5 overflow-hidden bg-ink">
          <video
            className="absolute inset-0 h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            src="/sima/sima-category-hero-video.mp4"
          />
        </div>
      </div>
      <div className="border-t-2 border-ink py-6 lg:py-8" aria-hidden>
        <div className="home-ticker flex w-max">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex shrink-0 items-center">
              {words.map((word, index) => (
                <span
                  key={word}
                  className={`px-6 font-display text-[clamp(3.5rem,9vw,8.5rem)] font-bold uppercase leading-none tracking-[-0.01em] lg:px-10 ${
                    index % 2 === 1 ? "text-transparent [-webkit-text-stroke:1.5px_var(--ink)]" : ""
                  }`}
                >
                  {word}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
