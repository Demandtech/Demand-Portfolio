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
  theme: {
    extend: {
      colors: {
        black100: "#1f1f1f",
        black150: "rgb(31,31,31)",
        black200: "rgb(13,13,13)",
      },
      fontFamily: {
        noto: ["Noto Serif JP", "serif"],
        comic: ["Comic Neue", "serif"],
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
