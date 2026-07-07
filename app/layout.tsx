import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Euro-Cape Partners | Your European Sales Office",
  description:
    "Euro-Cape Partners helps South African dry fruit, nut, and vegetable producers enter and grow in European markets — acting as their outsourced European sales office. Distributor search, buyer prospecting, and sales representation across Southern and Northern Europe.",
  keywords: [
    "South African food export",
    "European distributor search",
    "macadamia export Europe",
    "dried fruit export",
    "European sales representation",
    "food export agent Europe",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
