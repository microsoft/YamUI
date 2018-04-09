/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
export type ClassName = string | undefined;

export const join = (classNames: ClassName[]): string => {
  if (classNames.length === 0) {
    return '';
  }

  return classNames.filter(className => !!className).join(' ');
};

// Transform somethingLikeThis to something-like-this
export const camelCaseToDashed: (className: string) => string = className =>
  className.replace(/[A-Z]/g, letter => `-${letter.toLowerCase()}`);
