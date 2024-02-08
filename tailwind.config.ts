import { fontFamily } from 'tailwindcss/defaultTheme';
import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        "primary": "#01FE86",
        "reddish": "#D0021B",

        "dark-100": "#0E131B",
        "dark-200": "#121C23",
        "dark-300": "#121B21",
        "dark-400": "#080D10",
        "dark-500": "#0C0D0F",
        "dark-600": "#16222A",


        "light-100": "#9293A6",

        "white-3": "#ffffff08",
        "white-4": "#ffffff0a",
        "white-8": "#FFFFFF23",
        "white-12": "#FFFFFF33",

        "blue-10": "#534FFF2D",
        "blue-20": "#534FFF54",
        "blue-40": "#534FFF66",
      },
      fontFamily: {
        inter: ["var(--font-inter)", ...fontFamily.sans],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config