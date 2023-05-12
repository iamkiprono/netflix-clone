/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {

      colors: {
        reddy: "var(--reddy)",
      },
      height: { fullHeight: "var(--fullHeight)" },
    },
  },
  plugins: [],
};
