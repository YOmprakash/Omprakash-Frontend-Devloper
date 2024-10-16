/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      
      fontFamily: {
        spaceGrotesk: ['"Space Grotesk"', 'sans-serif'],
      },
      backgroundImage: {
        'custom-radial': 'radial-gradient(circle, var(--color-white-solid, #011C24), var(--color-cyan-6, #011C29))',
      },
    },
  },
  plugins: [],
}