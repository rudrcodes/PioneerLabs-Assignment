/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var( - tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var( - tw-gradient-stops))",
      },
      fontFamily: {
        DM: ["DM Sans", "sans-serif"],
        Roboto: ["Roboto", "Poppins"],
      },
    },
  },
  plugins: [],
};
