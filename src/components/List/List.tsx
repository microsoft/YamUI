/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import '../../yamui';
import * as React from 'react';
import { NestableBaseComponentProps } from '../../util/BaseComponent/props';
import { join } from '../../util/classNames';
import Block, { TextSize } from '../Block';
import { getClassNames } from './List.styles';

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
 * A typographical list, rendering either a `<ul>` or `<ol>` element.
 */
export default class List extends React.Component<ListProps> {
  public render() {
    const { className, children, type, textSize } = this.props;
    const Tag = type === 'ordered' ? 'ol' : 'ul';
    const classNames = getClassNames({ type, textSize });
    const list = <Tag className={join(['y-list', className, classNames.root])}>{children}</Tag>;

    return textSize ? <Block textSize={textSize}>{list}</Block> : list;
  }
}
