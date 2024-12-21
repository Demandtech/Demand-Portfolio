import { nextui } from "@nextui-org/theme";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: ["class", "[data-theme='dark']"],
  theme: {
    extend: {
      colors: {
        bgprimary: "var(--bgprimary)",
        bgsecondary: "var(--bgsecondary)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
      },
      fontFamily: {
        noto: ["Noto Serif JP", "serif"],
        comic: ["Comic Neue", "serif"],
        inter: ["Inter", "serif"],
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
