import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { RootLayoutClient } from "./RootLayoutClient";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fuel Pass QR Guide - Sri Lanka",
  description: "Complete step-by-step guide to create your Fuel Pass QR code. Available in English, Sinhala, and Tamil.",
  keywords: "Fuel Pass, QR Code, Sri Lanka, Guide, Tutorial",
  authors: [{ name: "NadeemalTech" }],
  openGraph: {
    title: "Fuel Pass QR Guide",
    description: "Learn how to create your Fuel Pass QR code easily",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100`}
      >
        <RootLayoutClient>
          {children}
        </RootLayoutClient>
        <Script
          src="https://pl28931965.effectivegatecpm.com/59/72/55/59725515218470db28da2a00b3f0f458.js"
          strategy="afterInteractive"
        />
        <Script
          src="https://pl28931977.effectivegatecpm.com/43/45/ff/4345ff1cad6a3a0edde35cad6c6210db.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
