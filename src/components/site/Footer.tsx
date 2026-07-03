import { Link } from "react-router-dom";
import { Instagram, Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/ssr-logo.jpg";
import { COMPANY, VENTURES } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy-gradient">
      <div className="gold-divider" />
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <img src={logo} alt="SSR Group" width={56} height={56} className="h-14 w-14 rounded-full ring-1 ring-[#D4AF37]/60" />
            <div>
              <div className="font-display text-2xl font-bold text-gold-gradient">SSR GROUP</div>
              <div className="text-xs tracking-[0.25em] text-muted-foreground">YOUR DREAMS COMES TRUE WITH US</div>
            </div>
          </div>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-white/70">
            Crafting luxury gated communities & premium plotted ventures across
            Andhra Pradesh — with an uncompromising commitment to quality,
            trust and modern living.
          </p>
          <a
            href={COMPANY.instagram}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full glass gold-border px-4 py-2 text-sm"
          >
            <Instagram className="h-4 w-4 text-[#D4AF37]" /> @srr_group_
          </a>
        </div>

        <div>
          <h4 className="mb-4 font-display text-lg text-gold-gradient">Ventures</h4>
          <ul className="space-y-2 text-sm text-white/70">
            {VENTURES.map((v) => (
              <li key={v.slug}>
                <Link to="/ventures/$slug" params={{ slug: v.slug }} className="hover:text-[#F4D67A]">
                  {v.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 font-display text-lg text-gold-gradient">Contact</h4>
          <ul className="space-y-3 text-sm text-white/75">
            <li className="flex items-start gap-2"><Phone className="mt-0.5 h-4 w-4 text-[#D4AF37]" /><a href={`tel:${COMPANY.phone}`}>{COMPANY.phoneDisplay}</a></li>
            <li className="flex items-start gap-2"><Mail className="mt-0.5 h-4 w-4 text-[#D4AF37]" /><a href={`mailto:${COMPANY.email}`} className="break-all">{COMPANY.email}</a></li>
            <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 text-[#D4AF37]" /><span>{COMPANY.address.line1}, {COMPANY.address.line2}, {COMPANY.address.city}, {COMPANY.address.state} {COMPANY.address.pin}</span></li>
          </ul>
        </div>
      </div>
      <div className="gold-divider" />
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-6 text-xs text-white/50 sm:flex-row">
        <p>© {new Date().getFullYear()} SSR Group. All rights reserved.</p>
        <p>Crafted with precision · Luxury Real Estate</p>
      </div>
    </footer>
  );
}
