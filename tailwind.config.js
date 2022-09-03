/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode:'class',
  theme: {
    extend: {
      boxShadow : {
        primary : '0px 8px 24px rgba(287, 185, 150, 0.3)', dark : '0px 8px 24px rgba(234, 124, 105, 0.32)'
      }
    },
  },
  plugins: [],
}
