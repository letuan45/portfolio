import Image from "next/image";
import React from "react";
import CodeIconImage from "@/public/assets/icons/code.png";

interface Props {
  width: number;
  height: number;
}

const CodeIcon = ({ width, height }: Props) => {
  return (
    <Image src={CodeIconImage} width={width} height={height} alt="code-icon" />
  );
};

export default CodeIcon;
