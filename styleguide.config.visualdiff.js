/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
const path = require('path');
const config = require('./styleguide.config');

module.exports = Object.assign({}, config, {
  showSidebar: false,
  require: config.require.concat([
    path.resolve(__dirname, 'config/styleguide/assets/animations.css'),
  ]),
});
