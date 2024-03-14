import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 8s linear infinite",
      },
      fontFamily: {
        lato: ["var(--font-lato)"],
        kufam: ["var(--font-kufam)"],
      },
      colors: {
        primary: "#9D0191",
        "primary-dark": "#3F033B",
        "cus-dark": {
          100: "#1E1E1E",
          200: "#000000",
        },
        "cus-red": "#FD3A69",
        "cus-purple": {
          100: "#BC6FF1",
          200: "#9D0191",
        },
        "cus-orange": {
          100: "#F1662A",
          200: "#E44F26",
        },
        "cus-yellow": "#F5DE19",
        "cus-blue": {
          100: "#00D8FF",
          200: "#33A9DC",
          300: "#1572B6",
        },
        "blue-purple": "#836FFF",
        "cus-gray": {
          100: "#EBEBEB",
          200: "#4C4C4C",
        },
      },
    },
  },
  plugins: [],
};
export default config;
