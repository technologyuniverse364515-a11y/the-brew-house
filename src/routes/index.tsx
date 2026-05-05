import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/cafe/Navbar";
import { Hero } from "@/components/cafe/Hero";
import { Menu } from "@/components/cafe/Menu";
import { Gallery } from "@/components/cafe/Gallery";
import { About } from "@/components/cafe/About";
import { Contact } from "@/components/cafe/Contact";
import { Footer } from "@/components/cafe/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "The Brew House — Fresh Coffee & Cozy Vibes" },
      {
        name: "description",
        content:
          "Visit The Brew House for handcrafted coffee, fresh pastries, and a warm atmosphere in the heart of Brooklyn.",
      },
      { property: "og:title", content: "The Brew House — Fresh Coffee & Cozy Vibes" },
      {
        property: "og:description",
        content:
          "Your favorite neighborhood cafe serving handcrafted coffee and fresh bakery items.",
      },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Menu />
      <Gallery />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
