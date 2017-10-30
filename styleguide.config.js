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

module.exports = {
  title: 'YamUI',
  sections: [
    {
      name: 'Components',
      content: 'src/components/README.md',
      components: 'src/components/**/*.{ts,tsx}',
    },
    {
      name: 'Demos',
      content: 'src/demos/README.md',
      components: 'src/demos/**/*.{ts,tsx}',
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
  assetsDir: path.resolve(__dirname, 'config/styleguide/assets'),
  context: {
    action: path.resolve(__dirname, 'config/styleguide/context/action'),
    user: path.resolve(__dirname, 'config/styleguide/context/user.json'),
    group: path.resolve(__dirname, 'config/styleguide/context/group.json'),
    file: path.resolve(__dirname, 'config/styleguide/context/file.json'),
  },
  require: [
    path.resolve(__dirname, 'src/css/index.css'),
  ],
  serverPort: 5555,
  styleguideDir: 'build/docs',
  styleguideComponents: {
    Wrapper: path.join(__dirname, 'src/components/Fabric'),
  },
};
