import { Reveal } from "./Reveal";
import { Target, Eye, Gem, Handshake, ShieldCheck, Sparkles } from "lucide-react";
import galleryImg from "@/assets/gallery-3.jpg";

const pillars = [
  { icon: Target, title: "Our Mission", body: "Deliver luxury living experiences that redefine premium real estate in Andhra Pradesh." },
  { icon: Eye, title: "Our Vision", body: "To become the region's most trusted luxury real estate name — crafting landmark communities." },
  { icon: Gem, title: "Our Values", body: "Uncompromising quality, timeless design, and unwavering commitment to every family we serve." },
  { icon: Handshake, title: "Commitment", body: "On-time delivery, transparent transactions and lifelong customer relationships." },
  { icon: ShieldCheck, title: "Trust", body: "Fully approved, thoughtfully engineered developments backed by proven track record." },
  { icon: Sparkles, title: "Quality", body: "World-class infrastructure, premium finishes and enduring appreciation." },
];

export function About() {
  return (
    <section id="about" className="section-y relative">
      <div className="mx-auto grid max-w-7xl gap-14 px-4 lg:grid-cols-2 lg:items-center">
        <Reveal className="relative order-2 lg:order-1">
          <div className="relative overflow-hidden rounded-3xl gold-border">
            <img
              src={galleryImg}
              alt="SSR Group luxury community boulevard"
              width={1280}
              height={896}
              loading="lazy"
              className="aspect-[5/4] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050f1a] via-transparent to-transparent" />
          </div>
          <div className="absolute -bottom-6 -right-6 hidden rounded-2xl glass-gold p-6 md:block">
            <div className="font-display text-4xl text-gold-gradient">1000+</div>
            <div className="text-xs tracking-[0.2em] text-white/70">HAPPY FAMILIES</div>
          </div>
        </Reveal>

        <div className="order-1 lg:order-2">
          <Reveal>
            <p className="text-[11px] tracking-[0.4em] text-[#F4D67A]/80">ABOUT SSR GROUP</p>
            <h2 className="mt-3 font-display text-4xl leading-tight sm:text-5xl md:text-6xl">
              A legacy of <span className="text-gold-gradient">luxury living,</span> engineered for generations.
            </h2>
            <p className="mt-5 max-w-xl text-white/75">
              SSR Group is a premium real estate developer headquartered in
              Vijayawada, dedicated to creating master-planned luxury
              communities that combine cinematic architecture, world-class
              amenities and prime connectivity. Every SSR address is a promise
              of quality, trust and enduring value.
            </p>
          </Reveal>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.05}>
                <div className="group h-full rounded-2xl glass gold-border p-5 hover-lift">
                  <div className="mb-3 grid h-10 w-10 place-items-center rounded-xl bg-gold-gradient text-[#081826]">
                    <p.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-lg">{p.title}</h3>
                  <p className="mt-1 text-sm text-white/70">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
