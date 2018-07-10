/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
/* eslint-disable */
const redirectToDark = () => {
  if (document.title.match(/DARK/) && !window.location.href.match(/theme=dark/)) {
    window.location = window.location.href + '?theme=dark';
  }
};

redirectToDark();
window.onhashchange = redirectToDark;
/* eslint-enable */
