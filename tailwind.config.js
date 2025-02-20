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
        'blue-shadow': '0 0 60px 0 rgb(32, 30, 67,0.4)',
        'dark-blue-shadow': '0 0 60px 0 rgba(0,118,255,0.4)',
      },
      keyframes: {
        'neon-pulse': {
          '0%, 100%': {
            boxShadow: '0 0 10px rgba(80,140,155,0.3), 0 0 20px rgba(19,75,112,0.2), 0 0 30px rgba(32,30,67,0.1)',
          },
          '50%': {
            boxShadow: '0 0 20px rgba(80,140,155,0.4), 0 0 40px rgba(19,75,112,0.3), 0 0 60px rgba(32,30,67,0.2)',
          }
        }
      },
      animation: {
        'neon-pulse': 'neon-pulse 2s ease-in-out infinite',
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

