/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "3xl": "0px 35px 50px -15px rgba(194, 195, 214, 0.50);",
      },

      colors: {
        "input-back": "#25273D",
        customGrayishBlue: "#9495A5",
        customBack: "#FAFAFA",
        textColor: "#5B5E7E",
        textLight: "#9495A5",

        background: "#171823;",
        "text-color": "#767992",
        textdark: "#C8CBE7",
        borderColor: "#393A4B",
      },

      fontFamily: {
        "Josefin Sans": ["Josefin Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
