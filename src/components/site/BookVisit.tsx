import { useState } from "react";
import { Reveal } from "./Reveal";
import { VENTURES, COMPANY, buildWhatsAppUrl } from "@/lib/site-data";
import { Send, User, Phone, Mail, Building2, Calendar, MessageSquare } from "lucide-react";

export function BookVisit() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    venture: VENTURES[0].name,
    date: "",
    message: "",
  });

  const update = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hello SSR GROUP,

Name: ${form.name}
Phone: ${form.phone}
Email: ${form.email}
Selected Venture: ${form.venture}
Preferred Date: ${form.date}
Message: ${form.message}

I would like to book a site visit.`;
    window.open(buildWhatsAppUrl(msg), "_blank");
  };

  const inputCls =
    "w-full rounded-xl bg-white/[0.04] border border-white/10 px-11 py-3 text-sm placeholder:text-white/40 focus:outline-none focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/30 transition";

  return (
    <section id="book" className="section-y relative">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <p className="text-[11px] tracking-[0.4em] text-[#F4D67A]/80">BOOK A SITE VISIT</p>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl md:text-6xl">
              Experience luxury <span className="text-gold-gradient">in person.</span>
            </h2>
            <p className="mt-4 text-white/70">
              Fill in your details and we'll open WhatsApp to confirm your
              preferred site visit — directly with our sales team on{" "}
              <a href={`tel:${COMPANY.phone}`} className="text-[#F4D67A]">{COMPANY.phoneDisplay}</a>.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <form onSubmit={submit} className="mt-10 rounded-3xl glass gold-border p-6 sm:p-10">
            <div className="grid gap-4 md:grid-cols-2">
              <Field icon={User}><input required placeholder="Full Name" value={form.name} onChange={update("name")} className={inputCls} /></Field>
              <Field icon={Phone}><input required type="tel" placeholder="Phone Number" value={form.phone} onChange={update("phone")} className={inputCls} /></Field>
              <Field icon={Mail}><input type="email" placeholder="Email Address" value={form.email} onChange={update("email")} className={inputCls} /></Field>
              <Field icon={Building2}>
                <select value={form.venture} onChange={update("venture")} className={inputCls + " appearance-none"}>
                  {VENTURES.map((v) => <option key={v.slug} value={v.name} className="bg-[#0b1e33]">{v.name}</option>)}
                </select>
              </Field>
              <Field icon={Calendar}><input type="date" value={form.date} onChange={update("date")} className={inputCls} /></Field>
              <Field icon={MessageSquare} className="md:col-span-2">
                <textarea rows={4} placeholder="Message (optional)" value={form.message} onChange={update("message")} className={inputCls + " resize-none pt-3"} />
              </Field>
            </div>

            <div className="mt-6 flex flex-col items-center justify-between gap-4 sm:flex-row">
              <p className="text-xs text-white/50">On submit, your enquiry opens directly in WhatsApp.</p>
              <button
                type="submit"
                className="group inline-flex items-center gap-2 rounded-full bg-gold-gradient px-8 py-3 text-sm font-semibold text-[#081826] shadow-[0_15px_50px_-15px_#D4AF37] transition hover:scale-[1.03]"
              >
                Send via WhatsApp <Send className="h-4 w-4 transition group-hover:translate-x-1" />
              </button>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Field({ icon: Icon, children, className = "" }: { icon: React.ComponentType<{ className?: string }>; children: React.ReactNode; className?: string }) {
  return (
    <label className={`relative block ${className}`}>
      <Icon className="pointer-events-none absolute left-4 top-4 h-4 w-4 text-[#D4AF37]" />
      {children}
    </label>
  );
}
