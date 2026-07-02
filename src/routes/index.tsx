import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Chairman } from "@/components/site/Chairman";
import { Ventures } from "@/components/site/Ventures";
import { WhyChoose } from "@/components/site/WhyChoose";
import { Amenities } from "@/components/site/Amenities";
import { Gallery } from "@/components/site/Gallery";
import { Testimonials } from "@/components/site/Testimonials";
import { BookVisit } from "@/components/site/BookVisit";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Chairman />
        <Ventures />
        <WhyChoose />
        <Amenities />
        <Gallery />
        <Testimonials />
        <BookVisit />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
