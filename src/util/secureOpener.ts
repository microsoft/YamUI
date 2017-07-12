/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
function secureOpen(url: string) {
  const newWindow = window.open(url, '_blank');
  if (newWindow) {
    newWindow.opener = null;
  }
}

export {
  secureOpen,
};
