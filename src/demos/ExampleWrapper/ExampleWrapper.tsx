/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import 'intersection-observer'; /* Polyfill */
import * as React from 'react';
import VisibleRender from '../../../src/components/VisibleRender';
import Fabric from '../../../src/components/Fabric';

export default class ExampleWrapper extends React.Component {
  public render() {
    return <VisibleRender whenInView={this.getExample} />;
  }

  private getExample = () => {
    return <Fabric>{this.props.children}</Fabric>;
  };
}
