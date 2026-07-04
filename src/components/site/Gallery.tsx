import { useMemo, useState } from "react";
import { Reveal } from "./Reveal";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import v1 from "@/assets/venture-nunna.jpg";
import v2 from "@/assets/venture-kankipadu.jpg";
import v3 from "@/assets/venture-vuyyuru.jpg";
import v4 from "@/assets/venture-penamaluru.jpg";
import a1 from "@/assets/amenity-pool.jpg";
import a2 from "@/assets/amenity-clubhouse.jpg";
import a3 from "@/assets/amenity-boating.jpg";
import a4 from "@/assets/amenity-theatre.jpg";
import a5 from "@/assets/amenity-library.jpg";
import a6 from "@/assets/amenity-hall.jpg";

type Cat = "All" | "Villas" | "Amenities" | "Landscapes" | "Interiors";

const shots: { src: string; alt: string; cat: Exclude<Cat, "All"> }[] = [
  { src: g1, alt: "Infinity pool at night", cat: "Amenities" },
  { src: v2, alt: "Lakefront township", cat: "Landscapes" },
  { src: g2, alt: "Luxury clubhouse lobby", cat: "Interiors" },
  { src: g3, alt: "Palm boulevard entrance", cat: "Landscapes" },
  { src: g4, alt: "Villa interior lounge", cat: "Interiors" },
  { src: g5, alt: "Aerial night view", cat: "Landscapes" },
  { src: v1, alt: "Modern villa exterior", cat: "Villas" },
  { src: v4, alt: "Grand entrance arch", cat: "Villas" },
  { src: v3, alt: "Signature row houses", cat: "Villas" },
  { src: a1, alt: "Resort-style swimming pool", cat: "Amenities" },
  { src: a2, alt: "Grand clubhouse facade", cat: "Amenities" },
  { src: a3, alt: "Private boating lake", cat: "Amenities" },
  { src: a4, alt: "Private mini theatre", cat: "Interiors" },
  { src: a5, alt: "Library lounge", cat: "Interiors" },
  { src: a6, alt: "Function hall banquet", cat: "Interiors" },
];

const cats: Cat[] = ["All", "Villas", "Amenities", "Landscapes", "Interiors"];

export function Gallery() {
  const [cat, setCat] = useState<Cat>("All");
  const [idx, setIdx] = useState<number | null>(null);

  const filtered = useMemo(
    () => (cat === "All" ? shots : shots.filter((s) => s.cat === cat)),
    [cat],
  );

  const step = (d: number) => {
    if (idx === null) return;
    setIdx((idx + d + filtered.length) % filtered.length);
  };

  return (
    <section id="gallery" className="section-y relative">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <p className="text-[11px] tracking-[0.4em] text-[#F4D67A]/80">GALLERY</p>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl md:text-6xl">
              A glimpse of <span className="text-gold-gradient">SRR living.</span>
            </h2>
          </Reveal>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {cats.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`rounded-full px-4 py-2 text-xs tracking-[0.25em] uppercase transition ${
                cat === c
                  ? "bg-gold-gradient text-[#081826] shadow-[0_10px_30px_-10px_#D4AF37]"
                  : "glass gold-border text-white/80 hover:text-[#F4D67A]"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-10 columns-1 gap-4 sm:columns-2 lg:columns-3 xl:columns-4 [&>*]:mb-4">
          {filtered.map((s, i) => (
            <Reveal key={s.src + s.alt} delay={(i % 4) * 0.04}>
              <button
                onClick={() => setIdx(i)}
                className="group block w-full break-inside-avoid overflow-hidden rounded-2xl gold-border"
              >
                <div className="relative">
                  <img
                    src={s.src}
                    alt={s.alt}
                    loading="lazy"
                    className="w-full transition-transform duration-[1600ms] ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050f1a]/80 via-transparent to-transparent opacity-70 transition group-hover:opacity-40" />
                  <span className="absolute bottom-3 left-3 text-[10px] tracking-[0.25em] text-white/90 uppercase">
                    {s.cat} · {s.alt}
                  </span>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {idx !== null && (
        <div
          className="fixed inset-0 z-[100] grid place-items-center bg-black/90 p-4 backdrop-blur-lg animate-fade-in"
          onClick={() => setIdx(null)}
        >
          <button
            aria-label="Close"
            className="absolute right-6 top-6 rounded-full glass gold-border p-2 text-white"
            onClick={(e) => { e.stopPropagation(); setIdx(null); }}
          >
            <X className="h-5 w-5" />
          </button>
          <button
            aria-label="Previous"
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full glass gold-border p-3 text-white"
            onClick={(e) => { e.stopPropagation(); step(-1); }}
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            aria-label="Next"
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full glass gold-border p-3 text-white"
            onClick={(e) => { e.stopPropagation(); step(1); }}
          >
            <ChevronRight className="h-5 w-5" />
          </button>
          <img
            src={filtered[idx].src}
            alt={filtered[idx].alt}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[88vh] max-w-[92vw] rounded-2xl gold-border object-contain animate-scale-in"
          />
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 rounded-full glass gold-border px-4 py-1.5 text-xs tracking-[0.25em] text-white/90 uppercase">
            {filtered[idx].cat} · {filtered[idx].alt}
          </div>
        </div>
      )}
    </section>
  );
}
