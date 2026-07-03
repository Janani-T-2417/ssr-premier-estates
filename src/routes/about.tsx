import { Helmet } from "react-helmet-async";
import { PageShell, PageHero } from "@/components/site/PageShell";
import { About as AboutSection } from "@/components/site/About";
import { WhyChoose } from "@/components/site/WhyChoose";
import { Testimonials } from "@/components/site/Testimonials";
import hero from "@/assets/gallery-3.jpg";

export default function About() {
  return (
    <>
      <Helmet>
        <title>About SSR Group — Luxury Real Estate Developer in Vijayawada</title>
        <meta name="description" content="Discover the legacy, mission and vision of SSR Group — crafting master-planned luxury communities across Andhra Pradesh." />
        <meta property="og:title" content="About SSR Group" />
        <meta property="og:description" content="A legacy of luxury living engineered for generations." />
      </Helmet>
      <PageShell>
        <PageHero
          eyebrow="ABOUT SSR GROUP"
          title="A legacy of"
          highlight="luxury living."
          subtitle="Premier real estate developer headquartered in Vijayawada — creating master-planned communities that combine cinematic architecture, world-class amenities and prime connectivity."
          image={hero}
        />
        <AboutSection />
        <WhyChoose />
        <Testimonials />
      </PageShell>
    </>
  );
}
