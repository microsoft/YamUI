/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import * as React from 'react';
import Fabric from '../../../src/components/Fabric';

export interface ExampleWrapperState {
  visible: boolean;
}

export default class ExampleWrapper extends React.PureComponent<{}, ExampleWrapperState> {
  private observer: IntersectionObserver;

  constructor() {
    super();

    this.state = {
      visible: !this.supportsIntersectionObserver(),
    };

    this.observeElement = this.observeElement.bind(this);
    this.handleObservedElement = this.handleObservedElement.bind(this);
  }

  render() {
    const { visible } = this.state;

    return (
      <div ref={this.observeElement}>
        {visible && <Fabric>{this.props.children}</Fabric>}
      </div>
    );
  }

  private supportsIntersectionObserver() {
    return 'IntersectionObserver' in window;
  }

  private observeElement(element: HTMLElement | null) {
    if (!this.supportsIntersectionObserver() || this.observer != null || element == null) {
      return;
    }

    this.observer = new IntersectionObserver(this.handleObservedElement, { threshold: 0.1 });
    this.observer.observe(element);
  }

  private handleObservedElement(entries: IntersectionObserverEntry[]) {
    const pixels = entries.reduce((memo, entry) => memo + entry.intersectionRatio, 0);
    if (pixels > 0) {
      this.setState({ visible: true });
    }
  }
}
