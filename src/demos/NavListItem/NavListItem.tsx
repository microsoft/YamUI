/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import * as React from 'react';
import { FixedGridRow, FixedGridColumn } from '../../components/FixedGrid';
import Text, { TextSize } from '../../components/Text';
import NavListItemNotification from './NavListItemNotification';

export { default as Fade } from './Fade';
export { default as Slide } from './Slide';
export { default as SlideInLeft } from './SlideInLeft';
export { default as NavListItemAvatars } from './NavListItemAvatars';
export { default as NavListItemBadge } from './NavListItemBadge';
export { default as NavListItemNotification } from './NavListItemNotification';

export interface NavListItemProps {
  group: string;
  avatars: string[];
  count: number;
}

export default class NavListItem extends React.PureComponent<NavListItemProps, {}> {
  render() {
    const { group, avatars, count } = this.props;

    return (
      <div>
        <FixedGridRow>
          <FixedGridColumn>
            <Text size={TextSize.LARGE}>{group}</Text>
          </FixedGridColumn>
          <FixedGridColumn fixed={true}>
            <Text size={TextSize.XSMALL}>{count}</Text>
          </FixedGridColumn>
        </FixedGridRow>
        <NavListItemNotification avatars={avatars} count={count} />
      </div>
    );
  }
}
