import { Reveal } from "./Reveal";
import { Hammer, ShieldCheck, Building2, MapPin, Sparkles, TrendingUp, Handshake } from "lucide-react";

const items = [
  { icon: Hammer, title: "Quality Construction", body: "Engineered to endure, finished to impress." },
  { icon: ShieldCheck, title: "Trusted Brand", body: "A proven track record of delivered ventures." },
  { icon: Building2, title: "Modern Infrastructure", body: "Underground utilities, wide roads, gated security." },
  { icon: MapPin, title: "Prime Locations", body: "Strategic addresses across Vijayawada region." },
  { icon: Sparkles, title: "Luxury Amenities", body: "Resort-style clubhouses and wellness spaces." },
  { icon: TrendingUp, title: "Future Appreciation", body: "Curated locations engineered for value growth." },
  { icon: Handshake, title: "Transparent Process", body: "Clear paperwork, honest pricing, no surprises." },
];

export function WhyChoose() {
  return (
    <section id="why" className="section-y relative">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <p className="text-[11px] tracking-[0.4em] text-[#F4D67A]/80">WHY CHOOSE SSR GROUP</p>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl md:text-6xl">
              Seven reasons <span className="text-gold-gradient">discerning families</span> choose us.
            </h2>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={(i % 4) * 0.06}>
              <div className="group relative h-full overflow-hidden rounded-2xl glass gold-border p-6 hover-lift">
                <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#D4AF37]/10 blur-2xl transition group-hover:bg-[#D4AF37]/20" />
                <div className="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-gold-gradient text-[#081826]">
                  <it.icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-xl">{it.title}</h3>
                <p className="mt-2 text-sm text-white/70">{it.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
