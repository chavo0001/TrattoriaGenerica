import { MapPin, Phone, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const hours = [
  { day: "Lunedì", time: "Chiuso", closed: true },
  { day: "Martedì", time: "12:00 - 14:30  ·  19:00 - 22:30" },
  { day: "Mercoledì", time: "12:00 - 14:30  ·  19:00 - 22:30" },
  { day: "Giovedì", time: "12:00 - 14:30  ·  19:00 - 22:30" },
  { day: "Venerdì", time: "12:00 - 14:30  ·  19:00 - 23:00" },
  { day: "Sabato", time: "12:00 - 14:30  ·  19:00 - 23:00" },
  { day: "Domenica", time: "12:00 - 15:00" },
];

const MAPS_URL = "https://www.google.com/maps/search/?api=1&query=45.0649%2C7.6828";

export function Location() {
  return (
    <section id="dove-siamo" className="bg-ink py-12 md:py-24 lg:py-36">
      <div className="mx-auto max-w-7xl px-5 lg:px-12">
        <div className="max-w-2xl">
          <span className="eyebrow">
            <span className="rule" />
            Contatti
          </span>
          <h2 className="mt-3 font-display text-3xl leading-[1.02] text-cream md:mt-6 md:text-5xl lg:text-6xl">
            Dove
            <span className="italic text-sand font-light"> siamo.</span>
          </h2>
          <p className="mt-2 text-xs leading-relaxed text-cream/70 md:mt-6 md:text-base">
            La posizione mostrata è dimostrativa e si trova nel centro di Torino, facilmente
            raggiungibile con mezzi pubblici e a piedi.
          </p>
        </div>

        <div className="mt-5 grid grid-cols-5 items-stretch gap-2 md:mt-14 md:gap-6">
          <div className="col-span-3 min-h-64 overflow-hidden border border-cream/10 md:min-h-[420px]">
            <iframe
              title="Mappa della Trattoria Piemontese"
              src="https://www.openstreetmap.org/export/embed.html?bbox=7.6740%2C45.0590%2C7.6920%2C45.0710&layer=mapnik&marker=45.0649%2C7.6828"
              className="h-full min-h-64 w-full border-0 grayscale-[30%] md:min-h-[420px]"
              loading="lazy"
            />
          </div>

          <div className="col-span-2 space-y-2 md:space-y-4">
            <div className="border border-cream/15 p-3 md:p-7">
              <span className="text-[10px] tracking-[0.3em] uppercase text-cream/50 flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5" /> Indirizzo
              </span>
              <p className="mt-2 font-display text-sm italic font-light leading-tight text-cream md:mt-3 md:text-2xl">
                Via Esempio 24
                <br />
                10100 Torino TO
              </p>
              <Button
                asChild
                variant="editorial"
                size="sm"
                className="mt-2 h-8 w-full px-2 text-[8px] md:mt-5 md:h-10 md:px-4 md:text-sm"
              >
                <a href={MAPS_URL} target="_blank" rel="noopener noreferrer">
                  Apri su Google Maps <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </Button>
            </div>

            <div className="border border-cream/15 p-3 md:p-7">
              <span className="text-[10px] tracking-[0.3em] uppercase text-cream/50 flex items-center gap-2">
                <Phone className="h-3.5 w-3.5" /> Telefono
              </span>
              <a
                href="tel:+390110000000"
                className="mt-2 block font-display text-sm italic font-light text-sand md:mt-3 md:text-2xl"
              >
                011 000 0000
              </a>
            </div>

            <div className="border border-cream/15 p-3 md:p-7">
              <span className="text-[10px] tracking-[0.3em] uppercase text-cream/50">Orari</span>
              <p className="mt-2 text-[9px] leading-relaxed text-cream/65 sm:hidden">
                Mar - Sab
                <br />
                12:00 - 14:30
                <br />
                19:00 - 22:30
                <br />
                Dom 12:00 - 15:00
              </p>
              <ul className="mt-4 hidden space-y-2 sm:block">
                {hours.map((h) => (
                  <li
                    key={h.day}
                    className="flex items-baseline justify-between gap-3 text-sm border-b border-cream/10 pb-1.5 last:border-0"
                  >
                    <span className="text-cream/85">{h.day}</span>
                    <span className={h.closed ? "text-sand" : "text-cream/60 tabular-nums text-xs"}>
                      {h.time}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-2 hidden text-[11px] italic text-cream/45 sm:block md:mt-4">
                Orari e recapiti sono dati placeholder.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
