/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      anton: ['Anton', 'sans'],
      quicksand: ['Quicksand', 'sans'],
      bebas: ['Bebas Neue', 'sans'],
      abril: ['Abril Fatface', 'sans'],
      caveat: ['Caveat', 'sans']
    },
    extend: {
      colors: {
        'home': '#2C3333',
        'headings': '#CDBE78',
        'subheadings': '#F2F2F2',
        'accent': '#557C55',
        'paragraphs': '#A6CF98'
      }
    },
  },
  plugins: [],
}
