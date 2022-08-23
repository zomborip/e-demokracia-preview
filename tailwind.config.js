/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        //első szett
        "butter": "#FFFFD2",
        "light-purple-300": "#AA96DA",
        "light-purple-200": "#c2b4e4",
        "light-purple-100": "#e1d9f2",
        "light-purple-50": "#f0ecf8",
        "mint-300": "#a1f7bb",
        "mint-200": "#C5FAD5",
        "mint-100": "#e8fdee",
        //második szett
        "black-brown-300": "#201E20",
        "black-brown-200": "#353135",
        "black-brown-100": "#696369",
        "beige-300": "#cea87e",
        "beige-200": "#DDC3A5",
        "beige-100": "#f1e6da",
        "tan-300": "#E0A96D",
        "tan-200": "#edcdab",
        "tan-100": "#fbf3ea",
      }
    },
  },
  plugins: [],
};
