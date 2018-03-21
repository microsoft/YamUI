/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */

/* eslint-disable no-console */
const path = require('path');
const fs = require('fs');
const util = require('util');
const { template } = require('lodash');
const HTMLtoJSX = require('htmltojsx');
const { JSDOM } = require('jsdom');

const writeFile = util.promisify(fs.writeFile);
const readFile = util.promisify(fs.readFile);

const converter = new HTMLtoJSX({ createClass: false });

async function generateIndex(svgNames, indexTemplate, destPath) {
  const contents = template(indexTemplate)({ svgNames });

  const destIndexPath = path.resolve(destPath, 'index.ts');
  console.log(`Writing index to ${destIndexPath}`);
  await writeFile(destIndexPath, contents, 'utf8');
}

async function generateComponent(svg, svgTemplate, templateData, destFilePath, optimizer) {
  try {
    const svgContents = await readFile(svg, 'utf8');
    const optimizedsvgContents = await optimizer.optimize(svgContents.toString());

    const { window } = new JSDOM(optimizedsvgContents.data);
    const { innerHTML } = window.document.querySelector('svg');

    const name = path.basename(svg, path.extname(svg));
    // HTMLtoJSX will wrap multiple nodes in a <div>, so remove it if present
    const jsx = converter
      .convert(innerHTML)
      .replace('<div>', '')
      .replace('</div>', '')
      .trim();
    const dirtyClassContents = template(svgTemplate)({
      name,
      jsx,
      ...templateData,
    });

    // HACK! Manually fix bad attribute names until this is fixed:
    // https://github.com/reactjs/react-magic/issues/157
    // Note that the repo has other similar issues open so our TS compiler may find them in new svgs
    const classContents = dirtyClassContents
      .replace(/gradientunits/g, 'gradientUnits')
      .replace(/gradienttransform/g, 'gradientTransform');

    console.log(`Writing svg React component to ${destFilePath}`);
    await writeFile(destFilePath, classContents, 'utf8');
  } catch (e) {
    console.error(e);
  }
}

module.exports = {
  generateComponent,
  generateIndex,
};
