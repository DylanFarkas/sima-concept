"use client";

import { Suspense, type ReactNode } from "react";
import { useSearchParams } from "next/navigation";
import { footerVariant, isFooterVariant, type FooterVariant } from "@/lib/footer-variants";

type Footers = Record<FooterVariant, ReactNode>;

export function FooterSwitch({ footers }: { footers: Footers }) {
  return (
    <Suspense fallback={footers[footerVariant]}>
      <FooterFromQuery footers={footers} />
    </Suspense>
  );
}

function FooterFromQuery({ footers }: { footers: Footers }) {
  const requested = useSearchParams().get("footer");
  return footers[isFooterVariant(requested) ? requested : footerVariant];
}
