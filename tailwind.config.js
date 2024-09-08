/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      boxShadow: {
        'blue-shadow': '0 0 60px 0 rgba(0,118,255,0.4)',
      },

      boxShadow: {
        'dark-blue-shadow': '0 0 60px 0 rgba(0,118,255,0.4)',
      },

    },
  },
  plugins: [
    require('daisyui'),
  ],
}

