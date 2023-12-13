import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      tablet: "670px",
      notebook: "1024px",
      desktop: "1320px",
      ultrawide: "1920px",
    },
    extend: {
      backgroundImage: {
        loginGradient: "linear-gradient(46deg, #E42D93 0%, #1E5099 100%)",
      },
      colors: {
        primary: "#E42D93",
        secondary: "#1E5099",
      },
      keyframes: (theme) => ({
        fade: {
          "0%": { opacity: "0" },
          "100%": { opacity: "100" },
        },
      }),
      animation: {
        fade: "fade 0.5s ease-in-out 1",
      },
    },
  },
  plugins: [],
};
export default config;
