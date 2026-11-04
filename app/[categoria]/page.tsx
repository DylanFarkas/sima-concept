import type { Metadata } from "next";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { CategoryHero } from "@/components/category/category-hero";
import { ProductGrid } from "@/components/category/product-grid";
import { categories, isCategorySlug } from "@/lib/catalog";
import { filterCatalog } from "@/lib/taxonomy";

type CategoryParams = {
  params: Promise<{ categoria: string }>;
  searchParams: Promise<{ tipo?: string | string[]; audiencia?: string | string[] }>;
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
        <CategoryHero />
        <Suspense fallback={<ProductGridFallback />}>
          <CategoryProducts params={params} searchParams={searchParams} />
        </Suspense>
      </main>
      <SiteFooter />
    </>
  );
}

async function CategoryProducts({ params, searchParams }: CategoryParams) {
  const { categoria } = await params;
  const query = await searchParams;
  if (!isCategorySlug(categoria)) notFound();
  const filtered = filterCatalog(categories[categoria].products, query);
  return (
    <ProductGrid
      products={filtered.products}
      heading={filtered.label ?? undefined}
    />
  );
}

function ProductGridFallback() {
  return (
    <section id="productos" className="bg-background text-white">
      <div className="page-wrap py-10 lg:py-12">
        <h2 className="font-display text-[clamp(2.25rem,4.8vw,3rem)] font-bold uppercase leading-none">
          PRODUCTOS
        </h2>
      </div>
    </section>
  );
}
