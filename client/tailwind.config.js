export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        gradient: "gradientMove 8s ease-in-out infinite",
      },
      keyframes: {
        gradientMove: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      fontFamily : {
        slab: ['"Alfa Slab One"', "cursive"],
        lexend: ['"Lexend"', "cursive"],
        bodoni: ['"Bodoni Moda', "cursive"]
      }
    },
  },
  plugins: [],
};
