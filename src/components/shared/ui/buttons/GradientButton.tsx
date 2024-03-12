import React from "react";

const GradientButton = ({
  children,
  className,
}: Readonly<{
  children: React.ReactNode;
  className?: string;
}>) => {
  return (
    <button
      className={`bg-gradient-to-br from-cus-blue-100 via-cus-purple-100 to-cus-purple-200 text-white ${className} rounded-full`}
    >
      {children}
    </button>
  );
};

export default GradientButton;
