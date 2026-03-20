"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "@/components/Lightbox";
import ContactForm from "../_components/ContactForm";
import StickyCennikButton from "../_components/StickyCennikButton";

const DETI_IMAGES = [
    "/nausnice/01e4bd6f-6903-4861-8f3b-4df83439789c.JPG",
    "/nausnice/52fb1b1b-edf0-4591-82b1-35000de4e93b.JPG",
    "/nausnice/70d67b4b-1612-4a3a-b87a-d49b55581f77.JPG",
    "/nausnice/891f9025-9428-47c5-ae68-59bb6a95c8a7.JPG",
    "/nausnice/9e2587c7-89a4-46e6-9d3f-74d5ff171154.JPG",
    "/nausnice/b0d6005a-de50-4916-998e-ccb3654e3028.JPG",
    "/nausnice/b05691c0-20db-4093-afa7-883f5d28dcb1.JPG",
    "/nausnice/f2954987-f9e9-4131-8638-04771d3d09a8.JPG",
];

const DOSPELI_IMAGES = [
    "/nausnice/14cb9252-4abd-439e-ac14-4e0edcfad1a0.JPG",
    "/nausnice/39039543-96c5-48e4-8244-017c08a9ea1e.JPG",
    "/nausnice/45b18e58-573a-41af-b614-66f17df9eda4.JPG",
    "/nausnice/480ba2c7-5bbf-4df5-b39e-f4493d48053b.JPG",
    "/nausnice/512600a0-0ece-447e-bb79-4c08c735e8f5.JPG",
    "/nausnice/69aaf1c8-0d9d-4da9-b016-f3dac1b23019.JPG",
    "/nausnice/6a5074f1-0356-41d7-be23-bd13d6fb7c70.JPG",
    "/nausnice/b89ed3be-a60d-4897-95cf-373ebac2a6fb.JPG",
    "/nausnice/8cb9ed87-7357-4ca2-a514-c37fbc56dfab.JPG",
    "/nausnice/8e251a43-a6dd-4587-9f4d-3b562c023fdc.JPG",
    "/nausnice/9782a908-a27c-4b13-8ca8-b541b2fccf51.JPG",
    "/nausnice/d4cf2eed-10bd-46c2-89d6-c8e512b025ce.JPG",
    "/nausnice/df68efe7-1968-4149-a71c-d9655700c82e.JPG",
    "/nausnice/ed0cedfd-a60b-4997-8eb8-736b3fd80ce6.JPG",
    "/nausnice/f40bcc86-e861-40be-ba38-f43f51a40bc5.JPG",
    "/nausnice/ff9e8bd4-bdd0-431c-b1b9-6d5c23aa57fd.JPG",
];

const HERO_IMAGES = [
    "/nausnice/d54e7785-5c7b-4972-af15-20b56a815fbf.JPG",
    "/nausnice/ab8f196d-7887-43c9-8222-d77a018c23e7.JPG",
    "/nausnice/e7ee11c6-ce20-49e0-89eb-795972113b32.JPG",
];

