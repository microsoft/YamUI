/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import { CustomizableComponentProps } from '../Customizer';
import { BorderType } from '../Image/types';
export { BorderType };

export enum AvatarSize {
  /**
   * 72px.
   */
  XLARGE = 'xLarge',
  /**
   * 48px.
   */
  LARGE = 'large',
  /**
   * 40px;
   */
  MEDIUM = 'medium',
  /**
   * 32px.
   */
  SMALL = 'small',
  /**
   * 24px.
   */
  XSMALL = 'xSmall',
}

export interface AvatarProps extends CustomizableComponentProps {
  /**
   * Name of the person or object being represented. Will be used as accessible alt text.
   */
  name: string;

  /**
   * Element to be used as badge. You can set its height and width to fill the available area.
   */
  badgeContent?: React.ReactNode;

  /**
   * Short accessible description of the badge. Will be appended to name if provided.
   */
  badgeDescription?: string;

  /**
   * Type of border around the avatar.
   * @default BorderType.ROUND
   */
  borderType?: BorderType;

  /**
   * Image source URL.
   */
  imageUrl?: string;

  /**
   * XLARGE: 72px, LARGE: 48px, MEDIUM: 40px, SMALL: 32px, XSMALL: 24px.
   * @default AvatarSize.MEDIUM
   */
  size?: AvatarSize;

  /**
   * Will hide the image until it has loaded, then fade it in.
   * @default false
   */
  imageShouldFadeIn?: boolean;
}
