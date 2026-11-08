import type { CategoryHeroConfig } from "@/lib/category-pages";
import { ButtonLabel, focusDark } from "@/components/shared/editorial";

type Props = { hero: Extract<CategoryHeroConfig, { format: "pantalla" }> };

export function HeroPantalla({ hero }: Props) {
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      {hero.media?.type === "video" ? (
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={hero.product.image}
          src={hero.media.src}
        />
      ) : (
        <img
          src={hero.media?.src ?? hero.product.image}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}
      <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/35 to-black/10" />
      <div className="page-wrap relative flex min-h-[calc(88svh-66px)] flex-col justify-end pb-12 pt-32 lg:pb-16">
        <p className="accent-text font-display text-xs font-bold uppercase tracking-[0.2em] text-white/75">
          Colección SIMA
        </p>
        <h1 className="mt-4 font-display text-[clamp(4.5rem,15vw,14rem)] font-bold uppercase leading-[0.85] tracking-tight">
          {hero.title}
        </h1>
        <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <p className="max-w-[38ch] text-base leading-relaxed text-white/85">{hero.text}</p>
          <a href={hero.cta.href} className={`group shrink-0 ${focusDark}`}>
            <ButtonLabel>{hero.cta.label}</ButtonLabel>
          </a>
        </div>
      </div>
    </section>
  );
}
