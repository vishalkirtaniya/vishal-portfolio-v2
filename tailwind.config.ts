/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        l5: {
          "0%": { inset: "0 35px 35px 0" },
          "12.5%": { inset: "0 35px 0 0" },
          "25%": { inset: "35px 35px 0 0" },
          "37.5%": { inset: "35px 0 0 0" },
          "50%": { inset: "35px 0 0 35px" },
          "62.5%": { inset: "0 0 0 35px" },
          "75%": { inset: "0 0 35px 35px" },
          "87.5%": { inset: "0 0 35px 0" },
          "100%": { inset: "0 35px 35px 0" },
        },
      },
      animation: {
        l5: "l5 2.5s infinite",
      },
      fontFamily: {
        montserret: ['"Montserret"', "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundColor: {
        bgblack: "#0C0C0C",
        bgwhite: "#FFFFFF",
        bgblue: "#0F33FF",
      },
      screens: {
        xxs: "350px",
        xs: "450px",
        ...defaultTheme.screens,
      },
      colors: {
        "custom-gradient-start": "#FFFFFF",
        "custom-gradient-end": "#0F33FF",
        bgblack: "#0c0c0c8a",
        bgwhite: "#ffffffdc",
        bgblue: "#0F33FF",
        customGrey: "#555658",
        linkedinblue: "#0077B5",
        githubblack: "#2b3137",
        aboutbg: "#FAFBF3",
      },
    },
  },
  plugins: [],
};
