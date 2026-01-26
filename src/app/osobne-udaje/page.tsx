"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PrivacyPage() {
    return (
        <main className="min-h-screen bg-main-bg text-white">
            <Header />

            <div className="pt-40 pb-24 w-[95vw] md:w-[60vw] mx-auto min-h-screen font-montserrat font-light text-white/90 leading-relaxed">

                <h1 className="font-saol italic text-5xl md:text-7xl text-center mb-16 tracking-wide drop-shadow-2xl">
                    Ochrana osobných údajov
                </h1>

                <div className="space-y-12 text-sm md:text-base">

                    {/* Header Info */}
                    <div className="bg-white/5 p-8 rounded-xl border border-white/10 space-y-2">
                        <p className="font-bold text-gold text-lg mb-4">AEB Digital s. r. o.</p>
                        <p>IČO: 57 307 709</p>
                        <p>Konateľ: Peter Samuel Bobák</p>
                        <p>E-mail: <a href="mailto:peter@aebdig.com" className="text-gold hover:underline">peter@aebdig.com</a></p>
                        <p>Tel.: <a href="tel:+421908507131" className="text-gold hover:underline">+421 908 507 131</a></p>
                    </div>

                    <p>
                        Tieto Zásady ochrany osobných údajov (ďalej len „Zásady") popisujú, aké osobné údaje spracúvame v súvislosti s používaním našej webovej stránky a kontaktných formulárov.
                    </p>

                    <section className="space-y-4">
                        <h2 className="font-marcellus text-2xl text-gold uppercase tracking-widest border-b border-white/20 pb-2">I. Kontaktný formulár</h2>
                        <p>Na stránke www.aebdigital.sk prevádzkujeme kontaktný formulár na dvoch samostatných stránkach, ktorého účelom je umožniť vám:</p>
                        <ul className="list-disc pl-5 space-y-1 marker:text-gold">
                            <li>Položiť otázku k našim produktom a službám</li>
                            <li>Požiadať o cenovú ponuku</li>
                        </ul>

                        <h3 className="font-bold text-white mt-4">Rozsah spracúvaných údajov:</h3>
                        <ul className="list-disc pl-5 space-y-1 marker:text-gold">
                            <li>Meno a priezvisko</li>
                            <li>E-mailová adresa</li>
                            <li>Telefónne číslo</li>
                        </ul>

                        <h3 className="font-bold text-white mt-4">Účel spracovania:</h3>
                        <p>Spracúvame uvedené údaje, aby sme vás mohli kontaktovať a reagovať na váš dopyt.</p>

                        <h3 className="font-bold text-white mt-4">Právny základ:</h3>
                        <p>Článok 6 ods. 1 písm. b) GDPR – plnenie opatrení pred uzavretím zmluvy na žiadosť dotknutej osoby.</p>

                        <h3 className="font-bold text-white mt-4">Doba uchovávania:</h3>
                        <p>Osobné údaje budeme uchovávať maximálne 10 rokov od odozvy na váš dopyt, pokiaľ nevznikne ďalší zmluvný vzťah.</p>
                    </section>

                    <section className="space-y-6">
                        <h2 className="font-marcellus text-2xl text-gold uppercase tracking-widest border-b border-white/20 pb-2">II. Súbory cookies</h2>

                        <div className="space-y-4">
                            <h3 className="font-bold text-white text-lg">Čo je to Cookie a načo ich používame?</h3>
                            <p>Cookies je malý textový súbor, ktorý sa odosiela do zariadenia z internetových stránok pri prvej návšteve. Súbory cookie sa používajú na analýzu záujmov používateľa na našej webovej stránke a pomáhajú naše webové stránky zjednodušiť. Cookies používame na účely skvalitnenia služieb návštevníkom webovej stránky. Pri návšteve našich stránok máte možnosť vyjadriť svoj súhlas s použitím tejto technológie. Vďaka nej môžeme zaznamenávať návštevy a aktivity na stránke, čo nám pomáha lepšie pochopiť a zorientovať sa v tom, o aké informácie sa najviac zaujímate.</p>
                            <p>Na vytváranie štatistík, za účelom pochopenia potrieb návštevníkov, nám pomáha služba Google Analytics.</p>
                        </div>

                        <div className="space-y-4">
                            <h3 className="font-bold text-white text-lg">Aké cookies používame?</h3>
                            <p>Na meranie a vytváranie štatistík používame nástroj Google Analytics, ktorý nám pomáha pochopiť, ako sa naši návštevníci pohybujú na stránke a využívajú naše aplikácie. Vďaka nazbieraným informáciám sa snažíme optimalizovať stránku tak, aby sme sa prispôsobili Vašim potrebám a poskytli Vám jednoduchý a rýchly prístup k informáciám, ktoré hľadáte.</p>
                            <p>Tieto cookies nezbierajú informácie, ktorými možno individuálne identifikovať návštevníkov. Zbierame iba obecné informácie o nastavení vášho počítača, vášho pripojenia na internet, ako je napr. váš operačný systém a platforma, vzorce prechádzania stránok a interakcie s našimi stránkami.</p>
                            <p>Môžete sa však rozhodnúť, že si zmeníte nastavenia vášho prehliadača.</p>
                        </div>

                        <div className="space-y-4">
                            <h3 className="font-bold text-white text-lg">Nastavenie alebo odstránenie Cookies</h3>
                            <p>Súbory Cookies môžete kedykoľvek vymazať zo svojho prehliadača alebo ich ukladanie úplne zakázať cez príslušné nastavenie prehliadača. Prosíme, zoberte však na vedomie, že funkčnosť stránky môže byť, v prípade deaktivácie cookies, obmedzená.</p>
                        </div>

                        <div className="space-y-4">
                            <h3 className="font-bold text-white text-lg">Ako zmeniť svoje nastavenie Cookies?</h3>
                            <p>Cookies používame iba vtedy, ak s tým súhlasíte. Váš súhlas a jeho rozsah nám udelíte pri prvej návšteve našich webových stránok a v závislosti od nastavení Vášho internetového prehliadača vždy po uplynutí nastavenej doby alebo po jeho každom ďalšom spustení. Súbory cookies si okrem toho môžete aj po udelení súhlasu vymazať z Vášho zariadenia buď prostredníctvom Vášho internetového prehliadača alebo priamo z príslušného adresára vo Vašom zariadení.</p>
                            <p>Nastavenie vášho prehliadača je v zmysle § 55 ods. 5 zákona o elektronických komunikáciách považované za váš súhlas s používaním cookies na našich stránkach. Súhlas s použitím súborov cookies nie je v zmysle daného ustanovenia potrebný na „technické uloženie údajov alebo prístup k nim, ktorých jediným účelom je prenos alebo uľahčenie prenosu správy prostredníctvom siete“. V skratke to znamená, že nepotrebujeme získavať váš cookies súhlas pre tzv. technické cookies, ktoré umožňujú technický chod a fungovanie našich webových stránok.</p>
                            <p>Správu súborov cookies a príslušné povolenia si môžete nastaviť v každom internetovom prehliadači. Návod na úpravu nastavení pravidiel pre cookies a postupy na ich vymazanie v najčastejšie používaných internetových prehliadačov nájdete na nasledujúcich stránkach:</p>
                        </div>

                        <div className="space-y-2">
                            <h4 className="font-bold text-white/80">Zoznam odkazov na správu cookies v prehliadačoch:</h4>
                            <ul className="list-disc pl-5 space-y-1 marker:text-gold text-sm text-white/70">
                                <li>
                                    <span className="font-bold text-white">Internet Explorer</span>:
                                    <a href="http://support.microsoft.com/kb/278835" target="_blank" className="text-gold hover:underline ml-1">Desktop verzia</a>
                                    <span className="mx-1">|</span>
                                    <a href="http://comparitech.net/cookies" target="_blank" className="text-gold hover:underline">Mobilná verzia</a>
                                </li>
                                <li>
                                    <span className="font-bold text-white">Chrome</span>:
                                    <a href="http://support.google.com/chrome/bin/answer.py?hl=en-GB&answer=95647" target="_blank" className="text-gold hover:underline ml-1">Návod</a>
                                </li>
                                <li>
                                    <span className="font-bold text-white">Safari</span>:
                                    <a href="http://docs.info.apple.com/article.html?path=Safari/5.0/en/9277.html" target="_blank" className="text-gold hover:underline ml-1">Desktop verzia</a>
                                    <span className="mx-1">|</span>
                                    <a href="http://support.apple.com/kb/HT1677" target="_blank" className="text-gold hover:underline">Mobilná verzia</a>
                                </li>
                                <li>
                                    <span className="font-bold text-white">Firefox</span>:
                                    <a href="http://support.mozilla.org/en-US/kb/Enabling%20and%20disabling%20cookies" target="_blank" className="text-gold hover:underline ml-1">Návod</a>
                                </li>
                            </ul>
                            <p className="pt-2 text-sm">
                                Z používania vaších cookies sa môžete odhlásiť aj priamo z cookies Google Analytics tu: <a href="http://tools.google.com/dlpage/gaoptout" target="_blank" className="text-gold hover:underline">http://tools.google.com/dlpage/gaoptout</a>.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h3 className="font-bold text-white text-lg">Zoznam používaných cookies</h3>
                            <p><strong className="text-white">Google Analytics</strong> – Zhromažďuje súhrn dát o správaní používateľov na webe za účelom skvalitnenia a zlepšenia použiteľnosti webových stránok. Cookies slúžia pre identifikáciu daného užívateľa pomocou náhodného reťazca čísiel, ktorý sa pre daného užívateľa vytvorí pri prvej návšteve.</p>
                            <p><a href="https://developers.google.com/analytics/devguides/collection/analyticsjs/cookie-usage" target="_blank" className="text-gold hover:underline break-all">https://developers.google.com/analytics/devguides/collection/analyticsjs/cookie-usage</a></p>
                        </div>

                    </section>

                    <section className="space-y-4">
                        <h2 className="font-marcellus text-2xl text-gold uppercase tracking-widest border-b border-white/20 pb-2">III. Práva dotknutej osoby</h2>
                        <p>Podľa nariadenia GDPR máte nasledujúce práva:</p>
                        <ul className="list-disc pl-5 space-y-2 marker:text-gold">
                            <li>Prístup k osobným údajom, ktoré spracúvame</li>
                            <li>Oprava nepresných alebo neúplných údajov</li>
                            <li>Vymazanie („právo zabudnutia"), ak na spracovanie už nie je právny základ</li>
                            <li>Obmedzenie spracovania</li>
                            <li>Prenosnosť údajov</li>
                            <li>Odvolanie súhlasu – stane sa účinným dňom odvolania</li>
                            <li>Podanie sťažnosti u Úradu na ochranu osobných údajov SR (Hraničná 12, 820 07 Bratislava, www.dataprotection.gov.sk)</li>
                        </ul>

                        <p className="mt-8 pt-8 border-t border-white/10">
                            V prípade otázok alebo uplatnenia Vašich práv nás môžete kontaktovať na <a href="mailto:reachout@aebdig.com" className="text-gold hover:underline">reachout@aebdig.com</a> alebo telefónnom čísle <a href="tel:+421917422245" className="text-gold hover:underline">+421 917 422 245</a>.
                        </p>
                        <p className="text-white/60 text-sm">
                            Tieto Zásady nadobúdajú účinnosť dňom 25. 4. 2025.
                        </p>
                    </section>
                </div>

            </div>

            <Footer />
        </main>
    );
}
