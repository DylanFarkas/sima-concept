"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { IconCart } from "@/components/icons";
import type { ProductDetail as ProductDetailData, ProductVariant } from "@/lib/product-details";

function formatPrice(value: number) {
  const formatted = new Intl.NumberFormat("es-CO", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
  return `$${formatted}`;
}

function initialSelection(product: ProductDetailData) {
  const variant = product.variants.find((entry) => entry.available) ?? product.variants[0];
  const selected: Record<string, string> = {};
  product.options.forEach((option, index) => {
    selected[option.name] = variant?.options[index] ?? option.values[0] ?? "";
  });
  return selected;
}

function matchVariant(product: ProductDetailData, selected: Record<string, string>) {
  return product.variants.find((variant) =>
    product.options.every((option, index) => variant.options[index] === selected[option.name]),
  );
}

function galleryImages(product: ProductDetailData, variant: ProductVariant | undefined) {
  const images = product.images;
  const featured = variant?.image;
  if (!featured) return images;
  return [featured, ...images.filter((src) => src !== featured)];
}

export function ProductDetail({ product }: { product: ProductDetailData }) {
  const [selected, setSelected] = useState(() => initialSelection(product));
  const [quantity, setQuantity] = useState(1);
  const [zoom, setZoom] = useState<number | null>(null);
  const [showBar, setShowBar] = useState(false);
  const buyRowRef = useRef<HTMLDivElement>(null);

  const variant = matchVariant(product, selected);
  const images = useMemo(() => galleryImages(product, variant), [product, variant]);
  const available = variant?.available ?? false;
  const price = variant?.price ?? product.variants[0]?.price ?? 0;
  const variantLabel = product.options
    .map((option) => selected[option.name])
    .filter(Boolean)
    .join(" / ");

  useEffect(() => {
    const row = buyRowRef.current;
    if (!row) return;
    const observer = new IntersectionObserver(([entry]) => {
      const { top, bottom } = entry.boundingClientRect;
      setShowBar(!entry.isIntersecting && (top < 0 || bottom < 0));
    });
    observer.observe(row);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (zoom === null) return;
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setZoom(null);
      if (event.key === "ArrowRight") {
        setZoom((current) =>
          current === null ? current : (current + 1) % images.length,
        );
      }
      if (event.key === "ArrowLeft") {
        setZoom((current) =>
          current === null ? current : (current - 1 + images.length) % images.length,
        );
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [zoom, images.length]);

  return (
    <div className="page-wrap lg:grid lg:grid-cols-[2fr_1fr] lg:items-start">
      <div className="lg:pr-6">
        {images.length === 0 ? (
          <div className="flex aspect-square items-center justify-center bg-neutral-200 font-display tracking-[0.2em] text-ink/40">
            SIMA
          </div>
        ) : (
          <ul className="grid grid-cols-2 items-stretch gap-1">
            {images.map((src, index) => (
              <li key={`${src}-${index}`} className="flex items-center">
                <button
                  type="button"
                  className="block w-full"
                  aria-label={`Ampliar ${index + 1} multimedia`}
                  onClick={() => setZoom(index)}
                >
                  <img
                    src={src}
                    alt={product.title}
                    className="h-auto w-full object-contain"
                  />
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="py-6 lg:sticky lg:top-[66px] lg:py-6 lg:pl-6">
        <h1 className="font-display text-[2rem] font-bold uppercase leading-[1.1] tracking-[0.03em]">
          {product.title}
        </h1>
        <p className="mt-3 text-sm">{formatPrice(price)}</p>

        {product.options.length > 0 ? (
        <div className="mt-[67px] space-y-4">
          {product.options.map((option) => (
            <fieldset key={option.name}>
              <legend className="mb-2 text-sm">{option.name}</legend>
              <div
                className="grid gap-[11px]"
                style={{
                  gridTemplateColumns: `repeat(${Math.min(option.values.length, 4)}, minmax(0, 1fr))`,
                }}
              >
                {option.values.map((value) => {
                  const active = selected[option.name] === value;
                  return (
                    <button
                      key={value}
                      type="button"
                      aria-pressed={active}
                      onClick={() =>
                        setSelected((current) => ({ ...current, [option.name]: value }))
                      }
                      className={`h-[46px] rounded-[14px] text-sm ${
                        active
                          ? "bg-white text-ink"
                          : "border border-muted text-white"
                      }`}
                    >
                      {value}
                    </button>
                  );
                })}
              </div>
            </fieldset>
          ))}
        </div>
        ) : null}

        <div
          ref={buyRowRef}
          className={`${product.options.length > 0 ? "mt-7" : "mt-8"} flex gap-[11px]`}
        >
          <div className="flex h-[52px] w-[126px] shrink-0 items-center border border-muted">
            <button
              type="button"
              aria-label="Disminuir cantidad"
              disabled={quantity <= 1}
              onClick={() => setQuantity((current) => Math.max(1, current - 1))}
              className="h-11 w-11 text-lg text-white disabled:text-white/35"
            >
              −
            </button>
            <input
              aria-label="Cantidad"
              inputMode="numeric"
              value={quantity}
              onChange={(event) => {
                const next = Number(event.target.value.replace(/\D/g, ""));
                setQuantity(Number.isFinite(next) && next > 0 ? next : 1);
              }}
              className="w-9 bg-transparent text-center text-sm text-white outline-none"
            />
            <button
              type="button"
              aria-label="Aumentar cantidad"
              onClick={() => setQuantity((current) => current + 1)}
              className="h-11 w-11 text-lg text-white"
            >
              +
            </button>
          </div>
          <button
            type="button"
            disabled={!available}
            className="flex h-[52px] flex-1 items-center justify-center gap-2 bg-white px-6 text-sm text-ink disabled:opacity-50"
          >
            <IconCart className="h-5 w-5" />
            {available ? "Agregar al carrito" : "Agotado"}
          </button>
        </div>
        <button
          type="button"
          className="mt-[11px] flex h-[52px] w-full items-center justify-center bg-white text-sm text-ink"
        >
          Comprar ahora
        </button>

        {product.description ? (
          <p className="mt-7 text-sm leading-[1.6] whitespace-pre-line">{product.description}</p>
        ) : null}
      </div>

      {showBar ? (
        <div
          role="region"
          aria-label="Barra de agregar rápido al carrito"
          className="fixed bottom-5 left-1/2 z-30 flex h-[74px] w-[min(600px,calc(100%-2rem))] -translate-x-1/2 items-center gap-3 bg-background px-3 shadow-[0_4px_20px_rgba(255,255,255,0.15)]"
        >
          {images[0] ? (
            <img src={images[0]} alt="" className="h-[52px] w-[52px] object-cover" />
          ) : null}
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm">{product.title}</p>
            {variantLabel ? (
              <p className="truncate text-sm text-white/80">{variantLabel}</p>
            ) : null}
          </div>
          <p className="shrink-0 text-sm">{formatPrice(price)}</p>
          <button
            type="button"
            disabled={!available}
            className="flex h-[52px] w-[188px] shrink-0 items-center justify-center gap-2 bg-white text-sm text-ink disabled:opacity-50"
          >
            <IconCart className="h-5 w-5" />
            {available ? "Agregar al carrito" : "Agotado"}
          </button>
        </div>
      ) : null}

      {zoom !== null && images[zoom] ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={product.title}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-6"
          onClick={() => setZoom(null)}
        >
          <button
            type="button"
            aria-label="Cerrar"
            className="absolute right-5 top-5 text-2xl text-white"
            onClick={() => setZoom(null)}
          >
            ×
          </button>
          {images.length > 1 ? (
            <>
              <button
                type="button"
                aria-label="Anterior"
                className="absolute left-4 top-1/2 -translate-y-1/2 px-3 py-6 text-2xl text-white"
                onClick={(event) => {
                  event.stopPropagation();
                  setZoom((current) =>
                    current === null ? current : (current - 1 + images.length) % images.length,
                  );
                }}
              >
                ‹
              </button>
              <button
                type="button"
                aria-label="Siguiente"
                className="absolute right-4 top-1/2 -translate-y-1/2 px-3 py-6 text-2xl text-white"
                onClick={(event) => {
                  event.stopPropagation();
                  setZoom((current) =>
                    current === null ? current : (current + 1) % images.length,
                  );
                }}
              >
                ›
              </button>
            </>
          ) : null}
          <img
            src={images[zoom]}
            alt={product.title}
            className="max-h-[90vh] max-w-[90vw] object-contain"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      ) : null}
    </div>
  );
}
