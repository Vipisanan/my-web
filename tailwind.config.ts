/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // This stops Tailwind from auto-switching themes
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#1E40AF", // Custom Blue
        secondary: "#9333EA", // Custom Purple
        danger: "#DC2626", // Custom Red
        success: "#16A34A", // Custom Green

        bgDarkPrimary: "#44403c",
        bgDarkSecondary: "",

        bgLightPrimary: "#ffffff",
        bgLightSecondary: "#efefef",

        fontDarkPrimary: "#393737",
        fontDarkSecondary: "",
        fontLightPrimary: "#efefef",
        fontLightSecondary: "",
      },
    },
  },
  plugins: [],
};
