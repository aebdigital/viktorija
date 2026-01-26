import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Reviews from "@/components/Reviews";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-main-bg">
      <Header />
      <Hero />
      <Services />
      <About />
      <Reviews />
      <Footer />
    </main>
  );
}
