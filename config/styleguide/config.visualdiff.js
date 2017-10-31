/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
const path = require('path');
const config = require('./config');

module.exports = Object.assign({}, config, {
  showSidebar: false,
  require: config.require.concat([
    path.resolve(__dirname, 'assets/animations.css'),
  ]),
});
