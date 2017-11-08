/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import '../../yamui';
import * as React from 'react';
import { BaseButton } from 'office-ui-fabric-react/lib/components/Button/BaseButton';
import { BaseComponentProps } from '../../util/BaseComponent/props';
import Block, { TextSize } from '../Block';
import Spinner, { SpinnerColor, SpinnerSize } from '../Spinner';
import { ButtonColor, ButtonStatus, ButtonIconPosition, ButtonSize } from './enums';
import Icon, { IconName } from '../Icon';
import './Button.css';

export { ButtonColor, ButtonStatus, ButtonIconPosition, ButtonSize };

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
   * Stretch the button to fill the available horizontal space.
   */
  fullWidth?: boolean;

  /**
   * Color describing the button's intent.
   * @default ButtonColor.SECONDARY
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
   * Status of this button.
   */
  status?: ButtonStatus;

  /**
   * Screenreader text for loading state.
   */
  loadingText?: string;
}

export interface LoadingButtonProps extends RegularButtonProps {
  status: ButtonStatus.LOADING;
  loadingText: string;
}

export interface LinkButtonProps extends BaseButtonProps {
  /**
   * URL or a URL fragment that the link points to. If provided, the component will be rendered as a
   * link styled as a button.
   */
  href: string;

  /**
   * Links cannot be disabled nor loading.
   */
  status?: void;
}

export type ButtonProps = RegularButtonProps | LoadingButtonProps | LinkButtonProps;

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
    color: ButtonColor.SECONDARY,
    iconPosition: ButtonIconPosition.LEFT,
    size: ButtonSize.REGULAR,
    status: ButtonStatus.ENABLED,
  };

  render() {
    const { ariaLabel, onClick, onFocus, onBlur, onMouseEnter, onMouseLeave } = this.props;

    const href = (this.props as LinkButtonProps).href;
    const status = (this.props as RegularButtonProps).status;
    const isDisabled = status === ButtonStatus.DISABLED || status === ButtonStatus.LOADING;

    return (
      <BaseButton
        ariaLabel={ariaLabel}
        className={this.getClasses()}
        disabled={isDisabled}
        href={href}
        onBlur={onBlur}
        onClick={onClick}
        onFocus={onFocus}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        {this.getContents()}
        {this.isLoading() && this.getSpinner()}
      </BaseButton>
    );
  }

  private getContents() {
    const { icon, iconPosition, size, text } = this.props;

    const textSize = size === ButtonSize.SMALL ? TextSize.SMALL : TextSize.MEDIUM_SUB;

    const buttonIcon = icon && (
      <span className={`y-button--icon-wrapper-${iconPosition}`}>
        <Icon className="y-button--icon" icon={icon} />
      </span>
    );

    const className = this.isLoading() ? 'y-button--content__hidden' : '';

    return (
      <Block textSize={textSize} className={className}>
        {iconPosition === 'left' && buttonIcon}
        {text}
        {iconPosition === 'right' && buttonIcon}
      </Block>
    );
  }

  private getSpinner() {
    const { color, size } = this.props;

    const loadingText = (this.props as LoadingButtonProps).loadingText;

    const spinnerColor = color === ButtonColor.PRIMARY ? SpinnerColor.DARK : SpinnerColor.LIGHT;
    const spinnerSize = size === ButtonSize.SMALL ? SpinnerSize.XSMALL : SpinnerSize.SMALL;

    return (
      <span className="y-button--spinner">
        <Spinner color={spinnerColor} size={spinnerSize} text={loadingText} hideText={true} />
      </span>
    );
  }

  private getClasses() {
    const { className, color, status, size, fullWidth } = this.props;

    const classes: string[] = [
      'y-button',
      `y-button__color-${color}`,
      `y-button__size-${size}`,
    ];
    if (status !== ButtonStatus.ENABLED) {
      classes.push(`y-button__state-${status}`);
    }
    if (fullWidth) {
      classes.push('y-button__fullWidth');
    }
    if (className) {
      classes.push(className);
    }

    return classes.join(' ');
  }

  private isLoading() {
    return this.props.status === ButtonStatus.LOADING;
  }
}
