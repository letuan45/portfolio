import React from "react";

import bootstrapLogo from "@/public/assets/icons/bootstrap-logo.png";
import Image from "next/image";

const BootstrapLogo = () => {
  return (
    <Image src={bootstrapLogo} width={40} height={40} alt="bootstrap logo" />
  );
};

export default BootstrapLogo;
