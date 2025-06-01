/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        byway_yellow: "#FEC84B",
        byway_text_gray: "#334155",
        byway_blue: "#2563EB",
        byway_green: "#16A34A",
        byway_black: "#020617",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
