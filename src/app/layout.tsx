import type { Metadata } from "next";
import {
  IBM_Plex_Sans,
  PT_Serif,
  Playfair_Display, Noto_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./components/NavBar";
import WhatsAppFloat from "./components/WhatsappFloat";
import { cn } from "@/lib/utils";

const playfairDisplayHeading = Playfair_Display({subsets:['latin'],variable:'--font-heading'});

const notoSans = Noto_Sans({subsets:['latin'],variable:'--font-sans'});

const ibm = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-ibm",
});

const pt_serif = PT_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-pt_serif",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600"],
});


export const metadata: Metadata = {
  metadataBase: new URL("https://barakatokikiola.netlify.app/"), // swap for your real domain
  title: "Barakat Okikiola Tajudeen | Website Designer & Frontend Developer",
  description:
    "Barakat Okikiola is a frontend engineer and website designer based in Lagos, building design-led websites for brands that want to stand apart.",
  openGraph: {
    title: "Barakat Okikiola Tajudeen | Website Designer & Frontend Developer",
    description: "Design-led engineering for brands that want to stand apart.",
    url: "https://barakatokikiola.netlify.app/",
    siteName: "Barakat Okikiola",
    images: ["/og-image.webp"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Barakat Okikiola Tajudeen | Website Designer & Frontend Developer",
    description: "Design-led engineering for brands that want to stand apart.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Barakat Okikiola",
  jobTitle: "Frontend Engineer & Website Designer",
  url: "https://barakatokikiola.netlify.app",
  sameAs: [
    "https://linkedin.com/in/barakatokikiola",
    "https://github.com/barakatokikiola",
    "https://twitter.com/barakatokikiola",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn(playfair.variable, ibm.variable, pt_serif.variable, "font-sans", notoSans.variable, playfairDisplayHeading.variable)}>
      <body>
         <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <Navbar />
        <main>{children}
          <WhatsAppFloat/>
        </main>
      </body>
    </html>
  );
}
