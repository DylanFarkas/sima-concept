export function CategoryHero() {
  return (
    <section className="relative min-h-[calc(80svh-66px)] overflow-hidden bg-ink text-white">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        src="/sima/sima-category-hero-video.mp4"
      />
      <div className="absolute inset-0 bg-black/25" />
      <div className="page-wrap relative flex min-h-[calc(80svh-66px)] flex-col items-center justify-center py-16 text-center">
        <h1 className="max-w-[18ch] font-display text-[clamp(2.75rem,6.4vw,4.5rem)] font-bold uppercase leading-none lg:max-w-none lg:whitespace-nowrap">
          EXPLORA NUESTRAS ÚLTIMAS REFERENCIAS.
        </h1>
        <a
          href="#productos"
          className="mt-8 inline-flex items-center justify-center bg-white px-6 py-4 text-sm text-ink"
        >
          Comprar ahora
        </a>
      </div>
    </section>
  );
}
