import Image from "next/image";
import React from "react";

import materialUILogo from "@/public/assets/icons/material-ui-logo.png";

const MaterialUILogo = () => {
  return <Image src={materialUILogo} width={40} height={40} alt="m ui logo" />;
};

export default MaterialUILogo;
