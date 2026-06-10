import { Phone, CalendarCheck, Map } from "lucide-react";

export function MobileBar() {
  return (
    <div className="lg:hidden fixed bottom-0 inset-x-0 z-40 border-t border-cream/15 bg-ink/95 backdrop-blur-md">
      <div className="grid grid-cols-3 divide-x divide-cream/10">
        <a
          href="tel:+390110000000"
          className="flex flex-row items-center justify-center gap-1.5 py-2 text-[9px] font-medium uppercase tracking-[0.14em] text-cream/85 sm:flex-col sm:py-3"
        >
          <Phone className="h-4 w-4 text-sand sm:h-5 sm:w-5" />
          Chiama
        </a>
        <a
          href="#prenota"
          className="flex flex-row items-center justify-center gap-1.5 bg-wine py-2 text-[9px] font-medium uppercase tracking-[0.14em] text-cream sm:flex-col sm:py-3"
        >
          <CalendarCheck className="h-4 w-4 sm:h-5 sm:w-5" />
          Prenota
        </a>
        <a
          href="https://www.google.com/maps/search/?api=1&query=45.0649%2C7.6828"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-row items-center justify-center gap-1.5 py-2 text-[9px] font-medium uppercase tracking-[0.14em] text-cream/85 sm:flex-col sm:py-3"
        >
          <Map className="h-4 w-4 text-sand sm:h-5 sm:w-5" />
          Mappa
        </a>
      </div>
    </div>
  );
}
