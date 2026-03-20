import type { Metadata } from "next";
import Image from "next/image";
import ContactForm from "../_components/ContactForm";
import StickyCennikButton from "../_components/StickyCennikButton";

export const metadata: Metadata = {
    title: "Odstraňovanie PMU | Salón Viktória",
    description: "Bezpečné odstraňovanie starého alebo nepodareného permanentného make-upu pomocou laserov a removerov.",
};

export default function RemovalPage() {
    return (
        <div className="flex flex-col gap-8">
            <div className="grid grid-cols-3 gap-3 w-full">
                <div className="relative h-[200px] md:h-[500px] rounded-xl overflow-hidden border border-white/10 shadow-2xl">
                    <Image
                        src="/laser_herosection/PHOTO-2026-02-24-14-05-15.jpg"
                        alt="Laserové odstraňovanie 1"
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="relative h-[200px] md:h-[500px] rounded-xl overflow-hidden border border-white/10 shadow-2xl">
                    <video
                        src="/laser_herosection/VIDEO-2026-02-24-14-07-23.mp4"
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="relative h-[200px] md:h-[500px] rounded-xl overflow-hidden border border-white/10 shadow-2xl">
                    <Image
                        src="/laser_herosection/PHOTO-2026-02-24-14-43-33.jpg"
                        alt="Laserové odstraňovanie 3"
                        fill
                        className="object-cover object-left"
                    />
                </div>
            </div>

            <div className="font-montserrat font-light text-[#1D0E22] leading-snug text-lg">
                <div className="space-y-8">

                    {/* ═══ Laserové odstraňovanie ═══ */}
                    <div className="space-y-0">
                        <h3 className="font-marcellus text-3xl text-[#1D0E22] uppercase">Laserové odstraňovanie pigmentov</h3>
                        <p>
                            Je veľkým prínosom modernej estetiky, že dnes vieme bezpečne odstrániť nežiaduci permanentný make-up alebo pigment. V minulosti by človek musel dožívať s výsledkom, v ktorom sa necítil prirodzene ani komfortne.
                        </p>
                        <p>
                            Laserové odstraňovanie je odborný proces. Samotné ošetrenie trvá krátko, no celkový proces môže prebiehať niekoľko mesiacov až viac ako rok – v závislosti od individuálnych faktorov.
                        </p>
                        <blockquote className="border-l-4 border-gold/40 pl-6 italic text-[#1D0E22]/80">
                            <p>Ako hovoril môj učiteľ:</p>
                            <p className="mt-2">&ldquo;Laser je taký múdry, ako múdry je špecialista, ktorý s ním pracuje.&rdquo;</p>
                        </blockquote>
                        <p>
                            Pracujem s certifikovanou technológiou a rešpektujem prirodzené regeneračné procesy pokožky.
                        </p>
                        <div className="grid grid-cols-3 gap-4 pt-4">
                            {[
                                "/Laser/7296a7d2-15bf-4a5f-a409-732a9e4314f6.JPG",
                                "/Laser/a40fcf98-97c3-42f3-b1fb-58cbb5e775eb.JPG",
                                "/Laser/ac7f9777-4907-4556-9d4a-c382f46ebac7.JPG",
                                "/Laser/60280169-c35b-4f01-9962-d5e48a2ec8fd.JPG",
                                "/Laser/4aa1fd1b-d042-4e28-8c45-6068175daff2.JPG",
                                "/Laser/e55cf5f5-d505-4f93-8108-cdfdf0efe103.JPG",
                            ].map((src, idx) => (
                                <div
                                    key={idx}
                                    className="relative aspect-[10/11] rounded-lg overflow-hidden border border-black/10 shadow-sm"
                                >
                                    <Image
                                        src={src}
                                        alt={`Laserové odstraňovanie ${idx + 1}`}
                                        fill
                                        className={`object-cover ${idx === 1 ? "object-[center_30%]" : ""} ${idx === 5 ? "object-right" : ""}`}
                                    />
                                    <span className="absolute bottom-2 right-2 w-6 h-6 rounded-full bg-gold/80 flex items-center justify-center text-xs font-bold text-[#1D0E22]">{idx >= 3 ? idx - 2 : idx + 1}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* ═══ Individuálny plán ═══ */}
                    <div className="space-y-0">
                        <h4 className="font-marcellus text-2xl text-[#1D0E22] uppercase tracking-wider">Individuálny plán odstraňovania</h4>
                        <p>
                            Pred každým odstraňovaním prebieha individuálna konzultácia, kde posúdime typ pigmentu, jeho hĺbku a nastavíme realistický plán postupu.
                        </p>
                        <p>Počet sedení je vždy individuálny a ovplyvňuje ho viacero faktorov:</p>
                        <ul className="space-y-0">
                            <li className="flex gap-3"><span className="text-gold text-lg">✦</span><span>množstvo a hustota pigmentu</span></li>
                            <li className="flex gap-3"><span className="text-gold text-lg">✦</span><span>hĺbka uloženia pigmentu v koži</span></li>
                            <li className="flex gap-3"><span className="text-gold text-lg">✦</span><span>farba a kombinácia použitých odtieňov</span></li>
                            <li className="flex gap-3"><span className="text-gold text-lg">✦</span><span>chemické zloženie pigmentu</span></li>
                            <li className="flex gap-3"><span className="text-gold text-lg">✦</span><span>kvalita použitého laseru</span></li>
                            <li className="flex gap-3"><span className="text-gold text-lg">✦</span><span>skúsenosti a technika špecialistu</span></li>
                            <li className="flex gap-3"><span className="text-gold text-lg">✦</span><span>funkčnosť lymfatického systému klientky</span></li>
                            <li className="flex gap-3"><span className="text-gold text-lg">✦</span><span>životný štýl a životospráva</span></li>
                            <li className="flex gap-3"><span className="text-gold text-lg">✦</span><span>dôsledná domáca starostlivosť po zákroku</span></li>
                        </ul>
                        <p>Odstraňovanie pigmentu je spolupráca medzi technológiou, odborníkom a telom klientky.</p>
                    </div>

                    {/* ═══ Bezpečné odstraňovanie očných liniek ═══ */}
                    <div className="space-y-0">
                        <h4 className="font-marcellus text-2xl text-[#1D0E22] uppercase tracking-wider">Bezpečné odstraňovanie očných liniek</h4>
                        <p>
                            Pri odstraňovaní očných liniek chránim oko špeciálnymi kovovými ochrannými šošovkami (shields), ktoré sa jemne aplikujú priamo na oko. Ich zavedenie aj vybratie je rýchle a bezpečné.
                        </p>
                        <p>
                            Procedúru vykonávam precízne, kontrolovane a v neustálom kontakte s klientkou. Dbám na maximálnu ochranu oka aj okolitého tkaniva.
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
                            {[
                                "/Laser/9c80a15b-c3b4-43eb-b732-071d60562b92.JPG",
                                "/Laser/7c8d109d-168e-4e91-9b5f-315b46ee3f10.JPG",
                                "/Laser/87e7f275-b02c-4f2e-a54a-f5ccccc683b9.JPG",
                                "/Laser/060d4eb6-2fd9-4806-9aca-21e41fc9a7fa.JPG",
                            ].map((src, idx) => (
                                <div
                                    key={idx}
                                    className="relative aspect-[4/3] rounded-lg overflow-hidden border border-black/10 shadow-sm"
                                >
                                    <Image
                                        src={src}
                                        alt={`Odstraňovanie očných liniek ${idx + 1}`}
                                        fill
                                        className="object-cover"
                                    />
                                    <span className="absolute top-2 right-2 w-6 h-6 rounded-full bg-gold/80 flex items-center justify-center text-xs font-bold text-[#1D0E22]">{idx + 1}</span>
                                </div>
                            ))}
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
                            {[
                                "/Laser/ee519d01-3684-47cc-ae1f-5f716dd4097b.JPG",
                                "/Laser/a19992a0-5eb7-4f6b-8a05-e6bf5207a45a.JPG",
                                "/Laser/2b400a74-7fcd-4f32-8107-7c27660e2a52.JPG",
                                "/Laser/563dbb03-60d1-440b-8cf0-599f51f41587.JPG",
                            ].map((src, idx) => (
                                <div
                                    key={idx}
                                    className="relative aspect-[4/3] rounded-lg overflow-hidden border border-black/10 shadow-sm"
                                >
                                    <Image
                                        src={src}
                                        alt={`Odstraňovanie očných liniek ${idx + 1}`}
                                        fill
                                        className="object-cover"
                                    />
                                    <span className="absolute top-2 right-2 w-6 h-6 rounded-full bg-gold/80 flex items-center justify-center text-xs font-bold text-[#1D0E22]">{idx + 1}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* ═══ Komfort počas ošetrenia ═══ */}
                    <div className="space-y-0">
                        <h4 className="font-marcellus text-2xl text-[#1D0E22] uppercase tracking-wider">Komfort počas ošetrenia</h4>
                        <p>
                            Odstraňovanie pigmentu môže byť nepríjemné, no je rýchle. Pri citlivejších klientkách používam lokálne znecitlivenie pokožky, aby bol zákrok čo najkomfortnejší.
                        </p>
                        <p>
                            Ak uvažujete nad odstránením pigmentu, rada vám všetko osobne vysvetlím.
                        </p>
                    </div>

                    {/* ═══ Korekcia odtieňa ═══ */}
                    <div className="space-y-0">
                        <h4 className="font-marcellus text-2xl text-[#1D0E22] uppercase tracking-wider">Korekcia odtieňa pigmentu pomocou lasera</h4>
                        <p>
                            Laser nemusí slúžiť len na úplné odstránenie pigmentu. V určitých prípadoch vieme pomocou neho upraviť aj samotný odtieň.
                        </p>
                        <p>
                            Ak je klientka spokojná s tvarom obočia, no farebný výsledok pôsobí neprirodzene – napríklad:
                        </p>
                        <ul className="space-y-0">
                            <li className="flex gap-3"><span className="text-gold text-lg">✦</span><span>studený sivý až antracitový tón</span></li>
                            <li className="flex gap-3"><span className="text-gold text-lg">✦</span><span>bordovo-lososový nádych</span></li>
                            <li className="flex gap-3"><span className="text-gold text-lg">✦</span><span>fialový podtón</span></li>
                        </ul>
                        <p>
                            vieme pigment cielene zosvetliť alebo farebne posunúť do nositeľnejšieho spektra.
                        </p>
                        <p>
                            Studený sivý tón sa môže otepliť a prejsť do prirodzenejšieho teplého hnedého odtieňa. Lososové či ružovkasté podtóny sa môžu neutralizovať do jemnejšieho, popolavejšieho efektu.
                        </p>
                        <p>
                            Práca s farebnou korekciou pigmentu vyžaduje detailnú znalosť optiky svetla, správania sa jednotlivých farebných zložiek a skúsenosť s nastavením energie tak, aby sme dosiahli kontrolovanú a esteticky nositeľnú zmenu.
                        </p>
                        <div className="grid grid-cols-3 gap-4 pt-4">
                            {[
                                "/Laser/c343f7b3-3259-468d-bb01-3e47d7e0103d.JPG",
                                "/PHOTO-2026-02-25-10-53-49.jpg",
                            ].map((src, idx) => (
                                <div
                                    key={idx}
                                    className="relative aspect-[1/1] rounded-lg overflow-hidden border border-black/10 shadow-sm"
                                >
                                    <Image
                                        src={src}
                                        alt={`Korekcia odtieňa ${idx + 1}`}
                                        fill
                                        className="object-cover"
                                    />
                                    <span className="absolute top-2 right-2 px-2 py-0.5 rounded-full bg-gold/80 text-xs font-bold text-[#1D0E22] uppercase tracking-wider">Pred</span>
                                    <span className="absolute bottom-[42%] right-2 px-2 py-0.5 rounded-full bg-gold/80 text-xs font-bold text-[#1D0E22] uppercase tracking-wider">Po</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* ═══ Realita farebných zmien ═══ */}
                    <div className="space-y-0">
                        <h4 className="font-marcellus text-2xl text-[#1D0E22] uppercase tracking-wider">Realita farebných zmien</h4>
                        <p>
                            Je dôležité vedieť, že nie každé zloženie pigmentu umožňuje esteticky nositeľnú korekciu.
                        </p>
                        <p>
                            Pigmenty reagujú na laser podľa svojho chemického zloženia. V niektorých prípadoch môže dôjsť k tzv. farebnej inverzii – teda k dočasnej alebo menej predvídateľnej zmene odtieňa.
                        </p>
                        <p>
                            Preto je niekedy potrebné vykonať testovaciu skúšku na malej ploche, aby sme vedeli presne odhadnúť reakciu pigmentu a nastaviť bezpečný plán postupu.
                        </p>
                    </div>

                    {/* ═══ Odstraňovanie removerom ═══ */}
                    <div className="space-y-0">
                        <h4 className="font-marcellus text-2xl text-[#1D0E22] uppercase tracking-wider">Odstraňovanie pigmentu removerom</h4>
                        <p>
                            Remover je samostatná odborná metóda odstraňovania pigmentu, ktorú využívam v situáciách, keď laser nie je optimálnym riešením alebo keď potrebujeme výsledok precízne doladiť.
                        </p>
                        <p>Remover používam:</p>
                        <ul className="space-y-0">
                            <li className="flex gap-3"><span className="text-gold text-lg">✦</span><span>keď po laserovej kúre ostane jemný tieň pigmentu, ktorý už laser neidentifikuje</span></li>
                            <li className="flex gap-3"><span className="text-gold text-lg">✦</span><span>keď potrebujeme znížiť koncentráciu pigmentu bez úplného odstránenia</span></li>
                            <li className="flex gap-3"><span className="text-gold text-lg">✦</span><span>pri odstraňovaní pigmentu z pier</span></li>
                            <li className="flex gap-3"><span className="text-gold text-lg">✦</span><span>pri svetlých a problematických odtieňoch (biela, ružová, žltá, telové tóny), ktoré na laser reagujú nepredvídateľne</span></li>
                            <li className="flex gap-3"><span className="text-gold text-lg">✦</span><span>pri farebnom vyrovnávaní jaziev po predchádzajúcich zákrokoch</span></li>
                        </ul>
                        <p>
                            Tieto dve metódy sa nevylučujú – v niektorých prípadoch ich kombinujem, aby sme dosiahli čo najčistejší a esteticky nositeľný výsledok.
                        </p>
                        <p>
                            Používam kyselinové removery, ktoré sú pri správnej technike aplikácie stabilné, kontrolovateľné a bezpečné. Kľúčom je presná práca, správna hĺbka a rešpektovanie regeneračných procesov kože.
                        </p>
                    </div>

                    {/* ═══ Výsledky odstraňovania ═══ */}
                    <div className="space-y-4">
                        <h4 className="font-marcellus text-2xl text-[#1D0E22] uppercase tracking-wider">Výsledky odstraňovania</h4>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {[
                                "/Laser/27eb3d7a-e5ab-41d1-93d0-16fdb9774806.JPG",
                                "/Laser/d1fdd875-4c35-45b7-b3d9-489b09b2ead7.JPG",
                                "/Laser/3694fd5c-ca05-481e-b70d-dcde94eec19c.JPG",
                                "/Laser/ee8bbc99-87ea-4053-81e0-7a7fcba13520.JPG",
                                "/Laser/bc17dd0f-8eb5-4fb1-bcad-d893d20a1752.JPG",
                                "/Laser/eec944bd-49ad-4bed-b74e-13b0597377a1.JPG",
                                "/Laser/ee9ff70a-f272-4b87-91ce-9f050c642aeb.JPG",
                                "/Laser/3f776991-5fc5-4580-8ccc-6e2053feb256.JPG",
                            ].map((src, idx) => (
                                <div
                                    key={idx}
                                    className="relative aspect-[4/3] rounded-lg overflow-hidden border border-black/10 shadow-sm"
                                >
                                    <Image
                                        src={src}
                                        alt={`Výsledok odstraňovania ${idx + 1}`}
                                        fill
                                        className="object-cover"
                                    />
                                    <span className="absolute top-2 right-2 w-6 h-6 rounded-full bg-gold/80 flex items-center justify-center text-xs font-bold text-[#1D0E22]">{idx + 1}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* ═══ Galéria ═══ */}
                    <div>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            {[
                                "/Laser/db3f753e-7c4e-4379-a980-3d0b53df2c63.JPG",
                                "/Laser/b4b68f48-5048-4844-92ef-9a6abfafb123.JPG",
                                "/Laser/7c1d9bd9-6f56-4dc5-8416-567b35ee6a58.JPG",
                                "/Laser/9387406b-47cc-4d96-afb4-22b85c44a612.JPG",
                                "/Laser/9dfe8b65-18b8-45a3-8daa-84eb96f269cc.JPG",
                                "/Laser/3a77d4c4-8c83-4034-b03a-c7206d03c70b.JPG",
                            ].map((src, idx) => (
                                <div
                                    key={idx}
                                    className="relative aspect-[4/3] rounded-lg overflow-hidden border border-black/10 shadow-sm"
                                >
                                    <Image
                                        src={src}
                                        alt={`Laserové odstraňovanie ${idx + 1}`}
                                        fill
                                        className="object-cover"
                                    />
                                    <span className="absolute top-2 right-2 w-6 h-6 rounded-full bg-gold/80 flex items-center justify-center text-xs font-bold text-[#1D0E22]">{idx + 1}</span>
                                </div>
                            ))}
                        </div>
                    </div>


                    {/* ═══ Prečo u mňa ═══ */}
                    <div className="space-y-0">
                        <h3 className="font-marcellus text-3xl text-[#1D0E22] uppercase">Prečo odstraňovanie pigmentu u mňa?</h3>

                        <div className="space-y-8">
                            {/* 1 */}
                            <div className="space-y-0">
                                <h5 className="font-marcellus text-xl text-[#1D0E22] uppercase tracking-wider">1. Dlhoročná prax s pigmentom</h5>
                                <p>Nie som len laserové pracovisko. Roky sa venujem permanentnému make-upu, preto detailne rozumiem práci s pigmentom.</p>
                                <p>Viem:</p>
                                <ul className="space-y-0">
                                    <li className="flex gap-3"><span className="text-gold text-lg">✦</span><span>ako je pigment ukladaný</span></li>
                                    <li className="flex gap-3"><span className="text-gold text-lg">✦</span><span>v akej hĺbke sa nachádza</span></li>
                                    <li className="flex gap-3"><span className="text-gold text-lg">✦</span><span>z akých farebných zložiek sa skladá</span></li>
                                    <li className="flex gap-3"><span className="text-gold text-lg">✦</span><span>ako sa správa v pokožke po rokoch</span></li>
                                </ul>
                                <p>Táto skúsenosť mi umožňuje nastaviť presný a bezpečný postup odstraňovania.</p>
                            </div>

                            {/* 2 */}
                            <div className="space-y-0">
                                <h5 className="font-marcellus text-xl text-[#1D0E22] uppercase tracking-wider">2. Kombinácia laser + remover</h5>
                                <p>Nepracujem jednou univerzálnou metódou. Podľa konkrétnej situácie volím laser, remover alebo ich kombináciu.</p>
                                <p>To znamená:</p>
                                <ul className="space-y-0">
                                    <li className="flex gap-3"><span className="text-gold text-lg">✦</span><span>efektívnejší postup</span></li>
                                    <li className="flex gap-3"><span className="text-gold text-lg">✦</span><span>menšie riziko farebných nežiadaných reakcií</span></li>
                                    <li className="flex gap-3"><span className="text-gold text-lg">✦</span><span>čistejší a kontrolovanejší výsledok</span></li>
                                </ul>
                            </div>

                            {/* 3 */}
                            <div className="space-y-0">
                                <h5 className="font-marcellus text-xl text-[#1D0E22] uppercase tracking-wider">3. Bezpečnosť očných liniek</h5>
                                <p>Pri odstraňovaní očných liniek používam kovové ochranné šošovky (shields) a pracujem s dôrazom na maximálnu bezpečnosť.</p>
                                <p>Pri práci v oblasti očí rozhoduje presnosť, skúsenosť a istota techniky.</p>
                            </div>

                            {/* 4 */}
                            <div className="space-y-0">
                                <h5 className="font-marcellus text-xl text-[#1D0E22] uppercase tracking-wider">4. Estetické myslenie</h5>
                                <p>Cieľom nie je &ldquo;vymazať za každú cenu&rdquo;.</p>
                                <p>Cieľom je:</p>
                                <ul className="space-y-0">
                                    <li className="flex gap-3"><span className="text-gold text-lg">✦</span><span>dosiahnuť nositeľný výsledok</span></li>
                                    <li className="flex gap-3"><span className="text-gold text-lg">✦</span><span>pripraviť pokožku na nový, moderný permanentný make-up</span></li>
                                    <li className="flex gap-3"><span className="text-gold text-lg">✦</span><span>alebo citlivo upraviť odtieň bez narušenia tvaru</span></li>
                                </ul>
                                <p>Odstraňovanie je súčasťou estetického procesu, nie jeho koniec.</p>
                            </div>

                            {/* 5 */}
                            <div className="space-y-0">
                                <h5 className="font-marcellus text-xl text-[#1D0E22] uppercase tracking-wider">5. Individuálny plán, nie sériová práca</h5>
                                <p>Každý pigment najprv analyzujem a následne nastavujem individuálny postup.</p>
                                <p>Rešpektujem pokožku, biologické procesy aj budúci výsledok.</p>
                            </div>
                        </div>
                    </div>

                    {/* ═══ Cenník + Contact Form ═══ */}
                    <div id="removal-prices" className="pt-16 border-t-2 border-gold/20 mt-16">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            <div className="space-y-4 bg-white/30 p-8 rounded-2xl">
                                <h3 className="font-marcellus text-3xl text-[#1D0E22] text-center uppercase tracking-widest">Cenník – Odstraňovanie pigmentov</h3>

                                {/* Laser */}
                                <div className="space-y-2 font-montserrat text-[#1D0E22]">
                                    <h5 className="font-marcellus text-lg uppercase tracking-wider">Odstraňovanie laserom</h5>
                                    <p className="text-sm opacity-70 italic">cena za jedno sedenie</p>
                                    <div className="flex justify-between items-end gap-4">
                                        <span className="text-sm">Obočie – 45 min</span>
                                        <span className="font-bold whitespace-nowrap">120 €</span>
                                    </div>
                                    <div className="flex justify-between items-end gap-4">
                                        <span className="text-sm">Pery – 45 min</span>
                                        <span className="font-bold whitespace-nowrap">120 €</span>
                                    </div>
                                    <div className="flex justify-between items-end gap-4">
                                        <span className="text-sm">Očné linky horné – 60 min</span>
                                        <span className="font-bold whitespace-nowrap">150 €</span>
                                    </div>
                                    <div className="flex justify-between items-end gap-4">
                                        <span className="text-sm">Očné linky dolné – 45 min</span>
                                        <span className="font-bold whitespace-nowrap">120 €</span>
                                    </div>
                                    <div className="flex justify-between items-end gap-4">
                                        <span className="text-sm">Očné linky horné + dolné – 60 min</span>
                                        <span className="font-bold whitespace-nowrap">175 €</span>
                                    </div>
                                </div>

                                <div className="border-b border-gold/10 w-24 mx-auto" />

                                {/* Remover */}
                                <div className="space-y-2 font-montserrat text-[#1D0E22]">
                                    <h5 className="font-marcellus text-lg uppercase tracking-wider">Odstraňovanie removerom</h5>
                                    <p className="text-sm opacity-70 italic">cena za jedno sedenie</p>
                                    <div className="flex justify-between items-end gap-4">
                                        <span className="text-sm">Obočie – 60 min</span>
                                        <span className="font-bold whitespace-nowrap">125 €</span>
                                    </div>
                                    <div className="flex justify-between items-end gap-4">
                                        <span className="text-sm">Pery – 60 min</span>
                                        <span className="font-bold whitespace-nowrap">125 €</span>
                                    </div>
                                    <div className="flex justify-between items-end gap-4">
                                        <span className="text-sm">Očné linky horné – 60 min</span>
                                        <span className="font-bold whitespace-nowrap">125 €</span>
                                    </div>
                                    <div className="flex justify-between items-end gap-4">
                                        <span className="text-sm">Očné linky dolné – 60 min</span>
                                        <span className="font-bold whitespace-nowrap">125 €</span>
                                    </div>
                                    <div className="flex justify-between items-end gap-4">
                                        <span className="text-sm">Očné linky horné + dolné</span>
                                        <span className="font-bold whitespace-nowrap">200 €</span>
                                    </div>
                                </div>

                                <div className="border-b border-gold/10 w-24 mx-auto" />

                                {/* Program 3 sedení */}
                                <div className="space-y-2 font-montserrat text-[#1D0E22]">
                                    <h5 className="font-marcellus text-lg uppercase tracking-wider">Program 3 sedení</h5>
                                    <p className="text-sm">
                                        Pri úhrade 3 procedúr vopred získavate <strong>10 % zľavu</strong> z celkovej ceny.
                                    </p>
                                    <p className="text-sm opacity-70 italic">
                                        Odporúčam ho najmä pri komplexnejšom odstraňovaní, kde je predpoklad viacerých sedení.
                                    </p>
                                </div>

                                <div className="border-b border-gold/10 w-24 mx-auto" />

                                {/* Doplnková podpora */}
                                <div className="space-y-2 font-montserrat text-[#1D0E22]">
                                    <h5 className="font-marcellus text-lg uppercase tracking-wider">Doplnková podpora regenerácie</h5>
                                    <div className="flex justify-between items-end gap-4">
                                        <span className="text-sm">Bio čaj na podporu lymfatického systému</span>
                                        <span className="font-bold whitespace-nowrap">10 €</span>
                                    </div>
                                </div>
                            </div>
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </div>

            <StickyCennikButton />
        </div>
    );
}
