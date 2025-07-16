// tailwind.config.js
const plugin = require("tailwind-scrollbar-hide");

module.exports = {
  content: [
    // все ваши страницы и компоненты под src
    "./src/**/*.{js,jsx,ts,tsx}",
    // отдельно можно уточнить админку
    "./src/pages/Admin/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        popIn: {
          "0%": { transform: "scale(0)", opacity: "0" },
          "60%": { transform: "scale(1.2)", opacity: "1" },
          "100%": { transform: "scale(1)" },
        },
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out forwards",
        "pop-in": "popIn 0.4s ease-out forwards",
      },
    },
  },
  plugins: [
    plugin,
    // другие плагины...
  ],
};
