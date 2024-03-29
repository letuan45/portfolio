import type { Metadata } from "next";
import { Kufam, Lato } from "next/font/google";
import "./globals.css";
import MainBackground from "@/public/assets/images/main-background.jpg";
import NavBar from "@/components/shared/navbar/NavBar";
import Footer from "@/components/shared/footer/Footer";
import HiddenNavbar from "@/components/shared/navbar/HiddenNavbar";
import Head from "next/head";

const lato = Lato({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-lato",
});

const kufam = Kufam({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-kufam",
});

export const metadata: Metadata = {
  title: "Portfolio | letuan",
  description:
    "This is letuan's porfolio if you get interesting, come to explore",
  icons: {
    icon: "https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjkzMi1uaW5nLTU1LmpwZw.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${lato.variable} ${kufam.variable}`}>
      <body
        style={{ backgroundImage: `url(${MainBackground.src})` }}
        className="bg-cover bg-no-repeat"
      >
        <NavBar />
        <HiddenNavbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
