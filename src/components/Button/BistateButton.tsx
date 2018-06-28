/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import '../../yamui';
import * as React from 'react';
import Button from './Button';
import { ButtonProps, FabricButtonType } from './Button.types';

export type CustomizableProps = 'color' | 'text' | 'ariaLabel' | 'icon' | 'iconPosition' | 'className';

export type CustomizableButtonProps = Pick<ButtonProps, CustomizableProps>;

export interface BistateButtonOwnProps {
  activeProps: CustomizableButtonProps;
}

export type BistateButtonProps = BistateButtonOwnProps & ButtonProps;

export interface BistateButtonState {
  hasFocus: boolean;
  isHovering: boolean;
}

const inactiveState = { hasFocus: false, isHovering: false };

/**
 * A `Button` that renders differently when 'active'; if the mouse is hovering or it has focus
 */
export default class BistateButton extends React.Component<BistateButtonProps, BistateButtonState> {
  constructor(props: BistateButtonProps) {
    super(props);
    this.state = { ...inactiveState };
  }

  public render() {
    const propsForState = this.isActive() ? this.props.activeProps : undefined;
    const secondaryText = this.isActive() ? this.props.text : this.props.activeProps.text;

    const { children, activeProps, ...buttonProps } = this.props;
    const props: ButtonProps = {
      secondaryText,
      ...buttonProps,
      ...propsForState,
      onFocus: this.onFocus,
      onMouseEnter: this.onMouseEnter,
      onBlur: this.onBlur,
      onMouseLeave: this.onMouseLeave,
    };

    return <Button {...props} />;
  }

  private isActive = () => this.state.isHovering || this.state.hasFocus;

  private onFocus = (e: React.FocusEvent<FabricButtonType>) => {
    if (this.props.onFocus) {
      this.props.onFocus(e);
    }
    this.setState({ hasFocus: true });
  };

  private onMouseEnter = (e: React.MouseEvent<FabricButtonType>) => {
    if (this.props.onMouseEnter) {
      this.props.onMouseEnter(e);
    }
    this.setState({ isHovering: true });
  };

  private onBlur = (e: React.FocusEvent<FabricButtonType>) => {
    if (this.props.onBlur) {
      this.props.onBlur(e);
    }
    this.setState({ hasFocus: false });
  };

  private onMouseLeave = (e: React.MouseEvent<FabricButtonType>) => {
    if (this.props.onMouseLeave) {
      this.props.onMouseLeave(e);
    }
    this.setState({ isHovering: false });
  };
}
