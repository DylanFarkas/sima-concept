"use client";

import { Suspense, type ReactNode } from "react";
import { useSearchParams } from "next/navigation";
import { footerVariant, type FooterVariant } from "@/lib/footer-variants";
import { readPrefs, resolvePrefs } from "@/lib/variant-prefs";

type Footers = Record<FooterVariant, ReactNode>;

export function FooterSwitch({
  footers,
  initialFooter = footerVariant,
}: {
  footers: Footers;
  initialFooter?: FooterVariant;
}) {
  return (
    <Suspense fallback={footers[initialFooter]}>
      <FooterFromQuery footers={footers} initialFooter={initialFooter} />
    </Suspense>
  );
}

function FooterFromQuery({
  footers,
  initialFooter,
}: {
  footers: Footers;
  initialFooter: FooterVariant;
}) {
  const params = useSearchParams();
  const footer = resolvePrefs(params, { footer: initialFooter, ...readPrefs() }).footer;
  return footers[footer];
}
