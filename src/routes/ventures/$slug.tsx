import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, CalendarDays, MapPin, Download, MessageCircle, CheckCircle2, Sparkles } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { getVenture, VENTURES, buildWhatsAppUrl, COMPANY } from "@/lib/site-data";

export const Route = createFileRoute("/ventures/$slug")({
  loader: ({ params }) => {
    const v = getVenture(params.slug);
    if (!v) throw notFound();
    return v;
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.name} — SSR GROUP` },
          { name: "description", content: loaderData.tagline },
          { property: "og:title", content: `${loaderData.name} — SSR GROUP` },
          { property: "og:description", content: loaderData.tagline },
          { property: "og:image", content: loaderData.image },
          { property: "og:type", content: "article" },
        ]
      : [],
  }),
  component: VenturePage,
  notFoundComponent: () => (
    <div className="grid min-h-dvh place-items-center px-4">
      <div className="glass gold-border rounded-2xl p-10 text-center">
        <h1 className="font-display text-3xl text-gold-gradient">Venture not found</h1>
        <Link to="/" className="mt-4 inline-block rounded-full bg-gold-gradient px-5 py-2 text-sm font-semibold text-[#081826]">Go home</Link>
      </div>
    </div>
  ),
});

function VenturePage() {
  const v = Route.useLoaderData();
  const wa = buildWhatsAppUrl(`Hello SSR GROUP, I'm interested in ${v.name}. Please share more details.`);
  const others = VENTURES.filter((x) => x.slug !== v.slug);

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative isolate overflow-hidden pt-32 pb-20">
          <div className="absolute inset-0 -z-10">
            <img src={v.image} alt={v.name} width={1920} height={1088} className="h-full w-full object-cover slow-zoom" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#050f1a]/85 via-[#081826]/80 to-[#050f1a]" />
          </div>

          <div className="mx-auto max-w-7xl px-4">
            <Link to="/" className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-[#F4D67A]">
              <ArrowLeft className="h-4 w-4" /> Back to home
            </Link>

            <div className="mt-6 grid gap-8 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] lg:items-end">
              <div>
                <span className="inline-block rounded-full glass gold-border px-3 py-1 text-[10px] tracking-[0.3em] text-[#F4D67A] uppercase">
                  {v.status}
                </span>
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
                  <a href="/#book" className="inline-flex items-center gap-2 rounded-full glass gold-border px-6 py-3 text-sm font-semibold">
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

        {/* Overview */}
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
                  {v.highlights.map((h) => (
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
              {v.amenities.map((a) => (
                <div key={a} className="rounded-2xl glass gold-border px-4 py-4 text-center text-sm text-white/85">{a}</div>
              ))}
            </div>
          </div>
        </section>

        {/* Other ventures */}
        <section className="section-y">
          <div className="mx-auto max-w-7xl px-4">
            <Reveal>
              <p className="text-[11px] tracking-[0.4em] text-[#F4D67A]/80">EXPLORE MORE</p>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl">Other <span className="text-gold-gradient">SSR ventures.</span></h2>
            </Reveal>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {others.map((o) => (
                <Link key={o.slug} to="/ventures/$slug" params={{ slug: o.slug }} className="group overflow-hidden rounded-2xl glass gold-border hover-lift">
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
      </main>
      <Footer />
    </>
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
