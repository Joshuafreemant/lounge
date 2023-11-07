/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'background': "url('/banner.webp')",
        'festive': "url('/lumiere.png')",
        'formules': "url('/prestation.png')",
        'photos': "url('/photos.png')",
      },
      
    },
  },
  plugins: [],
}
