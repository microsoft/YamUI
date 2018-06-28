/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import '../../yamui';
import * as React from 'react';
import { FocusableComponentProps, NestableBaseComponentProps } from '../../util/BaseComponent/props';

declare const ResizeObserver: ResizeObserver;

interface ResizeObserverEntry {
  contentRect: any;
  target: HTMLElement;
}

type ResizeObserver = new (cb: (entries: ResizeObserverEntry[]) => void) => {
  disconnect(): void;
  observe(): void;
  unobserve(): void;
};

export interface ContainerQueryProps extends NestableBaseComponentProps, FocusableComponentProps {
  /**
   * An object of `size` keys mapped to height/width queries. Example:
   * {
   *    small: {
   *      maxWidth: 500,
   *    },
   *    large: {
   *      minWidth: 501,
   *    },
   * }
   */
  query: Query;

  /**
   * A render prop which receives the key of the active query.
   */
  renderAt(size?: string | null): JSX.Element;
}

interface ContainerQueries {
  maxWidth?: number;
  minWidth?: number;
  maxHeight?: number;
  minHeight?: number;
}

interface Query {
  [key: string]: ContainerQueries;
}

const getMatchingQuerySize = (query: Query, height: number, width: number) => {
  for (const key of Object.keys(query)) {
    const { maxHeight, minHeight, maxWidth, minWidth } = query[key];
    if (maxHeight !== undefined && height > maxHeight) {
      continue;
    }
    if (minHeight !== undefined && height < minHeight) {
      continue;
    }
    if (maxWidth !== undefined && width > maxWidth) {
      continue;
    }
    if (minWidth !== undefined && width < minWidth) {
      continue;
    }
    return key;
  }
  return null;
};

/**
 * ContainerQuery allows for conditional rendering based on the component's
 * height or width. Provide a `renderAt` prop function to render your responsive
 * content based on the given size. For performance this function will only be
 * called when the size changes.
 */
export default class ContainerQuery extends React.Component<ContainerQueryProps> {
  public state: {
    currentSize?: string | null;
  };

  private observedElement: React.RefObject<HTMLDivElement>;
  private resizeObserver: any;

  constructor(props: ContainerQueryProps) {
    super(props);

    this.state = {};

    this.observedElement = React.createRef();

    this.resizeObserver = new ResizeObserver(([entry]) => {
      const { height, width } = entry.contentRect;
      const size = getMatchingQuerySize(props.query, height, width);

      if (this.state.currentSize === size) {
        return;
      }

      this.setState(() => ({ currentSize: size }));
    });
  }

  public componentDidMount() {
    this.observeElement();
  }

  public componentWillUnmount() {
    this.resizeObserver.disconnect();
  }

  public render() {
    return <div ref={this.observedElement}>{this.getContent()}</div>;
  }

  private getContent() {
    const { currentSize } = this.state;
    return this.props.renderAt(currentSize);
  }

  private observeElement() {
    if (!this.observedElement.current) {
      return;
    }
    this.resizeObserver.observe(this.observedElement.current);
  }
}
