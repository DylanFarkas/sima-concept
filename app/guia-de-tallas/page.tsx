import type { ReactNode } from "react";
import type { Metadata } from "next";
import { HelpLayout } from "@/components/help/help-layout";
import { HelpClosing, HelpLead, SectionHead } from "@/components/help/help-blocks";

export const metadata: Metadata = {
  title: "Guía de Tallas – SIMA",
  description:
    "Tallas de ropa y equivalencias de calzado. Mide en centímetros y encuentra tu talla en SIMA.",
};

type ApparelRow = {
  size: string;
  chest: string;
  waist: string;
  hip: string;
};

type ShoeRow = {
  col: string;
  eu: string;
  us: string;
  uk: string;
  cm: string;
};

const menApparel: readonly ApparelRow[] = [
  { size: "S", chest: "92–96", waist: "78–82", hip: "92–96" },
  { size: "M", chest: "97–101", waist: "83–87", hip: "97–101" },
  { size: "L", chest: "102–106", waist: "88–92", hip: "102–106" },
  { size: "XL", chest: "107–111", waist: "93–97", hip: "107–111" },
  { size: "XXL", chest: "112–116", waist: "98–102", hip: "112–116" },
];

const womenApparel: readonly ApparelRow[] = [
  { size: "XS", chest: "76–80", waist: "60–64", hip: "86–90" },
  { size: "S", chest: "81–85", waist: "65–69", hip: "91–95" },
  { size: "M", chest: "86–90", waist: "70–74", hip: "96–100" },
  { size: "L", chest: "91–95", waist: "75–79", hip: "101–105" },
  { size: "XL", chest: "96–100", waist: "80–84", hip: "106–110" },
];

const womenShoes: readonly ShoeRow[] = [
  { col: "35", eu: "36", us: "5", uk: "4.5", cm: "23.5" },
  { col: "36", eu: "37", us: "6", uk: "5", cm: "23.5" },
  { col: "37", eu: "38", us: "6.5", uk: "5.5", cm: "24.5" },
  { col: "38", eu: "39", us: "7.5", uk: "6.5", cm: "25.5" },
  { col: "39", eu: "40", us: "8.5", uk: "7.5", cm: "26.5" },
];

const menShoes: readonly ShoeRow[] = [
  { col: "37", eu: "40", us: "8.5", uk: "7.5", cm: "26.5" },
  { col: "38", eu: "41", us: "9.5", uk: "8.5", cm: "27.5" },
  { col: "39", eu: "42", us: "10", uk: "9", cm: "28.5" },
  { col: "40", eu: "43", us: "11", uk: "10", cm: "29.5" },
  { col: "41/42", eu: "44", us: "12", uk: "11", cm: "30.5" },
  { col: "43", eu: "45", us: "13", uk: "12", cm: "31.5" },
];

const apparelColumns = [
  { key: "chest", label: "Pecho" },
  { key: "waist", label: "Cintura" },
  { key: "hip", label: "Cadera" },
] as const;

const shoeColumns = [
  { key: "eu", label: "EU / FR", hint: "Etiqueta" },
  { key: "us", label: "US", hint: "US" },
  { key: "uk", label: "UK", hint: "UK" },
  { key: "cm", label: "cm", hint: "Tu pie" },
] as const;

function GuideFigure({ src, width, height }: { src: string; width: number; height: number }) {
  return (
    <img
      src={src}
      alt=""
      width={width}
      height={height}
      loading="lazy"
      className="h-auto w-full opacity-75 invert mix-blend-screen"
    />
  );
}

function MeasureSteps({
  steps,
  figure,
}: {
  steps: readonly { id: string; title: string; text: string }[];
  figure: ReactNode;
}) {
  return (
    <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
      <ol className="divide-y divide-white/10 border-y border-white/10 lg:col-span-7">
        {steps.map((step) => (
          <li key={step.id} className="grid grid-cols-[2.25rem_1fr] gap-4 py-6 sm:grid-cols-[2.75rem_1fr] sm:py-7">
            <span className="accent-text font-display text-xl leading-none">{step.id}</span>
            <div>
              <h3 className="font-display text-lg font-bold uppercase leading-none tracking-[0.08em]">{step.title}</h3>
              <p className="mt-3 max-w-[48ch] text-[15px] leading-relaxed text-white/65">{step.text}</p>
            </div>
          </li>
        ))}
      </ol>
      <div className="mx-auto w-full lg:col-span-5">{figure}</div>
    </div>
  );
}

