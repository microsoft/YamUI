/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import * as React from 'react';
import {
  ProgressIndicator as OfficeFabricProgressIndicator,
} from 'office-ui-fabric-react/lib/ProgressIndicator';

export interface ProgressIndicatorProps {
  /**
   * Used by screen readers to convey percentComplete value
   */    
  ariaValueText: string;
  /**
   * A number that indicates in percentage the completeness of an operation
   */  
  percentComplete: number;
}

/**
 * A `ProgressIndicator` is used to show the progress of an ongoing operation
 * e.g. a file upload.
 */
export default class ProgressIndicator extends React.PureComponent<ProgressIndicatorProps, {}> {
  render() {
    return <OfficeFabricProgressIndicator {...this.props}/>;
  }
}
