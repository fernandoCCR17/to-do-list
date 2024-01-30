/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html", "./src/**/*.jsx"],
  theme: {
    extend: {
      maxWidth: {
        '128': '32rem',
        '142': '42rem',
        '180': '70rem',
      }
    },
  },
  plugins: [],
}

