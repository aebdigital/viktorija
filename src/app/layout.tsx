import type { Metadata } from "next";
import { Marcellus_SC, Montserrat, Alex_Brush, Playfair_Display } from "next/font/google"; // Using Playfair Display as substitute for Saol
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

const saolDisplay = Playfair_Display({
  variable: "--font-saol", // Maps to Playfair for now
  subsets: ["latin", "latin-ext"],
  style: ["italic", "normal"],
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
        className={`${marcellus.variable} ${montserrat.variable} ${alexBrush.variable} ${saolDisplay.variable} antialiased bg-main-bg text-white font-montserrat`}
      >
        <SmoothScroller>
          {children}
        </SmoothScroller>
        <CookieConsent />
      </body>
    </html>
  );
}
