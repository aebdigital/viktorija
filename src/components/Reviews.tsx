"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type Review =
    | { name: string; text: string }
    | { image: string; name?: string }
    | { video: string; name?: string };

const REVIEWS: Review[] = [
    { name: "Katarina Kvackajova", text: "Amazing facial treatment that makes me always look and feel at least 5 years younger:) Professional attitude, top level cosmetics procedures and products. Absolutely recommending." },
    { name: "Za Si", text: "Cosy little place with talented owner who can do miracles. Thanks for the perfect eye brows 😉 and years of service and friendship. Money and time well spent 👌🏻" },
    { name: "Dorota Paulik", text: "Viktorija je neuveriteľný profík a úžasná žena k tomu❤️ Každá návšteva je zážitok, po ktorom sa cítim ako znovuzrodená. Ďakujem🤩" },
    { image: "/homepage/recenzia1.webp", name: "Oľga Záblacká" },
    { name: "Kamila Danisova", text: "V salónu se vždy setkám s velkou profesionalitou. Po vyzkoušení několika salónů v Praze jsem se vrátila k Viktóriji, kde dostávám dlouhodobý vztah a péči." },
    { name: "Alexandra Hozakova", text: "Viktorija mi robila permanentný make up obočia a odviedla výbornú prácu. Precízna a profesionálna, určite odporúčam😊" },
    { video: "https://pub-60b685024baf4def829d5151d4dc320a.r2.dev/recenzia4.mp4", name: "Martina Shindlerova" },
    { name: "Viktoria – Jan Gerci", text: "Salón krásy Viktorija je úžasný, moderný. Majiteľka pracuje s kvalitnými materiálmi. Chodím k nej už osem rokov, moja pleť je krásna, mladá.. Viktorija je najlepšia expertka." },
    { name: "Dana Hamárová", text: "Viktorija sa stará o moju pleť už niekoľko rokov. Hneď po prvých návštevách som videla zmenu. Doporučujem hlavne masáže." },
    { image: "/homepage/recenzia2.jpg", name: "Barbora Bakošová" },
    { name: "Andrea Romanová", text: "Vyše pol roka som sa snažila inde odstrániť staré tetovanie, minula som čas a peniaze. Až u Viktorije začala moja 'nechcená ozdoba' konečne miznúť." },
    { name: "Katka Gajdošová", text: "Unavovalo ma každé ráno si kresliť obočie. Permanentný mejkap toto vyriešil a cítim sa krásna hneď ako vstanem." },
    { image: "/homepage/recenzia3.jpg", name: "David Kúdelka Key" },
    { name: "Zuzana Haasová", text: "Dobrý večer Viktorija, tento týždeň je to rok, kedy som začala robiť PMU. Vďaka vám. Všetky klientky prišli na základe toho, že videli moju prácu (váš tréning)." },
];

function ReviewCard({ review }: { review: Review }) {
    if ("image" in review) {
        return (
            <div className="relative self-stretch w-[350px] md:w-[450px] flex-shrink-0 rounded-xl overflow-hidden border border-white/10">
                <Image
                    src={review.image}
                    alt="Recenzia"
                    fill
                    className="object-cover"
                    style={{ objectPosition: "50% 40%" }}
                    sizes="(max-width: 768px) 350px, 450px"
                />
                {review.name && (
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/45 to-transparent px-8 pb-6 pt-20">
                        <p className="font-marcellus text-white tracking-wider text-sm">
                            {review.name.toUpperCase()}
                        </p>
                    </div>
                )}
            </div>
        );
    }

    if ("video" in review) {
        return (
            <div className="relative self-stretch w-[350px] md:w-[450px] flex-shrink-0 rounded-xl overflow-hidden border border-white/10">
                <video
                    src={review.video}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{ objectPosition: "50% 40%" }}
                />
                {review.name && (
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/45 to-transparent px-8 pb-6 pt-20">
                        <p className="font-marcellus text-white tracking-wider text-sm">
                            {review.name.toUpperCase()}
                        </p>
                    </div>
                )}
            </div>
        );
    }

    return (
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-xl w-[350px] md:w-[450px] flex-shrink-0 hover:bg-white/10 transition-colors">
            <p className="font-montserrat font-light text-[#1D0E22] italic mb-6 leading-relaxed">
                &ldquo;{review.text}&rdquo;
            </p>
            <div className="border-t border-white/10 pt-4">
                <p className="font-marcellus text-[#1D0E22] tracking-wider text-sm">
                    {review.name.toUpperCase()}
                </p>
            </div>
        </div>
    );
}

export default function Reviews() {
    return (
        <section id="referencie" className="py-24 overflow-hidden">
            <div className="w-[95vw] mx-auto mb-16 text-center">
                <h2 className="font-marcellus text-4xl mb-4 text-[#1D0E22] tracking-widest">
                    REFERENCIE
                </h2>
                <p className="font-montserrat text-[#1D0E22] text-lg uppercase tracking-wider">
                    Čo hovoria naše klientky
                </p>
            </div>

            <div className="relative w-full overflow-hidden mask-fade-sides">
                <div className="flex items-stretch">
                    <motion.div
                        className="flex items-stretch gap-8 px-4"
                        animate={{ x: "-50%" }}
                        transition={{
                            repeat: Infinity,
                            ease: "linear",
                            duration: 60,
                        }}
                        style={{ width: "max-content" }}
                    >
                        {[...REVIEWS, ...REVIEWS, ...REVIEWS].map((review, i) => (
                            <ReviewCard key={i} review={review} />
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
