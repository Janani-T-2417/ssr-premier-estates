import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/site/PageShell";
import { Gallery } from "@/components/site/Gallery";
import hero from "@/assets/gallery-5.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Inside SSR Group Luxury Communities" },
      { name: "description", content: "Explore the SSR Group gallery: villas, amenities, landscapes and interiors from our signature ventures." },
      { property: "og:title", content: "SSR Group Gallery" },
      { property: "og:description", content: "A cinematic glimpse of SSR living." },
    ],
  }),
  component: () => (
    <PageShell>
      <PageHero
        eyebrow="GALLERY"
        title="A glimpse of"
        highlight="SSR living."
        subtitle="Cinematic frames from our master-planned communities — villas, amenities, landscapes and interiors."
        image={hero}
      />
      <Gallery />
    </PageShell>
  ),
});
