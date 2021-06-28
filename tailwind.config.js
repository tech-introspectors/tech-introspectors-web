module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
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
      boxShadow: {
        "lb-xl": "-5px 10px 20px rgba(14,165,233,0.3)",
        "lb-2xl": "0 20px 25px -5px rgba(14,165,233,0.3)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
