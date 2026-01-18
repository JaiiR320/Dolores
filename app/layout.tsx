import type { Metadata } from "next";
import Script from "next/script";
import { quicheRegular, quicheBold } from "@/lib/fonts";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
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
      <head>
        <Script
          src="https://use.fontawesome.com/releases/v5.0.8/js/all.js"
          strategy="afterInteractive"
        />
      </head>
      <body className={`${quicheRegular.variable} ${quicheBold.variable}`}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
