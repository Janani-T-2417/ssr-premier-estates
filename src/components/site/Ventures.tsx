import { Link } from "react-router-dom";
import { Reveal } from "./Reveal";
import { VENTURES } from "@/lib/site-data";
import { MapPin, CalendarDays, ArrowUpRight, Download } from "lucide-react";

const statusColor: Record<string, string> = {
  "Completed": "bg-emerald-400/15 text-emerald-300 border-emerald-400/30",
  "Fully Completed": "bg-emerald-400/15 text-emerald-300 border-emerald-400/30",
  "Ongoing Project": "bg-amber-400/15 text-amber-300 border-amber-400/30",
  "Upcoming": "bg-fuchsia-400/15 text-fuchsia-300 border-fuchsia-400/30",
  "Few Plots Available": "bg-rose-400/15 text-rose-300 border-rose-400/30",
};

export function Ventures() {
  return (
    <section id="ventures" className="section-y relative">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <p className="text-[11px] tracking-[0.4em] text-[#F4D67A]/80">OUR VENTURES</p>
            <h2 className="mt-3 font-display text-4xl leading-tight sm:text-5xl md:text-6xl">
              A collection of <span className="text-gold-gradient">signature</span> addresses.
            </h2>
            <p className="mt-4 text-white/70">
              Four master-planned luxury communities — each a landmark of design, engineering and lifestyle.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {VENTURES.map((v, i) => (
            <Reveal key={v.slug} delay={(i % 2) * 0.1}>
              <article className="group relative overflow-hidden rounded-3xl glass gold-border hover-lift">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={v.image}
                    alt={v.name}
                    width={1280}
                    height={896}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050f1a] via-[#050f1a]/40 to-transparent" />
                  <div className="absolute left-4 top-4 flex flex-col items-start gap-2">
                    <span className={`rounded-full border px-3 py-1 text-[10px] tracking-[0.25em] uppercase ${statusColor[v.status]}`}>
                      {v.status}
                    </span>
                    {v.availability && (
                      <span className="rounded-full border border-[#D4AF37]/50 bg-[#D4AF37]/15 px-3 py-1 text-[10px] tracking-[0.25em] uppercase text-[#F4D67A]">
                        {v.availability}
                      </span>
                    )}
                  </div>
                  <div className="absolute right-4 top-4 rounded-full glass gold-border px-3 py-1 text-[10px] tracking-[0.25em] uppercase text-[#F4D67A]">
                    Venture 0{i + 1}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div className="min-w-0">
                      <h3 className="font-display text-2xl leading-tight text-white sm:text-3xl">{v.name}</h3>
                      {v.subtitle && <p className="mt-1 text-sm text-[#F4D67A]/85">{v.subtitle}</p>}
                    </div>
                  </div>

                  <p className="mt-3 text-sm text-white/70">{v.tagline}</p>

                  <div className="mt-4 flex flex-wrap gap-4 text-xs text-white/60">
                    <span className="inline-flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5 text-[#D4AF37]" />{v.location}</span>
                    {v.launch && <span className="inline-flex items-center gap-1.5"><CalendarDays className="h-3.5 w-3.5 text-[#D4AF37]" />Launched {v.launch}</span>}
                  </div>

                  <div className="mt-6 flex flex-wrap items-center gap-3">
                    <Link
                      to={`/ventures/${v.slug}`}
                      className="inline-flex items-center gap-1.5 rounded-full bg-gold-gradient px-5 py-2 text-sm font-semibold text-[#081826] transition hover:scale-[1.03]"
                    >
                      Read More <ArrowUpRight className="h-4 w-4" />
                    </Link>
                    {v.brochureUrl ? (
                      <a
                        href={v.brochureUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-full glass gold-border px-5 py-2 text-sm text-white transition hover:bg-white/5"
                      >
                        <Download className="h-4 w-4 text-[#D4AF37]" /> Download Brochure
                      </a>
                    ) : (
                      <a
                        href="#book"
                        className="inline-flex items-center gap-1.5 rounded-full glass gold-border px-5 py-2 text-sm text-white transition hover:bg-white/5"
                      >
                        Book Early
                      </a>
                    )}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
