import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { site } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  ...buildMetadata({
    title: "Euro-Cape Partners | Your European Sales Office for South African Food Exporters",
    description:
      "Euro-Cape Partners connects premium South African dried fruit, nut, and vegetable producers with European distributors and buyers. Your commission-based European sales office, no inventory risk, direct market access.",
    path: "/",
  }),
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
