/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extends: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      primary: {
        cyan: 'hsl(193, 38%, 86%)',
        green: 'hsl(150, 100%, 66%)',
      },
      neutral: {
        grayblue: 'hsl(217, 19%, 38%)',
        darkGrayBlue: 'hsl(217, 19%, 24%)',
        darkBlue: 'hsl(218, 23%, 16%)',
      },
    },
    fontFamily: {
      manrope: ['Manrope', 'sans-serif']
    },
    boxShadow: {
      glow: '0 0 35px rgb(81 255 168)',
    }
  },
}
