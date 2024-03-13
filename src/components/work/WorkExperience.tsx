import React from "react";
import oldComputerImage from "@/public/assets/images/old-computer.png";
import crownImage from "@/public/assets/images/crown.png";
import plusImage from "@/public/assets/images/plus.png";
import Image from "next/image";

const WorkExperience = () => {
  return (
    <section className="container mx-auto mt-8  py-10 lg:px-24">
      <h2 className="mb-4 py-4 font-kufam text-4xl font-semibold text-white">
        Working experience
      </h2>
      <div className="grid grid-cols-2 gap-4">
        <div className="relative col-span-1">
          <div className="relative left-10 w-full">
            <Image
              src={oldComputerImage}
              alt="old computer"
              width={500}
              height={500}
            />
            <Image
              src={crownImage}
              alt="crown"
              width={100}
              height={80}
              className="absolute left-0 top-0 -rotate-[30deg]"
            />
            <Image
              src={plusImage}
              alt="plus"
              width={60}
              height={60}
              className="absolute bottom-48 right-36"
            />
            <Image
              src={plusImage}
              alt="plus 2"
              width={30}
              height={40}
              className="absolute bottom-44 right-48"
            />
          </div>
        </div>
        <div className="col-span-1">
          <div className="rounded-lg bg-cus-gray-100/30 px-6 py-8 backdrop-blur-sm">
            <h2 className="mb-2 font-kufam text-3xl font-semibold text-white">
              Ondigitals
            </h2>
            <div className="ml-4 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="white"
                className="mr-1 h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              <h4 className="font-kufam font-medium text-white">
                April 2023 - October 2023
              </h4>
            </div>
            <h4 className="my-3 ml-4 font-kufam font-medium text-white">
              Position:{" "}
              <span className="font-semibold text-blue-purple">
                Internship Web Developer
              </span>
            </h4>
            <div className="mb-2 ml-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="white"
                className="mr-2 inline h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
                />
              </svg>
              <p className="inline text-white">
                Web development with Wordpress and PHP, HTML, CSS, Javascipt,
                jQuery, NextJS with Wordpress Headless CMS
              </p>
            </div>
            <div className="mb-2 ml-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="white"
                className="mr-2 inline h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
                />
              </svg>
              <p className="inline text-white">
                Maintain and fix feature&apos;s bugs
              </p>
            </div>
            <div className="mb-2 ml-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="white"
                className="mr-2 inline h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
                />
              </svg>
              <p className="inline text-white">
                Web modification and development base on design templates and
                SEO requirements
              </p>
            </div>
            <div className="mb-2 ml-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="white"
                className="mr-2 inline h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
                />
              </svg>
              <p className="inline text-white">
                Web optimization with plugins and code refactoring
              </p>
            </div>
            <div className="mb-2 ml-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="white"
                className="mr-2 inline h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
                />
              </svg>
              <p className="inline text-white">
                Working with Wordpress plugins, themes (Flatsome, Elementor),
                web deploy
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;