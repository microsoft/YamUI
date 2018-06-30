/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import { BaseComponentProps } from '../../util/BaseComponent/props';

export interface ProgressIndicatorProps extends BaseComponentProps {
  /**
   * Used by screen readers to convey percentComplete value
   */
  ariaValueText: string;

  /**
   * A decimal number that indicates in percentage the completeness of an operation
   * e.g. setting it to 0.1 equates to 10%
   */
  percentComplete: number;
}
