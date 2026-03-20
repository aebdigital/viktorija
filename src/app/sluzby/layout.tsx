import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServicesSidebar from "./_components/ServicesSidebar";

export default function SluzbyLayout({ children }: { children: React.ReactNode }) {
    return (
        <main className="min-h-screen text-white">
            <Header />
            <div className="pt-32 pb-24 w-[90vw] md:w-[95vw] mx-auto min-h-screen">
                <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-8 items-start">
                    <ServicesSidebar />
                    <div className="min-h-[600px] relative">
                        {children}
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
