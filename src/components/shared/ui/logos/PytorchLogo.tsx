import Image from "next/image";
import React from "react";

import pytorchLogo from "@/public/assets/icons/pytorch-logo.png";

const PytorchLogo = () => {
  return <Image src={pytorchLogo} width={40} height={40} alt="pytorch logo" />;
};

export default PytorchLogo;
