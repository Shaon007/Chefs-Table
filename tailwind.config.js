/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
const daisyui = require('daisyui');

// eslint-disable-next-line no-undef
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
};
