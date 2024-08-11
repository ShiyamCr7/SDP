/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src//*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6c5ce7',
        secondary: '#00cec9',
        accent: '#ff7675',
      },
    },
  },
  plugins: [],
}