import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Splash from "@/components/Splash";
import ScrollProgress from "@/components/ScrollProgress";
import CallFab from "@/components/CallFab";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Parvoz Reklama — Bannerlar, vizitkalar va bosma ishlar",
  description:
    "Parvoz Reklama agentligi (Urganch): bannerlar, vizitkalar, bosma mahsulotlar, keng formatli chop etish va grafik dizayn xizmatlari. Tez, sifatli va hamyonbop. Tel: +998 70 057 40 00",
  keywords: [
    "reklama agentligi",
    "banner chop etish",
    "vizitka",
    "bosma ishlar",
    "grafik dizayn",
    "Parvoz Reklama",
    "Urganch",
    "Xorazm",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uz" className={`${montserrat.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Splash />
        <ScrollProgress />
        {children}
        <CallFab />
      </body>
    </html>
  );
}
