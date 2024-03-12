import React from "react";

const ReactLogo = () => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="-10.5 -9.45 21 18.9"
      fill="red"
      xmlns="http://www.w3.org/2000/svg"
      className="text-link dark:text-link-dark me-0 flex w-12 origin-center self-center text-sm transition-all ease-in-out lg:w-10"
    >
      <circle cx="0" cy="0" r="2" fill="#00D8FF"></circle>
      <g stroke="#00D8FF" strokeWidth="1" fill="none">
        <ellipse rx="10" ry="4.5"></ellipse>
        <ellipse rx="10" ry="4.5" transform="rotate(60)"></ellipse>
        <ellipse rx="10" ry="4.5" transform="rotate(120)"></ellipse>
      </g>
    </svg>
  );
};

export default ReactLogo;
