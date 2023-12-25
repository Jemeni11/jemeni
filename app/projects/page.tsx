import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

const meta = {
  title: "Projects | Emmanuel Jemeni",
  url: "https://jemeni.vercel.app/projects",
  description: "Explore projects built by Emmanuel Jemeni",
  image: "https://res.cloudinary.com/dro4rspo2/image/upload/v1693924615/OG-Image-Projects_bl69fp.png",
};

export const metadata: Metadata = {
  title: "Projects",
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

function Projects() {
  return <div>page</div>;
}

export default Projects;
