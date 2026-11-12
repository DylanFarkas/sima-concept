import type { ReactNode } from "react";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { helpPages, type HelpHref } from "@/lib/home-content";
import { HelpTabs } from "@/components/help/help-tabs";
import { pad, splitLast } from "@/components/help/help-blocks";

export function HelpLayout({
  current,
  title,
  lead,
  caption,
  children,
}: {
  current: HelpHref;
  title: string;
  lead?: ReactNode;
  caption?: ReactNode;
  children: ReactNode;
}) {
  const index = helpPages.findIndex((page) => page.href === current);
  const { lead: titleLead, last } = splitLast(title);

  return (
    <>
      <SiteHeader />
      <main className="bg-background text-white">
        <header className="page-wrap pb-12 pt-14 sm:pb-14 sm:pt-20 lg:pb-20 lg:pt-28">
          <div className="mt-8 grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-12">
            <div className="lg:col-span-7">
              <h1 className="font-display text-[clamp(2.75rem,13vw,5.5rem)] font-bold uppercase leading-[0.88] tracking-[-0.02em] lg:text-[clamp(4rem,6.6vw,7.5rem)]">
                {titleLead ? (
                  <>
                    <span className="block">{titleLead}</span>{" "}
                    <span className="accent-stroke block text-transparent [-webkit-text-stroke:1.5px_white]">{last}</span>
                  </>
                ) : (
                  last
                )}
              </h1>
              {caption ? <div className="mt-6 text-sm leading-snug text-white/75">{caption}</div> : null}
            </div>
            {lead ? <div className="lg:col-span-5 lg:pb-2">{lead}</div> : null}
          </div>
          <HelpTabs current={current} />
        </header>
        {children}
      </main>
      <SiteFooter />
    </>
  );
}
