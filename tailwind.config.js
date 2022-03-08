module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Karla: ["Karla", "sans - serif"],
      },
    },
    colors: {
      main: {
        main: "rgb(237, 253, 108)",
        nav: "rgba(29,29,31,0.72)",
        darkLight: "#32323229",
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
