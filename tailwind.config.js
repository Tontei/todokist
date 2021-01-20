module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        first: '#F1AA9B',
        second: '#F0C38E',
        third: '#48426D',
        fourth: '#C4C4C4'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
