import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import Logo from "../../../public/favicon-32x32.png";

import DevTo from "../../../public/logos/devdotto.svg";
import Discord from "../../../public/logos/discord.svg";
import GMail from "../../../public/logos/gmail.svg";
import Hashnode from "../../../public/logos/hashnode.svg";
import LinkedIn from "../../../public/logos/linkedin.svg";
import X from "../../../public/logos/x.svg";

const links: {
  name: string;
  image: any;
  link: string;
}[] = [
  {
    name: "LinkedIn",
    image: LinkedIn,
    link: "https://www.linkedin.com/in/emmanuel-jemeni/",
  },
  {
    name: "X (formerly Twitter)",
    image: X,
    link: "https://twitter.com/Jemeni11_",
  },
  {
    name: "Mail",
    image: GMail,
    link: "mailto:emmanueljemeni@gmail.com",
  },
  {
    name: "Hashnode",
    image: Hashnode,
    link: "https://jemeni11.hashnode.dev",
  },
  {
    name: "Discord",
    image: Discord,
    link: "https://discord.com/users/890338018832039966",
  },
  {
    name: "Dev.to",
    image: DevTo,
    link: "https://dev.to/jemeni11",
  },
];

const FooterLinkItem = ({ link, name }: { link: string; name: string }) => {
  return (
    <Link href={link} className="mx-4 text-sm text-textColor transition-colors duration-300 hover:text-blue-500" aria-label={name}>
      {name}
    </Link>
  );
};

function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col items-center text-center">
          <Link href="/" className="flex items-center gap-4">
            <Image src={Logo} alt="Logo" className="aspect-square" />
            <p className="text-xl font-bold text-textColor">Jemeni</p>
          </Link>

          <div className="-mx-4 mt-6 flex flex-wrap justify-center">
            <FooterLinkItem link="/about" name="About" />
            <FooterLinkItem link="/uses" name="Uses" />
            <FooterLinkItem link="/projects" name="Projects" />
            <FooterLinkItem link="/articles" name="Articles" />
          </div>
        </div>

        <hr className="my-6 border-gray-200 dark:border-gray-700 md:my-10" />

        <div className="flex flex-col-reverse items-center gap-4 sm:flex-row sm:justify-between">
          <div className="flex flex-col gap-1 text-center text-sm leading-8 text-textColor md:flex-row">
            <p>Built with 💖 and occasional bursts of 😭.</p>
            <Link
              href="/website-stack"
              className="transition-underline-offset underline-offset-[16px] duration-200 ease-in-out hover:underline hover:underline-offset-8"
            >
              Explore the Website Stack.
            </Link>
          </div>

          <div className="-mx-2 flex gap-4">
            {links.map(({ image, link, name }) => (
              <a href={link} key={name} aria-label={name} className=" transition-colors duration-300 hover:text-blue-500">
                <Image src={image} alt={name} className="h-6 w-6 invert filter" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

{
  /* <p></p> */
}
