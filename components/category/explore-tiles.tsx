import Link from "next/link";
import type { Subcategory } from "@/lib/taxonomy";
import { SectionTitle, focusDark } from "@/components/shared/editorial";

type Props = {
  title: string;
  items: { sub: Subcategory; image: string }[];
};

export function ExploreTiles({ title, items }: Props) {
  const wide = items.length <= 2;

  return (
    <section className="bg-background pb-4 pt-20 text-white lg:pt-28">
      <div className="page-wrap">
        <SectionTitle>{title}</SectionTitle>
        <ul
          className={`mt-10 grid gap-3 lg:mt-12 ${
            wide ? "sm:grid-cols-2" : "grid-cols-2 sm:grid-cols-3 lg:grid-cols-5"
          }`}
        >
          {items.map(({ sub, image }) => (
            <li key={sub.key}>
              <Link
                href={sub.href}
                className={`group relative block overflow-hidden bg-card ${wide ? "aspect-4/3" : "aspect-3/4"} ${focusDark}`}
              >
                <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover" />
                <span className="absolute inset-0 bg-linear-to-t from-black/75 via-black/5 to-transparent" />
                <span className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4 lg:p-6">
                  <span
                    className={`font-display font-bold uppercase leading-none tracking-[-0.01em] ${
                      wide ? "text-[clamp(2rem,4vw,3.5rem)]" : "text-[clamp(1.35rem,2vw,2rem)]"
                    }`}
                  >
                    {sub.label}
                  </span>
                  <span className="font-display text-[11px] font-bold tracking-[0.14em] text-white/70">
                    {String(sub.count).padStart(2, "0")}
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
