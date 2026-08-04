import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Car Key Replacement Nairobi | Auto Locksmith Kenya | AutoKeyExperts",
  description:
    "AutoKeyExperts offers fast and reliable car key replacement, car key programming, and emergency car unlocking services in Nairobi and across Kenya. 24/7 mobile auto locksmith near you.",

  keywords: [
    "car key replacement Nairobi",
    "auto locksmith Nairobi",
    "lost car key Nairobi",
    "car key programming Kenya",
    "emergency car unlocking Nairobi",
    "car locksmith near me Kenya",
    "duplicate car key Nairobi",
  ],

  metadataBase: new URL("https://autokeyexperts.co.ke"),

  openGraph: {
    title: "Car Key Replacement Nairobi | AutoKeysExperts",
    description:
      "24/7 car key replacement and programming services in Nairobi. Fast response, affordable pricing, and professional auto locksmith services.",
    url: "https://autokeyexperts.co.ke",
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
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18362410131"
          strategy="afterInteractive"
        />

        <Script id="google-ads-tag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'AW-18362410131');
          `}
        </Script>
      </head>

      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
