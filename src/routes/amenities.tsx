import { Helmet } from "react-helmet-async";
import { PageShell, PageHero } from "@/components/site/PageShell";
import { Amenities as AmenitiesSection } from "@/components/site/Amenities";
import hero from "@/assets/amenity-clubhouse.jpg";

export default function Amenities() {
  return (
    <>
      <Helmet>
        <title>Amenities — World-Class Luxury Lifestyle · SSR Group</title>
        <meta name="description" content="Resort-style amenities across SSR communities: infinity pool, clubhouse, gymnasium, boating lake, mini theatre, library, sports arena and more." />
        <meta property="og:title" content="SSR Group Amenities" />
        <meta property="og:description" content="A lifestyle of effortless luxury — curated amenities at every SSR address." />
      </Helmet>
      <PageShell>
        <PageHero
          eyebrow="AMENITIES"
          title="A lifestyle of"
          highlight="effortless luxury."
          subtitle="Every SSR community is curated with world-class amenities that turn everyday moments into celebrations."
          image={hero}
        />
        <AmenitiesSection />
      </PageShell>
    </>
  );
}
