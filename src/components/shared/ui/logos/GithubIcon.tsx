import Image from "next/image";
import React from "react";

import githubLogo from "@/public/assets/icons/icons8-github-512.png";

const GithubIcon = () => {
  return <Image src={githubLogo} width={30} height={30} alt="git logo" />;
};

export default GithubIcon;
