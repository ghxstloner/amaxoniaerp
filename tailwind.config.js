/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    screens: {
      sm: '400px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      fontFamily: {
        "mbf-canno": ["mbf-canno", "sans-serif"],
      },
      colors: {
        blue: {
          50: "#03389A",
          70: "#0044C2",
        },
        gray: {
          10: "#F5F7FA",
          20: "#717171",
          30: "#4D4D4D",
          50: "#263238",
          90: "#18191f",
        },
        neutralSilver: "#F5F7FA",
        neutralDGrey: "#4D4D4D",
        brandPrimary: "#0044C2",
        neutralGrey: "#717171",
        gray900: "#18191f",
        redCard: "#FF0069",
        yellowCard: "#FFA800",
        greenCard: "#00DA3D",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
