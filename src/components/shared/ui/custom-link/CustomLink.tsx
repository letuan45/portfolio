"use client";

import React, { useState } from "react";

import { motion } from "framer-motion";
import { slide } from "../../navbar/anim";
import Link from "next/link";

interface Props {
  data: {
    title: string;
    href: string;
    index: number;
    elementId: string;
  };
  externalClasses: string;
  onClick: (elementId: string) => void;
}

const CustomLink = ({ data, externalClasses, onClick }: Props) => {
  const { title, href, index, elementId } = data;

  return (
    <motion.div
      custom={index}
      variants={slide}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <Link
        href={href}
        className={`${externalClasses}`}
        onClick={() => {
          onClick(elementId);
        }}
        scroll={false}
      >
        {title}
      </Link>
    </motion.div>
  );
};

export default CustomLink;
