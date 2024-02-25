/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.html"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },

    extend: {
      colors: {
        picBlack: "#080c0b",
      },
      animation: {
        "spin-slow": "spin 8s linear infinite",
        "ping-slow": "ping 1.3s ease-in-out infinite ",
      },
    },
  },
  plugins: [],
};
