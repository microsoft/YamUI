/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
const path = require('path');

module.exports = {
  url: `file://${path.resolve(__dirname, '../../build/docs/index.html')}`,
  dir: 'config/styleguide-visual/reference/',
  sandbox: false,
};
