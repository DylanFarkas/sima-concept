import { Suspense } from "react";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { FicheroHome } from "@/components/home/fichero-home";
import { HomeRest } from "@/components/home/home-rest";
import { MostradorHome } from "@/components/home/mostrador-home";
import { OriginalHomeBody } from "@/components/home/original-home";
import { Hero } from "@/components/home/hero";
import { PortadaHome } from "@/components/home/portada-home";
import { contentMode, isContentMode, type ContentMode } from "@/lib/content-variants";
import { heroVariant, isHeroVariant, type HeroVariant } from "@/lib/hero-variants";

type HomeQuery = {
  searchParams: Promise<{ hero?: string | string[]; content?: string | string[] }>;
};

function pickParam(value: string | string[] | undefined) {
  return (Array.isArray(value) ? value[0] : value) ?? null;
}

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
        <Suspense
          fallback={
            <>
              <HomeHero variant={heroVariant} />
              <HomeBody mode={contentMode} />
            </>
          }
        >
          <HomeMain searchParams={searchParams} />
        </Suspense>
      </main>
      <SiteFooter />
    </>
  );
}

async function HomeMain({ searchParams }: HomeQuery) {
  const query = await searchParams;
  const heroParam = pickParam(query.hero);
  const contentParam = pickParam(query.content);
  const hero = isHeroVariant(heroParam) ? heroParam : heroVariant;
  const content = isContentMode(contentParam) ? contentParam : contentMode;

  return (
    <>
      <HomeHero variant={hero} />
      <HomeBody mode={content} />
    </>
  );
}
