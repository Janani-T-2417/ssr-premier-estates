import { useState } from "react";
import { Reveal } from "./Reveal";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";

const items = [
  {
    name: "Ramesh & Family",
    venture: "SSR Nunna",
    quote:
      "Our home at SSR Nunna is beyond what we imagined. Wide roads, secure gates and world-class amenities — truly a dream community.",
  },
  {
    name: "Priya Krishnan",
    venture: "Royal Imperia · Kankipadu",
    quote:
      "The lakefront villas at Royal Imperia are stunning. The clubhouse, boating and landscaping are hotel-grade every single day.",
  },
  {
    name: "Dr. Ananth Rao",
    venture: "SSR Nunna",
    quote:
      "Transparent process, timely delivery and premium quality. SSR Group has genuinely raised the bar for real estate in Vijayawada.",
  },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  const next = () => setI((i + 1) % items.length);
  const prev = () => setI((i - 1 + items.length) % items.length);
  const cur = items[i];

  return (
    <section id="testimonials" className="section-y relative">
      <div className="mx-auto max-w-5xl px-4">
        <div className="text-center">
          <Reveal>
            <p className="text-[11px] tracking-[0.4em] text-[#F4D67A]/80">TESTIMONIALS</p>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl md:text-6xl">
              Loved by <span className="text-gold-gradient">1000+ families.</span>
            </h2>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="mt-10 rounded-3xl glass-gold p-8 sm:p-12">
            <Quote className="h-10 w-10 text-[#D4AF37]" />
            <p className="mt-6 font-display text-2xl leading-relaxed text-white/90 sm:text-3xl">
              "{cur.quote}"
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
              <div>
                <div className="font-display text-lg text-gold-gradient">{cur.name}</div>
                <div className="text-xs tracking-[0.25em] text-white/60 uppercase">{cur.venture}</div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex text-[#F4D67A]">
                  {Array.from({ length: 5 }).map((_, k) => (
                    <Star key={k} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <div className="flex gap-2">
                  <button aria-label="Previous" onClick={prev} className="grid h-10 w-10 place-items-center rounded-full glass gold-border transition hover:bg-white/5">
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button aria-label="Next" onClick={next} className="grid h-10 w-10 place-items-center rounded-full bg-gold-gradient text-[#081826]">
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