export default function NausniceContent() {
    const [lightbox, setLightbox] = useState<{
        isOpen: boolean;
        images: string[];
        index: number;
    }>({
        isOpen: false,
        images: [],
        index: 0,
    });

    const openLightbox = (images: string[], index: number) => {
        setLightbox({ isOpen: true, images, index });
    };

    const nextImage = () => {
        setLightbox(prev => ({
            ...prev,
            index: (prev.index + 1) % prev.images.length,
        }));
    };

    const prevImage = () => {
        setLightbox(prev => ({
            ...prev,
            index: (prev.index - 1 + prev.images.length) % prev.images.length,
        }));
    };

    return (
        <div className="flex flex-col gap-8">
            <div className="grid grid-cols-3 gap-3 w-full">
                {HERO_IMAGES.map((src, idx) => (
                    <div key={idx} className="relative h-[200px] md:h-[500px] rounded-xl overflow-hidden border border-white/10 shadow-2xl">
                        <Image
                            src={src}
                            alt={`Nastreľovanie náušníc ${idx + 1}`}
                            fill
                            className="object-cover"
                        />
                    </div>
                ))}
            </div>

            <div className="font-montserrat font-light text-[#1D0E22] leading-snug text-lg">
                <div className="space-y-8">

                    {/* ═══ Estetické sebavedomie ═══ */}
                    <div className="space-y-2">
                        <h3 className="font-marcellus text-3xl text-[#1D0E22] uppercase">Nastreľovanie náušníc</h3>
                        <p className="text-xl italic text-[#1D0E22]/80">
                            Estetické sebavedomie je formou sebavyjadrenia.
                        </p>
                        <p>
                            Ucho sa stalo novou plochou pre šperkársky dizajn. Žena si skladá šperky ako kompozíciu. Viacero jemných dierok pôsobí sofistikovanejšie než jeden dominantný šperk – menej objemu, viac detailu.
                        </p>
                        <p>
                            Zdobenie viacerými dierkami je moderné, pretože spája architektúru, identitu a flexibilitu. Ucho má líniu, body a proporcie. Žena si vytvára vlastný podpis. Môže kombinovať, meniť, vrstviť.
                        </p>
                        <p>
                            Asymetria pôsobí moderne, detail ucha je fotogenický. Pri nastreľovaní vždy volím taký uhol, aby náušnice smerovali tam, kam smeruje pohľad – aby kompozícia ladila s tvárou ako celkom.
                        </p>
                    </div>

                    {/* ═══ Od bábätiek po slečny ═══ */}
                    <div className="space-y-2">
                        <h4 className="font-marcellus text-2xl text-[#1D0E22] uppercase tracking-wider">Nastreľovanie náušníc – od bábätiek po slečny</h4>
                        <p className="text-sm italic text-[#1D0E22]/60">Píšem z viac ako 20-ročného pozorovania vo svojej praxi.</p>
                        <p>
                            Pri nastreľovaní náušníc bábätkám je veľmi dôležitá pohoda mamy. Je to malý rituál – prijatie ženskosti. Ak sa mama teší na svoju dcérku s náušnicami, dieťa cíti pokoj.
                        </p>
                        <p>
                            U dospievajúcich dievčat je to iný moment. Je to rituál prechodu – z dievčaťa na slečnu.
                        </p>
                        <p>
                            Samotné nastreľovanie je krátky a spravidla príjemný proces. Pri analýze a dezinfekcii uška robím jemnú masáž. Nájdeme esteticky pekné miesto a označím ho bodkou. Značky musia byť symetrické. Mama alebo slečna majú vždy priestor miesto schváliť alebo pripomienkovať – musí sa páčiť nám všetkým.
                        </p>
                        <p>
                            Následne náušnice nastrelím.
                        </p>
                        <p>
                            Klienti si môžu vybrať z dvoch typov pištolí. Jedna je rýchlejšia a je počuť jemné &ldquo;kliknutie&rdquo;. Druhá je tichá – bábätko pocíti len drobný vpich a často ani nestihne zareagovať.
                        </p>
                        <p>
                            U adolescentiek býva reakcia podobná: prídu bledé a vystrašené, no po nastrelení sa pozrú do zrkadla a povedia: &ldquo;To až tak nebolelo.&rdquo; Odchádzajú usmiate a spokojné.
                        </p>
                        <p>
                            Čo sa týka akupunktúrnych bodov, v estetických miestach sa spravidla nenachádzajú. Niekoľkokrát sa stalo, že maminky dali uško označiť akupunkturistovi – a značky boli presne v miestach, ktoré sú vizuálne harmonické.
                        </p>
                        <p>
                            Náušnice sú vyrobené z chirurgickej ocele najvyššej kvality. Sú sterilné a hermeticky balené. Majú precízne tvarovaný hrot, ktorý uško šetrne prepichne.
                        </p>
                        <p>
                            K dispozícii je viacero modelov, z ktorých si môžete vybrať podľa vlastného štýlu.
                        </p>
                    </div>

                    {/* ═══ Galéria – Deti ═══ */}
                    <div className="pt-8 border-t border-black/5">
                        <h4 className="font-marcellus text-2xl text-[#1D0E22] uppercase tracking-wider mb-6">Deti</h4>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {DETI_IMAGES.map((src, idx) => (
                                <div
                                    key={idx}
                                    className="relative aspect-square rounded-lg overflow-hidden border border-black/10 shadow-sm cursor-pointer"
                                    onClick={() => openLightbox(DETI_IMAGES, idx)}
                                >
                                    <Image
                                        src={src}
                                        alt={`Nastreľovanie náušníc – deti ${idx + 1}`}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* ═══ Galéria – Dospelí ═══ */}
                    <div className="pt-8 border-t border-black/5">
                        <h4 className="font-marcellus text-2xl text-[#1D0E22] uppercase tracking-wider mb-6">Dospelí</h4>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {DOSPELI_IMAGES.map((src, idx) => (
                                <div
                                    key={idx}
                                    className="relative aspect-square rounded-lg overflow-hidden border border-black/10 shadow-sm cursor-pointer"
                                    onClick={() => openLightbox(DOSPELI_IMAGES, idx)}
                                >
                                    <Image
                                        src={src}
                                        alt={`Nastreľovanie náušníc – dospelí ${idx + 1}`}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* ═══ Cenník + Contact Form ═══ */}
            <div id="nausnice-prices" className="pt-16 border-t-2 border-gold/20 mt-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="space-y-10 bg-white/30 p-8 rounded-2xl">
                        <div className="text-center space-y-2 mb-8">
                            <h3 className="font-marcellus text-3xl text-[#1D0E22] uppercase tracking-widest">Nastreľovanie náušníc</h3>
                            <p className="font-montserrat text-sm text-[#1D0E22]/60 uppercase tracking-widest">Precíznosť, bezpečnosť a estetika v harmonickom spojení</p>
                        </div>

                        <div className="space-y-8 font-montserrat text-[#1D0E22]">
                            {/* Profesionálne služby */}
                            <div className="space-y-4">
                                <h4 className="font-marcellus text-lg uppercase tracking-wider border-b border-gold/10 pb-1">Profesionálne služby</h4>
                                <div className="space-y-4">
                                    <div className="flex justify-between items-start gap-4">
                                        <div className="space-y-1">
                                            <p className="font-medium">Klasické nastreľovanie uší</p>
                                            <p className="text-xs opacity-70">Dve dierky vrátane páru univerzálnych náušníc</p>
                                        </div>
                                        <span className="font-bold text-lg whitespace-nowrap">68 €</span>
                                    </div>
                                    <div className="flex justify-between items-start gap-4">
                                        <div className="space-y-1">
                                            <p className="font-medium">Nastrelenie jednej dierky</p>
                                            <p className="text-xs opacity-70">Vrátane páru náušníc</p>
                                        </div>
                                        <span className="font-bold text-lg whitespace-nowrap">44 €</span>
                                    </div>
                                    <div className="flex justify-between items-start gap-4">
                                        <div className="space-y-1">
                                            <p className="font-medium">Nastrelenie jednej dierky</p>
                                            <p className="text-xs opacity-70">Bez náušníc</p>
                                        </div>
                                        <span className="font-bold text-lg whitespace-nowrap">24 €</span>
                                    </div>
                                    <div className="flex justify-between items-start gap-4">
                                        <p className="font-medium text-sm">Každá ďalšia dierka od tretej</p>
                                        <span className="font-bold whitespace-nowrap">18 €</span>
                                    </div>
                                    <div className="flex justify-between items-start gap-4">
                                        <p className="font-medium text-sm">Ošetrenie zarastených dierok / nasadenie náušníc</p>
                                        <span className="font-bold whitespace-nowrap">12 €</span>
                                    </div>
                                </div>
                            </div>

                            {/* Výber náušníc */}
                            <div className="space-y-4">
                                <h4 className="font-marcellus text-lg uppercase tracking-wider border-b border-gold/10 pb-1">Výber náušníc</h4>
                                <div className="space-y-4">
                                    <div className="flex justify-between items-start gap-4">
                                        <p className="font-medium text-sm">Univerzálne nastreľovacie náušnice – pár</p>
                                        <span className="font-bold whitespace-nowrap">20 €</span>
                                    </div>
                                    <div className="flex justify-between items-start gap-4">
                                        <p className="font-medium text-sm">Dizajnové náušnice od šperkárskych značiek – pár</p>
                                        <span className="font-bold whitespace-nowrap">36 €</span>
                                    </div>
                                    <div className="flex justify-between items-start gap-4">
                                        <div className="space-y-1">
                                            <p className="font-medium">Baby Box</p>
                                            <p className="text-xs opacity-70 italic leading-relaxed">Odporúčaný pri nastreľovaní bábätkám (jemný, krátky a tenký hrot pre maximálny komfort)</p>
                                        </div>
                                        <span className="font-bold text-lg whitespace-nowrap">52 €</span>
                                    </div>
                                    <div className="flex justify-between items-start gap-4">
                                        <div className="space-y-1">
                                            <p className="font-medium">Luxusné šperkové nastreľovacie náušnice</p>
                                            <p className="text-xs opacity-70">Rhódium / 14-karátové zlato / zirkón</p>
                                        </div>
                                        <span className="font-bold text-lg whitespace-nowrap">100 €</span>
                                    </div>
                                </div>
                            </div>

                            {/* Hygiena a starostlivosť */}
                            <div className="space-y-4">
                                <h4 className="font-marcellus text-lg uppercase tracking-wider border-b border-gold/10 pb-1">Hygiena a starostlivosť</h4>
                                <div className="flex justify-between items-center gap-4">
                                    <p className="font-medium text-sm">Dezinfekcia (6 g)</p>
                                    <span className="font-bold whitespace-nowrap">3,50 €</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <ContactForm />
                </div>
            </div>

            <StickyCennikButton />

            <Lightbox
                isOpen={lightbox.isOpen}
                images={lightbox.images}
                currentIndex={lightbox.index}
                onClose={() => setLightbox(prev => ({ ...prev, isOpen: false }))}
                onNext={nextImage}
                onPrev={prevImage}
            />
        </div>
    );
}
