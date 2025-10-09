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
          orange: '#E65F0F',
          black: '#000000'
        }
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
};
