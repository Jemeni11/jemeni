import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

const meta = {
  title: "About | Emmanuel Jemeni",
  url: "https://jemeni.vercel.app/about",
  description: "Get to know Emmanuel Jemeni – web developer and more.",
  image: "https://res.cloudinary.com/dro4rspo2/image/upload/v1693925474/OG-Image-About_mrdep7.png",
};

export const metadata: Metadata = {
  title: "About",
  description: meta.description,
  openGraph: {
    title: meta.title,
    url: meta.url,
    description: meta.description,
    images: meta.image,
  },
  twitter: {
    title: meta.title,
    site: meta.url,
    description: meta.description,
    images: [meta.image],
  },
};

function About() {
  return <div>page</div>;
}

export default About;
