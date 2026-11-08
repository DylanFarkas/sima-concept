import { Suspense, type ReactNode } from "react";
import { CartelFooter } from "@/components/footer/cartel-footer";
import { FirmaFooter } from "@/components/footer/firma-footer";
import { FooterSwitch } from "@/components/footer/footer-switch";
import { OriginalFooter } from "@/components/footer/original-footer";
import { TrazoFooter } from "@/components/footer/trazo-footer";
import { footerVariant, type FooterVariant } from "@/lib/footer-variants";
import { getServerVariantPrefs } from "@/lib/variant-prefs.server";

const footers: Record<FooterVariant, ReactNode> = {
  "1": <FirmaFooter />,
  "2": <TrazoFooter />,
  "3": <CartelFooter />,
  original: <OriginalFooter />,
};

export function SiteFooter() {
  return (
    <Suspense fallback={<FooterSwitch footers={footers} />}>
      <SiteFooterFromPrefs />
    </Suspense>
  );
}

async function SiteFooterFromPrefs() {
  const prefs = await getServerVariantPrefs();
  return (
    <FooterSwitch
      initialFooter={prefs.footer ?? footerVariant}
      footers={footers}
    />
  );
}
