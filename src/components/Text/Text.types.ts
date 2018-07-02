/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import { NestableBaseComponentProps } from '../../util/BaseComponent/props';

export enum TextColor {
  /**
   * Primary black text color
   */
  PRIMARY = 'primary',

  /**
   * Secondary dark gray text color
   */
  SECONDARY = 'secondary',

  /**
   * Tertiary color for metadata
   */
  METADATA = 'metadata',

  /**
   * For use on darker backgrounds
   */
  WHITE = 'white',

  /**
   * For use in error messages.
   */
  ERROR = 'error',

  /**
   * For use in interaction elements which have become disabled.
   */
  DISABLED = 'disabled',
}

export enum TextSize {
  /**
   * Large headers. Font-size 2.4rem, line-height 2.8rem.
   */
  XXLARGE = 'xxLarge',

  /**
   * Group headers. Font-size 2.2rem, line-height 2.8rem.
   */
  XLARGE = 'xLarge',

  /**
   * Promo headlines. Font-size 1.8rem, line-height 2.4rem.
   */
  LARGE = 'large',

  /**
   * Body text, default size. Font-size 1.5rem, line-height 2.0rem.
   */
  MEDIUM = 'medium',

  /**
   * Secondary text. Font-size 1.4rem, line-height 2.0rem.
   */
  MEDIUM_SUB = 'mediumSub',

  /**
   * Metadata. Font-size 1.2rem, line-height 1.6rem.
   */
  SMALL = 'small',

  /**
   * Very limited use. Font-size 1.0rem, line-height 1.6rem.
   */
  XSMALL = 'xSmall',
}

export interface TextProps extends NestableBaseComponentProps {
  /**
   * Text color
   */
  color?: TextColor;

  /**
   * A preset size which determines a font-size + line-height combination
   * supporting our vertical rhythm.
   */
  size?: TextSize;

  /**
   * Sets a max-width on the Text content, hiding the overflow with an ellipsis character.
   * You should generally use a px value, or 100%.
   */
  maxWidth?: string;

  /**
   * Sets font-weight: bold.
   */
  bold?: boolean;

  /**
   * Sets text to uppercase.
   */
  uppercase?: boolean;

  /**
   * If provided, will hide child content from screenreaders using aria-hidden while making
   * the given screenreaderText available to screenreaders.
   */
  screenreaderText?: string;
}
