import Link from "next/link";
import type { Tone } from "@/lib/category-pages";
import { focusDark, focusLight } from "@/components/shared/editorial";

type Props = {
  parent: { label: string; href: string };
  title: string;
  count: number;
  tone: Tone;
};

export function CompactHeader({ parent, title, count, tone }: Props) {
  const light = tone === "white";

  return (
    <section className={light ? "bg-white text-ink" : "bg-background text-white"}>
      <div className="page-wrap pb-10 pt-14 lg:pb-12 lg:pt-20">
        <nav aria-label="Ruta" className={`text-xs font-bold uppercase tracking-[0.14em] ${light ? "text-ink/55" : "text-white/55"}`}>
          <Link href="/" className={`hover:underline ${light ? focusLight : focusDark}`}>
            Inicio
          </Link>
          <span className="mx-2">/</span>
          <Link href={parent.href} className={`hover:underline ${light ? focusLight : focusDark}`}>
            {parent.label}
          </Link>
          <span className="mx-2">/</span>
          <span className={light ? "text-ink" : "text-white"}>{title}</span>
        </nav>
        <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <h1 className="font-display text-[clamp(3.5rem,10vw,9rem)] font-bold uppercase leading-[0.88] tracking-tight">
            {title}
          </h1>
          <p className={`font-display text-sm font-bold uppercase tracking-[0.14em] sm:pb-3 ${light ? "text-ink/60" : "text-white/60"}`}>
            {count} {count === 1 ? "artículo" : "artículos"}
          </p>
        </div>
      </div>
    </section>
  );
}
