/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import '../../yamui';
import * as React from 'react';
import {
  ISpinnerProps as FabricSpinnerProps,
  Spinner as FabricSpinner,
  SpinnerSize as FabricSpinnerSize,
} from 'office-ui-fabric-react/lib/Spinner';
import { BaseComponentProps } from '../../util/BaseComponent/props';
import Text, { TextProps, TextColor, TextSize } from '../Text';
import { SpinnerSize } from './enums';
import './Spinner.css';

export { SpinnerSize };

const SizeMap = {
  [SpinnerSize.LARGE]: FabricSpinnerSize.large,
  [SpinnerSize.MEDIUM]: FabricSpinnerSize.medium,
  [SpinnerSize.SMALL]: FabricSpinnerSize.small,
  [SpinnerSize.XSMALL]: FabricSpinnerSize.xSmall,
};

export enum SpinnerColor {
  /**
   * Light theme.
   */
  LIGHT = 'light',
  /**
   * Dark theme.
   */
  DARK = 'dark',
}

export interface SpinnerProps extends BaseComponentProps {
  /**
   * Alternative label for screen readers.
   */
  ariaLabel?: string;

  /**
   * Politeness for label update announcement.
   * @default polite
   */
  ariaLive?: FabricSpinnerProps['ariaLive'];

  /**
   * Color of the spinner.
   * @default SpinnerColor.LIGHT
   */
  color?: SpinnerColor;

  /**
   * Label displayed besides/below the spinner.
   */
  label?: string;

  /**
   * Size of the spinner.
   * @default SpinnerSize.MEDIUM
   */
  size?: SpinnerSize;
}

export default class Spinner extends React.PureComponent<SpinnerProps, {}> {
  static defaultProps: Partial<SpinnerProps> = {
    ariaLive: 'polite',
    color: SpinnerColor.LIGHT,
    size: SpinnerSize.MEDIUM,
  };

  render() {
    const { label } = this.props;

    return (
      <div className={this.getClasses()}>
        <FabricSpinner {...this.getSpinnerProps()} />
        {label && <Text {...this.getLabelProps()}>{label}</Text>}
      </div>
    );
  }

  private getClasses() {
    const { className, color, size } = this.props;

    const classes: string[] = [
      'y-spinner',
      `y-spinner__color-${color}`,
      `y-spinner__size-${size}`,
    ];
    if (className) {
      classes.push(className);
    }

    return classes.join(' ');
  }

  private getSpinnerProps(): FabricSpinnerProps {
    const { ariaLabel, ariaLive, label, size } = this.props;

    return {
      ariaLive,
      ariaLabel: ariaLabel || label,
      className: 'y-spinner--circle',
      size: SizeMap[size as string],
    };
  }

  private getLabelProps(): TextProps {
    const { color, size } = this.props;

    return {
      color: color === SpinnerColor.DARK ? TextColor.WHITE : TextColor.PRIMARY,
      size: size === SpinnerSize.XSMALL ? TextSize.SMALL : TextSize.MEDIUM_SUB,
      className: 'y-spinner--label',
    };
  }
}
