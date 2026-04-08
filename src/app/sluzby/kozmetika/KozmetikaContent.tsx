"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const HERO_VIDEO = "/New-things/newvid.mp4.mp4";
const HERO_IMAGE = "/sluzby/kozmetika.webp";

interface Procedure {
    id: string;
    title: string;
    image: string;
    imagePosition?: string;
    badge?: string;
    body: React.ReactNode;
}

const PROCEDURES: Procedure[] = [
    {
        id: "mezoboost",
        title: "Mezoboost a nano kolagénové nite",
        image: "/sluzby/kozmetika.webp",
        badge: "35+",
        body: (
            <div className="space-y-4">
                <p>Mezočipová transdermálna penetrácia v kombinácii s elektroporáciou umožňuje zapracovanie aktívnych látok koncentrátov Expert Lab do hlbších vrstiev pokožky neinvazívnym spôsobom.</p>
                <div>
                    <p className="font-medium mb-2">Expert Lab kokteily:</p>
                    <ul className="space-y-2">
                        <li className="flex gap-2"><span className="text-gold">✦</span><span><strong>Liquid Collagen Complex</strong> – tvorené tekutými kolagénovými vláknami, komplexom biomimetických peptidov a DMAE. Spevňujúci a vypínací účinok.</span></li>
                        <li className="flex gap-2"><span className="text-gold">✦</span><span><strong>EGF Complex</strong> – nanopolyméry HLG a epidermálne rastové faktory podporujú tvorbu kolagénu a elastínu.</span></li>
                        <li className="flex gap-2"><span className="text-gold">✦</span><span><strong>HP Retinol</strong> – výrazná redukcia vrások a jemných liniek.</span></li>
                        <li className="flex gap-2"><span className="text-gold">✦</span><span><strong>Exozómy</strong> – prenášajú proteíny, lipidy a RNA s molekulárnou presnosťou. Regenerácia a anti-aging efekt.</span></li>
                        <li className="flex gap-2"><span className="text-gold">✦</span><span><strong>Glow Complex</strong> – revitalizačná pleťová starostlivosť.</span></li>
                    </ul>
                </div>
                <div className="pt-2 space-y-1 text-sm border-t border-black/10">
                    <p><span className="font-medium">Značka:</span> Germaine de Capuccini</p>
                    <p><span className="font-medium">Trvanie:</span> 1 h 30 min · <strong>198 €</strong></p>
                    <p><span className="font-medium">S rádiofrekvenčnou maskou:</span> 2 h · <strong>250 €</strong></p>
                </div>
            </div>
        ),
    },
    {
        id: "exozomy",
        title: "Exozómy",
        image: "/sluzby/kozmetika.webp",
        badge: "45+",
        body: (
            <div className="space-y-4">
                <p>Exozómy – mikroskopické nanováčky prirodzene produkované rastlinnými bunkami. Dermatokozmetická starostlivosť so zameraním na regeneráciu a anti-aging efekt.</p>
                <p>Je možné vypracovať formou Mezoboost alebo manuálne.</p>
                <div>
                    <p className="font-medium mb-2">Na skincare routine sú k dispozícii:</p>
                    <ul className="space-y-2">
                        <li className="flex gap-2"><span className="text-gold">✦</span><span>Ampuly hydro-regeneračnej starostlivosti s Tecxosome a kyselinou hyalurónovou</span></li>
                        <li className="flex gap-2"><span className="text-gold">✦</span><span>Pokročilý hydro-regeneratívny krém s ultra vysokou koncentráciou biomimetických exozómov</span></li>
                    </ul>
                </div>
                <div className="pt-2 space-y-1 text-sm border-t border-black/10">
                    <p><span className="font-medium">Značka:</span> Germaine de Capuccini, MCCM</p>
                    <p><span className="font-medium">Manuálny rituál:</span> 1 h 45 min · <strong>180 €</strong></p>
                </div>
            </div>
        ),
    },
    {
        id: "carbonovy-peeling",
        title: "Carbonový peeling",
        image: "/sluzby/kozmetika.webp",
        badge: "22+",
        body: (
            <div className="space-y-4">
                <p>Carbonový peeling sa vykonáva Q-switched Nd:YAG laserom. Odporúča sa pri mastnej, zmiešanej a aknóznej pleti, pri jazvičkách po akné a pri pigmentových škvrnách.</p>
                <div className="pt-2 space-y-1 text-sm border-t border-black/10">
                    <p><span className="font-medium">Trvanie:</span> 1 h · <strong>148 €</strong></p>
                </div>
            </div>
        ),
    },
    {
        id: "dermapeels",
        title: "Expert Dermapeels – chemický peeling",
        image: "/sluzby/kozmetika.webp",
        badge: "30+",
        body: (
            <div className="space-y-4">
                <p>Inteligentný chemický peeling tvorený kombináciou kyselín, určený na obnovu všetkých vrstiev pleti.</p>
                <p>Pôsobí dvojitým účinkom – odstraňuje povrchovú vrstvu pokožky a zároveň podporuje jej obnovu, regeneráciu a zlepšenie reliéfu stimuláciou bunkovej aktivity.</p>
                <p>Viditeľne sa zlepšuje pevnosť, pružnosť a hustota pleti.</p>
                <div className="pt-2 space-y-1 text-sm border-t border-black/10">
                    <p><span className="font-medium">Značka:</span> Casmara · Trvanie: 1 h 30 min</p>
                    <p>Tvár – <strong>118 €</strong></p>
                    <p>Tvár a krk – <strong>135 €</strong></p>
                    <p>Tvár, krk a dekolt – <strong>145 €</strong></p>
                </div>
            </div>
        ),
    },
    {
        id: "timeless",
        title: "Timeless Prodigi",
        image: "/sluzby/kozmetika.webp",
        badge: "40+",
        body: (
            <div className="space-y-4">
                <p>Luxusný, delikátny rituál.</p>
                <p>Obsahuje 5 rastových faktorov a 6 000 000 kmeňových buniek z damascénskej ruže. Doplnený o extrakty z francúzskeho šampanského, hľuzovky, 3D kolagén (92 %) a multivitamínový koktail.</p>
                <p>Omladzujúci účinok vzhľadu a kvality pleti.</p>
                <div className="pt-2 space-y-1 text-sm border-t border-black/10">
                    <p><span className="font-medium">Značka:</span> Skeyndor</p>
                    <p><span className="font-medium">Trvanie:</span> 1 h 45 min · <strong>180 €</strong></p>
                </div>
            </div>
        ),
    },
    {
        id: "cistenie",
        title: "Čistenie pleti, Pureexpert",
        image: "/New-things/PHOTO-2026-03-23-11-01-44.jpg",
        badge: "14+",
        body: (
            <div className="space-y-4">
                <p>Hĺbkové čistenie, detoxikácia, okysličenie, upokojenie.</p>
                <div className="pt-2 space-y-1 text-sm border-t border-black/10">
                    <p><span className="font-medium">Značka:</span> Germaine de Capuccini</p>
                    <p>1 h – <strong>89 €</strong></p>
                    <p>1 h 30 min – <strong>118 €</strong></p>
                    <p>2 h – <strong>135 €</strong></p>
                </div>
            </div>
        ),
    },
    {
        id: "corrective",
        title: "Corrective – Lifting bez injekcií",
        image: "/sluzby/kozmetika.webp",
        badge: "40+",
        body: (
            <div className="space-y-4">
                <p>Ošetrenie s obsahom peptidov, ktoré uvoľňujú svalové napätie a pôsobia na mimické vrásky.</p>
                <div>
                    <p className="font-medium mb-2">Mechanizmus:</p>
                    <ul className="space-y-1">
                        <li className="flex gap-2"><span className="text-gold">✦</span><span>Presynaptický a postsynaptický účinok</span></li>
                        <li className="flex gap-2"><span className="text-gold">✦</span><span>Znižovanie mikrotenzie svalov</span></li>
                    </ul>
                </div>
                <div>
                    <p className="font-medium mb-2">Výsledok:</p>
                    <ul className="space-y-1">
                        <li className="flex gap-2"><span className="text-gold">✦</span><span>Jemnejšia mimika</span></li>
                        <li className="flex gap-2"><span className="text-gold">✦</span><span>Liftingový efekt</span></li>
                        <li className="flex gap-2"><span className="text-gold">✦</span><span>Vyhladenie vrások</span></li>
                    </ul>
                </div>
                <div className="pt-2 space-y-1 text-sm border-t border-black/10">
                    <p><span className="font-medium">Značka:</span> Skeyndor</p>
                    <p><span className="font-medium">Trvanie:</span> 1 h 45 min · <strong>168 €</strong></p>
                </div>
            </div>
        ),
    },
    {
        id: "skin-sensation",
        title: "Skin Sensation (Luxury)",
        image: "/New-things/PHOTO-2026-03-23-12-02-59.jpg",
        badge: "40+",
        body: (
            <div className="space-y-4">
                <p>Aplikácia vitamínov, minerálov a stopových prvkov, ktoré pleť potrebuje na opätovné získanie rovnováhy, ktorú v priebehu času stráca. Ošetrenie porovnateľné s vitamínovou mezoterapiou.</p>
                <div>
                    <p className="font-medium mb-2">Obsahuje:</p>
                    <ul className="space-y-1">
                        <li className="flex gap-2"><span className="text-gold">✦</span><span>Vitamíny, minerály a stopové prvky</span></li>
                        <li className="flex gap-2"><span className="text-gold">✦</span><span>24-karátové zlato</span></li>
                    </ul>
                </div>
                <div>
                    <p className="font-medium mb-2">Výsledok:</p>
                    <ul className="space-y-1">
                        <li className="flex gap-2"><span className="text-gold">✦</span><span>Hlboká výživa</span></li>
                        <li className="flex gap-2"><span className="text-gold">✦</span><span>Revitalizácia</span></li>
                        <li className="flex gap-2"><span className="text-gold">✦</span><span>Obnovenie rovnováhy pleti</span></li>
                    </ul>
                </div>
                <div className="pt-2 space-y-1 text-sm border-t border-black/10">
                    <p><span className="font-medium">Značka:</span> Casmara</p>
                    <p><span className="font-medium">Trvanie:</span> 1 h 45 min · <strong>145 €</strong></p>
                </div>
            </div>
        ),
    },
    {
        id: "hyaluronic",
        title: "Power Hyaluronic",
        image: "/New-things/PHOTO-2026-03-23-12-22-46.jpg",
        badge: "18+",
        body: (
            <div className="space-y-4">
                <p className="font-medium">100 % ultrahydratačné ošetrenie</p>
                <p>Vyrovnáva prirodzenú hydrodynamiku pleti a pomáha dosiahnuť optimálnu úroveň hydratácie. Hydratovaná pleť funguje správne.</p>
                <div className="pt-2 space-y-1 text-sm border-t border-black/10">
                    <p><span className="font-medium">Značka:</span> Skeyndor</p>
                    <p>Tvár – 60 min · <strong>98 €</strong></p>
                    <p>Tvár a krk – 1 h 30 min · <strong>118 €</strong></p>
                    <p>Tvár, krk a dekolt – 1 h 45 min · <strong>135 €</strong></p>
                </div>
            </div>
        ),
    },
    {
        id: "nevesta",
        title: "Pre nevestu – Hydra Lifting",
        image: "/New-things/PHOTO-2026-03-23-12-54-06.jpg",
        badge: "22+",
        body: (
            <div className="space-y-4">
                <p>Rituál Ocean Miracle pleť hĺbkovo hydratuje a spevňuje. Obsahuje 100 % prírodné látky morského pôvodu, ktoré pleti prirodzene vyhovujú, spevňujú ju a zvýrazňujú kontúry tváre.</p>
                <p>Rituál pripraví pleť na výnimočný deň – hydratovanú, pevnú a žiarivú.</p>
                <p>Vhodné pre všetky typy pleti, vrátane citlivej. Hlavnou zložkou tejto ekologickej rady je koncentrovaná morská voda a výťažky z morských rias. Ošetrenie je porovnateľné s efektom plazmy bohatej na krvné doštičky (PRP).</p>
                <div className="pt-2 space-y-1 text-sm border-t border-black/10">
                    <p><span className="font-medium">Značka:</span> Casmara</p>
                    <p><span className="font-medium">Trvanie:</span> 1 h 45 min · <strong>145 €</strong></p>
                </div>
            </div>
        ),
    },
    {
        id: "pre-probiotiká",
        title: "Pre & Probiotiká – Age Defense",
        image: "/sluzby/kozmetika.webp",
        badge: "30+",
        body: (
            <div className="space-y-4">
                <p>Kombinácia prebiotík a probiotík posilňuje kožnú bariéru a stimuluje tvorbu nového kolagénu. Navracia pleti mladistvosť a hustotu, zlepšuje súdržnosť keratinocytov a podporuje správne fungovanie, rast a regeneráciu kožných buniek.</p>
                <p>Posilňuje obranyschopnosť pleti v boji proti patogénom spôsobujúcim predčasné starnutie. Zároveň čistí, vyhladzuje kožný mikroreliéf a rozjasňuje pokožku.</p>
                <p>Globálny anti-aging efekt – zlepšenie kvality pleti v celom rozsahu.</p>
                <p>Rituál pre ženy aj mužov.</p>
                <div className="pt-2 space-y-1 text-sm border-t border-black/10">
                    <p><span className="font-medium">Značka:</span> Casmara</p>
                    <p><span className="font-medium">Trvanie:</span> 1 h 45 min · <strong>145 €</strong></p>
                </div>
            </div>
        ),
    },
    {
        id: "q10-rescue",
        title: "Q10 Rescue",
        image: "/sluzby/kozmetika.webp",
        badge: "45+",
        body: (
            <div className="space-y-4">
                <p className="font-medium">SMART Q10 GPS technológia</p>
                <p>Bioenergetický systém koenzýmu Q10 v mikrokapsulách v spojení s technológiou SMART GPS s dvojitou geolokáciou zvyšuje produkciu bunkovej energie, zmierňuje oxidačný stres a aktivuje bunky.</p>
                <p>Koenzým Q10 sa uvoľňuje priamo v mitochondriách, čím dosahuje maximálnu účinnosť v kľúčovom mieste bunky. Je zásadný pre bunkové dýchanie a tvorbu energie (ATP).</p>
                <p>Autentické znovunastavenie pleti na báze prírodných aktívnych látok. Navracia zrelej pleti energiu, rovnováhu a podporuje bunkový metabolizmus, čím zvýrazňuje jej prirodzenú krásu.</p>
                <p>Vhodné ako šokové ošetrenie pre pleť so stratou výživy – suchú, ochabnutú a bez vitality.</p>
                <p><span className="font-medium">Výsledok:</span> intenzívne vyživená a šťavnatá pleť s pocitom komfortu. Vyhladenie vrások, pleť je viditeľne pevnejšia, pružnejšia a pôsobí mladšie.</p>
                <div className="pt-2 space-y-1 text-sm border-t border-black/10">
                    <p><span className="font-medium">Značka:</span> Casmara</p>
                    <p><span className="font-medium">Trvanie:</span> 1 h 45 min · <strong>145 €</strong></p>
                </div>
            </div>
        ),
    },
    {
        id: "lightening",
        title: "Lightening Advanced Nácar",
        image: "/sluzby/kozmetika.webp",
        badge: "40+",
        body: (
            <div className="space-y-4">
                <p>Zosvetľujúce anti-aging ošetrenie proti pigmentovým škvrnám.</p>
                <ul className="space-y-1">
                    <li className="flex gap-2"><span className="text-gold">✦</span><span>97 % rozjasnenie pleti</span></li>
                    <li className="flex gap-2"><span className="text-gold">✦</span><span>95 % zosvetlenie škvŕn</span></li>
                    <li className="flex gap-2"><span className="text-gold">✦</span><span>85 % redukcia vrások a výrazových liniek</span></li>
                </ul>
                <p>Zahaľuje pleť do závoja svetla a mladosti.</p>
                <div className="pt-2 space-y-1 text-sm border-t border-black/10">
                    <p><span className="font-medium">Značka:</span> Casmara</p>
                    <p><span className="font-medium">Trvanie:</span> 1 h 45 min · <strong>145 €</strong></p>
                </div>
            </div>
        ),
    },
    {
        id: "golden-age",
        title: "Golden Age",
        image: "/sluzby/kozmetika.webp",
        badge: "40+",
        body: (
            <div className="space-y-4">
                <p>Profesionálny pokrokový rituál inšpirovaný estetickou medicínou.</p>
                <p>S pribúdajúcim vekom sa komunikácia medzi bunkami spomaľuje, klesá produkcia kolagénu a v pleti sa hromadia tzv. senescentné bunky, ktoré narúšajú jej prirodzenú rovnováhu. Pleť postupne stráca pevnosť, jas aj vitalitu.</p>
                <p>Tento pokrokový rituál využíva najmodernejšie biotechnologické aktívne látky. Kombinácia exozómov, polynukleotidov, PRO-kolagénu a technológie Senolytic TECH podporuje bunkovú komunikáciu, stimuluje regeneráciu a cielene redukuje vplyv senescentných buniek.</p>
                <p>Výsledkom je viditeľne pevnejšia, intenzívne hydratovaná a rozjasnená pleť s hladšou štruktúrou a mladistvým vzhľadom.</p>
                <div className="pt-2 space-y-1 text-sm border-t border-black/10">
                    <p><span className="font-medium">Značka:</span> Vegánska biotech kozmetika · Casmara</p>
                    <p><span className="font-medium">Trvanie:</span> 1 h 45 min · <strong>160 €</strong></p>
                </div>
            </div>
        ),
    },
    {
        id: "infinity",
        title: "Infinity",
        image: "/sluzby/kozmetika.webp",
        badge: "45+",
        body: (
            <div className="space-y-4">
                <p>Ošetrenie predstavuje nový koncept holistickej kozmetiky. Pôsobí na úrovni DNA (genomika), správania génov (epigenetika), nervového systému (neurokozmetika) a biologických rytmov (chronokozmetika).</p>
                <p>Infinity vychádza z najnovších lekársko-vedeckých poznatkov. Nervový systém, DNA, biologické rytmy a správanie génov určujú tempo procesu starnutia.</p>
                <p>Rituál je určený pre zrelú pleť.</p>
                <div>
                    <p className="font-medium mb-1">Výsledok:</p>
                    <ul className="space-y-1">
                        <li className="flex gap-2"><span className="text-gold">✦</span><span>Spomaľuje proces starnutia a bráni vzniku viditeľných známok starnutia</span></li>
                        <li className="flex gap-2"><span className="text-gold">✦</span><span>Odstraňuje tmavé kruhy a vačky pod očami</span></li>
                        <li className="flex gap-2"><span className="text-gold">✦</span><span>Tvár získava oddýchnutý vzhľad</span></li>
                        <li className="flex gap-2"><span className="text-gold">✦</span><span>Miznú vrásky a výrazové línie</span></li>
                        <li className="flex gap-2"><span className="text-gold">✦</span><span>Kontúry tváre sú znovu vytvarované</span></li>
                        <li className="flex gap-2"><span className="text-gold">✦</span><span>Pleť je rozžiarená a intenzívne omladená</span></li>
                    </ul>
                </div>
                <div className="pt-2 space-y-1 text-sm border-t border-black/10">
                    <p><span className="font-medium">Značka:</span> Casmara</p>
                    <p><span className="font-medium">Trvanie:</span> 1 h 45 min · <strong>145 €</strong></p>
                </div>
            </div>
        ),
    },
    {
        id: "rgnerin",
        title: "RGnerin",
        image: "/sluzby/kozmetika.webp",
        badge: "40+",
        body: (
            <div className="space-y-4">
                <p>Regeneračný rituál so silným „botox-like" účinkom. Bez injekcií, bez vedľajších účinkov.</p>
                <p>Výrazný protivráskový a omladzujúci efekt vďaka obsahu peptidu Argireline a ďalších aktívnych látok prírodného pôvodu. Argireline predstavuje šetrnú alternatívu k botulotoxínovým injekciám – pomáha uvoľňovať mikrokontrakcie podkožného svalstva.</p>
                <p>Vyhladzuje kožný mikroreliéf, vrásky, jazvy a jazvičky po akné. Spomaľuje vznik nových vrások a zmierňuje už existujúce.</p>
                <div>
                    <p className="font-medium mb-1">Výsledok:</p>
                    <p>Odporúčam kúru 28 dní (dve profesionálne ošetrenia a regeneračná domáca starostlivosť). Vrásky a výrazové línie sú menej viditeľné. Pleť je zregenerovaná, hladká a pôsobí omladene.</p>
                </div>
                <div className="pt-2 space-y-1 text-sm border-t border-black/10">
                    <p><span className="font-medium">Značka:</span> Casmara</p>
                    <p><span className="font-medium">Trvanie:</span> 1 h 45 min · <strong>145 €</strong></p>
                    <p className="font-medium mt-2">Na doma:</p>
                    <p>Hydratačný a regeneračný krém RENOVATING, 50 ml · <strong>89 €</strong></p>
                    <p>Regeneračné anti-aging sérum RENOVATING, 50 ml · <strong>98 €</strong></p>
                </div>
            </div>
        ),
    },
    {
        id: "excel-therapy",
        title: "Excel Therapy O₂ Cityproof",
        image: "/sluzby/kozmetika.webp",
        badge: "22+",
        body: (
            <div className="space-y-4">
                <p>Intenzívny okysličujúci a antioxidačný program.</p>
                <p>Germaine de Capuccini v cielenom protiútoku voči negatívnym dôsledkom znečisteného ovzdušia a stresu. Poletujúce mikročastice, slnečné žiarenie a modré svetlo spôsobujú predčasné starnutie pleti.</p>
                <p>Aby pleť dokázala čeliť týmto náročným podmienkam, potrebuje ochranu, energiu a obnovu. Rada Excel Therapy O₂ reflektuje potreby modernej pleti – okysličuje, detoxikuje, regeneruje, chráni a posilňuje.</p>
                <p>Odporúčam pre mestskú pleť vystavenú znečisteniu (smog, prach) a modrému svetlu (blue light) z telefónu, počítača a tabletu.</p>
                <div className="pt-2 space-y-1 text-sm border-t border-black/10">
                    <p><span className="font-medium">Značka:</span> Germaine de Capuccini</p>
                    <p><span className="font-medium">Trvanie:</span> 1 h 15 min · <strong>130 €</strong></p>
                </div>
            </div>
        ),
    },
    {
        id: "aquatherm",
        title: "Citlivá pleť – Skeyndor Aquatherm",
        image: "/New-things/PHOTO-2026-03-23-13-19-02.jpg",
        body: (
            <div className="space-y-4">
                <p>Minerálna voda stimuluje metabolické funkcie pleti, najmä funkciu kožnej bariéry. Hlbokomorská voda obohatená o mikrozemské a stopové prvky podporuje prirodzenú rovnováhu pleti.</p>
                <p>Jedinečné zloženie ideálne pre citlivú pleť. Upokojuje zápalové procesy, znižuje príznaky spojené s atopickou dermatitídou a tlmí imunitné reakcie pokožky. Zároveň intenzívne hydratuje.</p>
                <div className="pt-2 space-y-1 text-sm border-t border-black/10">
                    <p>Tvár – 60 min · <strong>98 €</strong></p>
                    <p>Tvár a krk – 90 min · <strong>118 €</strong></p>
                    <p>Tvár, krk a dekolt – 90 min · <strong>135 €</strong></p>
                </div>
            </div>
        ),
    },
];