function Cell({ label, value }: { label: string; value: string }) {
  return (
    <td className="min-w-0 py-1 sm:px-3 sm:py-4">
      <span className="block text-[10px] uppercase tracking-[0.14em] text-white/35 sm:hidden">{label}</span>
      <span className="tabular-nums text-[15px] text-white/80">{value}</span>
    </td>
  );
}

function ApparelChart({
  title,
  rows,
  example,
}: {
  title: string;
  rows: readonly ApparelRow[];
  example: string;
}) {
  return (
    <figure>
      <figcaption>
        <h3 className="font-display text-xl font-bold uppercase tracking-[0.14em]">{title}</h3>
      </figcaption>
      <table className="mt-5 w-full border-separate border-spacing-0 text-left">
        <thead className="hidden sm:table-header-group">
          <tr className="border-b border-white/15 text-[11px] uppercase tracking-[0.16em] text-white/40">
            <th scope="col" className="border-b border-white/15 py-3 pr-3 text-left font-normal">
              Talla
            </th>
            {apparelColumns.map((column) => (
              <th key={column.key} scope="col" className="border-b border-white/15 px-3 py-3 text-left font-normal">
                {column.label}
                <span className="text-white/25"> cm</span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr
              key={row.size}
              className="grid grid-cols-4 items-end gap-x-3 border-b border-white/10 py-4 sm:table-row sm:py-0"
            >
              <th scope="row" className="pb-0.5 text-left font-display text-[1.75rem] font-bold leading-none sm:py-4 sm:pr-3">
                {row.size}
              </th>
              <Cell label="Pecho" value={row.chest} />
              <Cell label="Cintura" value={row.waist} />
              <Cell label="Cadera" value={row.hip} />
            </tr>
          ))}
        </tbody>
      </table>
      <p className="mt-4 text-sm leading-relaxed text-white/50">{example}</p>
    </figure>
  );
}

