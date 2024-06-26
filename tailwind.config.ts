import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "banner-image": "url(../public/slider.png)",
      },
      colors: {
        "gray-light": "#E8F0F5",
      },
    },
  },
  plugins: [],
};
export default config;
