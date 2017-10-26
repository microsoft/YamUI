/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import '../../yamui';
import * as React from 'react';
import { BaseButton } from 'office-ui-fabric-react/lib/components/Button/BaseButton';
import { BaseComponentProps } from '../../util/BaseComponent/props';
import Icon, { IconSize, IconProps, IconName } from '../Icon';
import { ButtonColor, ButtonIconPosition, ButtonSize } from './enums';
import './button.css';

export { ButtonColor, ButtonIconPosition, ButtonSize };

const hrefBlacklist = ['', '#', 'javascript://'];

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
   * The color describing the button's intent. Defaults to primary.
   */
  color?: ButtonColor;

  /**
   * Optional icon.
   */
  icon?: IconName;

  /**
   * Icon position.
   */
  iconPosition?: ButtonIconPosition;

  /**
   * Button size. Defaults to regular.
   */
  size?: ButtonSize;

  /**
   * Focus lost callback handler. Will provide the React synthetic event.
   */
  onBlur?: (event: any) => void;

  /**
   * Click callback handler. Will provide the React synthetic event.
   */
  onClick?: (event: any) => void;

  /**
   * Focus callback handler. Will provide the React synthetic event.
   */
  onFocus?: (event: any) => void;

  /**
   * Hover callback handler. Will provide the React synthetic event.
   */
  onMouseEnter?: (event: any) => void;

  /**
   * Hover out callback handler. Will provide the React synthetic event.
   */
  onMouseLeave?: (event: any) => void;
}

export interface RegularButtonProps extends BaseButtonProps {
  /**
   * Disabled buttons cannot have a link href.
   */
  href?: void;

  /**
   * Whether this button should be disabled or not. Defaults to false.
   */
  disabled?: boolean;
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
    iconPosition: ButtonIconPosition.LEFT,
  };

  render() {
    const {
      ariaLabel,
      icon,
      iconPosition,
      text,
      onBlur,
      onClick,
      onFocus,
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
