module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
      },
      gridTemplateColumns: {
        '12': 'repeat(12, minmax(0, 1fr))'
      }
    },
  },
  plugins: [],
}