import Link from "next/link";
import { collections } from "@/lib/home-content";
import { IconGrid, SimaIcon, type LineIconName } from "@/components/icons";

export function Collections() {
  return (
    <section id="colecciones" className="bg-cream text-ink">
      <div className="page-wrap flex flex-col items-center gap-6 pt-16 pb-18">
        <div className="text-center">
          <p className="font-display text-xs font-bold uppercase tracking-[0.03em]">
            COLECCIONES
          </p>
          <h2 className="mt-2 font-display text-[clamp(2.25rem,4.8vw,3rem)] font-bold uppercase leading-none">
            EQUÍPATE PARA CRECER
          </h2>
          <span className="mx-auto mt-4 block h-px w-16.75 bg-ink" />
        </div>

        <div className="grid w-full grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {collections.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="flex min-h-45 flex-col bg-card px-4.5 py-5.5 text-white"
            >
              <SimaIcon
                name={item.icon as LineIconName}
                className="h-8.5 w-8.5"
              />
              <span className="mt-auto flex flex-col gap-0.5 pt-6">
                <span className="font-display text-sm font-bold uppercase leading-[1.2] tracking-[0.03em]">
                  {item.title}
                </span>
                <span className="text-sm leading-[1.6]">{item.text}</span>
                <span className="font-display text-xs font-bold uppercase leading-[1.2] tracking-[0.03em]">
                  VER MÁS →
                </span>
              </span>
            </Link>
          ))}
        </div>

        <Link
          href="/tienda"
          className="flex min-h-19.5 w-full items-center gap-4 bg-card px-4.5 py-5.5 text-white"
        >
          <IconGrid className="h-8.5 w-8.5 shrink-0" />
          <span className="font-display text-sm font-bold uppercase leading-[1.2] tracking-[0.03em]">
            VER TODO
          </span>
          <span className="hidden flex-1 text-center text-sm sm:block">
            Explora el catálogo completo.
          </span>
          <span className="ml-auto font-display text-xs font-bold uppercase tracking-[0.03em]">
            VER MÁS →
          </span>
        </Link>
      </div>
    </section>
  );
}
