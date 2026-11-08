import { Suspense } from "react";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { FicheroHome } from "@/components/home/fichero-home";
import { HomeRest } from "@/components/home/home-rest";
import { MostradorHome } from "@/components/home/mostrador-home";
import { OriginalHomeBody } from "@/components/home/original-home";
import { Hero } from "@/components/home/hero";
import { PortadaHome } from "@/components/home/portada-home";
import { type ContentMode } from "@/lib/content-variants";
import { type HeroVariant } from "@/lib/hero-variants";
import { resolveServerPrefs } from "@/lib/variant-prefs.server";

type HomeQuery = {
  searchParams: Promise<{
    hero?: string | string[];
    content?: string | string[];
    nav?: string | string[];
    categorias?: string | string[];
    footer?: string | string[];
  }>;
};

function HomeHero({ variant }: { variant: HeroVariant }) {
  if (variant === "original") return <Hero />;
  if (variant === "2") return <MostradorHome />;
  if (variant === "3") return <FicheroHome />;
  return <PortadaHome />;
}

function HomeBody({ mode }: { mode: ContentMode }) {
  return mode === "nuevo" ? <HomeRest /> : <OriginalHomeBody />;
}

export default function Home({ searchParams }: HomeQuery) {
  return (
    <>
      <SiteHeader />
      <main>
        <Suspense fallback={null}>
          <HomeContent searchParams={searchParams} />
        </Suspense>
      </main>
      <SiteFooter />
    </>
  );
}

async function HomeContent({ searchParams }: HomeQuery) {
  const query = await searchParams;
  const prefs = await resolveServerPrefs(query);

  return (
    <>
      <HomeHero variant={prefs.hero} />
      <HomeBody mode={prefs.content} />
    </>
  );
}
