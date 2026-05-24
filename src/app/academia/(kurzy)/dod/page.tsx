import type { Metadata } from "next";
import Image from "next/image";
import AnimatedSpace from "@/app/academia/_components/AnimatedSpace";

export const metadata: Metadata = {
    title: "Deň Otvorených Dverí | Academia | Salón Viktória",
    description: "Permanentný make-up ako profesia. Vyskúšajte si prácu permanent make-up artistu na latexe a face chartoch — 18. 09. 2026.",
    alternates: { canonical: "/academia/dod" },
};

export default function DodPage() {
    return (
        <AnimatedSpace className="space-y-16">
            <h1 className="sr-only">Deň Otvorených Dverí</h1>

            {/* Section 1: Photo + Text */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-start">
                <div className="relative overflow-hidden rounded-2xl aspect-[4/5] md:min-h-[520px]">
                    <Image
                        src="/academia/DENOTVORENYCHDVERI.png"
                        alt="Deň Otvorených Dverí"
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="flex flex-col justify-start px-0 md:px-12 pt-6 md:pt-0 pb-10 space-y-4 font-montserrat font-light text-[#1D0E22] leading-tight text-lg [&_p]:my-0">
                    <p className="font-montserrat text-lg font-light text-[#1D0E22] leading-snug mb-2">
                        Pozývam vás na deň otvorených dverí v mojej akadémii, kde si môžete vyskúšať prácu permanent make-up artistu.
                    </p>
                    <p>
                        Budete tetovať na latexe a na face chartoch si vyskúšate návrh symetrického obočia, pier či očných liniek.
                    </p>
                    <p>
                        Permanentný make-up je spojenie estetiky, techniky, precíznosti a citu pre tvár. A práve pri prvom dotyku so strojčekom človek často pocíti, či ho táto profesia priťahuje — alebo nie.
                    </p>
                    <p>
                        V rukách budete držať profesionálny strojček, pracovať s pigmentmi a na chvíľu sa ponoríte do atmosféry tejto profesie.
                    </p>
                    <div className="border-l-2 border-gold/40 pl-4 space-y-1 italic text-[#1D0E22]/80 pt-2">
                        <p>Niekto v nej objaví svoju budúcu cestu.</p>
                        <p>Niekto si splní svoju dlhoročnú zvedavosť.</p>
                        <p>A niekto pochopí, že jeho talent smeruje inam.</p>
                    </div>
                </div>
            </div>

            {/* Section 2: Video + Text */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-start md:[&>*:first-child]:order-2 md:[&>*:last-child]:order-1">
                <div className="relative h-full min-h-[400px] md:min-h-[520px] overflow-hidden rounded-2xl">
                    <video
                        src="https://pub-60b685024baf4def829d5151d4dc320a.r2.dev/dod.mp4"
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                </div>
                <div className="flex flex-col justify-start px-0 md:px-12 pt-6 md:pt-0 pb-10 space-y-4 font-montserrat font-light text-[#1D0E22] leading-tight text-lg [&_p]:my-0">
                    <p>
                        Srdečne vás pozývam <strong>18. 09. 2026</strong>. Ja vás osobne prevediem celým procesom a spolu si vytvoríme vaše prvé obočie, pery alebo očné linky na latexe a face chartoch.
                    </p>
                    <p>
                        Tento deň je navrhnutý tak, aby bol pre vás praktický, inšpiratívny a pomohol vám získať jasnú predstavu o tom, čo všetko zahŕňa práca PMU artistky a ako vyzerá tréningový systém u nás.
                    </p>
                </div>
            </div>

            <div className="space-y-4">
                <h2 className="font-marcellus text-2xl md:text-3xl uppercase tracking-widest text-[#1D0E22] text-center">Program dňa</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[
                        { time: "9:00", label: "Obočie" },
                        { time: "11:00", label: "Pery" },
                        { time: "13:00", label: "Očné linky" },
                    ].map((slot) => (
                        <div key={slot.time} className="border border-[#1D0E22]/15 rounded-2xl p-6 text-center space-y-1 flex flex-col justify-center">
                            <p className="font-marcellus text-4xl text-[#1D0E22]">{slot.time}</p>
                            <p className="font-montserrat text-sm uppercase tracking-[0.2em] text-[#1D0E22]/70">{slot.label}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="p-8 bg-gold/5 border border-gold/20 rounded-2xl text-center space-y-2">
                <p className="font-marcellus text-xs uppercase tracking-[0.3em] text-gold">Počet miest je obmedzený</p>
                <p className="font-montserrat text-lg font-light text-[#1D0E22] leading-snug">
                    V prípade záujmu mi, prosím, napíšte správu.
                </p>
            </div>
        </AnimatedSpace>
    );
}
