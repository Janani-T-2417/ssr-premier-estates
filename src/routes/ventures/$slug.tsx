import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, CalendarDays, MapPin, Download, MessageCircle, CheckCircle2, Sparkles, Map, Compass, Building2 } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { Reveal } from "@/components/site/Reveal";
import { BookVisit } from "@/components/site/BookVisit";
import { getVenture, VENTURES, buildWhatsAppUrl, COMPANY } from "@/lib/site-data";
import masterPlan from "@/assets/master-plan.jpg";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";

const galleryPool = [g1, g2, g3, g4, g5];

const advantages = [
  { icon: MapPin, title: "Prime Location", body: "Strategically positioned with seamless access to city hubs and highways." },
  { icon: Building2, title: "Top Schools & Colleges", body: "Leading educational institutions within a short drive." },
  { icon: Compass, title: "Effortless Connectivity", body: "Wide 40 ft & 60 ft internal avenues connecting to arterial roads." },
  { icon: Sparkles, title: "Lifestyle Landmarks", body: "Shopping, dining and healthcare precincts in close proximity." },
];

export default function VenturePage() {
  const { slug } = useParams();
  const v = getVenture(slug as string);

  if (!v) {
    return (
      <div className="grid min-h-dvh place-items-center px-4">
        <div className="glass gold-border rounded-2xl p-10 text-center">
          <h1 className="font-display text-3xl text-gold-gradient">Venture not found</h1>
          <Link to="/" className="mt-4 inline-block rounded-full bg-gold-gradient px-5 py-2 text-sm font-semibold text-[#081826]">Go home</Link>
        </div>
      </div>
    );
  }
  const wa = buildWhatsAppUrl(`Hello SRR GROUP, I'm interested in ${v.name}. Please share more details.`);
  const others = VENTURES.filter((x) => x.slug !== v.slug);
  const mapQuery = encodeURIComponent(`${v.name}, ${v.location}`);

  return (
    <PageShell>
      <Helmet>
        <title>{v.name} — SRR GROUP</title>
        <meta name="description" content={v.tagline} />
        <meta property="og:title" content={`${v.name} — SRR GROUP`} />
        <meta property="og:description" content={v.tagline} />
        <meta property="og:image" content={v.image} />
        <meta property="og:type" content="article" />
      </Helmet>
      {/* Cinematic Hero */}
      <section className="relative isolate overflow-hidden pt-8 pb-20">
        <div className="absolute inset-0 -z-10">
          <img src={v.image} alt={v.name} className="h-full w-full object-cover slow-zoom" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050f1a]/80 via-[#081826]/80 to-[#050f1a]" />
        </div>

        <div className="mx-auto max-w-7xl px-4">
          <Link to="/ventures" className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-[#F4D67A]">
            <ArrowLeft className="h-4 w-4" /> Back to Ventures
          </Link>

          <div className="mt-6 grid gap-8 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] lg:items-end">
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-block rounded-full glass gold-border px-3 py-1 text-[10px] tracking-[0.3em] text-[#F4D67A] uppercase">
                  {v.status}
                </span>
                {v.availability && (
                  <span className="inline-block rounded-full border border-[#D4AF37]/50 bg-[#D4AF37]/15 px-3 py-1 text-[10px] tracking-[0.3em] text-[#F4D67A] uppercase">
                    {v.availability}
                  </span>
                )}
              </div>
              <h1 className="mt-4 font-display text-5xl leading-[1.05] sm:text-6xl md:text-7xl">
                <span className="text-gold-gradient">{v.name.split(" — ")[0]}</span>
                {v.name.includes(" — ") && <span className="block text-white/95">{v.name.split(" — ")[1]}</span>}
              </h1>
              {v.subtitle && <p className="mt-4 max-w-2xl text-lg text-[#F4D67A]/85">{v.subtitle}</p>}
              <p className="mt-3 max-w-2xl text-white/75">{v.tagline}</p>

              <div className="mt-6 flex flex-wrap gap-4 text-sm text-white/70">
                <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4 text-[#D4AF37]" /> {v.location}</span>
                {v.launch && <span className="inline-flex items-center gap-2"><CalendarDays className="h-4 w-4 text-[#D4AF37]" /> Launched {v.launch}</span>}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {v.brochureUrl && (
                  <a href={v.brochureUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-gold-gradient px-6 py-3 text-sm font-semibold text-[#081826]">
                    <Download className="h-4 w-4" /> Download Brochure
                  </a>
                )}
                <a href="#book" className="inline-flex items-center gap-2 rounded-full glass gold-border px-6 py-3 text-sm font-semibold">
                  Book Site Visit
                </a>
                <a href={wa} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-[#25D366]/50 bg-[#25D366]/10 px-5 py-3 text-sm text-[#7EE8A6]">
                  <MessageCircle className="h-4 w-4" /> WhatsApp
                </a>
              </div>
            </div>

            <div className="glass gold-border rounded-3xl p-6">
              <div className="grid grid-cols-2 gap-4">
                <Stat label="Status" value={v.status} />
                {v.launch && <Stat label="Launch" value={v.launch} />}
                <Stat label="Location" value={v.location} />
                <Stat label="Enquiries" value={COMPANY.phoneDisplay} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview + Highlights */}
      <section className="section-y">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 lg:grid-cols-2">
          <Reveal>
            <p className="text-[11px] tracking-[0.4em] text-[#F4D67A]/80">OVERVIEW</p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl">
              A signature <span className="text-gold-gradient">{v.status.toLowerCase()}</span> address.
            </h2>
            <p className="mt-5 text-white/75">{v.overview}</p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-3xl glass gold-border p-8">
              <div className="mb-4 flex items-center gap-2 text-[#F4D67A]">
                <Sparkles className="h-5 w-5" /> <span className="text-sm tracking-[0.25em] uppercase">Project Highlights</span>
              </div>
              <ul className="grid gap-3 sm:grid-cols-2">
                {v.highlights.map((h: string) => (
                  <li key={h} className="flex items-start gap-2 text-sm text-white/85">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#D4AF37]" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Gallery */}
      <section className="section-y">
        <div className="mx-auto max-w-7xl px-4">
          <Reveal>
            <p className="text-[11px] tracking-[0.4em] text-[#F4D67A]/80">PROJECT GALLERY</p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl">
              Inside <span className="text-gold-gradient">{v.name.split(" — ")[0]}.</span>
            </h2>
          </Reveal>
          <div className="mt-10 grid auto-rows-[220px] grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
            {galleryPool.map((src, i) => (
              <Reveal key={i} delay={(i % 4) * 0.05} className={`overflow-hidden rounded-2xl gold-border ${i === 0 || i === 3 ? "row-span-2" : ""}`}>
                <img src={src} alt={`${v.name} gallery ${i + 1}`} loading="lazy" className="h-full w-full object-cover transition-transform duration-[1600ms] ease-out hover:scale-110" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="section-y">
        <div className="mx-auto max-w-7xl px-4">
          <Reveal>
            <p className="text-[11px] tracking-[0.4em] text-[#F4D67A]/80">AMENITIES</p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl">
              World-class <span className="text-gold-gradient">amenities.</span>
            </h2>
          </Reveal>
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {v.amenities.map((a: string) => (
              <div key={a} className="rounded-2xl glass gold-border px-4 py-4 text-center text-sm text-white/85">{a}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Master Plan */}
      <section className="section-y">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] lg:items-center">
          <Reveal>
            <p className="text-[11px] tracking-[0.4em] text-[#F4D67A]/80">MASTER PLAN</p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl">
              Thoughtfully <span className="text-gold-gradient">master-planned.</span>
            </h2>
            <p className="mt-5 text-white/75">
              Wide avenues, landscaped boulevards, curated amenity clusters and premium residential precincts — every parcel engineered for a lifetime of luxury.
            </p>
            {v.brochureUrl && (
              <a href={v.brochureUrl} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 rounded-full bg-gold-gradient px-6 py-3 text-sm font-semibold text-[#081826]">
                <Map className="h-4 w-4" /> Download Full Master Plan
              </a>
            )}
          </Reveal>
          <Reveal delay={0.1}>
            <div className="relative overflow-hidden rounded-3xl gold-border">
              <img src={masterPlan} alt={`${v.name} master plan`} loading="lazy" className="w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050f1a]/60 via-transparent to-transparent" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Location Advantages + Map */}
      <section className="section-y">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <p className="text-[11px] tracking-[0.4em] text-[#F4D67A]/80">LOCATION ADVANTAGES</p>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl">
                Rooted in <span className="text-gold-gradient">the right address.</span>
              </h2>
            </Reveal>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)]">
            <div className="grid gap-4 sm:grid-cols-2">
              {advantages.map((a, i) => (
                <Reveal key={a.title} delay={(i % 2) * 0.06}>
                  <div className="h-full rounded-2xl glass gold-border p-5">
                    <div className="mb-3 grid h-10 w-10 place-items-center rounded-xl bg-gold-gradient text-[#081826]">
                      <a.icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-display text-lg">{a.title}</h3>
                    <p className="mt-1 text-sm text-white/70">{a.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal delay={0.1}>
              <div className="h-full min-h-[360px] overflow-hidden rounded-3xl gold-border">
                <iframe
                  title={`${v.name} map`}
                  src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
                  className="h-full w-full min-h-[360px] border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Book Site Visit */}
      <BookVisit />

      {/* Related Ventures */}
      <section className="section-y">
        <div className="mx-auto max-w-7xl px-4">
          <Reveal>
            <p className="text-[11px] tracking-[0.4em] text-[#F4D67A]/80">EXPLORE MORE</p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl">Other <span className="text-gold-gradient">SRR ventures.</span></h2>
          </Reveal>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {others.map((o) => (
              <Link key={o.slug} to={`/ventures/${o.slug}`} className="group overflow-hidden rounded-2xl glass gold-border hover-lift">
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={o.image} alt={o.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-110" />
                </div>
                <div className="p-5">
                  <div className="text-[10px] tracking-[0.3em] text-[#F4D67A] uppercase">{o.status}</div>
                  <div className="mt-1 font-display text-xl">{o.name}</div>
                  <div className="mt-1 text-xs text-white/60">{o.location}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
      <div className="text-[10px] tracking-[0.3em] text-white/60 uppercase">{label}</div>
      <div className="mt-1 text-sm font-medium text-white/95">{value}</div>
    </div>
  );
}
