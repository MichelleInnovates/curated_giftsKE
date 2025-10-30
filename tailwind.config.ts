import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "rgb(248, 245, 240)", // Changed to a warmer off-white
        "text-primary": "rgb(17, 17, 17)",
        "accent-green": "rgb(56, 128, 135)", // New accent color from video
        "border-gray": "rgb(229, 229, 229)",
      },
      fontFamily: {
        headings: ["var(--font-playfair)", "serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;