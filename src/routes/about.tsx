import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/site/PageShell";
import { About } from "@/components/site/About";
import { WhyChoose } from "@/components/site/WhyChoose";
import { Testimonials } from "@/components/site/Testimonials";
import hero from "@/assets/gallery-3.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About SSR Group — Luxury Real Estate Developer in Vijayawada" },
      { name: "description", content: "Discover the legacy, mission and vision of SSR Group — crafting master-planned luxury communities across Andhra Pradesh." },
      { property: "og:title", content: "About SSR Group" },
      { property: "og:description", content: "A legacy of luxury living engineered for generations." },
    ],
  }),
  component: () => (
    <PageShell>
      <PageHero
        eyebrow="ABOUT SSR GROUP"
        title="A legacy of"
        highlight="luxury living."
        subtitle="Premier real estate developer headquartered in Vijayawada — creating master-planned communities that combine cinematic architecture, world-class amenities and prime connectivity."
        image={hero}
      />
      <About />
      <WhyChoose />
      <Testimonials />
    </PageShell>
  ),
});
