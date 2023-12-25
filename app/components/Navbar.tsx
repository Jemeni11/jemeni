"use client";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/favicon-32x32.png";
import Menu from "../../public/menu.svg";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const navItems = [
  { key: 0, name: "About", link: "/about" },
  { key: 1, name: "Uses", link: "/uses" },
  { key: 2, name: "Projects", link: "/projects" },
  { key: 3, name: "Articles", link: "/articles" },
];

export default function Navbar() {
  const [mobileNavOpened, setMobileNavOpened] = useState(false);
  const toggleMobileNav = () => setMobileNavOpened((prevState) => !prevState);
  const activeRoute = usePathname();

  useEffect(() => {
    setMobileNavOpened(false);
  }, [activeRoute]);

  return (
    <nav className={`${mobileNavOpened ? "dropdown-opened" : ""} px-[5%] pt-4`}>
      <Link className="logo" href="/">
        <Image src={Logo} alt="logo" />
      </Link>
      <button className="mobile-dropdown-toggle" aria-hidden="true" onClick={toggleMobileNav}>
        <Image src={Menu} alt="Menu" />
      </button>
      <div className="dropdown-link-container">
        {navItems.map((item) => (
          <Link href={item.link} key={item.key}>
            {item.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}
