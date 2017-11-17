/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import * as React from 'react';
import { 
  ProgressIndicator as OfficeFabricProgressIndicator, 
} from 'office-ui-fabric-react/lib/ProgressIndicator';
import './ProgressIndicator.css';

export interface ProgressIndicatorProps {
  /**
   * Used by screen readers to convey percentComplete value
   */

  ariaValueText: string;
  /**
   * A decimal number that indicates in percentage the completeness of an operation
   * e.g. setting it to 0.1 equates to 10%
   */

  percentComplete: number;
}

/**
 * A `ProgressIndicator` is used to show the progress of an ongoing operation
 * e.g. a file upload.
 */
export default class ProgressIndicator extends React.PureComponent<ProgressIndicatorProps, {}> {
  render() {
    const { ariaValueText, percentComplete } = this.props;
    return (
      <div className="y-progress-indicator">
        <OfficeFabricProgressIndicator
          ariaValueText={ariaValueText}
          percentComplete={percentComplete}
        />
      </div>
    );
  }
}
