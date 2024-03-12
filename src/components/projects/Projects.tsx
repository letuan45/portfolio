"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import coffeeShopImage from "@/public/assets/images/coffee-shop.png";
import foodShopImage from "@/public/assets/images/food-shop.png";
import Image from "next/image";
import ReactLogo from "../shared/ui/logos/ReactLogo";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import LeftChevIcon from "../shared/ui/icons/LeftChevIcon";
import RightChevIcon from "../shared/ui/icons/RightChevIcon";
import Link from "next/link";
import GradientButton from "../shared/ui/buttons/GradientButton";
import GradientBlueStrokeButton from "../shared/ui/buttons/GradientBlueStrokeButton";
import GithubIcon from "../shared/ui/logos/GithubIcon";

const sliderData = [
  {
    id: 1,
    title: "Online Coffee shop",
    description:
      "A coffee shop ecommerce website that alows users can buying products online and order tables",
    image: coffeeShopImage,
    techs: [
      {
        id: 1,
        element: <ReactLogo />,
      },
      {
        id: 2,
        element: <ReactLogo />,
      },
      {
        id: 3,
        element: <ReactLogo />,
      },
      {
        id: 4,
        element: <ReactLogo />,
      },
      {
        id: 5,
        element: <ReactLogo />,
      },
    ],
    demoLink: {
      title: "Demo on Youtube",
      link: "/",
    },
    gitLink: "/",
  },
  {
    id: 2,
    title: "Online Food shop",
    description:
      "A coffee shop ecommerce website that alows users can buying products online and order tables",
    image: foodShopImage,
    techs: [
      {
        id: 1,
        element: <ReactLogo />,
      },
    ],
    demoLink: {
      title: "Deployment website",
      link: "/",
    },
    gitLink: "/",
  },
];

