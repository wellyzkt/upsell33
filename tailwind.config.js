/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        red: {
          500: '#FF0000',
          600: '#FF0000',
          700: '#FF0000',
          800: '#FF0000',
          900: '#FF0000',
        },
        yellow: {
          500: '#FFD700',
          600: '#E6C200',
        },
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
};