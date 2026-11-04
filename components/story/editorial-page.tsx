import type { ReactNode } from "react";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export function EditorialPage({ children }: { children: ReactNode }) {
  return (
    <>
      <SiteHeader />
      <main>
        <article className="bg-background text-white">
          <div className="page-wrap py-20 sm:py-28 lg:py-36">
            <div className="mx-auto w-full max-w-184 text-left">{children}</div>
          </div>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}

export const storyTitle =
  "font-display text-[clamp(2.35rem,5vw,4.25rem)] font-bold uppercase leading-[0.9] tracking-[-0.02em]";

export const storyCaps =
  "text-[12px] font-bold uppercase leading-[1.8] tracking-[0.04em] sm:text-[13px]";
