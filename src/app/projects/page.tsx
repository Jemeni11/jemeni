import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Project | Emmanuel Jemeni",
  metadataBase: new URL("https://jemeni.vercel.app/projects"),
  description: "Explore projects built by Emmanuel Jemeni",
  openGraph: {
    title: "Projects | Emmanuel Jemeni",
    url: "https://jemeni.vercel.app/projects",
    description: "Explore projects built by Emmanuel Jemeni",
    // images:
    // "https://res.cloudinary.com/victoreke/image/upload/v1692636087/victoreke/projects.png",
  },
};

function Projects() {
  return <div>page</div>;
}

export default Projects;
