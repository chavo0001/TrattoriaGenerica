import { FileText } from "lucide-react";
import team from "@/assets/demo-gnocchi-colorati.jpg";
import detail from "@/assets/demo-risotto.jpg";
import brushstroke from "@/assets/demo-brushstroke-cream.png";

const pdfs = [
  { label: "Menu Italiano", href: "/menu/menu-italiano.pdf", lang: "IT" },
  { label: "Menu English", href: "/menu/menu-english.pdf", lang: "EN" },
  { label: "Menu Français", href: "/menu/menu-francais.pdf", lang: "FR" },
];

export function MenuSection() {
  return (
    <section id="menu" className="grain relative overflow-hidden bg-ink py-16 md:py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="menu-editorial">
          <div className="menu-editorial-copy">
            <span className="eyebrow">
              <span className="rule" />
              La nostra cucina
            </span>
            <h2 className="mt-5 font-display text-[2.35rem] leading-[1.02] text-cream md:text-5xl lg:text-6xl">
              Una carta
              <span className="block font-light italic text-sand">che segue le stagioni.</span>
            </h2>
            <p className="mt-6 max-w-md text-sm leading-7 text-cream/70 md:mt-8 md:text-base md:leading-8">
              Antipasti da condividere, pasta fresca, secondi della tradizione e dessert preparati
              in casa. La proposta è un esempio realistico e può essere personalizzata per ogni
              ristorante.
            </p>
          </div>

          <div className="menu-photo-composition">
            <figure className="menu-hero-photo">
              <img src={team} alt="Piatto con gnocchi colorati" loading="lazy" />
            </figure>
            <img
              src={brushstroke}
              alt=""
              aria-hidden="true"
              className="menu-detail-brushstroke"
              loading="lazy"
            />
            <figure className="menu-detail-photo">
              <img src={detail} alt="Risotto della Trattoria Piemontese" loading="lazy" />
            </figure>
            <svg className="menu-arrow" viewBox="0 0 90 70" fill="none" aria-hidden="true">
              <path d="M7 62C20 38 42 20 72 13" />
              <path d="M55 8C63 9 71 10 79 14C74 21 69 27 63 32" />
            </svg>
            <p className="menu-note">
              Ingredienti scelti,
              <br />
              stagione dopo stagione.
            </p>
          </div>
        </div>

        <div
          id="menu-pdf"
          className="scroll-mt-28 mt-20 rounded-lg border border-cream/12 bg-espresso/70 px-3 py-8 text-center shadow-2xl shadow-black/20 md:mt-28 md:px-10 md:py-12 lg:mt-36 lg:px-14 lg:py-16"
        >
          <span className="eyebrow">Consulta il menu completo</span>
          <h3 className="mx-auto mt-3 max-w-3xl font-display text-3xl leading-tight text-cream md:mt-5 md:text-5xl lg:text-6xl">
            Scegli la lingua
            <span className="block font-light italic text-sand">e apri la carta.</span>
          </h3>
          <p className="mx-auto mt-3 max-w-2xl text-xs leading-relaxed text-cream/60 md:mt-6 md:text-base">
            I menu dimostrativi si aprono in PDF in una nuova scheda. Piatti, prezzi e disponibilità
            sono indicativi e personalizzabili.
          </p>

          <div className="mt-6 grid grid-cols-3 gap-2 md:mt-12 md:gap-4">
            {pdfs.map((pdf) => (
              <a
                key={pdf.label}
                href={pdf.href}
                target="_blank"
                rel="noreferrer"
                className="group flex min-h-24 flex-col items-center justify-center rounded-lg border border-cream/18 bg-ink/55 p-2 text-cream transition-all hover:-translate-y-1 hover:border-sand/70 hover:bg-ink/80 hover:shadow-xl hover:shadow-black/20 md:min-h-40 md:p-7"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-sand/45 text-sand transition-colors group-hover:bg-sand group-hover:text-ink md:h-14 md:w-14">
                  <FileText className="h-4 w-4 md:h-6 md:w-6" />
                </span>
                <span className="mt-2 text-[8px] uppercase tracking-[0.2em] text-sand/75 md:mt-6 md:text-[10px] md:tracking-[0.35em]">
                  {pdf.lang}
                </span>
                <span className="mt-1 font-display text-sm leading-tight text-cream md:mt-3 md:text-3xl">
                  {pdf.label}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
