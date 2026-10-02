/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: { gold: "#B88E2F", cream: "#FFF3E3", beige: "#F9F1E7", ink: "#242424", muted: "#898989", card: "#F4F5F7" },
      fontFamily: { body: ["Poppins", "system-ui", "sans-serif"], display: ["Poppins", "system-ui", "sans-serif"] },
    },
  },
  plugins: [],
};
