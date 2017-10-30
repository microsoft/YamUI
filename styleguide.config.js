/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
const path = require('path');
const docgen = require('react-docgen');
const docgenParser = require('react-docgen-typescript');
const webpackConfig = require('./webpack.config.js');

const getComponentPathLine = (componentPath) => {
  const ext = path.extname(componentPath);
  const name = path.basename(componentPath, ext);
  const dir = path.dirname(componentPath).replace(/^src\//, 'yamui/dist/');
  return `import ${name} from '${dir}';`;
};

const baseStyles = path.resolve(__dirname, 'src/css/index.css');
const assetsDir = path.resolve(__dirname, 'config/styleguide/assets');
const componentGlob = 'src/components/**/*.{ts,tsx}';
const ignoredGlobs = [
  '**/index.ts',
  '**/index.tsx',
  '**/enums.ts',
  '**/*.test.ts',
  '**/*.test.tsx',
  '**/*.spec.ts',
  '**/*.spec.tsx',
  '**/components/Fabric/*',
  '**/components/Icon/icons/*',
];

module.exports = {
  title: 'YamUI',
  components: componentGlob,
  ignore: ignoredGlobs,
  skipComponentsWithoutExample: true,
  resolver: docgen.resolver.findAllComponentDefinitions,
  propsParser: docgenParser.parse,
  getComponentPathLine,
  webpackConfig,
  assetsDir,
  require: [baseStyles],
  serverPort: 5555,
  styleguideDir: 'build/docs',
  styleguideComponents: {
    Wrapper: path.join(__dirname, 'src/components/Fabric'),
  },
};
