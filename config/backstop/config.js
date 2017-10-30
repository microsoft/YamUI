/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
const getAllExamples = require('./get-examples.js');

// const standardThreshold = 0.001;
// const flakyThreshold = 0.25;


const baseScenario = {
  label: 'YamUI',
  url: 'http://localhost:5555?visualDiff=true',
  delay: 1000,
  misMatchThreshold: 0.001,
};

// const flakyScenarios = [
//   'Spinner',
// ];

// function isFlakyScenario(kind) {
//   return flakyScenarios.indexOf(kind) >= 0;
// }

// function getScenarios() {
//   const exampleLibrary = getAllExamples();

//   return Object.keys(exampleLibrary).reduce((allScenarios, componentName) => {
//     const examples = exampleLibrary[componentName];

//     return examples.reduce((scenarios, exampleName) => {
//       const scenario = Object.assign({}, baseScenario, {
//         label: `${componentName} ${exampleName}`,
//         url: 'http://localhost:5555?visualDiff=true',
//         selectors: [
//           `[data-preview="${componentName}"][data-example="${exampleName}"]`,
//         ],
//         misMatchThreshold: isFlakyScenario(componentName) ? flakyThreshold : standardThreshold,
//       });

//       scenarios.push(scenario);
//       return scenarios;
//     }, allScenarios);
//   }, []);
// }

function getSelectors() {
  const exampleLibrary = getAllExamples();
  const selectors = [];
  const componentNames = Object.keys(exampleLibrary);

  componentNames.forEach((component) => {
    const examples = exampleLibrary[component];
    examples.forEach((example) => {
      selectors.push(`[data-preview="${component}"][data-example="${example}"]`);
    });
  });

  return selectors;
}

const singleScenario = Object.assign({}, baseScenario, {
  selectors: getSelectors(),
});

const config = {
  id: 'storybook_tests',
  fileNameTemplate: '{scenarioLabel}_{selectorLabel}_{viewportLabel}',
  debug: false,
  viewports: [
    // We can test more widths when we start building responsive components
    {
      name: 'phone_portrait',
      width: 375,
      height: 625,
    },
  ],
  scenarios: [singleScenario],
  paths: {
    casper_scripts: 'config/backstop/scripts',
    bitmaps_reference: 'config/backstop/reference',
    bitmaps_test: 'build/visualdiff/test',
    html_report: 'build/visualdiff/html_report',
    ci_report: 'build/visualdiff/ci_report',
  },
  casperFlags: [
    '--log-level=error',
  ],
  engine: 'phantomjs',
  report: ['browser', 'CI'],
  openReport: false,
};

module.exports = config;
