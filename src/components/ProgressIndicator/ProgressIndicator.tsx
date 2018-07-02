/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import * as React from 'react';
import { join } from '../../util/classNames';
import { CustomizableComponentProps, defaultTheme, customizable } from '../Customizer';
import { ProgressIndicator as OfficeFabricProgressIndicator } from 'office-ui-fabric-react/lib/ProgressIndicator';
import { getProgressIndicatorStyles } from './ProgressIndicator.styles';
import { ProgressIndicatorProps } from './ProgressIndicator.types';

/**
 * A `ProgressIndicator` is used to show the progress of an ongoing operation
 * e.g. a file upload.
 */
export class ProgressIndicator extends React.Component<ProgressIndicatorProps & CustomizableComponentProps> {
  public render() {
    const { ariaValueText, percentComplete, className, theme = defaultTheme } = this.props;
    return (
      <OfficeFabricProgressIndicator
        ariaValueText={ariaValueText}
        percentComplete={percentComplete}
        barHeight={4}
        className={join(['y-progress-indicator', className])}
        styles={getProgressIndicatorStyles({ percentComplete, theme })}
      />
    );
  }
}

@customizable('ProgressIndicator', ['theme'])
export default class CustomizableProgressIndicator extends ProgressIndicator {}
