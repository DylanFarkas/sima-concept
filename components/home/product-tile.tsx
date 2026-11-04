import Link from "next/link";
import { formatPrice } from "@/lib/home-picks";
import type { Product } from "@/lib/catalog";

export function ProductTile({ product }: { product: Product }) {
  return (
    <Link
      href={`/producto/${product.handle}`}
      className="group flex min-h-0 flex-col bg-card text-white outline-none focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-white"
    >
      <span className="relative block min-h-40 flex-1 overflow-hidden bg-[#1c1c1c]">
        {product.image ? (
          <img
            src={product.image}
            alt=""
            className="absolute inset-0 h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105"
          />
        ) : null}
      </span>
      <span className="block px-3.5 py-3">
        <span className="block text-sm leading-snug">{product.title}</span>
        <span className="mt-1 block font-display text-sm font-bold tracking-[0.04em]">
          {formatPrice(product.price)}
        </span>
      </span>
    </Link>
  );
}
