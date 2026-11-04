import { About } from "@/components/home/about";
import { Collections } from "@/components/home/collections";
import { Hero } from "@/components/home/hero";
import { TrustBar } from "@/components/home/trust-bar";
import { ValuesBar } from "@/components/home/values-bar";

export function OriginalHomeBody() {
  return (
    <>
      <ValuesBar />
      <Collections />
      <About />
      <TrustBar />
    </>
  );
}

export function OriginalHome() {
  return (
    <>
      <Hero />
      <OriginalHomeBody />
    </>
  );
}
