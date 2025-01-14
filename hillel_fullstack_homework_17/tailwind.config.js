/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        color__main: "#FF6336",
        color__main__dark: "#B93811",
        color__main__light: "#FF9C7D",
        color__minor: "#DABC98",
        color__minor__light: "#FFF8E4",
        color__additional: "#C9E8F2",
        color__extra: "#eeeeee",
      },
    },
  },
  plugins: [],
}

