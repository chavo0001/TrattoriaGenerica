import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { href: "#home", label: "Home" },
  { href: "#trattoria", label: "La Trattoria" },
  { href: "#menu-pdf", label: "Menu" },
  { href: "#prenota", label: "Prenota" },
  { href: "#recensioni", label: "Recensioni" },
  { href: "#dove-siamo", label: "Dove siamo" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "bg-ink/85 backdrop-blur-md border-b border-cream/10" : "bg-transparent",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 lg:px-12">
        <a href="#home" className="flex items-center gap-3">
          <span className="flex h-12 w-12 items-center justify-center rounded-full border border-sand/60 font-display text-2xl italic text-sand md:h-14 md:w-14">
            TP
          </span>
          <span className="hidden sm:flex flex-col leading-none">
            <span className="font-sign text-lg md:text-xl text-cream tracking-wide">
              Trattoria Piemontese
            </span>
            <span className="font-body text-[10px] md:text-[11px] tracking-[0.22em] uppercase text-sand/80 mt-1">
              Cucina italiana contemporanea
            </span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-9">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[11px] font-medium tracking-[0.22em] uppercase text-cream/80 hover:text-sand transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-5">
          <a
            href="tel:+390110000000"
            className="flex items-center gap-2 text-xs tracking-wider text-cream/80 hover:text-sand transition-colors"
          >
            <Phone className="h-3.5 w-3.5" /> 011 000 0000
          </a>
        </div>

        <button
          aria-label="Apri menu"
          className="lg:hidden p-2 text-cream"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-ink border-t border-cream/10">
          <div className="flex flex-col px-5 py-6 gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-3 text-base text-cream/90 border-b border-cream/10 tracking-wide"
              >
                {l.label}
              </a>
            ))}
            <div className="flex gap-3 pt-5">
              <Button asChild variant="editorial" className="flex-1">
                <a href="tel:+390110000000">
                  <Phone className="h-4 w-4 mr-2" />
                  Chiama
                </a>
              </Button>
              <Button asChild variant="cream" className="flex-1">
                <a href="#prenota" onClick={() => setOpen(false)}>
                  Prenota
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
