/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        donuts: "url(/images/donuts.jpg)",
      },
      colors: {
        egoorange: "#F3EBE8",
        egodorange: "#F3D7CC",
        egopink: "#ff7377",
        egogreen: "#9ed3ba",
      },
      fontSize: {
        "6.5xl": "4rem",
      },
      width: {
        340: "1360px",
      },
      height: {
        140: "560px",
        171: "684px",
      },
    },
  },
  plugins: [],
};
