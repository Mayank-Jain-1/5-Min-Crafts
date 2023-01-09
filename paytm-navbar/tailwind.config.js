/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  safelist: [
    {
      pattern: /(w|bg|h)-./,
    },
  ],
  theme: {
    extend: {
      colors: {
        'skyBlue': "#00baf2",
        'darkBlue': "#002970",
      },
    },
  },
  plugins: [],
};
