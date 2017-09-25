/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import '../../yamui';
import * as React from 'react';
import { Enum } from 'typescript-string-enums';
import {
  Spinner as FabricSpinner,
  SpinnerSize as FabricSpinnerSize,
} from 'office-ui-fabric-react/lib/Spinner';
import { BaseComponentProps } from '../../util/BaseComponent/props';
import { SpinnerSize } from '../../util/enums/spinner';
import './spinner.css';

export { SpinnerSize };

const SizeMap = {
  [SpinnerSize.LARGE]: FabricSpinnerSize.large,
  [SpinnerSize.MEDIUM]: FabricSpinnerSize.medium,
  [SpinnerSize.SMALL]: FabricSpinnerSize.small,
  [SpinnerSize.XSMALL]: FabricSpinnerSize.xSmall,
};

export interface SpinnerProps extends BaseComponentProps {
  /**
   * Label displayed below the spinner.
   */
  label?: string;
  /**
   * LARGE: 48px, MEDIUM: 40px, SMALL: 32px, XSMALL: 24px. Defaults to medium.
   */
  size?: SpinnerSize;
}

export default class Spinner extends React.PureComponent<SpinnerProps, {}> {
  static defaultProps: Partial<SpinnerProps> = {
    size: SpinnerSize.MEDIUM,
  };

  render() {
    const { label, size } = this.props;
    const spinnerSize = SizeMap[size as string];

    return (
      <div className={this.getClasses()}>
        <FabricSpinner label={label} size={spinnerSize} />
      </div>
    );
  }

  private getClasses() {
    const classes: string[] = ['y-spinner'];
    if (this.props.className) {
      classes.push(this.props.className);
    }
    return classes.join(' ');
  }
}
