import { motion } from "framer-motion";
import { ArrowDown, Building2, Home, MapPin, Users, Phone, MessageCircle } from "lucide-react";
import heroImg from "@/assets/hero-drone.jpg";
import logo from "@/assets/ssr-logo.asset.json";
import { COMPANY, buildWhatsAppUrl } from "@/lib/site-data";

const stats = [
  { icon: Building2, value: "4", label: "Premium Ventures" },
  { icon: Users, value: "1000+", label: "Happy Families" },
  { icon: Home, value: "500+", label: "Luxury Homes" },
  { icon: MapPin, value: "1000+", label: "Premium Plots" },
];

const particles = Array.from({ length: 18 });

export function Hero() {
  const wa = buildWhatsAppUrl("Hello SSR GROUP, I'd like to know more about your ventures.");
  return (
    <section className="relative isolate flex min-h-dvh items-center overflow-hidden pt-24">
      {/* Cinematic background */}
      <div className="absolute inset-0 -z-10">
        <img
          src={heroImg}
          alt="Luxury gated community drone view"
          width={1920}
          height={1088}
          className="h-full w-full object-cover slow-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050f1a]/70 via-[#081826]/75 to-[#050f1a]" />
        <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_-10%,rgba(212,175,55,0.18),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(600px_300px_at_10%_90%,rgba(212,175,55,0.12),transparent_70%)]" />
      </div>

      {/* Floating particles */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {particles.map((_, i) => {
          const size = 3 + (i % 5);
          return (
            <span
              key={i}
              className="particle"
              style={{
                width: size,
                height: size,
                left: `${(i * 53) % 100}%`,
                top: `${(i * 37) % 100}%`,
                animationDelay: `${(i % 8) * 0.6}s`,
                animationDuration: `${6 + (i % 5)}s`,
              }}
            />
          );
        })}
      </div>

      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.2, 0.8, 0.2, 1] }}
          className="mx-auto"
        >
          <div className="relative mx-auto grid h-28 w-28 place-items-center rounded-full glass gold-border sm:h-32 sm:w-32">
            <img src={logo.url} alt="SSR Group" width={112} height={112} className="h-24 w-24 rounded-full object-cover sm:h-28 sm:w-28" />
            <div className="pointer-events-none absolute -inset-3 rounded-full border border-[#D4AF37]/40 [mask:linear-gradient(black,transparent)]" />
          </div>
        </motion.div>

        <div className="text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-[11px] tracking-[0.5em] text-[#F4D67A]/80 sm:text-xs"
          >
            LUXURY REAL ESTATE · SINCE 2022
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mt-4 font-display text-5xl leading-[1.05] sm:text-7xl md:text-8xl"
          >
            <span className="text-gold-gradient">SSR </span>
            <span className="text-white">GROUP</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mx-auto mt-5 max-w-2xl text-sm tracking-[0.35em] text-white/75 sm:text-base"
          >
            YOUR DREAMS COMES TRUE WITH US
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.05, duration: 0.8 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-3"
          >
            <a href="#ventures" className="group inline-flex items-center gap-2 rounded-full bg-gold-gradient px-6 py-3 text-sm font-semibold text-[#081826] shadow-[0_10px_40px_-10px_#D4AF37] transition hover:scale-[1.03]">
              Explore Ventures
            </a>
            <a href="#book" className="inline-flex items-center gap-2 rounded-full glass gold-border px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/5">
              Book Site Visit
            </a>
            <a href={`tel:${COMPANY.phone}`} className="inline-flex items-center gap-2 rounded-full border border-white/25 px-5 py-3 text-sm text-white/90 transition hover:border-[#D4AF37] hover:text-[#F4D67A]">
              <Phone className="h-4 w-4" /> Call Now
            </a>
            <a href={wa} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-[#25D366]/50 bg-[#25D366]/10 px-5 py-3 text-sm text-[#7EE8A6] transition hover:bg-[#25D366]/20">
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.9 }}
          className="mx-auto mt-8 grid w-full max-w-5xl grid-cols-2 gap-3 md:grid-cols-4 md:gap-5"
        >
          {stats.map((s) => (
            <div key={s.label} className="glass gold-border rounded-2xl p-5 text-center hover-lift">
              <s.icon className="mx-auto h-6 w-6 text-[#D4AF37]" />
              <div className="mt-2 font-display text-3xl text-gold-gradient sm:text-4xl">{s.value}</div>
              <div className="mt-1 text-[11px] tracking-[0.2em] text-white/70 uppercase">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="pointer-events-none absolute inset-x-0 bottom-6 flex flex-col items-center gap-2 text-white/60">
        <span className="text-[10px] tracking-[0.4em]">SCROLL</span>
        <div className="relative flex h-10 w-6 items-start justify-center rounded-full border border-white/30">
          <span className="scroll-dot mt-2 block h-2 w-1 rounded-full bg-[#D4AF37]" />
        </div>
        <ArrowDown className="h-3 w-3" />
      </div>
    </section>
  );
}
