/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ["./dist/*.{html,js}"],
   theme: {
      screens: {
         sm: "480px",
         md: "768px",
         lg: "976px",
         xl: "1440px",
      },

      colors: {
         clifford: "#CFCAD7",
         mint: "#005B40",
         orange: "#FFD300", //accent color
         brown: "#B3AA99",
      },

      extend: {
         fontFamily: {
            // titles
            Copse: ["Copse", "serif"],
            // sub titles
            // italic
            Delius: ["Delius Swash Caps", "cursive"],
            // paragraph
            Mukta: ["Mukta Vaani", "sans-serif"],
         },
      },
   },
   plugins: [],
};
