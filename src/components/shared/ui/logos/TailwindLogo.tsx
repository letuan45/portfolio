import Image from "next/image";
import React from "react";

import tailwindLogo from "@/public/assets/icons/tailwind-logo.png";

const TailwindLogo = () => {
  return (
    <Image
      src={tailwindLogo}
      width={100}
      height={80}
      alt="tw logo"
      className="rounded-sm bg-white p-1"
    />
  );
};

export default TailwindLogo;
