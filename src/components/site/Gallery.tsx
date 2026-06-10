import dessert from "@/assets/demo-dessert.jpg";
import brasato from "@/assets/demo-brasato.jpg";
import risotto from "@/assets/demo-risotto.jpg";
import tortelli from "@/assets/demo-tortelli.jpg";
import carne from "@/assets/demo-carne.jpg";
import tartare from "@/assets/demo-tartare.jpg";
import pasta from "@/assets/demo-pasta-ragu.jpg";
import gnocchi from "@/assets/demo-gnocchi.jpg";
import gnocchiColorati from "@/assets/demo-gnocchi-colorati.jpg";

const photos = [
  { src: pasta, alt: "Pasta fresca al ragù", className: "aspect-[3/4]" },
  { src: dessert, alt: "Dessert con fragole", className: "aspect-[4/3]" },
  { src: gnocchiColorati, alt: "Gnocchi colorati", className: "aspect-[3/4]" },
  { src: tortelli, alt: "Tortelli alle erbe", className: "aspect-[5/4]" },
  { src: brasato, alt: "Brasato della tradizione", className: "aspect-[3/4]" },
  { src: risotto, alt: "Risotto mantecato", className: "aspect-video" },
  { src: gnocchi, alt: "Gnocchi al ragù", className: "aspect-[3/4]" },
  { src: tartare, alt: "Tartare con pistacchi", className: "aspect-[4/5]" },
  {
    src: carne,
    alt: "Carne con verdure",
    className: "aspect-[4/3] origin-left scale-[1.18] object-left",
  },
];

export function Gallery() {
  return (
    <section className="bg-ink pb-14 pt-12 md:pb-28 md:pt-24 lg:pb-44 lg:pt-36">
      <div className="mx-auto max-w-7xl px-5 lg:px-12">
        <div className="max-w-2xl">
          <span className="eyebrow">
            <span className="rule" />
            Galleria
          </span>
          <h2 className="mt-3 font-display text-3xl leading-[1.02] text-cream md:mt-6 md:text-5xl lg:text-6xl">
            Un assaggio
            <span className="italic text-sand font-light"> della nostra cucina.</span>
          </h2>
        </div>

        <div className="mt-6 columns-2 gap-2.5 sm:columns-2 sm:gap-5 md:mt-16 lg:columns-3 lg:gap-8">
          {photos.map((photo, index) => (
            <figure
              key={photo.alt}
              className={`mb-2.5 break-inside-avoid overflow-hidden rounded-sm sm:mb-5 lg:mb-8 ${index % 3 === 1 ? "lg:pt-8" : ""}`}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                className={`w-full rounded-sm object-cover ${photo.className}`}
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
