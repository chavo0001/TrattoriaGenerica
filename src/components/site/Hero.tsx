import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Star } from "lucide-react";
import heroImg from "@/assets/demo-interior-hero.jpg";

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/",
    Icon: Instagram,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/",
    Icon: Facebook,
  },
];

export function Hero() {
  return (
    <section id="home" className="relative min-h-[100svh] w-full overflow-hidden bg-ink">
      <img
        src={heroImg}
        alt="Sala elegante della Trattoria Piemontese"
        className="absolute inset-0 h-full w-full object-cover object-center opacity-[0.72]"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/85 via-ink/55 to-ink" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/70 via-transparent to-transparent" />

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col px-5 pb-16 pt-24 md:pb-20 md:pt-32 lg:px-12 lg:pb-28 lg:pt-40">
        <div className="mt-auto max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-cream/25 bg-ink/40 px-4 py-1.5 backdrop-blur-sm">
            <Star className="h-3.5 w-3.5 fill-sand text-sand" />
            <span className="text-[11px] md:text-xs font-medium tracking-[0.22em] uppercase text-cream/85">
              4,4/5 su TheFork
            </span>
          </div>

          <h1 className="mt-5 max-w-3xl font-display text-5xl leading-[0.84] text-cream drop-shadow-2xl sm:text-6xl md:mt-8 md:text-8xl lg:text-9xl">
            Trattoria
            <span className="block italic font-light text-sand">Piemontese</span>
          </h1>

          <p className="mt-5 max-w-xl text-xs leading-relaxed text-cream/82 sm:text-sm md:mt-10 md:text-base">
            Una cucina italiana sincera, tra ricette di tradizione e cura contemporanea.
            <br />
            Ingredienti stagionali, ospitalità autentica e il piacere di stare a tavola.
          </p>

          <p className="mt-3 text-[9px] uppercase tracking-[0.2em] text-cream/60 md:mt-5 md:text-xs md:tracking-[0.28em]">
            Torino · Cucina italiana · Prenotazione consigliata
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-3 md:mt-10 md:gap-5">
            <Button asChild variant="cream" size="lg" className="md:h-14 md:px-8">
              <a href="#prenota">Prenota un tavolo</a>
            </Button>
            <Button asChild variant="circle" size="circleLg" className="hidden md:inline-flex">
              <a href="#menu-pdf">
                Guarda
                <br />
                il menu
              </a>
            </Button>
            <Button asChild variant="editorial" size="lg" className="md:hidden">
              <a href="#menu-pdf">Guarda il menu</a>
            </Button>
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-2 md:mt-7 md:gap-3">
            {socialLinks.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-cream/20 bg-ink/35 px-3 py-1.5 text-[9px] font-medium uppercase tracking-[0.16em] text-cream/80 backdrop-blur-sm transition-all hover:border-sand/70 hover:bg-cream/10 hover:text-sand md:gap-2 md:px-4 md:py-2 md:text-[11px] md:tracking-[0.2em]"
              >
                <Icon className="h-4 w-4" />
                {label}
              </a>
            ))}
          </div>
        </div>

        <div className="absolute bottom-8 right-5 lg:right-12 hidden md:flex flex-col items-end gap-2 text-cream/60">
          <span className="text-[10px] tracking-[0.4em] uppercase">Scroll</span>
          <span className="h-12 w-px bg-cream/40" />
        </div>
      </div>
    </section>
  );
}
