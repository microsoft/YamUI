/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import { Button as FabricButton } from 'office-ui-fabric-react/lib/components/Button/Button';
import { CustomizableComponentProps } from '../Customizer';
import { BaseButton } from 'office-ui-fabric-react/lib/components/Button/BaseButton';
import BaseIcon from '../Icon/BaseIcon';

export enum ButtonColor {
  /**
   * Primary blue. Only one primary action should be offered at one time.
   */
  PRIMARY = 'primary',
  /**
   * Most buttons should be secondary if multiple actions are offered.
   */
  SECONDARY = 'secondary',
}

export enum ButtonStatus {
  ENABLED = 'enabled',
  DISABLED = 'disabled',
  LOADING = 'loading',
}

export enum ButtonIconPosition {
  LEFT = 'left',
  RIGHT = 'right',
}

export enum ButtonSize {
  REGULAR = 'regular',
  SMALL = 'small',
}

export enum ButtonType {
  BUTTON = 'button',
  SUBMIT = 'submit',
  RESET = 'reset',
}

export type FabricButtonType = HTMLAnchorElement | HTMLDivElement | HTMLButtonElement | BaseButton | FabricButton;
export interface BaseButtonProps extends CustomizableComponentProps {
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
