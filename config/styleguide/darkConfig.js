/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
const path = require('path');
const config = require('./config');

const root = path.resolve(__dirname, '../../');

module.exports = {
  ...config,
  theme: {
    color: {
      base: '#CCCCCC',
      light: '#898989',
      lightest: '#333333',
      link: '#1978c8',
      linkHover: '#f28a25',
      border: '#B5B5B5',
      name: '#7f9a44',
      type: '#b77daa',
      error: '#c00',
      baseBackground: '#000',
      codeBackground: '#0A0A0A',
      sidebarBackground: '#0A0A0A',
      ribbonBackground: '#f9970d',
      ribbonText: '#fff',
    },
  },
  styleguideDir: path.resolve(root, 'build/darkDocs'),
  ribbon: {
    url: 'http://localhost:5555?theme=default',
    text: 'Toggle Theme',
  },
  serverPort: 5556,
};
