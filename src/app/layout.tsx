import "./globals.css";
import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const options = {
  title: "Emmanuel Jemeni | Front-end Developer",
  description:
    "Emmanuel Jemeni is a Front-end developer focused on building responsive websites for amazing experiences on the web.",
  url: "https://jemeni.vercel.app",
  ogImage:
    "https://res.cloudinary.com/dro4rspo2/image/upload/v1693898610/OG-Image_jianeb.png",
};

export const metadata: Metadata = {
  title: options.title,
  metadataBase: new URL(options.url),
  description: options.description,
  openGraph: {
    title: options.title,
    url: options.url,
    siteName: "vercel.app",
    locale: "en-US",
    type: "website",
    description: options.description,
    images: options.ogImage,
  },
  alternates: {
    canonical: options.url,
  },
  themeColor: "#33E092",
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
