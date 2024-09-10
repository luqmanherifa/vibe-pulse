import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Nunito", ...defaultTheme.fontFamily.sans],
        bricolage: ["Bricolage Grotesque"],
      },
      colors: {
        bee: "#FFC800",
        eel: "#4B4B4B",
        swan: "#E5E5E5",
        humpback: "#2B70C9",
      },
    },
  },
  plugins: [],
};
