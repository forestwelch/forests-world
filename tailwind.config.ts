import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./.storybook/**/*.{js,ts,jsx,tsx,mdx}",
    "./stories/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    // Ensure color classes are included for Storybook
    {
      pattern:
        /bg-(light|dark|violet|teal|fuchsia|emerald|rose|cyan)-(200|300|400|500|600|700|900|950)/,
    },
    {
      pattern:
        /text-(light|dark|violet|teal|fuchsia|emerald|rose|cyan)-(200|300|400|500|600|700|900)/,
    },
    {
      pattern:
        /border-(light|dark|violet|teal|fuchsia|emerald|rose|cyan)-(200|300|400|500|600|700|800|900)/,
    },
  ],
  theme: {
    extend: {
      colors: {
        // Semantic color aliases - map to actual color palettes
        light: {
          "50": "#f1effe",
          "100": "#e4e1fe",
          "200": "#d1c9fc",
          "300": "#b7a9f8",
          "400": "#a386f3",
          "500": "#9469eb",
          "600": "#884dde",
          "700": "#783fc3",
          "800": "#61359e",
          "900": "#4f327d",
          "950": "#27183c",
        },
        dark: {
          "50": "#eefbf5",
          "100": "#d7f4e6",
          "200": "#b1e9d1",
          "300": "#7ed7b7",
          "400": "#49be97",
          "500": "#259b78",
          "600": "#198266",
          "700": "#146853",
          "800": "#125343",
          "900": "#104438",
          "950": "#082620",
        },
      },
      transitionDuration: {
        "2000": "2000ms",
      },
      keyframes: {
        comeInOut: {
          "0%": { transform: "scale(0)" },
          "50%": { transform: "scale(1)" },
          "100%": { transform: "scale(0)" },
        },
        spin: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(180deg)" },
        },
      },
      animation: {
        comeInOut: "comeInOut 700ms forwards",
        spin: "spin 1000ms linear",
      },
    },
  },
  // tailwind.config.js
  plugins: [],
} satisfies Config;
