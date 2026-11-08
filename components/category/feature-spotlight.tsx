import Link from "next/link";
import type { Product } from "@/lib/catalog";
import { formatPrice } from "@/lib/home-picks";
import { ButtonLabel, Photo, focusLight } from "@/components/shared/editorial";

type Props = { eyebrow: string; text: string; product: Product; image?: string };

export function FeatureSpotlight({ eyebrow, text, product, image }: Props) {
  return (
    <section className="bg-cream py-20 text-ink lg:py-28">
      <div className="page-wrap">
        <Link
          href={`/producto/${product.handle}`}
          className={`group grid items-center gap-10 lg:grid-cols-12 lg:gap-16 ${focusLight}`}
        >
          <span className="relative block aspect-square overflow-hidden bg-white lg:col-span-7">
            {image ? (
              <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover" />
            ) : (
              <Photo product={product} />
            )}
          </span>
          <span className="flex flex-col items-start lg:col-span-5">
            <span className="font-display text-xs font-bold uppercase tracking-[0.2em] text-ink/60">{eyebrow}</span>
            <span className="mt-5 block font-display text-[clamp(3rem,6.5vw,6.5rem)] font-bold uppercase leading-[0.88] tracking-tight">
              {product.title}
            </span>
            <span className="mt-6 block max-w-[34ch] text-base leading-relaxed text-ink/75">{text}</span>
            <span className="mt-8 flex items-center gap-6">
              <span className="font-display text-2xl font-bold tracking-[0.02em]">{formatPrice(product.price)}</span>
              <ButtonLabel tone="dark">Ver producto</ButtonLabel>
            </span>
          </span>
        </Link>
      </div>
    </section>
  );
}
