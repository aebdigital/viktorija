import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Kontakt | Salón Viktória",
    description: "Kontaktné údaje a otváracie hodiny Salónu Viktória v Bratislave. Telefón, e-mail, mapa a online rezervácia.",
    alternates: { canonical: "/kontakt" },
};

export default function KontaktLayout({ children }: { children: React.ReactNode }) {
    return children;
}