function ShoeChart({ title, rows, example }: { title: string; rows: readonly ShoeRow[]; example: string }) {
  return (
    <figure>
      <figcaption>
        <h3 className="font-display text-xl font-bold uppercase tracking-[0.14em]">{title}</h3>
      </figcaption>
      <table className="mt-5 w-full border-separate border-spacing-0 text-left">
        <thead className="hidden sm:table-header-group">
          <tr className="text-[11px] uppercase tracking-[0.16em] text-white/40">
            <th scope="col" className="border-b border-white/15 py-3 pr-3 text-left font-normal">
              Colombia
            </th>
            {shoeColumns.map((column) => (
              <th key={column.key} scope="col" className="border-b border-white/15 px-3 py-3 text-left font-normal">
                {column.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr
              key={row.col}
              className="grid grid-cols-[4.25rem_repeat(4,minmax(0,1fr))] items-end gap-x-2 border-b border-white/10 py-4 sm:table-row sm:py-0"
            >
              <th scope="row" className="pb-0.5 text-left font-display text-[1.35rem] font-bold leading-none sm:py-4 sm:pr-3 sm:text-[1.75rem]">
                {row.col}
              </th>
              <Cell label="EU / FR" value={row.eu} />
              <Cell label="US" value={row.us} />
              <Cell label="UK" value={row.uk} />
              <Cell label="cm" value={row.cm} />
            </tr>
          ))}
        </tbody>
      </table>
      <p className="mt-4 text-sm leading-relaxed text-white/50">{example}</p>
    </figure>
  );
}

const apparelSteps = [
  {
    id: "A",
    title: "Pecho",
    text: "Mide alrededor de la parte más amplia de tu pecho, con la cinta horizontal.",
  },
  {
    id: "B",
    title: "Cintura",
    text: "Mide alrededor de la parte más estrecha de tu cintura, justo encima del ombligo.",
  },
  {
    id: "C",
    title: "Cadera",
    text: "Mide alrededor de la parte más amplia de tus caderas, con la cinta horizontal.",
  },
] as const;

const shoeSteps = [
  {
    id: "01",
    title: "Apoya el talón",
    text: "Pon el pie sobre una hoja de papel, con el talón tocando la pared.",
  },
  {
    id: "02",
    title: "Marca la punta",
    text: "Marca con un lápiz desde el talón hasta la punta del dedo más largo.",
  },
  {
    id: "03",
    title: "Mide los centímetros",
    text: "Mide esa distancia y busca el número en la columna cm de la tabla.",
  },
] as const;

export default function GuiaDeTallasPage() {
  return (
    <HelpLayout
      current="/guia-de-tallas"
      title="Guía de Tallas"
      lead={
        <HelpLead heading="Encuentra tu talla perfecta">
          <p>
            Mide en centímetros y busca ese número en la tabla. La talla que coincide es la que
            pides.
          </p>
        </HelpLead>
      }
    >
      <section id="ropa" className="scroll-mt-24 border-t border-white/10">
        <div className="page-wrap py-16 sm:py-20 lg:py-24">
          <SectionHead number={1} title="Ropa" />
          <p className="mt-6 max-w-[52ch] text-[15px] leading-relaxed text-white/65">
            Toma las tres medidas con una cinta, sin apretar. Luego busca tus centímetros en la
            columna de pecho, cintura o cadera.
          </p>
          <div className="mt-12 lg:mt-16">
            <MeasureSteps
              steps={apparelSteps}
              figure={
                <div className="mx-auto w-full max-w-sm">
                  <GuideFigure src="/sima/guia-talla-cuerpo.png" width={502} height={702} />
                </div>
              }
            />
          </div>
          <div className="mt-16 grid gap-16 lg:mt-20 lg:grid-cols-2 lg:gap-20">
            <ApparelChart
              title="Hombre"
              rows={menApparel}
              example="Ejemplo: pecho de 100 cm en hombre es talla M."
            />
            <ApparelChart
              title="Mujer"
              rows={womenApparel}
              example="Ejemplo: cintura de 72 cm en mujer es talla M."
            />
          </div>
          <p className="mt-10 max-w-[62ch] text-[15px] leading-relaxed text-white/65">
            Si una medida te da una talla y otra la siguiente, <span className="text-white">elige la más grande</span>.
            Las medidas pueden variar entre 1 y 2 cm según el modelo.
          </p>
        </div>
      </section>

      <section id="zapatos" className="scroll-mt-24 border-t border-white/10">
        <div className="page-wrap py-16 sm:py-20 lg:py-24">
          <SectionHead number={2} title="Zapatos" />
          <p className="mt-6 max-w-[54ch] text-[15px] leading-relaxed text-white/65">
            En SIMA pides la talla de <span className="text-white">Colombia</span>. En la etiqueta del
            zapato fíjate en <span className="text-white">EU / FR</span>: esa columna te dice a qué
            talla colombiana corresponde.
          </p>
          <div className="mt-12 lg:mt-16">
            <MeasureSteps
              steps={shoeSteps}
              figure={
                <div className="mx-auto w-full max-w-md">
                  <GuideFigure src="/sima/guia-talla-pie.png" width={452} height={324} />
                </div>
              }
            />
          </div>
          <div className="mt-16 grid gap-16 lg:mt-20 lg:grid-cols-2 lg:gap-20">
            <ShoeChart
              title="Mujer"
              rows={womenShoes}
              example="Ejemplo: una etiqueta EU 37 corresponde a la talla 36 en SIMA."
            />
            <ShoeChart
              title="Hombre"
              rows={menShoes}
              example="Ejemplo: una etiqueta EU 42 corresponde a la talla 39 en SIMA."
            />
          </div>
          <p className="mt-10 max-w-[62ch] text-[15px] leading-relaxed text-white/65">
            Si vas a usar medias gruesas o plantillas, considera media talla más.
          </p>
        </div>
      </section>

      <HelpClosing title="¿Dudas con tu talla?">
        <p>
          Escríbenos antes de comprar y te ayudamos a elegir la ideal para ti. Preferimos resolverlo
          antes que gestionar un cambio después.
        </p>
      </HelpClosing>
    </HelpLayout>
  );
}
