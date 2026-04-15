import type { Metadata } from "next";
import { Archivo_Black, Baloo_2, DM_Sans } from "next/font/google";
import localFont from "next/font/local";
import { Header } from "@/components/Header";
import "./globals.css";

const allianceFont = DM_Sans({
  subsets: ["latin"],
  variable: "--font-alliance",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const britanicaFont = Archivo_Black({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-britanica-black",
});

const baloo2 = Baloo_2({
  subsets: ["latin"],
  variable: "--font-baloo-2",
  weight: ["400", "500", "600", "700"],
});

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Gleam Health",
  description: "Gleam Health — care and membership",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} ${baloo2.variable} ${allianceFont.variable} ${britanicaFont.variable} min-h-screen bg-white font-[family-name:var(--font-geist-sans)] antialiased text-neutral-900`}
      >
        <Header />
        <main className="pt-16 md:pt-[4.5rem]">{children}</main>
      </body>
    </html>
  );
}
