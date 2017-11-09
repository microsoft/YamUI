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
import ScreenreaderText from '../ScreenreaderText';
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
   * Text displayed besides/below the spinner.
   */
  text: string;

  /**
   * Whether to hide text, and only render it for screenreaders.
   * @default false
   */
  hideText?: boolean;

  /**
   * Color of the spinner.
   * @default SpinnerColor.LIGHT
   */
  color?: SpinnerColor;

  /**
   * Size of the spinner.
   * @default SpinnerSize.MEDIUM
   */
  size?: SpinnerSize;
}

/**
 * A `Spinner` is an outline of a circle which animates around itself indicating to the user that
 * things are processing. It is shown when we're unsure how long a task will take.
 */
export default class Spinner extends React.PureComponent<SpinnerProps, {}> {
  static defaultProps: Partial<SpinnerProps> = {
    hideText: false,
    color: SpinnerColor.LIGHT,
    size: SpinnerSize.MEDIUM,
  };

  render() {
    const { text, hideText } = this.props;

    const textComponent = hideText ? (
      <ScreenreaderText>{text}</ScreenreaderText>
    ) : (
      <Text {...this.getLabelProps()}>{text}</Text>
    );

    return (
      <div className={this.getClasses()}>
        <FabricSpinner {...this.getSpinnerProps()} />
        {textComponent}
      </div>
    );
  }

  private getClasses() {
    const { className, color, size } = this.props;

    const classes: string[] = ['y-spinner', `y-spinner__color-${color}`, `y-spinner__size-${size}`];
    if (className) {
      classes.push(className);
    }

    return classes.join(' ');
  }

  private getSpinnerProps(): FabricSpinnerProps {
    const { size } = this.props;

    return {
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
