import Image from "next/image";
import React from "react";

import nestJSLogo from "@/public/assets/icons/nest-js-logo.png";

const NestLogo = () => {
  return <Image src={nestJSLogo} width={40} height={40} alt="nest logo" />;
};

export default NestLogo;
