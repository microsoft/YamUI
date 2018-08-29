/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import '../../yamui';
import * as React from 'react';
import { CustomizableComponentProps, defaultTheme, customizable } from '../Customizer';
import {
  ISpinnerProps as FabricSpinnerProps,
  Spinner as FabricSpinner,
  SpinnerSize as FabricSpinnerSize,
} from 'office-ui-fabric-react/lib/Spinner';
import Text, { TextColor, TextSize } from '../Text';
import ScreenreaderText from '../ScreenreaderText';
import { SpinnerProps, SpinnerColor, SpinnerSize } from './Spinner.types';
import { join } from '../../util/classNames';
import { getClassNames, getFabricSpinnerStyles } from './Spinner.styles';

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

export class Spinner extends React.Component<SpinnerProps & CustomizableComponentProps> {
  public render() {
    const {
      theme = defaultTheme,
      text,
      hideText,
      color = SpinnerColor.LIGHT,
      size = SpinnerSize.MEDIUM,
      isCentered = false,
    } = this.props;

    const textSize = labelSizes[size];
    const classNames = getClassNames({ size, isCentered, theme, textSize });

    const label = hideText ? (
      <ScreenreaderText>{text}</ScreenreaderText>
    ) : (
      <Text className={classNames.label} color={labelColors[color]} size={textSize}>
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
    const { color = SpinnerColor.LIGHT, size, theme = defaultTheme } = this.props;

    return {
      size: fabricSpinnerSizes[size as SpinnerSize],
      styles: getFabricSpinnerStyles({ color, theme }),
    };
  }
}

/**
 * A `Spinner` is an outline of a circle which animates around itself indicating to the user that
 * things are processing. It is shown when we're unsure how long a task will take.
 */
@customizable('Spinner', ['theme'])
export default class CustomizableSpinner extends Spinner {}
