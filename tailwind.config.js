/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "desktop-dark": "url('/.src/assets/bg-desktop-dark.jpg')",
        "desktop-light": "url('/.src/assets/bg-desktop-light.jpg')",
        "mobile-dark": "url('./src/assets/bg-mobile-dark.jpg')",
        "mobile-light": "url('./src/assets/bg-mobile-light.jpg')",
        "todo-img": "url('./src/assets/TODO.jpg')",
      },
      boxShadow: {
        "3xl": "0px 35px 50px -15px rgba(194, 195, 214, 0.50);",
      },

      colors: {
        "input-back": "#25273D",
        customGrayishBlue: "#9495A5",
        customBack: "#FAFAFA",
        textColor: "#5B5E7E",
        textLight: "#9495A5",
      },

      fontFamily: {
        "Josefin Sans": ["Josefin Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
