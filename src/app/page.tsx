import type { Metadata } from "next";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import BlogSection from "@/components/BlogSection";
import Reviews from "@/components/Reviews";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
    title: "Salón Viktória | Permanentný Make-up a Kozmetický Salón Bratislava",
    description: "Profesionálny permanentný make-up, estetická kozmetika, nastreľovanie náušníc a kurzy v akadémii. Viktorija Kendra – 20+ rokov skúseností v srdci Bratislavy.",
    alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="relative isolate">
        <Hero />
        <BlogSection />
        <Reviews />
      </div>
      <Footer />
    </main>
  );
}
