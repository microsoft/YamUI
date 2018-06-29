/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import { BaseComponentProps } from '../../util/BaseComponent/props';

export enum <%= name %>Type {
  BLACK = 'black',
  WHITE = 'white',
}

export interface <%= name %>Props extends BaseComponentProps {
  /**
   * Describe what this property does. This will also appear as part of this component's
   * documentation.
   * @default <%= name %>Type.BLACK
   */
  type?: <%= name %>Type;
}
