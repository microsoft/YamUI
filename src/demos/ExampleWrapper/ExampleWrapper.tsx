/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import 'intersection-observer'; /* Polyfill */
import * as React from 'react';
import VisibilityObserver from '../../../src/components/VisibilityObserver';
import Fabric from '../../../src/components/Fabric';

export default class ExampleWrapper extends React.Component {
  public render() {
    return <VisibilityObserver renderInView={this.getExample} persistAfterInView={true} />;
  }

  private getExample = () => {
    return <Fabric>{this.props.children}</Fabric>;
  };
}
