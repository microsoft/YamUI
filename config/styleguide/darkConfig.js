/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
const config = require('./config');

module.exports = {
  ...config,
  title: `${config.title} DARK`,
  theme: {
    color: {
      base: '#cccccc',
      light: '#898989',
      lightest: '#333333',
      link: '#1978c8',
      linkHover: '#f28a25',
      border: '#b5b5b5',
      name: '#7f9a44',
      type: '#b77daa',
      baseBackground: '#000000',
      codeBackground: '#0a0a0a',
      sidebarBackground: '#0a0a0a',
    },
  },
};
