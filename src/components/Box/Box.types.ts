/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import { NestableBaseComponentProps } from '../../util/BaseComponent/props';
import { BackgroundColor } from '../Block';

export interface BoxProps extends NestableBaseComponentProps {
  /**
   * Called when box is clicked.
   */
  onClick?: (() => void);

  /**
   * Background color of the box.
   */
  backgroundColor?: BackgroundColor;
}
