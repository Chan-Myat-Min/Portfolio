/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'kayan': '#A020F0',
      'black': '#3A3845',
      'white':'#fff'
    },
  },
  plugins: [],
}
