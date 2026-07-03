import { Helmet } from "react-helmet-async";
import { PageShell, PageHero } from "@/components/site/PageShell";
import { Contact as ContactSection } from "@/components/site/Contact";
import { BookVisit } from "@/components/site/BookVisit";
import hero from "@/assets/gallery-2.jpg";

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact SSR Group — Vijayawada Sales Office</title>
        <meta name="description" content="Get in touch with SSR Group in Vijayawada. Book a private site visit, request a brochure or speak with our sales team." />
        <meta property="og:title" content="Contact SSR Group" />
        <meta property="og:description" content="Book a private site visit with our sales team." />
      </Helmet>
      <PageShell>
        <PageHero
          eyebrow="CONTACT"
          title="Let's build your"
          highlight="dream address."
          subtitle="Our sales concierge is available to arrange a private site visit, share brochures and answer every question."
          image={hero}
        />
        <BookVisit />
        <ContactSection />
      </PageShell>
    </>
  );
}
