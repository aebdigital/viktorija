"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";
import { Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { supabase } from "@/lib/supabase";
import GoogleMap from "@/components/GoogleMap";

export default function KontaktPage() {
    const [formData, setFormData] = useState({ name: "", phone: "", message: "" });
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("submitting");

        const { error } = await supabase
            .from("viktorija_contact_messages")
            .insert({
                client_name: formData.name,
                client_phone: formData.phone,
                message: formData.message,
            });

        if (error) {
            setStatus("error");
        } else {
            setStatus("success");
            setFormData({ name: "", phone: "", message: "" });
        }
    };

    return (
        <main className="min-h-screen text-[#1D0E22]">
            <Header />

            <div className="pt-32 pb-24 w-[90vw] md:w-[95vw] mx-auto min-h-screen grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* Contact Text & Form */}
                <div className="space-y-12 animate-fade-in-up">
                    <div>
                        <p className="font-montserrat text-lg md:text-xl text-[#1D0E22]/80 font-light max-w-lg leading-relaxed border-l-2 border-gold pl-6">
                            Máte otázky alebo sa chcete objednať? Neváhajte ma kontaktovať.
                        </p>
                    </div>

                    <div className="space-y-6 font-montserrat font-light text-lg">
                        <div className="flex flex-col gap-1">
                            <span className="text-gold uppercase tracking-widest text-sm font-bold">Adresa</span>
                            <p>Twin City Tower<br />Mlynské Nivy 10, 821 09 Bratislava</p>
                        </div>
                        <div className="flex flex-col gap-1">
                            <span className="text-gold uppercase tracking-widest text-sm font-bold">Telefón</span>
                            <a href="tel:+421907796562" className="hover:text-gold transition-colors">+421 907 796 562</a>
                        </div>
                        <div className="flex flex-col gap-1">
                            <span className="text-gold uppercase tracking-widest text-sm font-bold">Email</span>
                            <a href="mailto:viktorija@viktorija.sk" className="hover:text-gold transition-colors">viktorija@viktorija.sk</a>
                        </div>
                    </div>


                    <form onSubmit={handleSubmit} className="space-y-6 max-w-md pt-8">
                        <div>
                            <input
                                type="text"
                                placeholder="Vaše Meno"
                                className="w-full bg-transparent border-b border-[#1D0E22]/20 py-4 text-[#1D0E22] placeholder-[#1D0E22]/50 focus:outline-none focus:border-gold transition-colors font-montserrat font-light"
                                required
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                disabled={status === "success"}
                            />
                        </div>
                        <div>
                            <input
                                type="tel"
                                placeholder="Telefón"
                                className="w-full bg-transparent border-b border-[#1D0E22]/20 py-4 text-[#1D0E22] placeholder-[#1D0E22]/50 focus:outline-none focus:border-gold transition-colors font-montserrat font-light"
                                required
                                value={formData.phone}
                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                disabled={status === "success"}
                            />
                        </div>
                        <div>
                            <textarea
                                placeholder="Správa"
                                rows={4}
                                className="w-full bg-transparent border-b border-[#1D0E22]/20 py-4 text-[#1D0E22] placeholder-[#1D0E22]/50 focus:outline-none focus:border-gold transition-colors font-montserrat font-light resize-none"
                                required
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                disabled={status === "success"}
                            />
                        </div>

                        {status === "error" && (
                            <div className="flex items-center gap-2 text-red-500 text-sm font-montserrat">
                                <AlertCircle className="w-4 h-4" />
                                Niečo sa pokazilo. Skúste to znova.
                            </div>
                        )}

                        {status === "success" && (
                            <div className="flex items-center gap-2 text-green-600 text-sm font-montserrat">
                                <CheckCircle className="w-4 h-4" />
                                Správa bola odoslaná. Ďakujeme!
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={status === "submitting" || status === "success"}
                            className="px-12 py-4 bg-[#1D0E22] text-gold font-marcellus font-bold tracking-widest hover:bg-opacity-90 transition-colors duration-300 w-full md:w-auto disabled:opacity-50 flex items-center justify-center gap-2"
                        >
                            {status === "submitting" ? (
                                <>
                                    <Loader2 className="w-4 h-4 animate-spin" />
                                    ODOSIELAM...
                                </>
                            ) : status === "success" ? (
                                "ODOSLANÉ"
                            ) : (
                                "ODOSLAŤ SPRÁVU"
                            )}
                        </button>
                    </form>
                </div>

                {/* Map Section */}
                <div className="relative h-[600px] w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                    <GoogleMap
                        title="Salón Viktória - kontakt mapa"
                        extraMarkers={[
                            { lat: 48.146789638941314, lng: 17.12874363688941, label: "NIVY", imageSrc: "/NIVY.webp", name: "NIVY centrum", address: "Mlynské Nivy 16, 821 09 Bratislava" },
                        ]}
                    />
                </div>
            </div>

            <Footer />
        </main>
    );
}
