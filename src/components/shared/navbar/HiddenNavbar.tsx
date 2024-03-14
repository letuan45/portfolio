"use client";

import React, { useEffect, useState } from "react";
import { Squash as Hamburger } from "hamburger-react";
import { navItems } from "./NavBar";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
} from "framer-motion";
import { menuSlide } from "./anim";
import CustomLink from "../ui/custom-link/CustomLink";
import Curve from "./Curve";
import { usePathname } from "next/navigation";

const HiddenNavbar = () => {
  const pathname = usePathname();
  const { scrollYProgress } = useScroll();
  const [isOpen, setOpen] = useState(false);
  const [buttonIsShow, setButtonIsShow] = useState(false);
  const [isAllwaysShowButton, setIsAllwaysShowButton] = useState(false);
  const screenWidth = window.innerWidth;

  useEffect(() => {
    if (screenWidth <= 1024) {
      setIsAllwaysShowButton(true);
      setButtonIsShow(true);
    } else {
      setIsAllwaysShowButton(false);
    }
  }, [screenWidth, pathname]);

  useMotionValueEvent(scrollYProgress, "change", (latestVal) => {
    if (isAllwaysShowButton) return;
    if (latestVal > 0.04) {
      setButtonIsShow(true);
    } else {
      setButtonIsShow(false);
    }
  });

  const handleClickOnLink = (elementId: string) => {
    setOpen(false);
    const element = document.getElementById(elementId);
    element?.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  };

  return (
    <div className="fixed right-0 top-0 z-50 shadow-lg">
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.ul
            variants={menuSlide}
            initial="initial"
            animate="enter"
            exit="exit"
            className="absolute -right-8 -top-20 h-[120vh] w-80 bg-cus-dark-100 pl-14 pt-64 shadow-xl md:w-[25rem]"
          >
            <h2 className="ml-3 font-kufam text-3xl font-semibold text-cus-red">
              Navigation
            </h2>
            {navItems.map((item, index) => {
              return (
                <li key={item.id}>
                  <CustomLink
                    onClick={handleClickOnLink}
                    data={{
                      href: item.href,
                      index: index,
                      title: item.title,
                      elementId: item.elementId,
                    }}
                    externalClasses="hover:glowing-text-red py- my-8 block px-4 text-2xl font-semibold text-transparent text-white duration-300 hover:ease-in"
                  />
                </li>
              );
            })}
            <Curve />
          </motion.ul>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {buttonIsShow && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{
              duration: 0.3,
              delay: 0.2,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className="absolute right-8 top-16 flex h-16 w-16 items-center justify-center rounded-full bg-blue-purple"
          >
            <Hamburger
              toggled={isOpen}
              size={25}
              toggle={setOpen}
              color="black"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HiddenNavbar;
