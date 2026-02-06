import type { Metadata } from "next";
import { Marcellus_SC, Montserrat, Alex_Brush, Prociono } from "next/font/google";
import "./globals.css";
import SmoothScroller from "@/components/SmoothScroller";
import CookieConsent from "@/components/CookieConsent";

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
  title: "Salón Viktória | Kozmetický Salón",
  description: "Profesionálny kozmetický salón, permanentný make-up a estetické služby.",
  icons: {
    icon: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sk">
      <body
        className={`${marcellus.variable} ${montserrat.variable} ${alexBrush.variable} ${prociono.variable} antialiased`}
      >
        <SmoothScroller>
          {children}
        </SmoothScroller>
        <CookieConsent />
      </body>
    </html>
  );
}
