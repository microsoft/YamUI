/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
const { stringify } = require('querystring');
const getStories = require('./get-stories.js');

const baseUrl = 'http://localhost:5555/iframe.html';
const standardThreshold = 0.001;
const flakyThreshold = 0.25;

const baseScenario = {
  label: '',
  url: '',
  hideSelectors: [],
  removeSelectors: [],
  selectorExpansion: true,
  selectors: [
    'body',
  ],
  readyEvent: null,
  delay: 350,
};

const flakyScenarios = [
  'Spinner',
];

function isFlakyScenario(kind) {
  return flakyScenarios.indexOf(kind) >= 0;
}

function getScenarios() {
  const storybook = getStories.getAllStories();

  return Object.keys(storybook).reduce((storybookScenarios, kind) => {
    const stories = storybook[kind];
    return stories.reduce((storyScenarios, story) => {
      const params = {
        selectedKind: kind,
        selectedStory: story,
        visualDiff: true,
        dataId: 0,
      };

      const scenario = Object.assign({}, baseScenario, {
        label: `${kind} - ${story}`,
        url: `${baseUrl}?${stringify(params)}`,
        misMatchThreshold: isFlakyScenario(kind) ? flakyThreshold : standardThreshold,
      });

      storyScenarios.push(scenario);
      return storyScenarios;
    }, storybookScenarios);
  }, []);
}

const config = {
  id: 'storybook_tests',
  debug: false,
  viewports: [
    // We can test more widths when we start building responsive components
    {
      name: 'phone_portrait',
      width: 375,
      height: 625,
    },
  ],
  scenarios: getScenarios(),
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
