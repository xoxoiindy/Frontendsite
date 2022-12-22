/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      'red': '#8b3047'
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
