const getStories = require('./get-stories.js');

const scenarioBase = {
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
  misMatchThreshold: 0.001,
};
function getScenarios() {
  const storybook = getStories.getAllStories();
  const storybookScenarios = [];
  const kinds = Object.keys(storybook);
  kinds.forEach((kind) => {
    storybook[kind].forEach((story) => {
      storybookScenarios.push(Object.assign({}, scenarioBase, {
        label: `${kind} - ${story}`,
        url: `http://localhost:5555/iframe.html?selectedKind=${kind}&selectedStory=${story}&dataId=0`,
      }));
    });
  });

  return storybookScenarios;
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
