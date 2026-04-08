import type { Metadata } from "next";
import Image from "next/image";
export const metadata: Metadata = {
    title: "Skincare Routine | Salón Viktória",
    description: "Prémiové krémy a séra na domáce použitie. Hydratačné séra, anti-age krémy a špeciálna starostlivosť po PMU.",
};

export default function CreamsPage() {
    return (
        <div className="flex flex-col gap-8">
            <div className="relative h-[300px] md:h-[500px] w-full rounded-xl overflow-hidden border border-white/10 shadow-2xl">
                <Image
                    src="/sluzby/kozmetika.webp"
                    alt="Skincare Routine"
                    fill
                    className="object-cover"
                />
            </div>

            <div className="space-y-2 font-montserrat font-light text-[#1D0E22] leading-snug text-lg">
                <h3 className="font-marcellus text-4xl text-[#1D0E22] mb-8 uppercase">Skincare Routine</h3>
                <p>
                    Prémiové krémy a séra na domáce použitie, ktoré dopĺňajú naše salónne ošetrenia.
                    Vysoko účinné látky pre vašu každodennú rutinu a dlhodobú krásu.
                </p>
                <ul className="flex flex-wrap gap-6 mt-6">
                    <li className="flex gap-2 items-center"><span className="text-gold text-xl">✦</span><span>Hydratačné a vyživujúce séra</span></li>
                    <li className="flex gap-2 items-center"><span className="text-gold text-xl">✦</span><span>Anti-age nočné a denné krémy</span></li>
                    <li className="flex gap-2 items-center"><span className="text-gold text-xl">✦</span><span>Špeciálna starostlivosť po PMU</span></li>
                </ul>
            </div>
        </div>
    );
}
