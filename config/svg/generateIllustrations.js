/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */

/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');
const util = require('util');
const glob = require('glob');
const SVGO = require('svgo');
const { generateComponent, generateIndex } = require('./generateSvgs');
const svgoConfig = require('./config.illustration.json');

const sourcePath = path.resolve(__dirname, '../../assets/illustrations');
const destPath = path.resolve(__dirname, '../../src/components/Illustration/illustrations');
const indexTemplatePath = path.resolve(__dirname, 'indexTemplate.ejs');
const svgTemplatePath = path.resolve(__dirname, 'illustrationTemplate.ejs');

const readFile = util.promisify(fs.readFile);
const globFiles = util.promisify(glob);

function getSizeFromFilePath(filePath) {
  const sizeRegex = /.+\/(\d+)\/.+\.svg/;
  const sizeResults = filePath.match(sizeRegex);

  if (sizeResults === null) {
    throw new Error(`Could not determine svg size from path: ${filePath}`);
  }

  return sizeResults[1];
}

function getSvgNames(illustrations) {
  return illustrations.map((illustration) => {
    const size = getSizeFromFilePath(illustration);
    const filename = path.basename(illustration, path.extname(illustration));
    return `${filename}${size}`;
  });
}

(async () => {
  const indexTemplate = await readFile(indexTemplatePath);
  const svgTemplate = await readFile(svgTemplatePath);
  const svgs = await globFiles(`${sourcePath}/**/*.svg`, {});
  const svgNames = getSvgNames(svgs);

  await generateIndex(svgNames, indexTemplate, destPath);
  svgs.forEach((svg) => {
    const size = getSizeFromFilePath(svg);
    const templateData = { size };
    const name = path.basename(svg, path.extname(svg));
    const destFilePath = path.resolve(destPath, `${name}${size}.tsx`);
    const svgoConfigExtension = {
      cleanupIDs: {
        prefix: `${name}${size}-`,
      },
    };
    const svgoFileConfig = svgoConfig;
    svgoFileConfig.plugins.push(svgoConfigExtension);
    const optimizer = new SVGO(svgoFileConfig);

    generateComponent(svg, svgTemplate, templateData, destFilePath, optimizer);
  });
})();
