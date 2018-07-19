/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import { BaseComponentProps } from '../../util/BaseComponent/props';

export interface HighContrastSelectorProps extends BaseComponentProps {
  /**
   * Element to be rendered.
   */
  regular: React.ReactNode;

  /**
   * High-Contrast equivalent element to be rendered when in high-contrast mode.
   */
  highContrast: React.ReactNode;
}
