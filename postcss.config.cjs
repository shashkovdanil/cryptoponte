module.exports = {
  plugins: [
    require('tailwindcss/nesting'),
    require('tailwindcss'),
    require('@csstools/postcss-oklab-function', {
      preserve: true,
      subFeatures: {
        displayP3: false,
      },
    }),
    require('autoprefixer'),
  ],
}
