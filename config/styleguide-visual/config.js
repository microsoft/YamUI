/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
const path = require('path');

module.exports = {
  url: `file://${path.resolve(__dirname, '../../build/docs/index.html')}`,
  dir: 'config/styleguide-visual/reference/',
  viewports: {
    desktop: {
      width: 600,
      height: 600,
      deviceScaleFactor: 2,
    },
  },
  launchOptions: {
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  },
  navigationOptions: {
    waitUntil: 'networkidle0',
  },
};
