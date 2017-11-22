/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
/* eslint-disable */
module.exports = function(msg) {
  return function() {
    console.log(msg, arguments);
  };
};
/* eslint-enable */
