/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import '../../yamui';
import * as React from 'react';
import { Enum } from 'typescript-string-enums';
import {
  ISpinnerProps as FabricSpinnerProps,
  Spinner as FabricSpinner,
  SpinnerSize as FabricSpinnerSize,
} from 'office-ui-fabric-react/lib/Spinner';
import { BaseComponentProps } from '../../util/BaseComponent/props';
import Text, { TextProps, TextColor, TextSize } from '../Text';
import { SpinnerSize } from '../../util/enums/spinner';
import './spinner.css';

export { SpinnerSize };

const SizeMap = {
  [SpinnerSize.LARGE]: FabricSpinnerSize.large,
  [SpinnerSize.MEDIUM]: FabricSpinnerSize.medium,
  [SpinnerSize.SMALL]: FabricSpinnerSize.small,
  [SpinnerSize.XSMALL]: FabricSpinnerSize.xSmall,
};

export const SpinnerColor = Enum({
  /**
   * Light theme.
   */
  LIGHT: 'light',
  /**
   * Dark theme.
   */
  DARK: 'dark',
});
export type SpinnerColor = Enum<typeof SpinnerColor>;

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

  private getSpinnerProps(): FabricSpinnerProps {
    return {
      ariaLabel: this.props.ariaLabel || this.props.label,
      ariaLive: this.props.ariaLive,
      size: SizeMap[this.props.size as string],
      className: 'y-spinner--circle',
    };
  }

  private getLabelProps(): TextProps {
    return {
      color: this.props.color === SpinnerColor.DARK ? TextColor.WHITE : TextColor.PRIMARY,
      size: this.props.size === SpinnerSize.XSMALL ? TextSize.SMALL : TextSize.MEDIUM_SUB,
      className: 'y-spinner--label',
    };
  }

  private getClasses() {
    const { props } = this;
    const classes: string[] = [
      'y-spinner',
      `y-spinner__color-${props.color}`,
      `y-spinner__size-${props.size}`,
    ];
    if (this.props.className) {
      classes.push(this.props.className);
    }
    return classes.join(' ');
  }
}
