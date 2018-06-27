/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /.css$/,
        loaders: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loaders: 'ts-loader',
        options: {
          transpileOnly: true,
        },
      },
      {
        test: require.resolve('resize-observer-polyfill'),
        use: [
          {
            loader: 'expose-loader',
            options: 'ResizeObserver',
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  plugins: [new ForkTsCheckerWebpackPlugin()],
};
