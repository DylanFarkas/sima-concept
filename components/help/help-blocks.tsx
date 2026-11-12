import type { ReactNode } from "react";
import { whatsappHref } from "@/lib/home-content";
import { ButtonLabel, focusDark, focusLight } from "@/components/shared/editorial";

export const pad = (value: number) => String(value).padStart(2, "0");

export const linkDark = `underline decoration-white/40 decoration-1 underline-offset-[5px] transition-colors hover:decoration-white ${focusDark}`;
export const linkLight = `underline decoration-ink/40 decoration-1 underline-offset-[5px] transition-colors hover:decoration-ink ${focusLight}`;

export function splitLast(text: string) {
  const words = text.split(" ");
  const last = words.pop() ?? "";
  return { lead: words.join(" "), last };
}

export function HelpLead({ heading, children }: { heading?: string; children: ReactNode }) {
  return (
    <div className="max-w-[46ch]">
      {heading ? (
        <h2 className="font-display text-[clamp(1.5rem,2.4vw,2.125rem)] font-bold uppercase leading-[1.05] tracking-[0.01em]">
          {heading}
        </h2>
      ) : null}
      <div className={`text-base leading-relaxed text-white/75 [&_strong]:text-white ${heading ? "mt-4" : ""}`}>
        {children}
      </div>
    </div>
  );
}

export function SectionHead({
  number,
  title,
  className = "",
}: {
  number?: number;
  title: string;
  className?: string;
}) {
  return (
    <div className={`flex items-baseline gap-4 ${className}`}>
      {number ? (
        <span className="accent-text font-display text-xs font-bold tracking-[0.18em]">{pad(number)}</span>
      ) : null}
      <h2 className="font-display text-[clamp(1.75rem,3.4vw,3rem)] font-bold uppercase leading-[0.95] tracking-[-0.005em]">
        {title}
      </h2>
    </div>
  );
}

export function HelpClosing({ title, children }: { title: string; children: ReactNode }) {
  const { lead, last } = splitLast(title);

  return (
    <section className="bg-cream text-ink">
      <div className="page-wrap grid gap-10 py-16 sm:py-20 lg:grid-cols-12 lg:items-end lg:gap-12 lg:py-28">
        <h2 className="font-display text-[clamp(2.75rem,7vw,6.5rem)] font-bold uppercase leading-[0.98] tracking-[-0.02em] lg:col-span-7">
          {lead ? <span className="block">{lead} </span> : null}
          <span className="block text-transparent [-webkit-text-stroke:1.5px_var(--ink)]">{last}</span>
        </h2>
        <div className="lg:col-span-5 lg:pb-3">
          <div className="max-w-[40ch] text-base leading-relaxed">{children}</div>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
            className={`group mt-8 inline-flex ${focusLight}`}
          >
            <ButtonLabel tone="dark">Escríbenos por WhatsApp</ButtonLabel>
          </a>
        </div>
      </div>
    </section>
  );
}
