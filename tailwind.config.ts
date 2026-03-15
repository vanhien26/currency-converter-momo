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
        momo: {
          pink: "#d82d8b",
          "pink-dark": "#b0246f",
          "pink-light": "#f06ab0",
          "pink-bg": "#fdf0f7",
        },
      },
    },
  },
  plugins: [],
};

export default config;
