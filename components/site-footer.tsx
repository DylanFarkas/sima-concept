import { CartelFooter } from "@/components/footer/cartel-footer";
import { FirmaFooter } from "@/components/footer/firma-footer";
import { FooterSwitch } from "@/components/footer/footer-switch";
import { OriginalFooter } from "@/components/footer/original-footer";
import { TrazoFooter } from "@/components/footer/trazo-footer";

export function SiteFooter() {
  return (
    <FooterSwitch
      footers={{
        "1": <FirmaFooter />,
        "2": <TrazoFooter />,
        "3": <CartelFooter />,
        original: <OriginalFooter />,
      }}
    />
  );
}
