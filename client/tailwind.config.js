/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light-text': '#000000', // Black text for light mode
        'dark-text': '#ffffff',  // White text for dark mode
      },
    },
  },
  darkMode: ['class', '[data-theme="night"]'], // Allow switching based on class or data-theme attribute
  plugins: [require('daisyui')],
  daisyui: {
    themes: ["cupcake", "night"], // Specify 'cupcake' as light and 'night' as dark
  },
};
