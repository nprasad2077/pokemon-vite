/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,tsx,jsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui"),require("@tailwindcss/typography")],
  daisyui: {
    themes: ["emerald"]
  },
}
