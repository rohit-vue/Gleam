import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        alliance: ['"Alliance No.2"', "ui-sans-serif", "system-ui", "sans-serif"],
        "britanica-black": [
          "Britanica Black",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
        "baloo-2": ["var(--font-baloo-2)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      keyframes: {
        /** One “loop” = 1/10 of total track width (10 identical segments). */
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-10%)" },
        },
        /** Enter from the left; `both` keeps 0% opacity/transform before start. */
        "slide-in-ltr": {
          "0%": { opacity: "0", transform: "translateX(calc(-100vw - 2rem))" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
      animation: {
        marquee: "marquee 50s linear infinite",
        "slide-in-ltr": "slide-in-ltr 2s cubic-bezier(0.22, 1, 0.36, 1) both",
      },
    },
  },
  plugins: [],
};
export default config;
