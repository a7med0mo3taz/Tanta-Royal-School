/** @type {import('tailwindcss').Config} */
import rtl from 'tailwindcss-rtl'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    'lg:col-span-1', 'lg:col-span-2', 'lg:col-span-3', 'lg:col-span-4',
    'lg:row-span-1', 'lg:row-span-2', 'lg:row-span-3',
  ],
  theme: {
    extend: {
      fontFamily: {
        almarai: ['Almarai', 'sans-serif'],
        tajawal: ['Tajawal', 'sans-serif'],
      },
      keyframes: {
        wordLoop: {
          '0%, 20%': { opacity: '1', transform: 'translateY(0)' },
          '25%, 95%': { opacity: '0', transform: 'translateY(-100%)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        wordLoop: 'wordLoop 6s linear infinite',
      },
    },
  },
  plugins: [
    rtl(),
  ],
}
