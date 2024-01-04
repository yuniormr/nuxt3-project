/** @type {import("tailwindcss").Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto"],
        robotoSlab: ["Roboto Slab"],
      },
      colors: {
        primary: {
          500: "#0f69b4", //Default
          900: "#12579d", // Dark
        },
        dark: {
          500: "#272727", //Default
        },
        danger: {
          100: "#ffecec",
          500: "#da343a",
          900: "#c5262c",
        },
        success: {
          100:"#F3FFEF",
          500: "#2b822b", //Default
        },
        warning: {
          500: "#fc0", //Default
        },
        cyan: {
          500: '#f1f8ff', //Default
        }
      },
    },
  },
  plugins: [],
};
