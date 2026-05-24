import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Ochrana osobných údajov | Salón Viktória",
    description: "Zásady spracovania osobných údajov a súkromia – GDPR. Salón Viktória, Bratislava.",
    alternates: { canonical: "/osobne-udaje" },
    robots: { index: false, follow: true },
};

export default function OsobneUdajeLayout({ children }: { children: React.ReactNode }) {
    return children;
}
