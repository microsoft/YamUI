/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
const fs = require('fs');
const glob = require('glob');

const exampleRegex = /"data-example": "(.+)"/g;
const mdFileRegex = /.*\/([A-Z]\w+)\.md/;

function getExamplesFromFile(file) {
  const fileText = fs.readFileSync(file).toString();
  const examples = [];
  let result;
  /* eslint-disable no-cond-assign */
  while ((result = exampleRegex.exec(fileText)) !== null) {
    examples.push(result[1]);
  }

  return examples;
}

function getAllExamples() {
  const examples = {};
  const markdownFiles = glob.sync('src/components/*/*.md');
  markdownFiles.forEach((file) => {
    const componentName = file.match(mdFileRegex)[1];
    examples[componentName] = getExamplesFromFile(file);
  });
  return examples;
}


module.exports = getAllExamples;
