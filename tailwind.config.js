module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        literata: ["var(--font-literata)", "Georgia", "serif"],
      },
      colors: {
        ink: "#1a2e35",
        clay: {
          DEFAULT: "#9b3a1f",
          dark: "#7d2e17",
        },
        ivory: "#fcf9f4",
        muted: "#4a5c61",
        border: "#e0d8cd",
      },
    },
  },
  plugins: [],
};