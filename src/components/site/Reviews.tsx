import { Star } from "lucide-react";

const reviews = [
  {
    text: "Una sala curata, servizio attento e piatti italiani preparati con grande equilibrio.",
    author: "Giulia R. · recensione demo",
  },
  {
    text: "Pasta fresca eccellente e una carta dei vini ben costruita. Atmosfera piacevole e rilassata.",
    author: "Marco B. · recensione demo",
  },
  {
    text: "Una trattoria contemporanea, elegante senza essere formale. Torneremmo volentieri.",
    author: "Elena P. · recensione demo",
  },
];

export function Reviews() {
  return (
    <section id="recensioni" className="bg-espresso py-12 md:py-24 lg:py-36">
      <div className="mx-auto max-w-7xl px-5 lg:px-12">
        <div className="grid grid-cols-2 items-end gap-4 md:gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <span className="eyebrow">
              <span className="rule" />
              Le recensioni
            </span>
            <h2 className="mt-3 font-display text-3xl leading-[1.02] text-cream md:mt-6 md:text-5xl lg:text-6xl">
              Un&apos;esperienza
              <span className="block italic text-sand font-light">da ricordare.</span>
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="hidden leading-relaxed text-cream/70 sm:block">
              Testimonianze fittizie inserite per mostrare l&apos;aspetto finale della sezione.
            </p>
            <div className="mt-0 inline-flex flex-col items-start gap-1.5 border border-cream/25 px-3 py-2 md:mt-5 md:flex-row md:items-center md:gap-3 md:px-5 md:py-2.5">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3 w-3 fill-sand text-sand md:h-4 md:w-4" />
                ))}
              </div>
              <span className="text-[10px] font-medium tracking-wide text-cream md:text-sm">
                4,4 / 5 · TheFork
              </span>
            </div>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-3 gap-px bg-cream/10 md:mt-16">
          {reviews.map((review) => (
            <figure key={review.author} className="bg-espresso p-3 md:p-8 lg:p-10">
              <span className="font-display text-2xl italic leading-none text-sand md:text-5xl">
                &ldquo;
              </span>
              <blockquote className="mt-1 font-display text-xs italic font-light leading-snug text-cream sm:text-sm md:mt-2 md:text-xl lg:text-2xl">
                {review.text}
              </blockquote>
              <figcaption className="mt-3 text-[7px] uppercase tracking-[0.12em] text-cream/50 md:mt-8 md:text-[10px] md:tracking-[0.3em]">
                — {review.author}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
