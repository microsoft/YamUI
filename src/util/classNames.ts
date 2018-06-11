/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import * as React from 'react';
import { NestableBaseComponentProps } from './BaseComponent/props';

export type ClassName = string | undefined;

export const join = (classNames: ClassName[]): string => {
  if (classNames.length === 0) {
    return '';
  }

  return classNames.filter(className => !!className).join(' ');
};

export const mapClassNameToElementsOfType = <T extends React.ComponentClass<NestableBaseComponentProps>>(
  node: React.ReactNode,
  className: string,
  type: T,
) => {
  return React.Children.map(node, element => {
    if (React.isValidElement(element) && element.type === type) {
      return React.cloneElement(element as React.ReactElement<NestableBaseComponentProps>, {
        className: `${(element.props as NestableBaseComponentProps).className} ${className}`,
      });
    }
    return element;
  });
};
