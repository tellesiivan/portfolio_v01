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
        main: "#050606",
        nav: "#26373770",
        darkLight: "#181c1c",
        dark: "#000",
        accentDark: "#272727",
        alt: "#ddd",
        brightGreen: "#0affb4",
      },
      text: {
        white: "#fff",
        main: "#ddd",
        dark: "#0d0d16",
        grey: "#a4a4a4",
      },
      common: {
        wht: "#fff",
        blk: "#000",
      },
    },
  },
  plugins: [],
};
