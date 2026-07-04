import { Helmet } from "react-helmet-async";
import { PageShell, PageHero } from "@/components/site/PageShell";
import { Gallery as GallerySection } from "@/components/site/Gallery";
import hero from "@/assets/gallery-5.jpg";

export default function Gallery() {
  return (
    <>
      <Helmet>
        <title>Gallery — Inside SRR Group Luxury Communities</title>
        <meta name="description" content="Explore the SRR Group gallery: villas, amenities, landscapes and interiors from our signature ventures." />
        <meta property="og:title" content="SRR Group Gallery" />
        <meta property="og:description" content="A cinematic glimpse of SRR living." />
      </Helmet>
      <PageShell>
        <PageHero
          eyebrow="GALLERY"
          title="A glimpse of"
          highlight="SRR living."
          subtitle="Cinematic frames from our master-planned communities — villas, amenities, landscapes and interiors."
          image={hero}
        />
        <GallerySection />
      </PageShell>
    </>
  );
}
