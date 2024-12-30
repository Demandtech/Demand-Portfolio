import { nextui } from "@nextui-org/theme";
import tailwindScrollbar from "tailwind-scrollbar";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/(button|code|dropdown|image|input|kbd|link|modal|navbar|skeleton|snippet|spinner|toggle|tabs|ripple|menu|divider|popover|form).js",
  ],
  darkMode: ["class"],
  theme: {
    extend: {
      colors: {
        primary: "hsl(var(--primary))",
        secondary: "hsl(var(--secondary))",
        accent: "hsl(var(--accent))",
        bgprimary: "hsl(var(--bgprimary))",
        bgsecondary: "hsl(var(--bgsecondary))",
      },
      fontFamily: {
        noto: ["Noto Serif JP", "serif"],
        comic: ["Comic Neue", "serif"],
        inter: ["Inter", "serif"],
      },
    },
  },
  darkMode: "class",
  plugins: [nextui(), tailwindScrollbar()],
};
