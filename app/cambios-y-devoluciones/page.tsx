import type { Metadata } from "next";
import type { ReactNode } from "react";
import { SimaIcon, type LineIconName } from "@/components/icons";
import { HelpLayout } from "@/components/help/help-layout";
import { HelpClosing, HelpLead, SectionHead, linkDark, pad } from "@/components/help/help-blocks";
import { whatsappHref } from "@/lib/home-content";

export const metadata: Metadata = {
  title: "Cambios y devoluciones – SIMA",
  description:
    "Derecho de retracto, cambios de talla, garantía por defectos y reembolsos en SIMA.",
};

const policies: { icon: LineIconName; title: string; body: ReactNode }[] = [
  {
    icon: "refresh",
    title: "Cambios de talla",
    body: (
      <>
        <p>
          Si el calzado no te quedó bien, puedes solicitar cambio de talla siempre que el producto no
          haya sido usado en exteriores, conserve etiquetas y empaque original, y la talla que
          necesitas esté disponible en inventario.
        </p>
        <p>
          Escríbenos apenas recibas tu pedido si algo no encaja: entre más pronto nos cuentes, más
          rápido lo resolvemos.
        </p>
      </>
    ),
  },
  {
    icon: "purpose",
    title: "Garantía por defectos",
    body: (
      <>
        <p>
          Todo producto cuenta con garantía legal frente a defectos de fabricación. Si detectas una
          falla, escríbenos con fotos del producto y tu número de pedido.
        </p>
        <p>
          La garantía no cubre desgaste normal por uso, daños por mal uso ni modificaciones hechas al
          producto.
        </p>
      </>
    ),
  },
];

const steps: ReactNode[] = [
  <>
    Escríbenos desde la{" "}
    <a href={whatsappHref} target="_blank" rel="noreferrer" className={linkDark}>
      página de contacto
    </a>{" "}
    con tu número de pedido
  </>,
  <>Cuéntanos el motivo y adjunta fotos si aplica</>,
  <>Te indicamos cómo hacer el envío de retorno</>,
  <>Una vez recibido y verificado, procesamos el cambio o el reembolso</>,
];

export default function CambiosYDevolucionesPage() {
  return (
    <HelpLayout
      current="/cambios-y-devoluciones"
      title="Cambios y devoluciones"
      lead={
        <HelpLead heading="Fáciles y sin complicaciones">
          <p>
            Queremos que tu equipo te acompañe de verdad. Si algo no es lo que esperabas, lo
            resolvemos.
          </p>
        </HelpLead>
      }
    >
      <section className="page-wrap py-16 sm:py-20 lg:py-28">
        <div className="grid gap-px border border-white/15 bg-white/15 lg:grid-cols-12">
          <div
            aria-hidden
            className="relative flex min-h-64 flex-col justify-between overflow-hidden bg-cream p-6 text-ink sm:p-10 lg:col-span-5 lg:min-h-0"
          >
            <span className="font-display text-xs font-bold uppercase tracking-[0.2em] text-ink/60">
              Ley 1480 de 2011
            </span>
            <span className="flex items-end gap-4">
              <span className="font-display text-[clamp(9rem,22vw,17rem)] font-bold leading-[0.78] tracking-[-0.04em]">
                5
              </span>
              <span className="pb-3 font-display text-[clamp(1.5rem,3vw,2.25rem)] font-bold uppercase leading-[1.08]">
                días
                <br />
                hábiles
              </span>
            </span>
          </div>
          <div className="bg-background p-6 sm:p-10 lg:col-span-7 lg:p-14">
            <SectionHead title="Derecho de retracto" />
            <div className="mt-6 max-w-[56ch] space-y-4 text-base leading-relaxed text-white/75 [&_strong]:text-white">
              <p>
                De acuerdo con el Estatuto del Consumidor (Ley 1480 de 2011), en compras realizadas por
                internet tienes derecho a retractarte dentro de los{" "}
                <strong>cinco (5) días hábiles</strong> siguientes a la entrega del producto, sin
                necesidad de justificar tu decisión.
              </p>
              <p>
                Para ejercerlo, el producto debe devolverse en el mismo estado en que lo recibiste, sin
                uso y con su empaque y etiquetas originales.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-5 grid gap-5 md:grid-cols-2 lg:mt-6 lg:gap-6">
          {policies.map((policy) => (
            <article key={policy.title} className="flex flex-col border border-white/15 p-6 sm:p-10 rounded-lg">
              <SimaIcon name={policy.icon} className="h-10 w-10" />
              <h2 className="mt-10 font-display text-[clamp(1.75rem,3vw,2.5rem)] font-bold uppercase leading-none">
                {policy.title}
              </h2>
              <div className="mt-4 space-y-3 text-base leading-relaxed text-white/75">{policy.body}</div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-white/15">
        <div className="page-wrap py-16 sm:py-20 lg:py-28">
          <SectionHead title="Cómo solicitarlo" />
          <ol className="mt-12 grid gap-10 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-0">
            {steps.map((step, index) => (
              <li key={index} className="relative lg:pr-10">
                <div className="flex items-center gap-4">
                  <span className="font-display text-[clamp(3.5rem,6vw,5.5rem)] font-bold leading-none">
                    {pad(index + 1)}
                  </span>
                  <span aria-hidden className="h-px flex-1 bg-white/25" />
                  {index < steps.length - 1 ? (
                    <span aria-hidden className="hidden pr-2 text-white/40 lg:inline">
                      →
                    </span>
                  ) : null}
                </div>
                <p className="mt-5 max-w-[30ch] text-base leading-relaxed text-white/80">{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-t border-white/15">
        <div className="page-wrap grid gap-6 py-14 sm:py-16 lg:grid-cols-12 lg:items-baseline lg:py-20">
          <SectionHead title="Reembolsos" className="lg:col-span-5" />
          <p className="max-w-[56ch] text-base leading-relaxed text-white/75 sm:text-lg lg:col-span-7">
            Los reembolsos se emiten por el mismo medio de pago que usaste en la compra, una vez
            verificado el estado del producto devuelto.
          </p>
        </div>
      </section>

      <HelpClosing title="Atención personalizada">
        <p>Estamos para ayudarte.</p>
      </HelpClosing>
    </HelpLayout>
  );
}
