import type { Metadata } from "next";
import Image from "next/image";
export const metadata: Metadata = {
    title: "Kozmetika | Salón Viktória",
    description: "Komplexné kozmetické ošetrenia pre zdravie a krásu pleti. Hĺbkové čistenie, anti-age kúry a individuálne poradenstvo.",
};

export default function CosmeticsPage() {
    return (
        <div className="flex flex-col gap-8">
            <div className="relative h-[300px] md:h-[500px] w-full rounded-xl overflow-hidden border border-white/10 shadow-2xl">
                <Image
                    src="/sluzby/kozmetika.webp"
                    alt="Kozmetika"
                    fill
                    className="object-cover"
                />
            </div>

            <div className="space-y-2 font-montserrat font-light text-[#1D0E22] leading-snug text-lg">
                <h3 className="font-marcellus text-4xl text-[#1D0E22] mb-8 uppercase">Rituály tváre</h3>
                <p>
                    Komplexné kozmetické ošetrenia pre zdravie a krásu vašej pleti. Používame len overené, prémiové produkty
                    a procedúry prispôsobené vašim individuálnym potrebám.
                </p>
                <ul className="flex flex-wrap gap-6 mt-6">
                    <li className="flex gap-2 items-center"><span className="text-gold text-xl">✦</span><span>Hĺbkové čistenie pleti</span></li>
                    <li className="flex gap-2 items-center"><span className="text-gold text-xl">✦</span><span>Anti-age kúry a masáže</span></li>
                    <li className="flex gap-2 items-center"><span className="text-gold text-xl">✦</span><span>Poradenstvo v domácej starostlivosti</span></li>
                </ul>
            </div>
        </div>
    );
}
