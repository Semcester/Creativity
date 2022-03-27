module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      mobilexs: "320px",
      mobileS: "375px",
      mobile: "390px",
      tablet: "768px",
      laptop: "1024px",
      desktop: "1280px",
      wideDesktop: "1440px",
    },
    extend: {
      fontFamily: {
        Poppins: ["Poppins"],
      },
      backgroundImage: {
        "hero-pattern": "url('../public/images/HeroBG.png')",
      },
      colors: {
        bg: "#262F56",
        bgGradient: "#171A27",
        brand: "#F52F6E",
        footer: "#1E212C",
      },
      maxWidth: {
        1230: "77rem",
        1080: "67rem",
      },
      height: {
        547: "34rem",
        500: "31rem",
        450: "28rem",
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
}
