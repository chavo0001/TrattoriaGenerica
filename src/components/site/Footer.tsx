import { Facebook, Instagram, MapPin, Phone } from "lucide-react";

const socialLinks = {
  instagram: "https://www.instagram.com/",
  facebook: "https://www.facebook.com/",
};

export function Footer() {
  return (
    <footer className="bg-ink text-cream/80 border-t border-cream/10">
      <div className="mx-auto max-w-7xl px-5 py-10 md:py-20 lg:px-12">
        <div className="grid grid-cols-3 gap-4 md:grid-cols-12 md:gap-10">
          <div className="col-span-1 md:col-span-5">
            <div className="font-display leading-none">
              <div className="text-xl text-cream md:text-3xl">Trattoria</div>
              <div className="-mt-1 text-base italic font-light text-sand sm:text-xl md:text-4xl">
                Piemontese
              </div>
            </div>
            <p className="mt-3 hidden max-w-sm leading-relaxed text-cream/60 sm:block md:mt-6">
              Cucina italiana, ospitalità autentica e un&apos;atmosfera curata.
            </p>
            <div className="mt-3 flex gap-2 md:mt-6 md:gap-3">
              <a
                href={socialLinks.facebook}
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-cream/20 transition-colors hover:border-wine hover:bg-wine md:h-10 md:w-10"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-cream/20 transition-colors hover:border-wine hover:bg-wine md:h-10 md:w-10"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="col-span-1 md:col-span-3">
            <h4 className="text-[10px] tracking-[0.3em] uppercase text-cream/50">Naviga</h4>
            <ul className="mt-3 space-y-1.5 text-[11px] md:mt-5 md:space-y-2.5 md:text-sm">
              <li>
                <a href="#home" className="hover:text-sand transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#trattoria" className="hover:text-sand transition-colors">
                  La Trattoria
                </a>
              </li>
              <li>
                <a href="#menu-pdf" className="hover:text-sand transition-colors">
                  Menu
                </a>
              </li>
              <li>
                <a href="#prenota" className="hover:text-sand transition-colors">
                  Prenota
                </a>
              </li>
              <li>
                <a href="#recensioni" className="hover:text-sand transition-colors">
                  Recensioni
                </a>
              </li>
              <li>
                <a href="#dove-siamo" className="hover:text-sand transition-colors">
                  Dove siamo
                </a>
              </li>
            </ul>
          </div>

          <div className="col-span-1 md:col-span-4">
            <h4 className="text-[10px] tracking-[0.3em] uppercase text-cream/50">Contatti</h4>
            <ul className="mt-3 space-y-2 text-[10px] md:mt-5 md:space-y-3 md:text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 text-sand" />
                <span>
                  Via Esempio 24
                  <br />
                  10100 Torino TO
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-sand" />
                <a href="tel:+390110000000" className="hover:text-sand transition-colors">
                  011 000 0000
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-row justify-between gap-3 border-t border-cream/10 pt-4 text-[9px] text-cream/50 md:mt-16 md:pt-6 md:text-xs">
          <span>© {new Date().getFullYear()} Trattoria Piemontese. Sito dimostrativo.</span>
          <span>Torino (TO)</span>
        </div>
      </div>
    </footer>
  );
}
