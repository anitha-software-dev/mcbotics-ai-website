/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#000000',
        accent: '#0A0A0A',
        card: '#111111',
        outline: '#262626',
        main: '#FFFFFF',
        dim: '#A3A3A3',
        muted: '#737373',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
