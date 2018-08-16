/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import '../../yamui';
import * as React from 'react';
import { LayoutList, LayoutListItem } from '../LayoutList';
import { ActionLinkListProps } from './ActionLinkList.types';
import ActionLink from '../ActionLink';
import { getClassNames } from './ActionLinkList.styles';
import { join } from '../../util/classNames';

/**
 * A vertical list of ActionLinks, with padding optimized for the sidebar or rightrail.
 */
export default class ActionLinkList extends React.Component<ActionLinkListProps> {
  public render() {
    const classes = getClassNames();

    return (
      <LayoutList direction="vertical" className={join(['y-actionLinkList', classes.root])}>
        {this.props.items.map(this.renderItem)}
      </LayoutList>
    );
  }

  private renderItem = (item: React.ReactElement<ActionLink>, index: number) => {
    return <LayoutListItem key={index}>{item}</LayoutListItem>;
  };
}
