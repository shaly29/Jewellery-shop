/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // Primary brand color — X Dream Jewellery rose/raspberry pink (#c73051)
        wine: {
          DEFAULT: "#c73051",
          50: "#FBEEF1",
          100: "#F3CFD8",
          400: "#D65977",
          500: "#c73051",
          600: "#A22841",
          700: "#7C1F32",
          900: "#4A1220",
        },
        // Secondary brand color — X Dream Jewellery gold (#d5aa5c)
        gold: {
          DEFAULT: "#d5aa5c",
          light: "#E7C88C",
          dark: "#B98A3C",
        },
        blush: "#FBEEF1",
        cream: "#FDF8F3",
        ink: "#2B0F17",
      },
      fontFamily: {
        display: ["'Playfair Display'", "serif"],
        script: ["'Great Vibes'", "cursive"],
        body: ["'Jost'", "sans-serif"],
      },
      boxShadow: {
        soft: "0 10px 40px -14px rgba(199, 48, 81, 0.35)",
        card: "0 8px 26px -12px rgba(199, 48, 81, 0.25)",
        glow: "0 0 0 1px rgba(213, 170, 92, 0.25), 0 20px 50px -18px rgba(199, 48, 81, 0.5)",
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