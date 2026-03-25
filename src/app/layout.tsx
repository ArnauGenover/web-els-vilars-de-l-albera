import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Els Vilars de l'Albera | Natura i Desconnexió",
    template: "%s | Els Vilars de l'Albera",
  },
  description:
    "Descobreix Els Vilars de l'Albera. Un llegat familiar a la muntanya on el temps s'atura i els joves poden viure la natura.",
  keywords: [
    "Els Vilars de l'Albera",
    "natura",
    "Alt Empordà",
    "muntanya",
    "acampada",
    "desconnexió",
    "Catalunya",
    "refugi",
    "bosc",
  ],
  authors: [{ name: "Els Vilars de l'Albera" }],
  openGraph: {
    type: "website",
    locale: "ca_ES",
    siteName: "Els Vilars de l'Albera",
    title: "Els Vilars de l'Albera | Natura i Desconnexió",
    description:
      "Descobreix Els Vilars de l'Albera. Un llegat familiar a la muntanya on el temps s'atura i els joves poden viure la natura.",
    images: [
      {
        url: "/images/terreny-aeri.jpg",
        width: 1200,
        height: 630,
        alt: "Vista aèria del terreny Els Vilars de l'Albera",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Els Vilars de l'Albera | Natura i Desconnexió",
    description:
      "Descobreix Els Vilars de l'Albera. Un llegat familiar a la muntanya on el temps s'atura i els joves poden viure la natura.",
    images: ["/images/terreny-aeri.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ca" className={`${inter.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col font-sans">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
