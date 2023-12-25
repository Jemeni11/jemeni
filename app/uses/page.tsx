import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

const meta = {
  title: "Uses | Emmanuel Jemeni",
  url: "https://jemeni.vercel.app/uses",
  description: "Explore the tools and resources in Emmanuel Jemeni's toolbox.",
  image: "https://res.cloudinary.com/dro4rspo2/image/upload/v1693925474/OG-Image-Uses_q1wvty.png",
};

export const metadata: Metadata = {
  title: "Uses",
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

function Uses() {
  return <div></div>;
}

export default Uses;
