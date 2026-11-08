import type { Metadata } from "next";
import { NewsletterForm } from "@/components/newsletter-form";
import { EditorialPage } from "@/components/story/editorial-page";
import { socialLinks } from "@/lib/home-content";

export const metadata: Metadata = {
  title: "Comunidad – SIMA",
  description:
    "Tu proceso, tu disciplina, tu estilo de vida. SIMA está aquí para acompañarte.",
};

const focus =
  "outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white";

const lines = [
  "Se trata de sentirte mejor.",
  "De cuidar tu cuerpo.",
  "De fortalecer tu mente.",
  "De crear hábitos.",
  "De superar tus propios límites.",
  "De convertir el movimiento en una forma de vivir.",
];

export default function ComunidadPage() {
  return (
    <EditorialPage>
      <h1 className="font-display text-[clamp(3.25rem,8vw,6.25rem)] font-bold uppercase leading-[0.88] tracking-[-0.03em]">
        Comunidad
      </h1>
      <p className="mt-8 text-lg font-bold leading-snug sm:text-xl">
        Tu proceso. Tu disciplina. Tu estilo de vida.
      </p>
      <p className="mt-1 text-lg font-bold leading-snug sm:text-xl">
        SIMA está aquí para acompañarte.
      </p>
      <div className="mt-10 space-y-6 text-[15px] leading-[1.75] sm:text-base">
        <p>
          Desde ese primer entrenamiento en el que no sabes por dónde empezar, hasta el día en que
          miras atrás y reconoces todo lo que has construido.
        </p>
        <p>Porque no se trata solamente de verte mejor.</p>
        <p>
          La comunidad la hacen personas reales que entrenan, no solo atletas. Distintas formas de
          vivir el deporte, con las que te puedes identificar.
        </p>
        <ul className="leading-snug">
          {lines.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
        <p className="font-bold">SIMA. Un lugar donde comienza un estilo de vida deportivo.</p>
      </div>

      <h2 className="mt-20 font-display text-[clamp(3rem,7vw,5.5rem)] font-bold uppercase leading-[0.88] tracking-[-0.03em] sm:mt-28">
        Sé parte
      </h2>
      <p className="mt-8 text-[15px] leading-[1.75] sm:text-base">
        Síguenos en nuestras redes y suscríbete para recibir contenido exclusivo. La disciplina te
        lleva donde la motivación no puede, y es más fácil recorrer ese camino en compañía.
      </p>
      <ul className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
        {socialLinks.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className={`text-sm font-bold uppercase tracking-[0.08em] underline decoration-white/40 decoration-1 underline-offset-[6px] transition-colors hover:decoration-white ${focus}`}
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
      <NewsletterForm tone="line" id="comunidad-email" />
    </EditorialPage>
  );
}
