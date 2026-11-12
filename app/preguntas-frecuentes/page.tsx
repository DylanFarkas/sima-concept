import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import { HelpLayout } from "@/components/help/help-layout";
import { HelpClosing, HelpLead, linkDark, pad } from "@/components/help/help-blocks";
import { focusDark } from "@/components/shared/editorial";
import { whatsappHref } from "@/lib/home-content";

export const metadata: Metadata = {
  title: "Preguntas frecuentes – SIMA",
  description:
    "Dudas más comunes sobre tallas, envíos, cambios, pagos y cuidado del calzado.",
};

const questions: { question: string; answer: ReactNode }[] = [
  {
    question: "¿Cómo elijo mi talla?",
    answer: (
      <>
        Manejamos numeración colombiana. Consulta nuestra{" "}
        <Link href="/guia-de-tallas" className={linkDark}>
          guía de tallas
        </Link>{" "}
        para ver la equivalencia con la talla europea que trae la etiqueta de tu calzado. Si dudas
        entre dos, te recomendamos la más grande, o escríbenos y te orientamos.
      </>
    ),
  },
  {
    question: "¿Cuánto tarda mi pedido?",
    answer: (
      <>
        Consulta los plazos y coberturas en{" "}
        <Link href="/envios" className={linkDark}>
          Envíos
        </Link>
        .
      </>
    ),
  },
  {
    question: "¿Puedo cambiar o devolver un producto?",
    answer: (
      <>
        Sí. Tienes derecho de retracto dentro de los cinco días hábiles siguientes a la entrega. Las
        condiciones completas están en{" "}
        <Link href="/cambios-y-devoluciones" className={linkDark}>
          Cambios y devoluciones
        </Link>
        .
      </>
    ),
  },
  {
    question: "¿Qué métodos de pago aceptan?",
    answer: (
      <>
        Puedes ver los medios disponibles al finalizar la compra. Todos los pagos se procesan de
        forma segura.
      </>
    ),
  },
  {
    question: "¿Cómo cuido mi calzado?",
    answer: (
      <>
        Limpia con un paño húmedo y jabón suave, nunca en lavadora. Deja secar a la sombra, lejos de
        fuentes de calor directo. Si el material es gamuza, usa cepillo seco y protector específico
        para ese acabado.
      </>
    ),
  },
];

export default function PreguntasFrecuentesPage() {
  return (
    <HelpLayout
      current="/preguntas-frecuentes"
      title="Preguntas frecuentes"
      lead={
        <HelpLead>
          <p>
            Reunimos aquí las dudas más comunes. Si no encuentras la tuya, escríbenos desde la{" "}
            <a href={whatsappHref} target="_blank" rel="noreferrer" className={linkDark}>
              página de contacto
            </a>{" "}
            y te respondemos.
          </p>
        </HelpLead>
      }
    >
      <section className="page-wrap py-10 sm:py-14 lg:py-20">
        <div className="border-b border-white/15">
          {questions.map((item, index) => (
            <details key={item.question} open={index === 0} className="group border-t border-white/15">
              <summary
                className={`grid cursor-pointer list-none grid-cols-[2.5rem_1fr_auto] items-center gap-3 py-6 sm:grid-cols-[4rem_1fr_auto] sm:gap-6 sm:py-8 lg:grid-cols-[8rem_1fr_auto] [&::-webkit-details-marker]:hidden ${focusDark} focus-visible:outline-offset-0`}
              >
                <span className="font-display text-xs font-bold tracking-[0.18em] text-white/35 transition-colors group-open:text-(--accent)">
                  {pad(index + 1)}
                </span>
                <h2 className="font-display text-[clamp(1.375rem,3.4vw,2.75rem)] font-bold uppercase leading-[1.02] tracking-[-0.005em] text-white/70 transition-colors group-hover:text-white group-open:text-white">
                  {item.question}
                </h2>
                <span
                  aria-hidden
                  className="relative flex h-11 w-11 shrink-0 items-center justify-center border border-white/25 transition-colors group-hover:border-white group-open:border-white group-open:bg-white group-open:text-ink sm:h-14 sm:w-14"
                >
                  <span className="absolute h-px w-4 bg-current" />
                  <span className="absolute h-4 w-px bg-current transition-transform duration-300 group-open:scale-y-0" />
                </span>
              </summary>
              <div className="grid grid-cols-[2.5rem_1fr] gap-3 pb-8 sm:grid-cols-[4rem_1fr] sm:gap-6 sm:pb-10 lg:grid-cols-[8rem_1fr]">
                <p className="col-start-2 max-w-[60ch] pr-14 text-base leading-relaxed text-white/75 sm:text-[17px] sm:pr-20">
                  {item.answer}
                </p>
              </div>
            </details>
          ))}
        </div>
      </section>

      <HelpClosing title="Atención personalizada">
        <p>Estamos para ayudarte.</p>
      </HelpClosing>
    </HelpLayout>
  );
}
