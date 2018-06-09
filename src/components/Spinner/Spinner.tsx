/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import '../../yamui';
import * as React from 'react';
import {
  ISpinnerProps as FabricSpinnerProps,
  Spinner as FabricSpinner,
  SpinnerSize as FabricSpinnerSize,
} from 'office-ui-fabric-react/lib/Spinner';
import { BaseComponentProps } from '../../util/BaseComponent/props';
import Text, { TextColor, TextSize } from '../Text';
import ScreenreaderText from '../ScreenreaderText';
import { SpinnerColor, SpinnerSize } from './types';
import { join } from '../../util/classNames';
import { getClassNames, getFabricSpinnerStyles } from './Spinner.styles';

export { SpinnerColor, SpinnerSize };

const labelColors = {
  [SpinnerColor.LIGHT]: TextColor.PRIMARY,
  [SpinnerColor.METADATA]: TextColor.METADATA,
  [SpinnerColor.DARK]: TextColor.WHITE,
};

const labelSizes = {
  [SpinnerSize.LARGE]: TextSize.MEDIUM_SUB,
  [SpinnerSize.MEDIUM]: TextSize.MEDIUM_SUB,
  [SpinnerSize.SMALL]: TextSize.MEDIUM_SUB,
  [SpinnerSize.XSMALL]: TextSize.SMALL,
};

const fabricSpinnerSizes = {
  [SpinnerSize.LARGE]: FabricSpinnerSize.large,
  [SpinnerSize.MEDIUM]: FabricSpinnerSize.medium,
  [SpinnerSize.SMALL]: FabricSpinnerSize.small,
  [SpinnerSize.XSMALL]: FabricSpinnerSize.xSmall,
};

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

  /**
   * Will center the Spinner horizontally within its container.
   */
  isCentered?: boolean;
}

/**
 * A `Spinner` is an outline of a circle which animates around itself indicating to the user that
 * things are processing. It is shown when we're unsure how long a task will take.
 */
export default class Spinner extends React.Component<SpinnerProps> {
  public render() {
    const { text, hideText, color = SpinnerColor.LIGHT, size = SpinnerSize.MEDIUM, isCentered = false } = this.props;
    const classNames = getClassNames(size, isCentered);

    const label = hideText ? (
      <ScreenreaderText>{text}</ScreenreaderText>
    ) : (
      <Text className={classNames.label} color={labelColors[color]} size={labelSizes[size]}>
        {text}
      </Text>
    );

    return (
      <div className={join(['y-spinner', classNames.root])}>
        <FabricSpinner {...this.getSpinnerProps()} />
        {label}
      </div>
    );
  }

  private getSpinnerProps(): FabricSpinnerProps {
    const { color = SpinnerColor.LIGHT, size } = this.props;

    return {
      size: fabricSpinnerSizes[size as SpinnerSize],
      styles: getFabricSpinnerStyles(color),
    };
  }
}
