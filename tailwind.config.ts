import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";
import { CSSRuleObject } from "tailwindcss/types/config";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      padding: "15px",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    fontFamily: {
      primary: "var(--font-jetbrainsMono)",
    },
    extend: {
      colors: {
        primary: "#1c1c22",
        accent: {
          DEFAULT: "#00ff99",
          hover: "00e187",
        },
      },
      textStroke: {
        DEFAULT: "1px #ffffff", // default white stroke
        hover: "1px #00ff99", // green stroke on hover
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },

  plugins: [
    tailwindcssAnimate,
    function ({
      addUtilities,
    }: {
      addUtilities(
        utilities: CSSRuleObject | CSSRuleObject[],
        options?: Partial<{
          respectPrefix?: boolean;
          respectImportant?: boolean;
          variants?: string[];
        }>
      ): void;
    }) {
      const newUtilities = {
        ".text-outline": {
          "-webkit-text-stroke": "1px #ffffff",
        },
        ".text-outline-hover:hover": {
          "-webkit-text-stroke": "1px #00ff99",
        },
      };
    
      addUtilities(newUtilities, { variants: ["responsive", "hover"] });
    },
  ],
};
export default config;
