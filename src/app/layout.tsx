import "./globals.css";
import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const meta = {
  image: "https://res.cloudinary.com/dro4rspo2/image/upload/v1693898610/OG-Image_jianeb.png",
  url: "https://jemeni.vercel.app",
  name: "Emmanuel Jemeni",
  title: "Emmanuel Jemeni | Front-end Developer",
  description: "Emmanuel Jemeni is a Front-end developer focused on building responsive websites for amazing experiences on the web.",
};

export const metadata: Metadata = {
  title: {
    default: meta.title,
    template: "%s | Emmanuel Jemeni",
  },
  keywords: [meta.name, "Portfolio", "Front-end Developer"],
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
  viewport: {
    width: "device-width",
    initialScale: 1,
    userScalable: false,
  },
  twitter: {
    card: "summary_large_image",
    title: meta.title,
    site: meta.url,
    description: meta.description,
    creator: "@Jemeni11",
    images: [meta.image],
  },
  alternates: {
    canonical: meta.url,
  },
  themeColor: "#142538",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
