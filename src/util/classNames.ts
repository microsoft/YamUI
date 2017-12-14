/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
export type ClassName = string | undefined;

export const join = (classNames: ClassName[]): string => {
  if (!classNames.length) {
    return '';
  }

  return classNames.filter(className => !!className).join(' ');
};
