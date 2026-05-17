import type { Metadata } from "next";
import { Marcellus_SC, Montserrat, Alex_Brush, Prociono } from "next/font/google";
import "./globals.css";
import SmoothScroller from "@/components/SmoothScroller";
import CookieConsent from "@/components/CookieConsent";
import SiteBackdrop from "@/components/SiteBackdrop";

const marcellus = Marcellus_SC({
  variable: "--font-marcellus",
  weight: "400",
  subsets: ["latin", "latin-ext"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin", "latin-ext"],
});

const alexBrush = Alex_Brush({
  variable: "--font-alex",
  weight: "400",
  subsets: ["latin", "latin-ext"],
});

const prociono = Prociono({
  variable: "--font-prociono",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Salón Viktória | Profesionálny Kozmetický Salón Bratislava",
  description: "Exkluzívny kozmetický salón v Bratislave. Ponúkame permanentný make-up (PMU), estetické rituály tváre, nastreľovanie náušníc a odborné kurzy v našej akadémii.",
  keywords: ["kozmetický salón Bratislava", "permanentný make-up Bratislava", "PMU Bratislava", "estetická kozmetika", "nastreľovanie náušníc", "kurzy permanentného make-upu", "Salón Viktória"],
  authors: [{ name: "Viktorija Kendra" }],
  openGraph: {
    title: "Salón Viktória | Kozmetický Salón Bratislava",
    description: "Profesionálny permanentný make-up a estetické služby v srdci Bratislavy.",
    url: "https://salonviktoria.sk",
    siteName: "Salón Viktória",
    locale: "sk_SK",
    type: "website",
    images: [
      {
        url: "/shared/IMG_1422.JPG",
        width: 1200,
        height: 630,
        alt: "Salón Viktória - Profesionálna kozmetika",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Salón Viktória | Kozmetický Salón Bratislava",
    description: "Profesionálny permanentný make-up a estetické služby v srdci Bratislavy.",
    images: ["/shared/IMG_1422.JPG"],
  },
  icons: {
    icon: '/shared/output-onlinepngtools-removebg-preview.png',
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  "name": "Salón Viktória",
  "image": "https://salonviktoria.sk/shared/IMG_1422.JPG",
  "@id": "https://salonviktoria.sk",
  "url": "https://salonviktoria.sk",
  "telephone": "+421907796562",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Mlynské nivy",
    "addressLocality": "Bratislava",
    "postalCode": "821 09",
    "addressCountry": "SK"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 48.1466,
    "longitude": 17.1333
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday"
    ],
    "opens": "09:00",
    "closes": "18:00"
  },
  "sameAs": [
    "https://www.instagram.com/viktorija_kendra_pmu_academy/"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sk">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${marcellus.variable} ${montserrat.variable} ${alexBrush.variable} ${prociono.variable} antialiased`}
        style={{ backgroundColor: "#9da0aa" }}
      >
        <SiteBackdrop />
        <SmoothScroller>
          <div className="relative z-10 min-h-screen">
            {children}
          </div>
        </SmoothScroller>
        <CookieConsent />
      </body>
    </html>
  );
}
