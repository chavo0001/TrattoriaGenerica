import antipasti from "@/assets/demo-tortelli.jpg";
import tartare from "@/assets/demo-tartare.jpg";
import carneVerdure from "@/assets/demo-carne.jpg";
import fiorentina from "@/assets/demo-pasta-ragu.jpg";

export function Taste() {
  return (
    <section className="relative overflow-hidden bg-ink py-12 md:py-24 lg:py-36">
      <div className="mx-auto max-w-7xl px-5 lg:px-12">
        <div className="grid grid-cols-12 items-start gap-7 lg:gap-16">
          {/* Text column */}
          <div className="col-span-12 lg:sticky lg:top-32 lg:col-span-4">
            <span className="eyebrow">
              <span className="rule" />
              Cucina
            </span>
            <h2 className="mt-3 max-w-sm font-display text-3xl leading-[1.02] text-cream md:mt-6 md:text-5xl lg:text-6xl">
              Sapori riconoscibili,
              <span className="block italic text-sand font-light">serviti con carattere.</span>
            </h2>
            <p className="mt-3 max-w-xl text-xs leading-relaxed text-cream/70 md:mt-8 md:text-base">
              Da <span className="italic">Trattoria Piemontese</span> la cucina è fatta di materie
              prime scelte, pasta fresca, sughi lenti e secondi preparati con attenzione. Piatti
              generosi, presentati con misura.
            </p>
            <p className="mt-2 hidden max-w-md text-xs leading-relaxed text-cream/70 sm:block md:mt-5 md:text-base">
              Una selezione di vini italiani completa il percorso, mantenendo l&apos;atmosfera
              informale, elegante e accogliente di una trattoria contemporanea.
            </p>
          </div>

          {/* Asymmetric photo composition */}
          <div className="relative col-span-12 lg:col-span-8">
            <div className="grid grid-cols-12 gap-3 sm:gap-4 lg:gap-8">
              <figure className="col-span-6 lg:col-span-7">
                <img
                  src={fiorentina}
                  alt="Pasta fresca al ragù"
                  className="aspect-square w-full object-cover lg:aspect-[4/5]"
                  loading="lazy"
                />
                <figcaption className="mt-3 text-[10px] tracking-[0.3em] uppercase text-cream/50"></figcaption>
              </figure>

              <figure className="col-span-6 lg:col-span-5 lg:mt-28">
                <img
                  src={tartare}
                  alt="Tartare con pistacchi"
                  className="aspect-square w-full object-cover lg:aspect-[3/4]"
                  loading="lazy"
                />
                <figcaption className="mt-3 text-[10px] tracking-[0.3em] uppercase text-cream/50"></figcaption>
              </figure>

              <figure className="col-span-6 lg:col-span-6 lg:col-start-2 lg:mt-4">
                <img
                  src={antipasti}
                  alt="Tortelli con salsa alle erbe"
                  className="aspect-square w-full object-cover lg:aspect-[5/4]"
                  loading="lazy"
                />
                <figcaption className="mt-3 text-[10px] tracking-[0.3em] uppercase text-cream/50"></figcaption>
              </figure>

              <figure className="col-span-6 overflow-hidden lg:col-span-4 lg:mt-16">
                <img
                  src={carneVerdure}
                  alt="Secondo di carne con verdure"
                  className="aspect-square w-full origin-left scale-[1.18] object-cover object-left lg:aspect-[3/4]"
                  loading="lazy"
                />
                <figcaption className="mt-3 text-[10px] tracking-[0.3em] uppercase text-cream/50"></figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
