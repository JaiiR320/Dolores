import type { Metadata } from "next";
import { quicheRegular, quicheBold } from "@/lib/fonts";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ClosureBanner from "@/components/ClosureBanner";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dolores PVD - Contemporary Mexican Restaurant in Providence, RI",
  description:
    "Contemporary and regional Mexican cuisine from the Mixteca region of Puebla and Oaxaca at 100 Hope St, Providence. Featuring craft cocktails and artisanal agave distillates.",
  icons: {
    icon: "/img/squarelogo.png",
    shortcut: "/img/squarelogo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${quicheRegular.variable} ${quicheBold.variable}`}>
        <ClosureBanner />
        <Navigation />
        {children}
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
