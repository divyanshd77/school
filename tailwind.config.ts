import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1B3A6B",
          light: "#2952A3",
        },
        accent: {
          DEFAULT: "#E8A020",
          light: "#F5C842",
        },
        offwhite: "#F8F6F0",
        dark: "#0D1B2A",
      },
      fontFamily: {
        display: ["var(--font-playfair)", "ui-serif", "Georgia", "serif"],
        sans: ["var(--font-dm-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-dm-mono)", "ui-monospace", "monospace"],
      },
      maxWidth: {
        content: "1280px",
      },
      boxShadow: {
        card: "0 4px 24px rgba(27, 58, 107, 0.08)",
      },
      borderRadius: {
        card: "16px",
        btn: "8px",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
