import React from "react";

const GradientBlueStrokeButton = ({
  children,
  rightIcon,
}: Readonly<{
  children: React.ReactNode;
  rightIcon?: React.ReactNode;
}>) => {
  return (
    <button className="gradient-button-blue group flex items-center justify-center">
      <div className="group-hover:glowing-text-purple text-md flex min-w-[120px] items-center justify-center px-4 py-2 font-lato font-semibold text-white duration-200 ease-in-out">
        <div>{children}</div>
        <div className="ml-auto">{rightIcon && rightIcon}</div>
      </div>
    </button>
  );
};

export default GradientBlueStrokeButton;
