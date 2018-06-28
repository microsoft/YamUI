/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import '../../yamui';
import * as React from 'react';
import { BaseButton } from 'office-ui-fabric-react/lib/components/Button/BaseButton';
import { CustomizableComponentProps, defaultTheme, customizable } from '../Customizer';
import Block, { TextSize } from '../Block';
import Spinner, { SpinnerColor, SpinnerSize } from '../Spinner';
import { getBaseButtonStyles, getClassNames } from './Button.styles';
import {
  ButtonProps,
  ButtonColor,
  ButtonStatus,
  ButtonIconPosition,
  ButtonSize,
  ButtonType,
  LinkButtonProps,
  LoadingButtonProps,
} from './Button.types';

const hrefBlacklist = ['', '#', 'javascript://'];

/**
 * A `Button` allows a user to take an action.
 */
export class Button extends React.Component<ButtonProps & CustomizableComponentProps> {
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
      theme = defaultTheme,
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

@customizable('Button', ['theme'])
export default class CustomizableButton extends Button {}
