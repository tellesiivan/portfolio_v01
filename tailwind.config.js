module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      main: {
        main: "rgb(237, 253, 108)",
        nav: "rgba(29,29,31,0.72)",
        alt: "#ddd",
      },
      text: {
        main: "#ddd",
        dark: "#0d0d16",
      },
    },
  },
  plugins: [],
};
