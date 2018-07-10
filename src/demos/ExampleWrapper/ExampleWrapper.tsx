/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import 'intersection-observer'; /* Polyfill */
import * as React from 'react';
import VisibilityObserver from '../../../src/components/VisibilityObserver';
import Fabric from '../../../src/components/Fabric';
import Customizer, { defaultTheme, darkTheme } from '../../../src/components/Customizer';

export default class ExampleWrapper extends React.Component {
  public render() {
    return <VisibilityObserver renderInView={this.getExample} />;
  }

  private getExample = () => {
    const theme = window.location.href.split('?')[1] === 'theme=dark' ? darkTheme : defaultTheme;
    return (
      <Fabric>
        <Customizer settings={{ theme }}>{this.props.children}</Customizer>
      </Fabric>
    );
  };
}
