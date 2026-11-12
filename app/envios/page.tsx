import type { Metadata } from "next";
import type { ReactNode } from "react";
import { SimaIcon, type LineIconName } from "@/components/icons";
import { HelpLayout } from "@/components/help/help-layout";
import { HelpClosing, HelpLead, linkLight, pad } from "@/components/help/help-blocks";
import { whatsappHref } from "@/lib/home-content";

export const metadata: Metadata = {
  title: "Envíos – SIMA",
  description: "Envíos a toda Colombia: cobertura, plazos, costo y seguimiento del pedido.",
};

const blocks: { icon: LineIconName; title: string; body: ReactNode }[] = [
  {
    icon: "pin",
    title: "Cobertura",
    body: <p>Realizamos envíos a todo el territorio nacional.</p>,
  },
  {
    icon: "clock",
    title: "Plazos de entrega",
    body: (
      <>
        <p>
          El tiempo de entrega varía según la ciudad de destino. Los pedidos se despachan una vez
          confirmado el pago, y te confirmamos el plazo estimado junto con el número de guía.
        </p>
        <p>
          Si necesitas tu pedido para una fecha específica, escríbenos antes de comprar y verificamos
          la disponibilidad para tu zona.
        </p>
      </>
    ),
  },
  {
    icon: "tag",
    title: "Costo de envío",
    body: (
      <p>
        El valor del envío se calcula según tu ciudad de destino y lo puedes ver antes de finalizar
        tu compra, en el paso de pago.
      </p>
    ),
  },
  {
    icon: "truck",
    title: "Seguimiento",
    body: (
      <p>
        Cuando tu pedido salga de nuestra bodega recibirás un correo con el número de guía para
        seguirlo en todo momento.
      </p>
    ),
  },
];

export default function EnviosPage() {
  return (
    <HelpLayout
      current="/envios"
      title="Envíos"
      lead={
        <HelpLead heading="Envíos a toda Colombia">
          <p>Preparamos cada pedido con cuidado y te acompañamos hasta que llega a tus manos.</p>
        </HelpLead>
      }
    >
      <section className="page-wrap py-16 sm:py-20 lg:py-28">
        <ol className="grid gap-px border border-white/15 bg-white/15 md:grid-cols-2">
          {blocks.map((block, index) => (
            <li
              key={block.title}
              className="group flex flex-col bg-background p-6 transition-colors hover:bg-[#171717] sm:p-10 lg:min-h-96 lg:p-12"
            >
              <div className="flex items-start justify-between">
                <span className="flex h-16 w-16 items-center justify-center border border-white/20 transition-colors group-hover:border-white sm:h-20 sm:w-20">
                  <SimaIcon name={block.icon} className="h-8 w-8 sm:h-10 sm:w-10" />
                </span>
                <span
                  aria-hidden
                  className="font-display text-[clamp(3.5rem,7vw,6rem)] font-bold leading-[0.8] text-transparent [-webkit-text-stroke:1.5px_rgb(255_255_255/0.22)]"
                >
                  {pad(index + 1)}
                </span>
              </div>
              <h2 className="mt-12 font-display text-[clamp(1.75rem,3vw,2.75rem)] font-bold uppercase leading-none lg:mt-auto lg:pt-16">
                {block.title}
              </h2>
              <div className="mt-4 max-w-[46ch] space-y-3 text-base leading-relaxed text-white/75">
                {block.body}
              </div>
            </li>
          ))}
        </ol>
      </section>

      <HelpClosing title="¿Dudas con tu envío?">
        <p>
          Escríbenos desde la{" "}
          <a href={whatsappHref} target="_blank" rel="noreferrer" className={linkLight}>
            página de contacto
          </a>{" "}
          con tu número de pedido.
        </p>
      </HelpClosing>
    </HelpLayout>
  );
}
