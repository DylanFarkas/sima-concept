"use client";

import { Suspense, useLayoutEffect } from "react";
import { useSearchParams } from "next/navigation";
import { resolvePrefs } from "@/lib/variant-prefs";

export function AccentSync() {
  return (
    <Suspense fallback={null}>
      <AccentSyncInner />
    </Suspense>
  );
}

function AccentSyncInner() {
  const searchParams = useSearchParams();
  const acento = resolvePrefs(searchParams).acento;

  useLayoutEffect(() => {
    if (acento === "arena") {
      document.documentElement.dataset.acento = "arena";
    } else {
      delete document.documentElement.dataset.acento;
    }
  }, [acento]);

  return null;
}
