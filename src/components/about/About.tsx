import React from "react";
import Image from "next/image";

import JSImage from "@/public/assets/icons/javascript-logo.png";
import PythonImage from "@/public/assets/icons/python-logo.png";
import JavaImage from "@/public/assets/icons/java-logo.png";
import ComputerImage from "@/public/assets/images/computer-1.png";
import ptitLogo from "@/public/assets/icons/ptit-logo.png";

const languages = [
  {
    id: 1,
    image: (
      <Image
        src={JSImage}
        alt="JS"
        width={30}
        height={30}
        className="rounded-sm"
      />
    ),
  },
  {
    id: 2,
    image: (
      <svg
        fill="#00D8FF"
        height="26"
        viewBox="0 0 27 26"
        width="27"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          clip-rule="evenodd"
          d="m.98608 0h24.32332c.5446 0 .9861.436522.9861.975v24.05c0 .5385-.4415.975-.9861.975h-24.32332c-.544597 0-.98608-.4365-.98608-.975v-24.05c0-.538478.441483-.975.98608-.975zm13.63142 13.8324v-2.1324h-9.35841v2.1324h3.34111v9.4946h2.6598v-9.4946zm1.0604 9.2439c.4289.2162.9362.3784 1.5218.4865.5857.1081 1.2029.1622 1.8518.1622.6324 0 1.2331-.0595 1.8023-.1784.5691-.1189 1.0681-.3149 1.497-.5879s.7685-.6297 1.0187-1.0703.3753-.9852.3753-1.6339c0-.4703-.0715-.8824-.2145-1.2365-.1429-.3541-.3491-.669-.6186-.9447-.2694-.2757-.5925-.523-.9692-.7419s-.8014-.4257-1.2743-.6203c-.3465-.1406-.6572-.2771-.9321-.4095-.275-.1324-.5087-.2676-.7011-.4054-.1925-.1379-.3409-.2838-.4454-.4379-.1045-.154-.1567-.3284-.1567-.523 0-.1784.0467-.3392.1402-.4824.0935-.1433.2254-.2663.3959-.369s.3794-.1824.6269-.2392c.2474-.0567.5224-.0851.8248-.0851.22 0 .4523.0162.697.0486.2447.0325.4908.0825.7382.15.2475.0676.4881.1527.7218.2555.2337.1027.4495.2216.6475.3567v-2.4244c-.4015-.1514-.84-.2636-1.3157-.3365-.4756-.073-1.0214-.1095-1.6373-.1095-.6268 0-1.2207.0662-1.7816.1987-.5609.1324-1.0544.3392-1.4806.6203s-.763.6392-1.0104 1.0743c-.2475.4352-.3712.9555-.3712 1.5609 0 .7731.2268 1.4326.6805 1.9785.4537.546 1.1424 1.0082 2.0662 1.3866.363.146.7011.2892 1.0146.4298.3134.1405.5842.2865.8124.4378.2282.1514.4083.3162.5403.4946s.198.3811.198.6082c0 .1676-.0413.323-.1238.4662-.0825.1433-.2076.2676-.3753.373s-.3766.1879-.6268.2473c-.2502.0595-.5431.0892-.8785.0892-.5719 0-1.1383-.0986-1.6992-.2959-.5608-.1973-1.0805-.4933-1.5589-.8879z"
          fill="#00D8FF"
          fill-rule="evenodd"
        ></path>
      </svg>
    ),
  },
  {
    id: 3,
    image: (
      <Image
        src={PythonImage}
        alt="python"
        width={30}
        height={30}
        className="rounded-sm"
      />
    ),
  },
  {
    id: 4,
    image: (
      <Image
        src={JavaImage}
        alt="Java"
        width={30}
        height={60}
        className="rounded-sm"
      />
    ),
  },
];

const About = () => {
  return (
    <div className="container mx-auto my-7 grid grid-cols-2 gap-4 lg:px-24">
      <div className="col-span-1">
        <h2 className="font-kufam text-4xl font-semibold text-white">
          About me
        </h2>
        <p className="my-4 block font-kufam text-lg text-white">
          I have graduate a degree as a Software Engineer, my main skill is web
          development. I am also eager to find opportunities to enhance my
          personal skills, to be enthusiastic about contributing to a
          company&apos;s success and growth.
        </p>
        <h2 className="font-kufam text-2xl font-semibold text-white">
          My main program languages
        </h2>
        <ul className="my-4 grid w-1/3 grid-flow-col grid-cols-4">
          {languages.map((item) => (
            <li
              key={item.id}
              className="col-span-1 flex h-14 w-12 items-center justify-center rounded-sm border-2 border-cus-gray-200 bg-black/30 backdrop-blur-sm duration-200 hover:border-primary"
            >
              {item.image}
            </li>
          ))}
        </ul>
        <h2 className="font-kufam text-2xl font-semibold text-white">
          Education
        </h2>
        <div className="ml-8 flex items-center">
          <Image
            src={ptitLogo}
            width={60}
            height={60}
            alt="ptit-logo"
            className="my-3"
          />
          <p className="ml-3 font-kufam font-semibold text-white">
            2019 - 2024
          </p>
        </div>
        <p className="mt-3 font-kufam font-semibold text-white">
          Posts & Telecommunications Institute of Technology <br /> (PTIT) Ho
          Chi Minh City Campus
        </p>
      </div>
      <div className="col-span-1">
        <Image
          src={ComputerImage}
          width={548}
          height={548}
          alt="computer-1"
          className="-scale-x-100 lg:ml-10"
        />
      </div>
    </div>
  );
};

export default About;
