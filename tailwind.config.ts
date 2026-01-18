import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: "#385CC7",
        "primary-light": "#5f7dd9",
        "primary-dark": "#2d4a9e",
        "text-body": "#222",
        "footer-bg": "#3f3f3f",
        "footer-text": "#d5d5d5",
      },
      fontFamily: {
        "quiche-regular": ["var(--font-quiche-regular)"],
        "quiche-bold": ["var(--font-quiche-bold)"],
      },
    },
  },
  plugins: [],
};

export default config;
