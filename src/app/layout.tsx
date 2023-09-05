import "./globals.css";
import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Inter } from "next/font/google";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Emmanuel Jemeni | Front-end Developer",
  metadataBase: new URL("https://jemeni.vercel.app"),
  description:
    "Emmanuel Jemeni is a Front-end developer focused on building responsive websites for amazing experiences on the web.",
  openGraph: {
    title: "Emmanuel Jemeni | Front-end Developer",
    url: "https://jemeni.vercel.app",
    siteName: "vercel.app",
    locale: "en-US",
    type: "website",
    description:
      "Emmanuel Jemeni is a Front-end developer focused on building responsive websites for amazing experiences on the web.",
    images:
      "https://res.cloudinary.com/dro4rspo2/image/upload/v1693898610/OG-Image_jianeb.png",
  },
  alternates: {
    canonical: "https://jemeni.vercel.app",
  },
  themeColor: "#142538",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
