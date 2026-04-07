/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          bg: '#FDFBF7',
          cream: '#F4EFE7',
          text: '#142E28',
          terracotta: '#E2725B',
          mustard: '#E1AD01'
        }
      },
      fontFamily: {
        heading: ['"Cormorant Garamond"', 'serif'],
        body: ['"Lora"', 'serif'],
      },
      boxShadow: {
        'warm': '0 4px 20px -2px rgba(226, 114, 91, 0.15)',
        'warm-lg': '0 10px 30px -5px rgba(226, 114, 91, 0.25)',
      }
    },
  },
  plugins: [],
}
