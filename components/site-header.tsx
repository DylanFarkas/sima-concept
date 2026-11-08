import { Suspense } from "react";
import { SiteHeaderClient } from "@/components/site-header-client";
import { navVariant } from "@/lib/nav-variants";
import { getServerVariantPrefs } from "@/lib/variant-prefs.server";

export function SiteHeader() {
  return (
    <Suspense fallback={<SiteHeaderClient />}>
      <SiteHeaderFromPrefs />
    </Suspense>
  );
}

async function SiteHeaderFromPrefs() {
  const prefs = await getServerVariantPrefs();
  return <SiteHeaderClient initialNav={prefs.nav ?? navVariant} />;
}
