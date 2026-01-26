"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import { useState } from "react";

export default function KontaktPage() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate form submission
        setTimeout(() => setStatus("success"), 1000);
    };

    return (
        <main className="min-h-screen bg-main-bg text-white">
            <Header />

            <div className="pt-32 pb-24 w-[95vw] mx-auto min-h-screen grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* Contact Text & Form */}
                <div className="space-y-12 animate-fade-in-up">
                    <div>
                        <h1 className="font-saol italic text-6xl md:text-8xl text-white mb-6 tracking-wide drop-shadow-2xl">
                            KONTAKT
                        </h1>
                        <p className="font-montserrat text-lg md:text-xl text-white/80 font-light max-w-lg leading-relaxed border-l-2 border-gold pl-6">
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
                                className="w-full bg-transparent border-b border-white/20 py-4 text-white placeholder-white/40 focus:outline-none focus:border-gold transition-colors font-montserrat font-light"
                                required
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            />
                        </div>
                        <div>
                            <input
                                type="email"
                                placeholder="Váš Email"
                                className="w-full bg-transparent border-b border-white/20 py-4 text-white placeholder-white/40 focus:outline-none focus:border-gold transition-colors font-montserrat font-light"
                                required
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            />
                        </div>
                        <div>
                            <textarea
                                placeholder="Správa"
                                rows={4}
                                className="w-full bg-transparent border-b border-white/20 py-4 text-white placeholder-white/40 focus:outline-none focus:border-gold transition-colors font-montserrat font-light resize-none"
                                required
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={status === "success"}
                            className="px-12 py-4 bg-gold text-main-bg font-marcellus font-bold tracking-widest hover:bg-white transition-colors duration-300 w-full md:w-auto"
                        >
                            {status === "success" ? "ODOSLANÉ" : "ODOSLAŤ SPRÁVU"}
                        </button>
                    </form>
                </div>

                {/* Map or Image Section */}
                {/* Map Section */}
                <div className="relative h-[600px] w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                    <iframe
                        src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=Twin%20city%20Tower,%20Mlynsk%C3%A9%20Nivy%2010,%20821%2009%20Bratislava&t=&z=15&ie=UTF8&iwloc=B&output=embed"
                        width="100%"
                        height="100%"
                        style={{ border: 0, filter: 'grayscale(100%) invert(90%)' }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Salon Location"
                    />
                </div>
            </div>

            <Footer />
        </main>
    );
}
