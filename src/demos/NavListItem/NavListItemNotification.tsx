/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import * as React from 'react';
import { FixedGridRow, FixedGridColumn } from '../../components/FixedGrid';
import { Fade, SlideInLeft, NavListItemBadge, NavListItemAvatars } from './NavListItem';
import './NavListItemNotification.css';

export interface NavListItemNotificationProps {
  avatars: string[];
  count: number;
  previousCount?: number;
  onAnimationEnd?: () => void;
}

export default class NavListItemNotification extends React.PureComponent<
  NavListItemNotificationProps,
  {}
> {
  render() {
    const { avatars, count, previousCount, onAnimationEnd } = this.props;

    return (
      <div className="y-nav-list-item-notification">
        <div className="y-nav-list-item-notification-wrapper">
          <Fade showAfter={500} duration={500} hideAfter={6000} onAnimationEnd={onAnimationEnd}>
            <FixedGridRow>
              <FixedGridColumn>
                <div className="y-nav-list-item-notification__avatars">
                  <SlideInLeft showAfter={1000} duration={500} hideAfter={4000} translateX="130">
                    <NavListItemAvatars avatars={avatars} />
                  </SlideInLeft>
                </div>
              </FixedGridColumn>
              <FixedGridColumn fixed={true}>
                <div className="y-nav-list-item-notification__badge">
                  <NavListItemBadge value={count} previousValue={previousCount} />
                </div>
              </FixedGridColumn>
            </FixedGridRow>
          </Fade>
        </div>
      </div>
    );
  }
}
