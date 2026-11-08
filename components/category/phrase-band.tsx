import Link from "next/link";
import type { Cta, Tone } from "@/lib/category-pages";
import { focusDark, focusLight } from "@/components/shared/editorial";

type Props = { text: string; tone: Tone; cta?: Cta };

export function PhraseLine({ text, tone, cta }: Props) {
  const words = text.split(" ");
  const last = words.pop();
  const light = tone === "white";

  return (
    <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
      <p className="font-display text-[clamp(3rem,9vw,9rem)] font-bold uppercase leading-[0.9] tracking-[-0.02em]">
        {words.join(" ")}{" "}
        <span
          className={`text-transparent ${light ? "[-webkit-text-stroke:1.5px_var(--ink)]" : "accent-stroke [-webkit-text-stroke:1.5px_white]"}`}
        >
          {last}
        </span>
      </p>
      {cta ? (
        <Link
          href={cta.href}
          className={`shrink-0 text-sm font-bold underline decoration-1 underline-offset-[6px] lg:pb-4 ${light ? focusLight : focusDark}`}
        >
          {cta.label}
        </Link>
      ) : null}
    </div>
  );
}

export function PhraseBand(props: Props) {
  return (
    <section className={`overflow-hidden ${props.tone === "white" ? "bg-white text-ink" : "bg-background text-white"}`}>
      <div className="page-wrap py-20 lg:py-28">
        <PhraseLine {...props} />
      </div>
    </section>
  );
}
