/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        carbon: '#0a0a0a',
        sand: '#b79d82',
        clay: '#8f6f5d',
        smoke: '#1a1a1a',
        frost: '#f5f5f5'
      },
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
        display: ['Syne', 'sans-serif']
      },
      boxShadow: {
        luxe: '0 20px 60px rgba(0,0,0,0.4)'
      }
    }
  },
  plugins: []
};
