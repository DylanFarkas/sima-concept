import { trustItems } from "@/lib/home-content";
import { SimaIcon, type LineIconName } from "@/components/icons";

export function TrustBar() {
  return (
    <section className="border-t border-white/15 bg-background text-white">
      <div className="page-wrap">
        <ul className="flex flex-col gap-8 py-10 sm:grid sm:grid-cols-2 xl:flex xl:flex-row xl:items-center xl:gap-0">
          {trustItems.map((item, index) => (
            <li key={item.title} className="relative flex flex-1 items-center gap-3 xl:px-6">
              {index > 0 ? (
                <span className="absolute left-0 top-1/2 hidden h-14 w-px -translate-y-1/2 bg-white xl:block" />
              ) : null}
              <SimaIcon
                name={item.icon as LineIconName}
                className="h-7.5 w-7.5 shrink-0"
              />
              <div>
                <p className="whitespace-pre-line font-display text-xs font-bold uppercase leading-[1.2] tracking-[0.03em]">
                  {item.title}
                </p>
                <p className="text-sm">{item.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
