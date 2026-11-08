import Link from "next/link";
import type { Product } from "@/lib/catalog";
import { aboutValues, socialLinks } from "@/lib/home-content";
import {
  audienceTiles,
  basicsLine,
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
import { ButtonLabel, Photo, SectionTitle, focusDark, focusLight } from "@/components/shared/editorial";

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

function AudienceSection() {
  return (
    <section id="colecciones" className="bg-background py-20 text-white lg:py-28">
      <div className="page-wrap">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <SectionTitle>Equípate para crecer</SectionTitle>
          <p className="max-w-[34ch] text-sm leading-relaxed text-white/70">
            Ropa, calzado y lo que necesitas para dar el primer paso, en un solo lugar.
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
            Piezas para empezar, volver o seguir. Calidad a buen precio.
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
                    className="absolute inset-0 overflow-hidden"
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
                  <span className="accent-stroke mt-[0.06em] block whitespace-nowrap text-transparent transition-colors duration-500 [-webkit-text-stroke:1.5px_white] group-hover:text-white">
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
        title={<SectionTitle className="max-w-[18ch]">Ligereza y soporte en cada kilómetro</SectionTitle>}
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

const pad = (value: number) => String(value).padStart(2, "0");

function BasicsPiece({
  product,
  number,
  className = "",
  photoClassName = "",
}: {
  product: Product;
  number: number;
  className?: string;
  photoClassName?: string;
}) {
  return (
    <Link
      href={`/producto/${product.handle}`}
      className={`group flex flex-col bg-cream ${focusLight} focus-visible:-outline-offset-4 ${className}`}
    >
      <span className={`relative block overflow-hidden bg-[#e4e0d8] ${photoClassName}`}>
        <Photo product={product} />
      </span>
      <span className="flex items-baseline gap-3 border-t-2 border-ink px-4 py-3.5 transition-colors duration-300 group-hover:bg-ink group-hover:text-cream lg:px-5">
        <span className="shrink-0 font-display text-[11px] font-bold tracking-[0.14em] opacity-40">
          {pad(number)}
        </span>
        <span className="min-w-0 truncate font-display text-sm font-bold uppercase leading-tight tracking-[0.01em] lg:text-[15px]">
          {product.title}
        </span>
      </span>
    </Link>
  );
}

function BasicsSection() {
  return (
    <section className="bg-cream py-20 text-ink lg:py-28">
      <div className="page-wrap">
        <div className="grid grid-cols-2 gap-0.5 border-2 border-ink bg-ink lg:grid-cols-12">
          <div className="col-span-2 flex flex-col bg-cream p-6 sm:p-10 lg:col-span-8 lg:p-12">
            <p className="font-display text-xs font-bold uppercase tracking-[0.2em]">Línea Basics</p>
            <div className="mt-8 flex flex-col gap-8 lg:mt-auto lg:pt-10 xl:flex-row xl:items-end xl:justify-between">
              <h2 className="max-w-[10ch] font-display text-[clamp(3.5rem,7vw,6.5rem)] font-bold uppercase leading-[1.1] tracking-[-0.02em]">
                Para todos los días
              </h2>
              <div className="xl:max-w-[30ch] xl:pb-2">
                <p className="max-w-[34ch] text-sm leading-relaxed sm:text-base">
                  Algodón, pants y camisillas para entrenar y para el resto del día. Lo esencial, sin ruido.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link href="/hombre?tipo=basics" className={`group ${focusLight}`}>
                    <ButtonLabel tone="dark">Hombre</ButtonLabel>
                  </Link>
                  <Link href="/mujer?tipo=basics" className={`group ${focusLight}`}>
                    <ButtonLabel tone="dark">Mujer</ButtonLabel>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {basicsLine.map((product, index) => {
            const feature = index === basicsLine.length - 1;
            return (
              <BasicsPiece
                key={product.handle}
                product={product}
                number={index + 1}
                className={feature ? "col-span-2 lg:col-[9/span_4] lg:row-[1/span_2]" : "lg:col-span-4"}
                photoClassName={feature ? "aspect-4/5 lg:aspect-auto lg:flex-1" : "aspect-3/4 lg:aspect-4/5"}
              />
            );
          })}
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
  const whatsapp = socialLinks.find((item) => item.icon === "whatsapp");

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
          <p className="mt-4 max-w-[44ch] text-base leading-relaxed">
            El deporte es bienestar. Da el primer paso: si no sabes qué elegir, te asesoramos.
          </p>
          {whatsapp ? (
            <a
              href={whatsapp.href}
              target="_blank"
              rel="noreferrer"
              className={`mt-4 inline-flex text-sm font-bold underline decoration-ink/40 decoration-1 underline-offset-[6px] transition-colors hover:decoration-ink ${focusLight}`}
            >
              Escríbenos por WhatsApp
            </a>
          ) : null}
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
