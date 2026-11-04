import { valuePillars } from "@/lib/home-content";
import { SimaIcon, type LineIconName } from "@/components/icons";

export function ValuesBar() {
  return (
    <section className="bg-background text-white">
      <div className="page-wrap">
        <ul className="grid grid-cols-2 gap-y-8 py-12 md:grid-cols-3 xl:grid-cols-6 xl:gap-y-10">
          {valuePillars.map((item, index) => (
            <li
              key={item.title}
              className={`flex flex-col items-center px-3 text-center ${
                index < valuePillars.length - 1
                  ? "xl:border-r xl:border-[#3F3F3F]"
                  : ""
              }`}
            >
              <SimaIcon
                name={item.icon as LineIconName}
                className="h-9 w-9"
              />
              <p className="mt-2.5 font-display text-xs font-bold uppercase tracking-[0.03em]">
                {item.title}
              </p>
              <p className="mt-2 text-[0.88rem] text-muted">
                {item.text}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
