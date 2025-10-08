/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,html}", // pastikan .css tidak ada di sini
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
