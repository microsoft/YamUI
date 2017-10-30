/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
module.exports = msg => (...args) => {
  console.log(msg, ...args);
};
