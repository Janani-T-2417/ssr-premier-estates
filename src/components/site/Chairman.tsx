import { Reveal } from "./Reveal";
import chairman from "@/assets/chairman.asset.json";
import { Quote } from "lucide-react";

export function Chairman() {
  return (
    <section id="chairman" className="section-y relative">
      <div className="mx-auto grid max-w-7xl gap-14 px-4 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center">
        <Reveal className="relative mx-auto w-full max-w-md">
          <div className="pointer-events-none absolute -inset-6 rounded-[2rem] bg-[radial-gradient(circle_at_50%_20%,rgba(212,175,55,0.35),transparent_60%)] blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] gold-border">
            <img
              src={chairman.url}
              alt="Chairman, SSR Group"
              width={800}
              height={1000}
              loading="lazy"
              className="aspect-[4/5] w-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#050f1a] via-[#050f1a]/60 to-transparent p-6">
              <div className="font-display text-2xl text-gold-gradient">Sri Siva Raghava</div>
              <div className="text-xs tracking-[0.3em] text-white/70 uppercase">Chairman · SSR Group</div>
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="text-[11px] tracking-[0.4em] text-[#F4D67A]/80">MEET OUR CHAIRMAN</p>
            <h2 className="mt-3 font-display text-4xl leading-tight sm:text-5xl md:text-6xl">
              A vision built on <span className="text-gold-gradient">trust, quality</span> & timeless value.
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-8 rounded-3xl glass gold-border p-8">
              <Quote className="h-8 w-8 text-[#D4AF37]" />
              <p className="mt-4 text-lg leading-relaxed text-white/85">
                "At SSR Group, we don't just develop land — we craft
                landmarks. Every venture we deliver reflects our belief that
                luxury is a promise: a promise of design, of quality, of trust
                and of a lifetime of memories for the families who call our
                communities home. Your dreams inspire us, and it is our
                privilege to bring them to life."
              </p>
              <div className="mt-8 flex items-center justify-between">
                <div>
                  <div className="font-display text-xl text-gold-gradient">— Sri Siva Raghava</div>
                  <div className="text-xs tracking-[0.25em] text-white/60 uppercase">Chairman & Managing Director</div>
                </div>
                <div className="hidden text-right sm:block">
                  <div className="italic text-2xl text-[#F4D67A] font-display">Siva Raghava</div>
                  <div className="mt-1 h-px w-32 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
