/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import '../../yamui';
import * as React from 'react';
import { Enum } from 'typescript-string-enums';
import { BaseComponentProps } from '../../util/BaseComponent/props';
import { BaseButton } from 'office-ui-fabric-react/lib/Button';
import Icon, { IconSize, IconProps, IconName } from '../Icon';
import './button.css';

export const ButtonSize = Enum({
  REGULAR: 'regular',
  SMALL: 'small',
});
export type ButtonSize = Enum<typeof ButtonSize>;

export const ButtonColor = Enum({
  /**
   * Primary blue. Only one primary action should be offered at one time.
   */
  PRIMARY: 'primary',
  /**
   * Most buttons should be secondary if multiple actions are offered.
   */
  SECONDARY: 'secondary',
});
export type ButtonColor = Enum<typeof ButtonColor>;

export interface ButtonProps extends BaseComponentProps {
  /**
   * The visible button text.
   */
  text: string;
  /**
   * Button description. This must be provided if the button text is not descriptive enough.
   */
  ariaLabel?: string;
  /**
   * Button size. Defaults to Regular.
   */
  size?: ButtonSize;
  /**
   * The color describing the button's intent. Defaults to Primary.
   */
  color?: ButtonColor;
  /**
   * Whether this button should be disabled or not. Defaults to false.
   */
  disabled?: boolean;
  /**
   * Click callback handler. Will be provided the React synthetic event.
   */
  onClick?: (event: any) => void;
  /**
   * Optional icon
   */
  icon?: IconName;
}

export default class Button extends React.Component<ButtonProps, {}> {
  static defaultProps = {
    size: ButtonSize.REGULAR,
    color: ButtonColor.PRIMARY,
    disabled: false,
  };

  public render() {
    const { color, size, onClick, disabled, ariaLabel, text, icon } = this.props;
    return (
      <BaseButton className={this.getClasses()}
                  onClick={onClick}
                  disabled={disabled}
                  ariaLabel={ariaLabel}>
        {icon && (
          <span className="y-button--icon-wrapper">
            <Icon {...this.getIconProps()} />
          </span>
        )}
        {text}
      </BaseButton>
    );
  }

  private getIconProps (): IconProps {
    return {
      size: this.props.size === ButtonSize.SMALL ? IconSize.XSMALL : IconSize.SMALL,
      icon: this.props.icon as IconName,
      className: 'y-button--icon',
    };
  }

  private getClasses () {
    const classes: string[] = [
      'y-button',
      `y-button__size-${this.props.size}`,
      `y-button__color-${this.props.color}`,
    ];
    if (this.props.disabled) {
      classes.push(`y-button__state-disabled`);
    }
    if (this.props.className) {
      classes.push(this.props.className);
    }
    return classes.join(' ');
  }
}

