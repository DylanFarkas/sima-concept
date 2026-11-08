import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import Script from "next/script";
import { AccentSync } from "@/components/accent-sync";
import { VariantSwitcher } from "@/components/variant-switcher";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-inter",
  weight: ["400", "700"],
});

const oswald = Oswald({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-oswald",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "sima.co – SIMA",
  description: "Llega a la cima con SIMA. Equipamos a personas que eligen crecer cada día.",
};

const accentBoot = `(function(){try{var q=new URLSearchParams(location.search).get("acento");var stored=null;try{var raw=localStorage.getItem("sima-variant-prefs");if(raw)stored=JSON.parse(raw).acento}catch(e){}var acento=(q==="arena"||q==="original")?q:(stored==="arena"||stored==="original")?stored:"arena";if(acento==="arena")document.documentElement.dataset.acento="arena";else delete document.documentElement.dataset.acento}catch(e){}})();`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      data-acento="arena"
      suppressHydrationWarning
      className={`${inter.variable} ${oswald.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-background font-sans text-foreground">
        <Script id="accent-boot" strategy="beforeInteractive">
          {accentBoot}
        </Script>
        {children}
        <AccentSync />
        <VariantSwitcher />
      </body>
    </html>
  );
}
