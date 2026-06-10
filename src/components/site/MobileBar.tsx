import { useEffect, useRef, useState } from "react";
import { Phone, CalendarCheck, Map } from "lucide-react";
import { cn } from "@/lib/utils";

export function MobileBar() {
  const [visible, setVisible] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    lastScrollY.current = window.scrollY;

    const onScroll = () => {
      const currentScrollY = window.scrollY;
      const difference = currentScrollY - lastScrollY.current;

      if (currentScrollY < 80) {
        setVisible(false);
      } else if (difference > 6) {
        setVisible(true);
      } else if (difference < -6) {
        setVisible(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={cn(
        "fixed inset-x-0 top-[5.5rem] z-40 border-y border-cream/15 bg-ink/95 shadow-xl shadow-black/25 backdrop-blur-md transition-all duration-300 md:top-24 lg:hidden",
        visible ? "translate-y-0 opacity-100" : "-translate-y-full pointer-events-none opacity-0",
      )}
    >
      <div className="grid grid-cols-3 divide-x divide-cream/10">
        <a
          href="tel:+390110000000"
          className="flex items-center justify-center gap-1.5 py-2.5 text-[9px] font-medium uppercase tracking-[0.14em] text-cream/85"
        >
          <Phone className="h-4 w-4 text-sand" />
          Chiama
        </a>
        <a
          href="#prenota"
          className="flex items-center justify-center gap-1.5 bg-wine py-2.5 text-[9px] font-medium uppercase tracking-[0.14em] text-cream"
        >
          <CalendarCheck className="h-4 w-4" />
          Prenota
        </a>
        <a
          href="https://www.google.com/maps/search/?api=1&query=45.0649%2C7.6828"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 py-2.5 text-[9px] font-medium uppercase tracking-[0.14em] text-cream/85"
        >
          <Map className="h-4 w-4 text-sand" />
          Mappa
        </a>
      </div>
    </div>
  );
}
