import "./globals.css";
import Script from "next/script";
import type { Metadata, Viewport } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const meta = {
  image: "https://res.cloudinary.com/dro4rspo2/image/upload/v1693898610/OG-Image_jianeb.png",
  url: "https://jemeni.vercel.app",
  name: "Emmanuel Jemeni",
  title: "Emmanuel Jemeni | Frontend Developer",
  description: "Emmanuel Jemeni is a Frontend developer focused on building responsive websites for amazing experiences on the web.",
};

export const metadata: Metadata = {
  title: {
    default: meta.title,
    template: "%s | Emmanuel Jemeni",
  },
  keywords: [meta.name, "Portfolio", "Frontend Developer", "Front-end Developer"],
  creator: meta.name,
  metadataBase: new URL(meta.url),
  description: meta.description,
  openGraph: {
    title: meta.title,
    url: meta.url,
    siteName: "vercel.app",
    locale: "en-US",
    type: "website",
    description: meta.description,
    images: meta.image,
  },
  twitter: {
    card: "summary_large_image",
    title: meta.title,
    site: meta.url,
    description: meta.description,
    creator: "@Jemeni11_",
    images: [meta.image],
  },
  alternates: {
    canonical: meta.url,
  },
};

export const viewport: Viewport = {
  themeColor: "#142538",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-900 text-white`}>
        <Navbar />
        {children}
        <Footer />
        <Script
          strategy="afterInteractive"
          src="https://analytics.umami.is/script.js"
          data-website-id="67f49d72-a29e-4e63-a538-972f67cb995b"
        />
      </body>
    </html>
  );
}