export default function KozmetikaContent() {
    const [active, setActive] = useState<Procedure | null>(null);
    const [videoLightbox, setVideoLightbox] = useState<{ isOpen: boolean; src: string }>({ isOpen: false, src: "" });
    const videoLightboxRef = useRef<HTMLVideoElement>(null);

    const close = useCallback(() => setActive(null), []);

    const openVideoLightbox = (src: string) => {
        setVideoLightbox({ isOpen: true, src });
        setTimeout(() => {
            if (videoLightboxRef.current) {
                videoLightboxRef.current.volume = 0.3;
            }
        }, 50);
    };

    const closeVideoLightbox = () => {
        setVideoLightbox({ isOpen: false, src: "" });
    };

    const handleVideoLightboxKey = useCallback((e: KeyboardEvent) => {
        if (e.key === "Escape") closeVideoLightbox();
    }, []);

    useEffect(() => {
        const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") close(); };
        if (active) {
            document.body.style.overflow = "hidden";
            window.addEventListener("keydown", onKey);
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
            window.removeEventListener("keydown", onKey);
        };
    }, [active, close]);

    useEffect(() => {
        if (videoLightbox.isOpen) {
            document.body.style.overflow = "hidden";
            window.addEventListener("keydown", handleVideoLightboxKey);
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
            window.removeEventListener("keydown", handleVideoLightboxKey);
        };
    }, [videoLightbox.isOpen, handleVideoLightboxKey]);

    return (
        <div className="flex flex-col gap-8">
            {/* Hero: same as Rituály tváre page */}
            <div className="font-montserrat font-light text-[#1D0E22] leading-tight text-lg">
                {/* Floated media block – desktop */}
                <div className="hidden md:flex float-right ml-4 mb-4 gap-3 w-2/3">
                    <div className="relative flex-1 h-[500px] rounded-xl overflow-hidden border border-white/10 shadow-2xl">
                        <Image
                            src={HERO_IMAGE}
                            alt="Rituály tváre"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div
                        className="relative flex-1 h-[500px] rounded-xl overflow-hidden border border-white/10 shadow-2xl cursor-pointer"
                        onClick={() => openVideoLightbox(HERO_VIDEO)}
                    >
                        <video
                            src={HERO_VIDEO}
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* Mobile-only media (stacked) */}
                <div className="flex md:hidden gap-3 mb-6">
                    <div className="relative flex-1 h-[200px] rounded-xl overflow-hidden border border-white/10 shadow-2xl">
                        <Image
                            src={HERO_IMAGE}
                            alt="Rituály tváre"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div
                        className="relative flex-1 h-[200px] rounded-xl overflow-hidden border border-white/10 shadow-2xl cursor-pointer"
                        onClick={() => openVideoLightbox(HERO_VIDEO)}
                    >
                        <video
                            src={HERO_VIDEO}
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                <h3 className="font-marcellus text-4xl text-[#1D0E22] mb-6 uppercase">Rituály tváre</h3>
                <h4 className="font-marcellus text-2xl text-[#1D0E22] mb-4 uppercase tracking-wider">Protokol ošetrenia</h4>
                <p className="mb-4">
                    Každé ošetrenie je individuálny rituál prispôsobený aktuálnemu stavu pleti.
                    Protokol kozmetického ošetrenia vychádza z nasledujúcich fáz. Jednotlivé kroky môžu byť podľa potrieb pokožky doplnené alebo upravené tak, aby bolo ošetrenie pre pleť čo najprospešnejšie.
                </p>
                <ol className="space-y-0">
                    <li><span className="font-medium">1. Požiadavky klientky</span><br />Krátky rozhovor o očakávaniach, aktuálnom stave pleti a cieľoch ošetrenia.</li>
                    <li><span className="font-medium">2. Diagnostika pleti</span><br />Analýza typu a kondície pokožky, hydratácie, citlivosti a prípadných problémov.</li>
                    <li><span className="font-medium">3. Odporučenie a odsúhlasenie kozmetického rituálu</span><br />Výber najvhodnejšieho ošetrenia a aktívnych látok podľa aktuálnych potrieb pleti.</li>
                    <li><span className="font-medium">4. Odlíčenie</span><br />Jemné odstránenie make-upu, mazu a vonkajších nečistôt z povrchu pokožky.</li>
                    <li><span className="font-medium">5. Peeling</span><br />Jemné odstránenie odumretých buniek rohovinovej vrstvy. Pleť sa rozjasní, povrch sa zjemní a zlepší sa vstrebávanie aktívnych látok.</li>
                    <li><span className="font-medium">6. Detoxikácia pleti</span><br />Podpora čistiacich procesov v pokožke. Pleť sa prejasňuje a obnovuje sa jej prirodzená rovnováha.</li>
                    <li><span className="font-medium">7. Manuálne čistenie pleti</span> <span className="text-[#1D0E22]/60">(ak je potrebné)</span><br />Cielené odstránenie komedónov a nečistôt z pórov.</li>
                    <li><span className="font-medium">8. Upokojenie pokožky</span><br />Biostimulačný laser alebo ozonizér na upokojenie, dezinfekciu a regeneráciu pokožky.</li>
                    <li><span className="font-medium">9. Vpracovanie aktívnych látok masážou</span><br />Masáž tváre podporuje mikrocirkuláciu a vstrebávanie účinných látok. Používajú sa moderné aktívne technológie (napr. dronové systémy, exozómy a ďalšie biotechnologické komplexy).</li>
                    <li><span className="font-medium">10. Hydratácia a okysličenie pleti</span><br />Podpora hydratácie a vitality pokožky.</li>
                    <li><span className="font-medium">11. Kozmetická maska</span><br />Upokojenie, regenerácia a obnovenie rovnováhy pleti.</li>
                    <li><span className="font-medium">12. Masáž hlavy</span><br />Uvoľnenie nervového systému a prehĺbenie celkovej relaxácie.</li>
                    <li><span className="font-medium">13. Peeling a ošetrenie rúk krémom</span></li>
                    <li><span className="font-medium">14. Záverečné ošetrenie pleti</span><br />Aplikácia krému podľa typu pokožky.</li>
                    <li><span className="font-medium">15. Balzam na pery</span></li>
                </ol>
                <p className="mt-6 italic text-[#1D0E22]/70">
                    Skutočná krása pleti vzniká vtedy, keď pracujeme v súlade s jej biológiou a podporujeme ju pravidelnou profesionálnou starostlivosťou.
                </p>
            </div>

            <div className="space-y-2">
                <p className="font-montserrat font-light text-[#1D0E22] text-lg">
                    Kliknite na ošetrenie pre viac informácií.
                </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {PROCEDURES.map((proc) => (
                    <button
                        key={proc.id}
                        onClick={() => setActive(proc)}
                        className="group relative aspect-[3/4] overflow-hidden rounded-xl border border-white/10 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] text-left"
                    >
                        <div className="absolute inset-0">
                            <Image
                                src={proc.image}
                                alt={proc.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                style={proc.imagePosition ? { objectPosition: proc.imagePosition } : undefined}
                            />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-black/90 transition-colors duration-300" />
                        {proc.badge && (
                            <div className="absolute top-3 right-3 bg-gold/80 text-[#1D0E22] text-xs font-bold px-2 py-0.5 rounded-full font-montserrat">
                                {proc.badge}
                            </div>
                        )}
                        <div className="absolute inset-0 flex items-end p-4">
                            <span className="relative font-marcellus text-sm md:text-base uppercase tracking-wider text-white group-hover:text-gold transition-colors duration-300 leading-tight after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:bg-current after:origin-left after:scale-x-0 after:transition-transform after:duration-300 group-hover:after:scale-x-100">
                                {proc.title}
                            </span>
                        </div>
                    </button>
                ))}
            </div>

            {/* Video Lightbox */}
            <AnimatePresence>
                {videoLightbox.isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-xl"
                        onClick={closeVideoLightbox}
                    >
                        <button
                            onClick={closeVideoLightbox}
                            className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors z-[110]"
                            aria-label="Close"
                        >
                            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <div
                            className="relative w-full max-w-3xl mx-auto p-4 md:p-12"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            >
                                <video
                                    ref={videoLightboxRef}
                                    src={videoLightbox.src}
                                    controls
                                    autoPlay
                                    playsInline
                                    className="w-full max-h-[90vh] rounded-xl"
                                />
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Popup */}
            <AnimatePresence>
                {active && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
                        onClick={close}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.92, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.92, y: 20 }}
                            transition={{ type: "spring", damping: 25, stiffness: 250 }}
                            className="relative bg-[#F5F5F0] rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Photo header */}
                            <div className="relative h-56 rounded-t-2xl overflow-hidden">
                                <Image
                                    src={active.image}
                                    alt={active.title}
                                    fill
                                    className="object-cover"
                                    style={active.imagePosition ? { objectPosition: active.imagePosition } : undefined}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                <div className="absolute bottom-4 left-6 right-12">
                                    <h4 className="font-marcellus text-2xl text-white uppercase tracking-wider leading-tight">
                                        {active.title}
                                    </h4>
                                    {active.badge && (
                                        <span className="text-gold font-montserrat text-sm font-medium">{active.badge}</span>
                                    )}
                                </div>
                            </div>

                            {/* Close button */}
                            <button
                                onClick={close}
                                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/30 backdrop-blur-md flex items-center justify-center text-white hover:bg-black/50 transition-colors z-10"
                            >
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>

                            {/* Content */}
                            <div className="p-6 font-montserrat font-light text-[#1D0E22] text-base leading-relaxed">
                                {active.body}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
