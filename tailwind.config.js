module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        'chakra-petch': ['"Chakra Petch"', 'sans-serif'],
      },
      colors: {
        'primary-blue': '#121A6A',
        'secondary-blue': '#2b6cb0',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
