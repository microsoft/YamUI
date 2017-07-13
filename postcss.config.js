/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
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
