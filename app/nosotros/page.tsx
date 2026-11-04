import type { Metadata } from "next";
import { EditorialPage, storyCaps, storyTitle } from "@/components/story/editorial-page";

export const metadata: Metadata = {
  title: "Nosotros – SIMA",
  description:
    "En SIMA queremos acompañar cada camino: ropa, calzado y orientación para convertir el deporte en parte de tu vida.",
};

export default function NosotrosPage() {
  return (
    <EditorialPage>
      <h1 className={storyTitle}>
        Queremos acompañarte{" "}
        <br className="hidden md:block" />
        en el proceso
      </h1>
      <p className={`mt-10 sm:mt-12 ${storyCaps}`}>
        Sabemos que cada persona tiene un punto de partida diferente. Algunos están comenzando.
        Otros quieren volver a entrenar. Otros llevan años haciendo del deporte parte de su vida.
      </p>
      <h2 className={`mt-16 sm:mt-20 lg:mt-24 ${storyTitle}`}>
        En SIMA queremos acompañar{" "}
        <br className="hidden md:block" />
        cada uno de esos caminos.
      </h2>
      <p className={`mt-10 sm:mt-12 ${storyCaps}`}>
        Queremos que encuentres en un solo lugar ropa, calzado, accesorios, tecnología y productos
        deportivos, pero también la orientación necesaria para tomar mejores decisiones.
      </p>
      <p className={`mt-8 sm:mt-10 ${storyCaps}`}>
        Porque creemos que cuando entiendes lo que haces, encuentras las herramientas adecuadas y
        construyes hábitos con disciplina, el deporte deja de ser una obligación y comienza a
        convertirse en parte de tu vida.
      </p>
    </EditorialPage>
  );
}
