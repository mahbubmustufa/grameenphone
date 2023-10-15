/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brightRed: 'hsl(12, 88%, 59%)',
        brightRedLight: 'hsl(12, 88%, 69%)',
        brightRedSupLight: 'hsl(12, 88%, 95%)',
        darkBlue: 'hsl(228, 39% 23%)',
        darkGrayisBlue: 'hsl(227, 12%, 61%)',
        varyDarkBlue: 'hsl(233, 12%, 13%)',
        varyLigntGray: 'hsl(0, 0%, 90%)',
      },
    },
  },
  plugins: [],
}