import { Helmet } from "react-helmet-async";
import { PageShell, PageHero } from "@/components/site/PageShell";
import { Ventures as VenturesSection } from "@/components/site/Ventures";
import { BookVisit } from "@/components/site/BookVisit";
import hero from "@/assets/venture-kankipadu.jpg";

export default function VenturesIndex() {
  return (
    <>
      <Helmet>
        <title>Ventures — Luxury Communities by SRR Group</title>
        <meta name="description" content="Explore SRR Group's signature ventures: SRR Nunna, Royal Imperia Kankipadu, Royal Millennia Vuyyuru and SRR Penamaluru." />
        <meta property="og:title" content="SRR Group Ventures" />
        <meta property="og:description" content="A collection of signature luxury addresses across Andhra Pradesh." />
      </Helmet>
      <PageShell>
        <PageHero
          eyebrow="OUR VENTURES"
          title="Signature"
          highlight="addresses."
          subtitle="Four master-planned luxury communities — each a landmark of design, engineering and lifestyle."
          image={hero}
        />
        <VenturesSection />
        <BookVisit />
      </PageShell>
    </>
  );
}
