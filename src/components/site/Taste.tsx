import antipasti from "@/assets/demo-tortelli.jpg";
import tartare from "@/assets/demo-tartare.jpg";
import carneVerdure from "@/assets/demo-carne.jpg";
import fiorentina from "@/assets/demo-pasta-ragu.jpg";

export function Taste() {
  return (
    <section id="cucina" className="grain relative overflow-hidden bg-ink py-16 md:py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="taste-editorial">
          <div className="taste-copy">
            <span className="eyebrow">
              <span className="rule" />
              Cucina
            </span>
            <h2 className="mt-5 max-w-xl font-display text-[2.15rem] leading-[1.02] text-cream md:text-5xl lg:text-6xl">
              Sapori riconoscibili,
              <span className="block font-light italic text-sand">serviti con carattere.</span>
            </h2>
            <p className="mt-5 max-w-md text-sm leading-7 text-cream/70 md:mt-7 md:text-base md:leading-8">
              Da <span className="italic">Trattoria Piemontese</span> la cucina è fatta di materie
              prime scelte, pasta fresca, sughi lenti e secondi preparati con attenzione. Piatti
              generosi, presentati con misura.
            </p>
          </div>

          <div className="taste-collage" aria-label="Selezione di piatti della cucina">
            <span className="taste-brush" aria-hidden="true" />

            <figure className="taste-photo taste-photo-main">
              <img src={fiorentina} alt="Pasta fresca al ragù" loading="lazy" />
            </figure>
            <span className="taste-tape" aria-hidden="true" />

            <figure className="taste-photo taste-photo-left">
              <img src={tartare} alt="Tartare con pistacchi" loading="lazy" />
            </figure>

            <figure className="taste-photo taste-photo-right">
              <img src={antipasti} alt="Tortelli con salsa alle erbe" loading="lazy" />
            </figure>

            <figure className="taste-photo taste-photo-bottom">
              <img src={carneVerdure} alt="Secondo di carne con verdure" loading="lazy" />
            </figure>

            <p className="taste-note">
              Cucina
              <br />
              di tradizione,
              <br />
              scelta con cura.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
