import React from "react";

const GradientStrokeButton = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <button className="gradient-button group flex items-center justify-center">
      <div className="group-hover:glowing-text-red min-w-[200px] px-8 py-4 font-lato text-xl font-semibold text-white duration-200 ease-in-out">
        {children}
      </div>
    </button>
  );
};

export default GradientStrokeButton;
