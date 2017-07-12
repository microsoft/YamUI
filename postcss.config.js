const path = require('path');

module.exports = () => ({
  parser: 'postcss-scss',
  plugins: {
    'postcss-import': {
      root: path.resolve(__dirname),
      path: [''],
    },
    precss: {},
    autoprefixer: {},
  },
});
