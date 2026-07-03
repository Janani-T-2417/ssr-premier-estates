import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/site/PageShell";
import { Amenities } from "@/components/site/Amenities";
import hero from "@/assets/amenity-clubhouse.jpg";

export const Route = createFileRoute("/amenities")({
  head: () => ({
    meta: [
      { title: "Amenities — World-Class Luxury Lifestyle · SSR Group" },
      { name: "description", content: "Resort-style amenities across SSR communities: infinity pool, clubhouse, gymnasium, boating lake, mini theatre, library, sports arena and more." },
      { property: "og:title", content: "SSR Group Amenities" },
      { property: "og:description", content: "A lifestyle of effortless luxury — curated amenities at every SSR address." },
    ],
  }),
  component: () => (
    <PageShell>
      <PageHero
        eyebrow="AMENITIES"
        title="A lifestyle of"
        highlight="effortless luxury."
        subtitle="Every SSR community is curated with world-class amenities that turn everyday moments into celebrations."
        image={hero}
      />
      <Amenities />
    </PageShell>
  ),
});
