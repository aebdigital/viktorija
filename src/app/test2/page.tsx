import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Test2Page() {
    return (
        <main className="w-full">
            <Header />

            <section className="relative isolate min-h-[100svh] overflow-hidden">
                <div className="relative z-10 min-h-[100svh]" />
            </section>

            <section className="relative overflow-hidden">
                <div className="relative z-10">
                    <Footer />
                </div>
            </section>
        </main>
    );
}
