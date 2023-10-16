/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom': 'url("/assets/Header.png")',
      },
      borderRadius:{
        '3xl':'3.125rem'
      },
      boxShadow: {
        '3xl': '0px 4px 50px 0px rgba(51, 57, 91, 0.20)',
      },
      screens:{
        '2xl': '1512px',
      }
    },
  },
  plugins: [],
}

