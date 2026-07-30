/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Clash Display', 'sans-serif'],
        sans: ['General Sans', 'sans-serif'],
        body: ['General Sans', 'sans-serif'],
      },
      colors: {
        graphite: '#0B0C0E',
        bone: '#F4EFE6',
        copper: '#D9642C',
        accent: '#D9642C',
      },
    },
  },
  plugins: [],
}
