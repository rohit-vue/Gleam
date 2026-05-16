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
        sans: ["Helvetica Neue Regular", "Helvetica Neue", "Arial", "sans-serif"],
        "helvetica-neue-regular": [
          "Helvetica Neue Regular",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
        alliance: ["var(--font-alliance)", "ui-sans-serif", "system-ui", "sans-serif"],
        /** Local @font-face in `globals.css` — `public/fonts/Alliance No.2 Regular.woff2`. */
        "alliance-no-2": ["var(--font-alliance-no-2)"],
        /** Local @font-face in `globals.css` — `public/fonts/britanica-black.woff2`. */
        "britanica-black": ["var(--font-britanica-black)"],
        "baloo-2": ["var(--font-baloo-2)", "ui-sans-serif", "system-ui", "sans-serif"],
        "dm-sans": ["var(--font-dm-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        "space-mono": ["var(--font-space-mono)", "ui-monospace", "monospace"],
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
