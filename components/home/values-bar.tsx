import { valuePillars } from "@/lib/home-content";
import { SimaIcon, type LineIconName } from "@/components/icons";

export function ValuesBar() {
  return (
    <section className="bg-background text-white">
      <div className="page-wrap">
        <ul className="grid grid-cols-2 gap-y-11 py-14 md:grid-cols-3 xl:grid-cols-6 xl:gap-y-0">
          {valuePillars.map((item, index) => (
            <li
              key={item.title}
              className={`flex flex-col items-center px-4 text-center ${
                index < valuePillars.length - 1
                  ? "xl:border-r xl:border-[#3F3F3F]"
                  : ""
              }`}
            >
              <SimaIcon
                name={item.icon as LineIconName}
                className="h-10 w-10"
              />
              <p className="mt-4 font-display text-sm font-bold uppercase tracking-[0.03em]">
                {item.title}
              </p>
              <p className="mt-1.5 text-[0.9375rem] leading-snug text-muted">
                {item.text}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
