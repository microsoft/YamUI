/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import 'intersection-observer'; /* Polyfill */
import * as React from 'react';
import VisibilityObserver from '../../../src/components/VisibilityObserver';
import AppContainer from '../../../src/components/AppContainer';
import { darkTheme } from '../../../src/components/Customizer';

export default class ExampleWrapper extends React.Component {
  public render() {
    return <VisibilityObserver renderInView={this.getExample} />;
  }

  private getExample = () => {
    const theme = window.location.href.match(/theme=dark/) ? darkTheme : undefined;
    return <AppContainer theme={theme}>{this.props.children}</AppContainer>;
  };
}
