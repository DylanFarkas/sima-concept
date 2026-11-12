import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { HomeRest } from "@/components/home/home-rest";
import { PortadaHome } from "@/components/home/portada-home";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <PortadaHome />
        <HomeRest />
      </main>
      <SiteFooter />
    </>
  );
}
