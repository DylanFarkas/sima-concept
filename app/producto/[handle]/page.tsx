import type { Metadata } from "next";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ProductDetail } from "@/components/product/product-detail";
import { RelatedProducts } from "@/components/product/related-products";
import { productDetails } from "@/lib/product-details";

type ProductParams = {
  params: Promise<{ handle: string }>;
};

export function generateStaticParams() {
  return Object.keys(productDetails).map((handle) => ({ handle }));
}

export async function generateMetadata({
  params,
}: ProductParams): Promise<Metadata> {
  const { handle } = await params;
  const product = productDetails[handle];
  if (!product) return {};
  return { title: `${product.title} – SIMA` };
}

export default function ProductPage({ params }: ProductParams) {
  return (
    <>
      <SiteHeader />
      <main>
        <Suspense fallback={null}>
          <ProductContent params={params} />
        </Suspense>
      </main>
      <SiteFooter />
    </>
  );
}

async function ProductContent({ params }: ProductParams) {
  const { handle } = await params;
  const product = productDetails[handle];
  if (!product) notFound();

  const related = product.related.flatMap((relatedHandle) => {
    const item = productDetails[relatedHandle];
    if (!item) return [];
    const variant = item.variants.find((entry) => entry.available) ?? item.variants[0];
    return [
      {
        handle: relatedHandle,
        title: item.title,
        price: variant?.price ?? 0,
        image: item.images[0] ?? "",
      },
    ];
  });

  return (
    <>
      <ProductDetail key={handle} product={product} />
      <RelatedProducts products={related} />
    </>
  );
}
