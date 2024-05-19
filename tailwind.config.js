/** @type {import('tailwindcss').Config} */
const tailwindTheme = require("./theme");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    tailwindTheme,
  },
  plugins: [],
};
