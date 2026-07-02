import { useState } from "react";
import { Reveal } from "./Reveal";
import { X } from "lucide-react";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/venture-nunna.jpg";
import g7 from "@/assets/venture-kankipadu.jpg";
import g8 from "@/assets/venture-vuyyuru.jpg";

const shots = [
  { src: g1, alt: "Infinity pool at night", span: "row-span-2" },
  { src: g7, alt: "Lakefront township", span: "" },
  { src: g2, alt: "Luxury clubhouse lobby", span: "" },
  { src: g3, alt: "Palm boulevard entrance", span: "" },
  { src: g4, alt: "Villa interior lounge", span: "row-span-2" },
  { src: g5, alt: "Aerial night view", span: "" },
  { src: g6, alt: "Modern villa exterior", span: "" },
  { src: g8, alt: "Grand entrance arch", span: "" },
];

export function Gallery() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <section id="gallery" className="section-y relative">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <p className="text-[11px] tracking-[0.4em] text-[#F4D67A]/80">GALLERY</p>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl md:text-6xl">
              A glimpse of <span className="text-gold-gradient">SSR living.</span>
            </h2>
          </Reveal>
        </div>

        <div className="mt-12 grid auto-rows-[220px] grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
          {shots.map((s, i) => (
            <Reveal key={i} delay={(i % 4) * 0.04} className={`overflow-hidden rounded-2xl gold-border ${s.span}`}>
              <button
                onClick={() => setOpen(s.src)}
                className="group relative block h-full w-full overflow-hidden"
              >
                <img
                  src={s.src}
                  alt={s.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-125"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050f1a]/70 via-transparent to-transparent opacity-70 transition group-hover:opacity-40" />
                <span className="absolute bottom-3 left-3 text-xs tracking-[0.2em] text-white/85 uppercase">{s.alt}</span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {open && (
        <div
          className="fixed inset-0 z-[100] grid place-items-center bg-black/85 p-4 backdrop-blur-lg animate-fade-in"
          onClick={() => setOpen(null)}
        >
          <button aria-label="Close" className="absolute right-6 top-6 rounded-full glass gold-border p-2 text-white">
            <X className="h-5 w-5" />
          </button>
          <img src={open} alt="Gallery preview" className="max-h-[88vh] max-w-[92vw] rounded-2xl gold-border object-contain" />
        </div>
      )}
    </section>
  );
}
