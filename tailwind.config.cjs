/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        'fira': ['Fira Code', 'sans-serif'],
      },
      colors: {
        'darkGray': '#2C2C3C',
        'lightGray': '#7C808D',
        'lightGreen': '#70D4BE',
        'green': '#0AA484',
      }
    }, 
  },
  plugins: [],
}
