"use client";

import { motion } from "framer-motion";

const REVIEWS = [
    { name: "Katarina Kvackajova", text: "Amazing facial treatment that makes me always look and feel at least 5 years younger:) Professional attitude, top level cosmetics procedures and products. Absolutely recommending." },
    { name: "Za Si", text: "Cosy little place with talented owner who can do miracles. Thanks for the perfect eye brows 😉 and years of service and friendship. Money and time well spent 👌🏻" },
    { name: "Dorota Paulik", text: "Viktorija je neuveriteľný profík a úžasná žena k tomu❤️ Každá návšteva je zážitok, po ktorom sa cítim ako znovuzrodená. Ďakujem🤩" },
    { name: "Kamila Danisova", text: "V salónu se vždy setkám s velkou profesionalitou. Po vyzkoušení několika salónů v Praze jsem se vrátila k Viktóriji, kde dostávám dlouhodobý vztah a péči." },
    { name: "Alexandra Hozakova", text: "Viktorija mi robila permanentný make up obočia a odviedla výbornú prácu. Precízna a profesionálna, určite odporúčam😊" },
    { name: "Viera Illiťová", text: "Ďakujem Viktoriji za veľmi pekný permanentný make-up pier." },
    { name: "Romana Puškárová", text: "Odporúčam Salón Viktórija, nasetľovanie náušníc bolo rýchle, bezbolestné. Oceňujem profesionálny a milý prístup. 🙂" },
    { name: "Viktoria – Jan Gerci", text: "Salón krásy Viktorija je úžasný, moderný. Majiteľka pracuje s kvalitnými materiálmi. Chodím k nej už osem rokov, moja pleť je krásna, mladá.. Viktorija je najlepšia expertka." },
    { name: "Dana Hamárová", text: "Viktorija sa stará o moju pleť už niekoľko rokov. Hneď po prvých návštevách som videla zmenu. Doporučujem hlavne masáže." },
    { name: "Andrea Romanová", text: "Vyše pol roka som sa snažila inde odstrániť staré tetovanie, minula som čas a peniaze. Až u Viktorije začala moja 'nechcená ozdoba' konečne miznúť." },
    { name: "Martina Domes", text: "Táto kozmetika mi sedí najlepšie. Viktorija ma vždy informuje o novinkách a doporučí to najlepšie pre mňa." },
    { name: "Katka Gajdošová", text: "Unavovalo ma každé ráno si kresliť obočie. Permanentný mejkap toto vyriešil a cítim sa krásna hneď ako vstanem." },
    { name: "Zuzana Haasová", text: "Dobrý večer Viktorija, tento týždeň je to rok, kedy som začala robiť PMU. Vďaka vám. Všetky klientky prišli na základe toho, že videli moju prácu (váš tréning)." },
];

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
                {/* CSS Mask for fading edges if possible, otherwise just overflow hidden */}
                <div className="flex">
                    <motion.div
                        className="flex gap-8 px-4"
                        animate={{ x: "-50%" }}
                        transition={{
                            repeat: Infinity,
                            ease: "linear",
                            duration: 60, // Slow scroll
                        }}
                        style={{ width: "max-content" }}
                    >
                        {[...REVIEWS, ...REVIEWS, ...REVIEWS].map((review, i) => (
                            <div
                                key={i}
                                className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-xl w-[350px] md:w-[450px] flex-shrink-0 hover:bg-white/10 transition-colors"
                            >
                                <p className="font-montserrat font-light text-[#1D0E22] italic mb-6 leading-relaxed">
                                    "{review.text}"
                                </p>
                                <div className="border-t border-white/10 pt-4">
                                    <p className="font-marcellus text-[#1D0E22] tracking-wider text-sm">
                                        {review.name.toUpperCase()}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
