import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Car Key Replacement Nairobi | Auto Locksmith Kenya | AutoKeysExperts",
  description:
    "AutoKeysExperts offers fast and reliable car key replacement, car key programming, and emergency car unlocking services in Nairobi and across Kenya. 24/7 mobile auto locksmith near you.",

  keywords: [
    "car key replacement Nairobi",
    "auto locksmith Nairobi",
    "lost car key Nairobi",
    "car key programming Kenya",
    "emergency car unlocking Nairobi",
    "car locksmith near me Kenya",
    "duplicate car key Nairobi",
  ],

  metadataBase: new URL("https://autokeysexperts.co.ke"),

  openGraph: {
    title: "Car Key Replacement Nairobi | AutoKeysExperts",
    description:
      "24/7 car key replacement and programming services in Nairobi. Fast response, affordable pricing, and professional auto locksmith services.",
    url: "https://autokeysexperts.co.ke",
    siteName: "AutoKeysExperts",
    locale: "en_KE",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
