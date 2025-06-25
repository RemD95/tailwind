/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: '#2757a9',
        btnbg: '#9927a9',
      },
      spacing: {
        '1': '0.25rem',
        '2': '0.5rem',
      },
    },
  },
  plugins: [],
}


