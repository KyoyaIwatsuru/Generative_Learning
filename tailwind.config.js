/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./renderer/pages/**/*.{js,ts,jsx,tsx}",
    "./renderer/components/**/*.{js,ts,jsx,tsx}",
    "./renderer/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        button: {
          home: "#2db8a9",
          homeHover: "#20857b",
          next: "#222222",
          nextHover: "#444444",
        },
      },
      height: {
        header: '10%',
        footer: '10%',
        body: '80%',
      },
    },
  },
  plugins: [],
});
