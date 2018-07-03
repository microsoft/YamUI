/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import '../../yamui';
import * as React from 'react';
import { BaseComponentProps } from '../../util/BaseComponent/props';

export interface SizeObserverProps extends BaseComponentProps {
  /**
   * An object of `size` keys mapped to height/width queries. Example:
   *
   *     {
   *        small: {
   *          maxWidth: 500,
   *        },
   *        large: {
   *          minWidth: 501,
   *        },
   *     }
   */
  query: SizeQueriesMap;

  /**
   * A render prop which receives the key of the active query.
   */
  renderAt(size?: string): React.ReactNode;
}

export interface SizeObserverState {
  currentSize?: string;
}

export interface SizeQueries {
  maxWidth?: number;
  minWidth?: number;
  maxHeight?: number;
  minHeight?: number;
}

export interface SizeQueriesMap {
  [key: string]: SizeQueries;
}

const getMatchingQuerySize = (query: SizeQueriesMap, height: number, width: number) => {
  for (const key of Object.keys(query)) {
    const { maxHeight = Infinity, maxWidth = Infinity, minHeight = 0, minWidth = 0 } = query[key];

    if (height <= maxHeight && height >= minHeight && width <= maxWidth && width >= minWidth) {
      return key;
    }
  }
};

/**
 * `SizeObserver` uses the the `ResizeObserver` API to allow conditional child rendering based on the component's height
 * or width. Provide a `renderAt` prop function to render your responsive content based on the given size. For
 * performance, this function will only be called when the size changes.
 */
export default class SizeObserver extends React.Component<SizeObserverProps, SizeObserverState> {
  private observedElement: React.RefObject<HTMLDivElement>;
  private resizeObserver: ResizeObserver;

  constructor(props: SizeObserverProps) {
    super(props);

    this.state = {};

    this.observedElement = React.createRef();
    this.resizeObserver = new ResizeObserver(this.onSizeChange);
  }

  public componentDidMount() {
    this.observe();
  }

  public componentWillUnmount() {
    this.disconnect();
  }

  public render() {
    return <div ref={this.observedElement}>{this.getObserverChildren()}</div>;
  }

  private getObserverChildren() {
    const { currentSize } = this.state;

    return this.props.renderAt(currentSize);
  }

  private onSizeChange = ([entry]: ResizeObserverEntry[]) => {
    const { height, width } = entry.contentRect;
    const size = getMatchingQuerySize(this.props.query, height, width);

    if (this.state.currentSize === size) {
      return;
    }

    this.setState(() => ({ currentSize: size }));
  };

  private observe() {
    if (!this.observedElement.current) {
      return;
    }
    this.resizeObserver.observe(this.observedElement.current);
  }

  private disconnect() {
    this.resizeObserver.disconnect();
  }
}
