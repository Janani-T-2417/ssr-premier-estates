import { Reveal } from "./Reveal";
import { COMPANY } from "@/lib/site-data";
import { Phone, Mail, MapPin, Instagram } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="section-y relative">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <p className="text-[11px] tracking-[0.4em] text-[#F4D67A]/80">GET IN TOUCH</p>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl md:text-6xl">
              Visit our <span className="text-gold-gradient">corporate office.</span>
            </h2>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)]">
          <Reveal>
            <div className="flex h-full flex-col gap-4 rounded-3xl glass gold-border p-8">
              <InfoRow icon={Phone} title="Phone" href={`tel:${COMPANY.phone}`} value={COMPANY.phoneDisplay} />
              <InfoRow icon={Mail} title="Email" href={`mailto:${COMPANY.email}`} value={COMPANY.email} />
              <InfoRow
                icon={MapPin}
                title="Address"
                value={`${COMPANY.address.line1}, ${COMPANY.address.line2}, ${COMPANY.address.city}, ${COMPANY.address.state} ${COMPANY.address.pin}`}
              />
              <InfoRow icon={Instagram} title="Instagram" href={COMPANY.instagram} value="@srr_group_" />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="overflow-hidden rounded-3xl gold-border">
              <iframe
                title="SSR Group office location"
                src={COMPANY.mapEmbed}
                className="h-[420px] w-full bg-[#0b1e33]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function InfoRow({ icon: Icon, title, value, href }: { icon: React.ComponentType<{ className?: string }>; title: string; value: string; href?: string }) {
  const inner = (
    <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition hover:border-[#D4AF37]/50">
      <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gold-gradient text-[#081826]">
        <Icon className="h-5 w-5" />
      </div>
      <div className="min-w-0">
        <div className="text-[11px] tracking-[0.3em] text-white/60 uppercase">{title}</div>
        <div className="mt-1 break-words text-sm text-white/90">{value}</div>
      </div>
    </div>
  );
  return href ? <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">{inner}</a> : inner;
}
