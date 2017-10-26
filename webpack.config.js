/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
module.exports = {
  module: {
    rules: [
      {
        test: /.css$/,
        loaders: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loaders: ['ts-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
};
