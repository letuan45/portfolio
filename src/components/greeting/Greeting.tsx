"use client";

import Image from "next/image";
import React, { useEffect, useRef } from "react";

import myFaceImage from "@/public/assets/images/mat-toi.png";
import plusLightImage from "@/public/assets/images/plus.png";
import triangleLightImage from "@/public/assets/images/triangle.png";
import squareLightImage from "@/public/assets/images/square.png";
import circleLightImage from "@/public/assets/images/circle.png";
import turnLightImage from "@/public/assets/images/turn-arrow.png";

import Link from "next/link";
import GradientStrokeButton from "../shared/ui/buttons/GradientStrokeButton";
import ReactLogo from "../shared/ui/logos/ReactLogo";
import NextLogo from "../shared/ui/logos/NextLogo";
import NodeLogo from "../shared/ui/logos/NodeLogo";
import NestLogo from "../shared/ui/logos/NestLogo";
import SpringBootLogo from "../shared/ui/logos/SpringBootLogo";
import SqlLogo from "../shared/ui/logos/SqlLogo";
import MongoLogo from "../shared/ui/logos/MongoLogo";
import { motion } from "framer-motion";

const TechLogos = [
  {
    id: 1,
    element: <ReactLogo />,
  },
  {
    id: 2,
    element: <NextLogo />,
  },
  {
    id: 3,
    element: <NodeLogo />,
  },
  {
    id: 4,
    element: <NestLogo />,
  },
  {
    id: 5,
    element: <SpringBootLogo />,
  },
  {
    id: 6,
    element: <SqlLogo />,
  },
  {
    id: 7,
    element: <MongoLogo />,
  },
];

