/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor : {
        'blue-950': '#001f3f',
        'amber-500': '#FFC107',
        'custom-blue': 'var(--custom-blue)', // Name it whatever you want
        'custom-amber': 'var(--custom-amber)', 
      }
    },
  },
  plugins: [],
}