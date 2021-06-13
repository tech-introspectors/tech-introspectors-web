const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primaryblue: "#022F47",
        secondaryblue: "#0EA5E9",
        secondarylightblue: "#14CDDB",
        primarytextcolor: "#707070",
        secondarytextcolor: "#A5B4BC",
      },
      fontFamily: {
        sans: ["Open Sans", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
