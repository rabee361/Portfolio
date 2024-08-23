/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      boxShadow: {
        'blue-shadow': '0 0 60px 0 rgba(0,118,255,0.4)',
      }
      // backgroundImage: {
      //   'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      //   'gradient-conic': 'conic-gradient(var(--tw-gradient-stops))',
      // },
      // colors: {
      //   black: {
      //     500: '#28282B',
      //   },
      // }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

