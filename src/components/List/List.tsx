/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import '../../yamui';
import * as React from 'react';
import { NestableBaseComponentProps } from '../../util/BaseComponent/props';
import { join } from '../../util/classNames';
import Block, { TextSize } from '../Block';
import './List.css';

export { TextSize };

export interface ListProps extends NestableBaseComponentProps {
  /**
   * Whether this is an ordered or unordered list.
   */
  type: 'ordered' | 'unordered';

  /**
   * Determines font-size and line-height as usual, but also handles padding between list items
   * and margin below the list. If not provided, the List and ListItems will be auto-sized to the
   * closest parent Block with textSize.
   */
  textSize?: TextSize;
}

/**
 * A typographical list, rendering either a <ul> or <ol> element.
 */
export default class List extends React.Component<ListProps, {}> {
  render() {
    const { className, children, type, textSize } = this.props;
    const Tag = type === 'ordered' ? 'ol' : 'ul';
    const listClass = type === 'ordered' ? 'y-list__ordered' : 'y-list__unordered';

    const list = <Tag className={join(['y-list', listClass, className])}>{children}</Tag>;

    return textSize ? <Block textSize={textSize}>{list}</Block> : list;
  }
}
