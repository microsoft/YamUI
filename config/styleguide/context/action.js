/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
module.exports = msg => (...args) => {
  // eslint-disable-next-line no-console
  console.log(msg, ...args);
};
