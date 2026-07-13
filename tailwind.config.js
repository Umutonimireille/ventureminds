/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          black: '#0A0A0A',
          darkBg: '#0d1a24',
          blue: '#1E7FBF',
          lightBlue: '#2a9fd8',
          green: '#2E9E44',
          lightGreen: '#3db855',
          orange: '#F2932E',
          lightOrange: '#f5a844',
          red: '#C0392B',
          gold: '#F2B807',
          lightGold: '#f5c93c',
          gray: '#3A3A3A',
          lightGray: '#4a4a4a',
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
