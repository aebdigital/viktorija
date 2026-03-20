"use client";

import PmuSubSidebar from "../../_components/PmuSubSidebar";
import ContactForm from "../../_components/ContactForm";
import StickyCennikButton from "../../_components/StickyCennikButton";
import Link from "next/link";
import Image from "next/image";

export default function DermoContent() {
    return (
        <div className="flex flex-col xl:flex-row gap-8 items-start">
            <div className="flex-1 space-y-8">
                {/* Mobile sub-nav */}
                <PmuSubSidebar variant="mobile" />

                {/* Desktop Back Button */}
                <Link
                    href="/sluzby/permanentny-makeup"
                    className="hidden xl:flex items-center gap-2 text-[#1D0E22] text-sm uppercase tracking-widest font-marcellus hover:text-gold transition-colors mb-4"
                >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                    Späť na prehľad
                </Link>

                {/* Hero Image */}
                <div className="relative h-[300px] md:h-[500px] w-full rounded-xl overflow-hidden border border-white/10 shadow-2xl">
                    <Image
                        src="/dermopigmentacia.webp"
                        alt="Dermopigmentácia"
                        fill
                        className="object-cover"
                        style={{ objectPosition: "65% center" }}
                        priority
                    />
                </div>

                {/* Content */}
                <div className="font-montserrat font-light text-[#1D0E22] leading-snug text-lg">
                    <div className="space-y-8">
                        <h3 className="font-marcellus text-3xl text-[#1D0E22] mb-4">Dermopigmentácia</h3>

                        <p>
                            Obsah sa pripravuje... Dermopigmentácia je odborná technika zameraná na estetickú a medicínsku mikropigmentáciu pokožky.
                        </p>

                        {/* Cenník Placeholder */}
                        <div id="pmu-dermo-prices" className="pt-16 border-t-2 border-gold/20 mt-16">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                <div className="space-y-10 bg-white/30 p-8 rounded-2xl text-center">
                                    <h3 className="font-marcellus text-3xl text-[#1D0E22] uppercase tracking-widest">Cenník – Dermopigmentácia</h3>
                                    <p className="font-montserrat italic opacity-60">Cenník sa pripravuje...</p>
                                </div>
                                <ContactForm />
                            </div>
                        </div>
                    </div>
                </div>

                <StickyCennikButton />
            </div>

            {/* Desktop Right Sub-Sidebar */}
            <PmuSubSidebar variant="desktop" />
        </div>
    );
}
