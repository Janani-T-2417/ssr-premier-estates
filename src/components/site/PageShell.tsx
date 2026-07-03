import type { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { PageTransition } from "./PageTransition";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      <PageTransition>
        <main className="pt-24">{children}</main>
      </PageTransition>
      <Footer />
    </>
  );
}

export function PageHero({
  eyebrow,
  title,
  highlight,
  subtitle,
  image,
}: {
  eyebrow: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  image: string;
}) {
  return (
    <section className="relative isolate overflow-hidden py-24 sm:py-28">
      <div className="absolute inset-0 -z-10">
        <img src={image} alt="" className="h-full w-full object-cover slow-zoom" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050f1a]/85 via-[#081826]/85 to-[#050f1a]" />
      </div>
      <div className="mx-auto max-w-5xl px-4 text-center">
        <p className="text-[11px] tracking-[0.4em] text-[#F4D67A]/85">{eyebrow}</p>
        <h1 className="mt-4 font-display text-5xl leading-[1.05] sm:text-6xl md:text-7xl">
          {title} {highlight && <span className="text-gold-gradient">{highlight}</span>}
        </h1>
        {subtitle && <p className="mx-auto mt-5 max-w-2xl text-white/75">{subtitle}</p>}
      </div>
    </section>
  );
}
