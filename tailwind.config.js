/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        scary: "'Creepster', sans-serif",
      },
      colors: {
        lime: "#34F924",
      },
    },
    backgroundImage: {
      hand: "url('/images/hand.jpg')",
    },
  },
  plugins: [],
};
