import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/site/PageShell";
import { Contact } from "@/components/site/Contact";
import { BookVisit } from "@/components/site/BookVisit";
import hero from "@/assets/gallery-2.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact SSR Group — Vijayawada Sales Office" },
      { name: "description", content: "Get in touch with SSR Group in Vijayawada. Book a private site visit, request a brochure or speak with our sales team." },
      { property: "og:title", content: "Contact SSR Group" },
      { property: "og:description", content: "Book a private site visit with our sales team." },
    ],
  }),
  component: () => (
    <PageShell>
      <PageHero
        eyebrow="CONTACT"
        title="Let's build your"
        highlight="dream address."
        subtitle="Our sales concierge is available to arrange a private site visit, share brochures and answer every question."
        image={hero}
      />
      <BookVisit />
      <Contact />
    </PageShell>
  ),
});
