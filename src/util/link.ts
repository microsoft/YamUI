/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
const blacklist = [
  '#',
  'javascript://',
];

function isValidHref(url?: string) {
  return url && blacklist.indexOf(url) === -1;
}

export {
  isValidHref,
};
