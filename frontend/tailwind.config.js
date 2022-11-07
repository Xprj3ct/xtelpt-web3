module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./pages/**/*.{js, ts, jsx, tsx}",
    "./components/**/*.{js, ts, jsx, tsx}",
  ],
  theme: {
      fontFamily: {
        "noto": ["noto"],
        "bungee": ["bungee"],
      },
  },
  plugins: [
    require("flowbite/plugin")
  ],
}
