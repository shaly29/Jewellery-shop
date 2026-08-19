/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        wine: {
          DEFAULT: "#3B0E2E",
          50: "#F6ECF1",
          100: "#E7CBDA",
          400: "#5C1F49",
          500: "#3B0E2E",
          600: "#2C0A22",
          700: "#1F0718",
          900: "#150410",
        },
        gold: {
          DEFAULT: "#C9A253",
          light: "#E4CD93",
          dark: "#A8813C",
        },
        blush: "#F8ECE6",
        cream: "#FDF8F3",
        ink: "#241016",
      },
      fontFamily: {
        display: ["'Playfair Display'", "serif"],
        script: ["'Great Vibes'", "cursive"],
        body: ["'Jost'", "sans-serif"],
      },
      boxShadow: {
        soft: "0 10px 40px -14px rgba(59, 14, 46, 0.35)",
        card: "0 8px 26px -12px rgba(59, 14, 46, 0.25)",
        glow: "0 0 0 1px rgba(201, 162, 83, 0.25), 0 20px 50px -18px rgba(59, 14, 46, 0.5)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "float 8s ease-in-out infinite",
        "spin-slow": "spin 14s linear infinite",
        shimmer: "shimmer 2.6s linear infinite",
        marquee: "marquee 26s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      maxWidth: {
        "8xl": "90rem",
      },
    },
  },
  plugins: [],
};