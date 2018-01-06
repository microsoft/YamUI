/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
const path = require('path');
const docgen = require('react-docgen');
const docgenParser = require('react-docgen-typescript');
const webpackConfig = require('./webpack.config.js');
const pkg = require('../../package.json');

const componentsWithoutPathLine = ['Icons'];

// prettier-ignore
const getComponentPathLine = (componentPath) => {
  const ext = path.extname(componentPath);
  const name = path.basename(componentPath, ext);
  if (componentsWithoutPathLine.indexOf(name) >= 0) {
    return '';
  }
  const dir = path.dirname(componentPath).replace(/.*\/src\//, 'yamui/dist/');
  return `import ${name} from '${dir}';`;
};

const root = path.resolve(__dirname, '../../');

const clearedStyles = {
  isolate: false,
  border: null,
  borderCollapse: null,
  color: null,
  fontFamily: null,
  fontSize: null,
  fontWeight: null,
  lineHeight: null,
  margin: null,
  marginTop: null,
  marginBottom: null,
  marginLeft: null,
  marginRight: null,
  padding: null,
  paddingTop: null,
  paddingBottom: null,
  paddingLeft: null,
  paddingRight: null,
  textAlign: null,
  whitespace: null,
  width: null,
};

module.exports = {
  title: `${pkg.productName} v${pkg.version}`,
  sections: [
    {
      name: 'Components',
      content: path.resolve(root, 'src/components/README.md'),
      components: path.resolve(root, 'src/components/*/*.{ts,tsx}'),
    },
    {
      name: 'Graphics',
      content: path.resolve(root, 'src/components/README.md'),
      components: path.resolve(root, 'src/components/Icon/docs/Icons.tsx'),
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
  require: [path.resolve(root, 'src/css/index.css')],
  serverPort: 5555,
  styleguideDir: path.resolve(root, 'build/docs'),
  styleguideComponents: {
    Wrapper: path.resolve(root, 'src/demos/ExampleWrapper'),
  },
  styles: {
    Markdown: {
      base: {
        ...clearedStyles,
      },
      article: {
        ...clearedStyles,
      },
      h1: {
        ...clearedStyles,
      },
      a: {
        ...clearedStyles,
      },
      h2: {
        ...clearedStyles,
      },
      h3: {
        ...clearedStyles,
      },
      h4: {
        ...clearedStyles,
      },
      h5: {
        ...clearedStyles,
      },
      h6: {
        ...clearedStyles,
      },
      p: {
        ...clearedStyles,
      },
    },
    Examples: {
      root: {
        ...clearedStyles,
      },
    },
    Heading: {
      heading: {
        ...clearedStyles,
      },
      heading1: {
        ...clearedStyles,
      },
      heading2: {
        ...clearedStyles,
      },
      heading3: {
        ...clearedStyles,
      },
      heading4: {
        ...clearedStyles,
      },
      heading5: {
        ...clearedStyles,
      },
      heading6: {
        ...clearedStyles,
      },
    },
    Para: {
      para: {
        ...clearedStyles,
      },
    },
    SectionHeading: {
      sectionName: {
        ...clearedStyles,
      },
      wrapper: {
        ...clearedStyles,
      },
    },
    Table: {
      table: {
        ...clearedStyles,
      },
      tableHead: {
        ...clearedStyles,
      },
      cellHeading: {
        ...clearedStyles,
      },
      cell: {
        ...clearedStyles,
      },
    },
    Pathline: {
      pathline: {
        ...clearedStyles,
        fontSize: '1.5rem',
        lineHeight: '2rem',
        color: '#646d7a',
        fontFamily: '"andale mono", "monotype.com", "lucida console", monospace',
      },
    },
  },
};