const Projects = () => {
  const sliderRef = useRef<SwiperType>();
  const backgroundRef = useRef<HTMLDivElement>(null);
  const [slideUpdateFlag, setSlideUpdateFlag] = useState(false);
  const [prevIsDisabled, setPrevIsDisabled] = useState(false);
  const [nextIsDisabled, setNextIsDisabled] = useState(false);
  const [currentBgImage, setCurrentBgImage] = useState(sliderData[0].image);
  const [content, setContent] = useState({
    title: sliderData[0].title,
    description: sliderData[0].description,
    techs: sliderData[0].techs,
    demoLink: sliderData[0].demoLink,
    gitLink: sliderData[0].gitLink,
  });

  useEffect(() => {
    if (sliderRef.current?.isBeginning) {
      setPrevIsDisabled(true);
    } else {
      setPrevIsDisabled(false);
    }
    if (sliderRef.current?.isEnd) {
      setNextIsDisabled(true);
    } else {
      setNextIsDisabled(false);
    }

    backgroundRef.current?.classList.add("fade-in");

    const removeAnimateTimer = setTimeout(() => {
      if (backgroundRef.current?.classList.contains("fade-in")) {
        backgroundRef.current?.classList.remove("fade-in");
      }
    }, 300);

    return () => {
      clearTimeout(removeAnimateTimer);
    };
  }, [sliderRef, slideUpdateFlag]);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    if (!sliderRef.current?.isEnd) {
      sliderRef.current?.slideNext();
    }
  }, []);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    if (!sliderRef.current?.isBeginning) {
      sliderRef.current?.slidePrev();
    }
  }, []);

  const findSliderItem = (index: number) => {
    return sliderData.find((item) => item.id === index + 1);
  };

  return (
    <section className="py-4">
      <h2 className="my-8 block text-center font-kufam text-4xl font-semibold text-white">
        My personal projects
      </h2>
      <div className="container relative h-fit w-full bg-cover bg-center bg-no-repeat">
        <div
          ref={backgroundRef}
          style={{ backgroundImage: `url(${currentBgImage.src})` }}
          className="absolute left-0 top-0 h-full w-full bg-cover bg-center bg-no-repeat"
        />
        <div className="absolute left-0 top-0 isolate h-full w-full bg-blue-purple/30 bg-opacity-40 backdrop-blur-sm"></div>
        <div className="mx-auto grid grid-cols-9 gap-10 py-16 lg:px-36">
          <div className="relative col-span-6">
            <Swiper
              onBeforeInit={(swiper) => {
                sliderRef.current = swiper;
              }}
              modules={[Navigation, Pagination]}
              pagination={{ clickable: true }}
              spaceBetween={50}
              speed={800}
              slidesPerView={1}
              onSlideChange={() => {
                const index = sliderRef.current?.realIndex || 0;
                const currentItemData = findSliderItem(+index);
                setCurrentBgImage((oldState) => {
                  return currentItemData ? currentItemData.image : oldState;
                });
                setSlideUpdateFlag((oldState) => !oldState);
                setContent({
                  title: currentItemData?.title || "",
                  demoLink: currentItemData?.demoLink || {
                    link: "",
                    title: "",
                  },
                  description: currentItemData?.description || "",
                  gitLink: currentItemData?.gitLink || "",
                  techs: currentItemData?.techs || [],
                });
              }}
              onSwiper={(swiper) => console.log(swiper)}
            >
              {sliderData.map((item) => {
                return (
                  <SwiperSlide key={item.id}>
                    <Image
                      src={item.image}
                      width={0}
                      height={0}
                      style={{ width: "100%" }}
                      className="h-[385px] rounded-2xl"
                      alt="project img"
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
            <button
              onClick={handleNext}
              className={`absolute right-0 top-1/2 z-10 -translate-y-1/2 translate-x-1/2 rounded-full  p-3 shadow-md ${nextIsDisabled ? "bg-slate-400/50" : "bg-cus-dark-100"}`}
              disabled={nextIsDisabled}
            >
              <RightChevIcon
                className="h-8 w-8"
                strokeColor={`${!nextIsDisabled ? "#00D8FF" : "#4C4C4C"}`}
              />
            </button>
            <button
              onClick={handlePrev}
              className={`absolute left-0 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 rounded-full  p-3 shadow-md ${prevIsDisabled ? "bg-slate-400/50" : "bg-cus-dark-100"}`}
              disabled={prevIsDisabled}
            >
              <LeftChevIcon
                className="h-8 w-8"
                strokeColor={`${!prevIsDisabled ? "#00D8FF" : "#4C4C4C"}`}
              />
            </button>
          </div>
          <div className="z-10 col-span-3">
            <div className="flex h-full flex-col justify-center rounded-md bg-cus-dark-100/90 px-8 py-6 lg:ml-1">
              <h3
                className="font-kufam text-2xl font-semibold text-cus-blue-100"
                style={{ textShadow: "0 0 0.15em #00D8FF" }}
              >
                {content.title}
              </h3>
              <p className="text-md my-4 font-kufam text-white">
                {content.description}
              </p>
              <h4 className="-mb-2 font-kufam text-lg font-semibold text-white">
                Techs stack
              </h4>
              <div>
                <Swiper
                  modules={[Navigation]}
                  spaceBetween={8}
                  slidesPerView={5}
                  navigation
                  onSwiper={(swiper) => {}}
                  onSlideChange={() => {}}
                >
                  {content.techs.map((tech) => {
                    return (
                      <SwiperSlide key={tech.id}>{tech.element}</SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>
              <h4 className="mb-2 mt-3 font-kufam text-lg font-semibold text-white">
                Demo
              </h4>
              <div className="flex items-center justify-between">
                <Link href={content.demoLink.link}>
                  <GradientButton className="px-4 py-2 font-lato font-semibold">
                    {content.demoLink.title}
                  </GradientButton>
                </Link>
                <Link href={content.gitLink}>
                  <GradientBlueStrokeButton rightIcon={<GithubIcon />}>
                    Github
                  </GradientBlueStrokeButton>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
