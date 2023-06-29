/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "desktop-dark": "url('.src/assets/bg-desktop-dark.jpg')",
        "desktop-light": "url('.src/assets/bg-desktop-light.jpg')",
        "mobile-dark": "url('.src/assets/bg-mobile-dark.jpg')",
        "mobile-light": "url('./src/assets/bg-mobile-light.jpg')",
        "todo-img": "url('./src/assets/TODO.jpg')",
      },
      fontFamily: {
        "Josefin Sans": ["Josefin Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
