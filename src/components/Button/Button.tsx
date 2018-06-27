/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import '../../yamui';
import * as React from 'react';
import { Button as FabricButton } from 'office-ui-fabric-react/lib/components/Button/Button';
import { BaseButton } from 'office-ui-fabric-react/lib/components/Button/BaseButton';
import { BaseComponentProps } from '../../util/BaseComponent/props';
import Block, { TextSize } from '../Block';
import Spinner, { SpinnerColor, SpinnerSize } from '../Spinner';
import { ButtonColor, ButtonStatus, ButtonIconPosition, ButtonSize, ButtonType } from './types';
import { getBaseButtonStyles, getClassNames } from './Button.styles';
import BaseIcon from '../Icon/BaseIcon';
import { customizable } from '@uifabric/utilities';

export { ButtonColor, ButtonStatus, ButtonIconPosition, ButtonSize, ButtonType };

const hrefBlacklist = ['', '#', 'javascript://'];
export type FabricButtonType = HTMLAnchorElement | HTMLDivElement | HTMLButtonElement | BaseButton | FabricButton;
export interface BaseButtonProps extends BaseComponentProps {
  /**
   * Visible button text.
   */
  text: string;

  /**
   * Alternative state visible button text. Used to determine maximum possible width of button
   */
  secondaryText?: string;

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
  icon?: typeof BaseIcon;

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
   * Button type.
   * @default ButtonType.BUTTON
   */
  type?: ButtonType;

  /**
   * Click callback handler.
   */
  onClick?: React.MouseEventHandler<FabricButtonType>;

  /**
   * Focus callback handler.
   */
  onFocus?: React.FocusEventHandler<FabricButtonType>;

  /**
   * Blur callback handler.
   */
  onBlur?: React.FocusEventHandler<FabricButtonType>;

  /**
   * Mouse enter callback handler.
   */
  onMouseEnter?: React.MouseEventHandler<FabricButtonType>;

  /**
   * Mouse leave callback handler.
   */
  onMouseLeave?: React.MouseEventHandler<FabricButtonType>;
}

export interface RegularButtonProps extends BaseButtonProps {
  /**
   * Buttons cannot have a link.
   */
  href?: void;

  /**
   * Status of this button.
   * @default ButtonStatus.ENABLED
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

  /**
   * Links cannot have a type.
   */
  type?: undefined;
}

export type ButtonProps = RegularButtonProps | LoadingButtonProps | LinkButtonProps;

/**
 * A `Button` allows a user to take an action.
 */
@customizable('Button', ['theme'])
export default class Button extends React.Component<ButtonProps> {
  public static propTypes = {
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

  public render() {
    const {
      ariaLabel,
      onClick,
      onFocus,
      onBlur,
      onMouseEnter,
      onMouseLeave,
      text,
      secondaryText,
      icon: Icon,
      className = '',
      type = ButtonType.BUTTON,
      size = ButtonSize.REGULAR,
      color = ButtonColor.SECONDARY,
      fullWidth = false,
      iconPosition = ButtonIconPosition.LEFT,
      status = ButtonStatus.ENABLED,
      theme,
    } = this.props;

    const href = (this.props as LinkButtonProps).href;

    const classNames = getClassNames({ status, iconPosition });

    const buttonIcon = Icon && (
      <span className={classNames.iconWrapper}>
        <Icon />
      </span>
    );
    const leftIcon = iconPosition === 'left' && buttonIcon;
    const rightIcon = iconPosition === 'right' && buttonIcon;

    return (
      <BaseButton
        ariaLabel={ariaLabel}
        className={`y-button ${className}`}
        disabled={status !== ButtonStatus.ENABLED}
        href={href}
        type={href ? '' : type}
        onBlur={onBlur}
        onClick={onClick}
        onFocus={onFocus}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        styles={getBaseButtonStyles({ theme, size, color, fullWidth, status })}
      >
        <Block
          textSize={size === ButtonSize.SMALL ? TextSize.SMALL : TextSize.MEDIUM_SUB}
          className={classNames.content}
          textAlign="center"
        >
          {leftIcon}
          {text}
          {rightIcon}
          <div className={classNames.secondaryText}>
            {leftIcon}
            {secondaryText}
            {rightIcon}
          </div>
        </Block>
        {status === ButtonStatus.LOADING && (
          <span className={classNames.spinner}>
            <Spinner
              color={color === ButtonColor.PRIMARY ? SpinnerColor.DARK : SpinnerColor.LIGHT}
              size={size === ButtonSize.SMALL ? SpinnerSize.XSMALL : SpinnerSize.SMALL}
              text={(this.props as LoadingButtonProps).loadingText}
              hideText={true}
              isCentered={true}
            />
          </span>
        )}
      </BaseButton>
    );
  }
}
