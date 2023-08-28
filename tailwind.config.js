/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./src/app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      'heading': '#232323',
      'text': '#222525',
      'primary': '#078080',
      'secondary': '#f45d48',
      'background': '#f8f5f2',
      'white': '#fffffe',
      'stroke': '#232323',
      'yellow': '#F59E0B',
    }
  },
  plugins: [],
}

