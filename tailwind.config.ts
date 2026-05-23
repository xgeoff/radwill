import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#1c2421",
        forest: "#123629",
        emerald: "#1b4a38",
        brass: "#b5964a",
        ivory: "#f4efe4",
        parchment: "#e9e0cf",
        marble: "#faf8f2",
        slate: "#5f665f",
      },
      fontFamily: {
        serif: ["Iowan Old Style", "Palatino Linotype", "Book Antiqua", "Georgia", "serif"],
        sans: ["Avenir Next", "Segoe UI", "Helvetica Neue", "Arial", "sans-serif"],
      },
      boxShadow: {
        card: "0 24px 60px rgba(18, 33, 28, 0.08)",
      },
      backgroundImage: {
        "marble-grid":
          "radial-gradient(circle at top left, rgba(181, 150, 74, 0.12), transparent 28%), linear-gradient(120deg, rgba(255,255,255,0.8), rgba(244,239,228,0.95))",
      },
      animation: {
        "fade-up": "fadeUp 0.8s ease-out both",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
