module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      display: ['group-hover'],
      display: ['hover'],
    },
  },
  plugins: [
    require('daisyui'),
  ],
}
