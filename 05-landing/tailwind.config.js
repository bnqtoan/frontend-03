module.exports = {
  mode: 'jit',
  purge: [
    "**/*.html"
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true
    },
    extend: {
      borderRadius: {
        10: '10px'
      },
      colors: {
        "turquoise": "#2EC5CE",
        gray: {
          100: 'rgba(244, 245, 247, 1)'
        }
      },
      maxWidth: {
        540: '540px'
      },
      fontFamily: {
        "body" : "'Inter', sans-serif"
      },
      fontSize: {
        'h1': ['72px', {lineHeight: '98px'}],
        'h2': ['48px', {lineHeight: '64px'}],
        'h5': ['24px', {lineHeight: '32px'}],
        'subTitle': ['18px', {lineHeight: '28px'}],
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}