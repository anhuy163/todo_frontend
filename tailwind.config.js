/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        "50px": "50px",
        "450px": "450px",
        "250px": "250px",
      },
      padding: {
        "50px": "50px",
      },
      width: {
        "450px": "450px",
        "500px": "500px",
      },
      height: {
        "64px": "64px",
      },
      backgroundImage: {},
    },
  },
  plugins: [],
};
