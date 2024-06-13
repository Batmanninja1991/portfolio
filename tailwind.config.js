/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#a37c40",
        secondary: "#98473e",
        accent: "#b49082",
        light: "#d6c3c9",
        text: "#07090f",
      },
      fontFamily: {
        futura: ['Futura', 'sans-serif'],
        proxima: ['Proxima Nova', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
