/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'White-blue': '#5BC0E6 ',
        'basic': '#F6F1F1 ',
        'dark-blue': '#1B2B58 ',
        'bblue': '#146C94 ',
      }
    },
  },
  plugins: [],
}
