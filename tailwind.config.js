/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          black: '#0A0A0A',
          blue: '#1E7FBF',
          green: '#2E9E44',
          orange: '#F2932E',
          red: '#C0392B',
          gray: '#3A3A3A',
          gold: '#F2B807',
          white: '#FFFFFF',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.2em',
      },
    },
  },
  plugins: [],
}
