import Link from "next/link";
import { aboutValues } from "@/lib/home-content";
import { SimaIcon, type LineIconName } from "@/components/icons";

export function About() {
  return (
    <section className="grid bg-background text-white lg:grid-cols-[1.24fr_1fr_1.88fr]">
      <div className="flex flex-col items-start bg-background px-8 py-[52px] sm:px-10 lg:pl-[46px] lg:pr-10">
        <p className="font-display text-xs font-bold uppercase tracking-[0.03em]">
          SOBRE SIMA
        </p>
        <h2 className="mt-4 font-display text-[2rem] font-bold uppercase leading-[1.1] tracking-[0.03em]">
          NO ES SOLO LO
          <br />
          QUE USAS.
        </h2>
        <p className="mt-4 text-sm leading-[1.6]">
          Es lo que te impulsa
          <br />
          a seguir adelante.
        </p>
        <Link
          href="/nosotros"
          className="mt-8 inline-flex items-center justify-center px-6 py-4 text-sm text-white shadow-[inset_0_0_0_1px_#fff]"
        >
          CONOCE MÁS
        </Link>
      </div>

      <div className="bg-cream px-8 py-[46px] text-ink sm:px-9 lg:pl-[34px] lg:pr-[30px]">
        <p className="font-display text-xs font-bold uppercase tracking-[0.03em]">
          NUESTROS VALORES
        </p>
        <ul className="mt-5 flex flex-col gap-3">
          {aboutValues.map((item) => (
            <li key={item.title} className="flex items-start gap-3">
              <SimaIcon
                name={item.icon as LineIconName}
                className="mt-0.5 h-[22px] w-[22px] shrink-0"
              />
              <div>
                <p className="font-display text-xs font-bold uppercase leading-[1.2] tracking-[0.03em]">
                  {item.title}
                </p>
                <p className="text-sm leading-[1.6]">{item.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col items-start bg-background px-8 py-[52px] text-white sm:px-10 lg:pl-[46px] lg:pr-10">
        <p className="font-display text-xs font-bold uppercase tracking-[0.03em]">
          COMUNIDAD SIMA
        </p>
        <h2 className="mt-4 max-w-md font-display text-[2rem] font-bold uppercase leading-[1.1] tracking-[0.03em]">
          AVANZAMOS JUNTOS,
          <br />
          CRECEMOS JUNTOS.
        </h2>
        <p className="mt-4 max-w-xs text-sm leading-[1.6]">
          Sé parte de una comunidad que te impulsa a dar lo mejor de ti.
        </p>
        <Link
          href="/comunidad"
          className="mt-8 inline-flex items-center justify-center bg-white px-6 py-4 text-sm text-ink"
        >
          ÚNETE A LA COMUNIDAD
        </Link>
      </div>
    </section>
  );
}
