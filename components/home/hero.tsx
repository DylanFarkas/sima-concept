import Link from "next/link";
import { heroValues } from "@/lib/home-content";

export function Hero() {
  return (
    <section className="relative min-h-[calc(65svh-66px)] overflow-hidden bg-ink text-white">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        src="/sima/sima-home-hero-video.mp4"
      />
      <div className="absolute inset-0 bg-[rgba(18,18,18,0.5)]" />

      <div className="page-wrap relative flex min-h-[calc(65svh-66px)] items-center py-18">
        <div className="flex w-full flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-col items-start gap-4 -ml-6 lg:-ml-8">
            <h1 className="font-display text-[clamp(3rem,7.2vw,5.2rem)] font-bold uppercase leading-none">
              DISCIPLINA
              <br />
              PROPÓSITO. FE.
            </h1>
            <p className="max-w-56 pt-1 text-sm leading-[1.6]">
              Equipamos a personas que eligen
              <br />
              crecer cada día.
            </p>
            <Link
              href="/nosotros"
              className="mt-3 inline-flex items-center justify-center bg-white px-6 py-5 text-sm text-ink"
            >
              CONOCE NUESTRA HISTORIA
            </Link>
          </div>

          <div className="flex items-center gap-6 self-start lg:self-center -mr-6 lg:-mr-8">
            <span className="h-23 w-[1.2px] bg-white" />
            <p className="font-display text-[13px] font-bold uppercase leading-[1.2] tracking-[0.03em]">
              {heroValues.map((word) => (
                <span key={word} className="block">
                  {word}
                </span>
              ))}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
