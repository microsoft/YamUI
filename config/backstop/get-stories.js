/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */

// NOTE: This is hacky and brittle. Find a better way to get story types/names
//       https://github.com/storybooks/storybook/issues/775
const fs = require('fs');
const glob = require('glob');

const GROUPNAME_REGEX = /^\s*\(\s*('|")(.*?)('|"),/;
const STORYNAME_REGEX = /\.add\s*\(\s*['|"].*?['|"],/g;


function hasStoryTypes(text) {
  return text.indexOf('storiesOf') > -1 && text.match(/\/\/.\s?storiesOf/) === null;
}
function getStoryTypeName(text) {
  const nameMatches = text.match(GROUPNAME_REGEX);
  if (!nameMatches) {
    return '';
  }

  return nameMatches[2];
}


function getStoryNames(text) {
  const names = [];
  const nameMatches = text.match(STORYNAME_REGEX);
  if (!nameMatches) {
    return names;
  }

  nameMatches.forEach((match) => {
    const name = match.substring(6, match.length - 2);
    names.push(name);
  });
  return names;
}


function getStoriesFromFile(file) {
  const stories = {};

  const fullText = fs.readFileSync(file).toString();
  if (!hasStoryTypes(fullText)) {
    return stories;
  }

  const groupChunks = fullText.split('storiesOf');
  groupChunks.shift();

  groupChunks.forEach((text) => {
    const groupName = getStoryTypeName(text);
    if (!groupName) {
      return;
    }

    stories[groupName] = stories[groupName] || [];
    stories[groupName] = stories[groupName].concat(getStoryNames(text));
  });

  return stories;
}

function combineStories(storybook, stories) {
  const newStorybook = Object.assign({}, storybook);
  Object.keys(stories).forEach((type) => {
    newStorybook[type] = newStorybook[type] || [];
    newStorybook[type] = newStorybook[type].concat(stories[type]);
  });
  return newStorybook;
}

function getAllStories() {
  let storybook = {};
  const storyFiles = glob.sync('src/stories/*.tsx');
  storyFiles.forEach((file) => {
    const stories = getStoriesFromFile(file);
    storybook = combineStories(storybook, stories);
  });
  return storybook;
}


module.exports = {
  getAllStories,
};
