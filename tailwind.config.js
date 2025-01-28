/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#0a0a0a',
        'bg-secondary': '#1a1a1a',
        'text-primary': '#ffffff',
        'text-secondary': '#a0a0a0',
        'accent': '#7000FF',
        'accent-hover': '#8929ff',
      },
    },
  },
  plugins: [],
}