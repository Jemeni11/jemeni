import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

const meta = {
  title: "Articles | Emmanuel Jemeni",
  url: "https://jemeni.vercel.app/articles",
  description: "Dive into insightful articles by Emmanuel Jemeni on web development and technology.",
  image: "https://res.cloudinary.com/dro4rspo2/image/upload/v1693925474/OG-Image-Articles_m1intu.png",
};

export const metadata: Metadata = {
  title: "Articles",
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

function Articles() {
  return <div></div>;
}

export default Articles;
