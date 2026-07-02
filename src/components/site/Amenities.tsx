import { Reveal } from "./Reveal";
import { Waves, Home, Dumbbell, Flower2, Clapperboard, BookOpen, Sailboat, Bike, Trophy, Footprints, Baby, BedDouble, PartyPopper, Trees } from "lucide-react";

const amenities = [
  { icon: Waves, name: "Swimming Pool" },
  { icon: Home, name: "Club House" },
  { icon: Dumbbell, name: "Gymnasium" },
  { icon: Flower2, name: "Yoga Deck" },
  { icon: Clapperboard, name: "Mini Theatre" },
  { icon: BookOpen, name: "Library" },
  { icon: Sailboat, name: "Boating Lake" },
  { icon: Bike, name: "Cycling Track" },
  { icon: Trophy, name: "Sports Park" },
  { icon: Footprints, name: "Jogging Track" },
  { icon: Baby, name: "Children's Park" },
  { icon: BedDouble, name: "Guest House" },
  { icon: PartyPopper, name: "Function Hall" },
  { icon: Trees, name: "Luxury Garden" },
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
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7">
          {amenities.map((a, i) => (
            <Reveal key={a.name} delay={(i % 7) * 0.04}>
              <div className="group flex h-full flex-col items-center justify-center gap-3 rounded-2xl glass gold-border p-5 text-center transition hover:-translate-y-1.5">
                <div className="grid h-12 w-12 place-items-center rounded-full bg-gold-gradient text-[#081826] transition group-hover:scale-110">
                  <a.icon className="h-5 w-5" />
                </div>
                <div className="text-xs font-medium tracking-wide text-white/85">{a.name}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
