import interior from "@/assets/demo-kitchen-team.jpeg";

export function Intro() {
  return (
    <section id="trattoria" className="relative bg-espresso py-12 md:py-24 lg:py-36">
      <div className="mx-auto max-w-7xl px-5 lg:px-12">
        <div className="grid grid-cols-12 items-center gap-4 md:gap-10 lg:gap-16">
          <div className="order-2 col-span-5 lg:order-1 lg:col-span-6">
            <img
              src={interior}
              alt="Due persone dello staff al lavoro in cucina"
              className="aspect-[3/4] w-full object-cover object-center md:aspect-[4/3]"
              loading="lazy"
            />
          </div>

          <div className="order-1 col-span-7 lg:order-2 lg:col-span-6 lg:pl-8">
            <span className="eyebrow">
              <span className="rule" />
              La trattoria
            </span>
            <h2 className="mt-3 font-display text-3xl leading-[1.02] text-cream md:mt-6 md:text-5xl lg:text-6xl">
              Semplice,
              <span className="block italic font-light text-sand">fatto bene.</span>
            </h2>
            <p className="mt-4 text-xs leading-relaxed text-cream/75 md:mt-8 md:text-lg">
              Trattoria Piemontese racconta una cucina italiana immediata e curata, costruita
              intorno a ingredienti stagionali, pasta fresca e cotture pazienti.
            </p>
            <p className="mt-2 hidden text-base leading-relaxed text-cream/65 sm:block md:mt-5">
              La carta segue il ritmo delle stagioni e alterna grandi classici a piatti più
              contemporanei. Ogni proposta nasce per essere riconoscibile, equilibrata e piacevole
              da condividere.
            </p>

            <div className="mt-4 border-l-2 border-sand/70 pl-3 md:mt-10 md:pl-6">
              <p className="font-display text-lg italic text-sand md:text-2xl">
                Tradizione italiana, spirito contemporaneo.
              </p>
              <p className="mt-3 hidden text-sm leading-relaxed text-cream/58 md:block">
                Una trattoria vive di gesti concreti: la spesa del mattino, la cucina fatta con
                attenzione e il piacere di portare in tavola qualcosa di riconoscibile, buono,
                sincero.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
