/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import '../../yamui';
import * as React from 'react';
import { PersonaCoin, PersonaSize } from 'office-ui-fabric-react/lib/PersonaCoin';
import { CustomizableComponentProps, nullTheme } from '../Customizer';
import ScreenreaderText from '../ScreenreaderText';
import { AvatarSize } from './types';
import { BorderType } from '../Image/types';
import { getPersonaCoinStyles, getClassNames } from './Avatar.styles';
import { customizable } from '@uifabric/utilities';
import { ITheme } from '@uifabric/styling';

export { BorderType, AvatarSize };

const SizeMap = {
  [AvatarSize.XLARGE]: PersonaSize.size72,
  [AvatarSize.LARGE]: PersonaSize.size48,
  [AvatarSize.MEDIUM]: PersonaSize.size40,
  [AvatarSize.SMALL]: PersonaSize.size32,
  [AvatarSize.XSMALL]: PersonaSize.size24,
};

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

/**
 * An `Avatar` shows a thumbnail representation of both an individual or group.
 */
export class Avatar extends React.Component<AvatarProps> {
  public render() {
    const {
      badgeContent,
      imageUrl,
      name,
      badgeDescription,
      theme = nullTheme,
      size = AvatarSize.MEDIUM,
      imageShouldFadeIn = false,
      borderType = BorderType.ROUND,
    } = this.props;
    const classNames = getClassNames({ size, theme: theme as ITheme });
    const badge = badgeContent && <div className={classNames.badge}>{badgeContent}</div>;

    return (
      <div className={`y-avatar ${classNames.root}`}>
        <PersonaCoin
          imageUrl={imageUrl}
          size={SizeMap[size]}
          hidePersonaDetails={true}
          text={name}
          imageShouldFadeIn={imageShouldFadeIn}
          styles={getPersonaCoinStyles({ borderType, size })}
        />
        {badge}
        <ScreenreaderText>{badgeDescription ? `${name} - ${badgeDescription}` : name}</ScreenreaderText>
      </div>
    );
  }
}

@customizable('Avatar', ['theme'])
export default class CustomizableAvatar extends Avatar {}
