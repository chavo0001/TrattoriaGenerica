import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Taste } from "@/components/site/Taste";
import { Intro } from "@/components/site/Intro";
import { MenuSection } from "@/components/site/Menu";
import { Reservation } from "@/components/site/Reservation";
import { Reviews } from "@/components/site/Reviews";
import { Gallery } from "@/components/site/Gallery";
import { Location } from "@/components/site/Location";
import { Footer } from "@/components/site/Footer";
import { MobileBar } from "@/components/site/MobileBar";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Trattoria Piemontese · Cucina italiana a Torino" },
      {
        name: "description",
        content:
          "Sito demo per una trattoria italiana elegante e contemporanea. Menu stagionale, prenotazioni e contatti di esempio.",
      },
      { property: "og:title", content: "Trattoria Piemontese · Torino" },
      {
        property: "og:description",
        content:
          "Cucina italiana, ingredienti stagionali e un'accoglienza autentica. Sito dimostrativo.",
      },
      { property: "og:type", content: "restaurant" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background pb-16 lg:pb-0">
      <Navbar />
      <Hero />
      <Taste />
      <Intro />
      <MenuSection />
      <Reservation />
      <Reviews />
      <Gallery />
      <Location />
      <Footer />
      <MobileBar />
    </main>
  );
}
