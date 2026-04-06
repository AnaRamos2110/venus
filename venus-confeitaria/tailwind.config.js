/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        wine: '#AA1F64',
        'soft-pink': '#FFF0FA',
      },
    },
  },
  plugins: [],
}