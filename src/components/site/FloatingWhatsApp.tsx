import { MessageCircle } from "lucide-react";
import { COMPANY, buildWhatsAppUrl } from "@/lib/site-data";

export function FloatingWhatsApp() {
  const href = buildWhatsAppUrl(
    `Hello ${COMPANY.name}, I'd like to know more about your luxury ventures.`,
  );
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-[90] group"
    >
      <span className="absolute inset-0 -z-10 rounded-full bg-[#25D366]/50 blur-2xl animate-pulse" />
      <span className="pointer-events-none absolute inset-0 -z-10 rounded-full ring-2 ring-[#25D366]/50 animate-ping" />
      <span className="grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_15px_40px_-10px_#25D366] ring-1 ring-white/20 backdrop-blur-md transition-transform duration-300 group-hover:scale-110">
        <MessageCircle className="h-6 w-6" fill="currentColor" strokeWidth={0} />
      </span>
      <span className="pointer-events-none absolute right-16 top-1/2 hidden -translate-y-1/2 whitespace-nowrap rounded-full glass gold-border px-4 py-2 text-xs text-white/90 group-hover:block">
        Chat with us · {COMPANY.phoneDisplay}
      </span>
    </a>
  );
}
