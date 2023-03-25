/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#60bc0f",
        secondary: "#00f6ff",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      width: {
        '90': '22.5rem',
      }
    },
    screens: {
      xs: {max: "480px"},
      ss: {max: "620px"},
      sm: {max: "768px"},
      md: {max: "1060px"},
      lg: {max: "1200px"},
      xl: {max: "1700px"},
    },
  },
  plugins: [],
};