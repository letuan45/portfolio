import React from "react";
import Image from "next/image";

import nodeJSLogo from "@/public/assets/icons/nodejs-logo.png";

const NodeLogo = () => {
  return (
    <Image
      src={nodeJSLogo}
      width={60}
      height={20}
      alt="node logo"
      className="rounded-md bg-cus-gray-100 p-2"
    />
  );
};

export default NodeLogo;
