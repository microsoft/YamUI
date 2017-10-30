/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import '../../yamui';
import * as React from 'react';
import { BaseButton } from 'office-ui-fabric-react/lib/components/Button/BaseButton';
import { BaseComponentProps } from '../../util/BaseComponent/props';
import Icon, { IconSize, IconProps, IconName } from '../Icon';
import { ButtonColor, ButtonIconPosition, ButtonSize } from './enums';
import './Button.css';

export { ButtonColor, ButtonIconPosition, ButtonSize };

const hrefBlacklist = ['', '#', 'javascript://'];

export interface BaseButtonProps extends BaseComponentProps {
  /**
   * Visible button text.
   */
  text: string;

  /**
   * Additional label that must be provided if the button text is not descriptive enough.
   */
  ariaLabel?: string;

  /**
   * Color describing the button's intent.
   * @default ButtonColor.PRIMARY
   */
  color?: ButtonColor;

  /**
   * Optional icon.
   */
  icon?: IconName;

  /**
   * Icon position.
   * @default ButtonIconPosition.LEFT
   */
  iconPosition?: ButtonIconPosition;

  /**
   * Button size.
   * @default ButtonSize.REGULAR
   */
  size?: ButtonSize;

  /**
   * Click callback handler.
   */
  onClick?: (event: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => void;

  /**
   * Focus callback handler.
   */
  onFocus?: (event: React.FocusEvent<HTMLAnchorElement | HTMLButtonElement>) => void;

  /**
   * Blur callback handler.
   */
  onBlur?: (event: React.FocusEvent<HTMLAnchorElement | HTMLButtonElement>) => void;

  /**
   * Mouse enter callback handler.
   */
  onMouseEnter?: (event: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => void;

  /**
   * Mouse leave callback handler.
   */
  onMouseLeave?: (event: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => void;
}

export interface RegularButtonProps extends BaseButtonProps {
  /**
   * Buttons cannot have a link.
   */
  href?: void;

  /**
   * Whether this button should be disabled or not.
   */
  disabled?: boolean;
}

export interface LinkButtonProps extends BaseButtonProps {
  /**
   * URL or a URL fragment that the link points to. If provided, the component will be rendered as a
   * link styled as a button.
   */
  href: string;

  /**
   * Links cannot be disabled.
   */
  disabled?: void;
}

export type ButtonProps = RegularButtonProps | LinkButtonProps;

/**
 * A `Button` allows a user to take an action.
 */
export default class Button extends React.PureComponent<ButtonProps, {}> {
  static propTypes = {
    // TypeScript does not support negated types, so we need to do a runtime validation instead.
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
    color: ButtonColor.PRIMARY,
    iconPosition: ButtonIconPosition.LEFT,
    size: ButtonSize.REGULAR,
  };

  render() {
    const {
      text,
      ariaLabel,
      icon,
      iconPosition,
      onClick,
      onFocus,
      onBlur,
      onMouseEnter,
      onMouseLeave,
    } = this.props;

    const disabled = (this.props as RegularButtonProps).disabled;
    const href = (this.props as LinkButtonProps).href;

    const leftIcon = icon &&
      iconPosition === ButtonIconPosition.LEFT && (
        <span className="y-button--icon-wrapper-left">
          <Icon {...this.getIconProps()} />
        </span>
      );
    const rightIcon = icon &&
      iconPosition === ButtonIconPosition.RIGHT && (
        <span className="y-button--icon-wrapper-right">
          <Icon {...this.getIconProps()} />
        </span>
      );

    return (
      <BaseButton
        ariaLabel={ariaLabel}
        className={this.getClasses()}
        disabled={disabled}
        href={href}
        onBlur={onBlur}
        onClick={onClick}
        onFocus={onFocus}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        {leftIcon}
        {text}
        {rightIcon}
      </BaseButton>
    );
  }

  private getIconProps(): IconProps {
    const { icon, size } = this.props;

    return {
      className: 'y-button--icon',
      icon: icon as IconName,
      size: size === ButtonSize.SMALL ? IconSize.XSMALL : IconSize.SMALL,
    };
  }

  private getClasses() {
    const { className, color, disabled, size } = this.props;

    const classes: string[] = [
      'y-button',
      `y-button__color-${color}`,
      `y-button__size-${size}`,
    ];
    if (disabled) {
      classes.push(`y-button__state-disabled`);
    }
    if (className) {
      classes.push(className);
    }

    return classes.join(' ');
  }
}
