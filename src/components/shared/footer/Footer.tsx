"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

import arrowImage from "@/public/assets/images/arrow.png";
import { AnimatePresence, useMotionValueEvent, useScroll } from "framer-motion";

const Footer = () => {
  const [buttonIsShow, setButtonIsShow] = useState(false);
  const { scrollYProgress } = useScroll();

  useMotionValueEvent(scrollYProgress, "change", (latestVal) => {
    if (latestVal > 0.1) {
      setButtonIsShow(true);
    } else {
      setButtonIsShow(false);
    }
  });

  return (
    <>
      <div className="bg-gradient-to-r from-cus-blue-100 via-cus-purple-100 to-cus-purple-200">
        <div className="container mx-auto flex w-full items-center justify-between py-2 max-sm:flex-col max-sm:text-center max-sm:text-sm lg:px-24">
          <h4 className="pt-1 font-kufam font-semibold">
            @lelamtuan4501@gmail.com | Contact phone: (+84)981756860
          </h4>
          <h4 className="pt-1 font-kufam font-semibold">
            Develop and design by LeTuan
          </h4>
        </div>
      </div>
      {buttonIsShow && (
        <Link
          scroll={false}
          href="/"
          className="fixed bottom-8 right-8 flex h-14 w-14 items-center justify-center rounded-full border-4 border-primary p-2 shadow-lg"
          onClick={() => {
            const element = document.getElementById("greeting");
            element?.scrollIntoView({
              behavior: "smooth",
              block: "end",
              inline: "nearest",
            });
          }}
        >
          <Image
            src={arrowImage}
            alt="arrow"
            width={40}
            height={40}
            className="rotate-[-85deg]"
          />
        </Link>
      )}
    </>
  );
};

export default Footer;
