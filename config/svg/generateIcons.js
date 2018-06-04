/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */

/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');
const util = require('util');
const glob = require('glob');
const SVGO = require('svgo');
const { generateComponent, generateIndex } = require('./generateSvgs');
const svgoConfig = require('./config.icon.json');

const sourcePath = path.resolve(__dirname, '../../assets/icons');
const destPath = path.resolve(__dirname, '../../src/components/Icon/icons');
const indexTemplatePath = path.resolve(__dirname, 'indexTemplate.ejs');
const iconTemplatePath = path.resolve(__dirname, 'iconTemplate.ejs');

const readFile = util.promisify(fs.readFile);
const globFiles = util.promisify(glob);

const optimizer = new SVGO(svgoConfig);

function getSvgNames(icons) {
  return icons.map(icon => path.basename(icon, path.extname(icon)));
}

(async () => {
  const indexTemplate = await readFile(indexTemplatePath);
  const iconTemplate = await readFile(iconTemplatePath);
  const icons = await globFiles(`${sourcePath}/*.svg`, {});
  const svgNames = getSvgNames(icons);

  await generateIndex(svgNames, indexTemplate, destPath);
  icons.forEach(icon => {
    const name = path.basename(icon, path.extname(icon));
    const destIconPath = path.resolve(destPath, `${name}.tsx`);
    generateComponent(icon, iconTemplate, {}, destIconPath, optimizer);
  });
})();
