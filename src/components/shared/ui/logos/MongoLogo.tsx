import Image from "next/image";
import React from "react";

import mongoLogo from "@/public/assets/icons/mongo-logo.png";

const MongoLogo = () => {
  return <Image src={mongoLogo} width={100} height={50} alt="mongo logo" />;
};

export default MongoLogo;
