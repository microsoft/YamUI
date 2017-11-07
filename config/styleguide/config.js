/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
const path = require('path');
const docgen = require('react-docgen');
const docgenParser = require('react-docgen-typescript');
const webpackConfig = require('./webpack.config.js');

const getComponentPathLine = (componentPath) => {
  const ext = path.extname(componentPath);
  const name = path.basename(componentPath, ext);
  const dir = path.dirname(componentPath).replace(/.*\/src\//, 'yamui/dist/');
  return `import ${name} from '${dir}';`;
};

const root = path.resolve(__dirname, '../../');

module.exports = {
  title: 'YamUI',
  sections: [
    {
      name: 'Components',
      content: path.resolve(root, 'src/components/README.md'),
      components: path.resolve(root, 'src/components/**/*.{ts,tsx}'),
    },
    {
      name: 'Demos',
      content: path.resolve(root, 'src/demos/README.md'),
      components: path.resolve(root, 'src/demos/**/*.{ts,tsx}'),
    },
  ],
  ignore: [
    '**/index.ts',
    '**/index.tsx',
    '**/enums.ts',
    '**/*.test.ts',
    '**/*.test.tsx',
    '**/*.spec.ts',
    '**/*.spec.tsx',
    '**/components/Fabric/*',
    '**/components/Icon/icons/*',
  ],
  skipComponentsWithoutExample: true,
  resolver: docgen.resolver.findAllComponentDefinitions,
  propsParser: docgenParser.parse,
  getComponentPathLine,
  webpackConfig,
  assetsDir: path.resolve(__dirname, 'assets'),
  context: {
    action: path.resolve(__dirname, 'context/action'),
    user: path.resolve(__dirname, 'context/user.json'),
    group: path.resolve(__dirname, 'context/group.json'),
    file: path.resolve(__dirname, 'context/file.json'),
  },
  require: [
    path.resolve(root, 'src/css/index.css'),
  ],
  serverPort: 5555,
  styleguideDir: path.resolve(root, 'build/docs'),
  styleguideComponents: {
    Wrapper: path.resolve(root, 'src/demos/ExampleWrapper'),
  },
};
