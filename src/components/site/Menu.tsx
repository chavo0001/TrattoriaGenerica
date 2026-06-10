import { FileText } from "lucide-react";
import team from "@/assets/demo-gnocchi-colorati.jpg";
import detail from "@/assets/demo-risotto.jpg";

const pdfs = [
  { label: "Menu Italiano", href: "/menu/menu-italiano.pdf", lang: "IT" },
  { label: "Menu English", href: "/menu/menu-english.pdf", lang: "EN" },
  { label: "Menu Francais", href: "/menu/menu-francais.pdf", lang: "FR" },
];

export function MenuSection() {
  return (
    <section id="menu" className="relative bg-ink py-12 md:py-24 lg:py-36">
      <div className="mx-auto max-w-7xl px-5 lg:px-12">
        <div className="grid grid-cols-12 items-center gap-4 md:gap-10 lg:gap-16">
          <div className="col-span-5 lg:col-span-5">
            <span className="eyebrow">
              <span className="rule" />
              La nostra cucina
            </span>
            <h2 className="mt-3 font-display text-3xl leading-[1.02] text-cream md:mt-6 md:text-5xl lg:text-6xl">
              Una carta
              <span className="block italic font-light text-sand">che segue le stagioni.</span>
            </h2>
            <p className="mt-4 text-xs leading-relaxed text-cream/70 md:mt-8 md:text-base">
              Antipasti da condividere, pasta fresca, secondi della tradizione e dessert preparati
              in casa. La proposta è un esempio realistico e può essere personalizzata per ogni
              ristorante.
            </p>
            <p className="mt-5 text-sm italic leading-relaxed text-cream/50"></p>
          </div>

          <div className="col-span-7 pr-3 sm:pr-6 lg:col-span-7 lg:pr-10">
            <figure className="relative rounded-lg bg-espresso shadow-2xl shadow-black/25">
              <img
                src={team}
                alt="Piatto con gnocchi colorati"
                className="aspect-[4/3] w-full rounded-lg object-cover object-[50%_68%]"
                loading="lazy"
              />
              <img
                src={detail}
                alt="Risotto della Trattoria Piemontese"
                className="absolute -bottom-4 -right-3 aspect-[4/3] w-20 rounded-sm object-cover object-center shadow-2xl sm:-bottom-6 sm:-right-6 sm:w-32 md:w-48 lg:-bottom-10 lg:-right-10 lg:w-60"
                loading="lazy"
              />
            </figure>
          </div>
        </div>

        <div
          id="menu-pdf"
          className="scroll-mt-28 mt-12 rounded-lg border border-cream/12 bg-espresso/70 px-3 py-6 text-center shadow-2xl shadow-black/20 md:mt-24 md:px-10 md:py-12 lg:mt-32 lg:px-14 lg:py-16"
        >
          <span className="eyebrow">Consulta il menu completo</span>
          <h3 className="mx-auto mt-2 max-w-3xl font-display text-2xl leading-tight text-cream md:mt-5 md:text-5xl lg:text-6xl">
            Scegli la lingua
            <span className="block italic font-light text-sand">e apri la carta.</span>
          </h3>
          <p className="mx-auto mt-2 max-w-2xl text-[10px] leading-relaxed text-cream/60 md:mt-6 md:text-base">
            I menu dimostrativi si aprono in PDF in una nuova scheda. Piatti, prezzi e disponibilità
            sono indicativi e personalizzabili.
          </p>

          <div className="mt-4 grid grid-cols-3 gap-2 md:mt-12 md:gap-4">
            {pdfs.map((p) => (
              <a
                key={p.label}
                href={p.href}
                target="_blank"
                rel="noreferrer"
                className="group flex min-h-24 flex-col items-center justify-center rounded-lg border border-cream/18 bg-ink/55 p-2 text-cream transition-all hover:-translate-y-1 hover:border-sand/70 hover:bg-ink/80 hover:shadow-xl hover:shadow-black/20 md:min-h-40 md:p-7"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-sand/45 text-sand transition-colors group-hover:bg-sand group-hover:text-ink md:h-14 md:w-14">
                  <FileText className="h-4 w-4 md:h-6 md:w-6" />
                </span>
                <span className="mt-2 text-[8px] uppercase tracking-[0.2em] text-sand/75 md:mt-6 md:text-[10px] md:tracking-[0.35em]">
                  {p.lang}
                </span>
                <span className="mt-1 font-display text-sm leading-tight text-cream md:mt-3 md:text-3xl">
                  {p.label}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
