/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        'Light-Cyan': 'hsl(193, 38%, 86%)',
        'Neon-Green': 'hsl(150, 100%, 66%)',
        'Grayish-Blue': 'hsl(217, 19%, 38%)',
        'Dark-Grayish-Blue': 'hsl(217, 19%, 24%)',
        'Dark-Blue': 'hsl(218, 23%, 16%)',
      },
      fontFamily: {
        "Monrope": ['Monrope', 'sans-serif']
      },
      boxShadow: {
        'glow-neon-green': '0 0  30px rgba(0, 255, 0, 0.5)', 
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
