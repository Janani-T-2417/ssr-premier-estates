import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/site/PageShell";
import { Chairman } from "@/components/site/Chairman";
import hero from "@/assets/gallery-4.jpg";

export const Route = createFileRoute("/chairman")({
  head: () => ({
    meta: [
      { title: "Chairman — Sri Siva Raghava · SSR Group" },
      { name: "description", content: "Meet Sri Siva Raghava, Chairman of SSR Group — leading a legacy of trust, quality and premium real estate." },
      { property: "og:title", content: "Chairman — SSR Group" },
      { property: "og:description", content: "A visionary leader crafting landmark luxury communities." },
    ],
  }),
  component: () => (
    <PageShell>
      <PageHero
        eyebrow="LEADERSHIP"
        title="Meet our"
        highlight="Chairman."
        subtitle="The visionary behind every SSR landmark — driving a legacy of trust, uncompromising quality and cinematic luxury."
        image={hero}
      />
      <Chairman />
    </PageShell>
  ),
});
