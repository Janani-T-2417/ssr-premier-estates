import { Helmet } from "react-helmet-async";
import { PageShell, PageHero } from "@/components/site/PageShell";
import { Chairman as ChairmanSection } from "@/components/site/Chairman";
import hero from "@/assets/gallery-4.jpg";

export default function Chairman() {
  return (
    <>
      <Helmet>
        <title>Chairman — Sri Siva Raghava · SSR Group</title>
        <meta name="description" content="Meet Sri Siva Raghava, Chairman of SSR Group — leading a legacy of trust, quality and premium real estate." />
        <meta property="og:title" content="Chairman — SSR Group" />
        <meta property="og:description" content="A visionary leader crafting landmark luxury communities." />
      </Helmet>
      <PageShell>
        <PageHero
          eyebrow="LEADERSHIP"
          title="Meet our"
          highlight="Chairman."
          subtitle="The visionary behind every SSR landmark — driving a legacy of trust, uncompromising quality and cinematic luxury."
          image={hero}
        />
        <ChairmanSection />
      </PageShell>
    </>
  );
}
