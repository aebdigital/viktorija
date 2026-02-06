import Header from "@/components/Header";
import Hero from "@/components/Hero";
import BlogSection from "@/components/BlogSection";
import Reviews from "@/components/Reviews";
import Footer from "@/components/Footer";
import WindParticles from "@/components/WindParticles";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="relative isolate">
        <WindParticles />
        <Hero />
        <BlogSection />
        <Reviews />
      </div>
      <Footer />
    </main>
  );
}
