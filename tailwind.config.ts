import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./index.html",
    "./index.tsx",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#F5F4EF",
        primary: "#14202D",
        secondary: "#1F2B38",
        muted: "#334155",
        accent: {
          DEFAULT: "#8D062D",
          hover: "#740524",
          soft: "#F3D7DE",
        },
        border: "#D9DDE1",
      },
      fontFamily: {
        serif: ["var(--font-eb-garamond)", "serif"],
        cormorant: ["'Cormorant Garamond'", "serif"],
        sans: ["var(--font-inter)", "sans-serif"],
        handwritten: ["Great Vibes", "cursive"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;