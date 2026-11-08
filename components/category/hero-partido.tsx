import Link from "next/link";
import type { CategoryHeroConfig } from "@/lib/category-pages";
import type { Subcategory } from "@/lib/taxonomy";
import { focusDark, focusLight } from "@/components/shared/editorial";

type Props = {
  hero: Extract<CategoryHeroConfig, { format: "partido" }>;
  subcategories: Subcategory[];
  total: number;
};

export function HeroPartido({ hero, subcategories, total }: Props) {
  const light = hero.tone === "white";
  const focus = light ? focusLight : focusDark;

  return (
    <section className={light ? "bg-white text-ink" : "bg-background text-white"}>
      <div className="grid lg:min-h-[calc(84svh-66px)] lg:grid-cols-2">
        <div className="page-wrap flex w-full flex-col justify-between gap-12 py-16 lg:mx-0 lg:max-w-none lg:py-20 lg:pr-12">
          <div>
            <p
              className={`font-display text-xs font-bold uppercase tracking-[0.2em] ${light ? "text-ink/60" : "accent-text text-white/60"}`}
            >
              Colección SIMA · {total} {total === 1 ? "artículo" : "artículos"}
            </p>
            <h1 className="mt-5 font-display text-[clamp(3.5rem,8vw,9rem)] font-bold uppercase leading-[0.85] tracking-tight">
              {hero.title}
            </h1>
            <p className={`mt-8 max-w-[38ch] text-base leading-relaxed ${light ? "text-ink/75" : "text-white/80"}`}>
              {hero.text}
            </p>
          </div>
          <ul className={`border-t-2 ${light ? "border-ink" : "border-white"}`}>
            <li>
              <SubRow href="#productos" label="Ver todo" count={total} light={light} focus={focus} />
            </li>
            {subcategories.map((sub) => (
              <li key={sub.key}>
                <SubRow href={sub.href} label={sub.label} count={sub.count} light={light} focus={focus} />
              </li>
            ))}
          </ul>
        </div>
        <div className="relative order-first aspect-square overflow-hidden bg-white lg:order-0 lg:aspect-auto">
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
        </div>
      </div>
    </section>
  );
}

function SubRow({
  href,
  label,
  count,
  light,
  focus,
}: {
  href: string;
  label: string;
  count: number;
  light: boolean;
  focus: string;
}) {
  const className = `group flex items-baseline justify-between gap-6 border-b py-4 transition-colors duration-300 ${
    light ? "border-ink/15 hover:bg-ink hover:text-white" : "border-white/15 hover:bg-white hover:text-ink"
  } ${focus} focus-visible:-outline-offset-2`;
  const content = (
    <>
      <span className="font-display text-[clamp(1.5rem,2.4vw,2.25rem)] font-bold uppercase leading-none transition-transform duration-300 group-hover:translate-x-3">
        {label}
      </span>
      <span className="pr-3 font-display text-xs font-bold tracking-[0.14em] opacity-60">
        {String(count).padStart(2, "0")}
      </span>
    </>
  );
  return href.startsWith("#") ? (
    <a href={href} className={className}>
      {content}
    </a>
  ) : (
    <Link href={href} className={className}>
      {content}
    </Link>
  );
}
