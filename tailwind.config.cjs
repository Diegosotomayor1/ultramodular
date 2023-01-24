/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        greenmodular: '#60D300'
      },
      fontFamily: {
        LemonMilk: ['LemonMilk']
      }
    }
  },
  plugins: []
}
