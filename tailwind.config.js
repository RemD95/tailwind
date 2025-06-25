/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
  darkMode:'class',
  theme: {
    extend: {
      colors: {
        primary: '#2757a9',
        btnbg: '#9927a9',
        btntxt:'#c90076',
        brdbg:'#2cb3c7'
      },
      spacing: {
        '1': '0.25rem',
        '2': '0.5rem',
      },
      fontFamily: {
        'xxl': '2rem'
      }
    },
  },
  plugins: [],
}


