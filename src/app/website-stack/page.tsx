import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

const meta = {
  title: "Website Stack | Emmanuel Jemeni",
  url: "https://jemeni.vercel.app/website-stack",
  description: "Discover the technology stack powering Emmanuel Jemeni's portfolio website.",
  image: "https://res.cloudinary.com/dro4rspo2/image/upload/v1693987275/OG-Image-website-stack_dcoh2r.png",
};

export const metadata: Metadata = {
  title: "Website Stack",
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

function WebsiteStack() {
  return <div>WebsiteStack</div>;
}

export default WebsiteStack;
