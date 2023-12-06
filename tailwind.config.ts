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
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        "ring-glow": {
          "50%": {
            boxShadow: "0 0 0 0.75rem rgba(255, 102, 102, 0.2)",
          },
          "0%, 60%": {
            boxShadow: "0 0 0 0 rgba(0, 0, 0, 0)",
          },

          "52%": {
            boxShadow: "0 0 0 0.75rem rgba(255, 102, 102, 0.1)",
          },
          "2%": {
            boxShadow: "0 0 0 0.25rem rgba(255, 102, 102, 1)",
          },
        },
      },
      animation: {
        "ring-glow":
          "ring-glow 1.8s cubic-bezier(0.45, 0.05, 0.55, 0.95) infinite",
      },
    },
  },
  plugins: [],
};
export default config;
