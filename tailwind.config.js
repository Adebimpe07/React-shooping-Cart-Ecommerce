/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0px 3px 15px rgba(0, 0, 0, 0.2)',
      }
    },
  },
  plugins: [],
}
