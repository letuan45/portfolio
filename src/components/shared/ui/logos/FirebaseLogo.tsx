import React from "react";

import fireBaseLogo from "@/public/assets/icons/firebase-logo.png";
import Image from "next/image";

const FirebaseLogo = () => {
  return (
    <Image src={fireBaseLogo} width={40} height={40} alt="firebase logo" />
  );
};

export default FirebaseLogo;
