/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      'nav1': { 'max': '400px' },
      'nav2': { 'max': '1280px' },
      'nav2-2': { 'max': '1000px' },
      'nav3': { 'max': '600px' },
      'buttonContent': { 'max': '768px' },
      'LargeScreenContent': { 'min': '541px' },
      'SmallScreenContent': { 'max': '540px' },
    },
    extend: {},
  },
  plugins: [],
}

