import Link from "next/link";

type RelatedProduct = {
  handle: string;
  title: string;
  price: number;
  image: string;
};

function formatPrice(value: number) {
  const formatted = new Intl.NumberFormat("es-CO", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
  return `$${formatted}`;
}

export function RelatedProducts({ products }: { products: RelatedProduct[] }) {
  if (products.length === 0) return null;

  return (
    <section className="page-wrap py-12">
      <h2 className="font-display text-2xl font-bold uppercase leading-none tracking-[0.03em]">
        You may also like
      </h2>
      <ul className="mt-7 grid grid-cols-2 items-start gap-x-3 gap-y-6 lg:grid-cols-4">
        {products.map((product) => (
          <li key={product.handle}>
            <Link href={`/producto/${product.handle}`} className="block">
              {product.image ? (
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-auto w-full bg-white object-cover"
                />
              ) : (
                <span className="flex aspect-square items-center justify-center bg-neutral-200 font-display text-sm tracking-[0.2em] text-ink/40">
                  SIMA
                </span>
              )}
              <span className="mt-3 block text-[13px] leading-[22px]">{product.title}</span>
              <span className="mt-[9px] block font-display text-xs font-bold leading-[14px] tracking-[0.03em]">
                {formatPrice(product.price)}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
