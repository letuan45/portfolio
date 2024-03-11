import Link from "next/link";
import React from "react";
import CodeIcon from "../ui/icons/CodeIcon";

const navItems = [
  {
    id: 1,
    title: "Home",
    href: "/",
  },
  {
    id: 2,
    title: "About",
    href: "/",
  },
  {
    id: 3,
    title: "Projects",
    href: "/",
  },
  {
    id: 4,
    title: "Works",
    href: "/",
  },
  {
    id: 5,
    title: "Contact",
    href: "/",
  },
];

const NavBar = () => {
  return (
    <div className="container mx-auto flex items-center justify-between py-4 font-lato lg:mt-2 lg:px-14">
      <Link href="/" className="flex gap-2">
        <CodeIcon width={44} height={20} />
        <span className="text-lg font-semibold text-white">Code by letuan</span>
      </Link>
      <nav>
        <ul className="flex items-center justify-center gap-4">
          {navItems.map((navItem) => {
            return (
              <li key={navItem.id}>
                <Link
                  href={navItem.href}
                  className="hover:glowing-text px-4 py-2 text-lg font-semibold text-transparent text-white duration-300 hover:ease-in"
                >
                  {navItem.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
