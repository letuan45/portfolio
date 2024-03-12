import React from "react";
import Image from "next/image";

import springLogo from "@/public/assets/icons/spring-boot-logo.png";

const SpringBootLogo = () => {
  return <Image src={springLogo} width={80} height={40} alt="spring logo" />;
};

export default SpringBootLogo;
