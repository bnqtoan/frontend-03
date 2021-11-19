module.exports = {
  mode: 'jit',
  purge: [
    "**/*.html"
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        'h3': ['40px', '54px']
      },
      colors: {
        'brand': '#ffce00'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}