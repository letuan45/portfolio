"use client";

import Link from "next/link";
import React from "react";
import CodeIcon from "../ui/icons/CodeIcon";

export const navItems = [
  {
    id: 1,
    title: "Home",
    href: "",
    elementId: "greeting",
  },
  {
    id: 2,
    title: "About",
    href: "/#about",
    elementId: "about",
  },
  {
    id: 3,
    title: "Projects",
    href: "/#projects",
    elementId: "projects",
  },
  {
    id: 4,
    title: "Works",
    href: "/#works",
    elementId: "works",
  },
  {
    id: 5,
    title: "Contact",
    href: "/#contact",
    elementId: "contact",
  },
];

const NavBar = () => {
  const handleClickOnLink = (elementId: string) => {
    const element = document.getElementById(elementId);
    element?.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  };

  return (
    <div className="container mx-auto flex items-center justify-between py-4 font-lato max-md:px-4 lg:mt-2 lg:px-14">
      <Link href="/" className="flex gap-2">
        <CodeIcon width={44} height={20} />
        <span className="text-lg font-semibold text-white">Code by letuan</span>
      </Link>
      <nav className="max-lg:hidden">
        <ul className="flex items-center justify-center gap-4">
          {navItems.map((navItem) => {
            return (
              <li key={navItem.id}>
                <Link
                  scroll={false}
                  onClick={() => {
                    handleClickOnLink(navItem.elementId);
                  }}
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
