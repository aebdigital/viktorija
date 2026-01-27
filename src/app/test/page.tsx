
import Header from "@/components/Header";
import {
    Playfair_Display,
    Libre_Baskerville,
    Cormorant_Garamond,
    Prata,
    Bodoni_Moda,
    EB_Garamond,
    Italiana,
    Lora,
    Crimson_Text,
    Spectral,
    Montserrat,
    Alex_Brush
} from 'next/font/google';

// Font configurations
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });
const libreBaskerville = Libre_Baskerville({ weight: '400', subsets: ['latin'], variable: '--font-libre' });
const cormorant = Cormorant_Garamond({ weight: ['400', '600'], subsets: ['latin'], variable: '--font-cormorant' });
const prata = Prata({ weight: '400', subsets: ['latin'], variable: '--font-prata' });
const bodoni = Bodoni_Moda({ subsets: ['latin'], variable: '--font-bodoni' });
const ebGaramond = EB_Garamond({ weight: '400', subsets: ['latin'], variable: '--font-eb-garamond' });
const italiana = Italiana({ weight: '400', subsets: ['latin'], variable: '--font-italiana' });
const lora = Lora({ subsets: ['latin'], variable: '--font-lora' });
const crimsonText = Crimson_Text({ weight: ['400', '600'], subsets: ['latin'], variable: '--font-crimson' });
const spectral = Spectral({ weight: ['400', '600'], subsets: ['latin'], variable: '--font-spectral' });
const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat' });
const alexBrush = Alex_Brush({ weight: '400', subsets: ['latin'], variable: '--font-alex' });

const fonts = [
    { name: 'Playfair Display', font: playfair.className, variable: playfair.variable },
    { name: 'Libre Baskerville', font: libreBaskerville.className, variable: libreBaskerville.variable },
    { name: 'Cormorant Garamond', font: cormorant.className, variable: cormorant.variable },
    { name: 'Prata', font: prata.className, variable: prata.variable },
    { name: 'Bodoni Moda', font: bodoni.className, variable: bodoni.variable },
    { name: 'EB Garamond', font: ebGaramond.className, variable: ebGaramond.variable },
    { name: 'Italiana', font: italiana.className, variable: italiana.variable },
    { name: 'Lora', font: lora.className, variable: lora.variable },
    { name: 'Crimson Text', font: crimsonText.className, variable: crimsonText.variable },
    { name: 'Spectral', font: spectral.className, variable: spectral.variable },
];

// Mixed backgrounds configuration
const sections = [
    { type: 'gradient', value: "bg-gradient-to-br from-[#1a1a1a] via-[#0d0d0d] to-[#000000]" },
    { type: 'gradient', value: "bg-gradient-to-bl from-[#2c2c2c] via-[#1f1f1f] to-[#121212]" },
    { type: 'gradient', value: "bg-gradient-to-r from-[#232526] to-[#414345]" },
    { type: 'gradient', value: "bg-gradient-to-t from-[#000000] via-[#191919] to-[#333333]" },
    { type: 'gradient', value: "bg-gradient-to-b from-[#111111] to-[#2b2b2b]" },
    { type: 'image', value: "/textures/texture1.avif" },
    { type: 'image', value: "/textures/texture2.avif" },
    { type: 'image', value: "/textures/texture3.jpg" },
];

// Noise texture
const noiseStyle = {
    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.15'/%3E%3C/svg%3E")`,
};

export default function TestPage() {
    return (
        <main className={`min-h-screen ${montserrat.className} bg-black`}>
            <Header />

            {sections.map((bg, index) => {
                // Use all fonts cycling
                const sectionFonts = [];
                for (let i = 0; i < 5; i++) {
                    sectionFonts.push(fonts[(index * 5 + i) % fonts.length]);
                }

                const phrase = "Krása je v detailoch";

                // Background logic
                const bgStyle = bg.type === 'image'
                    ? { backgroundImage: `url(${bg.value})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }
                    : {};

                // For gradient, we use className. For image, we use style.
                const bgClass = bg.type === 'gradient' ? bg.value : 'bg-black'; // fallback bg color

                return (
                    <section
                        key={index}
                        className={`relative min-h-[40vh] w-full flex flex-col justify-center p-4 md:p-8 overflow-hidden ${bgClass}`}
                        style={bgStyle}
                    >
                        {/* Dark Overlay for images to ensure text readability */}
                        {bg.type === 'image' && <div className="absolute inset-0 bg-black/60 z-0"></div>}

                        {/* Noise Overlay */}
                        <div className="absolute inset-0 z-0 pointer-events-none opacity-40 mix-blend-overlay" style={noiseStyle}></div>

                        <div className="relative z-10 w-full max-w-[98vw] mx-auto flex flex-col xl:flex-row items-center gap-6 xl:gap-8">

                            {/* LEFT: Stacked Alex Brush Headings (4 colors now) */}
                            <div className="flex flex-col gap-0 text-center xl:text-left justify-center flex-shrink-0 w-full xl:w-auto">
                                <h2 className={`${alexBrush.className} text-5xl md:text-6xl text-white`}>Viktorija</h2>
                                <h2 className={`${alexBrush.className} text-5xl md:text-6xl text-[#eee3ce]`}>Viktorija</h2>
                                <h2 className={`${alexBrush.className} text-5xl md:text-6xl text-gray-500`}>Viktorija</h2>
                                <h2 className={`${alexBrush.className} text-5xl md:text-6xl text-black drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]`}>Viktorija</h2>
                            </div>

                            {/* RIGHT: 5 Columns of Paragraphs */}
                            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 lg:gap-4 w-full border-l-0 xl:border-l border-white/10 pl-0 xl:pl-8">

                                {sectionFonts.map((f, i) => (
                                    <div key={i} className="flex flex-col gap-1 items-center xl:items-start text-center xl:text-left">
                                        <span className="text-[#eee3ce] text-[9px] uppercase tracking-widest opacity-50 font-montserrat truncate">{f.name}</span>

                                        <div className="flex flex-col gap-0.5 items-center xl:items-start">
                                            {/* Variant 1: White */}
                                            <p className={`${f.font} text-white text-lg md:text-xl lg:text-2xl leading-[0.9] opacity-90 normal-case whitespace-nowrap`}>
                                                {phrase}
                                            </p>
                                            {/* Variant 2: Gold */}
                                            <p className={`${f.font} text-[#eee3ce] text-lg md:text-xl lg:text-2xl leading-[0.9] opacity-90 normal-case whitespace-nowrap`}>
                                                {phrase}
                                            </p>
                                            {/* Variant 3: Grey */}
                                            <p className={`${f.font} text-gray-500 text-lg md:text-xl lg:text-2xl leading-[0.9] opacity-90 normal-case whitespace-nowrap`}>
                                                {phrase}
                                            </p>
                                            {/* Variant 4: Black */}
                                            <p className={`${f.font} text-black text-lg md:text-xl lg:text-2xl leading-[0.9] opacity-90 normal-case whitespace-nowrap drop-shadow-[0_0_2px_rgba(255,255,255,0.6)]`}>
                                                {phrase}
                                            </p>
                                        </div>
                                    </div>
                                ))}

                            </div>

                        </div>

                    </section>
                );
            })}
        </main>
    );
}
