/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Active le mode dark avec la classe .dark sur <html>
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './nuxt.config.{js,ts}'
  ],
  theme: {
    extend: {
      fontFamily: {
        aboreto: ['Aboreto', 'sans-serif'],
        ivyOra: ['IvyOra Display', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
