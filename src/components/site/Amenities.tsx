import { Reveal } from "./Reveal";
import pool from "@/assets/amenity-pool.jpg";
import gym from "@/assets/amenity-gym.jpg";
import yoga from "@/assets/amenity-yoga.jpg";
import kids from "@/assets/amenity-kids.jpg";
import jogging from "@/assets/amenity-jogging.jpg";
import clubhouse from "@/assets/amenity-clubhouse.jpg";
import library from "@/assets/amenity-library.jpg";
import theatre from "@/assets/amenity-theatre.jpg";
import boating from "@/assets/amenity-boating.jpg";
import cycling from "@/assets/amenity-cycling.jpg";
import sports from "@/assets/amenity-sports.jpg";
import hall from "@/assets/amenity-hall.jpg";

export const AMENITIES = [
  { img: pool, title: "Swimming Pool", desc: "Resort-style infinity pool with sun deck & cabanas." },
  { img: clubhouse, title: "Grand Club House", desc: "A stately clubhouse for gatherings, dining and leisure." },
  { img: gym, title: "Gymnasium", desc: "State-of-the-art fitness studio with premium equipment." },
  { img: yoga, title: "Yoga Deck", desc: "Open-air wellness deck framed by landscaped gardens." },
  { img: theatre, title: "Mini Theatre", desc: "Private cinema with plush recliners & cinema-grade sound." },
  { img: library, title: "Library Lounge", desc: "Quiet reading sanctuary curated for connoisseurs." },
  { img: boating, title: "Boating Lake", desc: "A 1.5-acre private lake for tranquil evening boating." },
  { img: cycling, title: "Cycling Track", desc: "Dedicated palm-lined track for wellness rides." },
  { img: sports, title: "Sports Arena", desc: "Multi-sport courts with floodlit tennis & basketball." },
  { img: jogging, title: "Jogging Track", desc: "Golden-hour jogging paths through lush avenues." },
  { img: kids, title: "Children's Park", desc: "Vibrant, safe play zones for little residents." },
  { img: hall, title: "Function Hall", desc: "Chandeliered banquet hall for signature celebrations." },
];

export function Amenities() {
  return (
    <section id="amenities" className="section-y relative">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <p className="text-[11px] tracking-[0.4em] text-[#F4D67A]/80">WORLD-CLASS AMENITIES</p>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl md:text-6xl">
              A lifestyle of <span className="text-gold-gradient">effortless luxury.</span>
            </h2>
            <p className="mt-4 text-white/70">
              Every SRR community is curated with signature amenities that
              transform daily life into an everyday celebration.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {AMENITIES.map((a, i) => (
            <Reveal key={a.title} delay={(i % 3) * 0.06}>
              <article className="group relative h-full overflow-hidden rounded-3xl glass gold-border shadow-[0_15px_50px_-25px_rgba(0,0,0,0.7)] transition duration-500 hover:-translate-y-1.5 hover:shadow-[0_25px_60px_-20px_rgba(212,175,55,0.35)]">
                <div className="relative aspect-[16/11] overflow-hidden">
                  <img
                    src={a.img}
                    alt={a.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-[1.12]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050f1a] via-[#050f1a]/30 to-transparent" />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-xl text-white">{a.title}</h3>
                  <p className="mt-1 text-sm text-white/70">{a.desc}</p>
                </div>
                <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/80 to-transparent opacity-0 transition group-hover:opacity-100" />
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
