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
        nav: "#3f3f3f70",
        darkLight: "#181c1c",
        dark: "#000",
        accentDark: "#68686826",
        alt: "#ddd",
        brightGreen: "#0affb4",
        borderC: "#1c1c1c",
        flow: "#1f2938",
      },
      text: {
        white: "#fff",
        main: "#ddd",
        dark: "#0d0d16",
        grey: "#a4a4a4",
      },
      common: {
        wht: "#fff",
        btnFill: "#212121",
        blk: "#000",
        gold: "#ffe435",
        blue: "#1954ff",
      },
      status: {
        pending: "#ffe435",
        active: "#0affb4",
        inactive: "#ea4c89",
      },
    },
  },
  plugins: [],
};
