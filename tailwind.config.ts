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
        "social-facebook": "#3b5998",
        "social-instagram": "#517fa8",
      },
      fontFamily: {
        "quiche-regular": ["var(--font-quiche-regular)"],
        "quiche-bold": ["var(--font-quiche-bold)"],
      },
      fontSize: {
        // Navigation
        nav: "1.3em",
        // Carousel title - responsive scale
        "hero-title-sm": "250%",
        "hero-title-md": "350%",
        "hero-title-lg": "500%",
        // Carousel subtitle - responsive scale
        "hero-subtitle-sm": "110%",
        "hero-subtitle-md": "140%",
        "hero-subtitle-lg": "200%",
      },
      spacing: {
        // Hero/Carousel vertical positioning
        "hero-top-sm": "40%",
        "hero-top-md": "45%",
      },
    },
  },
  plugins: [],
};

export default config;
