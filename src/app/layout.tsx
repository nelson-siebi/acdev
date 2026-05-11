import type { Metadata } from "next";
import { Source_Sans_3, Merriweather } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const sourceSans = Source_Sans_3({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600"],
});

const merriweather = Merriweather({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "ACDEV - Au Cœur du Développement | ONG Cameroun",
  description: "Association au Cœur du Développement - Promotion des droits humains, prévention des violences basées sur le genre, et autonomisation des femmes et enfants au Cameroun.",
  keywords: ["ACDEV", "ONG Cameroun", "droits des femmes", "violences basées sur le genre", "développement social", "Cameroun"],
  authors: [{ name: "ACDEV" }],
  openGraph: {
    title: "ACDEV - Au Cœur du Développement",
    description: "Protéger les groupes vulnérables, assurer notre avenir commun",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${sourceSans.variable} ${merriweather.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col" style={{ fontFamily: 'var(--font-body)' }}>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
