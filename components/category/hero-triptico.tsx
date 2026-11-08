import Link from "next/link";
import type { CategoryHeroConfig, TripticoPanel } from "@/lib/category-pages";
import { ButtonLabel, Photo, focusDark, focusLight } from "@/components/shared/editorial";

type Props = { hero: Extract<CategoryHeroConfig, { format: "triptico" }> };

export function HeroTriptico({ hero }: Props) {
  return (
    <section className="bg-background pb-1 text-white">
      <div className="grid grid-cols-2 gap-1 lg:min-h-[calc(84svh-66px)] lg:grid-cols-3">
        <Side panel={hero.left} />
        <div className="order-first col-span-2 flex flex-col items-center justify-center bg-cream px-6 py-16 text-center text-ink lg:order-0 lg:col-span-1 lg:py-12">
          <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-ink/60">
            Colección SIMA
          </p>
          <h1 className="mt-5 font-display text-[clamp(4rem,8vw,8.5rem)] font-bold uppercase leading-[0.85] tracking-tight">
            {hero.title}
          </h1>
          <p className="mt-6 max-w-[28ch] text-base leading-relaxed text-ink/75">{hero.text}</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-5">
            <a href={hero.cta.href} className={`group ${focusLight}`}>
              <ButtonLabel tone="dark">{hero.cta.label}</ButtonLabel>
            </a>
            {hero.extra ? (
              <Link
                href={hero.extra.href}
                className={`text-sm font-bold underline decoration-1 underline-offset-[6px] ${focusLight}`}
              >
                {hero.extra.label}
              </Link>
            ) : null}
          </div>
        </div>
        <Side panel={hero.right} />
      </div>
    </section>
  );
}

function Side({ panel }: { panel: TripticoPanel }) {
  const body = (
    <>
      <Photo product={panel.product} />
      {panel.label ? (
        <>
          <span className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent" />
          <span className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 lg:p-8">
            <span className="font-display text-[clamp(2rem,4vw,4rem)] font-bold uppercase leading-none tracking-[-0.01em]">
              {panel.label}
            </span>
            <span
              aria-hidden
              className="grid h-11 w-11 shrink-0 place-items-center bg-white text-ink transition-transform duration-300 group-hover:translate-x-1"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </span>
          </span>
        </>
      ) : null}
    </>
  );
  const className = "group relative block aspect-3/4 overflow-hidden bg-card lg:aspect-auto";

  if (panel.href) {
    return (
      <Link href={panel.href} className={`${className} ${focusDark} focus-visible:-outline-offset-4`}>
        {body}
      </Link>
    );
  }
  return (
    <div aria-hidden className={className}>
      {body}
    </div>
  );
}
