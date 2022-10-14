/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    extend: {
      colors: {
        'transparent': 'transparent',
        'black': "#000",
        'white': '#fff',

        gray: {
          100: '#121214',
          200: '#C4C4CC',
          400: '#7C7C8A',
          700: '#202024',
          900: '#121214',
        },
        
        cyan: {
          300: '#A1EBFF',
          500: '#61DAFB',
        }
      },
      fontSize: {
        'xs': 12,
        'sm': 14,
        'md': 16,
        'lg': 20,
        'xl': 24,
        '2xl': 32
      },
      fontFamily: {
        sans: 'Inter, sans-serif'
      }
    },
  },
  plugins: [],
}