const Greeting = () => {
  const blobRadius = "47% 53% 53% 47% / 65% 46% 54% 35%";

  return (
    <section
      id="greeting"
      className="container mx-auto mt-3 grid w-full grid-cols-1 gap-4 py-8 lg:h-[90vh] lg:grid-cols-2"
    >
      <div className="relative col-span-1">
        <div
          className="absolute left-36 top-10 z-10"
          style={{ width: "50px", height: "50px" }}
        >
          <Image
            src={plusLightImage}
            alt="plus-light"
            width={0}
            height={0}
            className="absolute left-0 top-0 h-full w-full"
          />
        </div>
        <div
          style={{ width: "80px", height: "80px" }}
          className="absolute left-28 top-80 z-10"
        >
          <Image
            src={triangleLightImage}
            alt="triangle-light"
            width={0}
            height={0}
            className="absolute left-0 top-0 h-full w-full"
          />
        </div>
        <div
          className="absolute right-48 top-[400px] z-10"
          style={{ width: "60px", height: "60px" }}
        >
          <Image
            src={squareLightImage}
            alt="square-light"
            width={0}
            height={0}
            className="absolute left-0 top-0 h-full w-full"
          />
        </div>
        <div
          className="absolute right-32 top-56 z-10"
          style={{ width: "100px", height: "100px" }}
        >
          <Image
            src={turnLightImage}
            alt="turn-light"
            width={0}
            height={0}
            className="absolute left-0 top-0 h-full w-full"
          />
        </div>
        <div className="relative my-20 flex justify-center">
          <div className="relative h-[300px] w-[300px] ">
            <div
              style={{ borderRadius: blobRadius }}
              className="absolute h-full w-full overflow-hidden bg-transparent"
            >
              <div
                style={{ borderRadius: blobRadius }}
                className="absolute h-full w-full bg-gradient-to-r from-[#494949] to-[#644D7C] shadow-sm shadow-cus-gray-200"
              ></div>
              <Image
                src={myFaceImage}
                alt="my-face"
                width={540}
                height={860}
                className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 transform"
              />
            </div>
            <motion.svg
              initial={{ opacity: 0, y: -100 }}
              whileInView={{ opacity: 1, y: 0, rotate: 360 }}
              transition={{ duration: 1, ease: "easeIn" }}
              style={{
                filter: "drop-shadow(0 0 10px rgba(241, 102, 42, 0.8))",
              }}
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute -right-8 -top-8 -z-10 h-[200px] w-[200px]"
            >
              <defs>
                <linearGradient
                  id="fill"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                  gradientTransform="rotate(45 0.5 0.5)"
                >
                  <stop offset="0%" stopColor="#ea7557"></stop>
                  <stop offset="100%" stopColor="#dc1459"></stop>
                </linearGradient>
              </defs>
              <path fill="url(#fill)" stroke="none" strokeWidth="0">
                <animate
                  attributeName="d"
                  dur="4s"
                  repeatCount="indefinite"
                  values="
                M85,70Q73,90,49.5,90.5Q26,91,14,70.5Q2,50,14,29Q26,8,50,8.5Q74,9,85.5,29.5Q97,50,85,70Z;
                M86,70.5Q73,91,50,90Q27,89,15,69.5Q3,50,15,30Q27,10,50.5,9.5Q74,9,86.5,29.5Q99,50,86,70.5Z;
                M85,70Q73,90,49.5,90.5Q26,91,14,70.5Q2,50,14,29Q26,8,50,8.5Q74,9,85.5,29.5Q97,50,85,70Z;
                M86,70.5Q73,91,50,90Q27,89,15,69.5Q3,50,15,30Q27,10,50.5,9.5Q74,9,86.5,29.5Q99,50,86,70.5Z;
                M85,70Q73,90,49.5,90.5Q26,91,14,70.5Q2,50,14,29Q26,8,50,8.5Q74,9,85.5,29.5Q97,50,85,70Z
                "
                ></animate>
              </path>
            </motion.svg>
            <motion.svg
              style={{
                filter: "drop-shadow(0 0 10px rgba(172, 158, 255, 0.8))",
              }}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0, rotate: 360 }}
              transition={{ duration: 0.8 }}
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
              className="filter- absolute -bottom-8 -left-8 -z-10 h-[200px] w-[200px] animate-spin-slow duration-500"
            >
              <defs>
                <linearGradient
                  id="fill2"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                  gradientTransform="rotate(45 0.5 0.5)"
                >
                  <stop offset="0%" stopColor="#AC9EFF"></stop>
                  <stop offset="100%" stopColor="#5D4EB5"></stop>
                </linearGradient>
              </defs>
              <path fill="url(#fill2)" stroke="none" strokeWidth="0">
                <animate
                  attributeName="d"
                  dur="4s"
                  repeatCount="indefinite"
                  values="
                M85,70Q73,90,49.5,90.5Q26,91,14,70.5Q2,50,14,29Q26,8,50,8.5Q74,9,85.5,29.5Q97,50,85,70Z;
                M86,70.5Q73,91,50,90Q27,89,15,69.5Q3,50,15,30Q27,10,50.5,9.5Q74,9,86.5,29.5Q99,50,86,70.5Z;
                M85,70Q73,90,49.5,90.5Q26,91,14,70.5Q2,50,14,29Q26,8,50,8.5Q74,9,85.5,29.5Q97,50,85,70Z;
                M86,70.5Q73,91,50,90Q27,89,15,69.5Q3,50,15,30Q27,10,50.5,9.5Q74,9,86.5,29.5Q99,50,86,70.5Z;
                M85,70Q73,90,49.5,90.5Q26,91,14,70.5Q2,50,14,29Q26,8,50,8.5Q74,9,85.5,29.5Q97,50,85,70Z
                "
                ></animate>
              </path>
            </motion.svg>
          </div>
        </div>
      </div>
      <div className="col-span-1">
        <div className="relative flex flex-col justify-center max-lg:items-center md:mt-10">
          <div
            className="absolute -top-16 right-44 max-xl:hidden"
            style={{ width: "60px", height: "60px" }}
          >
            <Image
              src={circleLightImage}
              alt="circle-light"
              width={0}
              height={0}
              className="absolute left-0 top-0 h-full w-full"
            />
          </div>
          <div
            className="absolute -bottom-7 right-44 max-xl:hidden"
            style={{ width: "60px", height: "60px" }}
          >
            <Image
              src={squareLightImage}
              alt="square-light-2"
              width={60}
              height={60}
              className="absolute left-0 top-0 h-full w-full"
            />
          </div>
          <motion.div
            initial={{ opacity: 0, x: 110 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, ease: "easeIn" }}
            className="flex flex-col items-center justify-center"
          >
            <h2
              className="font-kufam text-6xl font-semibold text-white max-lg:text-center max-sm:text-5xl"
              style={{ textShadow: "0 0 0.15em white" }}
            >
              Hi there!
            </h2>
            <h1 className="my-5 font-kufam text-4xl text-white max-lg:text-center max-sm:text-2xl">
              My name is{" "}
              <span
                className="font-semibold text-cus-purple-100 max-lg:text-center "
                style={{ textShadow: "0 0 0.08em #BC6FF1" }}
              >
                Le Lam Tuan
              </span>
            </h1>
            <p className="mt-2 w-4/5 font-kufam text-lg text-white max-lg:text-center max-sm:text-sm">
              Welcome to my Portfolio, this is a Portfolio code by NextJS if you
              like my introduction or get interesting with my profile, please
              contact me. Wish you have a wonderful day.
            </p>
            <ul className="mb-6 mt-3 flex flex-wrap items-center gap-4 max-lg:justify-center max-md:px-4">
              {TechLogos.map((tech) => (
                <li key={tech.id}>{tech.element}</li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 120 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: "easeIn" }}
          >
            <Link
              target="_blank"
              href="https://drive.google.com/file/d/1dHKjH7L7kSdUB5lUr7dYzfLY6DG6DTTm/view"
              download={true}
            >
              <GradientStrokeButton>Get my CV</GradientStrokeButton>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Greeting;
