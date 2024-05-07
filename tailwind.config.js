/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        hoverColor: "#324047",
        brightColor: "#f0f3fc",
        backgroundColor: "#00cece",
        buttonColor: "#ff5956",
        headingColor: "#14213d",
      },
    },
  },
  plugins: [],
};
