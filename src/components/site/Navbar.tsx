import { useEffect, useState } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/ssr-logo.asset.json";
import { COMPANY } from "@/lib/site-data";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/chairman", label: "Chairman" },
  { to: "/ventures", label: "Ventures" },
  { to: "/amenities", label: "Amenities" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 20);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4">
        <div
          className={`grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 rounded-2xl px-4 py-2 sm:px-6 ${
            scrolled ? "glass gold-border" : ""
          }`}
        >
          <Link to="/" className="flex min-w-0 items-center gap-3">
            <img
              src={logo.url}
              alt="SSR Group"
              width={44}
              height={44}
              className="h-11 w-11 shrink-0 rounded-full object-cover ring-1 ring-[#D4AF37]/60"
            />
            <div className="min-w-0">
              <div className="truncate font-display text-lg font-bold tracking-wide text-gold-gradient sm:text-xl">
                SSR GROUP
              </div>
              <div className="hidden text-[10px] tracking-[0.25em] text-muted-foreground sm:block">
                YOUR DREAMS COMES TRUE WITH US
              </div>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                activeOptions={{ exact: true }}
                activeProps={{ className: "text-[#F4D67A]" }}
                inactiveProps={{ className: "text-white/80 hover:text-[#F4D67A]" }}
                className="rounded-full px-3 py-2 text-sm transition"
              >
                {l.label}
              </Link>
            ))}
            <a
              href={`tel:${COMPANY.phone}`}
              className="ml-3 inline-flex items-center gap-2 rounded-full bg-gold-gradient px-4 py-2 text-sm font-semibold text-[#081826] transition hover:shadow-[0_10px_30px_-10px_#D4AF37]"
            >
              <Phone className="h-4 w-4" /> {COMPANY.phoneDisplay}
            </a>
          </nav>

          <button
            aria-label="Toggle menu"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full glass gold-border lg:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <div className="mt-2 rounded-2xl glass gold-border p-4 lg:hidden">
            <nav className="flex flex-col gap-1">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  activeOptions={{ exact: true }}
                  activeProps={{ className: "text-[#F4D67A]" }}
                  className="rounded-lg px-3 py-2 text-sm text-white/85 hover:bg-white/5"
                >
                  {l.label}
                </Link>
              ))}
              <a
                href={`tel:${COMPANY.phone}`}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gold-gradient px-4 py-2 text-sm font-semibold text-[#081826]"
              >
                <Phone className="h-4 w-4" /> Call Now
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
