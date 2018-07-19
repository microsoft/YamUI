/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import '../../yamui';
import * as React from 'react';
import { join } from '../../util/classNames';
import { HighContrastSelectorProps } from './HighContrastSelector.types';
import { getClassNames } from './HighContrastSelector.styles';

/**
 * Enables given component to render it's equivalent high contrast asset
 * via -ms-high-contrast CSS media feature for MS browsers
 */
export class HighContrastSelector extends React.Component<HighContrastSelectorProps> {
  public render() {
    const { regular, highContrast, className } = this.props;
    const classNames = getClassNames();

    return (
      <div className={join(['y-highContrastSelector', className])}>
        <div className={classNames.regular}>{regular}</div>
        <div className={classNames.highContrast}>{highContrast}</div>
      </div>
    );
  }
}

export default HighContrastSelector;
