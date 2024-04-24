import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        intro: "url('/intro.jpg')",
      },
      fontFamily: {
        "oleo-script": ["Oleo Script", "system-ui"],
      },
      colors: {
        "main-yellow": "#FDE74C",
      },
    },
  },
  plugins: [],
};
export default config;
