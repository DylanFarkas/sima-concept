import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Hero } from "@/components/home/hero";
import { ValuesBar } from "@/components/home/values-bar";
import { Collections } from "@/components/home/collections";
import { About } from "@/components/home/about";
import { TrustBar } from "@/components/home/trust-bar";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <ValuesBar />
        <Collections />
        <About />
        <TrustBar />
      </main>
      <SiteFooter />
    </>
  );
}
