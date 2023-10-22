module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nunito: ["var(--font-nunito)"],
        mono: ["var(--font-roboto-mono)"],
      },
      backgroundImage: {
        joker: "url('../app/assets/Joker-image.jpg')",
      },
      // Custom animations
      keyframes: {
        "gradient-animation": {
          "0%, 100%": {
            background: "linear-gradient(90deg, #ff0000, #00ff00, #0000ff)",
          },
          "50%": {
            background: "linear-gradient(90deg, #0000ff, #ff0000, #00ff00)",
          },
        },
        "color-change": {
          "0%, 100%": {
            color: "#ff0000",
          },
          "50%": {
            color: "#00ff00",
          },
        },
        "shadow-pulse": {
          "0%, 100%": {
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
          },
          "50%": {
            boxShadow: "0 0 20px rgba(0, 0, 0, 0.4)",
          },
        },
      },
      animation: {
        gradient: "gradient-animation 3s linear infinite",
        color: "color-change 2s ease-in-out infinite",
        shadow: "shadow-pulse 1s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
