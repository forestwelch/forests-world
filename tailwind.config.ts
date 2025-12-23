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
          "50": "#f1f8f4",
          "100": "#ddeee2",
          "200": "#bdddc9",
          "300": "#92c3a8",
          "400": "#63a482",
          "500": "#428765",
          "600": "#306b50",
          "700": "#24513d",
          "800": "#204535",
          "900": "#1b392c",
          "950": "#0e2019",
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
