/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import '../../yamui';
import * as React from 'react';
import { Enum } from 'typescript-string-enums';
import { BaseComponentProps } from '../../util/BaseComponent/props';
import { BaseButton } from 'office-ui-fabric-react/lib/components/Button/BaseButton';
import Icon, { IconSize, IconProps, IconName } from '../Icon';
import './button.css';

const hrefBlacklist = ['', '#', 'javascript://'];

export const ButtonSize = Enum({
  REGULAR: 'regular',
  SMALL: 'small',
});
export type ButtonSize = Enum<typeof ButtonSize>;

export const IconPosition = Enum({
  LEFT: 'left',
  RIGHT: 'right',
});
export type IconPosition = Enum<typeof IconPosition>;

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

export interface BaseButtonProps extends BaseComponentProps {
  /**
   * The visible button text.
   */
  text: string;

  /**
   * Button description. This must be provided if the button text is not descriptive enough.
   */
  ariaLabel?: string;

  /**
   * Button size. Defaults to regular.
   */
  size?: ButtonSize;

  /**
   * The color describing the button's intent. Defaults to primary.
   */
  color?: ButtonColor;

  /**
   * Click callback handler. Will provide the React synthetic event.
   */
  onClick?: (event: any) => void;

  /**
   * Hover callback handler. Will provide the React synthetic event.
   */
  onMouseEnter?: (event: any) => void;

  /**
   * Hover out callback handler. Will provide the React synthetic event.
   */
  onMouseLeave?: (event: any) => void;

  /**
   * Focus callback handler. Will provide the React synthetic event.
   */
  onFocus?: (event: any) => void;

  /**
   * Focus lost callback handler. Will provide the React synthetic event.
   */
  onBlur?: (event: any) => void;

  /**
   * Optional icon.
   */
  icon?: IconName;

  /**
   * Icon position.
   */
  iconPosition?: IconPosition;
}

export interface RegularButtonProps extends BaseButtonProps {
  /**
   * Whether this button should be disabled or not. Defaults to false.
   */
  disabled?: boolean;

  /**
   * Disabled buttons cannot have a link href.
   */
  href?: void;
}

export interface LinkButtonProps extends BaseButtonProps {
  /**
   * If provided, will render a Link styled as a Button
   */
  href: string;

  /**
   * Link buttons cannot be disabled.
   */
  disabled?: void;
}

export type ButtonProps = RegularButtonProps | LinkButtonProps;

export default class Button extends React.PureComponent<ButtonProps, {}> {
  static propTypes = {
    // TypeScript does not support negated types. Using PropTypes custom validator instead of
    // runtime validations.
    href(props: LinkButtonProps, propName: string, componentName: string) {
      const href = props.href;
      if (typeof href !== 'string') {
        return;
      }
      if (hrefBlacklist.indexOf(href) > -1) {
        return new Error(
          `Invalid prop ${propName} supplied to ${componentName}: "${href}".
          Please use a Button for actions, NavigationLink (or Button with href) for navigation.`,
        );
      }
    },
  };

  static defaultProps = {
    size: ButtonSize.REGULAR,
    color: ButtonColor.PRIMARY,
    iconPosition: IconPosition.LEFT,
  };

  render() {
    const { props } = this;
    const {
      ariaLabel,
      text,
      icon,
      onClick,
      onMouseEnter,
      onMouseLeave,
      onFocus,
      onBlur,
      iconPosition,
    } = props;

    const disabled = (props as RegularButtonProps).disabled;
    const href = (props as LinkButtonProps).href;

    const leftIcon = icon &&
      iconPosition === IconPosition.LEFT && (
        <span className="y-button--icon-wrapper-left">
          <Icon {...this.getIconProps()} />
        </span>
      );
    const rightIcon = icon &&
      iconPosition === IconPosition.RIGHT && (
        <span className="y-button--icon-wrapper-right">
          <Icon {...this.getIconProps()} />
        </span>
      );

    return (
      <BaseButton
        className={this.getClasses()}
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onFocus={onFocus}
        onBlur={onBlur}
        disabled={disabled}
        ariaLabel={ariaLabel}
        href={href}
      >
        {leftIcon}
        {text}
        {rightIcon}
      </BaseButton>
    );
  }

  private getIconProps(): IconProps {
    return {
      size: this.props.size === ButtonSize.SMALL ? IconSize.XSMALL : IconSize.SMALL,
      icon: this.props.icon as IconName,
      className: 'y-button--icon',
    };
  }

  private getClasses() {
    const { props } = this;
    const classes: string[] = [
      'y-button',
      `y-button__size-${props.size}`,
      `y-button__color-${props.color}`,
    ];
    if ((props as RegularButtonProps).disabled) {
      classes.push(`y-button__state-disabled`);
    }
    if (props.className) {
      classes.push(props.className);
    }
    return classes.join(' ');
  }
}
