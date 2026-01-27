import Header from "@/components/Header";
import Hero from "@/components/Hero";

import Reviews from "@/components/Reviews";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-main-bg">
      <Header />
      <Hero />
      <Reviews />
      <Footer />
    </main>
  );
}
