import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#003366",
        "navy-dark": "#002244",
        "navy-mid": "#004080",
        teal: "#008080",
        "teal-hover": "#009999",
        "teal-pale": "#e6f3f3",
        "gray-light": "#f0f2f5",
        muted: "#6b7a8d",
        border: "#dde2ea",
        text: "#3d4f63",
        green: "#1e8a2e",
        "green-light": "#6dc14a",
        "cat-urban": "#6dc14a",
        "cat-architecture": "#a78bfa",
        "cat-structural": "#f9a825",
        "cat-mep": "#4fc3f7",
        "cat-documentation": "#f48fb1"
      },
      fontFamily: {
        head: ["var(--font-head)", "Georgia", "serif"],
        body: ["var(--font-body)", "Arial", "sans-serif"],
        arabic: ["var(--font-arabic)", "Arial", "sans-serif"]
      },
      boxShadow: {
        nav: "0 2px 16px rgba(0,0,0,.25)",
        card: "0 12px 36px rgba(0,51,102,.1)",
        "card-lg": "0 16px 52px rgba(0,51,102,.13)"
      }
    }
  },
  plugins: []
};

export default config;
