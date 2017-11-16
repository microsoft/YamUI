/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import * as React from 'react';
import { HorizontalList, HorizontalListItem } from '../../components/HorizontalList';
import Image from '../../components/Image';
import './NavListItemAvatars.css';

export interface NavListItemAvatarsProps {
  avatars: string[];
}

export default class NavListItemAvatars extends React.PureComponent<NavListItemAvatarsProps, {}> {
  render() {
    const { avatars } = this.props;
    const items = avatars.map(avatar => (
      <HorizontalListItem key={avatar}>
        <Image
          className="y-nav-list-item-avatars__avatar"
          source={avatar}
          description=""
          width={16}
          height={16}
        />
      </HorizontalListItem>
    ));

    return <HorizontalList>{items}</HorizontalList>;
  }
}
