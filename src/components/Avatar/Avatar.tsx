/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import '../../yamui';
import * as React from 'react';
import { Persona, PersonaSize } from 'office-ui-fabric-react/lib/Persona';
import { BaseComponentProps } from '../../util/BaseComponent/props';
import ScreenreaderText from '../ScreenreaderText';
import { AvatarBorderType, AvatarSize } from './enums';
import './Avatar.css';

export { AvatarBorderType, AvatarSize };

const SizeMap = {
  [AvatarSize.XLARGE]: PersonaSize.size72,
  [AvatarSize.LARGE]: PersonaSize.size48,
  [AvatarSize.MEDIUM]: PersonaSize.size40,
  [AvatarSize.SMALL]: PersonaSize.size32,
  [AvatarSize.XSMALL]: PersonaSize.size24,
};

export interface AvatarProps extends BaseComponentProps {
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
   * @default AvatarBorderType.ROUND
   */
  borderType?: AvatarBorderType;

  /**
   * Image source URL.
   */
  imageUrl?: string;


  /**
   * XLARGE: 72px, LARGE: 48px, MEDIUM: 40px, SMALL: 32px, XSMALL: 24px.
   * @default AvatarSize.MEDIUM
   */
  size?: AvatarSize;
}

/**
 * An `Avatar` shows a thumbnail representation of both an individual or group.
 */
export default class Avatar extends React.PureComponent<AvatarProps, {}> {
  static defaultProps: Partial<AvatarProps> = {
    borderType: AvatarBorderType.ROUND,
    size: AvatarSize.MEDIUM,
  };

  render() {
    const { badgeContent, imageUrl, name, size } = this.props;
    const personaSize = SizeMap[size as string];

    const badge = badgeContent && (
      <div className={`y-avatar--badge y-avatar__size-${size}--badge`}>
        {badgeContent}
      </div>
    );

    return (
      <div className={this.getClasses()}>
        <Persona
          imageUrl={imageUrl}
          size={personaSize}
          hidePersonaDetails={true}
          primaryText={name}
        />
        {badge}
        <ScreenreaderText>{this.getAccessibleText()}</ScreenreaderText>
      </div>
    );
  }

  private getAccessibleText() {
    const { badgeDescription, name } = this.props;

    if (badgeDescription) {
      return `${name} - ${badgeDescription}`;
    }

    return name;
  }

  private getClasses() {
    const { borderType, className, size } = this.props;

    const classes: string[] = ['y-avatar', `y-avatar__size-${size}`];
    if (borderType !== Avatar.defaultProps.borderType) {
      classes.push(`y-avatar__borderType-${borderType}`);
    }
    if (className) {
      classes.push(className);
    }

    return classes.join(' ');
  }
}
