module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'scarlet': '#DB592A',
        'black': '#0F0F0F',
        'petrol': '#16878C',
        'asphalt': '#323232',
        'ocra': '#FFB216',
        'snow': '#fcfcfc',
      },
      gridTemplateColumns: {
        '12': 'repeat(12, minmax(0, 1fr))'
      }
    },
  },
  plugins: [],
}