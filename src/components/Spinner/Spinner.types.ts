/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import { BaseComponentProps } from '../../util/BaseComponent/props';

export enum SpinnerColor {
  /**
   * Light theme.
   */
  LIGHT = 'light',
  /**
   * Light theme spinner color with gray text.
   */
  METADATA = 'metadata',
  /**
   * Dark theme.
   */
  DARK = 'dark',
}

export enum SpinnerSize {
  LARGE = 'large',
  MEDIUM = 'medium',
  SMALL = 'small',
  XSMALL = 'xSmall',
}

export interface SpinnerProps extends BaseComponentProps {
  /**
   * Text displayed besides/below the spinner.
   */
  text: string;

  /**
   * Whether to hide text, and only render it for screenreaders.
   * @default false
   */
  hideText?: boolean;

  /**
   * Color of the spinner.
   * @default SpinnerColor.LIGHT
   */
  color?: SpinnerColor;

  /**
   * Size of the spinner.
   * @default SpinnerSize.MEDIUM
   */
  size?: SpinnerSize;

  /**
   * Will center the Spinner horizontally within its container.
   */
  isCentered?: boolean;
}
