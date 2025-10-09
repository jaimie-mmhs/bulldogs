/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}',
    './public/**/*.html'
  ],
  theme: {
    extend: {
      colors: {
        bulldog: {
          blue: '#003366',
          gold: '#F2C100'
        }
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
};
