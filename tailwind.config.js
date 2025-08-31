/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "body-text": "var(--body-text)",
        heading: "var(--heading)",
        "main-blue": "var(--main-blue)",
        "main-green": "var(--main-green)"
      },
      boxShadow: {
        "blur-in-dark-bg": "var(--blur-in-dark-bg)",
        icon: "var(--icon)",
        "shadow-1": "var(--shadow-1)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    container: {
      center: true,
      screens: {
        DEFAULT: "1280px", // set fixed max-width
      },
    },
  },
  plugins: [],
};




