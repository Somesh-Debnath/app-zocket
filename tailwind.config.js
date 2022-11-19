/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {'Eudoxus': ['Eudoxus', 'sans-serif'],
    'Gilroy': ['Gilroy', 'sans-serif'],},

      colors:{
        'blue-hover':'rgba(25, 119, 243, 0.1)',
      }
        
    },
  },
  plugins: [],
}