import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
      </body>
    </html>
  );
}
