/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: rgb(30, 94, 167)
      },
      spacing: {
        '1': '0.25rem',
        '2': '0.5rem',
      },
    },
  },
  plugins: [],
}


