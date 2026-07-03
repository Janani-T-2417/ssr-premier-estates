import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/site/PageShell";
import { Ventures } from "@/components/site/Ventures";
import { BookVisit } from "@/components/site/BookVisit";
import hero from "@/assets/venture-kankipadu.jpg";

export const Route = createFileRoute("/ventures/")({
  head: () => ({
    meta: [
      { title: "Ventures — Luxury Communities by SSR Group" },
      { name: "description", content: "Explore SSR Group's signature ventures: SSR Nunna, Royal Imperia Kankipadu, Royal Millennia Vuyyuru and SSR Penamaluru." },
      { property: "og:title", content: "SSR Group Ventures" },
      { property: "og:description", content: "A collection of signature luxury addresses across Andhra Pradesh." },
    ],
  }),
  component: () => (
    <PageShell>
      <PageHero
        eyebrow="OUR VENTURES"
        title="Signature"
        highlight="addresses."
        subtitle="Four master-planned luxury communities — each a landmark of design, engineering and lifestyle."
        image={hero}
      />
      <Ventures />
      <BookVisit />
    </PageShell>
  ),
});
