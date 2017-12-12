/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */

/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');
const util = require('util');
const glob = require('glob');
const { template } = require('lodash');
const HTMLtoJSX = require('htmltojsx');
const SVGO = require('svgo');
const svgoConfig = require('./config.json');

const sourceIconsPath = path.resolve(__dirname, '../../assets/icons');
const destIconsPath = path.resolve(__dirname, '../../src/components/Icon/icons');
const templatePath = path.resolve(__dirname, 'template.ejs');

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);
const globFiles = util.promisify(glob);

const optimizer = new SVGO(svgoConfig);
const converter = new HTMLtoJSX({ createClass: false });

async function convertIcon(icon, iconTemplate) {
  try {
    const iconContents = await readFile(icon, 'utf8');
    const optimizedIconContents = await optimizer.optimize(iconContents.toString());

    const name = path.basename(icon, path.extname(icon));
    const jsx = converter.convert(optimizedIconContents.data).trim();
    const classContents = template(iconTemplate)({ name, jsx });

    const destIconPath = path.resolve(destIconsPath, `${name}.tsx`);
    console.log(`Writing icon to ${destIconPath}`);
    await writeFile(destIconPath, classContents, 'utf8');
  } catch (e) {
    console.error(e);
  }
}

(async () => {
  const iconTemplate = await readFile(templatePath);
  const icons = await globFiles(`${sourceIconsPath}/*.svg`, {});
  icons.forEach((icon) => {
    convertIcon(icon, iconTemplate);
  });
})();
