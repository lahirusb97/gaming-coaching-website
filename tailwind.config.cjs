/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bgShade: "#17171E",
        mainellow: "#FFE600",
        customBlue: "#0000ff",
      },
      width: {
        "w-500": "500px",
      },
    },
  },
  plugins: [],
};
