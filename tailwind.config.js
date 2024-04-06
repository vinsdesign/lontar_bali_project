/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,vue}'],
  theme: {
    extend: {
      fontFamily: {
        montsBold: 'Montserrat-Bold, sans-serif',
        montsSemiBold: 'Montserrat-SemiBold, sans-serif',
        montsMedium: 'Montserrat-Medium, sans-serif',
        montsItalic: 'Montserrat-Italic, sans-serif',
        montserrat: 'Montserrat-Regular, sans-serif' // Adds a new `font-display` class
      }
    }
  },
  plugins: []
}
