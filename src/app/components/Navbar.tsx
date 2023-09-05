// import useScreenWidth from "../hooks/useScreenWidth";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/apple-touch-icon.png";

const navItems = [
  { key: 0, name: "About", link: "/about" },
  { key: 1, name: "Uses", link: "/uses" },
  { key: 2, name: "Projects", link: "/projects" },
  { key: 3, name: "Articles", link: "/articles" },
];

export default function Navbar() {
  // const { isMobile, isPad } = useScreenWidth();

  // if (isMobile) return <MobileNav />;
  // if (isPad) return <TabNav />;

  return (
    <nav className="flex justify-between">
      <Image src={Logo} alt="logo" />
      <ul>
        {navItems.map((item) => (
          <li key={item.key}>
            <Link href={item.link}>{item.name}</Link>
          </li>
        ))}
      </ul>
      <div></div>
    </nav>
  );
}

function MobileNav() {
  return <nav></nav>;
}

function TabNav() {
  return <nav></nav>;
}
