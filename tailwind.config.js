/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'Verdana': '#00C83C',
        'grays-100': '#3F3F3F',
        'grays-101': '#E2E2E2',
        'custom-black': '#3F3F3F',
        'custom-blue': '#A5D7E1',
        'custom-green': '#95DBB7',
        'custom-blue': '#C0F3FF',
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'Verdana': ['Verdana', 'sans-serif']
      },
    },
  },
  plugins: [],
}
