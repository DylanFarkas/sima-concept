import type { Metadata } from "next";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { CategoryHero } from "@/components/category/category-hero";
import { ProductGrid } from "@/components/category/product-grid";
import { HeroPantalla } from "@/components/category/hero-pantalla";
import { HeroTriptico } from "@/components/category/hero-triptico";
import { HeroPartido } from "@/components/category/hero-partido";
import { CompactHeader } from "@/components/category/compact-header";
import { ExploreTiles } from "@/components/category/explore-tiles";
import { BrandIndex } from "@/components/category/brand-index";
import { FeatureSpotlight } from "@/components/category/feature-spotlight";
import { PhraseBand } from "@/components/category/phrase-band";
import { categories, isCategorySlug, type CategorySlug } from "@/lib/catalog";
import {
  categoryPages,
  insertMinimum,
  type CategoryModule,
  type CategoryPage as CategoryPageConfig,
  type GridInsert,
} from "@/lib/category-pages";
import {
  brandsOf,
  filterCatalog,
  subcategoriesOf,
  type CatalogQuery,
  type Subcategory,
} from "@/lib/taxonomy";
import { resolveServerPrefs } from "@/lib/variant-prefs.server";

type CategoryParams = {
  params: Promise<{ categoria: string }>;
  searchParams: Promise<CatalogQuery & { categorias?: string | string[] }>;
};

export function generateStaticParams() {
  return Object.keys(categories).map((categoria) => ({ categoria }));
}

export async function generateMetadata({
  params,
}: CategoryParams): Promise<Metadata> {
  const { categoria } = await params;
  if (!isCategorySlug(categoria)) return {};
  return { title: `${categories[categoria].label} – SIMA` };
}

export default function CategoryPage({ params, searchParams }: CategoryParams) {
  return (
    <>
      <SiteHeader />
      <main>
        <Suspense fallback={null}>
          <CategoryContent params={params} searchParams={searchParams} />
        </Suspense>
      </main>
      <SiteFooter />
    </>
  );
}

async function CategoryContent({ params, searchParams }: CategoryParams) {
  const { categoria } = await params;
  const query = await searchParams;
  if (!isCategorySlug(categoria)) notFound();
  const prefs = await resolveServerPrefs(query);
  const filtered = filterCatalog(categories[categoria].products, query);
  const mode = prefs.categorias;

  if (mode === "original") {
    return (
      <>
        <CategoryHero />
        <ProductGrid products={filtered.products} heading={filtered.label ?? undefined} />
      </>
    );
  }

  return <NuevaCategory slug={categoria} filtered={filtered} />;
}

function NuevaCategory({
  slug,
  filtered,
}: {
  slug: CategorySlug;
  filtered: ReturnType<typeof filterCatalog>;
}) {
  const page = categoryPages[slug];
  const all = categories[slug].products;
  const subcategories = subcategoriesOf(slug);
  const parent = { label: page.hero.title, href: `/${slug}` };

  if (filtered.label) {
    const activeKey = filtered.tipo ?? filtered.audiencia ?? "marca";
    return (
      <>
        <CompactHeader
          parent={parent}
          title={filtered.label}
          count={filtered.products.length}
          tone={page.grid.tone}
        />
        <ProductGrid
          products={filtered.products}
          heading={null}
          card="editorial"
          aspect={page.grid.aspect}
          tone={page.grid.tone}
          inserts={filtered.products.length >= insertMinimum ? phrasesOnly(page.grid.inserts) : []}
          sidebarFilters
          subcategories={subcategories}
          allHref={parent.href}
          activeKey={activeKey}
        />
      </>
    );
  }

  return (
    <>
      <NuevaHero page={page} subcategories={subcategories} total={all.length} />
      {page.before.map((module, index) => (
        <ModuleBlock
          key={`before-${index}`}
          module={module}
          slug={slug}
          subcategories={subcategories}
        />
      ))}
      <ProductGrid
        products={all}
        heading="Todos los productos"
        card="editorial"
        aspect={page.grid.aspect}
        tone={page.grid.tone}
        inserts={page.grid.inserts}
        sidebarFilters
        subcategories={subcategories}
        allHref={`/${slug}`}
      />
      {page.after.map((module, index) => (
        <ModuleBlock
          key={`after-${index}`}
          module={module}
          slug={slug}
          subcategories={subcategories}
        />
      ))}
    </>
  );
}

function phrasesOnly(inserts: GridInsert[]): GridInsert[] {
  return inserts.flatMap((insert) =>
    insert.kind === "phrase" ? [{ after: insert.after, kind: "phrase", text: insert.text }] : [],
  );
}

function NuevaHero({
  page,
  subcategories,
  total,
}: {
  page: CategoryPageConfig;
  subcategories: Subcategory[];
  total: number;
}) {
  const hero = page.hero;
  if (hero.format === "pantalla") return <HeroPantalla hero={hero} />;
  if (hero.format === "triptico") return <HeroTriptico hero={hero} />;
  return <HeroPartido hero={hero} subcategories={subcategories} total={total} />;
}

function ModuleBlock({
  module,
  slug,
  subcategories,
}: {
  module: CategoryModule;
  slug: CategorySlug;
  subcategories: Subcategory[];
}) {
  if (module.kind === "explore") {
    const items = subcategories
      .filter((sub) => module.photos[sub.key])
      .map((sub) => {
        const photo = module.photos[sub.key];
        return {
          sub,
          image: typeof photo === "string" ? photo : photo.image,
        };
      });
    return <ExploreTiles title={module.title} items={items} />;
  }

  if (module.kind === "brands") {
    const brands = brandsOf(categories[slug].products);
    const main = brands.filter((brand) => brand.products.length >= 2);
    const others = brands.filter((brand) => brand.products.length < 2);
    return (
      <BrandIndex
        title={module.title}
        text={module.text}
        basePath={`/${slug}`}
        brands={main.map((brand) => ({
          key: brand.key,
          label: brand.label,
          count: brand.products.length,
          image: (brand.products.find((product) => product.available) ?? brand.products[0]).image,
        }))}
        others={others.map((brand) => ({ key: brand.key, label: brand.label }))}
      />
    );
  }

  if (module.kind === "feature") {
    return (
      <FeatureSpotlight
        eyebrow={module.eyebrow}
        text={module.text}
        product={module.product}
        image={module.image}
      />
    );
  }

  return <PhraseBand text={module.text} tone={module.tone} cta={module.cta} />;
}
